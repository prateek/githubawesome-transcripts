import json

from scripts.backfill import coverage


def test_backfill_resumes_missing_records_and_respects_browser_cooldowns(tmp_path):
    entries = [
        {"id": "ready", "status": "retry"},
        {"id": "old-extractor", "retry_after": "2099", "last_source": "yt-dlp"},
        {"id": "browser-retry", "retry_after": "2099", "last_source": "browser"},
        {"id": "due", "retry_after": "2000", "last_source": "browser"},
    ]
    catalog = {"videos": entries, "runner_blocks": {"Linux": "2099"}}
    (tmp_path / "catalog.json").write_text(json.dumps(catalog))
    (tmp_path / "videos").mkdir()
    (tmp_path / "videos/ready.json").write_text("{}")
    assert coverage(tmp_path, "2026") == {
        "discovered": 4,
        "available": 1,
        "eligible": 2,
        "deferred": 1,
    }
    catalog["runner_blocks"]["browser-macOS"] = "2099"
    (tmp_path / "catalog.json").write_text(json.dumps(catalog))
    assert coverage(tmp_path, "2026") == {
        "discovered": 4,
        "available": 1,
        "eligible": 0,
        "deferred": 3,
    }
