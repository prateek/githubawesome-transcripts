# Hacker News Show \#8: gentleos32, liteparse, tiny-vllm, polycss, lathe, mach, VTCode, altersend

[Watch the original video](https://www.youtube.com/watch?v=TFRXkUECTcM)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Introduction

[0:00](https://www.youtube.com/watch?v=TFRXkUECTcM&t=0)

Welcome back to GitHub Awesome. This is Hacker News show number eight. 35 open- source projects that have recently been trending on Hacker News. Let's get into it.

## gentleos32

[0:12](https://www.youtube.com/watch?v=TFRXkUECTcM&t=12)

- https://github.com/luke8086/gentleos32

Writing your own operating system is the project every systems programmer starts and almost nobody ships. Gentle OS32 is one person actually doing it. Targeting real vintage 32-bit hardware with all the constraints that come with it. boot loader, kernel, no fat runtime, no modern conveniences, just the hard, beautiful work of making a decades old machine come alive from scratch.

## liteparse

[0:37](https://www.youtube.com/watch?v=TFRXkUECTcM&t=37)

- https://github.com/run-llama/liteparse

Extracting clean markdown and well- formatted tables from complex PDFs is one of the most frustrating parts of building rag pipelines. Light parse addresses this by offering a lightweight, efficient document parser tailored specifically for LLM ingestion. It converts documents into structured markdown while carefully preserving table layouts and reading order, giving you a clean way to prepare unstructured data without the overhead of massive bloated libraries.

## tiny-vllm

[1:07](https://www.youtube.com/watch?v=TFRXkUECTcM&t=67)

- https://github.com/jmaczan/tiny-vllm

Tiny VLM is a from scratch project for building your own higherformance LLM inference engine in C++ and CUDA. a smaller readable version of VLLM you can actually understand end to end the continuous batching the KV cache management the CUDA kernels all the machinery that makes serving fast stripped down to something one person can follow

## polycss

[1:30](https://www.youtube.com/watch?v=TFRXkUECTcM&t=90)

- https://github.com/LayoutitStudio/polycss

poly CSS renders 3D polygon meshes in the browser using CSS matrix 3D transforms no WebGL no canvas every polygon is a real DOM element load OBJ GB or magic of oxal files add orbit controls dynamic lighting and CSS projected shadows. Then attach click handlers directly to faces like any other HTML element. React view and vanilla custom elements all supported.

## core

[1:54](https://www.youtube.com/watch?v=TFRXkUECTcM&t=114)

- https://github.com/secluso/core

Instead of trusting some corporate cloud with your home security footage, you can run Secluso on a cheap Raspberry Pi. It gives you live video feeds and alert recordings directly on your phone. Everything gets encrypted on device before leaving your local network. Even the remote cloud relay can't decrypt your streams. Setup takes 5 minutes using their deploy tool to flash a minimal reproducible YTO OS.

## lathe

[2:21](https://www.youtube.com/watch?v=TFRXkUECTcM&t=141)

- https://github.com/devenjarvis/lathe

Letting an AI agent write all your code is a great way to ship projects without actually learning how any of it works. Lathe fixes this by forcing the LLM to teach you instead of doing the work for you. You prompt your coding agent to generate custom multi-art tutorials on demand. It boots a local server so you can read the steps while you write the code yourself by hand.

## mach

[2:45](https://www.youtube.com/watch?v=TFRXkUECTcM&t=165)

- https://github.com/octalide/mach

Using modern systems languages with hidden compiler behaviors can make you forget how computers actually work. Mach is a compiled systems language designed with an extreme anti-magic philosophy. It features zero external dependencies entirely bypassing LLVM and lib C bindings. It just achieved full self-hosting demanding explicit verbosity so your code does exactly what it says on the page. If you like C, you'll feel right at home.

## VTCode

[3:14](https://www.youtube.com/watch?v=TFRXkUECTcM&t=194)

- https://github.com/vinhnx/VTCode

There are a lot of coding agents now and most let the LLM run whatever shell commands it wants. VT code is a Rust CLI agent that validates every command through treesitter bash, runs an execution policy allow list and sandboxes with seat belt or CC comp. Works with basically every provider. fails over automatically if one goes down and plugs into zed via the agent client protocol.

## breathe-cli

[3:39](https://www.youtube.com/watch?v=TFRXkUECTcM&t=219)

- https://github.com/marekkowalczyk/breathe-cli

This isn't a dev tool. It's a breathing tool that lives where you already are. Breathecle is a single Python file that paces resonance breathing at six breaths per minute in your terminal. A bar fills on inhale, drains on exhale. The rate comes from clinical research on cardiac veagal tone and the app deliberately refuses breath holds or fast patterns. zero dependencies, run, breathe, and it picks a preset by time of day.

## altersend

[4:06](https://www.youtube.com/watch?v=TFRXkUECTcM&t=246)

- https://github.com/denislupookov/altersend

Sending a huge file usually means uploading it to some cloud service and waiting. Altern skips that whole step. It's a peer-to-peer file transfer tool that sends files directly between devices over the internet. No account, no server in the middle, and no file size limits getting in your way. If you've ever watched a multi- gigabyte upload crawl across the screen just so someone else can download it again, this feels like the obvious fix.

## deja

[4:35](https://www.youtube.com/watch?v=TFRXkUECTcM&t=275)

- https://github.com/Giammarco-Ferranti/deja

Standard ZSH auto suggestions only complete what you've already started typing, which isn't very helpful when you can't remember the next command in your build sequence. Deja fixes this by predicting what you actually want to run. Written in Go, this lightweight background damon uses directory awareness and sequence prediction to show relevant inline ghost text.

## lowfat

[4:59](https://www.youtube.com/watch?v=TFRXkUECTcM&t=299)

- https://github.com/zdk/lowfat

Giving an AI agent free reign in your terminal is a quick way to burn through your API budget. When an agent runs something like cubtl get, it receives a massive wall of metadata it doesn't need. Lowfat is a pluggable filter that sits between your shell and the agent, stripping out 90% of the noise. It saves you a mountain of tokens without breaking your agents workflow.

## clawpatrol

[5:24](https://www.youtube.com/watch?v=TFRXkUECTcM&t=324)

- https://github.com/denoland/clawpatrol

Giving your autonomous AI agents raw access to production databases is basically begging for a deleted namespace. Claw Patrol fixes this by sitting directly between your agent and production. It parses database traffic at the wire level and gates agent actions against rules you write in HCL. You can automatically block destructive SQL or hold up Kubernetes commands until a human signs off.

## nightwatch

[5:49](https://www.youtube.com/watch?v=TFRXkUECTcM&t=349)

- https://github.com/ninoxAI/nightwatch

Waking up at 3:00 a.m. to 50 identical alerts for a single backend outage is a miserable experience. Nightwatch is a local first readonly AI S that collapses that alert storm. It ingests streams from monitoring tools like Prometheus and runs a React tool calling loop over your live systems. It traces root causes across Kubernetes or AWS and hands you a ranked fix list, but never executes changes unilaterally.

## aislop

[6:16](https://www.youtube.com/watch?v=TFRXkUECTcM&t=376)

- https://github.com/scanaislop/aislop

Waiting through pages of AI generated spam just to find a simple code example is becoming a daily frustration. Isop addresses this by offering a local scanning tool designed to filter out lowquality AI content from your feeds and data sets. It analyzes text structure and stylistic markers to flag autogenerated filler before you waste time reading it.

## or-tools-wasm

[6:40](https://www.youtube.com/watch?v=TFRXkUECTcM&t=400)

- https://github.com/Axelwickm/or-tools-wasm

running heavy operations research solvers for things like delivery routing or staff scheduling used to require a dedicated backend or tools ports. Google's massive optimization engine directly to web assembly. This lets you run multi-threaded CPS and linear programming solvers straight in your user's browser. It works entirely offline with zero latency, making interactive planning tools completely viable.

## agoracosmica

[7:07](https://www.youtube.com/watch?v=TFRXkUECTcM&t=427)

- https://github.com/chipmates/agoracosmica

Reading philosophy and science from primary texts is hard to start cold. Agora Cosmica lowers the barrier by letting you talk to the people who wrote them. It's an open-source educational platform with 30 historical figures from philosophy, science, art, mysticism, and activism. Read their stories, have a dialogue, or convene a multi-figure council to debate a question across centuries.

## ego-lite

[7:32](https://www.youtube.com/watch?v=TFRXkUECTcM&t=452)

- https://github.com/CitroLabs/ego-lite

Instead of running a separate headless browser and fighting with broken login, Egoite lets you and your AI agents browse in parallel. While you work in your normal tabs, the agent runs tasks in isolated background spaces. It bypasses CLI loops by exposing page actions as direct JavaScript functions, completing workflows over twice as fast. You can track progress live or take over any space the second a task finishes. Your LLM doesn't have to forget every piece of context the second a conversation ends. Nemo runs a local

## mnemo

[8:00](https://www.youtube.com/watch?v=TFRXkUECTcM&t=480)

- https://github.com/zaydmulani09/mnemo

first memory layer right on your machine using Rust and SQLite to store a persistent knowledge graph. It extracts entities and relationships from your chats. Then uses a multihop graph traversal to pull up exactly what matters in under 50 milliseconds. You get long-term memory for Olama or Anthropic without cloud round trips.

## replaya

[8:28](https://www.youtube.com/watch?v=TFRXkUECTcM&t=508)

- https://github.com/s2-streamstore/replaya

You don't need to string together multiple databases and message cues just to host your own session replay tool. Replay a simplifies everything with a single streambased backend. It maps each browser session directly to its own durable S2 stream. Because these streams are tailable on Write, you can watch live sessions in real time while visitors are still clicking around with zero background ingest latency.

## depsguard

[8:55](https://www.youtube.com/watch?v=TFRXkUECTcM&t=535)

- https://github.com/arnica/depsguard

The easiest way to get hit with a supply chain attack is letting your package manager instantly resolve packages published 5 minutes ago. Depscard scans your global and local configs to harden them against malicious updates. It sets up a 7-day release cool down so you never autopull raw packages. It also blocks postinstall scripts and gives you a terminal UI to safely inspect diffs before committing any config changes.

## TakoVM

[9:24](https://www.youtube.com/watch?v=TFRXkUECTcM&t=564)

- https://github.com/las7/TakoVM

Letting AI agents generate and run dynamic code directly on your host machine is a quick way to get compromised. TaVm fixes this by isolating untrusted workloads inside secure ondemand docker containers. To keep things tighter, it can wrap execution inside a G Visor sandbox with custom network controls. It even bundles job cues and history out of the box so you don't have to write your own orchestration layer.

## streambed

[9:51](https://www.youtube.com/watch?v=TFRXkUECTcM&t=591)

- https://github.com/viggy28/streambed

Running heavy analytical queries on production is a fast way to choke your app. Streamed lets you offload that BI workload without setting up a complex data warehouse. It connects as a logical replication subscriber and streams your wall changes straight into Apache iceberg on S3. Because it embeds duct DB and exposes the Postgress wire protocol, you can query those S3 files directly from your normal PS client.

## rscrypto

[10:18](https://www.youtube.com/watch?v=TFRXkUECTcM&t=618)

- https://github.com/loadingalias/rscrypto

An otherwise portable Rust project usually stops being portable the exact second you pull in a crypto dependency that relies on native C libraries. RS crypto solves this by packaging your hashes and AEDs into a single crate with zero default dependencies. It does away with open SSL and system libraries completely. It supports no stead and web assembly, but still uses hardware acceleration dynamically when your CPU supports it.

## id-agent

[10:46](https://www.youtube.com/watch?v=TFRXkUECTcM&t=646)

- https://github.com/vostride/id-agent

Passing database UIDs straight to your LLM prompts is a quiet way to bleed API tokens and trigger weird hallucinations. ID agent replaces those random hex strings with token efficient IDs built from a predictable word list. Since every word maps to exactly one token, it compresses standard identifiers down to a fraction of the cost. You can even use its converter to swap UIDs before inference and map them back afterwards.

## cast

[11:14](https://www.youtube.com/watch?v=TFRXkUECTcM&t=674)

- https://github.com/yaodub/cast

Almost every agent framework assumes only one developer is talking to the LLM. Cast fixes this by acting as a self-hosted multi-user harness for your AI agents. It lets you run cloud-based agents locally and securely share them with your team over Slack or Telegram. You describe your agent in plain English to scaffold it. Then configure strict access rules with zero cloud middleware.

## verified-polygon-intersection

[11:40](https://www.youtube.com/watch?v=TFRXkUECTcM&t=700)

- https://github.com/schildep/verified-polygon-intersection

Floating rounding errors make computing polygon intersections a nightmare of edge cases and silent crashes. Verified polygon intersection solves this by verifying the entire algorithm in the lean forproof assistant. The core implementation uses exact rational coordinates instead of floating points, mathematically eliminating any precision bugs.

## gitgres

[12:03](https://www.youtube.com/watch?v=TFRXkUECTcM&t=723)

- https://github.com/calebwin/gitgres

Git repositories live in file systems. Gitgres asks a fun question. What if they lived inside Postgres instead? The project stores and serves Git repositories directly from a database, letting you clone, push, and fetch without a traditional Git server in the middle. It's not something most teams need every day, but it's a fascinating look at how flexible Git storage model really is. The kind of repo that makes you rethink where version control data can live.

## shiihaa-breath-detection

[12:33](https://www.youtube.com/watch?v=TFRXkUECTcM&t=753)

- https://github.com/shiihaa-app/shiihaa-breath-detection

You can track real time breathing patterns through a smartphone mic without uploading any raw audio to the cloud. Shiha breath detection splits local audio into frequency bands and tracks a rolling baseline to cancel background noise. It then runs spectral centroidid analysis 15 times a second to separate your breathing from keyboards or spoken voice.

## claude-quota

[12:56](https://www.youtube.com/watch?v=TFRXkUECTcM&t=776)

- https://github.com/grzegorz-raczek-unit8/claude-quota

Waiting through a massive refactoring session with clawed code only to get cut off by a sudden quota limit is a fast way to kill your momentum. Claude quota pins live utilization gauges directly to your Mac OS menu bar. It is a Swift Bar plugin that securely reads local keychain tokens to track your limits. It color codes your 5-hour rolling usage, supporting multiple accounts, so you can track personal and work plans.

## mezz

[13:24](https://www.youtube.com/watch?v=TFRXkUECTcM&t=804)

- https://github.com/ABGEO/mezz

Every time you want to inspect a new smart device, you end up rebuilding the same Wi-Fi lab from scratch. MEZ turns that whole process into a couple of commands. It's a Dockerbased Wi-Fi sandbox that creates an isolated access point where IoT devices can reach the internet without touching your home network. You get DNS logging, traffic capture, and clean tear down when you're done.

## Spec-Driven-Development

[13:49](https://www.youtube.com/watch?v=TFRXkUECTcM&t=829)

- https://github.com/FredAntB/Spec-Driven-Development

Vibe coding with multiple AI tools is a fast way to watch your code base descend into absolute chaos. Spec driven development is a clawed skill that keeps your AI coding assistants from contradicting each other. Before writing any code, it generates your requirements and task lists, then scaffolds matching instruction files for cursor or clawed code. Since every tool reads the exact same spec, your agents stay aligned even across separate idees.

## textsnap

[14:18](https://www.youtube.com/watch?v=TFRXkUECTcM&t=858)

- https://github.com/kouhxp/textsnap

Retyping text from screenshots or uploading private documents to sketchy cloud OCR sites is an annoying waste of time. Text snap is a single command CLI that extracts text from screenshots or local images right on your machine. It uses a quantized vision language model to parse tables and full pages straight into structured markdown entirely on your CPU.

## nucleus

[14:41](https://www.youtube.com/watch?v=TFRXkUECTcM&t=881)

- https://github.com/sig-id/nucleus

Wrangling massive Docker layers and network configs just to spin up secure ephemeral AI agent sandboxes is a total waste of memory. Nucleus solves this by building a Nyx native security hardened container runtime written in Rust. It dumps Docker files and registry distribution completely. Instead, it runs your untrusted workloads inside an ultraisolated G Visor sandbox with CMP filtering.

## promptloop

[15:07](https://www.youtube.com/watch?v=TFRXkUECTcM&t=907)

- https://github.com/Bella3202019/promptloop

Vibet tuning prompts in a chat box is fine until you deploy to production and things break silently. Prompt loop brings automated evaluation to your local terminal. It is a CLI agent that sets up repeatable test suites, saving all version histories and configurations under AEL's directory in your codebase. You can track latency and chat directly with the agent to autogenerate test suites or prompt fixes. \[music\]
