# Hacker News Show \#2: ddphotos, threadprocs, git-surgeon, GrobPaint, zsweep, ContextD, Crack, goal-md

[Watch the original video](https://www.youtube.com/watch?v=ZndbgtdcbOI)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Introduction

[0:00](https://www.youtube.com/watch?v=ZndbgtdcbOI&t=0)

Welcome back to GitHub awesome. The show hn section has been on fire lately. 35 projects pulled straight from hacker news. Let's get into it.

## ddphotos

[0:11](https://www.youtube.com/watch?v=ZndbgtdcbOI&t=11)

- https://github.com/dougdonohoe/ddphotos

DD photos is a self-hosted static photo gallery generator built with Go and spelt kit. Parallel Go routines process hundreds of images in seconds, converting everything to optimized webp and generating JSON indexes automatically. The output is a fully static spelt kit site with a photo swipe light box built in. No database, no server code, no login walls hosted on S3 or Apache for next to nothing and send the link to whoever needs it. Thread Prox is an experimental Linux project that lets multiple independent executables share a single virtual

## threadprocs

[0:39](https://www.youtube.com/watch?v=ZndbgtdcbOI&t=39)

- https://github.com/jer-irl/threadprocs

address space. The practical consequence is that you can pass raw C++ or Rust pointers between completely separate programs with zero copy overhead. No serialization, no shared memory gymnastics, no IPC overhead, just a pointer passed directly.

## git-surgeon

[1:03](https://www.youtube.com/watch?v=ZndbgtdcbOI&t=63)

- https://github.com/raine/git-surgeon

AI agents write a lot of code and commit it messily. Git Surgeon is built for exactly that problem. It's a set of git primitives designed specifically for autonomous coding agents, giving them the tools to slice, amend, and organize commits cleanly as they work. The result is a repository history that doesn't look like a bot was in charge, even when one was.

## GrobPaint

[1:26](https://www.youtube.com/watch?v=ZndbgtdcbOI&t=86)

- https://github.com/groverburger/grobpaint

Paint.NET doesn't run on Mac OS, so someone built the next best thing. Gro Paint is a lightweight image editor built with vanilla JavaScript and a Python PI web view backend. layers, 16 blend modes, magic wand selection, native project saving, completely offline, no electron, no subscription, no bloat, exactly as described, somewhere between MS Paint and Paint Net running natively on Mac OS.

## Agent Kernel

[1:51](https://www.youtube.com/watch?v=ZndbgtdcbOI&t=111)

- https://github.com/oguzbilgic/agent-kernel

Persistent agent memory usually implies a vector database and a weekend of setup. Agent kernel is three markdown files and a git repo. Clone it, point clawed code or cursor at it, and the agent figures out how to use it on its own. It maintains identity, tracks world state in a knowledge folder and writes appendon daily session logs.

## zsweep

[2:13](https://www.youtube.com/watch?v=ZndbgtdcbOI&t=133)

- https://github.com/oug-t/zsweep

Zweep is mind sweeper rebuilt for people who think the original UI was the problem. Vim keybindings, no Windows 95 Chrome. Navigate the grid entirely from the keyboard. track metrics like 3BS and play in time attack mode designed around pure speed. If monkey type scratches a particular itch for you, this is the same energy applied to mind sweeper.

## ai-engineering-from-scratch

[2:37](https://www.youtube.com/watch?v=ZndbgtdcbOI&t=157)

- https://github.com/rohitg00/ai-engineering-from-scratch

AI engineering from scratch is an open-source curriculum with 230 plus hands-on lessons across 20 phases. linear algebra and neural networks from first principles through to autonomous agent swarms implemented in Python, Rust, and Typescript. For anyone who's been building on top of AI and wants to actually understand what's underneath it, this is the curriculum worth blocking out time for.

## ContextD

[3:03](https://www.youtube.com/watch?v=ZndbgtdcbOI&t=183)

- https://github.com/thesophiaxu/contextd

Context D runs silently in the background on Mac OS, taking a screenshot every 2 seconds, running local OCR on whatever changed and saving the extracted text to SQLite. A local LLM like Claude Haiku progressively summarizes your activity as the day goes on. Everything gets exposed through a local HTTP API so other agents can query exactly what you've been working on at any point.

## ThermalMarky

[3:29](https://www.youtube.com/watch?v=ZndbgtdcbOI&t=209)

- https://github.com/sadreck/ThermalMarky

Everyone has a cheap thermal printer sitting in a drawer after two uses. Thermaly is a lightweight Python web server that takes standard markdown and translates it for thermal printers. Bold headers, alignment, QR codes on the fly, web UI included, Docker supported. Send it a markdown file, get a receipt. Genuinely good reason to dig that printer back out.

## goal-md

[3:52](https://www.youtube.com/watch?v=ZndbgtdcbOI&t=232)

- https://github.com/jmilinovich/goal-md

Gold.md is a markdown framework that lets an AI agent optimize your codebase overnight using an auto research loop inspired by Andre Karpathy's work. Write a measurement script, whether that's test coverage, API reliability, or something custom, and the agent runs a modify, verify, retain, or discard loop against your score until you wake up. 50 commits of optimized code by morning.

## Crack

[4:17](https://www.youtube.com/watch?v=ZndbgtdcbOI&t=257)

- https://github.com/ronreiter/crack

Crack taps into the undocumented lid angle sensor on modern MacBooks and maps the opening angle to a creaking door sound in real time. Open the lid slowly, get a long, horrifying squeak, slam it shut, get the full effect. completely useless, technically impressive, guaranteed to clear out a coffee shop. One of the better ways anyone has spent a weekend.

## Agent-IM

[4:40](https://www.youtube.com/watch?v=ZndbgtdcbOI&t=280)

- https://github.com/LinklyAI/agent-im

Copying context between multiple clawed code and codec sessions manually is one of those problems that shouldn't still exist. Agent IM is a minimalist chat room system for AI agents built on an MCP server. Agents create a room, invite each other, define their roles, and communicate directly to collaborate on a problem. Writing system prompts by intuition and hoping they hold up in production is how most people do it.

## AutoPrompter

[5:01](https://www.youtube.com/watch?v=ZndbgtdcbOI&t=301)

- https://github.com/gauravvij/autoprompter

Autoprompter makes it an engineering problem instead. It runs iterative tests against multiple models, measures function calling accuracy, and automatically suggests optimizations based on what actually performs better. Prompt engineering that produces evidence instead of opinions.

## mcp-scan

[5:26](https://www.youtube.com/watch?v=ZndbgtdcbOI&t=326)

- https://github.com/rodolfboctor/mcp-scan

Most developers set up MCP configs once and never look at them again. MCP scan audits yours. It checks for hard-coded API keys, flags overly broad file system permissions, and detects typos squatted malicious npm packages in your server arguments. If you're running cursor or clawed desktop with MCP tools and haven't audited your config, this should probably be the next thing you run.

## m33mu

[5:51](https://www.youtube.com/watch?v=ZndbgtdcbOI&t=351)

- https://github.com/danielinux/m33mu

M33MU is a full ARMv8M Cortex M33 emulator written in C built for firmware developers who want to debug embedded systems without touching physical hardware. Trust zone awareness built-in GDB remote server terminal UI and execution recording for reverse stepping through firmware bugs. Step backward through a crash to find exactly where things went wrong.

## Z1

[6:16](https://www.youtube.com/watch?v=ZndbgtdcbOI&t=376)

- https://github.com/thomscoder/z1

Z1 connects Claude directly to your live browser environment so your agent can interact with a running React app instead of just editing files blindly. It modifies local files on the fly and uses git branches to track changes as it works. The feedback loop between AI generated UI and the actual running application closes without you manually switching context. Aentic UI generation that actually knows what it's looking at.

## Refrax

[6:44](https://www.youtube.com/watch?v=ZndbgtdcbOI&t=404)

Someone wanted ARC's tab duplication without the memory cost. So they built a new browser. Refra uses an undocumented private Mac OS class called Kportal layer to mirror the GPU memory of a single web page across multiple windows. Hundreds of live updating tabs, RAM footprint of one. The engineering here is genuinely impressive.

## FlowState

[7:05](https://www.youtube.com/watch?v=ZndbgtdcbOI&t=425)

- https://github.com/dialectforge/FlowStateV1.1

Flow state is agent kernel's core idea packaged as an MCP server. Connect it to claude code and your agent retains memory about your project architecture, your coding preferences, and outstanding bugs across sessions. Pick up on Monday exactly where Friday left off without spending the first 20 minutes reexplaining the codebase. Persistent context that travels with the project.

## mamba-rs

[7:31](https://www.youtube.com/watch?v=ZndbgtdcbOI&t=451)

- https://github.com/silvermpx/mamba-rs

Mamba RS is a full Mamba state space model implementation written in Rust with custom CUDA kernels inference and full backward pass BPTT training. No Python anywhere in the stack for anyone who wants to experiment with Mamba architecture at the metal level without the overhead of a Python ML framework. This is the starting point.

## meow-ssh

[7:52](https://www.youtube.com/watch?v=ZndbgtdcbOI&t=472)

- https://github.com/abhishekgahlot2/meow-ssh

Most SSH config files are a graveyard of IP addresses nobody remembers and keys nobody can locate. Meow SSH is a lightweight terminal UI for managing SSH connections, switching keys, and jumping into remote environments without digging through config files. Fast, organized, and wrapped in a cat themed aesthetic that makes it considerably more enjoyable than it has any right to be.

## jensenify-mcp

[8:17](https://www.youtube.com/watch?v=ZndbgtdcbOI&t=497)

- https://github.com/kenm47/jensenify-mcp

Jensenify MCP injects the complete texts of Homer, Shakespeare, Toltoy, and the King James Bible into every single AI tool call. 2.9 million tokens of classic literature loaded into context, so your coding agent has deep humanistic grounding when it fixes a null pointer exception. The creator acknowledges it costs a fortune in API tokens. That's the joke and also entirely the point.

## mnesis

[8:43](https://www.youtube.com/watch?v=ZndbgtdcbOI&t=523)

- https://github.com/Lucenor/mnesis

Minesis is a lightweight Python library for state and memory management in back-end applications. Clean API for persisting and recalling data structures without rolling your own solution or pulling in something heavier than the problem warrants. Straightforward utility that fills a gap. Python's standard library leaves open.

## mnemo

[9:04](https://www.youtube.com/watch?v=ZndbgtdcbOI&t=544)

- https://github.com/joshndala/mnemo-agent

Switching between agent frameworks usually means losing everything the agent learned in the previous one. Nemo is a local first CLI that serializes agent memory into a normalized JSON schema. diff snapshots to show exactly what changed between sessions and migrates memories between backends like mem and leta stack PRs are one of those workflows that feels impossibly messy to manage

## ez-stack

[9:26](https://www.youtube.com/watch?v=ZndbgtdcbOI&t=566)

- https://github.com/rohoswagger/ez-stack

manually after the first rebase goes wrong. Estack handles the orchestration using standard git and GH commands you already know with metadata stored in a simple JSON file. No custom git internals, no new mental model to learn. clean stack PR workflow without replacing the tools you already use.

## Samuel

[9:50](https://www.youtube.com/watch?v=ZndbgtdcbOI&t=590)

- https://github.com/sambuild04/reading-ai-agent

Samuel is a fully autonomous reading agent built on the OpenClaw framework with real-time voice mode. It reads your local Apple books, summarizes chapters, recites context, and turns pages autonomously using screen vision. The language learning use case is the interesting one. Run it while watching a foreign film, and it provides real time context from what it sees and hears.

## Revise

[10:15](https://www.youtube.com/watch?v=ZndbgtdcbOI&t=615)

Revise.io is a collaborative document editor with built-in revision history and git style visual diffs for writing. The useful part is the integrated AI proofreader that works against rules you define yourself. Tell it to enforce APA7 formatting or avoid exclamation points and it holds to that standard consistently across every draft. Google Docs with version control and a style guide that actually sticks.

## smriti

[10:42](https://www.youtube.com/watch?v=ZndbgtdcbOI&t=642)

- https://github.com/himanshudongre/smriti

Smiti treats agent memory the way Git treats code. Instead of relying on chat history that breaks down when you change direction, it enforces clean checkpoints at the data layer. Fork execution paths, switch models, compare decisions across branches, all without reexplaining the project context from scratch. The name means memory in Sanskrit. The implementation earns it. Wireframe.js JS

## Wireframed.js

[11:06](https://www.youtube.com/watch?v=ZndbgtdcbOI&t=666)

- https://github.com/Lywald/Wireframed.js

converts your live, fully styled HTML into a handdrawn wireframe aesthetic with a single script drop. No rebuilding the prototype in Figma. No stripping out styles manually. The functional HTML stays functional. It just looks like a sketch. Clients focus on the layout and flow instead of arguing about button colors. The fastest path from working prototype to client ready mockup.

## Brand Toolkit

[11:32](https://www.youtube.com/watch?v=ZndbgtdcbOI&t=692)

- https://github.com/jgerton/brand-toolkit

Brand toolkit is a claude code plugin that packages real expert frameworks directly into runnable skills. Donald Miller's story brand, April Dunford's positioning methodology, and a built-in anti-slop checker that flags banned corporate buzzwords like synergy and empower before they make it into your copy.

## DockAutoHide

[11:52](https://www.youtube.com/watch?v=ZndbgtdcbOI&t=712)

- https://github.com/nshcr/DockAutoHide

Doc autohide watches your screen and toggles doc autohide only when a window actually overlaps it. Doc stays visible when you need it, disappears when something bumps into it, reappears when the coast is clear. No manual toggling, no permanently hiding it, no wasted screen real estate. The kind of feature that feels obvious in hindsight and should have shipped with Mac OS years ago.

## Codex Bridge

[12:17](https://www.youtube.com/watch?v=ZndbgtdcbOI&t=737)

- https://github.com/abhishekgahlot2/codex-claude-bridge

Claude code and codecs are both strong tools that have no way to talk to each other. This project fixes that. It's a birectional bridge using clawed code channels and MCP tool calls to route messages between the two agents in real time with a web UI to watch the conversation unfold. Anthropic and OpenAI models debating and coding together in your terminal.

## wet

[12:41](https://www.youtube.com/watch?v=ZndbgtdcbOI&t=761)

- https://github.com/buildoak/wet

Long clawed code sessions hit a wall when the context window fills up. Wet fixes that without you having to intervene. It's a go proxy that sits between Claude code and the anthropic API, exposing hidden endpoints that let Claude profile and optimize its own context window. When token count gets too heavy, the agent pauses, compresses older messages, prunes irrelevant tool outputs, and restructures its working memory before the next request goes out.

## CellState

[13:10](https://www.youtube.com/watch?v=ZndbgtdcbOI&t=790)

- https://github.com/nathan-cannon/cellstate

Anthropic rewrote Claude codes terminal renderer because ink was causing screen flicker. Nathan Canon read that post and turned the approach into a standalone library. Cellst state runs purely inline instead. It uses a custom React reconciler and double buffered rendering to diff at the cell level, calculating exactly which characters changed and only emitting escape sequences for those specific cells.

## skill

[13:37](https://www.youtube.com/watch?v=ZndbgtdcbOI&t=817)

- https://github.com/emilkowalski/skill

Emil Kowalsski is one of the more respected voices in design engineering. Known specifically for his work on animations and UI craft. He compiled his entire body of writing on animations, design, and front-end performance into a single installable AI skill. Run npx skills, add ML Kowalsski/skill, and your claude or cursor agent picks up that sensibility immediately.

## claudebox

[14:01](https://www.youtube.com/watch?v=ZndbgtdcbOI&t=841)

- https://github.com/ArmanJR/claudebox

API token costs add up fast when you're building and testing AI tools all day. Cloudbox runs Cloud Code inside a sandbox Docker container, but authenticates using your existing $20 Cloud subscription instead of a developer API key. It then exposes a fully OpenAI compatible API on local host. So any tool, framework, or agent that can hit an OpenAI endpoint can use your flat rate subscription as the backend. \[music\]
