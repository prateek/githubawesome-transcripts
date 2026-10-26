# Hacker News Show \#9: paca, talos, ember-hackernews, ezra, bsharp, kyde, clawpatrol, microcrad, nub

[Watch the original video](https://www.youtube.com/watch?v=BcNxIQ_P3ZI)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Introduction

[0:00](https://www.youtube.com/watch?v=BcNxIQ_P3ZI&t=0)

Welcome back to GitHub Awesome. This is Hacker News show number nine. 35 open- source projects that have recently been trending on Hacker News. Let's get into it.

## open-knowledge

[0:11](https://www.youtube.com/watch?v=BcNxIQ_P3ZI&t=11)

- https://github.com/inkeep/open-knowledge

Collaborating with AI agents on team documentation usually means copy pasting markdown back and forth from Notion or Obsidian. Open Knowledge is an open-source AI first alternative that lets you write side by side with your agents. It features a lossless birectional markdown sync. It connects directly to claude or cursor via MCP, giving your models live access to your files.

## paca

[0:36](https://www.youtube.com/watch?v=BcNxIQ_P3ZI&t=36)

- https://github.com/Paca-AI/paca

Every major project management tool is a paid SAS that treats AI as a chatbot bolted on in the corner. PAKA is a self-hosted alternative built for scrum teams where AI agents work as equals. Same board, same sprints, same goals. Agents pick up tickets and move them alongside humans instead of just answering questions in a sidebar. Fully customizable through config and plugins running on your own server.

## talos

[1:03](https://www.youtube.com/watch?v=BcNxIQ_P3ZI&t=63)

- https://github.com/cajal-technologies/talos

Web Assembly runs untrusted code everywhere now and testing how it behaves only tells you so much. Talos is a web assembly interpreter written in lean the theorem proving language. Because the interpreter lives inside a proof assistant, you can formally prove properties about how WAM code executes, not just run it and hope. Mathematical guarantees about behavior, not test coverage.

## luz

[1:28](https://www.youtube.com/watch?v=BcNxIQ_P3ZI&t=88)

- https://github.com/themartiano/luz

If you love computer graphics, you have to see this. A developer spent over a year building a complete C++ path tracer completely from scratch with zero third party libraries. It is called LE and they coded almost the entire project without any AI assistance. It features Monte Carlo path tracing, global illumination, atmospheric scattering, and even a custom Blender exporter.

## ember-hackernews

[1:53](https://www.youtube.com/watch?v=BcNxIQ_P3ZI&t=113)

- https://github.com/DatanoiseTV/ember-hackernews

Reading Hacker News on your phone means the barebones mobile site, tiny tap targets, no gestures, and a comment tree that's a nightmare to navigate. Ember is a native iOS hacker news reader built in pure Swift UI with zero third party dependencies. So, it's fast, light, and properly iOS native. Smooth scrolling, real gestures, collapsible comment threads.

## ezra

[2:16](https://www.youtube.com/watch?v=BcNxIQ_P3ZI&t=136)

- https://github.com/entGriff/ezra

Spinning up Rabbit MQ or Kafka for a small project usually means fighting complex cluster configurations and heavyweight setups. Ezra offers a lightweight persistent alternative. It is backed by SQLite and powered by Erlang running as a single binary with zero dependencies. It speaks the standard Reddus streams wire protocol, so you can connect any existing Reddus client in any language without importing new SDKs.

## bsharp

[2:43](https://www.youtube.com/watch?v=BcNxIQ_P3ZI&t=163)

- https://github.com/paytonjjones/bsharp

Perfect pitch is learnable before age six and after that the window basically closes. B is built to use it. An open source app based on Eiguchi's chord identification method where kids learn to recognize piano chords by associating each one with a color. Start with two chords, add more as the child masters each level. Simple, playful, and based on actual developmental research.

## nub

[3:08](https://www.youtube.com/watch?v=BcNxIQ_P3ZI&t=188)

- https://github.com/nubjs/nub

The day-to-day Node.js JS tool chain forces you to manage a bloated pile of utilities like Nodeman or NVM. Nub replaces that entire stack with a single Rust binary that runs on top of your existing node installation. It lets you execute TypeScript directly without any build steps. It also features a faster script runner and autoprovisions node versions on demand with no runtime lockin.

## clawpatrol

[3:33](https://www.youtube.com/watch?v=BcNxIQ_P3ZI&t=213)

- https://github.com/denoland/clawpatrol

Giving AI agents free reign in your production systems is a disaster waiting to happen. Claw Patrol acts as a wire level security firewall for your agents. It intercepts and parses their outbound traffic, matching actions against standard HCL rules. You can block destructive database queries or pause a command like cubesttell delete until a human signs off on it before it reaches your cloud.

## kyde

[3:59](https://www.youtube.com/watch?v=BcNxIQ_P3ZI&t=239)

- https://github.com/kyle-ssg/kyde

VS Code's git panel is cramped for reviewing a real diff, and Git Kraken is overkill when you just want to stage hunks and write a clean commit message. Kaid is a fast native commit and diff editor. Clean diff view. Pick what goes in, craft the commit, opens instantly, stays snappy on big diffs, no heavyweight app, no sluggish electron wrapper. The focused commit workflow that fits between a terminal and a full guey.

## talos

[4:26](https://www.youtube.com/watch?v=BcNxIQ_P3ZI&t=266)

- https://github.com/ory/talos

One leaked API key giving an attacker access to everything it could touch is how most breaches actually happen. Talos is a security hardened API key server for users, services, machine to- machine calls, and AI agents. Fall from one key, you mint narrow fine grained capability tokens that can only do one specific thing. A leaked token is nearly worthless because it couldn't do much in the first place.

## microcrad

[4:52](https://www.youtube.com/watch?v=BcNxIQ_P3ZI&t=292)

- https://github.com/oraziorillo/microcrad

Carpathy's Microrad teaches back propagation in a 100 lines of Python. Microrad rebuilds the same idea in C. Same scaler valued automatic differentiation engine, same gradient descent mechanics, but written in C. So there's no Python runtime hiding the memory or the math. Every allocation visible, every operation explicit, a study project, not a production library. And that's exactly the point.

## nbsdgames

[5:17](https://www.youtube.com/watch?v=BcNxIQ_P3ZI&t=317)

- https://github.com/abakh/nbsdgames

It's a package of 21 textbased games written in C with N curses, so they run in any terminal, weigh almost nothing, and need zero graphics. You get terminal takes on classics like Mind Sweeper, Sudoku, and Battleship, plus some entirely original ideas you won't have before. No dependencies beyond Encurs, Lightning Fast works over SSH on the weakest box. The perfect way to waste 10 minutes when all you've got is a command line.

## cutile-rs

[5:46](https://www.youtube.com/watch?v=BcNxIQ_P3ZI&t=346)

- https://github.com/nvlabs/cutile-rs

Writing custom CUDA kernels usually means throwing away memory safety and constantly debugging mysterious data races. Nvidia's CQile Rust brings that work into Rust. a tilebased kernel programming DSL where you write GPU kernels in Rust itself thinking in tiles of of data rather than wrestling individual threads with a safe host site API for passing tensors to kernels that run asynchronously on the GPU.

## Pagecast

[6:12](https://www.youtube.com/watch?v=BcNxIQ_P3ZI&t=372)

- https://github.com/Amal-David/pagecast

Your agent generates an HTML report or a static mini app and it just sits on your disk as a file nobody else can see. Pagecast publishes it instantly to a sharable Cloudflare pages URL straight from your terminal or coding agent. Claude Code builds a dashboard, runs one command, hands you a live link hosted free on Cloudflare's Edge. No git push, no deploy pipeline, no dashboard dragging.

## ScreenMind

[6:38](https://www.youtube.com/watch?v=BcNxIQ_P3ZI&t=398)

- https://github.com/ayushh0110/ScreenMind

Microsoft recall promised perfect memory of everything on your screen. Then everyone boked at the privacy implications. Screen Mind does the same idea privately, continuously captures your screen, analyzes each frame with Gemma 4 running locally, and lets you search your entire screen history or chat with it directly. Ask what that pricing you saw yesterday was, and it finds the moment.

## capacitor-alarm-clock

[7:03](https://www.youtube.com/watch?v=BcNxIQ_P3ZI&t=423)

- https://github.com/ArcaEge/capacitor-alarm-clock

It's an ESP32-based alarm clock that instead of beeping sends reverse voltage through a capacitor until it pops, and that pop is your alarm. three slots, so it's good for three mornings before you reload it. It's got an OLED clock, a web UI, current limiting resistors on each slot for safety, and it pulls the time over Wi-Fi. The creator even admits the voltage regulators double as a tiny space heater.

## selector-forge

[7:30](https://www.youtube.com/watch?v=BcNxIQ_P3ZI&t=450)

- https://github.com/Intuned/selector-forge

One class name change in the markup and your entire test suite shatters. That's the CSS selector problem nobody has a good answer for. Selector FForge is an AI browser extension where you click an element and it generates a CSS or XPath selector built to survive page changes instead of latching onto fragile autogenerated classes. For anyone writing Playright or Selenium tests, this kills the most reliable source of flaky tests.

## recall

[7:58](https://www.youtube.com/watch?v=BcNxIQ_P3ZI&t=478)

- https://github.com/raiyanyahya/recall

Most agent memory tools quietly call an embedding API, which means your code context leaves your machine. Recall is fully local project memory for cloud code. No API key, no external model, nothing sent anywhere. Your agent remembers your project's decisions and context across sessions, and every bite of that memory stays on your disk. Persistent agent memory with no data leaving your machine.

## make-look-scanned

[8:24](https://www.youtube.com/watch?v=BcNxIQ_P3ZI&t=504)

- https://github.com/overflowy/make-look-scanned

Printing a clean PDF, signing it, and scanning it back in just to make it look official is a process digital files shouldn't need. Make look scanned does the last step in software. Slight skew, grayscale conversion, warm paper tone, grain, JPEG artifacts. A crisp digital file looks like it came off an office scanner. Runs as a Go CLI or entirely in the browser via web assembly. Fully local, deterministic output.

## brain-map-skill

[8:50](https://www.youtube.com/watch?v=BcNxIQ_P3ZI&t=530)

- https://github.com/vladignatyev/brain-map-skill

Visualizing a sprawling folder of Obsidian Notes is hard and teaching your AI agent how to navigate your personal knowledge base is even harder. Brain Map Skill tackles both. It is a self-contained agent skill that compiles your markdown notes into an interactive themed force graph with a playable growth timeline. Your agent can read your vault and compile the map, letting you visually search your thoughts.

## Tiny

[9:17](https://www.youtube.com/watch?v=BcNxIQ_P3ZI&t=557)

- https://github.com/confh/Tiny

Building your own programming language is the project every developer dreams about and few finish. Tiny is one person actually doing it in Go. A lightweight language with lexer, parser, and interpreter kept small enough that you can read the whole thing and understand how a language works end to end. The learning project that actually teaches you how it works.

## crawlie

[9:40](https://www.youtube.com/watch?v=BcNxIQ_P3ZI&t=580)

- https://github.com/spronta/crawlie

Most SEO tools only audit your site for Google, completely ignoring how modern AI search engines parse your content. Crawley is an open-source technical crawler built in Rust. It checks for redirects and missing metadata, running 40 plus checks to optimize your site for generative engines. It even ships as an MCP server so your AI agents can audit websites automatically.

## pii-gui

[10:05](https://www.youtube.com/watch?v=BcNxIQ_P3ZI&t=605)

- https://github.com/sophia486/pii-gui

Sending sensitive client PDFs to random web tools just to redact personal data is a massive security risk. Pyige handles this securely on your desktop. This local first application detects sensitive information like emails and phone numbers using regex or quantized onx models. It burns approved redactions directly into your files, making sure hidden text is completely unreoverable before you share them.

## STEPLA-1

[10:32](https://www.youtube.com/watch?v=BcNxIQ_P3ZI&t=632)

- https://github.com/c0rRupT9/STEPLA-1

Most developers use a CPU every second and have never seen one built from nothing. Step one is exactly that, a working 8-bit processor designed gate by gate in logism evolution. No pre-built chips, no shortcuts. Individual logic gates wired into a real Harvard architecture CPU with separate instruction and data memory. Open it, watch the signals flow, and trace exactly how fetch, decode, and execute happen at the level of and and or gates.

## rocketgraph

[11:01](https://www.youtube.com/watch?v=BcNxIQ_P3ZI&t=661)

- https://github.com/Rocketgraph/rocketgraph

Your logs already tell you when CPU spiked, but the weird incident is usually hiding in thousands of lines you didn't know to search. Rocket Graph is a self-hosted anomaly detector that sits beside Data Dog, Loki, Cloudatch, or RAW log files instead of replacing them. It clusters structural templates, flags unusual patterns, runs inside your network, and even has a node open telemetry agent for quick instrumentation.

## vpod

[11:27](https://www.youtube.com/watch?v=BcNxIQ_P3ZI&t=687)

- https://github.com/capsulerun/vpod

Running untrusted code usually means choosing between heavyweight containers and a pile of nervous cleanup code. VPOD gives you an instant Linux sandbox that runs a risk vvm inside web assembly. So the whole execution state stays boxed in. It boots from snapshots in under a second, exposes controlled file system and network access through WASI and gives you both a CLI and Python SDK for code interpreter style workflows.

## codetutor

[11:55](https://www.youtube.com/watch?v=BcNxIQ_P3ZI&t=715)

- https://github.com/jaketothepast/codetutor

Most AI coding assistants just hand you the finished function and you paste it in without learning anything. CodeTutor is an Emacs package that does the opposite. It watches your file saves, reads the diff, and explains what you just wrote like a senior engineer pairing with you. It runs on local readonly backends so it can't touch your source. It points you at the next move instead of writing the code.

## zero\_browser

[12:21](https://www.youtube.com/watch?v=BcNxIQ_P3ZI&t=741)

- https://github.com/nz366/zero_browser

Every web page you load drags along megabytes of HTML, CSS, and JavaScript. And the engine rendering all that is a massive attack surface. Zero browser asks, "What happens if you just delete it?" Instead, it renders a simple markdown style format with interactive pieces like tables and data grids built straight in. It's one Flutter code base, so it runs on every platform you've got.

## claude\_code\_vs

[12:46](https://www.youtube.com/watch?v=BcNxIQ_P3ZI&t=766)

- https://github.com/firish/claude_code_vs

Claude code is handy, but if you live in Visual Studio, bouncing through a terminal means losing the diff viewer, diagnostics, and debugger context where the bug actually is. Claude Code for Visual Studio bridges the Claude CLI into VS 2026. Edits land in native diffs. Compiler errors get shared automatically. And with opt-in debugger control, Claude can inspect call stacks, variables, and break points while you're paused.

## euromesh

[13:13](https://www.youtube.com/watch?v=BcNxIQ_P3ZI&t=793)

- https://github.com/sammysltd/euromesh

Europe wants sovereign AI, but new gigawatt data centers can sit in grid cues for most of a decade. Euromsh is a reproducible model asking a sharper question. What if Europe federated the public AI compute it already owns? The repo includes the sourced report, grid delay data set, Euro HPC compute inventory, equations, generated figures, and a piest suite for the assumptions.

## Altiverse

[13:38](https://www.youtube.com/watch?v=BcNxIQ_P3ZI&t=818)

- https://github.com/LeoTheAIDev/Altiverse

Spreadsheets are fine for first order trade-offs, but they're terrible at showing who gets stressed, who adapts, and where the weird side effects start. Altiverse turns one decision into two to four living simulations with up to around a thousand agents moving through alternate realities. It runs local first, works offline, uses deterministic seeds, and can add an optional open AI compatible model for reports and character Q&A.

## peerd

[14:06](https://www.youtube.com/watch?v=BcNxIQ_P3ZI&t=846)

- https://github.com/NotASithLord/peerd

Browser agents get weird fast. The model can see your tabs, but now you're trusting a backend with sessions, keys, and page content. Pier runs the agent loop as a Chrome or Firefox extension instead. BYO local encrypted vault, no backend, no telemetry, and sandboxed compute right in the browser from JS notebooks to web assembly Linux VMs. It even verifies actions against the live page before calling them done.

## linkedrecords

[14:33](https://www.youtube.com/watch?v=BcNxIQ_P3ZI&t=873)

- https://github.com/wolfoo2931/linkedrecords

Building a collaborative app usually means writing custom backend APIs and dealing with painful database schema migrations as your data model changes. Linked records is an open-source backend as a service inspired by triple stores that lets you skip all of it. It stores all data and permissions as simple semantic facts on top of Postgress. Sharing access is as simple as inserting a new fact with zero backend code required.

## persona

[15:01](https://www.youtube.com/watch?v=BcNxIQ_P3ZI&t=901)

- https://github.com/runtypelabs/persona

Adding an AI assistant to a product should not mean rebuilding your front end around one chat component. Persona is a vanillajs TypeScript chat widget that drops into almost any site with no framework dependency. It handles streaming SSE responses, tool call UI, approvals, artifacts, voice themes, and webmc page tools while still letting you swap the back end from OpenAI agents to Langraph or your own adapter. \[music\]
