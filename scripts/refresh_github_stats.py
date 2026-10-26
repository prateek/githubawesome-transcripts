import json
import os
import re
import time
import urllib.request
from datetime import UTC, datetime
from pathlib import Path

from archive.storage import read_json, write_text

root = Path(__file__).resolve().parents[1] / "data"
token = os.environ.get("GITHUB_TOKEN")
if not token:
    raise SystemExit("Set GITHUB_TOKEN, for example GITHUB_TOKEN=$(gh auth token)")
pattern = re.compile(r"^https://github\.com/([\w.-]+)/([\w.-]+?)(?:\.git)?$")


def request(url, body=None):
    headers = {
        "Authorization": f"Bearer {token}",
        "Accept": "application/vnd.github+json",
        "User-Agent": "githubawesome-transcripts",
    }
    data = json.dumps(body).encode() if body else None
    with urllib.request.urlopen(urllib.request.Request(url, data, headers), timeout=30) as response:
        return response.status, json.loads(response.read() or b"null")


slugs = sorted(
    {
        f"{match[1]}/{match[2]}"
        for path in (root / "videos").glob("*.json")
        for section in read_json(path, {}).get("sections", [])
        for url in section["repositories"]
        if (match := pattern.match(url))
    }
)
repositories = {}
for start in range(0, len(slugs), 40):
    batch = slugs[start : start + 40]
    fields = "\n".join(
        f"r{i}: repository(owner: {json.dumps(owner)}, name: {json.dumps(name)}) "
        "{ nameWithOwner stargazerCount forkCount isArchived pushedAt "
        "primaryLanguage { name } }"
        for i, (owner, name) in enumerate(slug.split("/") for slug in batch)
    )
    _, result = request("https://api.github.com/graphql", {"query": f"{{{fields}}}"})
    # Missing repositories come back as NOT_FOUND; anything else would leave a
    # partial snapshot, so stop before writing.
    if errors := [e for e in result.get("errors", []) if e.get("type") != "NOT_FOUND"]:
        raise SystemExit(f"GitHub GraphQL failed: {errors[0].get('message')}")
    for i, slug in enumerate(batch):
        if repo := (result.get("data") or {}).get(f"r{i}"):
            repositories[slug] = {
                "name": repo["nameWithOwner"],
                "stars": repo["stargazerCount"],
                "forks": repo["forkCount"],
                "archived": repo["isArchived"],
                "pushed": repo["pushedAt"],
                "language": (repo["primaryLanguage"] or {}).get("name"),
                "weeks": None,
            }

# GitHub answers 202 while it computes commit activity; retry those repos.
# An empty repository answers 204, which leaves weeks as None.
waiting = list(repositories)
for attempt in range(10):
    if attempt:
        time.sleep(10)
    retry = []
    for slug in waiting:
        url = f"https://api.github.com/repos/{repositories[slug]['name']}/stats/commit_activity"
        status, weeks = request(url)
        if status == 202:
            retry.append(slug)
        elif isinstance(weeks, list):
            repositories[slug]["weeks"] = [week["total"] for week in weeks]
    waiting = retry
    if not waiting:
        break
else:
    # Some repositories stay at 202 for hours; keep their last known activity.
    previous = read_json(root / "github.json", {}).get("repositories", {})
    for slug in waiting:
        repositories[slug]["weeks"] = (previous.get(slug) or {}).get("weeks")
    print(f"Kept previous activity for {len(waiting)} still computing: {', '.join(waiting)}")

# Compact, because the reader downloads this before its first render.
write_text(
    root / "github.json",
    json.dumps(
        {
            "fetched": datetime.now(UTC).isoformat(timespec="seconds"),
            "repositories": repositories,
        },
        ensure_ascii=False,
        separators=(",", ":"),
    )
    + "\n",
)
print(
    f"{len(repositories)} of {len(slugs)} repositories, "
    f"{sum(r['weeks'] is None for r in repositories.values())} without activity"
)
