# GitHub Trending Today \#21: msgvault, ClawHub, Radar, MAHORAGA, LibPDF, Open Ralph Wiggum, Dash, TAKT

[Watch the original video](https://www.youtube.com/watch?v=tbTdKDUK8PQ)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Introduction

[0:00](https://www.youtube.com/watch?v=tbTdKDUK8PQ&t=0)

Welcome back to GitHub Awesome. Today we're looking at 32 trending GitHub projects from dev tools to AI experiments you won't want to miss. Let's jump in.

## msgvault

[0:12](https://www.youtube.com/watch?v=tbTdKDUK8PQ&t=12)

- https://github.com/wesm/msgvault

Your email sits in Gmail's cloud. 20 years of messages, attachments accessible only through their web interface. Wes McKini, who created Pandas, built MSG Vault to fix this. It downloads your entire Gmail history to your computer, then uses DuckDB to let you run analytics on hundreds of thousands of messages in milliseconds. There's a terminal interface for browsing your message history. Full text search that works offline with Gmail syntax.

## ClawHub

[0:41](https://www.youtube.com/watch?v=tbTdKDUK8PQ&t=41)

- https://github.com/openclaw/clawhub

Agent skills are scattered across GitHub repos. OpenClaw built Clawub as a registry for publishing and discovering them. You publish version skills as skill.md files. Vector search using OpenAI embeddings helps find relevant skills without manual browsing. Agents can sync directly from the registry. There's also only crabs.ai for sharing sold imd files, personality configurations for agents.

## Radar

[1:07](https://www.youtube.com/watch?v=tbTdKDUK8PQ&t=67)

- https://github.com/skyhook-io/radar

Ever feel like Kubernetes is working, but you have no idea what's actually going on? That's where Radar comes in. Radar is an open- source local Kubernetes explorer that gives you instant visibility into your cluster. No cloud accounts, no agents, no dashboards to babysit. Just run it and boom, your services, pods, logs, configs, and Helm releases are all right there. If Cubectl feels like flying blind, Radar is the map you've been missing.

## MAHORAGA

[1:35](https://www.youtube.com/watch?v=tbTdKDUK8PQ&t=95)

- https://github.com/ygwyg/MAHORAGA

Maharaga is an AI trading agent that monitors social sentiment from Stock Twits and Reddit, then executes trades through Alpaca for stocks and crypto. It runs continuously on Cloudflare workers with a dashboard showing its decision-making process. It includes stop- losses, position limits, and a kill switch. It's scraping sentiment 24/7 and trading on vibes with actual risk management. JavaScript PDF libraries are fragmented.

## LibPDF

[2:01](https://www.youtube.com/watch?v=tbTdKDUK8PQ&t=121)

- https://github.com/libpdf-js/core

PDF.js only reads files. PDF lib struggles with malformed documents. And PDF kit only generates. The document team built lib PDF to handle all of these. Lib PDF is a TypeScript PDF library that handles loading, editing, signing, and generating PDFs. It runs in Node, Bun, and browsers. It combines parsing, generation, and incremental edits in one library instead of requiring multiple tools.

## Open Ralph Wiggum

[2:28](https://www.youtube.com/watch?v=tbTdKDUK8PQ&t=148)

- https://github.com/Th0rgal/open-ralph-wiggum

Open Ralph Wiggum is an autonomous loop you run from your terminal that keeps an AI coding agent working on your task until it's actually done. Type Ralph your prompt and it wraps agents like open code, clawed code or codeex in a persistent loop. Each iteration sees what's been built so far and keeps improving until tests pass or the job's finished. You can finally let AI write, fix, and refine code while you do something else.

## Dash

[2:56](https://www.youtube.com/watch?v=tbTdKDUK8PQ&t=176)

- https://github.com/agno-agi/dash

Dash is a self-learning agent that grounds answers in six layers of context. Your schema, business logic, past queries, all of it. So instead of blind database queries, it actually understands what it's looking at. The more you use it, the smarter it gets. It remembers past queries, learns from mistakes, and improves over time.

## nanoclaw

[3:22](https://www.youtube.com/watch?v=tbTdKDUK8PQ&t=202)

- https://github.com/gavrielc/nanoclaw

wasn't comfortable running code they couldn't fully audit. So they rewrote it in 500 lines of Typescript. NanoClaw runs clawed agents inside Apple container sandboxes with file system isolation. Each WhatsApp group gets its own isolated context and can only access files you explicitly mount. The codebase is small enough to read and understand in about 8 minutes.

## Agent Trace

[3:50](https://www.youtube.com/watch?v=tbTdKDUK8PQ&t=230)

- https://github.com/cursor/agent-trace

AI is writing half your codebase and nobody knows which parts came from where. That's a problem. Agent trace just dropped as an open spec. Its version control for knowing what the AI actually did. Stamps every line of code with where it came from, which conversation, which model, the whole thing. Works with git tracks line by line and any tool can read it. No more wait, did Claude write this or did I?

## MOVA

[4:16](https://www.youtube.com/watch?v=tbTdKDUK8PQ&t=256)

- https://github.com/OpenMOSS/MOVA

Every open- source video model gives you silent videos. You bolt audio on later and it never syncs, right? MOA skipped that step. It generates video and audio at the same time, synchronized from the ground up. LipSync is state-of-the-art, handles multiple speakers, gets environment sounds right, everything's open source. Weights, training code, Laura scripts, all of it. 720p, 8 seconds, perfect audio sync. If you've ever copy pasted a table from a PDF, you know the pain. Garbled text, lost

## GLM-OCR

[4:42](https://www.youtube.com/watch?v=tbTdKDUK8PQ&t=282)

- https://github.com/zai-org/GLM-OCR

formatting, the whole mess. GLM OCR uses a vision language model to look at the document and understand the layout, not just extract words. Take a screenshot of a complex scientific paper, math formulas, charts, and it converts the whole thing into clean markdown or latex. Good for fixing rag pipelines that choke on messy PDFs.

## nanobot

[5:09](https://www.youtube.com/watch?v=tbTdKDUK8PQ&t=309)

- https://github.com/HKUDS/nanobot

Nanobot is a personal AI assistant in 4,000 lines of Python. Built as a simpler alternative to OpenClaw, 430,000 lines, same core features, persistent memory, web search, background agents, way less code. Runs on Telegram or WhatsApp. The codebase is small enough to read through and understand, so you can customize how memory works, add skills, or swap components without reverse engineering a massive framework.

## Pretty-mermaid-skills

[5:38](https://www.youtube.com/watch?v=tbTdKDUK8PQ&t=338)

- https://github.com/imxv/Pretty-mermaid-skills

Your AI writes code, but you still have to manually make all the diagrams for documentation. Pretty Mermaid Skills fixes that. It plugs into clawed code, cursor, and other AI coding tools so they can render actual diagrams. Write mermaid syntax, get SVGs or ask art for terminals. Supports flowcharts, sequence diagrams, er diagrams, state machines, all of it. Oneline install, zero config, batch render, hundreds of diagrams in parallel.

## TAKT

[6:06](https://www.youtube.com/watch?v=tbTdKDUK8PQ&t=366)

- https://github.com/nrslib/takt

Tact is an AI task and agent coordination tool that orchestrates multiple LLM powered agents into actual workflows. Works with cloud code, open AAI codecs, and others so you can plan, execute, and finish coding tasks with agents that collaborate instead of firing off single answers. Tact guides you step by step, runs tasks from your terminal or GitHub issues, and wires into CI for automation.

## MARVIN

[6:31](https://www.youtube.com/watch?v=tbTdKDUK8PQ&t=391)

- https://github.com/SterlingChin/marvin-template

Marvin is a personal AI assistant. You can actually build and customize yourself. It's not another chatbot. It's an open template for connecting AI to your actual tools and workflows. Named after the depressed robot from Hitchhiker's Guide, Marvin lets you add skills, plug in APIs, and build the kind of assistant that does things, not just answers questions, handles your calendar, sorts your inbox, manages tasks.

## Net Bar

[6:58](https://www.youtube.com/watch?v=tbTdKDUK8PQ&t=418)

- https://github.com/iad1tya/Net-Bar

NetBar is a tiny menu bar app that shows your actual download and upload speeds in real time. Just sits there. Click once for full diagnostics, signal strength, latency, whether your router is having a moment. You can customize the display, fonts, units, what info shows up. It's open source, lightweight, doesn't collect anything. Takes about 15 seconds to install.

## voicebox

[7:22](https://www.youtube.com/watch?v=tbTdKDUK8PQ&t=442)

- https://github.com/jamiepine/voicebox

Voice box is a desktop app for voice cloning and speech synthesis. Feed it a few seconds of audio and it clones the voice using models like Quen 3TS. Then you arrange the generated speech on a timeline. Drag clips around, layer different voices, edit the output like you would in a DAW. Includes Whisper for transcription so you can edit based on the actual text. Runs locally. No cloud processing, no subscription.

## LingBot-VLA

[7:49](https://www.youtube.com/watch?v=tbTdKDUK8PQ&t=469)

- https://github.com/Robbyant/lingbot-vla

Lingbot VLA is a vision language action model trained on 20,000 hours of real robot data. It works across nine different robot platforms and understands natural language instructions. In benchmarks, it outperforms existing models on real world tasks and trains twice as fast. There's an optional depth perception module if your application needs it. You can fine-tune it on your own task data set.

## HR-Breaker

[8:16](https://www.youtube.com/watch?v=tbTdKDUK8PQ&t=496)

- https://github.com/btseytlin/hr-breaker

HRE rebuilds your resume to match specific job postings. Upload your resume in any format, paste a job link, and it rewrites your experience to align with what the posting asks for. It includes verification to prevent fabricating experience that isn't there. The tool tests each version against ATS parsers and keyword requirements, then iterates until it passes. Outputs a one-page format available as a web app or command line tool. Vibe spins up a lightweight Linux VM for running AI

## Vibe

[8:44](https://www.youtube.com/watch?v=tbTdKDUK8PQ&t=524)

- https://github.com/lynaghk/vibe

coding agents safely. One command gets you an isolated environment in about 10 seconds. Your project folder mounts into the VM. Package caches persist between sessions and the agent can't access anything outside the VM. It's written in Rust under 1 megabytes, about 1,200 lines of code. No Docker required, just actual VM isolation.

## PYDNS Scanner

[9:10](https://www.youtube.com/watch?v=tbTdKDUK8PQ&t=550)

- https://github.com/xullexer/PYDNS-Scanner

PYDNS scanner finds working DNS servers by testing IP ranges. Give it a seedar file and it scans at around 500 queries per second. It identifies functional DNS servers even when they return errors, uses random subdomains to bypass caching and can optionally test them as proxies. Scans can be paused and resumed. Progress is saved. It's written in async Python with a terminal interface and works crossplatform.

## Lynkr

[9:37](https://www.youtube.com/watch?v=tbTdKDUK8PQ&t=577)

- https://github.com/Fast-Editor/Lynkr

Linker is a self-hosted proxy that lets Claude code CLI connect to different AI providers. It routes requests to Azure, open router or local Alama models. Instead of only using anthropics API, includes circuit breakers for failed requests, load shedding and Prometheus metrics. You can configure tiered routing, sends simple requests to local models and complex ones to cloud APIs.

## tirith

[10:02](https://www.youtube.com/watch?v=tbTdKDUK8PQ&t=602)

- https://github.com/sheeki03/tirith

Tth is a shell hook that checks commands for security issues before execution. It detects Unicode homoglyph attacks like cerillic characters in Latin URLs, Ansie injection, pipeto-shell patterns and modifications to dot files. Runs offline with submillisecond overhead. No telemetry. Block suspicious commands and shows why oneline install.

## Thaw

[10:24](https://www.youtube.com/watch?v=tbTdKDUK8PQ&t=624)

- https://github.com/stonerl/Thaw

Thaw is an open- source menu bar manager for Mac. Hide whatever icons you want, show them on hover or click, or throw them in a separate bar that drops down when you need it. Drag and drop to rearrange everything. Customize colors and shapes. Add spacing between items. Search for specific icons with a hotkey. Works with notched MacBooks written in Swift.

## Term-Clean

[10:48](https://www.youtube.com/watch?v=tbTdKDUK8PQ&t=648)

- https://github.com/daijinhai/TermClean

You install a few dev tools and suddenly your disc is full. Term scans everything. Homebrew, npm, pnpm, yarn, pip, and shows you what's hogging space. It's a terminal UI, textbased, not a web app for Mac OS that lets you actually understand what's installed before you start deleting things. Term clean shows you what else relies on it so you don't accidentally break your Python setup or whatever.

## Qwen3-TTS Studio

[11:13](https://www.youtube.com/watch?v=tbTdKDUK8PQ&t=673)

- https://github.com/bc-dunia/qwen3-TTS-studio

Quen 3TS Studio is a local textto-spech app that runs Alibaba's TTS models on your machine. You get a UI instead of command line flags, so you can adjust voice style, pacing, and emotion without digging through documentation. It also does voice cloning. Feed it a few seconds of audio, and it'll replicate that voice for new speech.

## nono

[11:35](https://www.youtube.com/watch?v=tbTdKDUK8PQ&t=695)

- https://github.com/lukehinds/nono

No is a sandbox for running AI agents and untrusted code on your machine without them trashing your file system or phoning home to weird servers. It uses kernel level enforcement to restrict what processes can actually do. You give an agent access to specific directories or network endpoints and the OS blocks everything else. No escape hatches, no oops, I deleted USR moments.

## Zuckerman

[12:00](https://www.youtube.com/watch?v=tbTdKDUK8PQ&t=720)

- https://github.com/zuckermanai/zuckerman

Zuckerman is a personal AI agent that rewrites its own code. You teach it new skills and it edits its own TypeScript files to remember them. No rebuilds, no restarts. It hot reloads changes while running. It starts small, a few hundred lines of TypeScript. As you add tools or fix behavior, it updates its own prompts and logic. You can share those improvements with other users, so the agent gets smarter from collective teaching.

## Asimov v0

[12:28](https://www.youtube.com/watch?v=tbTdKDUK8PQ&t=748)

- https://github.com/asimovinc/asimov-v0

Asimoth V0 is an open-source bipedal robot leg design you can build with off-the-shelf parts and a 3D printer. The repo includes CAD files, actuator specs, and simulation models for six DOF legs with articulated ankles and toes. Everything's under an open hardware license so you can modify and share your improvements. It's designed as the foundation for a full humanoid platform.

## Auto-Commenter

[12:53](https://www.youtube.com/watch?v=tbTdKDUK8PQ&t=773)

- https://github.com/rokpiy/auto-commenter

Auto commenter is a claude skill that posts Reddit comments for you. You give it your writing style and target subreddits and it generates replies that match your voice. It uses claude plus to read posts, write contextual comments, and post them in batches. You can filter by topic relevance to focus on threads where you'd actually have something to say. Dotto tidy is a free Mac OS system

## DodoTidy

[13:17](https://www.youtube.com/watch?v=tbTdKDUK8PQ&t=797)

- https://github.com/DodoApps/dodotidy

cleaner that shows you what's eating your disk space and lets you clean it up. It's a native Swift UI app that displays CPU, memory, disk, and battery stats. You can delete caches and temp files, find leftover app data from uninstalled programs, and see disc usage breakdowns with charts. No subscription, no telemetry, just a local cleanup tool.

## three-quake

[13:41](https://www.youtube.com/watch?v=tbTdKDUK8PQ&t=821)

- https://github.com/mrdoob/three-quake

Threequake is a browser port of Quake built with 3JS. It runs the original BSP levels, all eight weapons, monster AI, collision physics, and spatial audio in WebGL. WSD to move, mouse to look. No installer, no emulator. Just open a URL and play. It's a demo of what you can do with modern web graphics and a reminder that Quake still holds up 30 years later.
