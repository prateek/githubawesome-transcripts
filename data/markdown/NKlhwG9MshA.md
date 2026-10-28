# GitHub Trending Weekly \#25: droidclaw, micasa, Surge, BarraCUDA, NullClaw,  AssppWeb, Polymarket CLI

[Watch the original video](https://www.youtube.com/watch?v=NKlhwG9MshA)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Introduction

[0:00](https://www.youtube.com/watch?v=NKlhwG9MshA&t=0)

What is up developers and welcome back to GitHub awesome. It is time for GitHub trending weekly episode number 25 featuring 32 of the open-source projects trending right now. Let's get started.

## droidclaw

[0:14](https://www.youtube.com/watch?v=NKlhwG9MshA&t=14)

- https://github.com/unitedbyai/droidclaw

You know those old Android phones sitting in a drawer? Droid Claw turns them into AI agents. Give it a goal in plain English. It reads the screen, reasons about what to do, taps, types, and swipes via ADB until the job is done. No APIs needed. Just install your favorite apps on the device and let the agent work through them like a human would. It comes with 35 readytouse workflows for messaging and lifestyle tasks.

## micasa

[0:41](https://www.youtube.com/watch?v=NKlhwG9MshA&t=41)

- https://github.com/cpcloud/micasa

Macasa is a TUI for home ownership. Tracks maintenance schedules with autocomputed due dates, projects from planning to completion, vendor quote comparisons, appliance warranty tracking, incident logging, file attachments and spending analytics. Single Seekite file on your machine. No cloud, no account, no subscription. It writes a SQL, runs the query and summarizes results. Vim style modal keys, fuzzy search, column sorting.

## Surge

[1:08](https://www.youtube.com/watch?v=NKlhwG9MshA&t=68)

- https://github.com/surge-downloader/surge

Surge is a download manager built in Go for the terminal. Opens multiple connections simultaneously with three optimizations. Splits the largest chunk when a worker goes idle. Uses work stealing so fast connections help slow ones. And restarts any worker below 30% of mean speed for a better connection path. three modes, interactive TUI dashboard, headless background server, and CLI client for scripting and batch downloads.

## BarraCUDA

[1:36](https://www.youtube.com/watch?v=NKlhwG9MshA&t=96)

- https://github.com/Zaneham/BarraCUDA

Someone looked at NVIDIA's walled garden and thought, how hard can it be? Barracuda is an open- source CUDA compiler targeting AMD GPUs written in 15,000 lines of C99 with zero LLVM dependency. You feed it the same.CU CU files you'd give NVCC and it compiles directly to AMD RDDNA3 GFX11 machine code spitting out ELF.hscode binaries that AMD GPUs can actually run.

## NullClaw

[2:02](https://www.youtube.com/watch?v=NKlhwG9MshA&t=122)

- https://github.com/nullclaw/nullclaw

The ARMS race for the leanest AI agent infrastructure just got a new contender and this one is written in Zigg. Nullclaw is a 678 kilobyte static binary that boots in under 2 milliseconds on Apple silicon, under 8 milliseconds on a8 GHz edge core and uses about 1 megabyte of RAM at peak. Everything is a vtable interface, swap providers, channels, tools, memory backends, sandbox, and tunnel providers with a config change. AP web is a self-hosted

## AssppWeb

[2:30](https://www.youtube.com/watch?v=NKlhwG9MshA&t=150)

- https://github.com/Lakr233/AssppWeb

tool for installing iOS apps outside the app store. The server doesn't receive Apple credentials. All Apple API communication happens in the browser via web assembly using lib curl with embed TLS. The server acts as a TCP relay using the WISP protocol and handles IPA compilation from CDN downloads. The developers warn against using public instances since a malicious host could modify the front end to capture credentials.

## Polymarket CLI

[2:59](https://www.youtube.com/watch?v=NKlhwG9MshA&t=179)

- https://github.com/Polymarket/polymarket-cli

This is an official Rust CLI from the Poly Market team for interacting with their prediction market platform. You can browse markets and events without a wallet. With a wallet configured, you can place limit and market orders, cancel positions, and view your portfolio. It displays order books and handles conditional token operations on chain. It supports JSON output for scripting and has an interactive shell mode.

## x-reader

[3:26](https://www.youtube.com/watch?v=NKlhwG9MshA&t=206)

- https://github.com/runesleo/x-reader

Give it a URL, any URL from any platform, and get back structured content. Xreader is a universal content reader that fetches and normalizes content from seven plus platforms, Telegram, YouTube, and RSS. It autodetects the platform and routes to the right fetcher for video and audio content. Claude code skills add full whisper transcription.

## Better Hub

[3:48](https://www.youtube.com/watch?v=NKlhwG9MshA&t=228)

- https://github.com/better-auth/better-hub

BetterHub is a reimagined GitHub collaboration platform from the better off team built for humans and agents together. Cleaner repo overview with readme rendering and activity feed. PR reviews with inline diffs and AI summaries. Improved issue triage. Built-in AI assistant called Ghost that reviews PRs, navigates code, triages issues, and writes commit messages.

## vinext

[4:12](https://www.youtube.com/watch?v=NKlhwG9MshA&t=252)

- https://github.com/cloudflare/vinext

Cloudflare just open-sourced vinex, a VIT plugin that reimplements the entire Nex.js API surface from scratch. So you can deploy Next.js apps to Cloudflare workers without the Next.js build tool chain. All 33 next module imports are shimmed to VIT compatible implementations. The Vinex deploy command builds and deploys to Cloudflare workers in one shot with zero cold starts.

## Taste-Skill

[4:38](https://www.youtube.com/watch?v=NKlhwG9MshA&t=278)

- https://github.com/Leonxlnx/taste-skill

Taste skill is a design system injection for Claude code that fixes the AI slot problem. Stops Claude from generating weird gradients, tight spacing, and generic dashboards. Forces the agent to follow linear grade design principles. Proper whites space, subtle borders, intentional typography, turns your backend focused coding agent into a senior product designer that knows when to use skeleton loaders instead of spinners.

## x86CSS

[5:05](https://www.youtube.com/watch?v=NKlhwG9MshA&t=305)

- https://github.com/rebane2001/x86CSS

X86 CSS is an x86 CPU emulator written entirely in CSS. It runs 8086 machine code compiled from C using GCC. The implementation uses CSS animations and container queries to clock the CPU without JavaScript. It includes a C pre-processor, 8086 instruction set, memory model, and IO system all in CSS. A Python script generates repetitive CSS sections. The demo runs a C program that executes computation within CSS.

## financial-services-plugins

[5:34](https://www.youtube.com/watch?v=NKlhwG9MshA&t=334)

- https://github.com/anthropics/financial-services-plugins

This is an official collection of clawed plugins from Enthropic for financial services workflows. It covers investment banking, equity research, private equity, and wealth management. The plugins include skills, slashcomands, sub aents, and MCP connectors for workflows like research reports, comparable company analysis, deal sourcing, and portfolio tracking. Everything is just markdown and JSON, no code, no infrastructure.

## DataClaw

[6:01](https://www.youtube.com/watch?v=NKlhwG9MshA&t=361)

- https://github.com/peteromallet/dataclaw

Data Claw exports Claude code session logs to HuggingFace. It parses session history and applies automatic redaction, path anonymization, secret detection via rejects and entropy analysis and email redaction. It exports to JSONL format with message content, token usage, and metadata. The tool exports locally first for manual review before publishing. Exported data sets are tagged data claw on hugging face. Galaxy profile generates animated SVG cards for GitHub

## galaxy-profile

[6:27](https://www.youtube.com/watch?v=NKlhwG9MshA&t=387)

- https://github.com/vinimlo/galaxy-profile

profiles with a space theme. It creates four cards. A spiral galaxy header with your name and tagline, a stats card with GitHub metrics from GraphQL, a language usage chart with focus areas, and a featured projects card with orbital animations connecting repositories. Three galaxy arms represent your focus areas, each with a color and associated technologies.

## enveil

[6:54](https://www.youtube.com/watch?v=NKlhwG9MshA&t=414)

- https://github.com/GreatScott/enveil

This one solves a problem that's become increasingly real in the AI coding agent era. AI tools like claw code and cursor can read files in your project directory which means a plain text.env file is a secret dump waiting to happen. Ian veil solves this by ensuring plain text secrets never exist on disk at all. Written in Rust 31 automated security tests every claim independently verifiable.

## babyshark

[7:20](https://www.youtube.com/watch?v=NKlhwG9MshA&t=440)

- https://github.com/vignesh07/babyshark

Baby Shark is a terminal based pcap analyzer focused on network flows. It opens.pcap and PNG files and lets you browse flows, examine packets, and follow streams with search highlighting. The weird stuff view highlights high latency flows, TCP retransmits, resets, incomplete handshakes, and DNS failures with explanations. You can bookmark flows, export markdown reports, and capture live traffic with display filters.

## Lifo

[7:47](https://www.youtube.com/watch?v=NKlhwG9MshA&t=467)

- https://github.com/lifo-sh/lifo

LIFO is a Linux-like operating system that runs in the browser. Instead of emulating Linux, it uses browser APIs as system calls and the browser runtime as the kernel. It includes a bashlike shell with alexer, parser, and a interpreter. The shell supports pipes, variable expansion, and job control. It has over 60 commands covering file system operations, text processing, networking, and archiving.

## safepilot

[8:13](https://www.youtube.com/watch?v=NKlhwG9MshA&t=493)

- https://github.com/3DCF-Labs/safepilot

Safe pilot is a security first personal AI assistant built in Rust. tagline AI assistant that executes real work safely. Instead of giving LLM's root access and crossing fingers, Safe Pilot puts heavy guard rails and security boundaries around your agents execution environment. AI can do meaningful work, editing files, running scripts, managing data without accidentally nuking your CRC directory or leaking API keys.

## ClawFeed

[8:41](https://www.youtube.com/watch?v=NKlhwG9MshA&t=521)

- https://github.com/kevinho/clawfeed

If you're overwhelmed by information and want your AI to curate it down to what actually matters, Claw Feed is the answer. It's an AI powered news digest that pulls from RSS, Hacker News, Reddit, and GitHub trending and generate structured summaries on your schedule every 4 hours, daily, weekly, or monthly. Share curated source bundles with others as source packs. Bookmark articles for deep AI analysis later.

## Web Flight Simulator

[9:07](https://www.youtube.com/watch?v=NKlhwG9MshA&t=547)

- https://github.com/dimartarmizi/web-flight-simulator

Web Flight Simulator is a browser-based flight sim that combines 3JS and CesiumJS. 3JS renders the aircraft, particle effects, and lighting, while CEMJS streams realorld 3D terrain data. You pilot an F-15 with afterburners, heat-seeking missiles, radar warnings, and a HUD that includes pitch ladder, heading tape, and minim. The audio includes engine sounds, GPWS alerts, and radar warning tones.

## mdr

[9:34](https://www.youtube.com/watch?v=NKlhwG9MshA&t=574)

- https://github.com/CleverCloud/mdr

MDR by CleverCloud is a fast, lightweight markdown reader built in Rust. Boots in milliseconds. Renders mermaid flowcharts, sequence diagrams, and pie charts natively as SVGs. No headless browser required. Live reload feature updates instantly as AI tools generate text. Forget slow electron apps or browser previewers. This is the markdown viewer for modern dev workflows with AI coding tools.

## OpenBrowserClaw

[10:00](https://www.youtube.com/watch?v=NKlhwG9MshA&t=600)

- https://github.com/sachaa/openbrowserclaw

Open browser claw is a full personal AI assistant that runs as a progressive web app with the browser as the server. Messages, sessions, and tasks stored in index DB files in the browser's origin private file system. Agent runs in a web worker calling the anthropic API directly. Optional Telegram integration via HTTPS polling for phoneto browser messaging.

## CLIAMP

[10:23](https://www.youtube.com/watch?v=NKlhwG9MshA&t=623)

- https://github.com/bjarneo/cliamp

It's Win Amp in your terminal. Clamp is a retro terminal music player built in go with bubble tea and lip gloss with MP3 playback, a 10B spectrum visualizer rendered in ASI, a 10B parametric EQ, and full playlist management with shuffle and repeat modes. The ASI art in the readme will tell you everything you need to know about the Vibe. If you remember Win Amp 2 and you live in the terminal, this is going to make you very happy.

## thepopebot

[10:53](https://www.youtube.com/watch?v=NKlhwG9MshA&t=653)

- https://github.com/stephengpope/thepopebot

The Popebot is an autonomous AI agent framework that runs 24/7 using GitHub actions as its compute layer. The repository itself is the agent's brain. Every action is logged as a git commit, giving you a complete auditable and reversible history of what the AI did and why. Securely handles API keys, integrates with Telegram for chat, and can evolve its own code through pull requests. A tireless developer living natively inside your GitHub repo.

## VoxClaw

[11:23](https://www.youtube.com/watch?v=NKlhwG9MshA&t=683)

- https://github.com/malpern/VoxClaw

VoxClaw is a Mac OS menu bar app and CLI tool that provides texttospech for AI agents. You run it on your Mac and point OpenClaw or other agents at the HTTP endpoint to narrate outputs. It uses Apple TTS by default and supports open AITS or 11 Labs with an API key. A floating overlay displays the text with wordbyword highlighting synchronized to the speech.

## Everything Quick Search

[11:47](https://www.youtube.com/watch?v=NKlhwG9MshA&t=707)

- https://github.com/PinchToDebug/EverythingQuickSearch

Windows users know the pain of the built-in search being slow. Everything by Void Tools solves that. Instant file search using the NTFS MFTt. This project takes it further. A native WPF app that integrates directly with everything's SDK and brings it into the Windows start menu experience with category based filtering, keyboard first navigation with Vim style shortcuts and a polished modern UI.

## agentsview

[12:13](https://www.youtube.com/watch?v=NKlhwG9MshA&t=733)

- https://github.com/wesm/agentsview

Agents view is a local web app for browsing AI coding agent sessions. It indexes claude code session files into a seeite database with FTCS5 full text search. The dashboard shows activity heat maps, tool usage stats, velocity metrics, and project breakdowns. It updates via server sent events as sessions receive new messages. It includes keyboard navigation with Vim bindings and can export sessions as HTML or publish to GitHub gist.

## Spacemoji

[12:41](https://www.youtube.com/watch?v=NKlhwG9MshA&t=761)

- https://github.com/j-ncel/Spacemoji

Space Emoji is a single HTML file. No dependencies, no framework with an HTML 5 canvas animation that sends you flying through space filled with spinning emojis using real 3D perspective projection math. Click and hold to warp. Release to drift. 700 emoji particles by default configurable via an expose config object. The readme includes the actual projection equations.

## Agent View

[13:06](https://www.youtube.com/watch?v=NKlhwG9MshA&t=786)

- https://github.com/Frayo44/agent-view

Agent view is a T-Maxbased terminal dashboard for managing multiple AI coding agent sessions simultaneously. Real-time status indicators show running, waiting for input, idle, stopped, or errored states. Create, attach, restart, and fork sessions into git work trees organized into groups, all keyboard driven. Oneline install for Mac OS and Linux, including WSL.

## Axon

[13:29](https://www.youtube.com/watch?v=NKlhwG9MshA&t=809)

- https://github.com/harshkedia177/axon

Axon is a code intelligence engine that indexes your entire repo into a structured knowledge graph. Not just vector search matching words, but a map of every function, class, and dependency. Plugs into clawed code via MCP, letting your agent trace execution flows, find dead code, and calculate the blast radius of breaking changes before you write them. The difference between controlF and actually giving your AI a brain.

## Seedance 2.0

[13:57](https://www.youtube.com/watch?v=NKlhwG9MshA&t=837)

- https://github.com/Emily2040/seedance-2.0

Seedance 2.0 O is a comprehensive production toolkit for quadal AI filmm with bite danc's model. Instead of flat prompts, you get a complete director's framework with modular composable skills. AI agents load on demand. Covers text, image, and videotovideo workflows with control over camera language, lighting design, precise audio, lip sync.
