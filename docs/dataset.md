# Dataset format

The versioned source of truth is `data/` in Git. Text uses UTF-8 and timestamps are
seconds from the start of the video. UTC dates use ISO 8601. Video identifiers are
YouTube's 11-character IDs.

| Path | Contents |
| --- | --- |
| `catalog.json` | Discovered videos, collection status, retry times and error classes |
| `raw/VIDEO_ID/metadata.json` | Allowlisted title, channel, date, duration, description and chapters |
| `raw/VIDEO_ID/captions.json` | JSON3 response or preserved transcript panel rows with derived events |
| `videos/VIDEO_ID.json` | Deterministically normalized caption edition |
| `markdown/VIDEO_ID.md` | Caption edition as Markdown |
| `edits/VIDEO_ID.json` | Validated AI paragraphs with model, prompt version, source hash and usage |
| `cleanup-attempts.json` | Last attempts, used to keep failed edits from starving the backlog |
| `cleanup-budget.json` | UTC request accounting, including unsuccessful requests |

Each video record has `schema_version`, `id`, `title`, `url`, `channel_id`,
`published`, `duration`, `word_count`, `provenance`, `sections`, and `cues`.
Provenance includes retrieval time, language, caption kind, normalization version,
and SHA-256 hashes of canonical JSON source objects. These are object hashes, not
hashes of the formatted files. Sections have stable ordered IDs, title, start/end,
repository links and paragraph arrays. Cues preserve normalized text and timings.
Repository links come from timestamped description lines, never from the model.

Browser retrieval sets `source_format: youtube-transcript-panel-v1` in the raw
caption object. `segments` preserves the displayed timestamp and text of every
row; `events` adapts those rows to the existing normalizer. Panel timestamps have
whole-second precision. Their durations are unknown and recorded as zero, rather
than inferred from the next row. The panel does not expose a reliable track label,
so provenance uses language `und` and caption kind `unknown`. The default panel is
requested with an English UI; this does not prove the spoken language or whether
YouTube generated the captions.

Collection requires stable rows, matching video and channel identities, increasing
timestamps, a first row within 30 seconds, and a final row within 60 seconds of the
video's end. These checks catch obvious truncation but cannot prove completeness;
videos with long silent endings may be rejected. Browser metadata comes from the
watch page, using catalog duration when the blocked player omits it. Full description
URLs are restored from the watch page's link targets. Temporary
redirect tokens and player URLs are excluded from stored metadata.

The static build copies source data and adds these derived endpoints:

- `data/index.json`: titles, sections, coverage counts and pending videos.
- `data/search.json`: one full-text search entry per section.
- `data/editions/VIDEO_ID.json` and `.md`: the current reading edition.
- `feed.xml`: the 50 newest available transcripts; IDs remain stable across edits.

A reading edition uses an AI edit only while its source/prompt hash matches the
caption record. Otherwise it serves the caption edition. `edition` distinguishes
`edited` from `captions`; edited JSON also includes editor provenance. Source
files are retained in either case. The SPA uses hash routes, so direct links work
under the repository's GitHub Pages subdirectory.

A schema change that breaks consumers requires a new `schema_version`. Rebuilding
with unchanged raw sources and code produces identical caption records. Model
outputs are stored rather than regenerated during builds.
