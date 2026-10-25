# GitHub Awesome, in writing

A chaptered reading archive of [GitHub Awesome](https://www.youtube.com/@GithubAwesome)
videos, backed by a Git history of JSON and Markdown data.

[Read the archive](https://prateek.github.io/githubawesome-transcripts/) ·
[Download the index](https://prateek.github.io/githubawesome-transcripts/data/index.json) ·
[RSS](https://prateek.github.io/githubawesome-transcripts/feed.xml)

## Operation

GitHub Actions discovers uploads, retrieves the public transcript panel, copy-edits a bounded
batch through OpenRouter's free router, commits changes, and deploys GitHub Pages.
The schedule and batch sizes live in `.github/workflows/publish.yml`. Use **Actions →
Collect and publish → Run workflow** for an additional run. Production collection
and editing run entirely in CI; the reader needs no server or API key.

Scheduled collection uses Camofox on a standard hosted macOS runner, opening
YouTube's **Show transcript** panel in an anonymous, temporary browser session.
The runtime pins and verified browser checksums live under `scripts/camofox/`.
Its supervisor removes profiles and stops owned browser processes after each batch.
An Ubuntu manual run uses the older `yt-dlp` path for diagnosis.

For a full caption backfill, dispatch **Collect and publish** with `max_videos=25`
and `backfill_batches=24`. Each successful deployment queues the next batch of 25,
up to the requested batch limit, and stops early when no videos are eligible.
Existing transcript files are skipped; cooldowns defer failed videos to normal
scheduled retries. Each run's summary reports available, eligible, and deferred
counts. Cancel the active backfill run to stop the chain before it queues another.
Backfill skips AI copy-editing; normal scheduled runs continue that work within the
existing free-model request budget. Re-run backfill for any remaining eligible work
if the batch limit is exhausted.

Set the repository Actions secret `OPENROUTER_API_KEY` to the dedicated account's
inference key. Keep account and API credentials in a password manager and sync
rotations to the GitHub secret through stdin. After rotation, run the workflow
with `verify_model` enabled to test free inference with synthetic text. Never commit credentials or full
extractor metadata containing signed caption URLs.

GitHub stars, languages and weekly commit counts for linked repositories come
from `data/github.json`, a committed snapshot. Refresh it with
`GITHUB_TOKEN=$(gh auth token) uv run python -m scripts.refresh_github_stats`
and commit the result; CI does not refresh it. The reader works without it.

Pages must use **GitHub Actions** as its build source. The workflow needs permission
to write repository contents and deploy Pages. Pull-request checks have read-only
permissions and receive no model secret.

## Free usage

The editor requests only `openrouter/free`, with zero maximum input/output token
prices and no paid fallback. A persisted daily request cap bounds retries. Missing
credentials, quota exhaustion, invalid output, and unavailable models leave the
caption edition readable. No billing, credit purchases, or automatic top-ups are
required by this project.

Free model capacity is variable; backfilling the channel can take many runs.
[OpenRouter documents the router's free-only fallback behavior](https://openrouter.ai/docs/guides/routing/model-variants/free)
and [account limits](https://openrouter.ai/docs/api/reference/limits).

## Local validation

Requires Python 3.14, uv, and Node.js 22 or newer.

```sh
uv sync --locked
uv run ruff check archive tests
uv run ruff format --check archive tests
uv run python -m pytest -q
uv run python -m archive build
npm ci
npx playwright install chromium webkit
npm test
uv run python -m http.server 8000 --directory dist
```

The build reads committed data and works without network access. Browser tests use
synthetic records and run in desktop Chromium and mobile WebKit. To regenerate the
caption editions from their raw source, run `uv run python -m archive rebuild`.
To exercise browser collection locally on macOS arm64, install mise, run
`python3 scripts/camofox/camofox-runtime.py install`, then
`uv run python -m archive sync --source browser --max-videos 1`.

## Data and limitations

See [the dataset format](docs/dataset.md) before consuming or changing the schema.

YouTube may block caption requests from GitHub-hosted runners. Missing tracks,
private/deleted videos, and rate limits remain visible in `data/catalog.json`.
A failed refresh preserves previously retrieved data. An HTTP 429 or detected bot block pauses collection
for 24 hours. The browser panel may work while the player is blocked, but YouTube
can change its markup or block this path too. Collection does not promise complete
channel coverage. Panel timing and coverage limitations are recorded in the dataset documentation.

Automatic captions can misrecognize project names. AI copy-editing can also change
meaning; structural and length checks cannot establish factual fidelity. Every
edition links to its video and retains the original caption source for comparison.
Chapter assignment uses a cue's start time, so speech crossing a chapter boundary
can appear under the preceding heading.

This is an independent archive, not affiliated with the channel. Source videos and
transcript content remain attributable to their original creators; this repository
does not grant a new license to that content.
