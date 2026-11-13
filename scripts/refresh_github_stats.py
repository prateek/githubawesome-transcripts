"""Refresh data/github.json and record a star snapshot under data/stars/.

Run with GITHUB_TOKEN set, for example GITHUB_TOKEN=$(gh auth token).
"""

import json
import os
import re
import time
import urllib.error
import urllib.request
from datetime import UTC, date, datetime, timedelta
from pathlib import Path

from archive.storage import read_json, write_text

ROOT = Path(__file__).resolve().parents[1] / "data"
PATTERN = re.compile(r"^https://github\.com/([\w.-]+)/([\w.-]+?)(?:\.git)?$")
BATCH = 50
ACTIVITY_DAYS = 90
# The Actions token allows 1,000 REST requests an hour and commit activity
# costs one per repository, more when GitHub is still computing it.
ACTIVITY_BUDGET = 700
FIELDS = (
    "databaseId nameWithOwner description homepageUrl stargazerCount forkCount "
    "isArchived pushedAt createdAt primaryLanguage { name } licenseInfo { spdxId } "
    "repositoryTopics(first: 20) { nodes { topic { name } } }"
)


def request(url, body=None, token=None):
    headers = {
        "Authorization": f"Bearer {token or os.environ['GITHUB_TOKEN']}",
        "Accept": "application/vnd.github+json",
        "User-Agent": "githubawesome-transcripts",
    }
    data = json.dumps(body).encode() if body else None
    for attempt in range(4):
        try:
            with urllib.request.urlopen(
                urllib.request.Request(url, data, headers), timeout=60
            ) as response:
                return response.status, json.loads(response.read() or b"null")
        except urllib.error.HTTPError as error:
            # Gateway errors and secondary rate limits pass; anything else is ours.
            if error.code not in (403, 429, 500, 502, 503, 504) or attempt == 3:
                raise
        except urllib.error.URLError, TimeoutError:
            if attempt == 3:
                raise
        time.sleep(15 * (attempt + 1))


def featured(root):
    """Map each featured owner/name to the date it was last featured."""
    latest = {}
    for path in (root / "videos").glob("*.json"):
        record = read_json(path, {})
        for section in record.get("sections", []):
            for url in section["repositories"]:
                if match := PATTERN.match(url):
                    slug = f"{match[1]}/{match[2]}"
                    latest[slug] = max(latest.get(slug, ""), record.get("published") or "")
    return latest


def describe(repo):
    license_id = (repo["licenseInfo"] or {}).get("spdxId")
    return {
        "id": repo["databaseId"],
        "name": repo["nameWithOwner"],
        "description": repo["description"],
        "homepage": repo["homepageUrl"] or None,
        "topics": [node["topic"]["name"] for node in repo["repositoryTopics"]["nodes"]],
        "license": None if license_id in (None, "NOASSERTION") else license_id,
        "created": repo["createdAt"],
        "stars": repo["stargazerCount"],
        "forks": repo["forkCount"],
        "archived": repo["isArchived"],
        "pushed": repo["pushedAt"],
        "language": (repo["primaryLanguage"] or {}).get("name"),
        "weeks": None,
    }


def fetch_repositories(slugs, previous, today, call=request):
    repositories = {}
    for start in range(0, len(slugs), BATCH):
        batch = slugs[start : start + BATCH]
        fields = "\n".join(
            f"r{i}: repository(owner: {json.dumps(owner)}, name: {json.dumps(name)}) {{ {FIELDS} }}"
            for i, (owner, name) in enumerate(slug.split("/") for slug in batch)
        )
        _, result = call("https://api.github.com/graphql", {"query": f"{{{fields}}}"})
        # Missing repositories come back as NOT_FOUND; anything else would leave a
        # partial snapshot, so stop before writing.
        if errors := [e for e in result.get("errors", []) if e.get("type") != "NOT_FOUND"]:
            raise SystemExit(f"GitHub GraphQL failed: {errors[0].get('message')}")
        for i, slug in enumerate(batch):
            if repo := (result.get("data") or {}).get(f"r{i}"):
                repositories[slug] = describe(repo)
            else:
                # Keep what was last known and when it was first found missing.
                known = previous.get(slug) or {}
                repositories[slug] = {**known, "gone": known.get("gone") or today}
    return repositories


def fetch_activity(repositories, order, previous, budget=ACTIVITY_BUDGET, call=request, wait=10):
    """Fetch weekly commit totals for the slugs in order, within the request budget."""
    for slug in order:
        repositories[slug]["weeks"] = (previous.get(slug) or {}).get("weeks")
    waiting = list(order)
    for attempt in range(5):
        if attempt:
            time.sleep(wait)
        retry = []
        for slug in waiting:
            if budget <= 0:
                return
            budget -= 1
            name = repositories[slug]["name"]
            status, weeks = call(f"https://api.github.com/repos/{name}/stats/commit_activity")
            # GitHub answers 202 while it computes activity and 204 for an empty repository.
            if status == 202:
                retry.append(slug)
            elif isinstance(weeks, list):
                repositories[slug]["weeks"] = [week["total"] for week in weeks]
        waiting = retry
        if not waiting:
            return


def refresh(root, today=None, call=request, wait=10):
    today = today or datetime.now(UTC).date().isoformat()
    latest = featured(root)
    slugs = sorted(latest)
    previous = read_json(root / "github.json", {}).get("repositories", {})
    repositories = fetch_repositories(slugs, previous, today, call)
    cutoff = (date.fromisoformat(today) - timedelta(days=ACTIVITY_DAYS)).isoformat()
    live = [s for s in slugs if not repositories[s].get("gone")]
    for slug in live:
        repositories[slug]["weeks"] = None
    recent = sorted((s for s in live if latest[s] >= cutoff), key=latest.get, reverse=True)
    fetch_activity(repositories, recent, previous, call=call, wait=wait)
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
    # Star history cannot be recovered later, so every refresh keeps its counts.
    # Keyed by GitHub's id, which survives a rename.
    snapshot = {str(repositories[s]["id"]): repositories[s]["stars"] for s in live}
    write_text(
        root / "stars" / f"{today}.json",
        json.dumps(dict(sorted(snapshot.items())), separators=(",", ":")) + "\n",
    )
    gone = len(slugs) - len(live)
    active = sum(repositories[s]["weeks"] is not None for s in recent)
    print(
        f"{len(live)} of {len(slugs)} repositories found, {gone} gone; "
        f"commit activity for {active} of {len(recent)} featured since {cutoff}"
    )


if __name__ == "__main__":
    if not os.environ.get("GITHUB_TOKEN"):
        raise SystemExit("Set GITHUB_TOKEN, for example GITHUB_TOKEN=$(gh auth token)")
    refresh(ROOT)
