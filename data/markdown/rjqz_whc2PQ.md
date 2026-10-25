# GitHub Trending Today \#49: SoL-Pi, viserys-agent, Edge0, Mac-Duo, artemis, rune, YOINK, opensend

[Watch the original video](https://www.youtube.com/watch?v=rjqz_whc2PQ)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Introduction

[0:00](https://www.youtube.com/watch?v=rjqz_whc2PQ&t=0)

Welcome back to GitHub awesome. This is GitHub trending today number 49. 35 trending open-source projects on GitHub right now. Let's get into it.

## SoL-Pi

[0:11](https://www.youtube.com/watch?v=rjqz_whc2PQ&t=11)

- https://github.com/NVlabs/SoL-Pi

So, PPI is NVIDIA's extension for cutting repeated work in the PI coding agent. It can combine a file edit with its validation command, replace bulky repeated outputs with references the agent can retrieve, and shorten diagnostic logs while checking quotations against the originals. Everything is optin and pi itself stays unmodified. The optional log reducer may send diagnostic content to a configured model.

## codex-astra-luna-orchestrator

[0:38](https://www.youtube.com/watch?v=rjqz_whc2PQ&t=38)

- https://github.com/donvito/codex-astra-luna-orchestrator

This is a codeex config that splits the work across a chain of command instead of one model doing everything. GPT6 Astra sits on top as orchestrator deciding what needs doing while GPT 5.6 Luna sub aents explore the code, implement, test, research or review it. Readon roles like explorer and reviewer can't touch your files the way worker and tester can. Vizeris gives AI coding

## viserys-agent

[1:02](https://www.youtube.com/watch?v=rjqz_whc2PQ&t=62)

- https://github.com/rizqinrr/viserys-agent

agents a written engineering process from clarifying requirements to reviewing and shipping changes. Its markdown workflows define steps and exit criteria for tasks like test-driven development, debugging, and migrations. Separate reviewer personas examine code quality, security, and performance, while shared checklists load only when needed.

## Edge0

[1:26](https://www.youtube.com/watch?v=rjqz_whc2PQ&t=86)

- https://github.com/Edge0-AI/Edge0

Edge Zero runs Mixture of Experts models on a Mac by streaming expert weights off the SSD instead of loading the whole model into RAM, which is how the 35 billion parameter version gets by on just 2.9 GB of peak memory. A pre-outer predicts which experts get used before it needs them. The maintainers say that's worth up to 59% more decode throughput. and a distilled Laura adapter claws back most of the quality lost to 4-bit quantization.

## Mac-Duo

[1:56](https://www.youtube.com/watch?v=rjqz_whc2PQ&t=116)

- https://github.com/sumimakito/Mac-Duo

Mac Duo takes that iPhone Duo effect where the screen tilts and blurs as you close the lid and ports it to MacBooks that actually have a lid angle sensor. It captures your live screen with Screen Capture Kit and runs the perspective, blur, and dimming through Metal on the GPU with adjustable angle settings sitting in the menu bar. It only works on the built-in display and needs screen recording permission granted first.

## Zetta-Embodiment

[2:24](https://www.youtube.com/watch?v=rjqz_whc2PQ&t=144)

- https://github.com/air-embodied-brain/Zetta-Embodiment

Zeta lets a robot fix itself while it works. Instead of retraining the whole policy, it freezes the base model and evolves small code-based critics and recovery skills on top of it whenever something goes wrong. There's an actual evolution protocol that diagnoses the failure, generates candidate fixes, and only keeps ones that pass staged validation gates with held out test seeds. So, it's not just gaming its own benchmark.

## artemis

[2:52](https://www.youtube.com/watch?v=rjqz_whc2PQ&t=172)

- https://github.com/google/artemis

Artemis drives a real Android phone or emulator off plain language instructions instead of brittle UI selectors with a planner, operator, and checker doing the actual work. It runs in two speeds. flash at three to five seconds a step, pro at 15 to 40 when it needs to actually plan. It self-heals by clearing popups that would otherwise derail a test. And Google says it's held up through 10 plus hours of continuous exploratory testing.

## rune

[3:21](https://www.youtube.com/watch?v=rjqz_whc2PQ&t=201)

- https://github.com/unstablebuild/rune

Rune is a GPU rendered IDE built entirely around the keyboard. No mouse first design, just a character grid interface running editor, file tree, and workspace management through one composable environment. AI coding lives in a separate extension called Rune Agent instead of being baked into the core, so you can still do it all by hand if you want.

## YOINK

[3:44](https://www.youtube.com/watch?v=rjqz_whc2PQ&t=224)

- https://github.com/DefiLeoo/YOINK

Yoink is a terminal note app that checks how your predictions turned out. It stores everything as markdown compatible with Obsidian, but lets you attach a deadline, confidence level, and testable condition to a note. When you run its settle command, it checks the source and records the outcome. You can then compare confidence with accuracy while also spotting notes you saved and never revisited.

## opensend

[4:10](https://www.youtube.com/watch?v=rjqz_whc2PQ&t=250)

- https://github.com/R44VC0RP/opensend

OpenSend is a self-hosted email platform that sits on top of Amazon SCEs, handling transactional mail, newsletters, and campaigns without making you build any of that from scratch. O is Google only, so there's no password system or team admin panel to maintain. And the dashboard SDK and MCP server all hit the same public API. It'll let you simulate a send before anything real goes out and logs every delivery with its status so you can filter through what failed.

## geiger

[4:40](https://www.youtube.com/watch?v=rjqz_whc2PQ&t=280)

- https://github.com/Atomburstofficial/geiger

Guyer runs one command, npxgger scan, and inventories every AI agent, MCP server, plugin, and extension actually installed on your machine. Then tags each one with what it can touch, execute, hold secrets, broad file system, network. It never shows you actual credential values, just their shape, and it's entirely readon, apart from an optional JSON export. You can snapshot a baseline and diff later scans against it to catch drift.

## DeepJIT

[5:08](https://www.youtube.com/watch?v=rjqz_whc2PQ&t=308)

- https://github.com/deepseek-ai/DeepJIT

Deepjit handles the plumbing around compiling and running device kernels at runtime. Deepseek's header only C++ library gives Nvidia CUDA GPUs and Huawei Ascend MPUs a shared compile, cache, and launch workflow. It can reuse compiled binaries across processes and machines and integrates with PyTorch's current device stream. It unifies the infrastructure, but your kernel code and compiler options still depend on the hardware back end.

## 3dviz-pro-max

[5:36](https://www.youtube.com/watch?v=rjqz_whc2PQ&t=336)

- https://github.com/viettranx/3dviz-pro-max

3D Viz Pro Max is an agent skill that turns a plain description into an actual 3JS scene. And the key part is it doesn't just generate code and guess. It captures the rendered frame with playright and checks its own output before calling it done. It ships with 223 recipes across 24 subject areas from anatomy to physics and 22 blueprint kits backed by real GPU captured frames verified with Shaw 256 hashes.

## trynix

[6:05](https://www.youtube.com/watch?v=rjqz_whc2PQ&t=365)

- https://github.com/fzakaria/trynix

Try lets you try historical Nyx packages in a Linux virtual machine running inside your browser tab. Pick a package and version and it fetches the pre-built package and its dependencies from Nyx's cache, then gives you a shell. The environment lives in the URL so you can share it as a link. There's also a GitHub action that turns pull request builds into browser previews for reviewers.

## mjbatch

[6:31](https://www.youtube.com/watch?v=rjqz_whc2PQ&t=391)

- https://github.com/kevinzakka/mjbatch

MJBatch lets Python run batches of Muoko physics simulations. across CPU cores. A C++ thread pool handles execution outside Python's global interpreter lock, while live arrays let you read states and update controls across the whole batch. You can also vary parameters like friction between simulations. The repository includes examples for robot learning, predictive control, and fitting physical parameters.

## iphone-duo

[6:57](https://www.youtube.com/watch?v=rjqz_whc2PQ&t=417)

- https://github.com/chuspeeism/iphone-duo

This recreates the fold animation on the iPhone Duo entirely in the browser with 3.js. Only the cover half rotates while the rear camera half stays put and it applies a dynamic blur up to 72 pixels that darkens and tracks the fold as it happens. You get three display modes, wallpaper, launcher or your own uploaded image, plus drag to orbit and scroll to zoom controls.

## GPT-as-Policy

[7:22](https://www.youtube.com/watch?v=rjqz_whc2PQ&t=442)

- https://github.com/anonymous-report-421/GPT-as-Policy

This project tested whether GPT6 Astra can actually control a robot arm, not just reason about code. Running it directly on 10 Robo-Dogjo manipulation tasks, five trials each, it scored 37.81 on average with a 26% success rate. But when they used it as a correction layer on top of an existing PI0.5 policy, stepping in on just 14.4% of control steps, the combined score jumped to 62.6 with a bird view makes an AI agent show its work before it touches your

## birdview

[7:50](https://www.youtube.com/watch?v=rjqz_whc2PQ&t=470)

- https://github.com/Qiuner/birdview

codebase. It builds an evidence- linked map of your architecture, stable module IDs, who owns which files, and then has the agent declare what it plans to change against that map before any edit happens. The output is a single self-contained HTML file, no server, with sidebyside architecture, changes, and comparison views, plus light and dark themes.

## Roam-Control

[8:17](https://www.youtube.com/watch?v=rjqz_whc2PQ&t=497)

- https://github.com/seanhowarthdev/Roam-Control

Rome control simulates GPS location on your own iPhone for testing location based features. The same thing Xcode Simulator does, but on real hardware with a proper Apple Maps interface. You can search a place, tap a spot on the map, or type coordinates directly, and it'll preview and step through an actual Apple Maps walking route with pause and reverse.

## argo9s

[8:40](https://www.youtube.com/watch?v=rjqz_whc2PQ&t=520)

- https://github.com/vvrnv/argo9s

Argo 9 brings a K9 style terminal interface to Argo CD so you can watch application health and sync status without opening the browser. It connects through Kubernetes or Argo CD's API with filters and a resource tree for drilling into deployments and pods. You can inspect logs and live YAML from the keyboard. It starts readonly, enabling writes, adds actions like syncing applications and toggling automatic synchronization.

## life-recorder

[9:09](https://www.youtube.com/watch?v=rjqz_whc2PQ&t=549)

- https://github.com/browser-use/life-recorder

Life recorder turns an iPhone into a continuous voice recorder that keeps running even with the screen locked or another app open, capturing audio in roughly 1 minute AAC chunks. It ships those over a local HTTPS connection, LAN by default, PrivateVPN if you need it over cellular to a Mac that transcribes everything locally with whisper.cpp. CPP no cloud service involved.

## deepseek-recipe

[9:33](https://www.youtube.com/watch?v=rjqz_whc2PQ&t=573)

- https://github.com/deepseek-ai/deepseek-recipe

Deepseek recipe translates different AI API formats into prompts. Deepseek models understand then converts their outputs back into matching responses. Its Rust libraries and Python bindings cover messages, chat completions and responses, including streaming and tool call parsing that gives developers shared conversion code instead of separate plumbing for each format.

## gpu-time

[9:57](https://www.youtube.com/watch?v=rjqz_whc2PQ&t=597)

- https://github.com/arikchakma/gpu-time

GPU time takes something like satsson 1 p.m. to 8 p.m. and turns it into an actual ISO date range with an RFC545 recurrence rule behind it entirely on your machine. Nothing gets sent to a server. It runs on plain CPU by default, but switches over to web GPU once a batch gets big enough past 32 inputs or 512 tokens and it's time zone and daylight saving aware.

## cargo-pretty

[10:23](https://www.youtube.com/watch?v=rjqz_whc2PQ&t=623)

- https://github.com/romancitodev/cargo-pretty

Cargo Pretty replaces Cargo's usual scrolling build log with a live terminal dashboard tracking up to six crates or tests at once with their own timers. And the progress bar is actually built from Cargo's real unit graph instead of a guess. Warnings collapse into a navigable panel and failed tests get diffled output plus a keyboard shortcut to retry them without rerunning the whole suite.

## infinite-world

[10:48](https://www.youtube.com/watch?v=rjqz_whc2PQ&t=648)

- https://github.com/BuzzPlay/infinite-world

Infinite World generates a persistent environment that actually remembers what happened, and you steer it with text, voice, or images instead of just type prompts. Every scene it generates reflects the current state of the world, and branches you take stay branches. You can preview locally and replay back through past paths with cached video.

## Phyzical\_org

[11:11](https://www.youtube.com/watch?v=rjqz_whc2PQ&t=671)

- https://github.com/Phyzicalorg/Phyzical_org

Physical connects browser-based robot demonstrations to training pipelines. The platform lets people move simulated robot arms, recording joint positions, actions, and object poses as demonstration data. This repository publishes the episode format, a sample task, and a dependency-free Python converter that writes Eliza OS compatible SQLite records.

## lid-plane

[11:34](https://www.youtube.com/watch?v=rjqz_whc2PQ&t=694)

- https://github.com/jh3y/lid-plane

Lid plane creates that lid fold illusion on a MacBook driven by the actual hinge sensor instead of guesswork, pulling the lid angle about 30 times a second and blurring the desktop progressively as you move it. Stop moving and an auto anchor settles the effect after a pause. You can tune anywhere from 0.15 to 2 seconds. Your apps stay fully clickable and keep keyboard motion panels gives

## motion-panels

[11:59](https://www.youtube.com/watch?v=rjqz_whc2PQ&t=719)

- https://github.com/letstri/motion-panels

resizable interfaces. animated folding, collapsing, and snapping powered by motion. Its resizing engine works directly with the DOM with a React adapter on top, so the core isn't tied to React. Panels can use pixel or percentage sizes, nest inside each other, and support keyboard controls and right to left layouts. The components come unstyled, or you can add a styled separator through its Shad CN registry.

## MacDuo

[12:27](https://www.youtube.com/watch?v=rjqz_whc2PQ&t=747)

- https://github.com/DhananjayBhosale/MacDuo

This Mac Duo app syncs desktop effects to your MacBook's actual lid position. And you get a choice of named transitions, Duo, roll, shutter, flex, iris that all play out as you close it. It auto clears after a stationary delay you can set between 1 and 5 seconds and esque or control option command F pauses the tracking entirely. It's pure swift and metal. No third party runtime dependencies, no analytics. Everything stays local.

## mousiki

[12:54](https://www.youtube.com/watch?v=rjqz_whc2PQ&t=774)

- https://github.com/itzender5820/mousiki

Musiki is a terminal music player built for people who'd rather not touch a mouse. It plays your local library or pulls tracks in through YTDLP for online search and streaming. And lyrics sync in real time with wordbyword highlighting as the song plays. There's a real FFT spectrum analyzer, waveform rendering, and album art right there in the terminal, plus shuffle, repeat, and Q management.

## mural

[13:19](https://www.youtube.com/watch?v=rjqz_whc2PQ&t=799)

- https://github.com/Chuloo/mural

Mural is a native iPhone app for practicing languages through live AI conversations. You speak to an animated orb, get corrections, and use optional subtitles or word lookup when you're stuck. It revisits vocabulary in later conversations and keeps separate progress for each language. Learning records stay on your phone, but practice sends data to OpenAI.

## agent-launcher

[13:43](https://www.youtube.com/watch?v=rjqz_whc2PQ&t=823)

- https://github.com/agent-launch/agent-launcher

Agent Launcher brings existing coding agent CLIs into one desktop workspace. It detects what's already there instead of forcing a reinstall and one clicks whatever's missing. It manages multiple provider profiles with actual connectivity checks, remembers which project you were working in per session, and reads your local conversation history straight out of JSONL or SQLite, so you can resume or delete past sessions.

## MiniWatts

[14:11](https://www.youtube.com/watch?v=rjqz_whc2PQ&t=851)

- https://github.com/ResistanceTo/MiniWatts

Mini Watts taps into the same private power management sensors Apple uses internally to show you exactly what's happening during a charge. Real wattage coming out of the charger, how much of that's actually reaching the battery cell and readings off all 30 temperature sensors in the phone. It even shows the USB PD handshake as it negotiates. Nothing leaves the device. There's no network connection at all.

## hktex

[14:38](https://www.youtube.com/watch?v=rjqz_whc2PQ&t=878)

- https://github.com/circle-group/hktex

HK text puts textures directly on a 3D mesh instead of flattening its surface into a UV map. It represents appearance with heat kernels that follow the surface, avoiding seams introduced by UV layouts. You can fit textures from an existing textured mesh or multiple images, then use them in physically based rendering. The repository includes optimization and comparison tools with a setup targeting Linux and an NVIDIA GPU.

## ResolveHQ

[15:05](https://www.youtube.com/watch?v=rjqz_whc2PQ&t=905)

- https://github.com/mirza-rizvi/ResolveHQ

Resolve HQ is a help desk you run entirely on Cloudflare's own infrastructure instead of paying for Zenesk or Intercom. It's a shared inbox with ticket assignment, priority and status tracking, full text search, and proper multi-tenant roles, owner, admin, agent across workspaces. Email threading follows RFC 5322. Attachments go through Cloudflare R2, and there's a public help center generated straight from your knowledgebased articles. \[music\]
