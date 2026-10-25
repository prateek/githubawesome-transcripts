import io
import json
from datetime import UTC, datetime

import pytest

from archive import cleanup
from archive.ingest import CaptionsUnavailable, choose_track, metadata_subset
from archive.publish import build
from archive.storage import read_json, rebuild, sha256, store_video, write_json
from archive.transcript import make_record, parse_captions


@pytest.fixture
def metadata():
    return {
        "id": "abcdefghijk",
        "title": "Two useful projects",
        "channel_id": "test",
        "published": "2026-10-25",
        "duration": 20,
        "description": "0:00 Intro\n0:05 Widget https://github.com/example/widget",
        "chapters": [
            {"start_time": 0, "title": "Intro"},
            {"start_time": 5, "title": "Widget"},
        ],
    }


def captions(*rows):
    return {
        "events": [
            {
                "tStartMs": start * 1000,
                "dDurationMs": duration * 1000,
                "segs": [{"utf8": text}],
            }
            for start, duration, text in rows
        ]
    }


@pytest.fixture
def record(metadata):
    return make_record(
        metadata,
        captions((0, 3, "Welcome to this video."), (5, 3, "Widget is a helpful tool.")),
        {},
    )


def test_rolling_overlap_does_not_remove_repetition_after_pause():
    cues = parse_captions(
        captions(
            (0, 4, "Here is a useful tool"),
            (2, 4, "a useful tool for you"),
            (3, 0, "\n"),
            (10, 2, "for you"),
        )
    )
    assert [c["text"] for c in cues] == ["Here is a useful tool", "for you", "for you"]


def test_chapters_preserve_every_word_and_source_links(record):
    assert record["sections"][1]["repositories"] == ["https://github.com/example/widget"]
    assert [s["paragraphs"] for s in record["sections"]] == [
        ["Welcome to this video."],
        ["Widget is a helpful tool."],
    ]
    assert record["word_count"] == 9


def test_empty_and_invalid_timing_rejected():
    with pytest.raises(ValueError):
        parse_captions(captions((0, 0, "\n")))
    with pytest.raises(ValueError):
        parse_captions(captions((-1, 2, "hello")))


def test_rebuild_is_identical_and_failed_refresh_preserves_data(tmp_path, metadata):
    raw = captions((0, 3, "Welcome."), (5, 3, "A useful project."))
    record = store_video(tmp_path, metadata, raw, "en", "manual", "2026-10-25T00:00:00Z")
    before = {p.relative_to(tmp_path): p.read_bytes() for p in tmp_path.rglob("*") if p.is_file()}
    rebuild(tmp_path)
    with pytest.raises(ValueError):
        store_video(tmp_path, metadata, {}, "en", "manual", "later")
    assert before == {
        p.relative_to(tmp_path): p.read_bytes() for p in tmp_path.rglob("*") if p.is_file()
    }
    assert record["provenance"]["captions_sha256"] == sha256(raw)


def test_manual_english_track_wins_and_metadata_excludes_tokens():
    track = [{"ext": "json3", "url": "https://example.com/captions?token=secret"}]
    assert choose_track({"subtitles": {"en": track}, "automatic_captions": {"en-orig": track}})[
        :2
    ] == ("en", "manual")
    with pytest.raises(CaptionsUnavailable):
        choose_track({})
    assert "secret" not in json.dumps(
        metadata_subset(
            {
                "id": "abcdefghijk",
                "title": "title",
                "channel_id": "test",
                "url": "secret",
            }
        )
    )


@pytest.mark.parametrize("change", ["missing", "order", "url", "invented"])
def test_rejects_bad_edits(record, change):
    sections = [{"id": s["id"], "paragraphs": list(s["paragraphs"])} for s in record["sections"]]
    if change == "missing":
        sections.pop()
    elif change == "order":
        sections.reverse()
    elif change == "url":
        sections[0]["paragraphs"].append("https://evil.example/")
    else:
        record["sections"][0]["paragraphs"] = []
    with pytest.raises(ValueError):
        cleanup.validate_edit(record, {"sections": sections})


def test_requests_are_free_only_and_reject_reported_cost(record, monkeypatch):
    seen = []

    def respond(request, timeout):
        body = json.loads(request.data)
        seen.append(body)
        return io.BytesIO(
            json.dumps(
                {
                    "choices": [{"finish_reason": "stop", "message": {"content": "{}"}}],
                    "usage": {"cost": 1},
                }
            ).encode()
        )

    monkeypatch.setattr(cleanup, "urlopen", respond)
    with pytest.raises(ValueError, match="nonzero cost"):
        cleanup.request_cleanup(record, "synthetic-test-key")
    assert seen[0]["model"] == "openrouter/free"
    assert seen[0]["provider"]["max_price"] == {"prompt": 0, "completion": 0}
    assert "models" not in seen[0]


