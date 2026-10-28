# Hacker News Show \#1: termcraft, Switchboard, Fortransky, Entroly, rsloop, GoldenMatch, Banish, capit

[Watch the original video](https://www.youtube.com/watch?v=i9YpWp0hXgg)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Introduction

[0:00](https://www.youtube.com/watch?v=i9YpWp0hXgg&t=0)

Today we're launching something new, the Hacker News show. Instead of our usual GitHub trending list, we're going straight to the show HN section, where solo developers post the things they've been building. 30 projects handpicked from the archives. Let's get into it.

## termcraft

[0:16](https://www.youtube.com/watch?v=i9YpWp0hXgg&t=16)

- https://github.com/pagel-s/termcraft

Term is a fully playable 2D sandbox survival game that runs entirely in the terminal, written in Rust. procedural generation across the overworld, nether, and end dimensions. Mining, crafting, furnaces, hostile mobs, dungeons, all rendered in ASI directly in your console. If you spend most of your day in a terminal anyway, this is a reasonable use of your lunch break. If

## Switchboard

[0:41](https://www.youtube.com/watch?v=i9YpWp0hXgg&t=41)

- https://github.com/doctly/switchboard

you're running multiple clawed code sessions and losing track of which agent is doing what, Switchboard is the missing layer. It's a desktop app built with Electron and SQLite that organizes all your CLI coding sessions by project, gives you full text search across them, and alerts you when an agent stalls and needs input. Less tab chaos, more visibility into what's actually running.

## Fortransky

[1:06](https://www.youtube.com/watch?v=i9YpWp0hXgg&t=66)

- https://github.com/FormerLab/fortransky

Someone built a fully functional terminal blue sky client in Forran. The fire hose decoder is Rust, but the core logic is modern forran. It landed on hacker news and opened up a genuine conversation about how readable and performant modern forran actually is when people bother to look at it. Keeping the old languages alive in the most unexpected places.

## pi-worker-agents

[1:30](https://www.youtube.com/watch?v=i9YpWp0hXgg&t=90)

- https://github.com/qaml-ai/pi-worker

PIWorker gives you autonomous agent workers that run natively in the terminal built for complex multi-step pipelines. Handed a highle task and it handles execution in your local environment without you managing each step manually. For anyone building serious AI automation pipelines worth checking the repository

## Entroly

[1:51](https://www.youtube.com/watch?v=i9YpWp0hXgg&t=111)

- https://github.com/juyterman1000/entroly

behind Entroly was burning 200 bucks a month just sending useless boilerplate code to their models. So they wrote a context optimizer in Rust. Instead of dumping whole files into your prompt, it uses token budgeting and entropy scoring to strip out the junk before it even hits the API. It supposedly cuts token costs by almost 80% and adds less than 10 milliseconds of latency.

## rsloop

[2:18](https://www.youtube.com/watch?v=i9YpWp0hXgg&t=138)

- https://github.com/RustedBytes/rsloop

UV loop is the standard choice for speeding up async Python, but it doesn't run on Windows. RS loop does. It's a new Asyncio event loop written in Rust drop incompatible with existing code with strong P99 latency numbers for API servers and native Windows support out of the box. If you're running async Python backends on Windows and Uloop hasn't been an option, this is worth benchmarking.

## GoldenMatch

[2:44](https://www.youtube.com/watch?v=i9YpWp0hXgg&t=164)

- https://github.com/benzsevern/goldenmatch

Entity resolution at scale is a genuinely hard problem. Golden Match makes it look straightforward. It uses a three- tier approach. Fast fuzzy logic handles the obvious matches and only the genuinely ambiguous edge cases get sent to GPT40 Mini as a tiebreaker. The result is 97% F1 accuracy on 100,000 messy records in 13 seconds at a cost that amounts to pennies per run.

## ps2-llm

[3:11](https://www.youtube.com/watch?v=i9YpWp0hXgg&t=191)

- https://github.com/xaskasdf/ps2-llm

Someone ran a large language model on a PlayStation 2. The PS2 has 32 megabytes of RAM which is obviously nowhere near enough to load a model. The solution was a custom inference engine that streams weights directly from the CDROM drive matrix by matrix as needed. It's slow. It works. It absolutely did not need to exist and someone built it anyway.

## Banish

[3:34](https://www.youtube.com/watch?v=i9YpWp0hXgg&t=214)

- https://github.com/LoganFlaherty/banish

Writing complex state machines in Rust usually means deeply nested match statements that are hard to follow and harder to maintain. Banish is a procedural macro that lets you define states and transition rules declaratively instead. It uses a fixed point looping model where a state keeps re-evaluating its rules until nothing before moving on. Zero runtime overhead compiles down to pure rust.

## batear

[4:00](https://www.youtube.com/watch?v=i9YpWp0hXgg&t=240)

- https://github.com/TN666/batear

BATR is a drone detection system that runs on a $15 ESP32 microcontroller with a single microphone. It uses Gortzel filters to identify the specific audio harmonics of drone rotors. runs 247 on battery and triggers an alarm locally with no cloud connection involved for $15 in hardware and some open source firmware. That's a genuinely impressive capability.

## Orchestrator

[4:25](https://www.youtube.com/watch?v=i9YpWp0hXgg&t=265)

- https://github.com/MatchaOnMuffins/orchestrator

Orchestrator gives you a T-m style split pane terminal dashboard for running multiple clawed sessions simultaneously. Instead of managing agents one at a time, you get a unified interface for assigning tasks across a coordinated swarm, all visible in one place. For anyone who's wanted to run parallel agents without the tab chaos, this is the direct solution.

## QueryPad

[4:49](https://www.youtube.com/watch?v=i9YpWp0hXgg&t=289)

- https://github.com/vericontext/querypad

Opening Python or a spreadsheet app just to check a column in a large CSV is one of those small annoyances that adds up fast. Queryad is a browserbased SQL playground powered by Duct DB. Drop in a CSV, JSON or parquet file and run SQL queries against it directly in the browser. Nothing uploads anywhere. Everything processes locally and duct DB handles gigabytes without breaking a sweat.

## Inner Warden

[5:15](https://www.youtube.com/watch?v=i9YpWp0hXgg&t=315)

- https://github.com/InnerWarden/innerwarden

Inner warden is a self-hosted security agent for Linux and Mac OS written in Rust. It uses ebpf kernel programs to block attacks at wire speed, detects privilege escalation in real time, and deploys honeypots to misdirect attackers. No cloud dependencies, no data leaving the machine. Your server handling its own defense locally is a meaningful shift from alert and respond.

## NC Web

[5:39](https://www.youtube.com/watch?v=i9YpWp0hXgg&t=339)

- https://github.com/victorantos/NC

Someone saw a screenshot of Norton Commander and immediately rebuilt it in vanilla JavaScript for the browser. Dual pane layout, iconic blue interface, FY toolbar, the whole thing. It uses the Origin private file system API for actual file management. So, it's not just a visual gag. Pure90s nostalgia that actually works in 2026.

## filenotes.nvim

[6:02](https://www.youtube.com/watch?v=i9YpWp0hXgg&t=362)

- https://github.com/UsamaQaisrani/filenotes.nvim

FileNotes.nenvim opens a floating markdown scratchpad tied to whatever file you're currently editing in Neoim. It hashes the file path and saves the note to a hidden.notes folder at the project route, so your context and reminders stay organized without touching the actual code. Small plug-in, genuine quality of life improvement for anyone who leaves themselves notes in comments.

## AI SDLC Scaffold

[6:27](https://www.youtube.com/watch?v=i9YpWp0hXgg&t=387)

- https://github.com/pangon/ai-sdlc-scaffold

Most AI coding sessions skip straight to implementation. The planning phase gets ignored and the architecture suffers for it. AI SDLC scaffold is a template repository that forces the pre-work. Structured markdown scaffolding for user stories, architecture decisions, and requirements designed specifically to make your agent plan the system before writing any code.

## capit

[6:51](https://www.youtube.com/watch?v=i9YpWp0hXgg&t=411)

- https://github.com/day50-dev/capit

Running autonomous agents without spend limits is a reasonable way to return from lunch to a $50 API bill. Capit sits between your agents and your LLM providers, enforcing hard-coded budgets per agent and per provider. If something goes rogue or gets stuck in a loop, it cuts off before the damage compounds. For anyone running agents unattended, this should probably be in the stack already.

## MakhalReader

[7:16](https://www.youtube.com/watch?v=i9YpWp0hXgg&t=436)

- https://github.com/Tutanka01/makhalReader

500 unread RSS items every morning is not a reading habit. It's a backlog. Macall reader parses full text feeds and runs every article through a local LLM like Olama, scoring each one from 1 to 10 based on your actual interests. Clickbait listical sync high signal engineering posts surface. The tagline is an RSS reader that thinks before you do. Hard to argue with that.

## VideoZero Skills

[7:42](https://www.youtube.com/watch?v=i9YpWp0hXgg&t=462)

- https://github.com/VideoZero/skills

Most AI agents can write code. Video zero skills lets them animate it. It's a toolkit of agentic skills built specifically to give AI coding agents programmatic control over the motion canvas engine. Your agent can write the animation code, render text and shapes, and output finished code visualization videos without any manual intervention.

## woti

[8:05](https://www.youtube.com/watch?v=i9YpWp0hXgg&t=485)

- https://github.com/aleris/woti

Scheduling across five time zones usually means opening three different websites and doing mental arithmetic. Wii is a terminal UI built in Rust that shows an interactive timeline of multiple time zones side by side. Scrub forward and backward to find the overlap window where everyone is actually awake. Fast, local, and solves the problem without leaving the terminal.

## elastik

[8:29](https://www.youtube.com/watch?v=i9YpWp0hXgg&t=509)

- https://github.com/rangersui/Elastik

Elastic rethinks the AI agent and web interaction problem in under 200 lines of code. Instead of building a complex agentic UI, it treats the LLM purely as an untrusted HTTP client using the model context protocol, forcing it to interact with a database, HTML front end, and server through a properly isolated sandbox. It's a clean demonstration of applying web security principles to AI architecture.

## react-container-kit

[8:56](https://www.youtube.com/watch?v=i9YpWp0hXgg&t=536)

- https://github.com/harveyrandall/react-container-kit

Context provider boilerplate is one of those things every React project reinvents slightly differently. React container kit is a lightweight utility layer on top of unstated next that gives you named containers, clean provider composition and TypeScript helpers out of the box. Write it once, stop rewriting it everywhere. Small library, real reduction in friction across projects.

## agent-password

[9:20](https://www.youtube.com/watch?v=i9YpWp0hXgg&t=560)

- https://github.com/tartavull/agent-password

Hard- coding API keys for local AI agents is an obvious security problem with no great solution until now. Agent password is a local Mac OS password manager built specifically for AI workflows. Secrets live in an encrypted SQLite vault and when an agent needs one, it requests access through Touch ID. Tap your fingerprint, the agent gets the key. Nothing sits in plain text.

## Nya AI

[9:45](https://www.youtube.com/watch?v=i9YpWp0hXgg&t=585)

- https://github.com/NitroRCr/nyaai

Nia AI is an open-source collaborative platform that puts AI chat, team workspaces, rich text pages, cloud storage, and channels in one place. The practical difference from just using chat GPT alongside your other tools. The AI can actually read your team's files and operate inside documents rather than existing in a separate tab you copy paste between.

## Collo.dev

[10:08](https://www.youtube.com/watch?v=i9YpWp0hXgg&t=608)

- https://github.com/plusai-solutions/ai-scrum-master-template

AI scrum master template turns a GitHub repo into a self-managing development pipeline using GitHub actions and claude. A scrum master agent reads feature requests, breaks them into canban tickets, and routes them to separate planner, developer, and tester agents. The whole thing runs inside your existing issue tracker without any additional infrastructure.

## Rover

[10:31](https://www.youtube.com/watch?v=i9YpWp0hXgg&t=631)

- https://github.com/rtrvr-ai/rover

Most support chatbots answer questions. Rover just does the thing for you. Drop a single script tag into your web app and it embeds a live AI agent directly in the UI. Tell it to help you check out and it takes over the DOM, navigates the page, clicks buttons, and fills out forms in real time. The gap between here's a help article and I'll do it for you is significant. Rover sits firmly on the useful side of it. Pomodoro works for some people. For everyone else, the 25minut cut off hits right in the middle

## CYCLE

[10:59](https://www.youtube.com/watch?v=i9YpWp0hXgg&t=659)

- https://github.com/saint-angels/CYCLE

of actual focus. Cycle flips it. Work for as long as you're genuinely in flow. Hit stop when you're done and it calculates a proportional rest break based on how long you actually worked. No arbitrary timer cutting you off. No guilt about going over. Simple idea, surprisingly well executed.

## OpenHarness

[11:24](https://www.youtube.com/watch?v=i9YpWp0hXgg&t=684)

- https://github.com/MaxGfeller/open-harness

If the official anthropic and OpenAI SDKs feel like too much framework for what you're actually trying to build, Open Harness is worth a look. It's a TypeScript library on top of Versel's AI SDK that gives you composable building blocks for agentic workflows without the overhead. supports the agents.mmd spec, sub aent delegation, and autocompaction for long conversations out of the box.

## sift

[11:49](https://www.youtube.com/watch?v=i9YpWp0hXgg&t=709)

- https://github.com/bilalimamoglu/sift

A failing test suite that dumps 13,000 lines of logs into your agents context is an expensive problem most people are just absorbing. SIFT sits between your terminal and your agent, captures the output, groups repeated failures, and compresses it into a structured diagnosis. 200,000 tokens of raw logs down to 120 without losing the actual debug signal. The kind of tool that pays for itself immediately.

## Skill Lab

[12:18](https://www.youtube.com/watch?v=i9YpWp0hXgg&t=738)

- https://github.com/8ddieHu0314/Skill-Lab

Writing agent skills is easy. Writing agent skills that actually trigger correctly is a different problem. Skill Lab is a Python CLI tool that runs 19 static checks on your skill.md files, validating structure, naming, and descriptions. It statically links your skill files, which is fine. But the second half is what actually sold me. It uses Claude to autogenerate brutal edgecase prompts, then tests them against a live model to prove your skill actually activates in context.
