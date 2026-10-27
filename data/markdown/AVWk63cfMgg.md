# GitHub Trending Today \#36: hyperframes, superlog, sandboxd, intelligent-terminal, html-video, lottie

[Watch the original video](https://www.youtube.com/watch?v=AVWk63cfMgg)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Introduction

[0:00](https://www.youtube.com/watch?v=AVWk63cfMgg&t=0)

Welcome back to GitHub awesome. This is GitHub trending today number 36. 35 trending open- source projects on GitHub right now. Let's get into it.

## hyperframes

[0:11](https://www.youtube.com/watch?v=AVWk63cfMgg&t=11)

- https://github.com/heygen-com/hyperframes

Remotion let you build video with React. Hyperframes makes the bet even simpler. Write HTML render video. You describe each frame as a web page and it turns that into actual video output. The pitch being that this is the format AI agents can author most easily. So instead of teaching an agent a video DSL or a timeline API, it just writes HTML, it already understands and out comes a rendered clip.

## superlog

[0:37](https://www.youtube.com/watch?v=AVWk63cfMgg&t=37)

- https://github.com/superloglabs/superlog

Instead of writing telemetry boilerplate or hunting down production crashes by hand, Superlog handles both. It uses an open- source agent wizard to auto instrument your codebase with logs and request spans. When an issue pops up, it groups the noisy logs and opens a mergeable pull request right in Slack to fix the bug. You get full observability and automated fixes without any manual instrumenting.

## sandboxd

[1:03](https://www.youtube.com/watch?v=AVWk63cfMgg&t=63)

- https://github.com/tastyeffectco/sandboxd

Building your own vzero clone or hosting sandboxes for AI coding agents usually forces you to choose between massive Kubernetes clusters and expensive SAS APIs. Sandboxd handles all of it on a single Docker host. It boots isolated Linux containers with instant preview URLs in one command. Because it wakes on request and stops on idle, you can stack dozens of active environments on a cheap $20 server.

## intelligent-terminal

[1:30](https://www.youtube.com/watch?v=AVWk63cfMgg&t=90)

- https://github.com/microsoft/intelligent-terminal

Warp made the AI terminal cool, but it's closed source and Mac first. Microsoft just answered with intelligent terminal, and it's a fork of Windows terminal itself, the one that already ships with Windows. The difference is a coding agent baked right into the command line. So instead of alt tabbing to a chat window, you ask for the command, the fix, or the explanation without leaving your prompt.

## html-video

[1:56](https://www.youtube.com/watch?v=AVWk63cfMgg&t=116)

- https://github.com/nexu-io/html-video

You've seen hyperframes and motion turn web code into video. HTML video is the agent first take. It's an HTML tovide meta layer built specifically for coding agents. Your agent writes plain HTML for each scene and this layer renders it out as actual video. the same studio team behind open design and HTML anything betting that HTML is the universal canvas for slides for designs and now for video.

## coreai-models

[2:22](https://www.youtube.com/watch?v=AVWk63cfMgg&t=142)

- https://github.com/apple/coreai-models

Getting a PyTorch model running fast on an iPhone's neural engine has always meant wrestling CoreML conversion and hoping the ops are supported. Apple just dropped official help. Core AI models is Apple's own repo of model export recipes, Python primitives, and Swift runtime utilities for ondevice AI. So you get the sanctioned path for taking a model and shipping it to run locally on Apple hardware. Feeding raw, messy GitHub issues directly to your coding agents usually results in halfbaked plans and wasted tokens.

## issue-finder

[2:48](https://www.youtube.com/watch?v=AVWk63cfMgg&t=168)

- https://github.com/lifuyue/issue-finder

Issue finder organizes this chaos by acting as a local first handoff prep tool. It ranks open issues using local heristics and packages a clean context bundle for cursor or clawed code. It exposes a JSON tool contract handling the prep work before your agent touches a single file.

## defending-code-reference-harness

[3:15](https://www.youtube.com/watch?v=AVWk63cfMgg&t=195)

- https://github.com/anthropics/defending-code-reference-harness

Attackers are already pointing AI at code bases looking for holes. Anthropic just published the defenders reference playbook. This is an open reference implementation for autonomous vulnerability discovery and human reviewed remediation with Claude. Claude hunts your own codebase for security bugs on its own, but it never silently patches anything. Every fix goes through a human review gate before it lands.

## lottie

[3:41](https://www.youtube.com/watch?v=AVWk63cfMgg&t=221)

- https://github.com/diffusionstudio/lottie

Lah animations normally start in After Effects and get exported as JSON. Text to Lah is a skill you add to Claude code or codeex that teaches the agent to write valid Lah JSON from a plain text description. Describe the animation you want. The agent writes the JSON and a Skia canvas kit player hot reloads it live. No motion design tool. No manual key framing.

## performativeUI

[4:05](https://www.youtube.com/watch?v=AVWk63cfMgg&t=245)

- https://github.com/vorpus/performativeUI

Every AI startup landing page has the same tells. Now, the gradient that shimmers across the headline, the button that glows because it generates sparkles on everything. Performative UI turns that into an actual React component library on purpose. It's a collection of AI native components whose only job is to signal how oversubscribed your funding round is while adding zero real functionality.

## dataroom

[4:30](https://www.youtube.com/watch?v=AVWk63cfMgg&t=270)

- https://github.com/hanxiao/dataroom

Most deep research setups cost a fortune in API tokens and leave you with no way to verify their facts. Data Room fixes this by letting you run a self-hosted research intern on your own hardware. You give it a query and a time budget and a local Quen model runs an autonomous search loop. It crawls and structures a clean folder of markdown documents complete with direct citations.

## edulab

[4:56](https://www.youtube.com/watch?v=AVWk63cfMgg&t=296)

- https://github.com/wy51ai/edulab

Edgulab is a collection of education skills that turn academic problems into self-contained interactive lesson web pages. The flagship handles solid geometry. Feed it a problem as text, a photo, or a random generated one, and it solves dihedral angles, skew lines, pointtoplane distances, and volumes on cubes, pyramids, and cones. Then renders an interactive page you can rotate and explore.

## canary

[5:21](https://www.youtube.com/watch?v=AVWk63cfMgg&t=321)

- https://github.com/wizenheimer/canary

Vibe coding is great until you spend half your day clicking manual browser flows to check if your agent broke anything. Canary reads your git diffs to find affected UI paths, then has Claude code test them in a real browser. It captures full screen recordings and console logs for every run. Best of all, it generates a reusable playwright script you can run in CI with zero inference cost.

## NaturePanelForge

[5:46](https://www.youtube.com/watch?v=AVWk63cfMgg&t=346)

- https://github.com/littlepeachs/NaturePanelForge

You see a beautiful figure in a nature paper and want to know exactly how it was plotted or you want to test whether an AI can reproduce it. Nature Panel Forge is a code first workflow that takes scientific figure images and open access nature family papers and turns them into panel level executable plotting code reconstruction tasks. So each subplot becomes a concrete challenge. Here's the target figure. Write the code that regenerates it.

## dots.tts

[6:15](https://www.youtube.com/watch?v=AVWk63cfMgg&t=375)

- https://github.com/rednote-hilab/dots.tts

Dots.T TTS is a two billion parameter fully continuous end-to-end model with no discrete tokens anywhere generating clean 48 kHz speech. It posts state-of-the-art results on cdts eval and the highest average speaker similarity across a 24 language benchmark with strong zeroot voice cloning from a 3-second sample and a streaming mode for low latency.

## ScrollWheel

[6:39](https://www.youtube.com/watch?v=AVWk63cfMgg&t=399)

- https://github.com/torvalds/ScrollWheel

When the creator of Linux gets bored, he doesn't relax. He builds a scroll wheel from scratch. Scroll Wheel is Lionus Torvald's minimalist toy project. A custom scroll wheel built around an RP2350 microcontroller. The chip in the Raspberry Pi Pico 2 reading rotation from a magnetic sensor instead of a mechanical encoder. No moving contacts to wear out, just a magnet and a hall sensor doing the work.

## TinyRetroPad

[7:06](https://www.youtube.com/watch?v=AVWk63cfMgg&t=426)

- https://github.com/PlummersSoftwareLLC/TinyRetroPad

The father of the Windows task manager just built a fully functional clone of Windows XP's Notepad in under three kilob. Tiny Retropad is written entirely in x86 assembly using MASM and crinkler compression. It packs in the classic menu set and your favorite keyboard shortcuts. It compiles down to just 2700 bytes showing what's possible when you count every single bite.

## Neo3dEngine

[7:33](https://www.youtube.com/watch?v=AVWk63cfMgg&t=453)

- https://github.com/IvanSobolev/Neo3dEngine

You don't need heavyweight graphics APIs like OpenGL or DirectX just to build a custom 3D renderer. Neo3D Engine is a minimalist 3D engine written entirely from scratch in C that renders completely inside your standard terminal. It runs entirely on the CPU using custom raycasting to handle dynamic lighting. It even features an object loader and TCP socket multiplayer with real-time chat.

## SoulX-Transcriber

[7:58](https://www.youtube.com/watch?v=AVWk63cfMgg&t=478)

- https://github.com/Soul-AILab/SoulX-Transcriber

Whisper transcribes what was said, but it has no idea who said it. Solex transcriber fixes this by unifying everything into a single large audio language model. Built on top of Quen 3 Omni, it directly learns speaker attribution and transcriptions in one go. You get speaker consistent transcripts for overlapping conversations without managing any complex cascade of separate microservices.

## WorldCupROI

[8:24](https://www.youtube.com/watch?v=AVWk63cfMgg&t=504)

- https://github.com/2417467487-hub/WorldCupROI

Evaluating the return on a multi-million dollar sports sponsorship usually involves a lot of handwaving and guesswork. World Cup ROI turns that complex attention market into a logical decision engine. It ingests match data along with real source text signals to model sponsorship outcomes. Using built-in uncertainty analysis, this Python platform drafts ROI predictions and scenario recommendations.

## baoyu-design

[8:49](https://www.youtube.com/watch?v=AVWk63cfMgg&t=529)

- https://github.com/JimLiu/baoyu-design

Navigating to the claude web interface just to use its design view and then manually copy pasting the HTML back to your IDE is a massive waste of time. Bou design runs claude design locally as an agent skill right inside cursor or claude code. You describe a screen and it renders polished UI mockups directly in your local environment. Clicking any element in the live preview lets you issue instant modifications.

## Forsy Trace Skill

[9:16](https://www.youtube.com/watch?v=AVWk63cfMgg&t=556)

- https://github.com/Forsy-AI/forsy-trace-skill

When an autonomous AI agent completes a complex task, the final output alone doesn't show you how it actually got there. Foresight trace skill is a skill that turns those blackbox agent workflows into clean structured trajectory data. By dropping their instruction file into your agent environment, you can capture fullstep traces and reasoning signals. It outputs valid JSON traces, letting you easily evaluate agent logic or construct post-training data sets.

## BrandDocs

[9:46](https://www.youtube.com/watch?v=AVWk63cfMgg&t=586)

- https://github.com/ferdinandobons/brand-docs

Asking your AI agent to write files using a company template is a quick way to watch your branding drift into completely wrong fonts and styling. Brand doc solves this by splitting the generation pipeline. It extracts your theme colors and layouts into a reusable brand kit. When creating new files, the engine strictly applies those defined rules so off-brand output becomes impossible by construction.

## align-dev

[10:13](https://www.youtube.com/watch?v=AVWk63cfMgg&t=613)

- https://github.com/razr001/align-dev

Letting different AI coding tools write files for the same codebase is a quick way to watch your conventions split into different directions. Align Dev keeps your AI assistance in sync. It uses a visual wizard to generate shared standards and instruction files for cursor or clawed code. You pick your exact frontend stack and it outputs a clean markdown file to keep your agents writing consistent code.

## papernews

[10:39](https://www.youtube.com/watch?v=AVWk63cfMgg&t=639)

- https://github.com/marcj/papernews

Refreshing multiple news websites all day is a fast way to kill your focus and drown in ads. Paper news fixes this by compiling your daily reading into a self-hosted types set latex PDF. A Dockerbased script pulls your RSS feeds then has clawed clean and rewrite the full text articles. It compiles them into a clean layout perfect for reading offline on e- in devices.

## mercek

[11:03](https://www.youtube.com/watch?v=AVWk63cfMgg&t=663)

- https://github.com/utibeabasi6/mercek

Logging into the bloated AWS console every single time you need to check on your ECS clusters is a slow annoying chore. Merc solves this by bringing a local first desktop IDE specifically to Amazon ECS. Think of it as Lens but for ECS instead of Kubernetes. It loads your local AWS profiles to aggregate cluster health and service deployments inside a clean native Tory app.

## lexa

[11:28](https://www.youtube.com/watch?v=AVWk63cfMgg&t=688)

- https://github.com/anvia-hq/lexa

Repeatedly scanning files ad hoc to feed your coding agents context is a slow token burning mess. Lexa fixes this by turning your codebase into a portable queryable graph. It indexes your project structure and symbols into one local schema. Your agents get compact context and atomic line-based patches keeping everyone working from the exact same stable view of your project.

## MoleCode

[11:53](https://www.youtube.com/watch?v=AVWk63cfMgg&t=713)

- https://github.com/AtomFlow-AI/MoleCode

LLMs are great with text and terrible with chemistry because a molecule is a 3D graph, not a sentence. Micode bridges that gap by turning the molecule into something the model already understands code. It represents molecular structures as code so an LLM can read, manipulate, and reason about chemistry directly instead of fumbling with raw smile strings or hallucinating structures.

## Git-Identity-Manager

[12:18](https://www.youtube.com/watch?v=AVWk63cfMgg&t=738)

- https://github.com/phricardo/Git-Identity-Manager

Committing code to your company's repo with your personal email address is a classic developer mistake. Git Identity Manager acts as a cross-platform desktop app that visually switches your active Git profiles in one click. It manages your user configurations and SSH credentials from a single interface. Instead of writing complex shell scripts, you get a clean desktop dashboard to isolate your work and personal profiles.

## Burrow

[12:46](https://www.youtube.com/watch?v=AVWk63cfMgg&t=766)

- https://github.com/caezium/Burrow

Paying a subscription fee just to clean your disc and monitor system stats is a waste of cash. Burrow is a Mac OS app built on top of the Mole CLI. It combines resource monitoring and visual disk analysis inside a single Swift UI window. It keeps weeks of local metrics in SQLite to track down background RAM hogs and even has an MCP server so local AI agents can query your Mac.

## grill-me-codex

[13:11](https://www.youtube.com/watch?v=AVWk63cfMgg&t=791)

- https://github.com/chaseai-yt/grill-me-codex

Relying on clawed code to autonomously design and execute complex architecture plans is a great way to bleed tokens on logic breaking mistakes. GRME codeex adds a readonly adversarial review layer directly into your terminal. Before writing any code, it triggers a multi-round debate between Claude and OpenAI's codeex. The loop hardens your plan, forcing both models to reach a consensus before a single file gets modified.

## ai-coding-starter-kit

[13:39](https://www.youtube.com/watch?v=AVWk63cfMgg&t=819)

- https://github.com/CWS6206/ai-coding-starter-kit

Vetting and configuring new AI coding skills for your team can easily feel like a chaotic free-for-all. AI-Coding starter cache solves this by bundling handpicked agent skills and configuration templates into one repository. It provides prevetted installation commands for tools like clawed code or codeex alongside a security review checklist to audit skills before you deploy them. You get a controlled structured environment for agentic coding.

## agentpet

[14:08](https://www.youtube.com/watch?v=AVWk63cfMgg&t=848)

- https://github.com/ntd4996/agentpet

You kick off clawed code, switch to another window, and have no idea if it's still working or stuck waiting on you. Agent Pet turns that anxiety into a little buddy. It's a native Mac OS menu bar app with a desktop pet that monitors your AI coding agents, Claude Code, Codeex, and Gemini CLI, in real time. The PET reacts to what your agents are actually doing. So, a glance tells you whether they're grinding away or idle.

## ZipSplat

[14:35](https://www.youtube.com/watch?v=AVWk63cfMgg&t=875)

- https://github.com/cvg/ZipSplat

Running 3D Gaussian splatting usually means waiting through hours of per scene optimization while fighting with missing camera poses. Zip splat fixes this by reconstructing full scenes in under a second with a single forward pass. It compresses unposed input images into compact scene tokens and decodes them into a small group of Gaussian. You get highquality view synthesis with a single knob to trade model size for quality.

## loupe

[15:03](https://www.youtube.com/watch?v=AVWk63cfMgg&t=903)

- https://github.com/mysk-research/loupe

You don't need to give an iOS app a single permission for it to build a stable fingerprint of your phone. Loop acts as an open- source privacy scanner that reveals exactly what third party apps can see. It queries standard public iOS APIs to show you how metrics like language settings or clipboard counts get combined. You see the actual data trackers used to recognize your device across the web.
