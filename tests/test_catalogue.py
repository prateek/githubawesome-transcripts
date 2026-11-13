import json

from archive.catalogue import build_catalogue, series, tagline
from archive.publish import build
from archive.storage import read_json, store_video, write_json
from scripts import refresh_github_stats as refresh


def video(video_id, title, published, *repositories, edition="captions"):
    return {
        "id": video_id,
        "title": title,
        "published": published,
        "edition": edition,
        "provenance": {"fetched_at": f"{published}T09:00:00+00:00"},
        "sections": [
            {
                "id": f"s{index + 1:03}",
                "title": name,
                "start": index * 30,
                "repositories": [f"https://github.com/{slug}"] if slug else [],
                "paragraphs": [f"{name} is worth a look. More follows."],
            }
            for index, (name, slug) in enumerate(repositories)
        ],
    }


def test_series_comes_from_the_title_unless_the_video_is_about_one_repository():
    assert series("GitHub Trending Weekly #7: a, b", "video", 35) == "Trending Weekly"
    assert series("Swift Trending Repos Weekly #2", "video", 15) == "Swift"
    assert series("November 2025 GitHub Trends: 25 Projects", "video", 25) == "Monthly"
    assert series("35 Self Hosted Projects on GitHub", "video", 35) == "Self-Hosted"
    assert series("Maildrop: Self-Hosted Disposable Email", "video", 1) == "Spotlight"
    assert series("pgbot: a Postgres health check", "short", 1) == "Short"
    assert tagline("pgbot: a Postgres health check") == "A Postgres health check"
    assert tagline("uniprof — CPU profiling made simple") == "CPU profiling made simple"
    assert tagline("React Responsive Iframe Viewer") is None


def test_mentions_group_by_repository_and_recaps_are_not_features():
    videos = [
        video(
            "v5",
            "pgbot: a Postgres check that installs nothing",
            "2026-09-20",
            ("Transcript", "pg/pgbot"),
        ),
        video(
            "v4",
            "GitHub Trending monthly #9",
            "2026-09-05",
            ("Tool", "new/tool"),
            ("Fresh", "x/fresh"),
        ),
        video(
            "v3",
            "30 Self-Hosted Projects on GitHub",
            "2026-08-25",
            ("pgbot", "pg/pgbot"),
            ("Tool", "old/tool"),
        ),
        video(
            "v2",
            "GitHub Trending Today #3",
            "2026-08-20",
            ("Tool", "Old/Tool"),
            ("Other", "x/other"),
        ),
        video(
            "v1",
            "GitHub Trending Today #1",
            "2026-05-01",
            ("1. Tool", "old/tool"),
            ("Else", "x/else"),
        ),
    ]
    github = {
        "old/tool": {"id": 7, "name": "new/tool", "description": "A tool.", "stars": 50},
        "Old/Tool": {"id": 7, "name": "new/tool", "description": "A tool.", "stars": 50},
        "new/tool": {"id": 7, "name": "new/tool", "description": "A tool.", "stars": 50},
    }
    snapshots = {"2026-05-04": {"7": 12}, "2026-08-01": {"7": 30}}
    rows, details, sections = build_catalogue(videos, {"v5": "short"}, github, snapshots)
    tool = details["new/tool"]
    assert sorted(tool["aliases"]) == ["Old/Tool", "old/tool"]
    assert [m["video"] for m in tool["mentions"]] == ["v4", "v3", "v2", "v1"]
    assert [m["recap"] for m in tool["mentions"]] == [True, False, False, False]
    assert (tool["features"], tool["first"], tool["again"]) == (3, "2026-05-01", "2026-08-25")
    assert (tool["title"], tool["pitch"], tool["pitch_source"]) == ("Tool", "A tool.", "github")
    assert (tool["stars"], tool["stars_then"]) == (50, 12)
    assert tool["mentions"][-1]["stars"] == 12 and tool["mentions"][0]["stars"] is None
    assert sections[("v2", "s001")] == "new/tool"
    # A monthly video's own discoveries are features; a short supplies the pitch.
    assert details["x/fresh"]["mentions"][0]["recap"] is False
    pgbot = details["pg/pgbot"]
    assert (pgbot["title"], pgbot["pitch_source"]) == ("pgbot", "short")
    assert pgbot["pitch"] == "A Postgres check that installs nothing"
    assert pgbot["series"] == ["Self-Hosted", "Short"] and pgbot["again"] is None
    assert details["x/other"]["pitch"] == "Other is worth a look."
    assert details["x/other"]["pitch_source"] == "captions"
    assert [r["key"] for r in rows] == ["x/fresh", "pg/pgbot", "x/other", "new/tool", "x/else"]


def test_single_link_in_description_names_the_videos_repository(tmp_path):
    captions = {
        "events": [{"tStartMs": 0, "dDurationMs": 2000, "segs": [{"utf8": "A health check."}]}]
    }
    metadata = {
        "id": "abcdefghijk",
        "title": "pgbot: a Postgres health check",
        "channel_id": "channel",
        "published": "2026-09-20",
        "duration": 24,
        "chapters": [],
        "description": "It runs read-only. #github\n\nhttp://github.com/pgrundev/pgbot.git\n",
    }
    record = store_video(tmp_path, metadata, captions, "und", "unknown", "now")
    assert record["sections"][0]["repositories"] == ["https://github.com/pgrundev/pgbot"]
    metadata["description"] += "https://github.com/other/thing"
    record = store_video(tmp_path, metadata, captions, "und", "unknown", "now")
    assert record["sections"][0]["repositories"] == []


