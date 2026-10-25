import html
import math
import re

VERSION = "1"
VIDEO_ID = re.compile(r"^[A-Za-z0-9_-]{11}$")
CHAPTER_LINE = re.compile(r"^\s*((?:\d+:)?\d{1,2}:\d{2})\s*[-–—]?\s*(.+)$")
REPO_URL = re.compile(r"https://github\.com/([\w.-]+/[\w.-]+)", re.IGNORECASE)


def timestamp(seconds):
    value = int(seconds)
    hours, rest = divmod(value, 3600)
    minutes, secs = divmod(rest, 60)
    return f"{hours}:{minutes:02}:{secs:02}" if hours else f"{minutes}:{secs:02}"


def clean_text(text):
    text = html.unescape(text)
    text = re.sub(r"</?(?:c(?:\.[\w-]+)?|i|b|u)>|<\d{2}:\d{2}:\d{2}\.\d{3}>", "", text)
    return re.sub(r"\s+", " ", text).strip()


def parse_captions(document):
    cues = []
    for event in document.get("events", []):
        text = clean_text("".join(seg.get("utf8", "") for seg in event.get("segs", [])))
        if not text:
            continue
        start = float(event.get("tStartMs", 0)) / 1000
        duration = float(event.get("dDurationMs", 0)) / 1000
        if not math.isfinite(start + duration) or min(start, duration) < 0:
            raise ValueError("Caption timing must be finite and nonnegative")
        cues.append({"start": round(start, 3), "end": round(start + duration, 3), "text": text})
    cues.sort(key=lambda cue: cue["start"])
    result = []
    previous = None
    for cue in cues:
        words = cue["text"].split()
        # Rolling captions repeat an earlier window; repetitions after a pause are speech.
        if previous and cue["start"] < previous["end"]:
            old = previous["text"].split()
            for count in range(min(len(old), len(words)), 0, -1):
                if old[-count:] == words[:count] and (count >= 3 or old == words):
                    words = words[count:]
                    break
        previous = cue
        if words:
            result.append({**cue, "text": " ".join(words)})
    if not result:
        raise ValueError("Caption track has no text")
    return result


def description_chapters(description):
    chapters = []
    for line in description.splitlines():
        match = CHAPTER_LINE.match(line)
        if not match:
            continue
        seconds = 0
        for part in match[1].split(":"):
            seconds = seconds * 60 + int(part)
        repos = list(
            dict.fromkeys(
                "https://github.com/" + m.rstrip("./") for m in REPO_URL.findall(match[2])
            )
        )
        title = re.sub(r"https?://\S+", "", match[2]).strip(" -–—")
        chapters.append(
            {
                "start": seconds,
                "title": title or timestamp(seconds),
                "repositories": repos,
            }
        )
    return chapters


def make_sections(metadata, cues):
    described = description_chapters(metadata.get("description", ""))
    by_start = {c["start"]: c for c in described}
    chapters = []
    for chapter in metadata.get("chapters") or []:
        start = float(chapter["start_time"])
        match = by_start.get(start, {})
        chapters.append(
            {
                "start": start,
                "title": chapter["title"],
                "repositories": match.get("repositories", []),
            }
        )
    chapters = chapters or described
    if not chapters:
        chapters = [{"start": cues[0]["start"], "title": "Transcript", "repositories": []}]
    chapters.sort(key=lambda chapter: chapter["start"])
    if len({c["start"] for c in chapters}) != len(chapters):
        raise ValueError("Duplicate chapter timestamps")
    if cues[0]["start"] < chapters[0]["start"]:
        chapters.insert(0, {"start": 0, "title": "Introduction", "repositories": []})
    sections = []
    for index, chapter in enumerate(chapters):
        end = (
            chapters[index + 1]["start"]
            if index + 1 < len(chapters)
            else max(metadata.get("duration") or 0, cues[-1]["end"])
        )
        selected = [cue for cue in cues if chapter["start"] <= cue["start"] < end]
        paragraphs, current = [], []
        for cue in selected:
            current.append(cue["text"])
            if len(" ".join(current).split()) >= 85 and re.search(r"[.!?][\"']?$", cue["text"]):
                paragraphs.append(" ".join(current))
                current = []
        if current:
            paragraphs.append(" ".join(current))
        sections.append({**chapter, "id": f"s{index + 1:03}", "end": end, "paragraphs": paragraphs})
    return sections


def make_record(metadata, captions, provenance):
    video_id = metadata["id"]
    if not VIDEO_ID.fullmatch(video_id):
        raise ValueError("Invalid YouTube video ID")
    cues = parse_captions(captions)
    sections = make_sections(metadata, cues)
    return {
        "schema_version": 1,
        "id": video_id,
        "title": metadata["title"],
        "url": f"https://www.youtube.com/watch?v={video_id}",
        "channel_id": metadata["channel_id"],
        "published": metadata.get("published"),
        "duration": metadata.get("duration"),
        "word_count": sum(len(cue["text"].split()) for cue in cues),
        "provenance": {**provenance, "cleanup_version": VERSION},
        "sections": sections,
        "cues": cues,
    }


def markdown(record):
    def escape(text):
        return re.sub(r"([\\`*_{}\[\]<>#|])", r"\\\1", text)

    lines = [
        f"# {escape(record['title'])}",
        "",
        f"[Watch the original video]({record['url']})",
        "",
        "Cleaned captions, grouped by video chapter. Caption recognition errors may remain.",
        "",
    ]
    for section in record["sections"]:
        lines += [
            f"## {escape(section['title'])}",
            "",
            f"[{timestamp(section['start'])}]({record['url']}&t={int(section['start'])})",
            "",
        ]
        lines += [f"- {url}" for url in section["repositories"]]
        if section["repositories"]:
            lines.append("")
        for paragraph in section["paragraphs"]:
            lines += [escape(paragraph), ""]
    return "\n".join(lines)
