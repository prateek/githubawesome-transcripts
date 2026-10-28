# GitHub Trending Today \#25: 34 Open Source Projects You Need to See This Week

[Watch the original video](https://www.youtube.com/watch?v=BTo_pfe8gSc)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Introduction

[0:00](https://www.youtube.com/watch?v=BTo_pfe8gSc&t=0)

Welcome back to GitHub Awesome. This is GitHub trending today number 25. And in this episode, we're looking at 34 open-source projects that developers are starring right now. Let's get into it.

## claude-code-tips

[0:13](https://www.youtube.com/watch?v=BTo_pfe8gSc&t=13)

- https://github.com/ykdojo/claude-code-tips

If you use Claude Code, you need this repository. Claude-code tips by YK Dojo is a massive collection of over 45 pro tips for getting the most out of your AI coding assistant. It includes an awesome custom status line script so you can track your token usage and git branch right in the terminal, tricks for cutting your system prompt in half, and a custom DX plugin to automate your most common tasks. It's a gold mine for productivity.

## VMPrint

[0:42](https://www.youtube.com/watch?v=BTo_pfe8gSc&t=42)

- https://github.com/cosmiciron/vmprint

Great origin story here. A film director wanted to write screenplays in plain text. Tried converting markdown to properly formatted PDF. Found every tool too heavy or unpredictable. So he built a layout engine instead. The screenplay is still waiting. VMPrint is a pure TypeScript zero dependency type setting engine that produces deterministic biter PDF output across any JavaScript runtime, browser, Cloudflare workers, all of it. Want to build rich terminal

## terminui

[1:11](https://www.youtube.com/watch?v=BTo_pfe8gSc&t=71)

- https://github.com/ahmadawais/terminui

UIs in TypeScript without touching a class-based framework? Termini is a pure functional TUI library. No classes, no this, no mutation, just plain functions and plain objects. Widgets are functions, layouts are constraint solvers. Styles compose functionally under the hood. It's double buffered. Only changed cells flush to the terminal, so updates are smooth, even in fast loops.

## Context+

[1:37](https://www.youtube.com/watch?v=BTo_pfe8gSc&t=97)

- https://github.com/ForLoopCodes/contextplus

Are you tired of your AI agent burning through tokens and losing context? Context plus is an MCP server that acts as semantic intelligence for largecale engineering. By combining tree sitter a parsing with spectral clustering, it turns your massive code base into a searchable hierarchical feature graph. In real world tests, this tool saves up to 10,000 tokens per prompt and cuts task completion time in half. If you are

## openfang

[2:04](https://www.youtube.com/watch?v=BTo_pfe8gSc&t=124)

- https://github.com/RightNow-AI/openfang

tired of AI agents that just sit there waiting for you to type a prompt, you need to see OpenFang. It's an agent OS where you spin up autonomous workers, they call them hands, to continuously map out research, scrape data, or generate leads on a schedule. You set the parameters and they just run. It's a 137,000line Rust code base shipped as a single binary with literally zero clippy warnings.

## clihub

[2:32](https://www.youtube.com/watch?v=BTo_pfe8gSc&t=152)

- https://github.com/thellimist/clihub

Klyhub is solving a massive problem with the model context protocol. Normally, MCP dumps massive JSON schemas into your AI's context window, burning through tokens before you even start coding. Klyhub fixes this by generating lightweight CLI tools from MCP servers. It uses a lazy loading approach where the agent just calls help to discover what it needs. The result, it makes using MCP up to 94% cheaper.

## Claude Forge

[2:59](https://www.youtube.com/watch?v=BTo_pfe8gSc&t=179)

- https://github.com/sangrokjung/claude-forge

If you love Oh My ZSH for your terminal, you are going to love Claude Forge for your AI. It transforms clawed code from a basic CLI into a fullfeatured development environment installed in just 5 minutes via SIM links. It comes pre-wired with 11 specialized agents, 36 slash commands, and an incredible six layer security hook system that prevents things like destructive SQL drops or rogue curl bash commands. Okay, this project is just hilarious.

## spank

[3:26](https://www.youtube.com/watch?v=BTo_pfe8gSc&t=206)

- https://github.com/taigrr/spank

It's called Spank. Written in Go, this script hooks into the Apple silicon accelerometer via IoKit HID. What does it do? When you physically slap your MacBook, it yells back at you. It's a completely ridiculous, incredibly fun weekend project that shows off how you can tap into Mac OS hardware sensors in creative ways.

## EdgeQuake

[3:49](https://www.youtube.com/watch?v=BTo_pfe8gSc&t=229)

- https://github.com/raphaelmansuy/edgequake

Graphra is one of the most interesting areas in AI engineering right now, and Edgequake is a high performance Rust implementation of it. The core idea, traditional rag loses the relationships between documents. Edgequake extracts a massive knowledge graph at index time and traverses those connections at query time, so your AI actually understands how concepts relate to each other, not just what they say individually.

## Context Mode

[4:17](https://www.youtube.com/watch?v=BTo_pfe8gSc&t=257)

- https://github.com/mksglu/claude-context-mode

Context mode might save your AI coding sessions. Have you ever had a playwright snapshot or a massive log file dump into your terminal and instantly ruin your AI's memory? Context mode is an MCP server that isolates tool execution in subprocesses. It traps the raw output in a local SQLite database and only sends what's relevant to the LLM using fuzzy search. It reduces output size by up to 98% letting you code for hours without losing context.

## CoPaw

[4:47](https://www.youtube.com/watch?v=BTo_pfe8gSc&t=287)

- https://github.com/agentscope-ai/CoPaw

Copa is an open-source personal AI assistant built on the agent scope framework. You run local LLMs, so your data never leaves your machine, but it also connects to the messaging apps you already live in, Discord, iMessage. It can summarize your news, manage files, and you can extend it with your own capabilities. It's a compelling alternative to all those SAS AI assistant subscriptions.

## deff

[5:12](https://www.youtube.com/watch?v=BTo_pfe8gSc&t=312)

- https://github.com/flamestro/deff

Reviewing git diffs in the terminal usually isn't fun until now. Def is an interactive Rust TUA for sidebyside git diff reviews. It gives you syntax highlighting, perfectly tinted added and deleted lines, and full support for Vim style motions. You can navigate file by file, toggle reviewed states, and even do iniff searches. It's lightning fast and makes reviewing PRs straight from your terminal an absolute breeze.

## Oclock

[5:39](https://www.youtube.com/watch?v=BTo_pfe8gSc&t=339)

- https://github.com/azialle/Oclock

Ever wanted to visualize global time zones without a boring flat map? Olock is a stunning interactive 3D WebGL globe that renders Earth's real-time day and night cycle right in your browser. But the real magic is behind the scenes. A custom Python pipeline uses Shapely to find the exact representative point inside every country, maps it to the precise time zone, and injects that live data into the globe's geojson.

## Kibitz

[6:06](https://www.youtube.com/watch?v=BTo_pfe8gSc&t=366)

- https://github.com/kibitzsh/kibitz

Kibitz lets you decode your AI agents. If you're running multiple clawed code or codec sessions, the terminal noise gets overwhelming. Kibitz watches those sessions and turns the raw terminal output into readable narrative commentary. Better yet, from the Kibits VS Code panel, you can dispatch prompts and route commands to multiple active sessions without ever having to tab hop between terminals.

## OpenClaw-RL

[6:32](https://www.youtube.com/watch?v=BTo_pfe8gSc&t=392)

- https://github.com/Gen-Verse/OpenClaw-RL

OpenClaw RL is an async reinforcement learning framework that trains a personalized AI agent simply by using it. Wrap your local model as an OpenAI compatible API and just chat normally. In the background, it intercepts conversations, scores responses with a process reward model, computes gradients, and updates the weights automatically. No labeling, no curation.

## RetroTick

[6:56](https://www.youtube.com/watch?v=BTo_pfe8gSc&t=416)

- https://github.com/lqs/retrotick

Pure nostalgia and pure engineering madness. Retrotick runs classic Windows and DOSs executables directly in your browser. Just drag a.exe onto the page. Freell, mind sweeper, Skree, QBasic, 3D pipes with full OpenGL, all running in a browser tab, zero install, zero VM. How? It's a complete x86 CPU emulator plus a Win32 API compatibility layer built entirely in Typescript from scratch.

## CorridorKey

[7:22](https://www.youtube.com/watch?v=BTo_pfe8gSc&t=442)

- https://github.com/nikopueringer/CorridorKey

If you've ever done green screen compositing, you know the pain. green spill on edges, hair and motion blur destroyed by binary masks, hours of rotoscoping. Corridor Key is a neural network built specifically to solve this. Give it a raw green screen frame and a rough course mask, and it reconstructs the true color of every foreground pixel as if the green screen was never there, plus a clean linear alpha.

## Monarch

[7:48](https://www.youtube.com/watch?v=BTo_pfe8gSc&t=468)

- https://github.com/Nuzair46/Monarch

Monarch is a brilliant utility for multimonitor setups and OLED screen owners. Windows doesn't make it easy to temporarily disable a monitor, but Monarch lets you soft disable any screen with a click. No unplugging cables required. It saves your OLED displays from static burn-in when you're just focusing on one screen and lets you save and restore your exact display layouts instantly.

## agentchattr

[8:14](https://www.youtube.com/watch?v=BTo_pfe8gSc&t=494)

- https://github.com/bcurts/agentchattr

If you use multiple AI coding agents and are tired of copy pasting code between their terminals, this is for you. It spins up a browser chat room where your agents share an MCP server. You can atmention different agents and they will read the chat and reply to each other. It supports channels, image sharing, and voice typing, creating a truly collaborative AI workspace.

## SAS Audio Processor

[8:38](https://www.youtube.com/watch?v=BTo_pfe8gSc&t=518)

- https://github.com/shiehn/sas-audio-processor

SAS audio processor is essentially a dedicated audio toolkit specifically built for AI agents. If you're building voice-driven apps or real-time AI assistance, this toolkit provides the essential primitives for processing, cleaning, and routing audio streams before they ever hit your LLM. It's the perfect bridge between raw microphone input and your agents engine.

## VoicePaste

[9:03](https://www.youtube.com/watch?v=BTo_pfe8gSc&t=543)

- https://github.com/junyuw2289-svg/voicepaste

Voice paste is an incredibly handy utility that does exactly what it sounds like. Instead of typing or using traditional clipboard shortcuts, Voice Paste lets you dictate text directly into any input field on your computer. It's a lightweight TypeScriptbased tool that uses speechtoext to turn your spoken words into pasted text anywhere on your system. Total productivity hack. Git City turns your GitHub profile into a 3D pixel art city you can fly through in your

## Git City

[9:28](https://www.youtube.com/watch?v=BTo_pfe8gSc&t=568)

- https://github.com/srizzon/git-city

browser. More commits, taller building, more repos, wider base. You can explore other developers buildings, see their recent activity as lit up windows on the skyline. It's built with Nex.js and 3JS and it is incredibly charming. Someone is going to get lost in this for an entire afternoon.

## aso-skills

[9:53](https://www.youtube.com/watch?v=BTo_pfe8gSc&t=593)

- https://github.com/Eronred/aso-skills

Shipped a mobile app and have no idea how to get it discovered. ASOS skills is a collection of AI agent skills for app store optimization. Plug it into clawed code, cursor, or any compatible assistant and get expert ASO guidance right inside your IDE. 15 skills covering everything. Full audits, keyword research, metadata optimization, competitor analysis, screenshot strategy, and more.

## superbrain

[10:18](https://www.youtube.com/watch?v=BTo_pfe8gSc&t=618)

- https://github.com/sidinsearch/superbrain

You know that feeling when you save something on Instagram and never look at it again? Superbrain fixes that. It's a self-hosted Android app. Share any URL from your phone and AI instantly gives you a title, summary, and auto tags. Instagram reels even get Shazammed for background music. Everything lives in a local SQLite database you own, plus daily reminders, so you actually revisit your saved content.

## SmallClaw

[10:44](https://www.youtube.com/watch?v=BTo_pfe8gSc&t=644)

- https://github.com/XposeMarket/SmallClaw

If you love the OpenClaw framework, but want to run it on smaller local models like a 4 billion parameter Quen, this is what you need. Their massive new update just dropped, adding background tasks, an encrypted secret vault, and the ability to spawn specialist sub agents. It even supports web hooks and MCP servers, turning your tiny local LLM into a fully automated powerhouse.

## BullshitBench

[11:09](https://www.youtube.com/watch?v=BTo_pfe8gSc&t=669)

- https://github.com/petergpt/bullshit-benchmark

The incredibly named benchmark. We all know LLM love to confidently hallucinate when asked nonsense questions. This benchmark specifically tests whether a model will identify and push back against complete garbage prompts instead of playing along. It's a tool for evaluating the actual reasoning boundaries and safety tuning of open weights models.

## frouter

[11:33](https://www.youtube.com/watch?v=BTo_pfe8gSc&t=693)

- https://github.com/jyoung105/frouter

If you use free AI APIs like open router or NVIDIA NIM, you know how often they randomly die or get rate limited. Frouter is a terminal UI that live pings all free models in parallel every 2 seconds. It ranks them by availability, SWE bench score, and latency. When a model drops, you just pick the next best one, and Fouter instantly rewrites your AI agents config to keep you working without interruption.

## MedgeClaw

[11:59](https://www.youtube.com/watch?v=BTo_pfe8gSc&t=719)

- https://github.com/xjtulyc/MedgeClaw

This one is for the biomed and scientific computing folks in the community. Megclaw combines the MEG AI framework with OpenClaw to create a specialized biomedical research assistant, packing over 140 scientific skills tailored for biioinformatics, drug discovery, and medical data analysis. If you're building AI tools in healthcare or life sciences, this repository represents a serious head start.

## Voxt

[12:26](https://www.youtube.com/watch?v=BTo_pfe8gSc&t=746)

- https://github.com/hehehai/voxt

Vox T is a menu bar voice input app for Mac OS. If you want a distraction-free environment for dictation and typing without relying on expensive SAS subscriptions, Vox delivers exactly that. Hold a global hotkey, speak release. Transcribe text gets pasted directly wherever your cursor is. Two trigger modes, two shortcuts, one for pure transcription, one for speech plus translation across seven languages.

## text2geo

[12:53](https://www.youtube.com/watch?v=BTo_pfe8gSc&t=773)

- https://github.com/charonviz/text2geo

need to convert messy place names into exact GPS coordinates without paying a fortune in Google Maps API fees. This is an offline fuzzy geocoder that does exactly that. Because it runs locally on your machine, there are absolutely zero API limits. It's incredibly fast and perfect for data scientists processing massive data sets of unstandardized location data. This project is just

## gitcredits

[13:16](https://www.youtube.com/watch?v=BTo_pfe8gSc&t=796)

- https://github.com/Higangssh/gitcredits

plain fun. Get credits. Type this into your terminal and it reads your git log to roll a cinematic movie style end credit sequence for your repository. Your top contributor is listed as the director. All other devs are starring and it plays against an animated starfield background. It's the absolute perfect way to celebrate shipping a massive release.

## Aqua

[13:41](https://www.youtube.com/watch?v=BTo_pfe8gSc&t=821)

- https://github.com/quailyquaily/aqua

As multi-agent systems get more complex, secure agentto agent communication becomes a real problem. Aqua is a CLI messaging tool and P2P protocol built in Go specifically designed for AI agents to talk to each other securely across networks. End-to-end encryption, identity verification, and this is the clever part, it bypasses firewalls using Circuit Relay. Managing multiple AI agents can feel like hurting cats. That's where Mission Control comes in.

## mission-control

[14:04](https://www.youtube.com/watch?v=BTo_pfe8gSc&t=844)

- https://github.com/MeisnerDan/mission-control

It's an open-source task management app purpose-built for AI agents. Everything runs locally in JSON files. No databases or cloud dependency. The killer feature is the autonomous background damon that pulls your task Q, manages concurrency, and automatically spawns and restarts clawed code sessions to get the work done.

## PDF Hand-Out Studio

[14:32](https://www.youtube.com/watch?v=BTo_pfe8gSc&t=872)

- https://github.com/flodlol/PDF-Slides-to-Hand-Outs

PDF Handout Studio converts presentation slides into printable handout layouts. Two, four, six, or nine slides per page entirely in your browser. No account, no server upload. Your PDF never leaves your device. The creator built it because Acrobat buries the feature behind a subscription. Online tools want you to upload sensitive decks to random servers.
