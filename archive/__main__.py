import argparse
from pathlib import Path

from .cleanup import clean_pending
from .ingest import metadata_subset, now, sync
from .publish import build
from .storage import read_json, rebuild, store_video


def main():
    parser = argparse.ArgumentParser(
        description="Archive GitHub Awesome captions and build its static reader."
    )
    parser.add_argument("--project", type=Path, default=Path.cwd())
    commands = parser.add_subparsers(dest="command", required=True)
    ingest = commands.add_parser(
        "sync", help="Discover uploads and retrieve a bounded batch of transcripts"
    )
    ingest.add_argument("--max-videos", type=int, default=10)
    ingest.add_argument("--delay", type=float, default=15)
    ingest.add_argument("--discovery-limit", type=int)
    ingest.add_argument("--refresh", action="store_true")
    ingest.add_argument("--source", choices=["yt-dlp", "browser"], default="yt-dlp")
    clean = commands.add_parser(
        "clean",
        help="Copy-edit pending transcripts using only OpenRouter's free router",
    )
    clean.add_argument("--max-videos", type=int, default=5)
    publish = commands.add_parser("build", help="Build the static site without network access")
    publish.add_argument("--output", type=Path, default=Path("dist"))
    commands.add_parser("rebuild", help="Regenerate transcripts from committed raw captions")
    importer = commands.add_parser(
        "import", help="Import previously fetched yt-dlp metadata and JSON3 captions"
    )
    importer.add_argument("--metadata", type=Path, required=True)
    importer.add_argument("--captions", type=Path, required=True)
    importer.add_argument("--language", default="en-orig")
    importer.add_argument("--kind", choices=["manual", "automatic"], default="automatic")
    args = parser.parse_args()
    root = args.project / "data"
    config = read_json(args.project / "config.json")
    if args.command == "sync":
        if args.max_videos < 0 or args.delay < 0:
            parser.error("Batch size and delay must be nonnegative")
        options = dict(
            max_videos=args.max_videos,
            delay=args.delay,
            refresh=args.refresh,
            discovery_limit=args.discovery_limit,
        )
        if args.source == "browser":
            from .browser_captions import BrowserCaptions

            with BrowserCaptions() as browser:
                sync(config, root, **options, fetcher=browser.fetch, source="browser")
        else:
            sync(config, root, **options)
    elif args.command == "clean":
        if args.max_videos < 0:
            parser.error("Batch size must be nonnegative")
        clean_pending(root, args.max_videos)
    elif args.command == "build":
        index = build(args.project, args.output)
        print(index["counts"])
    elif args.command == "rebuild":
        rebuild(root)
    elif args.command == "import":
        metadata = metadata_subset(read_json(args.metadata))
        if metadata["channel_id"] != config["channel_id"]:
            parser.error("Video does not belong to configured channel")
        store_video(root, metadata, read_json(args.captions), args.language, args.kind, now())


if __name__ == "__main__":
    main()
