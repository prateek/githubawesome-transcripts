import hashlib
import json
from pathlib import Path

from .transcript import make_record, markdown


def read_json(path, default=None):
    return json.loads(path.read_text()) if path.exists() else default


def write_json(path, value):
    write_text(path, json.dumps(value, ensure_ascii=False, indent=2) + "\n")


def write_text(path, text):
    path.parent.mkdir(parents=True, exist_ok=True)
    if path.exists() and path.read_text() == text:
        return
    temporary = path.with_suffix(path.suffix + ".tmp")
    temporary.write_text(text)
    temporary.replace(path)


def sha256(value):
    return hashlib.sha256(
        json.dumps(value, ensure_ascii=False, sort_keys=True).encode()
    ).hexdigest()


def store_video(root, metadata, captions, language, kind, fetched_at):
    provenance = {
        "language": language,
        "caption_kind": kind,
        "fetched_at": fetched_at,
        "metadata_sha256": sha256(metadata),
        "captions_sha256": sha256(captions),
    }
    record = make_record(metadata, captions, provenance)
    video_id = record["id"]
    raw = root / "raw" / video_id
    write_json(raw / "metadata.json", metadata)
    write_json(raw / "captions.json", captions)
    write_json(root / "videos" / f"{video_id}.json", record)
    write_text(root / "markdown" / f"{video_id}.md", markdown(record))
    return record


def rebuild(root):
    for path in sorted((root / "videos").glob("*.json")):
        old = read_json(path)
        raw = root / "raw" / old["id"]
        metadata, captions = (
            read_json(raw / "metadata.json"),
            read_json(raw / "captions.json"),
        )
        provenance = old["provenance"]
        store_video(
            root,
            metadata,
            captions,
            provenance["language"],
            provenance["caption_kind"],
            provenance["fetched_at"],
        )


def records(root):
    return sorted(
        (read_json(p) for p in (Path(root) / "videos").glob("*.json")),
        key=lambda r: (r["published"] or "", r["id"]),
        reverse=True,
    )
