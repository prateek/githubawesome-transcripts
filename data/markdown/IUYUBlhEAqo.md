# Hacker News Show \#6: re\_gent, dirac, ml-sharp-web, pollen, dac, open-bias, lavinmq, cell, unixmagic

[Watch the original video](https://www.youtube.com/watch?v=IUYUBlhEAqo)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Introduction

[0:00](https://www.youtube.com/watch?v=IUYUBlhEAqo&t=0)

Welcome back to GitHub awesome. This is the Hacker News show number six. 35 open source projects that have recently been trending on Hacker News. Let's get into it.

## re\_gent

[0:12](https://www.youtube.com/watch?v=IUYUBlhEAqo&t=12)

- https://github.com/regent-vcs/re_gent

Let Claude Code run while you grab coffee. Come back to 500 lines changed across 14 files. Git tracks the changes but has no idea why the AI did what it did. Regent is a dedicated version control system for your AI agents. runs alongside git captures every prompt, tool call and conversation context in a local regent directory using Blake3 hashing and SQLite. RGT log shows the exact conversation behind a code change.

## Coding-Flashcards

[0:41](https://www.youtube.com/watch?v=IUYUBlhEAqo&t=41)

- https://github.com/ad-si/Coding-Flashcards

Trying to learn a new programming language or game engine and hate forgetting syntax. Coding flashcards is a massive collection of over 800 flashcards teaching Rust, SQLite, Godote, and Wolf from language strictly from first principles. Every card is written in plain human readable markdown. Edit your notes in simple text and the built-in script instantly converts them into ready to import Anky decks or clean PDF files.

## dirac

[1:08](https://www.youtube.com/watch?v=IUYUBlhEAqo&t=68)

- https://github.com/dirac-run/dirac

Durac is a coding agent obsessed with efficiency and context curation. A highly optimized fork of the popular Klein project. Instead of expensive file reads, it uses a manipulation to understand your code structure, pulling in only the exact context the model actually needs. Massively parallel operations surgically modifies your files using brilliant hash anchored edits.

## ml-sharp-web

[1:33](https://www.youtube.com/watch?v=IUYUBlhEAqo&t=93)

- https://github.com/bring-shrubbery/ml-sharp-web

Apple recently dropped their cutting edge sharp model that generates mind-blowing 3D Gaussian splats from a single 2D image. MLS Sharp Web takes Apple's state-of-the-art Sharp model and runs it completely inside your web browser using the ONNX runtime web. Open the app in Chrome or Edge, upload a flat 2D photo, and the model runs locally on your machine to generate a fully rotatable 3D Gaussian splat top file.

## pollen

[2:01](https://www.youtube.com/watch?v=IUYUBlhEAqo&t=121)

- https://github.com/sambigeara/pollen

Pollen is a distributed WASUM runtime in Go. No central control plane, no master node. Install a single static binary on any machine. Workloads seated into the cluster. Nodes make deterministic local decisions using gossip crdts to place replicas based on capacity. Zerorust MTLS and NAT traversal automatic. String together a Raspberry Pi, a VPS, and your laptop into a single compute blob acting like a massive server farm.

## dac

[2:28](https://www.youtube.com/watch?v=IUYUBlhEAqo&t=148)

- https://github.com/bruin-data/dac

DAC is dashboard as code, an open- source tool from Bruin that defines interactive SQLback dashboards in pure YAML and TSX. Because everything is code, it's perfectly designed for AI agents. Ships with bundled skills for clawed and codecs. Tell your AI build me a sales dashboard and it autonomously writes the TSX, handles the semantic layer and renders charts.

## open-bias

[2:52](https://www.youtube.com/watch?v=IUYUBlhEAqo&t=172)

- https://github.com/open-bias/open-bias

Open bias is an AI guardrails framework that physically forces your agents to follow the rules. Sits as a transparent proxy between your app and Anthropic, OpenAI, or Gemini. Define hard boundaries in a plain text rules.mmd file. Open bias evaluates live traffic with a sidecar judge LLM or a zerocost finite state machine. Detects a violation and intervenes, logs or blocks the response before it reaches users.

## lavinmq

[3:19](https://www.youtube.com/watch?v=IUYUBlhEAqo&t=199)

- https://github.com/cloudamqp/lavinmq

Lavend MQ is an ultraquick message Q server built from scratch in Crystal. Uses the same AMQP091 protocol. So it's a drop-in replacement. Swap your connection string and existing code works instantly. Sustains 800,000 messages a second. Handles long cues effortlessly. Tiny fraction of the RAM versus Erlang based brokers. Native MQTT support included.

## cell

[3:44](https://www.youtube.com/watch?v=IUYUBlhEAqo&t=224)

- https://github.com/garritfra/cell

Cell is a fast terminal spreadsheet editor in Rust that feels exactly like Vim. All your muscle memory key bindings work. Hjkl I to insert DD Y. Don't let the minimal interface fool you. Full Excel compatible formula syntax. Sum average if with range references. natively imports CSV and TSV. Headless CLI mode evaluates formulas programmatically in bash scripts.

## unixmagic

[4:08](https://www.youtube.com/watch?v=IUYUBlhEAqo&t=248)

- https://github.com/drio/unixmagic

Unix magic is a curated collection of shell wizardry that accomplishes complex tasks using pure raw Unix tools instead of installing heavy third party packages leverages a sed gp and zs for file manipulation text processing and system monitoring in a single line. oneliners that convert JSON to CSV, analyze server logs in real time, and manage massive file migrations with zero external dependencies.

## agentswift

[4:35](https://www.youtube.com/watch?v=IUYUBlhEAqo&t=275)

- https://github.com/hpennington/agentswift

Agent Swift is a native Mac OS app that acts as an autonomous AI coding agent for Apple Platform development. Describe what you want in plain English. Powered by Claude, it autonomously discovers your Xcode project structure, edits source files, and compiles via custom CLI. It actually boots the iOS simulator and runs UI automation to physically verify the app behaves exactly like you asked.

## winpodx

[5:00](https://www.youtube.com/watch?v=IUYUBlhEAqo&t=300)

- https://github.com/kernalix7/winpodx

WinPod X lets you run actual Windows apps as perfectly integrated native Windows on your Linux desktop, not a wine wrapper. Spins up a headless Windows container in the background and bridges the app to your screen via free RDP remote app. Zero config setup, no manual networking, no ISO downloads. The automated Python CLI handles everything. Each app gets its own icon, fully pinnable and alt tabable like a native Linux app.

## agent-desktop

[5:28](https://www.youtube.com/watch?v=IUYUBlhEAqo&t=328)

- https://github.com/lahfir/agent-desktop

Relying on vision models and screenshot loops to click around a desktop is slow, brittle, and burns massive tokens. Agent Desktop is a blazing fast 15 megabyte native automation CLI in Rust. Instead of guessing pixel locations, it hooks directly into your OS accessibility tree, reads the exact semantic structure of your desktop, windows, menus, text inputs, cuts token usage by up to 96%.

## ableton-live-mcp

[5:54](https://www.youtube.com/watch?v=IUYUBlhEAqo&t=354)

- https://github.com/bschoepke/ableton-live-mcp

Ableton Live MCP is a model context protocol bridge for Ableton Live. AI agents like Claude see your entire arrangement, read your device settings, analyze MIDI tracks. Ask it to fix the discordant section of your song and it finds the exact tracks where notes collide. Craziest part, an agent audio tap using Max for Live actively probes the actual audio signal chain in real time to optimize your mix.

## throwaway

[6:20](https://www.youtube.com/watch?v=IUYUBlhEAqo&t=380)

- https://github.com/sslboard/throwaway

Throwaway is a sleek, fully open-source API that catches fake accounts. Runs entirely as a lightweight Cloudflare worker. No expensive email validation services. No bloated block lists in your back end. Deploy in seconds. Intercept signups. Checks the email domain against a continuously updated throwaway provider list with practically zero latency. Runs for fractions of a cent on the edge.

## auto-arch-tournament

[6:46](https://www.youtube.com/watch?v=IUYUBlhEAqo&t=406)

- https://github.com/FeSens/auto-arch-tournament

Autoarchchnament takes Carpathy's auto research loop and points it at hardcore hardware design. starts with a basic five-stage risk v CPU in system verarilog and unleashes an AI agent to propose code and benchmark microarchitectural improvements a strict sandboxed formal verifier with BMC checks and co- simulation break the instruction set code is rejected context key is an open-source credential

## kontext-cli

[7:10](https://www.youtube.com/watch?v=IUYUBlhEAqo&t=430)

- https://github.com/kontext-dev/kontext-cli

broker for AI agents in go acts as an enterprisegrade security token service in your terminal instead of raw keys context intercepts the request authenticates you via OIDC and injects shortlived dynamically scoped tokens directly into the agents memory. Secrets never touch disk vanish when the session ends. Full audit telemetry and granular allow deny policies on every tool call.

## rocky

[7:38](https://www.youtube.com/watch?v=IUYUBlhEAqo&t=458)

- https://github.com/rocky-data/rocky

Rocky is an open- source SQL transformation engine in Rust. Acts as a modern control plane for data bricks, Snowflake, BigQuery or local duct DB. provides compile time type safety and column level lineage before queries execute. Gitlike branching for your data. Automatic schema drift detection per model cost attribution so you know which query is spiking your cloud bill.

## 49Agents

[8:02](https://www.youtube.com/watch?v=IUYUBlhEAqo&t=482)

- https://github.com/49Agents/49Agents

49 agents is an open- source 2D IDE for managing AI agents in native CLI. Ditches traditional tabs and puts everything on a single infinite zoomable spatial canvas. Terminals, code editors, git views, all on one map. Killer feature, multi-achine orchestration. Connect agents on different devices into one unified workspace without messy SSH dependencies. Self-host locally or run across a cluster via tail scale. Conwis is a multiplayer workspace for human AI collaboration. Realtime shared canvas

## kanwas

[8:29](https://www.youtube.com/watch?v=IUYUBlhEAqo&t=509)

- https://github.com/kanwas-ai/kanwas

where your team and AI agent look at the exact same documents, research, and decisions. Drop in user interviews or competitor screenshots and watch the AI draft an implementation plan with its thought process streaming live. The workspace is backed by a git versioned markdown file system. Pull notes via CLI straight into cloud code.

## sigmap

[8:57](https://www.youtube.com/watch?v=IUYUBlhEAqo&t=537)

- https://github.com/manojmallick/sigmap

Dumping your codebase into cursor or clawed code burns massive tokens and skyrockets your bill. Sigmap is a zero dependency CLI that solves AI context bloat, scans your repo across 21 languages and extracts a hyper compact signature map of function names, classes, and exported interfaces. TF IDF ranking instead of heavy vector databases. 80% retrieval accuracy while shrinking token usage by up to 97%.

## loopsy

[9:24](https://www.youtube.com/watch?v=IUYUBlhEAqo&t=564)

- https://github.com/leox255/loopsy

Loopsy is a phoneto- terminal bridge for AI coding agents. Secure persistent terminal on iPhone or Android controlling claude code, cursor or open code. Fullcolored PTY session persistence, built-in voice input. The craziest part, agentto agent LAN mode. A local Damon finds your other machines via MDNS and exposes them to claude code through an MCP server.

## TRiP

[9:48](https://www.youtube.com/watch?v=IUYUBlhEAqo&t=588)

- https://github.com/carlovalenti/TRiP

Trip is a complete fully functional transformer AI engine written from scratch in just 15,000 lines of pure C. No Python, no TensorFlow, no ONNX, just C. Linear algebra on float arrays, lib JPEG for vision, X11 for the UI. Built by a veteran firmware engineer over 18 months of lunch breaks, inference, chat, vision, custom BPE tokenizer, full training with back prop. Natively loads hugging face safe tensors. Compiles with a 10-line make file.

## studybible-mcp

[10:18](https://www.youtube.com/watch?v=IUYUBlhEAqo&t=618)

- https://github.com/djayatillake/studybible-mcp

Study Bible MCP turns your AI into a worldclass biblical scholar. Plugs Claude directly into scholarly databases. Real-time access to full Greek and Hebrew lexicons, LSJ Greek, BDB Hebrew, morphologically tagged texts. Hooks into theographic genealogy graphs to map family relationships, locations, and historical events. Hardwired with a hermeneutical methodology from Fee and Stewart's how to read the Bible for all it's worth.

## gitgres

[10:46](https://www.youtube.com/watch?v=IUYUBlhEAqo&t=646)

- https://github.com/calebwin/gitgres

Gitgress reimagines version control a private re-implementation of GitHub running entirely on Postgre has SQL. Every piece of repository metadata lives in Postgres rows written in Rust. Blazing fast database native Git server with fully tunable consistency. Your AI agents run colllocated with the database fetching diffs and pushing code without rate limited cloud APIs.

## pi-hosts

[11:10](https://www.youtube.com/watch?v=IUYUBlhEAqo&t=670)

- https://github.com/hunvreus/pi-hosts

PI is a radically minimal extensible alternative to claude code for building custom tool packages. Pi hosts gives your terminal AI agent direct access to your remote servers. Instead of manually sshing into AWS or Hzner to restart services, check Docker logs, or perform DevOps tasks, just tell your AI. It securely connects and runs commands from your chat interface. Strict customizable permission controls.

## destiny

[11:36](https://www.youtube.com/watch?v=IUYUBlhEAqo&t=696)

- https://github.com/xodn348/destiny

Want your AI coding assistant to double as your fortune teller? Destiny is a clawed code plugin bringing classical East Asian astrology straight to your terminal. Not asking the LLM to hallucinate. A deterministic Python script ma mathematically computes your actual 8 character birth charting hexogs and five element relationships from real calendar algorithms. Then Claude generates a personalized pros interpretation.

## ttf-doom

[12:05](https://www.youtube.com/watch?v=IUYUBlhEAqo&t=725)

- https://github.com/4RH1T3CT0R7/ttf-doom

Yes, a literal font file can run Doom. TTF Doom runs a 3D raycasting engine completely inside a True Type Fonts hinting virtual machine. The 1991 True Type instruction set has a stack storage memory and conditionals. Turing Complete, a tiny JavaScript wrapper, handles keyboard input and passes player coordinates through CSS font variation settings. Atom is the SQLite of agent frameworks, a complete fullyfeatured AI

## adam

[12:28](https://www.youtube.com/watch?v=IUYUBlhEAqo&t=748)

- https://github.com/sqliteai/adam

agent library written entirely in pure C. A single H have include Atom.h gives you a full autonomous agent loop with tool calling, long-term memory, voice processing, and session management. Natively supports anthropic, OpenAI, Gemini, and Llama.cpp for local ondevice inference.

## nfsdiag

[12:51](https://www.youtube.com/watch?v=IUYUBlhEAqo&t=771)

- https://github.com/lsferreira42/nfsdiag

Mounting an NFS share that hangs, times out, or throws an obscure permission error is incredibly frustrating. Usually you manually run show mount, RPC info, ping ports, check permissions one by one. NFS DIAG automates all of that. A tiny lightning fast tool in pure C. Give it a server IP and it acts as an automated NFS doctor. Checks network connectivity, RPC bind, supported NFS versions, mount D status, exports, root squash, file locking, stale handles.

## btry

[13:19](https://www.youtube.com/watch?v=IUYUBlhEAqo&t=799)

- https://github.com/meribold/btry

BTRI is a command line battery status monitor for Linux laptops written entirely in pure x8664 assembly. The entire compiled ELF executable is under 300 bytes, not kilobytes. Literally less than 300 bytes of machine code bypasses all standard libraries. Manually reads is power supply files to print watt hours and percentage. The install instruction isn't a download link, just a single line of B 64 you decode and pipe into your shell.

## imgui\_bundle

[13:50](https://www.youtube.com/watch?v=IUYUBlhEAqo&t=830)

- https://github.com/pthom/imgui_bundle

Stop fighting Guey frameworks. Start building.gi bundle wraps the legendary deer imgu library into a massive batteries included ecosystem pre-wired with powerful add-ons. Implot for 2D and 3D data plotting. Mm vision for image inspection, interactive node editors, markdown, file dialog, command pallet. Write logic in C++ or Python. Run across Windows, Mac OS, Linux, iOS, and Android.

## let-go

[14:16](https://www.youtube.com/watch?v=IUYUBlhEAqo&t=856)

- https://github.com/nooga/let-go

Let Go is a Bitecode compiler and VM for a closure dialect natively in Go. Tiny 10 megabyte static binary with a blistering 7 millisecond cold boot. About 50 times faster than the JVM, three times faster than Babashka. Compile scripts into zero dependency executables or self-contained WASUM web apps with full terminal emulation. Native Go interrupt. Ghost strructs map to close your records.

## stage-cli

[14:42](https://www.youtube.com/watch?v=IUYUBlhEAqo&t=882)

- https://github.com/ReviewStage/stage-cli

AI agent builds a massive feature and you come back to a gigantic messy git diff. Stage cle is a local open-source command line tool that structures AI generated code diffs into a readable story. Works with any coding agent. Instructs your agent to read your branch's changes, break them into sequential chapters, and pops them open in a gorgeous browser viewer. Review step by step exactly how the architectural logic flows.

## php-fts

[15:09](https://www.youtube.com/watch?v=IUYUBlhEAqo&t=909)

- https://github.com/olivier-ls/php-fts

PHPFTS is a blazing fast full text search engine written entirely in pure PHP with zero extensions required. No database driver, no Java runtime, under 1,000 lines of code implementing a true inverted index, tokenization, stemming, and the industry standard BM25 ranking algorithm. Drop it into the cheapest shared hosting and it just works. Less than 50 megabytes of memory. \[music\]