def test_daily_budget_prevents_network(tmp_path, record, monkeypatch):
    write_json(tmp_path / "videos" / "abcdefghijk.json", record)
    write_json(
        tmp_path / "cleanup-budget.json",
        {"date": datetime.now(UTC).date().isoformat(), "requests": 30},
    )
    monkeypatch.setenv("OPENROUTER_API_KEY", "synthetic-test-key")

    def forbidden(*args):
        pytest.fail("Daily limit must prevent requests")

    monkeypatch.setattr(cleanup, "request_cleanup", forbidden)
    cleanup.clean_pending(tmp_path)


def test_build_publishes_edition_and_search(tmp_path, metadata):
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
    store_video(
        tmp_path / "data",
        metadata,
        captions((0, 3, "Welcome."), (5, 3, "Useful project.")),
        "en",
        "manual",
        "now",
    )
    result = build(tmp_path, tmp_path / "dist")
    assert result["counts"]["available"] == 1
    assert read_json(tmp_path / "dist/data/search.json")[1]["text"] == "Useful project."
    assert (tmp_path / "dist/data/editions/abcdefghijk.md").exists()
    assert "#/video/abcdefghijk" in (tmp_path / "dist/feed.xml").read_text()
    with pytest.raises(ValueError):
        build(tmp_path, tmp_path)


def test_failed_edits_rotate_through_backlog(tmp_path, record, monkeypatch):
    import copy

    second = copy.deepcopy(record)
    second["id"] = "lmnopqrstuv"
    write_json(tmp_path / "videos/abcdefghijk.json", record)
    write_json(tmp_path / "videos/lmnopqrstuv.json", second)
    monkeypatch.setenv("OPENROUTER_API_KEY", "synthetic-test-key")
    attempted = []

    def reject(record, key):
        attempted.append(record["id"])
        raise ValueError("bad output")

    monkeypatch.setattr(cleanup, "request_cleanup", reject)
    cleanup.clean_pending(tmp_path, max_videos=1, delay=0)
    cleanup.clean_pending(tmp_path, max_videos=1, delay=0)
    assert len(set(attempted)) == 2


def test_rate_limit_stops_batch_and_next_run(tmp_path, monkeypatch):
    from archive import ingest

    catalog = {
        "videos": [
            {"id": "abcdefghijk", "title": "First"},
            {"id": "lmnopqrstuv", "title": "Second"},
        ]
    }
    calls = []
    monkeypatch.setattr(ingest, "discover", lambda *args: catalog)

    def limited(*args):
        calls.append(args[0])
        raise ingest.RateLimited()

    monkeypatch.setattr(ingest, "fetch_video", limited)
    ingest.sync({"channel_id": "test"}, tmp_path, delay=0)
    ingest.sync({"channel_id": "test"}, tmp_path, delay=0)
    assert calls == ["abcdefghijk"]
    assert read_json(tmp_path / "catalog.json")["videos"][0]["status"] == "retry"


def test_refresh_failure_preserves_readable_video(tmp_path, metadata, monkeypatch):
    from archive import ingest

    original = store_video(tmp_path, metadata, captions((0, 2, "Hello.")), "en", "manual", "now")
    catalog = {"videos": [{"id": metadata["id"], "title": metadata["title"], "status": "ready"}]}
    monkeypatch.setattr(ingest, "discover", lambda *args: catalog)

    def missing(*args):
        raise CaptionsUnavailable()

    monkeypatch.setattr(ingest, "fetch_video", missing)
    ingest.sync({"channel_id": "test"}, tmp_path, refresh=True, delay=0)
    assert read_json(tmp_path / "videos" / f"{metadata['id']}.json") == original
    assert read_json(tmp_path / "catalog.json")["videos"][0]["status"] == "ready"


def test_suppressed_no_formats_error_still_detects_bot_block(monkeypatch):
    from archive import ingest

    class BlockedExtractor:
        params = {"logger": ingest.QuietLogger()}

        def __enter__(self):
            return self

        def __exit__(self, *args):
            pass

        def extract_info(self, *args, **kwargs):
            self.params["logger"].warning("Sign in to confirm you're not a bot.")
            return {"id": "abcdefghijk", "channel_id": None}

    monkeypatch.setattr(ingest, "extractor", BlockedExtractor)
    with pytest.raises(ingest.BotVerificationRequired):
        ingest.fetch_video("abcdefghijk", "test")
