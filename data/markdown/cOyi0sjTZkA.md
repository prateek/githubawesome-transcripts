# GitHub Trending Weekly \#21: awesome-openclaw-skills, LingBot-World, Sherlock, kreuzberg, Kimi K2.5

[Watch the original video](https://www.youtube.com/watch?v=cOyi0sjTZkA)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Introduction

[0:00](https://www.youtube.com/watch?v=cOyi0sjTZkA&t=0)

Welcome back to another weekly dive into the open- source projects trending right now. Today we've got 31 projects that will charge your dev workflow and maybe even blow your mind. Let's go.

## awesome-openclaw-skills

[0:13](https://www.youtube.com/watch?v=cOyi0sjTZkA&t=13)

- https://github.com/VoltAgent/awesome-openclaw-skills

Remember when OpenClaw was called Molbbot and before that Claudebot? This repo has kept up through all the rebrands. It's basically the awesome list for AI assistance skills. 700 plus community tools organized into 27 categories. browser automation, DevOps, health tracking, podcast management, everything. Every skill works with cloud code and other assistants that respect the standard.

## LingBot-World

[0:38](https://www.youtube.com/watch?v=cOyi0sjTZkA&t=38)

- https://github.com/Robbyant/lingbot-world

What if you could simulate entire video game worlds just by describing them? Lingbot World is world model that generates minute long highfidelity videos with full camera control. You can specify camera poses and it'll render a consistent environment from different angles. fantasy jungles, sci-fi cities, cartoon worlds, whatever. It runs in real time at 16fps, which means you could theoretically interact with generated worlds live. Quen just dropped Quen 3 ASR, and it does something OpenAI's models can't. It understands

## Qwen3-ASR

[1:07](https://www.youtube.com/watch?v=cOyi0sjTZkA&t=67)

- https://github.com/QwenLM/Qwen3-ASR

the vibe. Standard transcribers give you flat text, but Quen 3 captures the reality. It tags emotions, whispering, laughing, sarcasm, and handles the cocktail party problem, separating three people talking over each other. It's open weights, handles code switching mid-sentence, and gives your AI agent the ability to hear context, not just words.

## Sherlock

[1:35](https://www.youtube.com/watch?v=cOyi0sjTZkA&t=95)

- https://github.com/jmuncor/sherlock

Ever wonder exactly what your AI tools are sending to Claude or how many tokens you're actually burning? Sherlock is a transparent proxy that just shows you. It intercepts HTTPS traffic to LLM APIs and displays everything in a live terminal dashboard. Timestamps, models, token counts, and a fuel gauge showing your context usage against the limit with color-coded warnings.

## andrej-karpathy-skills

[2:00](https://www.youtube.com/watch?v=cOyi0sjTZkA&t=120)

- https://github.com/forrestchang/andrej-karpathy-skills

Want to pair program with Andre Carpathy? Meet Andre Carpathy skills. It's a custom personality pack for Claude Code that teaches your agent to code like Cararpathy. minimalism, first principles, building things from scratch in raw C or simple Python. It doesn't just solve the problem. It explains the math and the why behind it, turning your terminal into a private zero to hero course.

## kreuzberg

[2:25](https://www.youtube.com/watch?v=cOyi0sjTZkA&t=145)

- https://github.com/kreuzberg-dev/kreuzberg

So, you're sitting there with like 50 different document types scattered everywhere. PDFs that won't cooperate, random Excel files, scanned receipts, emails, whatever. And you're supposed to make sense of all this. Yeah, not happening. KDsburg handles 57 file formats, documents, spreadsheets, images, emails. OCR works on scanned docs, pulls tables out cleanly, cracks password protected PDFs, runs locally, no GPU, no cloud upload requirement.

## Kimi K2.5

[2:54](https://www.youtube.com/watch?v=cOyi0sjTZkA&t=174)

- https://github.com/MoonshotAI/Kimi-K2.5

Kimmy K2.5 is Moonshot AI's new open- source model. It handles text, images, and video in the same context window, 256K tokens. The agent swarm feature splits complex tasks across multiple specialized instances running in parallel which speeds up things like processing long documents or converting visual designs to code. You can access it through API. Use it in Kimmy code. It can batch tool calls instead of doing them one at a time. Lingbot depth is a

## LingBot-Depth

[3:23](https://www.youtube.com/watch?v=cOyi0sjTZkA&t=203)

- https://github.com/Robbyant/lingbot-depth

depth estimation model that outputs metric depth, actual distances in meters, not just a relative depth map. Most depth models tell you this is closer than that. Lingbot gives you this pixel is 2.3 meters away. If you're trying to grab something or avoid obstacles, you need measurements, not vibes. It handles edge cases better than earlier models. Thin objects like cables, stuff that usually confuses depth estimates about mermaid diagrams. Standard Mermaid

## beautiful-mermaid

[3:52](https://www.youtube.com/watch?v=cOyi0sjTZkA&t=232)

- https://github.com/lukilabs/beautiful-mermaid

rendering looks kind of dated and theming it means wrestling with CSS classes. Beautiful mermaid gives you stunning SVGs or ASI art from the same source. Zero DOM required. Ships with 15 curated themes plus full cheeky compatibility so you can use any VS Code theme. Supports flowcharts, sequence diagrams, state machines, class diagrams, er diagrams.

## T

[4:20](https://www.youtube.com/watch?v=cOyi0sjTZkA&t=260)

- https://github.com/alecthomas/t

T is a command line tool that condenses text processing into single letter operators. Instead of piping through GP said dead cut, you use S to split, F to filter, J to join. The syntax is Tur. If you're constantly parsing logs, maybe the muscle memory is worth building. If you touch O twice a year, probably not. Honestly, I keep forgetting O syntax, too. But I'm not sure the answer is learning a whole new mini language.

## zerobrew

[4:48](https://www.youtube.com/watch?v=cOyi0sjTZkA&t=288)

- https://github.com/lucasgelfond/zerobrew

If you use homebrew everyday and hate how slow it feels, check out ZeroBrew. It's an open- source Rust replacement for Homebrew that's way faster, five times faster on first installs, and up to 20 times faster on repeats. It uses a content addressable cache and parallel downloads, and pulls from the same homebrew bottles you already use. The best part, it's drop-in compatible. You can try it without wrecking your current brew setup.

## copilot-sdk

[5:16](https://www.youtube.com/watch?v=cOyi0sjTZkA&t=316)

- https://github.com/github/copilot-sdk

GitHub released SDKs that let you embed Copilot in your own applications. The way it works, your app calls the SDK, which spawns and manages a Copilot CLI process in the background. Communication happens over JSON RPC. The CLI is where the actual AI inference happens. Your code just sends requests and gets responses back. Useful if you're building developer tools and want copulate functionality without reinventing it.

## Frontend Slides

[5:43](https://www.youtube.com/watch?v=cOyi0sjTZkA&t=343)

- https://github.com/zarazhangrui/frontend-slides

Front-end slides is a clawed code skill that generates HTML presentation decks. Instead of describing what you want, it generates three different design previews and you pick one. 10 built-in styles: neon cyber, brutalist, editorial, terminal green, couple others. They're opinionated enough to not look like every other AI generated deck. This is for people who'd rather write markdown and let the styling happen automatically.

## moltworker

[6:10](https://www.youtube.com/watch?v=cOyi0sjTZkA&t=370)

- https://github.com/cloudflare/moltworker

Cloudflare dropped this repo. Molt Worker. It lets you run OpenClaw personal AI assistant in a Cloudflare sandbox. No more renting a VPS. No more exposing open ports to hackers. It uses Cloudflare workers for logic, R2 for memory, and zero trust for security. Works with Telegram, Discord, Slack, basically every chat platform. Cold starts take 1 to two minutes, but then it stays alive indefinitely on the free tier.

## evlog

[6:37](https://www.youtube.com/watch?v=cOyi0sjTZkA&t=397)

- https://github.com/HugoRCD/evlog

Evlog is a Typescript logging library that consolidates request context into single structured events. Instead of scattering console.log calls throughout your code, you attach context and emit one wide event. Errors include remediation hints in the log output, not just stack traces. During development, it prints readable logs. In production, it outputs JSON for your observability stack.

## App-Store-Connect-CLI

[7:02](https://www.youtube.com/watch?v=cOyi0sjTZkA&t=422)

- https://github.com/rudrankriyam/App-Store-Connect-CLI

App Store Connect CLI is a tool for automating App Store Connect tasks from the terminal. After authenticating with your Apple API key, you can list builds, invite TestFlight users, pull analytics, and upload new versions. Useful if you're automating releases as part of CI/CD, or want to check analytics without opening a browser. The JSON output makes it scriptable, so you can pipe it into other tools or let an AI agent handle routine release tasks.

## DeepSeek-OCR-2

[7:31](https://www.youtube.com/watch?v=cOyi0sjTZkA&t=451)

- https://github.com/deepseek-ai/DeepSeek-OCR-2

Deepseek just dropped OCR2. Instead of processing images the standard way, they built something called visual causal flow that mimics how humans read documents. It handles dynamic resolution, so it can chew through PDFs fast. They're claiming par with their first OCR model, but with better accuracy. Works with both VLM for production speed and regular transformers. supports everything from clean markdown conversion to layout free OCR when documents are messy.

## Trellis

[8:02](https://www.youtube.com/watch?v=cOyi0sjTZkA&t=482)

- https://github.com/mindfold-ai/Trellis

AI coding assistants forget your preferences between sessions. You explain we use Zustan not Redux or always run the llinter and the next day it's gone. Trellis fixes this with hooks that auto inject your coding standards into every conversation. You tell it once to use Zustand and it saves that to a spec file that loads automatically in future sessions. It updates its own specs based on what it learns from each task.

## Antigravity Awesome Skills

[8:29](https://www.youtube.com/watch?v=cOyi0sjTZkA&t=509)

- https://github.com/sickn33/antigravity-awesome-skills

Anti-gravity awesome skills is a library of 625 plus skills that teach AI coding assistants how to actually do things. Each skill is a set of instructions for a specific dev task. setting up Terraform infrastructure, profiling performance bottlenecks, wiring up AWS automation, following mobile development patterns, building voice AI pipelines. Think of it like giving your agent access to a senior dev's playbook for each problem domain.

## Noodles

[8:58](https://www.youtube.com/watch?v=cOyi0sjTZkA&t=538)

- https://github.com/unslop-xyz/noodles

Noodles turns code bases into interactive maps. You know that thing where you open a repo with 50 files and spend an hour just trying to figure out what calls what. Noodles generates D2 diagrams that show you the actual structure, which functions connect, where data flows, how modules relate. Instead of grepping through thousands of lines hoping to stumble on the right file, you look at the graph.

## Qualify

[9:25](https://www.youtube.com/watch?v=cOyi0sjTZkA&t=565)

- https://github.com/chaitanyya/sales

Qualify is a tool that researches B2B leads for you. Paste in a list of company websites. An AI agent visits each one, reads the site, figures out what they do, checks for funding info, finds who makes decisions. Then it scores each lead 0 to 100 based on criteria you set. Whatever makes someone a good fit for what you're selling. Runs locally using Tori and Claude.

## multi-agent-shogun

[9:49](https://www.youtube.com/watch?v=cOyi0sjTZkA&t=589)

- https://github.com/yohey-w/multi-agent-shogun

Multi-agent Shogun runs multiple Claude code instances in parallel, organized like a feudal Japanese command structure. One command spawns up to eight AI workers executing simultaneously. You don't wait around. Give an order, the system delegates it, and you move on to the next thing. The AI remembers your preferences between sessions via memory MCP and there's a live dashboard showing what everyone's working on. Prisma.ai is an open-source

## Prismer.AI

[10:16](https://www.youtube.com/watch?v=cOyi0sjTZkA&t=616)

- https://github.com/Prismer-AI/Prismer

research platform that handles the full academic workflow. Reading papers, managing knowledge, running analyses, writing latex, verifying citations. Most tools only do one piece. Overleaf is for writing. Notion is for notes. Google Scholar is for searching. Prismer stitches them together in one place. The paper reader shows citation graphs and lets you chat with PDFs.

## background-agents

[10:42](https://www.youtube.com/watch?v=cOyi0sjTZkA&t=642)

- https://github.com/ColeMurray/background-agents

Background agents runs coding tasks overnight or while you're doing something else. You tell it to fix a bug, add a feature, whatever. It clones your repo, spins up a dev environment, does the work. You review and merge when you get back. Works through web, Slack, or a Chrome extension. Multiple people can work in the same session if you want. The agent doesn't block your main workflow because it's literally running somewhere else.

## claudecode-telegram

[11:10](https://www.youtube.com/watch?v=cOyi0sjTZkA&t=670)

- https://github.com/hanxiao/claudecode-telegram

This connects to Claude code through T-Mox, so you can give it tasks from your phone. You're stuck somewhere without your laptop and need Claude to search something, check your calendar, or run a script. Text it through Telegram. It does the work, sends back results. The setup uses T-Mux sessions to bridge between Telegram's bot API and Claude Code's terminal interface. Messages route through a Python script that manages the T-m panes and handles the back and forth.

## conduit-manager

[11:40](https://www.youtube.com/watch?v=cOyi0sjTZkA&t=700)

- https://github.com/SamNet-dev/conduit-manager

Conduit Manager automates running a Siphon node on your server. Siphon helps people bypass government internet censorship in countries like Iran, Russia. If you have a server, you can run a node that routes their traffic to the open web. One command spins up the Docker containers. There's a dashboard that shows active connections, where they're coming from, how much traffic is flowing.

## vestige

[12:06](https://www.youtube.com/watch?v=cOyi0sjTZkA&t=726)

- https://github.com/samvallad33/vestige

Vestage is a memory system for Claude that uses spaced repetition instead of storing everything forever. Most AI memory tools accumulate context until they hit token limits or start hallucinating. Vestage borrows from Anki's algorithm. Memories decay over time if unused, strengthen when reinforced. The system also tracks when Claude gets something wrong and adjusts confidence scores accordingly.

## Primer

[12:32](https://www.youtube.com/watch?v=cOyi0sjTZkA&t=752)

- https://github.com/pierceboggan/primer

Primer analyzes your codebase and generates copilot instructions files that give AI coding assistants context about your project. It scans languages, frameworks, file structure, and common patterns, then writes instructions that help tools like Copilot understand what you're building. For example, if you use a specific state management pattern or have custom lint rules, Primer documents those so the AI stops suggesting code that doesn't match your setup.

## Pinneaple

[13:01](https://www.youtube.com/watch?v=cOyi0sjTZkA&t=781)

- https://github.com/barrosyan/PINNeAPPle

What if AI didn't just fit data? What if it understood physics and geometry, too? Pinapple is an open-source toolkit that combines physical data, geometry, meshes, differential equations, and machine learning in one platform. Instead of stitching together incompatible tools, you get a unified Python environment where data sets, CAD meshes, governing laws, and physics informed neural networks work together.

## dex

[13:27](https://www.youtube.com/watch?v=cOyi0sjTZkA&t=807)

- https://github.com/dcramer/dex

So, your AI agent keeps forgetting what it was between sessions. Classic amnesia problem. Someone named David Kramer, yeah, the sentry guy, got tired of this and built decks. It's basically a to-do list except your AI actually uses it. Each task has a description, full context, and a result section where the agent writes down what it did and why. No more wait, what was I building again?

## veritas-kanban

[13:53](https://www.youtube.com/watch?v=cOyi0sjTZkA&t=833)

- https://github.com/BradGroux/veritas-kanban

Veritus Canananban is a Cananban board that treats AI agents like team members. Tasks are markdown files with YAML front matter. No database to wrestle with. Everything's greable. Full Git history for free. Click start agent on a code task and it spins up an autonomous agent through the REST API. The agent reads what needs to happen, does the work, logs time, commits changes, updates the card.
