# Two lightweight alternatives to OpenClaw showed up recently: Nanobot and NanoClaw

[Watch the original video](https://www.youtube.com/watch?v=fxLF9iCBP1E)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Transcript

[0:00](https://www.youtube.com/watch?v=fxLF9iCBP1E&t=0)

Two lightweight alternatives to OpenClaw showed up recently. Nanobot and NanoClaw. Both have small code bases that are easier to audit and modify. OpenClaw has 52 plus modules. One developer wasn't comfortable running code they couldn't fully audit, so they rewrote it in 500 lines of TypeScript. NanoClaw runs clawed agents inside Apple container sandboxes with file system isolation. Each WhatsApp group gets its own isolated context and can only access files you explicitly mount. The codebase is small enough to read and understand in about 8 minutes.

Nanobot is a personal AI assistant in 4,000 lines of Python. Built as a simpler alternative to OpenClaw, 430,000 lines, same core features, persistent memory, web search, background agents, way less code. Runs on Telegram or WhatsApp. The codebase is small enough to read through and understand, so you can customize how memory works, add skills, or swap components without reverse engineering a massive framework. Work.
