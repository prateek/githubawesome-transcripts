# Hacker News Show \#3: turbolite, QuickBEAM, Paseo, ClawMem, lockpaw, Odyssey, julIDE, Aerko, Druids

[Watch the original video](https://www.youtube.com/watch?v=zMKQjeBY69U)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Introduction

[0:00](https://www.youtube.com/watch?v=zMKQjeBY69U&t=0)

Welcome back to GitHub awesome. This is Hacker News show episode 3. 34 projects. All the best from this week's show. Hn. Let's get into it.

## turbolite

[0:11](https://www.youtube.com/watch?v=zMKQjeBY69U&t=11)

- https://github.com/russellromney/turbolite

Seekite's portability is the appeal, but latency kills it the moment your data lives in the cloud. Turbolite is a seeite virtual file system written in Rust that serves queries directly from S3 buckets. ZSTD page level compression and intelligent B tree prefetching bring cold join queries under 250 milliseconds over the network. Local database performance cloud storage scale. The gap between the two just got a lot smaller.

## QuickBEAM

[0:39](https://www.youtube.com/watch?v=zMKQjeBY69U&t=39)

- https://github.com/elixir-volt/quickbeam

Every Elixir stack eventually gets a no.js process bolted on for JavaScript SSR and it never feels clean. QuickBam fixes that by embedding a full JavaScript runtime directly inside the Erlang VM. JS environments run as native gen server processes inside your OTP supervision trees. Elixir spawns isolated runtimes, sends messages, sets memory limits for untrusted code.

## DuckDB-HNSW-ACORN

[1:04](https://www.youtube.com/watch?v=zMKQjeBY69U&t=64)

- https://github.com/cigrainger/duckdb-hnsw-acorn

Standard vector search with metadata filtering is a two-step problem. Find the nearest neighbors, then filter, which means you're doing extra work on results you're going to discard anyway. DUTDBNSW ACORN pushes the filtering directly into the HNSW traversal graph using the Acorn 1 algorithm. The metadata filter runs during the search rather than after it, which means faster queries and higher recall on filtered results.

## Paseo

[1:32](https://www.youtube.com/watch?v=zMKQjeBY69U&t=92)

- https://github.com/getpaseo/paseo

Running autonomous agents means being tethered to your laptop to catch when something needs attention. PO connects to a local Damon on your machine and lets you monitor and control your agents from your phone, desktop, or terminal. Voice mode, dictation, workree support, and an encrypted remote relay with your code staying on your own hardware the entire time.

## ClawMem

[1:55](https://www.youtube.com/watch?v=zMKQjeBY69U&t=115)

- https://github.com/yoloshii/ClawMem

Cloud code starts every session without memory of what came before. Claw mem fixes that. It's a local memory context engine for clawed code and openclaw that runs hybrid rag retrieval on your GPU. Semantic search, cross-enccoder ranking, and self-evolving memory notes all fused into a single light vault. Your agents permanently remember your project architecture, coding preferences, and outstanding context across sessions.

## lockpaw

[2:23](https://www.youtube.com/watch?v=zMKQjeBY69U&t=143)

- https://github.com/sorkila/lockpaw

Locking your Mac to step away and accidentally killing a longunning agent session is a specific kind of frustrating. Lockpaw is a 3.4 megabyte native Mac OS app that drops a black privacy screen and blocks input without triggering sleep. Agents keep running. Display stays dark. Touch ID brings it back instantly. The missing sleep mode for people running autonomous agents.

## Odyssey

[2:48](https://www.youtube.com/watch?v=zMKQjeBY69U&t=168)

- https://github.com/liquidos-ai/Odyssey

Packaging AI agents for different environments usually means rewriting deployment logic for each one. Odyssey is a bundle first agent runtime written in Rust that lets you define an agent once and run the same artifact across your local terminal, embedded SDKs, and shared runtime servers. Strict OS level sandboxing included regardless of where it runs.

## awesome-autoresearch

[3:11](https://www.youtube.com/watch?v=zMKQjeBY69U&t=191)

- https://github.com/WecoAI/awesome-autoresearch

Carpathy's auto research concept sparked a wave of community adaptations and awesome auto research curates all of them in one place. GPU kernel optimization, novel writing, codebase improvement, prompt engineering, the community has applied the endless loop structure to almost everything imaginable. If you want a map of where autonomous self-improvement research is actually heading in practice, this is the repository worth bookmarking.

## julIDE

[3:39](https://www.youtube.com/watch?v=zMKQjeBY69U&t=219)

- https://github.com/sinisterMage/JulIde

Julia developers have been stuck with general purpose idees that weren't built with the language in mind. Juel ID is a dedicated Julia editor built with Tori, React, and Rust. Full language server protocol integration, a debugger, and inline execution packaged into a 10 megabyte install. Purpose-built tooling for a language that deserved it a long time ago.

## Aerko

[4:03](https://www.youtube.com/watch?v=zMKQjeBY69U&t=243)

- https://github.com/SrPakura/AERKO_PWA

Eroko is a fitness web app built entirely with vanilla.js and native web components. No React, no node modules, no framework overhead. Runs completely offline. Stores health data locally encrypted with AESGCM via index DB. Fast, private, and your data never touches a server. Most advanced fitness web app in history is a bold claim, but the engineering decisions behind it are genuinely sound.

## Druids

[4:28](https://www.youtube.com/watch?v=zMKQjeBY69U&t=268)

- https://github.com/fulcrumresearch/druids

Druids is a reference architecture for building domainspecific AI skills for clawed code. installable skills designed to navigate complex design systems, execute visual iterations, and run regimen verifications autonomously. Less a finished product and more a masterclass in how to structure custom agent tooling properly.

## Foundry

[4:50](https://www.youtube.com/watch?v=zMKQjeBY69U&t=290)

- https://github.com/sphireinc/Foundry

Foundry is a CMS written in Go that uses markdown files as the source of truth. No database required, API first architecture, a clean admin UI, and a plug-in system that extends both the backend and front end. blogs, documentation sites, landing pages, all driven by files you already own. For anyone who's overengineered a content site with a database it didn't need, this is the simpler path.

## Outworked

[5:15](https://www.youtube.com/watch?v=zMKQjeBY69U&t=315)

- https://github.com/outworked/outworked

Outworked gives every clawed code agent its own pixel art sprite sitting at a desk in an 8-bit office. You're the boss, they're the employees. Assign tasks, watch them walk around the screen, and collaborate while they write your code. completely unnecessary, deeply charming, and somehow makes waiting for an agent to finish feel more entertaining.

## pgsemantic

[5:39](https://www.youtube.com/watch?v=zMKQjeBY69U&t=339)

- https://github.com/varmabudharaju/pgsemantic

Adding semantic search to an existing Postgres SQL database usually means schema changes, new infrastructure, or migrating your data somewhere else. PG Semantic skips all of that. Install it, point it at your database, pick a text column, and it syncs rows and generates embeddings in the background without touching your schema. Search gets exposed natively to AI agents as well.

## Elato Local

[6:03](https://www.youtube.com/watch?v=zMKQjeBY69U&t=363)

- https://github.com/akdeb/Elato-Local

Aladd local runs real-time conversational AI with voice cloning entirely on Apple silicon. Nothing sent to the cloud. An ESP32 microcontroller connects via websocket transport, turning cheap hardware into a responsive multilingual AI companion running off your local models. For anyone who's wanted to build a physical AI device without handing every conversation to a cloud provider, this is the open-source foundation worth building on.

## relay

[6:32](https://www.youtube.com/watch?v=zMKQjeBY69U&t=392)

- https://github.com/SeventeenLabs/relay

Want an AI co-worker but terrified of giving them unsupervised access to your company data? Relay is the open- source alternative to clawed co-work. It runs on your own infrastructure and unlike every other agent framework, it doesn't just run loose. Your AI writes a plan first, then stops for approval before pushing code, updating Jira, or messaging a client. You control what executes.

## jid

[6:57](https://www.youtube.com/watch?v=zMKQjeBY69U&t=417)

- https://github.com/simeji/jid

Working with complex JSON in the terminal is a guessing game. You write a JQ filter, run it, get nothing, tweak it, repeat. Jed kills that loop. It's an interactive terminal tool that lets you drill into JSON in real time. Autocomp completes fields as you type, tab through nested arrays, and shows matching data instantly. Full JME path support installs via homebrew in seconds. Once you use it, going back feels absurd.

## Lightfeed Extractor

[7:23](https://www.youtube.com/watch?v=zMKQjeBY69U&t=443)

- https://github.com/lightfeed/extractor

LLM powered web scraping pipelines fail the moment the model returns malformed JSON, and they fail silently in the worst cases. Light Feed Extractor pairs Playright browser automation with Zod schema validation and custom recovery logic that salvages usable data from broken AI outputs instead of crashing. Partial results beat no results when a pipeline needs to keep running.

## verifiers

[7:48](https://www.youtube.com/watch?v=zMKQjeBY69U&t=468)

- https://github.com/PrimeIntellect-ai/verifiers

Reinforcement learning for LLMs requires consistent well-defined reward signals and building that infrastructure from scratch for every project is redundant work. Verifiers provides a standardized harness for training environments, sandboxes, and reward rubrics. Synthetic data generation, multi-turn puzzle evaluation, capability scoring, the infrastructure layer that lets you focus on the research rather than the scaffolding around it.

## forkrun

[8:16](https://www.youtube.com/watch?v=zMKQjeBY69U&t=496)

- https://github.com/jkool702/forkrun

Zorgs and Janu Parallel get the job done until you're running on modern multisocket hardware and the crossocket memory traffic becomes the bottleneck. Forkrun is a drop-in replacement written entirely in bash using copros with a numaware design that keeps memory traffic local to each socket up to 400x faster than existing tools on modern CPUs.

## Fio

[8:40](https://www.youtube.com/watch?v=zMKQjeBY69U&t=520)

- https://github.com/ViciousSquid/Fio

FIO is a brushbased CSG 3D world editor and game engine built in Python and Py OpenGL directly inspired by Quake's Radiant and Valve's Hammer. Unified forward renderer, real-time lighting, and stencil shadows, all in a tool that captures the workflow of the editors that defined an era of level design.

## layerleak

[9:00](https://www.youtube.com/watch?v=zMKQjeBY69U&t=540)

- https://github.com/Brumbelow/layerleak

Git repos get scanned for secrets routinely. Docker image layers get ignored and that's where things get quietly dangerous. Layer Leak tears apart DockerHub image histories and metadata hunting for accidentally bakedin API keys and secrets. Completely agentless. No infrastructure required to run it. If you're pushing images to DockerHub and haven't scanned the layers, this should be the next thing you run.

## Anvil

[9:27](https://www.youtube.com/watch?v=zMKQjeBY69U&t=567)

- https://github.com/zdenham/anvil

Managing multiple AI coding sessions across terminal tabs with no structure is a chaos that compounds fast. Anvil is a desktop IDE built specifically for parallel agent work. Agents organized into an interactive grid, each running in an isolated git work tree, so multiple agents code simultaneously without stepping on each other. More agents, actual coordination between them.

## wit

[9:52](https://www.youtube.com/watch?v=zMKQjeBY69U&t=592)

- https://github.com/amaar-mc/wit

Multiple AI agents working the same repository simultaneously is a new problem and file level merge conflicts are the predictable result. WIT is a lightweight coordination demon that tracks agent states in a local SQLite database. An agent locks a specific symbol before editing it, and any other agent attempting the same function gets a lock conflict warning with details on who holds the lock. Razer's official Mac OS support has always been inconsistent,

## OpenSnek

[10:18](https://www.youtube.com/watch?v=zMKQjeBY69U&t=618)

- https://github.com/gh123man/opensnek

and some newer mice get left out entirely. Open Snack is a 7 megabyte native Mac app built by reverse engineering the Bluetooth low energy protocol. Button remapping, DPI adjustment, RGB control, no cloud telemetry, no Synapse required for Razer mouse owners on Mac who've been stuck with default settings. This is the fix that should have shipped officially.

## SentinelGate

[10:45](https://www.youtube.com/watch?v=zMKQjeBY69U&t=645)

- https://github.com/Sentinel-Gate/Sentinelgate

Giving an AI agent terminal access without any layer of control between it and your system is a risk most people are quietly accepting. Sentinel Gate sits between your agent and your system as an MCP proxy firewall, intercepting every tool call and evaluating it against role-based access control and CEL policies before anything executes. Dangerous commands get blocked instantly and a full audit trail captures everything.

## Moonshine Flow

[11:13](https://www.youtube.com/watch?v=zMKQjeBY69U&t=673)

- https://github.com/JRMeyer/MoonshineFlow

Moonshine beats Whisper Large V3 on accuracy at a fraction of the size, but integrating raw speech models means handling audio chunking, voice activity detection, and streaming buffers yourself. Moonshine Flow abstracts all of that. It's a lightweight pipeline that handles the messy audio processing and streams live transcription directly into your LLM or agent workflow. Realtime local voice input reduced to a single line of code.

## Orloj

[11:41](https://www.youtube.com/watch?v=zMKQjeBY69U&t=701)

- https://github.com/OrlojHQ/orloj

Terraform brought infrastructure under version control and declarative management. Orge does the same for AI agents. Define agents, tools, permissions, and pipelines as YAML manifests. Orage handles scheduling, Kubernetes style execution, and inline policy enforcement. Your entire agent swarm in Git, deployable, and auditable the same way your infrastructure is.

## bsts-causalimpact

[12:05](https://www.youtube.com/watch?v=zMKQjeBY69U&t=725)

- https://github.com/YuminosukeSato/bsts-causalimpact

Google's causal impact is the gold standard for causal inference. But the Python ports have always been compromised versions of the original R implementation. This rewrite puts the Gibb sampler in Rust and exposes it via Python. No TensorFlow dependency, 100% mathematical par with the original R library, and 30x faster. The Python port that finally doesn't make you wish you just used R.

## breathe-memory

[12:32](https://www.youtube.com/watch?v=zMKQjeBY69U&t=752)

- https://github.com/tkenaz/breathe-memory

Standard RG memory flattens everything and wastes tokens. Breathe memory works differently. two phases. Before each response, Synapse extracts entities, traverses a concept graph, and injects only relevant memories into the prompt in under 60 milliseconds. When the context fills, graph compactor kicks in instead of a lossy summary. It compresses the conversation into a structured graph of topics, decisions, and artifacts.

## xmloxide

[12:59](https://www.youtube.com/watch?v=zMKQjeBY69U&t=779)

- https://github.com/jonwiggins/xmloxide

Web XML 2 going unmaintained left a critical gap in the XML parsing ecosystem that a huge amount of software depends on. XML Oxide fills it. A developer used an autonomous AI agent to iteratively rebuild the entire library in Rust, producing a memory safe, high performance XML parser with a CAPI that passes 100% of the W3C conformance tests.

## orca

[13:22](https://www.youtube.com/watch?v=zMKQjeBY69U&t=802)

- https://github.com/stablyai/orca

Orca from Stably AI puts everything on a spatial canvas. Multiple coding agents running simultaneously across isolated work trees with native terminal tracking notifications and git status all visible in one place. The terminal tab hunting stops. The unified control plane begins. For anyone running serious multi-agent workflows who's outgrown the scattered terminal approach, this is the IDE that was built for exactly that problem.

## grafana-tui

[13:51](https://www.youtube.com/watch?v=zMKQjeBY69U&t=831)

- https://github.com/lovromazgon/grafana-tui

Switching to a browser to check server metrics when you're already in the terminal is an unnecessary context switch. Graphana t connects directly to your graphana instance and renders dashboards in the terminal using go and bubble t time series data bar charts and heat maps all in the command line your metrics without leaving where you already are.

## llm-gateway

[14:13](https://www.youtube.com/watch?v=zMKQjeBY69U&t=853)

- https://github.com/openziti/llm-gateway

Standard LLM gateways expose API endpoints over the network and hope your perimeter holds. LLM gateway from open zidy takes a different approach. Zero open listening ports, cryptographic identity enforcement and semantic routing across multiple inference instances using open zites zero trust overlay for enterprises routing open AAI and anthropic traffic at scale. This is the security architecture that treats the network itself as untrusted. \[music\]
