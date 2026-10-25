import copy
import shutil
from pathlib import Path
from xml.etree import ElementTree as ET

from .cleanup import source_hash, validate_edit
from .storage import markdown, read_json, records, write_json, write_text


def edition(record, root):
    result = copy.deepcopy(record)
    edit = read_json(root / "edits" / f"{record['id']}.json", {})
    result["edition"] = "captions"
    if edit.get("source_sha256") == source_hash(record):
        edited = validate_edit(record, {"sections": edit["sections"]})
        for section, cleaned in zip(result["sections"], edited, strict=True):
            section["paragraphs"] = cleaned["paragraphs"]
        result["edition"] = "edited"
        result["editor"] = {
            key: edit[key]
            for key in [
                "actual_model",
                "requested_model",
                "prompt_version",
                "created_at",
            ]
        }
    return result


def build(project, output):
    project, output = Path(project), Path(output)
    if output.resolve() == project.resolve() or project.resolve().is_relative_to(output.resolve()):
        raise ValueError("Output must not contain the project")
    root = project / "data"
    config = read_json(project / "config.json")
    output.mkdir(parents=True, exist_ok=True)
    shutil.copytree(project / "web", output, dirs_exist_ok=True)
    if (output / "data").exists():
        shutil.rmtree(output / "data")
    shutil.copytree(root, output / "data", dirs_exist_ok=True)
    library, search = [], []
    for original in records(root):
        record = edition(original, root)
        video_id = record["id"]
        write_json(output / "data" / "editions" / f"{video_id}.json", record)
        write_text(output / "data" / "editions" / f"{video_id}.md", markdown(record))
        library.append(
            {
                key: record[key]
                for key in [
                    "id",
                    "title",
                    "url",
                    "published",
                    "duration",
                    "word_count",
                    "edition",
                ]
            }
            | {
                "sections": [
                    {key: s[key] for key in ["id", "title", "start", "repositories"]}
                    for s in record["sections"]
                ]
            }
        )
        search.extend(
            {
                "video_id": video_id,
                "section_id": s["id"],
                "text": " ".join(s["paragraphs"]),
            }
            for s in record["sections"]
        )
    catalog = read_json(root / "catalog.json", {"videos": []})
    ready = {r["id"] for r in library}
    index = {
        "schema_version": 1,
        "channel": config["channel_name"],
        "channel_url": config["channel_url"],
        "repository_url": config["repository_url"],
        "videos": library,
        "pending": [v for v in catalog["videos"] if v["id"] not in ready],
        "counts": {
            "discovered": len({v["id"] for v in catalog["videos"]} | ready),
            "available": len(library),
            "edited": sum(v["edition"] == "edited" for v in library),
        },
    }
    write_json(output / "data" / "index.json", index)
    write_json(output / "data" / "search.json", search)
    write_text(output / ".nojekyll", "")
    feed = ET.Element("rss", version="2.0")
    channel = ET.SubElement(feed, "channel")
    for key, text in {
        "title": "GitHub Awesome, in writing",
        "link": config["site_url"],
        "description": "Chaptered transcripts from GitHub Awesome videos.",
    }.items():
        ET.SubElement(channel, key).text = text
    for video in library[:50]:
        item = ET.SubElement(channel, "item")
        ET.SubElement(item, "title").text = video["title"]
        ET.SubElement(item, "link").text = f"{config['site_url']}#/video/{video['id']}"
        ET.SubElement(item, "guid", isPermaLink="false").text = video["id"]
        ET.SubElement(
            item, "description"
        ).text = (
            f"{len(video['sections'])} sections. Read the transcript or watch the source video."
        )
    write_text(output / "feed.xml", ET.tostring(feed, encoding="unicode", xml_declaration=True))
    return index
