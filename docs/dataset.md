# Dataset format

The versioned source of truth is `data/` in Git. Text uses UTF-8 and timestamps are
seconds from the start of the video. UTC dates use ISO 8601. Video identifiers are
YouTube's 11-character IDs.

| Path | Contents |
| --- | --- |
| `catalog.json` | Discovered videos, collection status, retry times and error classes |
| `raw/VIDEO_ID/metadata.json` | Allowlisted title, channel, date, duration, description and chapters |
| `raw/VIDEO_ID/captions.json` | Original English JSON3 caption response |
| `videos/VIDEO_ID.json` | Deterministically normalized caption edition |
| `markdown/VIDEO_ID.md` | Caption edition as Markdown |
| `edits/VIDEO_ID.json` | Validated AI paragraphs with model, prompt version, source hash and usage |
| `cleanup-budget.json` | UTC request accounting, including unsuccessful requests |

Each video record has `schema_version`, `id`, `title`, `url`, `channel_id`,
`published`, `duration`, `word_count`, `provenance`, `sections`, and `cues`.
Provenance includes retrieval time, language, caption kind, normalization version,
and SHA-256 hashes of canonical JSON source objects. These are object hashes, not
hashes of the formatted files. Sections have stable ordered IDs, title, start/end,
repository links and paragraph arrays. Cues preserve normalized text and timings.
Repository links come from timestamped description lines, never from the model.

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
