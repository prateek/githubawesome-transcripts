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
