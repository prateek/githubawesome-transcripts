import json
import os
from datetime import UTC, datetime
from pathlib import Path

from archive.cleanup import DAILY_LIMIT, request_cleanup
from archive.storage import read_json, write_json

root = Path(__file__).resolve().parents[1] / "data"
path = root / "cleanup-budget.json"
today = datetime.now(UTC).date().isoformat()
budget = read_json(path, {})
if budget.get("date") != today:
    budget = {"date": today, "requests": 0}
if budget["requests"] >= DAILY_LIMIT:
    raise SystemExit("Daily request budget exhausted")
budget["requests"] += 1
write_json(path, budget)
result = request_cleanup(
    {
        "title": "Synthetic connection check",
        "sections": [
            {
                "id": "s001",
                "title": "Example",
                "paragraphs": [
                    "this example tool helps you organize notes it runs locally and lets you search your notes without sending them to a server"
                ],
            }
        ],
    },
    os.environ["OPENROUTER_API_KEY"],
)
print(
    json.dumps(
        {"actual_model": result["actual_model"], "usage": result["usage"], "validated": True}
    )
)
