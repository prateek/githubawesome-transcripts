import copy
import json
import re
import shutil
from datetime import UTC, datetime
from email.utils import format_datetime
from html import escape
from pathlib import Path
from xml.etree import ElementTree as ET

from .catalogue import build_catalogue
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
    library, search, editions = [], [], []
    for original in records(root):
        record = edition(original, root)
        editions.append(record)
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
    github = read_json(root / "github.json", {})
    rows, details, mentioned = build_catalogue(
        editions,
        {v["id"]: v.get("kind") for v in catalog["videos"]},
        github.get("repositories", {}),
        {path.stem: read_json(path) for path in (root / "stars").glob("*.json")},
    )
    for entry in search:
        if key := mentioned.get((entry["video_id"], entry["section_id"])):
            entry["repo"] = key
    for key, detail in details.items():
        if not re.fullmatch(r"(?!\.+/)[\w.-]+/(?!\.+$)[\w.-]+", key):
            raise ValueError("Invalid repository key")
        write_json(output / "data" / "repos" / f"{key}.json", detail)
    # Compact and without empty fields, because the home page downloads all of it.
    write_text(
        output / "data" / "repos.json",
        json.dumps(
            {
                "schema_version": 1,
                "fetched": github.get("fetched"),
                "videos": len(library),
                "repositories": [
                    {k: v for k, v in row.items() if v not in (None, [], False)}
                    | ({"weeks": row["weeks"][-12:]} if row["weeks"] else {})
                    for row in rows
                ],
                "aliases": {
                    alias.lower(): key
                    for key, detail in details.items()
                    for alias in detail["aliases"]
                },
            },
            ensure_ascii=False,
            separators=(",", ":"),
        )
        + "\n",
    )
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
            "repositories": len(rows),
            "mentions": len(mentioned),
        },
    }
    write_json(output / "data" / "index.json", index)
    write_json(output / "data" / "search.json", search)
    write_text(output / ".nojekyll", "")
    feed = ET.Element("rss", version="2.0")
    channel = ET.SubElement(feed, "channel")
    for key, text in {
        "title": "GitHub Awesome repositories",
        "link": config["site_url"],
        "description": "Repositories featured in GitHub Awesome videos.",
    }.items():
        ET.SubElement(channel, key).text = text
    for video in library[:50]:
        item = ET.SubElement(channel, "item")
        ET.SubElement(item, "title").text = video["title"]
        ET.SubElement(item, "link").text = f"{config['site_url']}#/video/{video['id']}"
        ET.SubElement(item, "guid", isPermaLink="false").text = video["id"]
        if video["published"]:
            published = datetime.fromisoformat(video["published"]).replace(hour=12, tzinfo=UTC)
            ET.SubElement(item, "pubDate").text = format_datetime(published)
        keys = [key for s in video["sections"] if (key := mentioned.get((video["id"], s["id"])))]
        listed = "".join(
            f'<li><a href="{escape(config["site_url"])}#/repo/{escape(key)}">'
            f"{escape(details[key]['title'])}</a>"
            f"{' — ' + escape(details[key]['pitch']) if details[key]['pitch'] else ''}</li>"
            for key in keys
        )
        ET.SubElement(item, "description").text = (
            f"<p>{len(keys)} repositories.</p><ul>{listed}</ul>"
            if keys
            else "No repositories were linked in this video."
        )
    write_text(output / "feed.xml", ET.tostring(feed, encoding="unicode", xml_declaration=True))
    return index
