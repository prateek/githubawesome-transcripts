# GitHub Trending Weekly \#55: owly, ai-job-search, tsrs, dev-null.sh, laya, reylo, openterminal, onkey

[Watch the original video](https://www.youtube.com/watch?v=d2ShJhqjqcM)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Introduction

[0:00](https://www.youtube.com/watch?v=d2ShJhqjqcM&t=0)

Welcome back to GitHub awesome. This is GitHub trending weekly 55. 35 trending open source projects on GitHub right now. Let's go.

## owly

[0:11](https://www.youtube.com/watch?v=d2ShJhqjqcM&t=11)

- https://github.com/t4t5/owly

Ali lets an iPhone airdrop files directly to and from a Linux computer using supported non-Apple Wi-Fi hardware. You can send and receive from the terminal or pair it with Omdrop for a desktop interface. It implements Apple's direct wireless protocol, so compatibility depends on your exact Wi-Fi card and driver. Some cards keep Wi-Fi connected during transfers. Others temporarily disconnect until OI releases the radio.

## ai-job-search

[0:38](https://www.youtube.com/watch?v=d2ShJhqjqcM&t=38)

- https://github.com/ai-job-search-dev/ai-job-search

AI job search turns clawed code into a job application assistant that runs on your own machine. You build a profile once from your CV and documents. Then you give it a job posting and it checks how well you fit, drafts a tailored CV and cover letter, and has a second agent review them before compiling the PDFs. It also checks the CV the way an applicant tracking system would read it.

## tsrs

[1:03](https://www.youtube.com/watch?v=d2ShJhqjqcM&t=63)

- https://github.com/oxc-project/tsrs

TSRS is a Rust port of the TypeScript 7 type checker from the team behind the Oxy tool chain. It's meant as a drop-in replacement for the TypeScript 7 compiler and language server, aiming for full conformance with far less memory. Install it with PNPM and run it like the normal type checker or plug it into your editor as a language server. There's also a web assembly build that runs in Node and the browser.

## new-term-radar

[1:29](https://www.youtube.com/watch?v=d2ShJhqjqcM&t=89)

- https://github.com/zhuyansen/new-term-radar

New term radar is a small Python tool that spots new AI names like models, products, and repos before keyword tools start listing them. Once a day, it pulls signals from exposts, hugging face, GitHub, and site maps, merges them, and has a model decide whether each term is a real name or just a common word. The real names land in a report and a database.

## security-audit-skill

[1:52](https://www.youtube.com/watch?v=d2ShJhqjqcM&t=112)

- https://github.com/cloudflare/security-audit-skill

Security audit skill is Cloudflare's skill that turns your coding agent into a security auditor for your own codebase. It maps maps the architecture and trust boundaries first, then sends separate sub agents hunting through each area. Every possible bug goes to a fresh agent whose only job is to prove it wrong. Only real boundary failures get confirmed and everything is written into structured reports.

## dev-null.sh

[2:18](https://www.youtube.com/watch?v=d2ShJhqjqcM&t=138)

- https://github.com/dev-null-sh/dev-null.sh

DevNull is a social network for developers where your GitHub account becomes your identity, posts are commits, and timelines are logs. Share code with syntax highlighting, follow people's projects, or publish from your terminal and GitHub actions using SSH signatures. Public posts are readable without signing in, and content goes through moderation before appearing to others.

## laya

[2:43](https://www.youtube.com/watch?v=d2ShJhqjqcM&t=163)

- https://github.com/NandhaKishorM/laya

Lia is a system one decision engine that answers typed questions about any text in a single forward pass with no text generation. Ask it to pick a label, give a score or return a yes no probability and a router sends the text to the right model with an English model and a multilingual one covering over 100 languages. Every answer comes back with a confidence value and can abstain when it's unsure.

## 3d-model-anything

[3:10](https://www.youtube.com/watch?v=d2ShJhqjqcM&t=190)

- https://github.com/wesbos/3d-model-anything

3D model anything from West Boss scans a room with your iPhone and turns it into an editable 3JS scene with an AI agent doing much of the modeling. The iPhone app captures LAR geometry and photos. Then a skill walks the agent through measuring the space, building the model, and comparing it against your original photos from matching camera angles.

## rossark-motion-skill

[3:33](https://www.youtube.com/watch?v=d2ShJhqjqcM&t=213)

- https://github.com/rossark0/rossark-motion-skill

Rossarch motion skill is a clawed code skill for animating drawings including SVG art aiming for smooth 60fps motion in React Native and Swift UI. It can bring characters, plants, fire, water, and even logos and charts to life. A single clock drives the whole scene with real pivots, follow through, and gentle idle movement so nothing feels stiff. Give it a reference video and it measures the motion frame by frame before building.

## reylo

[4:02](https://www.youtube.com/watch?v=d2ShJhqjqcM&t=242)

- https://github.com/colinhacks/reylo

Rao from Colin McDonald who made Zod lets you import. School files straight into Typescript and get full type inference from them. Write a query in a SQL file, import it and call run. Rao has your dev database prepare the query without running it. Reads the types of column and parameter and hands them back to TypeScript. It works out nullability, whether you get one row or many, and even union types from your enums.

## openterminal

[4:29](https://www.youtube.com/watch?v=d2ShJhqjqcM&t=269)

- https://github.com/spovalova/openterminal

Open Terminal is a research tool for traders that builds its interface from a plain English question. Ask something and an agent assembles a workspace of charts, tables, and option chains, then answers while pointing at the widget the widgets it made. It runs as one process on your own machine with your browser as the front end. And the server checks that the numbers in the reply match the data on screen.

## hatchzip

[4:55](https://www.youtube.com/watch?v=d2ShJhqjqcM&t=295)

- https://github.com/xevrion/hatchzip

Hatchzip is a Rust tool that extracts huge archives in place, reclaiming disk space as it goes. Normally, you need room for both the archive and everything inside it. Hatchzip extracts from the end of the archive and trims the file down after each batch, so you only need about the size of the output. It checks there's enough space before touching anything, verifies files with CRC32, and can resume if it's interrupted.

## dquickts

[5:23](https://www.youtube.com/watch?v=d2ShJhqjqcM&t=323)

- https://github.com/stencil-hq/dquickts

Dquick test is a fork of Fabris Bellard's quickjs JavaScript engine that adds durable execution. It can pause running JavaScript at a safe point even in the middle of a loop and save the entire heap as a snapshot. Later, another process can load that snapshot and pick up exactly where the code stopped. Follow-up snapshots only store what changed, so they can be tiny.

## ming-voice

[5:47](https://www.youtube.com/watch?v=d2ShJhqjqcM&t=347)

- https://github.com/JMS1717/ming-voice

MingVoice is a local real-time voice assistant that runs on AMD Radeon GPUs built on Inclusion AI's Ming speechtoech model. It listens, works out when you finish talking, and starts answering before you're even done, then rolls back if you keep going. You can interrupt it mid reply, and it ignores its own voice coming through the speakers. It can search the web, set timers, and control home assistant.

## onkey

[6:14](https://www.youtube.com/watch?v=d2ShJhqjqcM&t=374)

- https://github.com/dsmurrell/onkey

Onkey is a free singing trainer for Mac OS that gives you pitch feedback while you sing along to music in Spotify, Apple Music, or YouTube. It's built with Tori and Rust and runs its models on your Mac. The first time a song plays, it pulls out the lead vocal, tracks the singer's pitch, and turns it into note bars, one per syllable. On later plays, it follows the song and scores your voice live, line by line.

## Sumi.css

[6:41](https://www.youtube.com/watch?v=d2ShJhqjqcM&t=401)

- https://github.com/vladocar/Sumi.css

Sumi.css styles plain HTML. So forms, tables, and navigation look consistent before you add a single class. Link one stylesheet, and it follows the visitor's light or dark setting with optional classes for grids and layout. Colors, spacing, and fonts come from CSS variables. Its base element styles have zero specificity, so your own CSS can override them without a fight. No build step or JavaScript required.

## rl-env-use

[7:07](https://www.youtube.com/watch?v=d2ShJhqjqcM&t=427)

- https://github.com/browser-use/rl-env-use

RLEn views from the browser use team builds a reinforcement learning environment from a oneline description. Its agents mine real source material from the web like clinical trial protocols or 10Q filings along with the outcomes that got published later. Code computes the correct answers and any task a frontier model already solves gets rewritten to be harder. Then it tunes a model's prompt against a train and test split.

## img2interior

[7:35](https://www.youtube.com/watch?v=d2ShJhqjqcM&t=455)

- https://github.com/img2threejs/plugin-interior

IMG2 interior is a skill for coding agents like Claude Code and Codeex that turns a single photo of a room into an editable Blender scene and a browser viewer. The agent reads the image, writes a Blender scene and a Python builder, renders it, then compares the render against your photo, and iterates. It's honest that this isn't a oneshot image to mesh model since it depends on that review loop.

## Rubix-lang

[8:02](https://www.youtube.com/watch?v=d2ShJhqjqcM&t=482)

- https://github.com/tek-sys-hub/Rubix-lang

Rubik is an experimental systems programming language whose whole compiler is written by hand in x8664 assembly. It turns source files into standalone native programs for Linux and Windows with no lib C, no LLVM and no outside tool chain. It has strrus, arrays, floatingoint math, multifile imports, and Rust style error messages with source snippets. On Windows, it even finds the system functions it needs at runtime.

## motion2code

[8:28](https://www.youtube.com/watch?v=d2ShJhqjqcM&t=508)

- https://github.com/lovisdotio/motion2code

Motion Toad guides a coding agent through rebuilding a motion design video as editable SVG and Gap code. It extracts frames and colors first, then puts the animation on one timeline you can seek to any moment. Comparison tools show the source beside the render and flag mismatched frames or a jump at the loop seam. The result stays editable, so changing a color or timing means changing code.

## omnara

[8:54](https://www.youtube.com/watch?v=d2ShJhqjqcM&t=534)

- https://github.com/omnara-ai/omnara

Omnara runs AI agents as a service across your own machines and cloud sandboxes with your choice of model provider. Launch jobs through an API. Follow tool calls live and require approval before specific tools run. Agent history lives in Postgress so workers can resume after crashes. You can self-host with Docker Compose, but you'll need to connect models and machines and configure it for production.

## ELYTerminal

[9:20](https://www.youtube.com/watch?v=d2ShJhqjqcM&t=560)

- https://github.com/ELY-Open-Source/ELYTerminal

Eli terminal is an open-source terminal for Mac OS, Windows, and Linux written in Rust on the GPUi framework with elacrity's terminal engine underneath. Your sessions sit on the left, the terminal in the middle, and git and file panels on the right. Shell integration tells it which folder each prompt is in and how each command went, so the side panels follow along.

## prompt2rig

[9:44](https://www.youtube.com/watch?v=d2ShJhqjqcM&t=584)

- https://github.com/blendi-remade/prompt2rig

Prompt to rig turns a text prompt into a rigged 3D character acting out the motion. Type what you want and a fast video model makes a short clip. The motion gets extracted from it and mapped onto a mixo skeleton right in the browser. A quick in browser pose estimate gives you an instant preview while a local GPU does a cleaner pass in about 3 and 1/2 seconds.

## video-short

[10:08](https://www.youtube.com/watch?v=d2ShJhqjqcM&t=608)

- https://github.com/petergyang/video-short

Video short is a skill for AI agents that turns a raw recording into a finished short video with B-roll, motion graphics, captions, and music. Pointed at your footage, and it transcribes the talk, then cuts retakes, and dead air. Next, it proposes a scene by scene plan for you to approve before rendering anything. After the draft renders, you leave notes on a review page, and the agent makes a new version.

## penmentor

[10:34](https://www.youtube.com/watch?v=d2ShJhqjqcM&t=634)

- https://github.com/AbdullahAlhariri/penmentor

Pen Mentor is a math tutor that works on a pen tablet. You write a problem out by hand in Exornal Plus+, press a key, and an AI model marks your work right on the page, circling mistakes and ticking the correct lines like a teacher would. Instead of handing you the answer, it gives graduated hints from a gentle nudge to a faint ghost of the next step. It can even generate a three blue one brown style animation of the idea behind the problem.

## rec

[11:02](https://www.youtube.com/watch?v=d2ShJhqjqcM&t=662)

- https://github.com/recursive-oss/rec

Wreck is a local inference engine from recursive for running their flint language models on an Apple silicon Mac. One command launches the model inside a coding harness like pi or open code downloading everything on first run. It can also serve an OpenAI compatible API on local host so other tools can point at your local model with a local key to authenticate. The server keeps running after you close the terminal until you stop it.

## BitKindle

[11:30](https://www.youtube.com/watch?v=d2ShJhqjqcM&t=690)

- https://github.com/tombkeeper/BitKindle

BitKindle is a C compiler tool chain for 64-bit Windows that bootstraps itself from a seed of just 3584 bytes of machine code. It needs no MSVC, GCC, Clang, or Windows SDK, and the build downloads nothing. PowerShell decodes the seed. Then each stage builds the next one. You get assemblers, a C compiler written in C, a runtime library, and a linker that produces real Windows programs.

## opal

[11:55](https://www.youtube.com/watch?v=d2ShJhqjqcM&t=715)

- https://github.com/xingjian-bai/opal

Opal lets a coding agent rewrite your PyTorch optimizer while the model trains. It reads training statistics, then adjusts update rules, learning rates, or gradient clipping through small programs loaded during the run. Every change comes with a recorded rationale and code diff. You can first verify a dry run against your original optimizer. Agent calls add time and cost, and its changes can make training worse.

## Bursar

[12:22](https://www.youtube.com/watch?v=d2ShJhqjqcM&t=742)

- https://github.com/Samsara-1999/Bursar

Bersar is a self-hosted platform for running a shared Linux GPU server with accounts, quotas, and usage accounting built-in go and view on Postgress school. Users keep logging in over plain SSH as usual. A small agent on each machine reports GPU, CPU, and memory use back to a central controller. The controller prices that usage in points, enforces each person's quota, and logs security events.

## OpenVLHarness

[12:47](https://www.youtube.com/watch?v=d2ShJhqjqcM&t=767)

- https://github.com/uclanlp/OpenVLHarness

OpenVL harness gives vision language models tools to inspect images without retraining their weights. A model can locate objects, read text, estimate depth, or search for visual matches, then use Python to calculate over the results. Images, masks, and measurements stay addressable throughout each question, and the tool trace remains available for inspection. Video editor skills is a set of clawed code skills that turn Claude into a first pass video

## video-editor-skills

[13:10](https://www.youtube.com/watch?v=d2ShJhqjqcM&t=790)

- https://github.com/appariciojunior/video-editor-skills

editor inside Da Vinci Resolve. It cuts your footage from the transcript, trimming retakes in dead air, then lays in B-roll, music, captions, and motion graphics and sets up the YouTube export. You still make the creative calls. It reads the silences to pace of vlog, picks B-roll, and balances the loudness.

## open-math-harness

[13:36](https://www.youtube.com/watch?v=d2ShJhqjqcM&t=816)

- https://github.com/openmathmodel/open-math-harness

Open Math Harness is the open- source runtime behind OpenMath OS, a platform for doing math research with AI agents written in Rust. Every agent runs as a sandboxed process that only gets the permissions it's given. The agents run on openweight models and can split up work, use tools, and keep project memory in Git. In Ultramath mode, several agents try different approaches to one problem and report back.

## bambu-bar

[14:02](https://www.youtube.com/watch?v=d2ShJhqjqcM&t=842)

- https://github.com/rolottr/bambu-bar

Bamboo Bar is a native Mac OS menu bar app for Bamboo Lab 3D printers written in Swift with no third-party packages. It shows print progress, time left, temperatures, AMS spools, and any errors right in the menu bar. You can pause, resume, or stop a print, change the speed, and switch the chamber light. It handles several printers at once, and adds desktop widgets.

## Hi3Dv1.0

[14:25](https://www.youtube.com/watch?v=d2ShJhqjqcM&t=865)

- https://github.com/hi3d-official/Hi3Dv1.0

I3D takes a rough 3D mesh and a reference image of the same object, then refines the geometry through progressively finer passes. Feed it a coarse model and a photo, and it exports a refined mesh through Python or the command line. It produces geometry only, so textures need another step. Hidden surfaces are inferred, and running it requires Linux with a compatible Nvidia GPU.

## Plume\_Launcher

[14:51](https://www.youtube.com/watch?v=d2ShJhqjqcM&t=891)

- https://github.com/aradhyas8/Plume_Launcher

Plume Launcher gives Android TV and Google TV a home screen centered on your apps and continue watching without sponsored rows. Rearrange or hide apps, pin HDMI inputs beside them, and assign shortcuts to supported remote buttons. Its home button service uses Android accessibility permissions with an extra setup step on some newer TVs.