def test_build_publishes_the_catalogue_and_a_dated_feed(tmp_path):
    (tmp_path / "web").mkdir()
    (tmp_path / "web" / "index.html").write_text("<html></html>")
    write_json(
        tmp_path / "config.json",
        {
            "channel_name": "Test",
            "channel_url": "https://youtube.com",
            "repository_url": "https://github.com/test",
            "site_url": "https://example.com/archive/",
        },
    )
    root = tmp_path / "data"
    captions = {
        "events": [
            {"tStartMs": 0, "dDurationMs": 3000, "segs": [{"utf8": "Welcome."}]},
            {"tStartMs": 5000, "dDurationMs": 3000, "segs": [{"utf8": "A <fast> tool."}]},
        ]
    }
    metadata = {
        "id": "abcdefghijk",
        "title": "GitHub Trending Today #1",
        "channel_id": "channel",
        "published": "2026-10-25",
        "duration": 20,
        "chapters": [],
        "description": "0:00 Intro\n0:05 Tool https://github.com/old/tool\n0:10 More https://github.com/x/more",
    }
    store_video(root, metadata, captions, "en", "manual", "2026-10-26T00:00:00+00:00")
    write_json(
        root / "github.json",
        {
            "fetched": "2026-10-27",
            "repositories": {"old/tool": {"id": 7, "name": "new/tool", "stars": 5}},
        },
    )
    write_json(root / "stars" / "2026-10-27.json", {"7": 4})
    index = build(tmp_path, tmp_path / "dist")
    assert index["counts"]["repositories"] == 2 and index["counts"]["mentions"] == 2
    listing = read_json(tmp_path / "dist/data/repos.json")
    assert listing["aliases"] == {"old/tool": "new/tool"}
    assert listing["videos"] == 1
    row = listing["repositories"][0]
    assert (row["key"], row["stars"], row["stars_then"]) == ("new/tool", 5, 4)
    assert "archived" not in row and "topics" not in row
    detail = read_json(tmp_path / "dist/data/repos/new/tool.json")
    assert detail["mentions"][0]["paragraphs"] == ["A <fast> tool."]
    search = read_json(tmp_path / "dist/data/search.json")
    assert [entry.get("repo") for entry in search] == [None, "new/tool", "x/more"]
    feed = (tmp_path / "dist/feed.xml").read_text()
    assert "<pubDate>Sun, 25 Oct 2026 12:00:00 +0000</pubDate>" in feed
    assert "#/repo/new/tool" in feed and "A &amp;lt;fast&amp;gt; tool." in feed


def test_refresh_keeps_gone_repositories_and_snapshots_stars(tmp_path, capsys):
    root = tmp_path
    for video_id, published, slug in [
        ("old", "2026-01-01", "a/old"),
        ("new", "2026-11-01", "b/new"),
        ("lost", "2026-11-02", "c/lost"),
    ]:
        write_json(
            root / "videos" / f"{video_id}.json",
            {
                "published": published,
                "sections": [{"repositories": [f"https://github.com/{slug}"]}],
            },
        )
    write_json(
        root / "github.json",
        {
            "repositories": {
                "c/lost": {"id": 3, "name": "c/lost", "stars": 9, "weeks": [1]},
                "a/old": {"weeks": [4]},
            }
        },
    )
    calls = []

    def call(url, body=None):
        calls.append(url)
        if body:
            assert "c/lost" not in body["query"] or '"lost"' in body["query"]
            found = {
                "databaseId": 1,
                "nameWithOwner": "a/renamed",
                "description": "Old",
                "homepageUrl": "",
                "stargazerCount": 10,
                "forkCount": 1,
                "isArchived": False,
                "pushedAt": "2026-01-02T00:00:00Z",
                "createdAt": "2025-01-01T00:00:00Z",
                "primaryLanguage": None,
                "licenseInfo": {"spdxId": "NOASSERTION"},
                "repositoryTopics": {"nodes": [{"topic": {"name": "cli"}}]},
            }
            return 200, {
                "data": {
                    "r0": found,
                    "r1": found | {"databaseId": 2, "nameWithOwner": "b/new"},
                    "r2": None,
                },
                "errors": [{"type": "NOT_FOUND"}],
            }
        return (202, None) if len(calls) == 2 else (200, [{"total": 3}, {"total": 4}])

    refresh.refresh(root, today="2026-11-13", call=call, wait=0)
    repositories = read_json(root / "github.json")["repositories"]
    assert repositories["a/old"] | {"weeks": None} == repositories["a/old"]
    assert (repositories["a/old"]["name"], repositories["a/old"]["license"]) == ("a/renamed", None)
    assert repositories["a/old"]["topics"] == ["cli"] and repositories["a/old"]["homepage"] is None
    assert repositories["b/new"]["weeks"] == [3, 4]
    assert repositories["c/lost"] == {
        "id": 3,
        "name": "c/lost",
        "stars": 9,
        "weeks": [1],
        "gone": "2026-11-13",
    }
    assert json.loads((root / "stars/2026-11-13.json").read_text()) == {"1": 10, "2": 10}
    assert [url.rsplit("/", 3)[1:] for url in calls[1:]] == [
        ["new", "stats", "commit_activity"]
    ] * 2
    assert "2 of 3 repositories found, 1 gone" in capsys.readouterr().out
