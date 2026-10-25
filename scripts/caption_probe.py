import tempfile
from pathlib import Path
from archive.ingest import discover
from archive.browser_captions import BrowserCaptions
from archive.storage import read_json, store_video

config = read_json(Path("config.json"))
with tempfile.TemporaryDirectory() as catalog_dir:
    catalog = discover(config, Path(catalog_dir))
entries = {v["id"]: v for v in catalog["videos"]}
with BrowserCaptions() as browser, tempfile.TemporaryDirectory() as output:
    for video_id in ["z6QVBXljJwk"] + [v["id"] for v in catalog["videos"][:2]]:
        metadata, captions, language, kind = browser.fetch(entries[video_id], config["channel_id"])
        record = store_video(Path(output), metadata, captions, language, kind, "probe")
        print({"id": video_id, "words": record["word_count"], "sections": len(record["sections"]), "repositories": sum(len(s["repositories"]) for s in record["sections"]), "title": record["title"], "last_cue": record["cues"][-1]["start"], "duration": record["duration"]}, flush=True)
