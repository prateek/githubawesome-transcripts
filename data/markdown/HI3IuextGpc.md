# GitHub Trending Today \#28: zeroboot, Folio, autonovel, ASCII Studio, Kimodo, Memoria, sonar, Chops

[Watch the original video](https://www.youtube.com/watch?v=HI3IuextGpc)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Introduction

[0:00](https://www.youtube.com/watch?v=HI3IuextGpc&t=0)

Welcome back to GitHub awesome. This is GitHub trending today episode number 28. We have tracked down 33 repositories trending right now on GitHub. Let's get started.

## zeroboot

[0:12](https://www.youtube.com/watch?v=HI3IuextGpc&t=12)

- https://github.com/zerobootdev/zeroboot

Docker containers are safer than host access but slow to spin up. Zero boot splits the difference. It uses firecracker microVMs and KVM copy onright memory forking to spawn fully isolated virtual machines in under one millisecond at 265 kilobyt of RAM per fork. Fast enough that the security trade-off disappears. For anyone running AI agents that need genuine isolation without the startup penalty, this is the architecture worth paying attention to.

## Folio

[0:42](https://www.youtube.com/watch?v=HI3IuextGpc&t=42)

- https://github.com/carlos7ags/folio

PDF generation in Go is a genuinely painful problem. Most solutions are either abandoned libraries or a headless Chrome instance you don't want to maintain. Folio is a pure Go zero dependency PDF library with a full layout engine. HTML to PDF conversion, flexbox tables and digital signatures all built in. It also compiles to web assembly so you can test layouts directly in the browser on their WASM playground before writing a line of server code.

## autonovel

[1:11](https://www.youtube.com/watch?v=HI3IuextGpc&t=71)

- https://github.com/NousResearch/autonovel

Auton from Nouse Research takes a seed concept and outputs a print ready PDF, EPUB, and audio book. The Hermes agent runs a modify, evaluate, discard loop throughout, writing the draft, running an automated literary critic to fix repetition, dividing chapters, generating cover art, and voicing the final audio book. The whole publishing pipeline in a single Python script.

## ASCII Studio

[1:35](https://www.youtube.com/watch?v=HI3IuextGpc&t=95)

- https://github.com/vansh-nagar/ascii-studio

ASKI Studio takes a video file and converts it into character-based ASKI frames that play smoothly in the browser. It's a TypeScript project optimized for smooth sequential playback rather than just dumping static text files. Retro loading screens, hacker aesthetic demo reels, or just turning a movie clip into something. Genuinely fun project with obvious creative applications.

## Kimodo

[2:01](https://www.youtube.com/watch?v=HI3IuextGpc&t=121)

- https://github.com/nv-tlabs/kimodo

Kimodo is a kinematic motion diffusion model from NVIDIA's spatial intelligence lab trained on over 700 hours of motion capture data. Instead of purely text prompted motion generation, you can lock specific joints in place as hard kinematic constraints and let the model generate fluid realistic movement around them. For animation workflows where you need a character's hand on a specific surface or a foot planted at an exact point, that's a meaningful capability.

## 7/24 Office

[2:32](https://www.youtube.com/watch?v=HI3IuextGpc&t=152)

- https://github.com/wangziqi06/724-office

724 Office is a self-evolving AI agent system in 3,500 lines of pure Python, 26 built-in tools, MCP support, and a three-layer memory system. The part that matters most for unattended operation is the self-rep capability. When an agent hits a bug, it debugs its own logic and keeps running without human intervention.

## mails

[2:54](https://www.youtube.com/watch?v=HI3IuextGpc&t=174)

- https://github.com/chekusu/mails

Autonomous agents that interact with the real world eventually need to handle email and raw HTML email is not something you want to feed directly into a context window. Mails strips the formatting noise and gives agents a clean interface for parsing incoming messages, drafting replies, and managing communications programmatically. The missing inbox for your AI workforce.

## Memoria

[3:19](https://www.youtube.com/watch?v=HI3IuextGpc&t=199)

- https://github.com/matrixorigin/Memoria

Memorialia builds itself as git for AI agent memory and the analogy holds up. It sits between your agent and its database providing zero copy branching snapshots and point in time roll backs before a risky refactor. Snapshot the memory state if the agent hallucinates and goes sideways. One command rolls it back to exactly before things went wrong.

## sonar

[3:41](https://www.youtube.com/watch?v=HI3IuextGpc&t=221)

- https://github.com/RasKrebs/sonar

We all hate running complex or netstack commands just to figure out what process is hogging port 3000. Sonar is a tiny zero dependency CLI that shows you everything listening on your local host. It displays clear process names, Docker container info, and clickable URLs in a gorgeous table. And yes, it lets you instantly kill rogue processes with a single command. Anyone running clawed code, cursor, and codecs will notice

## Chops

[4:06](https://www.youtube.com/watch?v=HI3IuextGpc&t=246)

- https://github.com/Shpigford/chops

that markdown files and prompt instructions scattered across their file system with no good way to manage them. Chops is a native Mac OS app built specifically for that problem. Browse, edit, and organize all your agent skills and custom instructions from one clean interface without digging through dot files.

## emulate

[4:30](https://www.youtube.com/watch?v=HI3IuextGpc&t=270)

- https://github.com/vercel-labs/emulate

Testing against live third-party APIs in CI is slow, costs money, and breaks whenever the external service has a bad day. Emulate from Versel Labs intercepts those requests and mocks the API behavior locally. Built specifically for CI environments and no network sandboxes. Test suites and agents run at full speed without touching an external server.

## Ghostling

[4:53](https://www.youtube.com/watch?v=HI3IuextGpc&t=293)

- https://github.com/ghostty-org/ghostling

The Ghosty team extracted the core of their terminal engine and rebuilt it as a minimum viable emulator in a single C file using Ray for graphics. It's a direct demonstration of how to embed a GPU accelerated terminal into any application or game engine without pulling in Electron or any other heavy framework. For anyone who's wanted a terminal inside their own software and didn't know where to start, this is the blueprint.

## My-Brain-Is-Full-Crew

[5:20](https://www.youtube.com/watch?v=HI3IuextGpc&t=320)

- https://github.com/gnekt/My-Brain-Is-Full-Crew

A PhD student hit cognitive overload and automated their way out of it. The repository is a 10 agent Obsidian crew running on scheduled tasks. A scribe, Postman, Sorder, and others handle email ingestion, inbox triage, broken markdown link repair, and health habit tracking autonomously, built out of necessity rather than ambition, which usually means it actually works.

## diffity

[5:44](https://www.youtube.com/watch?v=HI3IuextGpc&t=344)

- https://github.com/kamranahmedse/diffity

Code review on AI generated diffs usually means pushing to GitHub just to get a readable view. Diffy runs locally inside any git repo and opens a syntax highlighted diff in the browser. Leave review comments on the diff and the built-in cloud code integration reads those comments and applies the fixes automatically. The full review loop without leaving your machine.

## Flash-MoE

[6:08](https://www.youtube.com/watch?v=HI3IuextGpc&t=368)

- https://github.com/danveloper/flash-moe

Flashe runs a 397 billion parameter model on a MacBook Pro by streaming 209 GB of weights from SSD into RAM on demand using techniques from Apple's LLM in a flash paper. It hits 4.4 tokens per second on consumer hardware. That number matters less than what it proves. The memory ceiling for local AI is not where most people assumed it was.

## filmkit

[6:33](https://www.youtube.com/watch?v=HI3IuextGpc&t=393)

- https://github.com/eggricesoy/filmkit

Filmkit connects to Fujifilm X series cameras directly in the browser using web USB, then uses the camera's own internal processor to convert RAW files to JPEG. No desktop software, no installation, no third party conversion algorithm approximating what the camera would have done. The camera does the conversion itself in the browser at full speed.

## modly

[6:56](https://www.youtube.com/watch?v=HI3IuextGpc&t=416)

- https://github.com/lightningpixel/modly

Modley is a local desktop app that runs imageto 3D mesh generation entirely on your own GPU using the Huan 3D2 mini model. No cloud credits, no per generation costs, no images leaving your machine. Drop in an image, get a detailed 3D asset out for anyone experimenting with 3D generation who doesn't want to burn through API budget to do it.

## Scanner

[7:19](https://www.youtube.com/watch?v=HI3IuextGpc&t=439)

- https://github.com/0din-ai/ai-scanner

Mozzilla is stepping into the AI security ring with the zero D scanner. As AI agents get more autonomy, ensuring they are secure from prompt injections and jailbreaks is critical. Built on top of the open-source Garak framework, this is a beautiful enterprisegrade vulnerability management platform specifically built for generative AI. It gives you a graphical UX, automated scheduling, and a proprietary probe library to actively red team your own LLM applications.

## llm-circuit-finder

[7:50](https://www.youtube.com/watch?v=HI3IuextGpc&t=470)

- https://github.com/alainnothere/llm-circuit-finder

No retraining, no fine-tuning, no additional parameters. Just duplicate three specific layers during the forward pass and route the hidden states through the same reasoning circuit twice. That simple intervention pushed 24 billion parameter models logical deduction score from 0.22 to 0.76. The mechanistic interpretability angle is what makes this genuinely interesting beyond the benchmark number.

## Oxyde

[8:17](https://www.youtube.com/watch?v=HI3IuextGpc&t=497)

- https://github.com/mr-fatalyst/oxyde

Oxide is an async Python OM with a Rust core underneath built around paidantic v2 as a first class citizen rather than an afterthought. You get Django style objects.filter filter query syntax, strict pyantic validation on every model, and the performance overhead of Rust instead of Python handling the heavy lifting. For Python backend developers who've accepted slow OM performance as a fact of life, this is worth benchmarking against your current stack.

## ReactMotion

[8:47](https://www.youtube.com/watch?v=HI3IuextGpc&t=527)

- https://github.com/awakening-ai/ReactMotion

Most AI avatars are static while you're talking. React Motion fixes the part that makes them feel uncanny. It generates listener motions in real time based on the acoustic features of incoming speech. Nods, weight shifts, subtle facial reactions, all driven by how the voice actually sounds rather than canned animations on a timer.

## Context Gateway

[9:09](https://www.youtube.com/watch?v=HI3IuextGpc&t=549)

- https://github.com/Compresr-ai/Context-Gateway

Large code bases eat through context windows fast and the token costs compound quickly on long sessions. Context gateway sits between your agent and the LLM API, precomputing conversation summaries in the background and compressing history intelligently as the session grows. The claim is 50% token reduction without losing critical semantic context.

## claude-peers

[9:32](https://www.youtube.com/watch?v=HI3IuextGpc&t=572)

- https://github.com/louislva/claude-peers-mcp

Claude peers is an MCP server that lets multiple clouded code instances on the same machine communicate directly with each other. One agent working on the front end can ping the backend agent and ask what an endpoint is named and the answer lands in its context window immediately. No copy pasting between terminals, no human relaying messages between sessions.

## Crust

[9:56](https://www.youtube.com/watch?v=HI3IuextGpc&t=596)

- https://github.com/chenxin-yan/crust

Go and rust dominate CLI tooling for good reasons, but if Typescript is your language, the startup overhead has always been a real trade-off. Crust is a TypeScript first CLI framework built natively on Bun with composable modules and the startup speed that makes Bun worth using in the first place. Complex modular command line tools that boot instantly and feel native.

## han

[10:20](https://www.youtube.com/watch?v=HI3IuextGpc&t=620)

- https://github.com/xodn348/han

Han is a fully compiled statically typed programming language where every keyword is written in Korean Hongulle, not a toy. It compiles to native binaries through LLVM, has a Rust based tool chain, and ships with an interpreter for fast iteration. The real argument it's making, there's no technical reason programming languages have to be built around English. Han is proof.

## SparkVSR

[10:44](https://www.youtube.com/watch?v=HI3IuextGpc&t=644)

- https://github.com/taco-group/SparkVSR

SparkVS is a video superresolution model that only needs to do a fraction of the work. manually enhance a handful of key frames from a lowresolution or degraded video and the model propagates those restored details across the entire clip automatically. Old film restoration, cinematic VFX, high-end upscaling, the use cases are obvious and the approach is smarter than brute forcing every frame individually.

## GSAP AI Skills

[11:11](https://www.youtube.com/watch?v=HI3IuextGpc&t=671)

- https://github.com/greensock/gsap-skills

Gap is already the standard for web animation. Now there are official AI skills for it. Greenock just dropped Gap AI skills designed to load directly into clawed code or cursor. Instead of your agent producing static lifeless UI, it gains the architectural knowledge to write complex scroll triggered animations the way a senior front-end developer actually would.

## ClawTeam-OpenClaw

[11:35](https://www.youtube.com/watch?v=HI3IuextGpc&t=695)

- https://github.com/win4r/ClawTeam-OpenClaw

Claw team openclaw is a fork of claw team rebuilt specifically for the openclaw framework, adding a multi- aent swarm coordination layer on top. If you're already running OpenClaw, this gives you the infrastructure to orchestrate dozens of workers in parallel against large software engineering tasks without building the coordination layer yourself.

## minutes

[11:58](https://www.youtube.com/watch?v=HI3IuextGpc&t=718)

- https://github.com/silverstein/minutes

Minutes captures your meeting audio and generates formatted actionable notes using local AI models. No cloud, no subscription, no frantic typing while trying to actually listen. Show up, have the conversation, read the summary afterward. The meeting that could have been an email can at least stop requiring your full attention.

## unslop

[12:19](https://www.youtube.com/watch?v=HI3IuextGpc&t=739)

- https://github.com/mshumer/unslop

Unslop is a lightweight utility from Matt Schumer that detects and rewrites AI slop. Feed it generated text full of delve into fast-paced digital landscape. And it's important to note and it comes out the other side sounding like a person wrote it given that half the internet now reads like scrub AI slop feverdream. The timing is good.

## drift

[12:42](https://www.youtube.com/watch?v=HI3IuextGpc&t=762)

- https://github.com/phlx0/drift

Drift is a terminal screen saver written in Go that kicks in automatically when you go idle. Multiple asky and antsy visual scenes. Single go install command. One line in your des HRC and it's set up permanently. Completely unnecessary. Extremely satisfying. The kind of thing you install and then walk away from your desk on purpose.

## Clearly Markdown

[13:03](https://www.youtube.com/watch?v=HI3IuextGpc&t=783)

- https://github.com/Shpigford/clearly

Most markdown editors add features until the writing gets buried. Clearly goes the other direction. Native Mac OS, no toolbars, no file trees, just typography and the document. Built with native performance in mind, it strips away all the bloated toolbars and complex file trees, leaving you with nothing but gorgeous typography and your thoughts.

## htmx-vscode-toolkit

[13:26](https://www.youtube.com/watch?v=HI3IuextGpc&t=806)

- https://github.com/atoolz/htmx-vscode-toolkit

HTMX development in VS Code without this extension means memorizing attribute names or tabbing out to the docs constantly. The HTMX VS Code toolkit adds deep intellisense attribute autocomp completion and inline documentation for every HTMX tag directly in the editor. Small install, immediate quality of life improvement for anyone building hypermediadriven apps.
