"""Retrieve the public transcript panel with an ephemeral Camofox session."""

import json
import re
import signal
import subprocess
import sys
import time
from pathlib import Path
from urllib.request import ProxyHandler, Request, build_opener

from .ingest import CaptionsUnavailable
from .transcript import VIDEO_ID

RUNTIME = Path(__file__).resolve().parents[1] / "scripts/camofox/camofox-runtime.py"
EXTRACT = Path(__file__).with_name("caption_panel.js").read_text()


def panel_captions(document, video_id, channel_id):
    metadata = document["metadata"]
    if metadata.get("id") != video_id or metadata.get("channel_id") != channel_id:
        print({"metadata": metadata}, flush=True)
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
        if events and start * 1000 <= events[-1]["tStartMs"]:
            raise ValueError("Unordered transcript panel rows")
        events.append({"tStartMs": start * 1000, "dDurationMs": 0, "segs": [{"utf8": text}]})
    if not events:
        raise CaptionsUnavailable("Transcript panel did not load")
    duration = metadata.get("duration")
    if (
        not duration
        or events[0]["tStartMs"] > 30_000
        or not duration - 60 <= events[-1]["tStartMs"] / 1000 <= duration
    ):
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

    def fetch(self, video_id, channel_id):
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

        try:
            deadline = time.monotonic() + 60
            opened, previous = False, None
            while time.monotonic() < deadline:
                if not opened:
                    opened = evaluate("""(() => {
                      document.querySelector('#expand')?.click();
                      const button = Array.from(document.querySelectorAll('button')).find(x => x.innerText.trim() === 'Show transcript');
                      button?.click(); return !!button;
                    })()""")
                document = evaluate(EXTRACT)
                if document.get("segments") and document == previous:
                    return panel_captions(document, video_id, channel_id)
                previous = document
                time.sleep(2)
            raise CaptionsUnavailable("Transcript panel did not load")
        finally:
            self.api(f"/tabs/{tab_id}?userId={user}", method="DELETE")
