# GitHub Trending Monthly \#8（2026.06）

[Watch the original video](https://www.youtube.com/watch?v=G7Y5ruEVp8A)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Introduction

[0:00](https://www.youtube.com/watch?v=G7Y5ruEVp8A&t=0)

Welcome back to GitHub Awesome. Today we're looking back at 35 popular projects from June and checking which ones developers actually got excited about last month. Let's get into it.

## ponytail

[0:13](https://www.youtube.com/watch?v=G7Y5ruEVp8A&t=13)

- https://github.com/DietrichGebert/ponytail

AI coding agents love turning a two-line fix into a small software architecture seminar. Ponytail is a plugin that teaches them to stop earlier, reuse what exists, use the platform, and only write new code when the smaller answer actually fails. The maintainers report about 54% less code, 20% lower cost, and 27% faster runs on their agentic benchmark. The punchline is simple. Lazy solution, not lazy review. BU's unlimited OCR is a document model built to read a long multi-page file in one

## Unlimited-OCR

[0:41](https://www.youtube.com/watch?v=G7Y5ruEVp8A&t=41)

- https://github.com/baidu/Unlimited-OCR

shot without choking partway. It extends DeepSeek OCR's trick of treating the page as an image and adds a no repeat engram processor so it stops looping on long stretches of text. The readme is heavy on error defining language and light on actual numbers. So read the paper before you trust the leap past deepseek.

## MiMo-Code

[1:07](https://www.youtube.com/watch?v=G7Y5ruEVp8A&t=67)

- https://github.com/XiaomiMiMo/MiMo-Code

Every terminal coding agent eventually hits the same wall. It forgets why yesterday's decision mattered. My code is Xiaomi's fork of open code built around longer running agent work. It keeps cross- session memory in SQLite, checkpointing project state and rebuilding context when it runs low so it doesn't relearn your codebase each time. Set a goal and a separate judge model has to agree it's truly met before the agent stops.

## improve

[1:34](https://www.youtube.com/watch?v=G7Y5ruEVp8A&t=94)

- https://github.com/shadcn/improve

The expensive part of coding agents is often the thinking, not the typing. Improve leans into that. It's an agent skill that uses your strongest model to audit a codebase, rank findings, and write self-contained implementation plans for cheaper agents or humans to execute. The plans include file paths, code excerpts, verification commands, stop conditions, and drift checks.

## omnigent

[1:58](https://www.youtube.com/watch?v=G7Y5ruEVp8A&t=118)

- https://github.com/omnigent-ai/omnigent

Everyone argues clawed code versus codecs versus cursor. Omnigent runs all of them under one layer so you stop choosing a meta harness. Mix agents in a session. Swap harnesses without rewriting. Have one vendor's agent review another's diff. Policies pause before risky shell commands. Cap spend and sandbox each agent at the OS level. Sessions follow you from terminal to phone.

## lottie

[2:23](https://www.youtube.com/watch?v=G7Y5ruEVp8A&t=143)

- https://github.com/diffusionstudio/lottie

Making Lahi by hand is where motion design meets JSON pain. Text to gives coding agents a proper workspace for generating animations from prompts, SVGs, screenshots, or real data. The agent writes the Lah scene and the included player live updates from the project folder so you can inspect, scrub, and refine it while it changes.

## loop-engineering

[2:45](https://www.youtube.com/watch?v=G7Y5ruEVp8A&t=165)

- https://github.com/cobusgreyling/loop-engineering

Prompting a coding agent once is easy. Keeping it useful every day is the hard part. Loop engineering is a reference kit for designing the system around the agent. Schedules, state files, work trees, skills, sub aents, MCP connectors, and human gates. It includes seven production loop patterns, starter templates for tools like codecs and claw code, plus CLI for auditing readiness, scaffolding loops, and estimating token cost.

## DeepSpec

[3:13](https://www.youtube.com/watch?v=G7Y5ruEVp8A&t=193)

- https://github.com/deepseek-ai/DeepSpec

Speculative decoding sounds simple. Let a small draft model guess tokens, then have the big model verify them. Deepspec is Deepseek's full stack for training and testing those draft models. It covers data prep, target cache generation, training, and evaluation across benchmarks like Humane Evil, MBPP, GSM8K, Math 500, AIM25, and MTBench.

## eve

[3:36](https://www.youtube.com/watch?v=G7Y5ruEVp8A&t=216)

- https://github.com/vercel/eve

Agent frameworks get weird when the important stuff lives inside code nobody wants to inspect. Eve goes file system first. Prompts, tools, skills, channels, and schedules sit in plain project folders. You can scaffold a new agent with one command. Wire type tools with Zod. Choose the model in config and run everything through an interactive terminal UI.

## skills

[3:59](https://www.youtube.com/watch?v=G7Y5ruEVp8A&t=239)

- https://github.com/BuilderIO/skills

Agent skills are useful until they turn into a pile of one-off prompt hacks. Builder IO's skills is a small catalog for the parts where agents usually need better judgment. Visual planning, visual PR recaps, watchdog reviews, plan arbitration, docs checks, and staying within usage limits. The installer can target shared agent folders, clawed code, managed instruction blocks, and even a PR action.

## devspace

[4:24](https://www.youtube.com/watch?v=G7Y5ruEVp8A&t=264)

- https://github.com/Waishnav/devspace

Chat GPT can reason about code, but it usually can't touch your real repo, terminal, or test suite. Devspace fills that gap with a self-hosted MCP server for local projects. You choose the allowed folders, expose it through your own tunnel, approve access with an owner password. Then chat GPT can read files, make scoped edits, search code, run commands, use work trees, and follow your agents.m MD instructions.

## kage

[4:50](https://www.youtube.com/watch?v=G7Y5ruEVp8A&t=290)

- https://github.com/tamnd/kage

Save a web page, open it months later, find a blank screen or dead spinner. It was never yours, just a shell for someone else's JavaScript. Cage renders it in real headless Chrome, snapshots the DOM, strips every script, pulls the assets local. What lands on disk looks live and runs no code. Pack it into one zim. The open kwix format or an executable that is the site

## nub

[5:14](https://www.youtube.com/watch?v=G7Y5ruEVp8A&t=314)

- https://github.com/nubjs/nub

bun and deno made node feel slow but switching means a new runtime and its lockin nub keeps node wraps it in rust and bolts the good parts on top one tool runs your typescript with no build step and replaces npm npx nvm nodemon the rust runners have no JavaScript startup so their benchmark clocks a script in 15 milliseconds where pnpm needs over 400

## loopy

[5:38](https://www.youtube.com/watch?v=G7Y5ruEVp8A&t=338)

- https://github.com/Forward-Future/loopy

keep improving This is a great way to make an agent wander. Loopy turns repeatable agent work into bounded loops. Find the next action, check whether it helped, decide what to do next, and stop for a real reason. The repo includes the loop library website, plus an installable loopy skill for codecs, cursor, and clawed code. It can discover loops, adapt them, run bounded passes, debrief receipts, and prepare publication drafts.

## security-audit-skill

[6:06](https://www.youtube.com/watch?v=G7Y5ruEVp8A&t=366)

- https://github.com/cloudflare/security-audit-skill

Security reviews by coding agents are easy to make noisy. Cloudflare's security audit skill tries to make them harder to fake. It runs a six-phase audit. Recon, hunting, validation, reporting, structured JSON output, and independent verification by fresh agents. The useful constraint is adversarial review. The agent that finds a bug doesn't get to grade its own homework.

## aur-malware-check

[6:30](https://www.youtube.com/watch?v=G7Y5ruEVp8A&t=390)

- https://github.com/lenucksi/aur-malware-check

In June, attackers forged commits to hijack orphaned Arch user repository packages, slipping one install line into hundreds of pkg builds. That line pulled an npm package, dropping a credential stealer and a self-hiding EPF root kit. This repo is the cleanup kit. It gathers the scattered scripts and 588 flagged packages, then checks your packages, Pac-Man log, and npm caches against them. Joy Echo is an open- source audiovisisual pipeline designed to

## JoyAI-Echo

[6:56](https://www.youtube.com/watch?v=G7Y5ruEVp8A&t=416)

- https://github.com/jd-opensource/JoyAI-Echo

generate continuous multi-shot stories up to 5 minutes long. Instead of throwing away context, its memory bank tracks character identity and voice timber across different shots. The team clocks a 7.5 times inference speed up using distillation, though you'll need a hefty GPU locally.

## vorssaint-utils

[7:19](https://www.youtube.com/watch?v=G7Y5ruEVp8A&t=439)

- https://github.com/vorssaint/vorssaint-utils

If you have five different menu bar utilities eating up your max RAM, check this out. Vorsight is a native Swift toolkit that consolidates your daily tools into one open- source app. It replaces several paid apps with a per app volume mixer, a system monitor, a floating shelf, and an uninstaller. Since it's native Swift UI instead of Electron, it uses virtually no resources.

## oomwoo

[7:44](https://www.youtube.com/watch?v=G7Y5ruEVp8A&t=464)

- https://github.com/makerspet/oomwoo

If you're tired of robot vacuums sending floor plans to corporate servers, Umu is an entirely open-source cloud-free reference design. It runs ROSS 2 on a Raspberry Pi or ESP32, combining 3D printed parts with off-the-shelf LAR for local slam mapping. It's early, but everything from the 3D files to the motor PCBs is being built in public. It might be time to print your own. Markdown is great until your knowledge base becomes a folder

## open-knowledge

[8:09](https://www.youtube.com/watch?v=G7Y5ruEVp8A&t=489)

- https://github.com/inkeep/open-knowledge

nobody wants to edit. Open Knowledge gives those files a real workspace. Wizzywig editing, Mac OS app, local web UI, file search, tabs, graph links, and rich MDX style components. It wires up MCP, skills, and search for clawed codecs, cursor, so your docs can become the agents working memory instead of another stale wiki.

## testsprite-cli

[8:34](https://www.youtube.com/watch?v=G7Y5ruEVp8A&t=514)

- https://github.com/TestSprite/testsprite-cli

Coding agents can write features fast, then quietly break checkout. Test sprite key puts the verification loop in the terminal. Your agent can create a front-end or backend test, run it against the live app, pull one self-consistent failure bundle, fix the code, and rerun until it passes. It also installs skills for codecs, clawed cursor, and others, so the agent learns the testing workflow instead of guessing.

## loupe

[9:00](https://www.youtube.com/watch?v=G7Y5ruEVp8A&t=540)

- https://github.com/mysk-research/loupe

Most privacy warnings are abstract until you see the actual values your phone hands over. Loop is an iOS and iPad OS app that turns device fingerprinting into something you can inspect. It reads public Apple APIs, then shows passive signals, permission gated data, and side channel tricks like URL scheme probing or keychain persistence. Nothing leaves the device unless you export it.

## pixel2motion

[9:24](https://www.youtube.com/watch?v=G7Y5ruEVp8A&t=564)

- https://github.com/nolangz/pixel2motion

Logo animation sounds fun until you're matching a fuzzy PNG against a clean vector and every wobble shows. Pixel to Motion turns that into a codeex and claude skill. It reconstructs raster logos into motion ready SVG, authors the animation, then exports HTML demos, GIF or video previews, motion specs, frame captures, and QA evidence. The useful bit is the discipline. Final frame vector fit first, motion second, proof before polish.

## coreai-models

[9:52](https://www.youtube.com/watch?v=G7Y5ruEVp8A&t=592)

- https://github.com/apple/coreai-models

Ondevice AI on Apple platforms usually means three separate problems. Exporting the model, making it behave, and actually shipping it in an app. Core AI models gives you Apple's reference path for that whole loop. It has export recipes for popular open models, Python primitives for custom PyTorch authoring, Swift runtime utilities for Mac OS and iOS, command line runners, and agent skills for core AI workflows, compression and model authoring.

## effective-html

[10:21](https://www.youtube.com/watch?v=G7Y5ruEVp8A&t=621)

- https://github.com/plannotator/effective-html

Agent generated docs usually become markdown walls or tiny mermaid boxes. Effective HTML pushes agents toward visual artifacts that feel designed. full screen HTML pages, architecture diagrams, stack maps, and implementation plans with SVG first layouts. It ships three skills: HTML, HTML diagram, and HTML plan, plus local reference examples, so smaller models can copy the style without guessing.

## niubi\_guard

[10:47](https://www.youtube.com/watch?v=G7Y5ruEVp8A&t=647)

- https://github.com/Albert-Weasker/niubi_guard

Running a popular open-source project usually means dealing with coordinated spam or hostile issue campaigns that'll quickly drain your energy. Newbie Guard is an open-source repository defense system that uses LLMs to detect and flag repository abuse. It scans incoming issues and comments detailing its reasoning and AI confidence scores for every flagged item, so you don't have to monitor everything manually.

## Anima

[11:13](https://www.youtube.com/watch?v=G7Y5ruEVp8A&t=673)

- https://github.com/Fullive-AI/Anima

Smartome stacks are great until every device still waits for button presses. is an open-source agent OS that uses an LLM powered brain to run your smart home dynamically. It discovers local devices and tracks their state entirely offline. It interprets your environment to plan actions on the fly, ensuring your habit data doesn't leave your home network.

## agent-apprenticeship

[11:37](https://www.youtube.com/watch?v=G7Y5ruEVp8A&t=697)

- https://github.com/Forsy-AI/agent-apprenticeship

Most agent runs vanish into terminal scrollback, which is a waste. Agent apprenticeship is an open- source ecosystem that lets agents run automated workflow loops and convert each execution into reusable experience. Apprentice agents cooperate with human mentors to solve tasks, generating training signals from successes and failures to recursively improve future models.

## dox

[12:01](https://www.youtube.com/watch?v=G7Y5ruEVp8A&t=721)

- https://github.com/agent0ai/dox

Agents go sideways when the repo has rules, but the rules live in someone's head. Docs is a tiny agents.mmd framework for making that context self-maintaining. The root file holds projectwide instructions and an index, while child agents.mmd files describe local areas. Before editing, the agent walks the tree, reads the relevant docs, makes the change, then updates the docs after meaningful work. Chat GPT can reason about your code, but getting it safely into your actual repo is the

## codexpro

[12:27](https://www.youtube.com/watch?v=G7Y5ruEVp8A&t=747)

- https://github.com/rebel0789/codexpro

awkward part. Codex Pro is a local MCP bridge that turns chat GPT developer mode into a bounded coding agent for one workspace. It exposes repo context, file reads, exact edits, search, git diffs, safe verification commands, agents.mmd, and handoff files. It doesn't proxy models or bypass limits. It just connects your own session to your own repo. Your CN helper looks harmless

## cnfast

[12:54](https://www.youtube.com/watch?v=G7Y5ruEVp8A&t=774)

- https://github.com/aidenybai/cnfast

until it runs across every row, card, and rerender in a Tailwind app. CNFast is a drop-in replacement for the usual CLSX plus Tailwind merge setup with the same API and bite identical output. The maintainers report a 3.8x geometric mean speed up across 65 workloads, zero mismatches over 113,291 real world call groups, and tagged templates that cache repeated call sites.

## gorest-2d-animation-spritesheet-generator

[13:22](https://www.youtube.com/watch?v=G7Y5ruEVp8A&t=802)

- https://github.com/NO6KIKO/gorest-2d-animation-spritesheet-generator

Early game animation has a painful middle step. You can generate an image, but you still need clean frames, scene placement, metadata, and a preview that tells you if it works. Gorus turns that into a codeexass assisted 2D asset workspace. It can generate or import 12 frame and 16 frame sprite sheets, composite them into scenes, tune triggers and game states, then preview the result as a playable sidescroller.

## guard-skills

[13:49](https://www.youtube.com/watch?v=G7Y5ruEVp8A&t=829)

- https://github.com/amElnagdy/guard-skills

Agent written code usually fails in the same boring ways. Fake APIs, useless tests, overbuilt abstractions, and docs that promise things the code never does. Guard skills gives agents second pass review gates instead of more vibes. It includes clean code, test, docs, WordPress, and Woo Commerce guards, all as inspectable markdown skills. Let the agent build, then run the guard before you commit.

## slot-text

[14:14](https://www.youtube.com/watch?v=G7Y5ruEVp8A&t=854)

- https://github.com/Danilaa1/slot-text

Updating small UI text like metrics or timers with sudden value jumps feels jarring and looks completely unpolished. Slot text is an open- source dependencyfree roll animation library for vanilla JS or React. Instead of abrupt shifts, it rolls characters in and out with a smooth, tactile slot machine effect. It is extremely lightweight and prevents layout shifts so your surrounding design doesn't shake.

## ORG2

[14:41](https://www.youtube.com/watch?v=G7Y5ruEVp8A&t=881)

- https://github.com/yorgai/ORG2

Most agent IDEs optimize for output, then leave you guessing what actually happened. ORG2 is a local first cursor style desktop IDE built around reviewability. It runs on Rust and Tori, stays under a 100 megabytes on disk, and supports replayable agent traces, longunning sessions, shared workspace, state, git, terminal, browser, lsp, timelines, scheduling, and cross- session memory.
