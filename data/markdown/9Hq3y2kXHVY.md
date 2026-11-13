# PinchTab: a standalone HTTP server that gives AI agents direct control over a Chrome browser

[Watch the original video](https://www.youtube.com/watch?v=9Hq3y2kXHVY)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Transcript

[0:00](https://www.youtube.com/watch?v=9Hq3y2kXHVY&t=0)

- https://github.com/pinchtab/pinchtab

The biggest problem with browser automation being locked into a framework. Pinch tab fixes that with one clean architectural decision. It runs as an independent HTTP server. If you can send an HTTP request, you can control Google Chrome through the API. Switch AI providers whenever you want. It's stingy with tokens. Instead of dumping raw HTML at your AI, it parses the accessibility tree, averaging just 800 tokens per page.
