import json
import time
from datetime import UTC, datetime, timedelta
from urllib.error import HTTPError
from urllib.request import Request, urlopen

import yt_dlp

from .storage import read_json, store_video, write_json
from .transcript import VIDEO_ID


class CaptionsUnavailable(Exception):
    pass


class RateLimited(Exception):
    pass


class BotVerificationRequired(RateLimited):
    pass


class QuietLogger:
    blocked = False

    def debug(self, message):
        pass

    def warning(self, message):
        if "not a bot" in message.lower():
            self.blocked = True

    def error(self, message):
        self.warning(message)


def now():
    return datetime.now(UTC).isoformat(timespec="seconds")


def extractor(**options):
    return yt_dlp.YoutubeDL(
        {
            "quiet": True,
            "no_warnings": True,
            "logger": QuietLogger(),
            "skip_download": True,
            "ignore_no_formats_error": True,
            "socket_timeout": 30,
            "retries": 0,
            **options,
        }
    )


def metadata_subset(info):
    date = info.get("upload_date")
    return {
        "id": info["id"],
        "title": info["title"],
        "channel_id": info["channel_id"],
        "published": f"{date[:4]}-{date[4:6]}-{date[6:8]}" if date else None,
        "duration": info.get("duration"),
        "description": info.get("description", ""),
        "chapters": info.get("chapters") or [],
    }


def choose_track(info):
    for field, kind in [("subtitles", "manual"), ("automatic_captions", "automatic")]:
        tracks = info.get(field) or {}
        # Prefer original English over auto-translated English tracks.
        for language in ["en-orig", "en", "en-US", "en-GB"]:
            for track in tracks.get(language, []):
                if track.get("ext") == "json3":
                    return language, kind, track["url"]
    raise CaptionsUnavailable("No English JSON3 captions")


def fetch_video(video_id, channel_id):
    if not VIDEO_ID.fullmatch(video_id):
        raise ValueError("Invalid video ID")
    try:
        with extractor() as ydl:
            info = ydl.extract_info(f"https://www.youtube.com/watch?v={video_id}", download=False)
        if info.get("channel_id") != channel_id:
            raise ValueError("Video does not belong to the configured channel")
        language, kind, url = choose_track(info)
        with urlopen(Request(url, headers={"User-Agent": "Mozilla/5.0"}), timeout=30) as response:
            captions = json.load(response)
        return metadata_subset(info), captions, language, kind
    except HTTPError as error:
        if error.code == 429:
            raise RateLimited("YouTube rate limit") from None
        raise
    except yt_dlp.utils.DownloadError as error:
        if "not a bot" in str(error).lower():
            raise BotVerificationRequired("YouTube blocked the runner") from None
        if "429" in str(error):
            raise RateLimited("YouTube rate limit") from None
        raise


def discover(config, root, limit=None):
    catalog = read_json(root / "catalog.json", {"schema_version": 1, "videos": []})
    known = {v["id"]: v for v in catalog["videos"]}
    for tab in ["videos", "shorts"]:
        options = (
            {"extract_flat": "in_playlist", "playlistend": limit}
            if limit
            else {"extract_flat": "in_playlist"}
        )
        with extractor(**options) as ydl:
            playlist = ydl.extract_info(f"{config['channel_url']}/{tab}", download=False)
        if playlist.get("channel_id") != config["channel_id"]:
            raise ValueError("Discovered playlist belongs to a different channel")
        for item in playlist.get("entries") or []:
            video_id = item.get("id", "")
            if not VIDEO_ID.fullmatch(video_id):
                continue
            known.setdefault(
                video_id,
                {
                    "id": video_id,
                    "title": item.get("title") or video_id,
                    "kind": "short" if tab == "shorts" else "video",
                    "status": "pending",
                },
            )
    catalog["videos"] = list(known.values())
    write_json(root / "catalog.json", catalog)
    return catalog


def sync(config, root, max_videos=10, delay=15, refresh=False, discovery_limit=None):
    previous = read_json(root / "catalog.json", {})
    if previous.get("retry_after", "") > now():
        print("YouTube cooldown is active; keeping the existing dataset.")
        return previous
    catalog = discover(config, root, discovery_limit)
    attempted = 0
    for entry in catalog["videos"]:
        existing = root / "videos" / f"{entry['id']}.json"
        if existing.exists() and not refresh:
            entry.update(status="ready")
            entry.pop("retry_after", None)
            entry.pop("error", None)
            continue
        if entry.get("retry_after", "") > now():
            continue
        if attempted >= max_videos:
            break
        if attempted:
            time.sleep(delay)
        attempted += 1
        print(f"[{attempted}/{max_videos}] {entry['id']} {entry['title']}", flush=True)
        try:
            metadata, captions, language, kind = fetch_video(entry["id"], config["channel_id"])
            record = store_video(root, metadata, captions, language, kind, now())
            entry.update(title=record["title"], status="ready")
            for key in ["error", "retry_after", "last_attempt"]:
                entry.pop(key, None)
        except (
            CaptionsUnavailable,
            RateLimited,
            yt_dlp.utils.DownloadError,
            OSError,
            ValueError,
        ) as error:
            stop = isinstance(error, RateLimited)
            entry.update(
                status="ready"
                if existing.exists()
                else "unavailable"
                if isinstance(error, CaptionsUnavailable)
                else "retry",
                error=type(error).__name__,
                last_attempt=now(),
                retry_after=(datetime.now(UTC) + timedelta(hours=24 if stop else 6)).isoformat(
                    timespec="seconds"
                ),
            )
            print(
                f"  {type(error).__name__}; {'stopping this run' if stop else 'will retry later'}",
                flush=True,
            )
            write_json(root / "catalog.json", catalog)
            if stop:
                catalog["retry_after"] = entry["retry_after"]
                break
        write_json(root / "catalog.json", catalog)
    write_json(root / "catalog.json", catalog)
    return catalog
