# GitHub Trending Weekly \#18: ffmpreg, WebGL CRT Shader, ticket, Weft, JS Analyzer, Petit, mHC.cu

[Watch the original video](https://www.youtube.com/watch?v=ms5ls5wWwMg)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Introduction

[0:00](https://www.youtube.com/watch?v=ms5ls5wWwMg&t=0)

Today we're back with GitHub Trending Weekly number 18 where we break down the most exciting open- source projects developers are starring and building with right now. Let's jump straight in.

## ffmpreg

[0:13](https://www.youtube.com/watch?v=ms5ls5wWwMg&t=13)

- https://github.com/yazaldefilimone/ffmpreg

FFmpreg, a pure Rust multimedia toolkit aiming to be a safe Rust native alternative to FFmpeg itself. Think decode, transform, encode MX Demox pipelines with Rust's safety and strong typing instead of C spaghetti of pointers and UB. handle audio video files the same way FFmpeg does, but in Rust's memory safe world with predictable execution and explicit pipelines. You can plug input, apply transforms frame by frame, and output processed files.

## WebGL CRT Shader

[0:42](https://www.youtube.com/watch?v=ms5ls5wWwMg&t=42)

- https://github.com/gingerbeardman/webgl-crt-shader

Want that retro CRT TV feel in your web graphics, game, or demo? WebGL CRT shader is a super lightweight WebGL GLSL shader that recreates the classic curved screen look, scan lines, and analog vibes straight in the browser. It's not just a filter, it's a GPU shader pass that makes modern canvases feel like they're running on 80s hardware. This thing runs right in WebGL, so any HTML 5 canvas or 3JS scene can get that nostalgic CRT shimmer and distortion without heavy overhead.

## ticket

[1:14](https://www.youtube.com/watch?v=ms5ls5wWwMg&t=74)

- https://github.com/wedow/ticket

Forget bloated issue trackers. Ticket is a git native CLI ticket system built as a single bash script that gives you powerful task tracking with zero setup. It lives right in your repo, uses markdown tickets, and lets you manage dependencies, priorities, and workflows without leaving your terminal. Each ticket is just a markdown file in tickets with YAML front matter. So you can search, edit, and navigate with your IDE or RIP GRP, and everything stays versioned in Git.

## Weft

[1:44](https://www.youtube.com/watch?v=ms5ls5wWwMg&t=104)

- https://github.com/jonesphillip/weft

Imagine Trello, but AI agents actually do your tasks for you. That's exactly what weft is all about. a personal task board where you create tasks, assign them to AI agents, and they get to work. Whether it's drafting emails, updating spreadsheets, creating PRs, managing issues, or even writing code, agents take the heavy lifting off your plate. Built to be self-hosted on Cloudflare's platform, weft runs the entire taskboard in your own infrastructure.

## CallMe

[2:14](https://www.youtube.com/watch?v=ms5ls5wWwMg&t=134)

- https://github.com/ZeframLou/call-me

CallMe is a minimal clawed code plugin that does exactly one thing. It calls you when it matters. You start a task, step away, and when Claude finishes, gets stuck, or needs a decision, your phone rings. No polling, no tab babysitting. You can talk through the next step in real time, then let it keep working. It's intentionally simple, works on any phone or watch, and stays out of the way until you're actually needed.

## Unsloth-MLX

[2:40](https://www.youtube.com/watch?v=ms5ls5wWwMg&t=160)

- https://github.com/ARahim3/unsloth-mlx

If you've ever wanted to fine-tune large language models right on your Mac without paying for cloud GPUs, Unsloth MLX is one of the most exciting communitydriven projects on GitHub right now. It brings the Unsloth fine-tuning experience which makes training LLM fast and memory efficient to Apple Silicon using Apple's native MLX framework.

## better-all

[3:03](https://www.youtube.com/watch?v=ms5ls5wWwMg&t=183)

- https://github.com/shuding/better-all

If you hate manually optimizing your promise.all all calls. When tasks depend on one another, better all might just become your new secret weapon. This tiny TypeScriptJS library gives you a smarter promise.all that automatically figures out task dependencies and runs everything with maximal parallelism without you writing spaghetti promise code.

## JS Analyzer

[3:25](https://www.youtube.com/watch?v=ms5ls5wWwMg&t=205)

- https://github.com/jenish-sojitra/JSAnalyzer

JS Analyzer, a specialized Burp Suite extension that turns clientside code into a treasure map for security researchers. Instead of manually combing through minified JavaScript, this tool sits in your proxy and automatically extracts hard-coded secrets and cloud storage URLs in real time. It features intelligent noise filtering to strip out false positives, giving you a clean, actionable list of potential vulnerabilities from leaked AWS keys to forgotten admin routes.

## mHC.cu

[3:55](https://www.youtube.com/watch?v=ms5ls5wWwMg&t=235)

- https://github.com/AndreSlavescu/mHC.cu

Developers who live on GPU kernels, this one's for you. MHC.cu is a CUDA first kernel library implementing MHC operations straight on the GPU with blazing throughput. It's all high performance CUDA code designed to run core tensor ops like matrix multiplies, activations, softmax, and more inside massively parallel CUDA kernels. So heavy compute paths live where they belong on the GPU.

## Claude Usage

[4:21](https://www.youtube.com/watch?v=ms5ls5wWwMg&t=261)

- https://github.com/richhickson/claudecodeusage

Claude usage, a native Mac OS menu bar utility that acts as a fuel gauge for your AI coding sessions. Instead of guessing when you'll hit a rate limit, this lightweight app gives you a real-time readout of your session and weekly quotas right in your status bar. It securely taps into your existing local credentials to query usage stats directly from Anthropic using simple color-coded warnings to let you know when it's time to wrap up or slow down.

## How Browsers Work

[4:50](https://www.youtube.com/watch?v=ms5ls5wWwMg&t=290)

- https://github.com/krasun/howbrowserswork

How browsers work is an interactive guide that teaches you exactly what happens under the hood when you hit enter on a URL. From DNS to TCP handshakes to HTML parsing, DOM building, layout, and painting the page on screen. It's more than a readme. Think tiny interactive snippets that let you see the browser pipeline in action and build a mental model of how HTTP requests, reflow, and compositing actually work.

## Petit

[5:17](https://www.youtube.com/watch?v=ms5ls5wWwMg&t=317)

- https://github.com/PedramNavid/petit

Petit, a lightweight task orchestrator written in Rust that helps you coordinate jobs and async tasks without the heavy overhead of full-blown schedulers. It's designed to give you a tiny core with rich extensibility, ideal for lightweight pipeline orchestration and developer centric automation. You get a simple TUI dashboard and an orchestrator that just works without needing complex configs or massive YAML files.

## Qwen3-VL-Embedding

[5:44](https://www.youtube.com/watch?v=ms5ls5wWwMg&t=344)

- https://github.com/QwenLM/Qwen3-VL-Embedding

Quen 3VL embedding provides models that turn text, images, screenshots, and even video frames into unified semantic vectors, so your AI can compare and retrieve across modalities in one shared space. What makes it stand out is crossmodal representation learning, meaning an image and a caption describing it can live in the same vector space, so you can compute similarity, do multimodal search, visual question answering, and rich retrieval tasks at scale.

## bento.nvim

[6:14](https://www.youtube.com/watch?v=ms5ls5wWwMg&t=374)

- https://github.com/serhez/bento.nvim

This plugin is all about smarter buffer management inside your editor. Bento.nv Envim gives you a minimal, efficient, and extensible buffer manager that helps you see and switch open files with ease without the clutter of heavy UI plugins. Think of it as a lightweight buffer dashboard with smart ordering, quick navigation, and customizable actions that keep your workflow focused instead of drowning in tabs.

## SMTP Tunnel Proxy

[6:41](https://www.youtube.com/watch?v=ms5ls5wWwMg&t=401)

- https://github.com/x011/smtp-tunnel-proxy

This one's wild. SMTP tunnel proxy, a covert networking tool that disguises your internet traffic as harmless email communication to bypass deep packet inspection. That means traffic from your browser, Git client, or anything else can be sent over what looks like legit SMTP handshake and mail flow. Perfect for restricted networks where traditional VPNs get blocked.

## DFlash

[7:05](https://www.youtube.com/watch?v=ms5ls5wWwMg&t=425)

- https://github.com/z-lab/dflash

DFL is a novel speculative decoding method using block diffusion to drastically speed up text generation without losing quality. Instead of purely auto reggressive sampling, it drafts outputs in parallel with a lightweight diffusion model, then verifies them, giving you huge decoding speeds. It's designed so your fast drafter model works alongside a traditional target model to deliver both speed and correctness.

## archlint

[7:33](https://www.youtube.com/watch?v=ms5ls5wWwMg&t=453)

- https://github.com/archlinter/archlint

Devs who hate silent architectural decay, Archlint is a fast architecture smell detector for TypeScript JavaScript that keeps your project's design healthy over time. Instead of just dumping rule warnings like ESLint, it focuses on architecture level regressions, things like circular imports, bad dependency layering, and design smells that silently creep in as the codebase grows.

## C-From-Scratch

[7:57](https://www.youtube.com/watch?v=ms5ls5wWwMg&t=477)

- https://github.com/williamofai/c-from-scratch

C from scratch is a rigorous guide to building safety critical systems in C the right way. This repo doesn't just show you code. It teaches you to define every problem exactly, prove your solution mathematically, and then write the C implementation. Inside, you'll find modules like Pulse, a heartbeat livveness monitor built with formal contracts, and baseline, a statistical normality detector with provable invariance and tests backing every assumption.

## Unifideck

[8:26](https://www.youtube.com/watch?v=ms5ls5wWwMg&t=506)

- https://github.com/mubaraknumann/unifideck

Unifodc is an open-source deck loader plugin that unifies your game libraries on the Steam Deck. It pulls together your Steam, Epic Games Store, and GOG libraries into one seamless interface inside Steam OS. No more jumping between launchers or menus. With Unified installed, titles from different stores show up side by side in your Steam library, giving you a single unified gaming experience.

## asciify-them

[8:52](https://www.youtube.com/watch?v=ms5ls5wWwMg&t=532)

- https://github.com/ndrscalia/asciify-them

Got an image you wish you could drool in text form? Askify them is a Python project that turns images into sweet ASKY art right in your terminal or CLI complete with antsy color codes if you want that vintage hacker aesthetic vibe. You can run it as a library or as a lightweight CLI and it's built so you can plug it into scripts, pipelines or dashboards easily.

## rip

[9:16](https://www.youtube.com/watch?v=ms5ls5wWwMg&t=556)

- https://github.com/cesarferreira/rip

If you've ever wanted a way faster, cleaner dropin for killing processes straight from your terminal, RIP is the Rust powered CLI you didn't know you needed. It gives you an interactive fuzzy finder UI listing all your running processes sorted by CPU, memory, name, or P and lets you select and kill them with a keystroke. Just run RIP in your shell, type part of a program name like Node or Chrome, and watch the matching processes filter in real time.

## Claude Code Config

[9:44](https://www.youtube.com/watch?v=ms5ls5wWwMg&t=584)

- https://github.com/jarrodwatts/claude-code-config

If you're using Claude Code to power your AIdriven workflows, this repo is a gold mine of customization. Claude Code Config is Jared Watt's personal Claude Code configuration packed with tailored rules, hooks, agents, skills, and custom slash commands that supercharge the developer UX. Instead of the default setup, this config gives you opinionated settings that automate everything from specialized agents to clever command workflows.

## httpz

[10:14](https://www.youtube.com/watch?v=ms5ls5wWwMg&t=614)

- https://github.com/avsm/httpz

If you're building super fast HTTP servers and care way more about performance and memory efficiency than FAT frameworks, HTTPZ is a niche but killer experimental project worth starring. This Okamel powered HTTP 1.1 parser and server aims for zero heap allocations, meaning it parses, serializes, and handles requests without touching the GC heap, leading to insanely low overhead.

## PasteGuard

[10:39](https://www.youtube.com/watch?v=ms5ls5wWwMg&t=639)

- https://github.com/sgasser/pasteguard

For developers worried about accidental data leaks, Pasteguard is a privacy first guard layer for your clipboard. It intercepts paste actions and automatically detects sensitive info like API keys, passwords, tokens, emails, and other PII before it goes into chat bots, AI UIs, or web forms, giving you a chance to block or mask it. Built to run locally with zero telemetry, everything happens on your device. No cloud, no data collection.

## SimpleLLM

[11:07](https://www.youtube.com/watch?v=ms5ls5wWwMg&t=667)

- https://github.com/naklecha/simple-llm

If you've ever wanted to peek under the hood of how LLM inference actually works, Simple LLM is one of the cleanest and most hackable engines on GitHub right now. It's a minimal 950line LLM inference engine built from scratch. Designed so you can read, extend, and comprehend every piece of the pipeline from tokenization to continuous batching.

## Habit Tracker

[11:30](https://www.youtube.com/watch?v=ms5ls5wWwMg&t=690)

- https://github.com/coleam00/habit-tracker

Habit Tracker, a full stack personal habit tracking app built as a workshop project for developers. This one isn't just a simple static page. It's a React frontend plus Fast API backend combo where you can create habits, mark them complete daybyday, and visualize your streaks on a calendar grid. All running locally on your machine with no accounts required.

## Droppy

[11:54](https://www.youtube.com/watch?v=ms5ls5wWwMg&t=714)

- https://github.com/iordv/Droppy

Dropppy, the productivity tool for Mac OS. It combines five tools into one slick package. Not shelf for hiding files under your webcam. a floating basket that pops up anywhere and a clipboard manager that remembers everything you copy. New features, check a media player right in your notch and custom volume and brightness HUDs that look way better than the default.

## CodeVibes

[12:18](https://www.youtube.com/watch?v=ms5ls5wWwMg&t=738)

- https://github.com/danish296/codevibes

Code Vibes is a free AI powered code reviewer built to actually explain what's wrong with your code, not just slap a line number on a problem. It's like having a senior engineer comb through your repo line by line and tell you why something's dangerous, insecure, or just plain broken instead of just flagging it. This tool connects to GitHub, scans your repository with AI, and streams results in real time as issues are found.

## C.A.F.E.

[12:45](https://www.youtube.com/watch?v=ms5ls5wWwMg&t=765)

- https://github.com/FezVrasta/cafe-hass

Cafe Hass, a dedicated MQTT bridge that gives your smart home direct control over your Mac energy levels. It wraps the native Mac OS Caffonate command into a toggleable home assistant switch, allowing you to remotely prevent your computer from sleeping. Instead of relying on shaky wake on land packets or manual settings, this utility maintains a persistent connection, letting you script insomnia modes for your workstation based on presence detection or running tasks.

## flow

[13:16](https://www.youtube.com/watch?v=ms5ls5wWwMg&t=796)

- https://github.com/jsubroto/flow

Flow, a keyboard first canband board that lives entirely in your terminal. It replaces clunky web-based project management tools with a lightweight CLI interface, allowing you to track tasks without ever switching contexts or leaving your command line. Optimized for speed, it lets you navigate columns, move cards, and manage your backlog using only keystrokes, ensuring your development momentum stays unbroken.
