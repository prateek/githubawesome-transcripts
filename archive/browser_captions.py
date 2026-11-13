"""Retrieve the public transcript panel with an ephemeral Camofox session."""

import json
import os
import re
import signal
import subprocess
import sys
import time
from datetime import datetime
from pathlib import Path
from urllib.request import ProxyHandler, Request, build_opener

from .ingest import CaptionsUnavailable
from .transcript import VIDEO_ID

RUNTIME = Path(__file__).resolve().parents[1] / "scripts/camofox/camofox-runtime.py"
EXTRACT = Path(__file__).with_name("caption_panel.js").read_text()
PAGE_STATE = Path(__file__).with_name("page_state.js").read_text()
SHORT_LIMIT = 180


def panel_summary(document):
    metadata = (document or {}).get("metadata") or {}
    stamps = [row.get("timestamp") for row in (document or {}).get("segments") or []]
    return {
        "rows": len(stamps),
        "first_rows": stamps[:2],
        "last_rows": stamps[-2:],
        "id": metadata.get("id"),
        "channel_id": metadata.get("channel_id"),
        "duration": metadata.get("duration"),
        "has_title": bool(metadata.get("title")),
        "description_length": len(metadata.get("description") or ""),
    }


def panel_captions(document, video_id, channel_id, short=False):
    metadata = document["metadata"]
    if metadata.get("id") != video_id or metadata.get("channel_id") != channel_id:
        raise ValueError("Video does not belong to the configured channel")
    if not metadata.get("title") or not metadata.get("description"):
        raise ValueError("Incomplete watch metadata")
    events = []
    for row in document["segments"]:
        stamp, text = row.get("timestamp", ""), row.get("text", "")
        if not isinstance(stamp, str) or not re.fullmatch(r"(?:\d+:)?\d{1,2}:\d{2}", stamp):
            raise ValueError("Invalid transcript panel timestamp")
        if not isinstance(text, str) or not text.strip():
            raise ValueError("Empty transcript panel row")
        start = 0
        for part in stamp.split(":"):
            start = start * 60 + int(part)
        # Panel timestamps are whole seconds, so consecutive rows can share one.
        if events and start * 1000 < events[-1]["tStartMs"]:
            raise ValueError("Unordered transcript panel rows")
        events.append({"tStartMs": start * 1000, "dDurationMs": 0, "segs": [{"utf8": text}]})
    if not events:
        raise CaptionsUnavailable("Transcript panel did not load")
    duration = metadata.get("duration")
    last = events[-1]["tStartMs"] / 1000
    if duration:
        complete = duration - 60 <= last <= duration
    else:
        # A blocked player omits the duration and discovery has none for shorts,
        # so a short can only be bounded by the longest a short may run.
        complete = short and last <= SHORT_LIMIT
    if events[0]["tStartMs"] > 30_000 or not complete:
        raise ValueError("Transcript panel may be incomplete")
    captions = {
        "source_format": "youtube-transcript-panel-v1",
        "segments": document["segments"],
        "events": events,
    }
    return metadata, captions, "und", "unknown"


class BrowserCaptions:
    def __enter__(self):
        self.process = subprocess.Popen(
            [sys.executable, str(RUNTIME), "run"], stdout=subprocess.PIPE, text=True
        )
        try:
            self.receipt = json.loads(self.process.stdout.readline())
            if not self.receipt.get("ready"):
                raise OSError("Camofox startup failed")
            self.opener = build_opener(ProxyHandler({}))
            return self
        except BaseException:
            self.__exit__(None, None, None)
            raise

    def __exit__(self, *_):
        self.process.send_signal(signal.SIGINT)
        output, _ = self.process.communicate(timeout=60)
        receipts = [json.loads(line) for line in output.splitlines() if line.startswith("{")]
        if self.process.returncode or not any(r.get("cleaned") for r in receipts):
            raise OSError("Camofox cleanup failed")

    def api(self, path, data=None, method=None):
        request = Request(
            self.receipt["baseUrl"] + path,
            data=json.dumps(data).encode() if data is not None else None,
            headers={"Content-Type": "application/json"},
            method=method,
        )
        with self.opener.open(request, timeout=45) as response:
            result = json.loads(response.read(2_000_000))
        if result.get("ok") is False:
            raise OSError("Camofox operation failed")
        return result

    def screenshot(self, tab_id):
        path = f"/tabs/{tab_id}/screenshot?userId={self.receipt['userId']}"
        with self.opener.open(self.receipt["baseUrl"] + path, timeout=45) as response:
            return response.read(20_000_000)

    def diagnose(self, error, evaluate, tab_id, entry, opened, polls, document):
        report = {
            "error": f"{type(error).__name__}: {error}",
            "transcript_button_clicked": bool(opened),
            "polls": polls,
            "catalog_duration": entry.get("duration"),
            "panel": panel_summary(document),
        }
        folder = os.environ.get("ARCHIVE_DIAGNOSTICS")
        try:
            report["page"] = evaluate(PAGE_STATE)
            if folder:
                Path(folder).mkdir(parents=True, exist_ok=True)
                Path(folder, f"{entry['id']}.png").write_bytes(self.screenshot(tab_id))
                report["screenshot"] = f"{entry['id']}.png"
        except (OSError, ValueError, KeyError) as failure:
            report["diagnosis_error"] = type(failure).__name__
        if folder:
            Path(folder).mkdir(parents=True, exist_ok=True)
            Path(folder, f"{entry['id']}.json").write_text(json.dumps(report, indent=2) + "\n")
        return report

    def fetch(self, entry, channel_id):
        video_id = entry["id"]
        if not VIDEO_ID.fullmatch(video_id):
            raise ValueError("Invalid video ID")
        user = self.receipt["userId"]
        tab = self.api(
            "/tabs",
            {
                "userId": user,
                "sessionKey": self.receipt["sessionKey"],
                "url": f"https://www.youtube.com/watch?v={video_id}&hl=en",
            },
        )
        tab_id = tab["tabId"]

        def evaluate(expression):
            return self.api(f"/tabs/{tab_id}/evaluate", {"userId": user, "expression": expression})[
                "result"
            ]

        opened, previous, document, polls = False, None, None, 0
        try:
            deadline = time.monotonic() + 60
            while time.monotonic() < deadline:
                polls += 1
                if not opened:
                    opened = evaluate("""(() => {
                      document.querySelector('#expand')?.click();
                      const button = Array.from(document.querySelectorAll('button')).find(x => x.innerText.trim() === 'Show transcript');
                      button?.click(); return !!button;
                    })()""")
                document = evaluate(EXTRACT)
                if document.get("segments") and document == previous:
                    metadata = document["metadata"]
                    metadata["duration"] = metadata.get("duration") or entry.get("duration")
                    label = metadata.pop("published_label", None)
                    if not metadata.get("published") and label:
                        try:
                            metadata["published"] = (
                                datetime.strptime(label, "%b %d, %Y").date().isoformat()
                            )
                        except ValueError:
                            metadata["published"] = None
                    return panel_captions(
                        document, video_id, channel_id, short=entry.get("kind") == "short"
                    )
                previous = document
                time.sleep(2)
            raise CaptionsUnavailable("Transcript panel did not load")
        except (ValueError, CaptionsUnavailable) as error:
            error.diagnostics = self.diagnose(
                error, evaluate, tab_id, entry, opened, polls, document
            )
            raise
        finally:
            self.api(f"/tabs/{tab_id}?userId={user}", method="DELETE")
