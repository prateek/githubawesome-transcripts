"""Bounded CI continuation and coverage reporting for caption backfill."""

import json
import os
import subprocess
import sys
from datetime import UTC, datetime
from pathlib import Path


def coverage(root, now):
    catalog = json.loads((root / "catalog.json").read_text())
    counts = {"discovered": len(catalog["videos"]), "available": 0, "eligible": 0, "deferred": 0}
    cooldown = max(
        catalog.get("retry_after", ""), catalog.get("runner_blocks", {}).get("browser-macOS", "")
    )
    for entry in catalog["videos"]:
        if (root / "videos" / (entry["id"] + ".json")).exists():
            counts["available"] += 1
        elif cooldown > now or (
            entry.get("last_source", "yt-dlp") == "browser" and entry.get("retry_after", "") > now
        ):
            counts["deferred"] += 1
        else:
            counts["eligible"] += 1
    return counts


def main():
    batches = int(os.environ.get("BACKFILL_BATCHES", "0"))
    if not 0 <= batches <= 30:
        raise ValueError("backfill_batches must be between 0 and 30")
    if sys.argv[1] == "validate":
        return
    counts = coverage(Path("data"), datetime.now(UTC).isoformat(timespec="seconds"))
    report = (
        f"Archive: {counts['available']}/{counts['discovered']} transcripts; "
        f"{counts['eligible']} eligible, {counts['deferred']} deferred by cooldown."
    )
    print(report, flush=True)
    if os.environ.get("GITHUB_STEP_SUMMARY"):
        with open(os.environ["GITHUB_STEP_SUMMARY"], "a") as summary:
            summary.write(report + "\n")
    if sys.argv[1] == "continue" and batches > 1 and counts["eligible"]:
        subprocess.run(
            [
                "gh",
                "workflow",
                "run",
                "publish.yml",
                "--ref",
                "main",
                "-f",
                "runner=macos-latest",
                "-f",
                "max_videos=25",
                "-f",
                f"backfill_batches={batches - 1}",
            ],
            check=True,
        )


if __name__ == "__main__":
    main()
