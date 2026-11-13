# GitHub Trending Weekly \#56: Kero, ub-mode, dossier, OXR, Strata, motty, floorplan, OpenDuet, bygga

[Watch the original video](https://www.youtube.com/watch?v=S8g5nwZN9as)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Introduction

[0:00](https://www.youtube.com/watch?v=S8g5nwZN9as&t=0)

Welcome back to GitHub awesome. This is GitHub trending weekly number 56. 35 trending open- source projects on GitHub right now. Let's go.

## Kero

[0:11](https://www.youtube.com/watch?v=S8g5nwZN9as&t=11)

- https://github.com/egoist/kero

Caro gives your coding agents a terminal that remembers where you left them. Claude Code, Codeex, your dev server. Each gets its own session grouped by project. The sidebar shows which ones need your attention, and closing the window doesn't kill their work. You can even bring sessions from a remote machine into the same view. That's handy when your laptop isn't the one doing the heavy lifting. UB mode is Uncle Bob's agent skill for writing

## ub-mode

[0:36](https://www.youtube.com/watch?v=S8g5nwZN9as&t=36)

- https://github.com/unclebob/ub-mode

clean code built from a trimmed set of potatoes rules and paired with real measuring tools. It pushes your coding agent toward test-driven development and tests that check behavior, not implementation details. Each change has to pass hard limits. a complexity score under 10 and a duplication score under 0.8. Mutation testing then breaks the code on purpose to make sure the tests notice.

## dossier

[1:05](https://www.youtube.com/watch?v=S8g5nwZN9as&t=65)

- https://github.com/AienTech/dossier

Dossier is a self-hosted job search app that writes tailored resumes and cover letters from a single career profile. Paste in a job posting or search job boards and the AI pulls out the requirements and shows how well you match. Then it drafts your documents using only facts from your profile which you can refine in a chat and export as PDFs. It runs on a local model or a hosted API and your data lives in your own database.

## OXR

[1:33](https://www.youtube.com/watch?v=S8g5nwZN9as&t=93)

- https://github.com/SoMarkAI/OXR

OXR is a document parsing model from Somark that turns PDFs and scan pages into markdown or JSON, keeping the layout coordinates for every block. It has 1.3 billion parameters and was trained from scratch. A separate layout model finds the blocks. Then OXR reads their content and puts them in order. It recognizes 13 kinds of elements from tables and formulas to chemical structures and code.

## Strata

[2:00](https://www.youtube.com/watch?v=S8g5nwZN9as&t=120)

- https://github.com/Niko1221/Strata

Strata runs AI models on your own computer without making you piece together and set up yourself. Pick a model in the desktop app or launch one from the terminal and Strata helps get it running on your hardware. It works with supported Nvidia and AMD cards, Apple Silicon, and Intel Arc on Linux. You can also connect its local models to Claude Code, Codeex CLI, and other coding tools.

## print-my-profile-pic

[2:26](https://www.youtube.com/watch?v=S8g5nwZN9as&t=146)

- https://github.com/aschmelyun/print-my-profile-pic

Print my profile pick is a playful hardware project from Andrew Schmemellion. Star the repo and your GitHub profile picture gets printed on a receipt printer. A star sends a web hook through a Cloudflare tunnel to a small PHP script on a Raspberry Pi. The script grabs your avatar and name, places them inside a little frame, and prints the receipt on a printer. Each one gets pinned to a wall he calls the hall of frame.

## motty

[2:53](https://www.youtube.com/watch?v=S8g5nwZN9as&t=173)

- https://github.com/t8y2/motty

Motti puts your remote server tools in one native desktop app, so you don't have to jump between separate clients just to get work done. It combines SSH terminals, SFTP file transfers, port forwarding, and VNC or RDP sessions in the same window. There's also an AI assistant and MCP support. It's built in Go with the Viva UI framework without bundling a web view. Flare is Nvidia's

## local-inference

[3:16](https://www.youtube.com/watch?v=S8g5nwZN9as&t=196)

- https://github.com/NVIDIA/local-inference

local inference server for its newest GPUs like the DGX Spark built for long conversations and coding agents that call tools over and over. All the compiling and CUDA graph setup happens ahead of time in PyTorch and gets packaged up. Then a Rust runtime with no Python serves that package. So nothing has to compile once you start.

## floorplan

[3:39](https://www.youtube.com/watch?v=S8g5nwZN9as&t=219)

- https://github.com/haydenschmitty/floorplan

Floor plan turns your codebase into an interactive map when you need to figure out how an app actually fits together. Ask Claude Code or Codeex to draw one and you can zoom from the big picture down to individual files and endpoints. It follows connections between front-end requests and backend routes, even across repos. You can also ask the map a question and get a smaller diagram of the pieces involved.

## OpenDuet

[4:04](https://www.youtube.com/watch?v=S8g5nwZN9as&t=244)

- https://github.com/CopilotKit/OpenDuet

Open Duet is Copilot Kit's open-source proactive agent that gets work done before you ask. Built on their OpenBot platform, it starts your day with a short brief of what changed and what needs a decision from you. It sorts your mail and calendar into what needs you now and what can wait. hand it a task and it keeps working on a computer of its own with a real browser and its own files.

## calender-app-design

[4:30](https://www.youtube.com/watch?v=S8g5nwZN9as&t=270)

- https://github.com/kargulstudio/calender-app-design

Cargle's calendar prototype gives you a working interface to study instead of another static dashboard mockup. You can drag events around the calendar, resize them, and switch between day, week, and month views. The time off page counts working days and previews the remaining balance. It's built with Nex.js JS and runs entirely in the browser, so the data stays in local storage and there's no backend.

## Zero-Breach-Toolkit

[4:56](https://www.youtube.com/watch?v=S8g5nwZN9as&t=296)

- https://github.com/interplains/Zero-Breach-Toolkit

Zeroach toolkit is a free Python tool that checks your computer, your Android phone, or an iPhone backup for traces of known mercenary spyware like Pegasus, Predator, and Graphite. It only reads, never changes anything, and makes no requests while it scans. It compares what it finds against published indicators from security researchers.

## bygga

[5:19](https://www.youtube.com/watch?v=S8g5nwZN9as&t=319)

- https://github.com/Nutlope/bygga

Bigga turns a flatpack furniture product name or article number into an animated 3D assembly guide drawn in the familiar black and white line art style. It's built with Nex.js and 3JS and a generator works out the steps for more than 1100 products on its own with no AI call needed. You can step through a guide by voice, print it, or ask a help chat to redraw a confusing step.

## kensaku

[5:45](https://www.youtube.com/watch?v=S8g5nwZN9as&t=345)

- https://github.com/yjid/kensaku

Kinsaku is a local desktop search app for your files, documents, code, and images. It reads each file once and builds both a keyword index and a semantic one, so you can search by exact words or by meaning. It pulls text out of PDFs, office files, and code, and even reads text in screenshots with OCR. Results are ranked by relevance, similarity, how recent they are, and where they live.

## bama

[6:10](https://www.youtube.com/watch?v=S8g5nwZN9as&t=370)

- https://github.com/daveebbelaar/bama

Bama, short for build any Mac app, is a set of agent skills for cloud code and codecs that takes a native Mac OS app from idea to working build in Swift and Swift UI. The agent turns your idea into user stories with acceptance criteria and groups them into milestones. Then it builds one story per commit, snapshots every screen in light and dark mode, and runs the tests.

## hokum

[6:34](https://www.youtube.com/watch?v=S8g5nwZN9as&t=394)

- https://github.com/anomalyco/hokum

Hokum gives your Whan desktop a control center for notifications, sound, and Bluetooth. Notification cards slide in and rearrange themselves, while a tray panel puts volume, connected devices, and do not disturb close at hand. You can pair Bluetooth devices from the app and control notifications with keyboard shortcuts. It's written in Rust and works with compositors like Hyperland, Sway, and Neri.

## devbox

[7:00](https://www.youtube.com/watch?v=S8g5nwZN9as&t=420)

- https://github.com/rudderlabs/devbox

Devbox is Rudderstack's open- source coding agent that you run in your own cloud. Give it a task from the command line or from Linear and it plans the change, writes the code, runs the tests, and reviews its own diff. Then it opens a draft pull request for a person to merge. No code gets written until the plan passes review and CI failures and review comments go straight back to the running task.

## duckpad

[7:26](https://www.youtube.com/watch?v=S8g5nwZN9as&t=446)

- https://github.com/hugues31/duckpad

Duckpad is an open- source SQL workspace for building visual data pipelines powered by DuckDB and installed as a Python package. You connect sources, joins, and reusable parts into a pipeline or write SQL directly in the editor. Click any cell in a result and it traces back to the exact source values that produced it. Projects save to git so you can branch, compare changes, and review merges just like code.

## Pika-H3-Flex

[7:52](https://www.youtube.com/watch?v=S8g5nwZN9as&t=472)

- https://github.com/Pika-Labs/Pika-H3-Flex

Pika H3 Flex is an openweight video model from PA Labs that generates video with matching stereo audio built as adapters on top of Miniaax's H3. You can start from a text prompt, a first frame, a last frame, both, or up to 12 reference images and clips. It renders 5 to 15sec videos at up to 768p across 11 aspect ratios in only six sampling steps.

## analytics-playbook

[8:17](https://www.youtube.com/watch?v=S8g5nwZN9as&t=497)

- https://github.com/atlanai/analytics-playbook

The analytics playbook is Atlan's open guide to building AI analytics agents that give the right business numbers. It walks through five phases with a check at the end of each one. You start by locking in a golden set of real questions from your analysts before building anything. Then you pull metric definitions out of your past SQL and dashboards and improve the agent by studying where it fails.

## kinetograph

[8:44](https://www.youtube.com/watch?v=S8g5nwZN9as&t=524)

- https://github.com/0xS4N4TG/kinetograph

Kinettoraphph is a programmatic video engine built for AI agents. You write videos in Typescript with Remotions API using CSS, SVG, canvas, and even webgl shaders. Instead of driving a hidden Chrome browser, it uses a Rust compositor on the GPU with Skia and FFmpeg, so there's no browser anywhere in the pipeline. Existing Remotion projects render asis, and it ships an MCP server, so an agent can drive it.

## esp32-usb-to-airprint

[9:10](https://www.youtube.com/watch?v=S8g5nwZN9as&t=550)

- https://github.com/ngxson/esp32-usb-to-airprint

ESP32 USB to AirPrint is firmware that turns an old USBon printer into a wireless one using a cheap ESP32S3 board. Plug the board into the printer's USB port. Connect it to your Wi-Fi and it speaks the printer's USB protocol for you. Then your iPhone and Mac can print over AirPrint, Android phones over Mopria, and Linux 2 with no drivers or apps.

## survival-llm

[9:34](https://www.youtube.com/watch?v=S8g5nwZN9as&t=574)

- https://github.com/anonnerdfrenzy/survival-llm

Survival LLM is a free AI assistant for emergency and survival questions that runs entirely on your own computer with no internet needed. It uses local models through Olama and answers from an offline library of medical, emergency, and how-to articles drawn from sources like Wikipedia, Medline Plus, the CDC, and FEMA. Every answer shows the articles it used, and the app checks that those really are the articles it opened.

## ai-phone

[10:02](https://www.youtube.com/watch?v=S8g5nwZN9as&t=602)

- https://github.com/oxnw/ai-phone

AIP phone turns an Apple Silicon Mac into a voice agent that can make and answer phone calls. Give it a task like asking a restaurant about a reservation and it returns a transcript when the call ends. Speech recognition and voice generation run locally and you can choose a local model for the conversation, too. Outgoing calls start with an AI disclosure and it currently handles one English call at a time.

## LightPost

[10:29](https://www.youtube.com/watch?v=S8g5nwZN9as&t=629)

- https://github.com/brainstormity/LightPost

Lightost is a self-hosted social media scheduler that lets you prepare one post and send it to multiple accounts from a single dashboard. It supports platforms including Blue Sky, Mastadon, Instagram, and Telegram with posts you can publish immediately or schedule for later. It runs on Python and SQLite. And the creator says it's light enough to run on a Raspberry Pi 0.

## glyph-rice

[10:52](https://www.youtube.com/watch?v=S8g5nwZN9as&t=652)

- https://github.com/Nebelung-cloud/glyph-rice

Glyph brings the look of nothing OS to a hyperland desktop with black backgrounds, dotted white text, and a splash of red. It's built with quick shell and includes a launcher, quick settings, screenshots, and a lock screen. The screen edges even light up for things like volume changes and notifications. If you like tweaking your Linux desktop, there's plenty here to take apart.

## MiniCPM-OCR

[11:17](https://www.youtube.com/watch?v=S8g5nwZN9as&t=677)

- https://github.com/OpenBMB/MiniCPM-OCR

Mini CPM OCR turns PDFs and document images into usable text, tables, and formulas, even when the pages are photographed or curved. The interesting part is its companion model, Jev, which scores individual regions of the result to help you find what needs a closer look. You can run the models locally and export parsed documents as markdown or JSON.

## lever

[11:40](https://www.youtube.com/watch?v=S8g5nwZN9as&t=700)

- https://github.com/github/lever

Lever is GitHub's plugin of copilot skills for building feedback loops for coding agents. You define a metric, a way to measure it, and a bar for what counts as better. And the agent keeps iterating until it clears that bar. One command picks a playbook for briefing a task, delivering it, refactoring, or shephering a pull request through to merge. Autonomy levels from 0 to 5 decide how much the agent can do on its own.

## dontallow

[12:08](https://www.youtube.com/watch?v=S8g5nwZN9as&t=728)

- https://github.com/johncassil/dontallow

Dontello is a tiny Mac OS tool that automatically clicks don't allow on those find devices on your local network popups written in Swift with no dependencies. It runs quietly in the background and uses no CPU until a prompt shows up. When one does it checks the dialogue really is a local network request and that the app isn't on your allow list, then denies it.

## video-to-game

[12:31](https://www.youtube.com/watch?v=S8g5nwZN9as&t=751)

- https://github.com/lovisdotio/video-to-game

Video to game is a skill for coding agents like Claude Code and Codeex that turns a gameplay video into a playable browser game built with 3JS. The agent studies the clip frame by frame pulling out the look, the pallet, and the cuts. It writes a game spec, generates every asset through foul from images to 3D models and sound, and builds the whole game into one HTML file.

## grim-prompter

[12:55](https://www.youtube.com/watch?v=S8g5nwZN9as&t=775)

- https://github.com/jmanico/grim-prompter

Grimrompter is a set of threat modeling prompts for coding agents like Claude Code and Codeex from security expert Jim Manico. Link its skill into your agent and ask for a threat model quick or deep. The agent reads your code without changing anything and works through established frameworks like Stride and MITER attack. Every finding points to the exact file and line, and each proposed fix comes with a plan for checking it actually works.

## skill-diet

[13:24](https://www.youtube.com/watch?v=S8g5nwZN9as&t=804)

- https://github.com/nicobailon/skill-diet

Skill diet is an agent skill that keeps your other agent skills lean, building on Matt PCO's writing for agents rules. It measures a skill, cuts what the model already knows, and rewrites the rest. Then it runs a before and after test, and only keeps the slimmer version if agents do at least as well. For skills that wrap a command line tool or an API, it also checks the instructions against the real tool and reads session logs to find the calls you use most.

## agentloop

[13:54](https://www.youtube.com/watch?v=S8g5nwZN9as&t=834)

- https://github.com/smhanov/agentloop

Agent Loop is a Go library for building AI agents without writing the tool calling loop from scratch. It sends requests to a model, runs the tools it asks for, and feeds the results back until there's an answer. You can set budgets, add approval hooks, and inspect a trace of each run. It also includes search and coding agents as examples so you can see how the pieces fit together.

## Filmimic

[14:19](https://www.youtube.com/watch?v=S8g5nwZN9as&t=859)

- https://github.com/DreamyLab30/Filmimic

Filmic is a plugin that adds real-time film emulation to Unreal Engine 5. Drop one actor into your level. Pick a look and it runs a whole chain of effects. Film color, animated grain, hellation around bright lights, bloom, and lens artifacts. A single slider blends between Unreal's own output and the film look. Every one of its nearly 200 settings can be animated in sequencer or driven from blueprints.

## english-rs

[14:46](https://www.youtube.com/watch?v=S8g5nwZN9as&t=886)

- https://github.com/Aaryan-Kapoor/english-rs

English RS is a Rust project that checks English grammar the way the compiler checks code. Write a sentence inside its macro and Rust's type system catches mistakes like a singular subject with a plural verb or the wrong article. It even treats pronouns as borrows of the nouns they refer to. So, a dangling pronoun gets rejected by the borrow checker.
