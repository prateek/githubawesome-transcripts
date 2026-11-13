import copy

import pytest

from archive.browser_captions import panel_captions
from archive.storage import read_json, rebuild, store_video


@pytest.fixture
def panel():
    return {
        "metadata": {
            "id": "abcdefghijk",
            "channel_id": "channel",
            "title": "Projects",
            "duration": 120,
            "published": "2026-10-25",
            "chapters": [],
            "description": "0:00 Intro\n1:00 Project https://github.com/example/project",
        },
        "segments": [
            {"timestamp": "0:00", "text": "Hello world."},
            {"timestamp": "1:45", "text": "Final project."},
        ],
    }


def test_panel_round_trip_preserves_rows_and_does_not_invent_timing(panel, tmp_path):
    metadata, raw, language, kind = panel_captions(panel, "abcdefghijk", "channel")
    result = store_video(tmp_path, metadata, raw, language, kind, "2026-10-25")
    assert raw["segments"] == panel["segments"]
    assert result["word_count"] == 4
    assert result["cues"][-1] == {"start": 105, "end": 105, "text": "Final project."}
    assert result["sections"][-1]["repositories"] == ["https://github.com/example/project"]
    assert result["provenance"]["language"] == "und"
    rebuild(tmp_path)
    assert read_json(tmp_path / "videos/abcdefghijk.json") == result


@pytest.mark.parametrize(
    "change", ["wrong-video", "wrong-channel", "truncated", "unordered", "empty", "bad-time"]
)
def test_rejects_wrong_source_or_incomplete_panel(panel, change):
    document = copy.deepcopy(panel)
    if change == "wrong-video":
        document["metadata"]["id"] = "other_video"
    elif change == "wrong-channel":
        document["metadata"]["channel_id"] = "other"
    elif change == "truncated":
        document["segments"] = document["segments"][:1]
    elif change == "unordered":
        document["segments"].reverse()
    elif change == "empty":
        document["segments"][0]["text"] = ""
    else:
        document["segments"][0]["timestamp"] = "not a time"
    with pytest.raises(ValueError):
        panel_captions(document, "abcdefghijk", "channel")


def test_rows_sharing_a_second_are_accepted(panel):
    panel["segments"].insert(1, {"timestamp": "0:00", "text": "Same second."})
    _, raw, _, _ = panel_captions(panel, "abcdefghijk", "channel")
    assert [event["tStartMs"] for event in raw["events"]] == [0, 0, 105000]


def test_rejected_panel_reports_page_state_and_screenshot(panel, tmp_path, monkeypatch):
    from archive import browser_captions

    panel["metadata"]["duration"] = None
    page = {"playability_status": "LOGIN_REQUIRED", "duration_meta": None}
    browser = object.__new__(browser_captions.BrowserCaptions)
    browser.receipt = {"userId": "user", "sessionKey": "session", "baseUrl": "http://camofox"}

    def api(path, data=None, method=None):
        if path == "/tabs":
            return {"tabId": "tab"}
        if method == "DELETE":
            return {}
        expression = data["expression"]
        if expression == browser_captions.EXTRACT:
            return {"result": copy.deepcopy(panel)}
        return {"result": page if expression == browser_captions.PAGE_STATE else True}

    monkeypatch.setattr(browser, "api", api, raising=False)
    monkeypatch.setattr(browser, "screenshot", lambda tab_id: b"png", raising=False)
    monkeypatch.setattr(browser_captions.time, "sleep", lambda seconds: None)
    monkeypatch.setenv("ARCHIVE_DIAGNOSTICS", str(tmp_path))
    with pytest.raises(ValueError, match="may be incomplete") as raised:
        browser.fetch({"id": "abcdefghijk", "kind": "video"}, "channel")
    report = raised.value.diagnostics
    assert report["page"] == page
    assert report["catalog_duration"] is None
    assert report["panel"]["duration"] is None
    assert report["panel"]["last_rows"] == ["0:00", "1:45"]
    assert (tmp_path / "abcdefghijk.png").read_bytes() == b"png"
    assert read_json(tmp_path / "abcdefghijk.json") == report


def test_short_without_duration_is_accepted_within_the_shorts_limit(panel, tmp_path):
    panel["metadata"]["duration"] = None
    with pytest.raises(ValueError, match="may be incomplete"):
        panel_captions(copy.deepcopy(panel), "abcdefghijk", "channel")
    metadata, raw, language, kind = panel_captions(
        copy.deepcopy(panel), "abcdefghijk", "channel", short=True
    )
    assert store_video(tmp_path, metadata, raw, language, kind, "2026-10-25")["duration"] is None
    panel["segments"][-1]["timestamp"] = "3:01"
    with pytest.raises(ValueError, match="may be incomplete"):
        panel_captions(panel, "abcdefghijk", "channel", short=True)
