"""Derive the repository catalogue from video records. See GLOSSARY.md for the terms."""

import re
from datetime import date, timedelta

PREFIX = "https://github.com/"
SERIES = [
    ("Swift", r"\bswift\b"),
    ("Trending Today", r"trending today"),
    ("Trending Weekly", r"trending (?:repos )?weekly"),
    ("Monthly", r"\bmonthly\b|github trends|hottest"),
    ("Self-Hosted", r"self[- ]hosted"),
    ("Hacker News", r"hacker news"),
    ("Skills", r"claude code skills|trending skill"),
    ("AI", r"\bai (?:agent )?projects"),
    ("Python", r"python repos"),
    ("React", r"\breact\b|shadcn"),
]
RECAP_DAYS = 62
AGAIN_DAYS = 30
SNAPSHOT_DAYS = 10


def series(title, kind, mentions):
    if kind == "short":
        return "Short"
    # A video about one repository is not an instalment of a list series,
    # whatever words its title shares with one.
    if mentions <= 1:
        return "Spotlight"
    return next((name for name, pattern in SERIES if re.search(pattern, title, re.I)), "Other")


def heading(label, title):
    number = re.search(r"#(\d+)", title)
    return f"{label} #{number[1]}" if number and label not in ("Short", "Spotlight") else label


def tagline(title):
    """The pitch a short's title carries after its name, as in "Name: what it is"."""
    parts = re.split(r":\s+|\s+[—–-]\s+", title, maxsplit=1)
    if len(parts) < 2 or not parts[1].strip():
        return None
    text = parts[1].strip()
    return text[0].upper() + text[1:]


def later(day, days):
    return (date.fromisoformat(day) + timedelta(days=days)).isoformat()


def stars_near(snapshots, identity, day):
    """Stars in the first snapshot taken within a few days after a feature."""
    if not day:
        return None
    for taken in sorted(snapshots):
        if day <= taken <= later(day, SNAPSHOT_DAYS) and str(identity) in snapshots[taken]:
            return snapshots[taken][str(identity)]
    return None


def lead(text):
    match = re.match(r".*?[.!?](?=\s|$)", text)
    return match[0] if match else text


def build_catalogue(videos, kinds, github, snapshots):
    """Group every mention by repository.

    videos are reading editions, newest first. Returns the list rows in feed
    order, the full record per repository, and the key of each mentioned section.
    """
    gathered = {}
    for order, video in reversed(list(enumerate(videos))):
        linked = [s for s in video["sections"] if s["repositories"]]
        label = series(video["title"], kinds.get(video["id"]), len(linked))
        for section in linked:
            slug = section["repositories"][0].removeprefix(PREFIX)
            known = github.get(slug) or {}
            # GitHub's id survives a rename, so both names land on one repository.
            identity = known.get("id") or slug.lower()
            entry = gathered.setdefault(identity, {"slugs": [], "mentions": []})
            if slug not in entry["slugs"]:
                entry["slugs"].append(slug)
            entry["github"] = known or entry.get("github") or {}
            entry["mentions"].append(
                {
                    "video": video["id"],
                    "section": section["id"],
                    "start": section["start"],
                    "date": video.get("published"),
                    "series": label,
                    "heading": heading(label, video["title"]),
                    "video_title": video["title"],
                    "name": section["title"],
                    "edited": video["edition"] == "edited",
                    "paragraphs": section["paragraphs"],
                    "added": video["provenance"]["fetched_at"],
                    "order": order,
                }
            )

    rows, details, sections, taken = [], {}, {}, set()
    for identity, entry in gathered.items():
        known, mentions = entry["github"], entry["mentions"]
        key = known.get("name") or entry["slugs"][0]
        if key in taken:
            key = entry["slugs"][0]
        taken.add(key)
        for index, mention in enumerate(mentions):
            earlier = [m["date"] for m in mentions[:index] if m["date"]]
            mention["recap"] = bool(
                mention["series"] == "Monthly"
                and mention["date"]
                and any(later(day, RECAP_DAYS) >= mention["date"] for day in earlier)
            )
            mention["stars"] = stars_near(snapshots, identity, mention["date"])
            sections[(mention["video"], mention["section"])] = key
        features = [m for m in mentions if not m["recap"]]
        first = features[0]
        returned = [
            m["date"]
            for m in features[1:]
            if m["date"] and first["date"] and m["date"] > later(first["date"], AGAIN_DAYS)
        ]
        listed = [m for m in mentions if m["series"] not in ("Short", "Spotlight")]
        short = next((m for m in reversed(mentions) if m["series"] == "Short"), None)
        latest = mentions[-1]
        text = " ".join(latest["paragraphs"])
        if short and tagline(short["video_title"]):
            pitch, source = tagline(short["video_title"]), "short"
        elif known.get("description"):
            pitch, source = known["description"], "github"
        elif text:
            pitch, source = lead(text), "quote" if latest["edited"] else "captions"
        else:
            pitch, source = None, None
        row = {
            "key": key,
            "title": re.sub(r"^\d+\.\s*", "", listed[-1]["name"]) if listed else key.split("/")[1],
            "pitch": pitch,
            "pitch_source": source,
            "language": known.get("language"),
            "stars": known.get("stars"),
            "stars_then": first["stars"],
            "pushed": known.get("pushed"),
            "archived": bool(known.get("archived")),
            "gone": known.get("gone"),
            "first": first["date"],
            "added": first["added"],
            "features": len(features),
            "again": max(returned) if returned else None,
            "series": list(dict.fromkeys(m["series"] for m in mentions)),
            "topics": known.get("topics") or [],
            "weeks": known.get("weeks"),
        }
        rows.append((first["date"] or "", first["order"], first["start"], row))
        details[key] = row | {
            "url": PREFIX + key,
            "aliases": [slug for slug in entry["slugs"] if slug != key],
            "description": known.get("description"),
            "homepage": known.get("homepage"),
            "license": known.get("license"),
            "created": known.get("created"),
            "forks": known.get("forks"),
            "mentions": [
                {k: v for k, v in m.items() if k not in ("order", "added")}
                for m in reversed(mentions)
            ],
        }
    # Newest first feature first; within a video, the order it listed them.
    rows.sort(key=lambda item: (item[1], item[2]))
    rows.sort(key=lambda item: item[0], reverse=True)
    return [row for *_, row in rows], details, sections
