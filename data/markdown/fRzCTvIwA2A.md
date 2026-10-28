# GitHub Trending Weekly \#22: Edit Banana, agent-device, claudes-c-compiler, prek, paqet, Pro Workflow

[Watch the original video](https://www.youtube.com/watch?v=fRzCTvIwA2A)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Introduction

[0:00](https://www.youtube.com/watch?v=fRzCTvIwA2A&t=0)

Welcome to GitHub Trending Weekly, episode 22. This week, I've got 31 projects packed with tools and AI projects you won't want to miss. Let's get started.

## Edit Banana

[0:11](https://www.youtube.com/watch?v=fRzCTvIwA2A&t=11)

- https://github.com/BIT-DataLab/Edit-Banana

Edit Banana converts diagram images into editable Draw IO files. Upload a screenshot of a flowchart or architecture diagram, and it segments the shapes, extracts text, and converts it into an editable format. The output preserves colors and layout. Each box, arrow, and label becomes a separate dragable element in draw.io. It handles dashed lines, curved connectors, and multi-layer diagrams that simpler conversion tools miss.

## Codex Desktop Rebuild

[0:38](https://www.youtube.com/watch?v=fRzCTvIwA2A&t=38)

- https://github.com/Haleclipse/CodexDesktop-Rebuild

OpenAI released their new Codeex Desktop app for Mac OS. Only Codex Desktop Rebuild extracts the Electron components from the official installer and recompiles the native modules to run on Windows and Linux. The rebuilt version includes the same interface as the Mac app, parallel agent threads, the visual planning dashboard, and git workree isolation running natively on your PC.

## agent-device

[1:03](https://www.youtube.com/watch?v=fRzCTvIwA2A&t=63)

- https://github.com/callstackincubator/agent-device

Agent device is a CLI for controlling iOS and Android devices programmatically. It lets agents or scripts open apps, tap buttons, type text, scroll, and take screenshots. Uses accessibility APIs to inspect and interact with UI elements. Works with simulators and physical devices. Includes retry logic for flaky connections and stale UI snapshots. Supports multiple sessions, coordinate or reference based targeting.

## ACE-Step UI

[1:30](https://www.youtube.com/watch?v=fRzCTvIwA2A&t=90)

- https://github.com/fspecii/ace-step-ui

Paying 10 bucks a month for Sunno when there's a free open- source model that runs on your own GPU. AEP UI just gave you a Spotify grade interface for AEP 1.5. Full song generation with vocals and lyrics, instrumental mode, built-in audio editor, stem separation, custom parameters for everything. Create unlimited tracks, no Q limits. You own all the rights. Runs completely local. No monthly fees ever. Claude Opus 4.6 ROC compiler in Rust.

## claudes-c-compiler

[1:57](https://www.youtube.com/watch?v=fRzCTvIwA2A&t=117)

- https://github.com/anthropics/claudes-c-compiler

Full tool chain, pre-processor, parser, SSA optimizer, code generator, assembler, linker, debug symbols. It compiles the Linux kernel, Postgress School, FFmpeg, Reddus, and Cumu. Supports x86, ARM, and RiskV. Works as a drop-in GCC replacement for make and CMake. Nearly 4,000 commits, all AI generated with no human editing.

## Step 3.5 Flash

[2:21](https://www.youtube.com/watch?v=fRzCTvIwA2A&t=141)

- https://github.com/stepfun-ai/Step-3.5-Flash

Step 3.5 Flash is a 196 billion parameter model that only uses 11 billion parameters per token. This sparse activation design means it runs fast despite its size. You get the intelligence of a flagship model without the lag. The new multi-token prediction system generates code at 350 tokens per second by predicting four tokens simultaneously. It handles 256k context windows and works with text, images, and other input types.

## prek

[2:52](https://www.youtube.com/watch?v=fRzCTvIwA2A&t=172)

- https://github.com/j178/prek

Pre is a Rust rewrite of pre-commit that runs faster and uses less disk space. It's a single binary with no dependencies that can run your existing pre-commit configs in parallel. Unlike pre-commit which creates separate Python environments for each repository, PRE uses a shared tool chain. This means faster hook installation and less wasted disc space from duplicate tools. C Python and fast API have already switched to it. Firewall blocking your traffic, VPN not working. Packet just

## paqet

[3:19](https://www.youtube.com/watch?v=fRzCTvIwA2A&t=199)

- https://github.com/hanselime/paqet

went around everything. Pocket is a SOCK 5 proxy that bypasses firewalls using raw packet injection. Instead of using the OS network stack, it injects TCP packets directly via PCAP, avoiding kernel level connection tracking. Traffic is encrypted with KCP requires IP tables rules to prevent the kernel from sending RST packets. Once configured, it's invisible to standard network monitoring.

## Pro Workflow

[3:49](https://www.youtube.com/watch?v=fRzCTvIwA2A&t=229)

- https://github.com/rohitg00/pro-workflow

Carpathy said AI writes 80% of his code and he spends 20% reviewing it. Pro Workflow literally optimizes for that exact ratio. It's a clawed code plugin with persistent SQLite memory. Every correction you make gets stored and searched with full text search. While Claude's thinking in one branch, you're coding in another. Works across 32 AI coding agents via Skillit translation.

## ClawRouter

[4:15](https://www.youtube.com/watch?v=fRzCTvIwA2A&t=255)

- https://github.com/BlockRunAI/ClawRouter

Claw router is a smart LLM router for your OpenClaw agent that stops you from burning money. If it's a basic question, it routes it to a cheap model like deepseek. If it's complex code, it escalates to Claude sonnet. It runs entirely locally, supports micro payments, so you don't need to manage 30 different API keys, and finally cuts your inference bill by 80% without you lifting a finger.

## Kumo

[4:41](https://www.youtube.com/watch?v=fRzCTvIwA2A&t=281)

- https://github.com/cloudflare/kumo

Cloudflare open-sourced Kumo, their component library built on base UI. This means the accessibility features keyboard navigation, focus management, Arya attributes are built into the components by default. The library is tree shakable and includes a semantic color token system. The repo includes an agents.mmd file. This makes it easier for tools like claude to generate code using kumo components correctly.

## OpenViking

[5:08](https://www.youtube.com/watch?v=fRzCTvIwA2A&t=308)

- https://github.com/volcengine/OpenViking

Open Viking is Bite Dance's approach to organizing agent memory as a hierarchical file system instead of a flat vector database. This reduces token usage compared to loading everything up front. The retrieval system searches directories recursively. It identifies the most relevant directory first, then explores its contents layer by layer. There's also a visualization tool for inspecting which contexts were retrieved during a task.

## maestro

[5:36](https://www.youtube.com/watch?v=fRzCTvIwA2A&t=336)

- https://github.com/its-maestro-baby/maestro

Maestro is a Mac OS app for running multiple AI coding sessions in parallel. It manages up to 12 simultaneous sessions, each in its own terminal and git work tree. You can run different tasks, features, bug fixes, refactors on separate branches with different models without conflicts. Includes a git graph view, MCP server for agent status reporting and preset configurations. Works with any AI CLI tool.

## tgterm

[6:02](https://www.youtube.com/watch?v=fRzCTvIwA2A&t=362)

- https://github.com/antirez/tgterm

TGTM is a C project by Anti-Rez, the Reddus creator that lets you control your Mac terminal through Telegram. You connect a bot to your machine and send commands from your phone. Perfect for casually interacting with agents or just finishing that one last thing before bed. It uses SQLite to store state and supports basic screenshots. No SSH setup, VPN or web dashboard required, just messages.

## difi

[6:29](https://www.youtube.com/watch?v=fRzCTvIwA2A&t=389)

- https://github.com/oug-t/difi

You know that feeling when you type get diff and your terminal just vomits a wall of red and green at you? Yeah, I got tired of that. This is DIY. It's basically a code review assistant that doesn't make you want to cry. Clean file tree on the left, your actual changes on the right. If you spot a bug while reviewing, you just press E. It instantly opens Neoim and jumps your cursor to that exact line so you can fix it.

## paqctl

[6:56](https://www.youtube.com/watch?v=fRzCTvIwA2A&t=416)

- https://github.com/SamNet-dev/paqctl

Living behind a firewall that blocks half the internet. Yeah, VPNs don't always cut it anymore. PAQCTL is a censorship circumvention tool that runs packet and GFW Knocker backends to tunnel traffic using raw sockets and KCP. You install it on a VPS and run both methods simultaneously. If one gets blocked, you can switch to the other. It provides a sock 5 proxy.

## Mission Control

[7:20](https://www.youtube.com/watch?v=fRzCTvIwA2A&t=440)

- https://github.com/crshdn/mission-control

Mission control is a project management interface for coordinating multiple AI agents. You define agents in markdown files, assign tasks through a cananban board, and the system dispatches them to open claw sessions. Agents report when they finish tasks and can communicate with each other for coordination. There's a supervisor agent that reviews completed work. Agents can run on different machines and upload their output via API.

## Causal-Forcing

[7:48](https://www.youtube.com/watch?v=fRzCTvIwA2A&t=468)

- https://github.com/thu-ml/Causal-Forcing

Causal forcing is a Singua research project for real-time video generation on a single RTX 4090. It uses a three-stage distillation process to train diffusion models that can generate video frame by frame. Two model variants are available. Frame-wise generation produces more dynamic motion while chunkwise generation prioritizes temporal consistency.

## BotMaker

[8:12](https://www.youtube.com/watch?v=fRzCTvIwA2A&t=492)

- https://github.com/jgarzik/botmaker

Botmaker is a web interface for deploying chat bots. You select an AI provider, OpenAI, Anthropic, etc., and a messaging platform, Telegram, Discord, and it creates an isolated Docker container for each bot with its own workspace and environment variables. The dashboard shows resource usage and lets you start, stop, or delete bots. It automatically cleans up unused containers.

## OpenHamClock

[8:36](https://www.youtube.com/watch?v=fRzCTvIwA2A&t=516)

- https://github.com/accius/openhamclock

OpenHam Clock is an open- source rebuild of Hamlock, a popular ham radio dashboard tool. OpenHam clock displays satellite imagery, space weather data from Noah, DX spots, band conditions, and POD soda activator locations on an interactive map. It updates every 30 seconds and includes eight map styles. It runs on Raspberry Pi, desktop environments, Docker or cloud platforms like Railway.

## pdf2epub-paddle

[9:02](https://www.youtube.com/watch?v=fRzCTvIwA2A&t=542)

- https://github.com/jarodise/pdf2epub-paddle

This tool converts scanned PDFs to EPUB format using Paddle OCR layout analysis API. It detects document structure, paragraphs, headers, images, and tables, and automatically splits the content into chapters based on heading hierarchy. It removes page numbers and running headers, embeds images, and includes checkpointing to resume interrupted conversions.

## openusage

[9:25](https://www.youtube.com/watch?v=fRzCTvIwA2A&t=565)

- https://github.com/robinebers/openusage

Open usage is a menu bar app that displays usage data for AI coding tools in one place. It currently supports cursor, claude, and codecs with plans to add Gemini and copilot. It uses a plug-in system. Each provider is a JavaScript file that fetches usage data and renders it as progress bars. The app refreshes automatically every few minutes. It's built with Tori and React, so it runs on multiple platforms.

## Skyll

[9:51](https://www.youtube.com/watch?v=fRzCTvIwA2A&t=591)

- https://github.com/assafelovic/skyll

Sky is an API that lets AI agents search for and retrieve skill files at runtime. Instead of pre-installing skills, agents can query the API for relevant skill DMD files and inject them into context as needed. It aggregates skills from skills.sh and other sources, ranks results by relevance, and returns structured JSON. It caches responses to avoid GitHub rate limit issues. The API is available as both a REST endpoint and an MCP server. XFR is a network

## xfr

[10:20](https://www.youtube.com/watch?v=fRzCTvIwA2A&t=620)

- https://github.com/lance0/xfr

throughput testing tool with a graphical interface. It displays live bandwidth graphs instead of terminal output and includes a server dashboard for monitoring multiple tests simultaneously. It supports TCP, UDP, and Quick protocols with built-in encryption. It also exports Prometheus metrics, offers multiple color themes, and lets you compare test results over time.

## NodeWarden

[10:45](https://www.youtube.com/watch?v=fRzCTvIwA2A&t=645)

- https://github.com/shuaiplus/NodeWarden

Node Warden is a Bit Warden compatible password manager that runs on Cloudflare workers. It requires no server maintenance and uses Cloudflare's free tier. You deploy it by setting a JWT secret, then use the official Bit Warden clients to connect to your instance. Passwords are endto-end encrypted and file attachments are stored in Cloudflare R2.

## voxtral.c

[11:08](https://www.youtube.com/watch?v=fRzCTvIwA2A&t=668)

- https://github.com/antirez/voxtral.c

VoxTrell C is a C implementation of Mistrol's 4 billion parameter speechtoext model with no external dependencies. You compile the C program, download the 9 GB model file and run transcription locally. It memory maps model weights from disk for fast loading and streams decoded tokens to the terminal in real time. You can pipe audio through ffmpeg or use the C API to integrate transcription into other applications.

## Foundry

[11:36](https://www.youtube.com/watch?v=fRzCTvIwA2A&t=696)

- https://github.com/lekt9/openclaw-foundry

Foundry is an openclaw plugin that observes repetitive workflows and generates code to automate them. If you run the same sequence of commands multiple times, Foundry can create a tool that executes them as a single action. The system can modify its own codebase based on what it learns. It validates new code in a sandbox before deployment and tracks which automations work reliably.

## AutoFigure

[12:01](https://www.youtube.com/watch?v=fRzCTvIwA2A&t=721)

- https://github.com/ResearAI/AutoFigure-Edit

Autofigure generates editable SVG diagrams from text descriptions of research methods. You input a method section and it produces a vector graphic you can modify. It uses an LLM to create the initial layout, applies SAM 3 segmentation to identify components, removes backgrounds, and assembles the result into an SVG template with an embedded editor.

## Skill Scanner

[12:24](https://www.youtube.com/watch?v=fRzCTvIwA2A&t=744)

- https://github.com/cisco-ai-defense/skill-scanner

Skill scanner is a Cisco security tool that analyzes AI agent skills for vulnerabilities before deployment. It checks for prompt injection attacks, data exfiltration risks and malicious code. It uses four detection methods. Yara pattern matching, behavioral analysis that traces data flows, LLM based semantic analysis, and virus total integration for binary scanning.

## youtu-rag

[12:48](https://www.youtube.com/watch?v=fRzCTvIwA2A&t=768)

- https://github.com/TencentCloudADP/youtu-rag

UTRAG is a retrieval system from Tencent that uses specialized agents for different data types. It supports PDFs, Excel files, and databases. The system includes separate agents for text to SQL conversion, Excel analysis with Python execution and metadatabased document filtering. It runs locally with minio storage and includes a web UI built without external dependencies.

## Itsytv

[13:13](https://www.youtube.com/watch?v=fRzCTvIwA2A&t=793)

- https://github.com/nickustinov/itsytv-macos

TV is a Mac OS menu bar app. It provides a floating remote interface with a D-pad, standard playback buttons, and keyboard shortcut support for navigation. It handles text input for search and passwords, displays now playing information with album art and progress bars, and shows an app grid with icons from the App Store.
