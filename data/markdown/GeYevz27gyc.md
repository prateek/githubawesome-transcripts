# GitHub Trending Weekly \#50: openmuse, open-glean, unreal-agent, BongoCat, laya-mlx, mini-AGI, flute

[Watch the original video](https://www.youtube.com/watch?v=GeYevz27gyc)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Introduction

[0:00](https://www.youtube.com/watch?v=GeYevz27gyc&t=0)

Welcome back to GitHub awesome. This is GitHub trending weekly number 50. 35 trending open- source projects on GitHub right now. Let's go.

## openmuse

[0:10](https://www.youtube.com/watch?v=GeYevz27gyc&t=10)

- https://github.com/CopilotKit/openmuse

Open Muse is a personal AI agent from Copilot Kit that does its work where you can see it. It gets a persistent browser, an optional Linux terminal in an isolated container, and read access to your Gmail and Google Calendar. And you follow the plan as it runs. If it's heading the wrong way, you take over the browser or terminal mid task. It runs on iOS, Android, and the web from one expo app.

## Search

[0:36](https://www.youtube.com/watch?v=GeYevz27gyc&t=36)

- https://github.com/driceroland/Search

Search is a Mac browser built to stay out of your way. It uses the web kit already on your machine, keeping the app around 3 megabytes. You get tabs, one field addresses, an ad blocker, and a way to hide clutter that keeps coming back. Passwords live in the Mac OS keychain. There's no account or sync, so your browsing history stays on that Mac.

## open-glean

[0:59](https://www.youtube.com/watch?v=GeYevz27gyc&t=59)

- https://github.com/hydra-db/open-glean

Open Glean searches your files, notes, and connected apps through HydroDB, then uses your chosen model to write answers with source citations. Its deep research mode splits a question into smaller searches, runs independent branches in parallel, and combines their findings. You can host the interface yourself and choose an OpenAI compatible model endpoint.

## unreal-agent

[1:23](https://www.youtube.com/watch?v=GeYevz27gyc&t=83)

- https://github.com/unreallabsai/unreal-agent

If an agent receives the same event twice, you don't want it doing the job twice. Unreal agent is an async firstgo harness built around that problem. It dduplicates inputs, persists sessions and operation state, and supports recovery and forks. Tool calls become serializable operations that execute outside the coordinator's event loop. That separation matters when a run fails halfway through. There's a record to resume from.

## ZCode

[1:50](https://www.youtube.com/watch?v=GeYevz27gyc&t=110)

- https://github.com/zai-org/ZCode

Zcode puts the same coding agent runtime behind a desktop app, browser workspace, and terminal interface. You get a desktop app, a web workbench, and a terminal agent built from the same codebase. So, the interface you're in doesn't change what the agent knows. It works over SSH and WSL for remote projects. And the CLI piece runs standalone if you don't want Electron near your terminal.

## BongoCat

[2:15](https://www.youtube.com/watch?v=GeYevz27gyc&t=135)

- https://github.com/vladelaina/BongoCat

Bongo Cat puts an animated cat on your desktop that reacts to your keyboard and mouse. Completely unnecessary, pretty charming. This native version uses C, SDL3, and OpenGL with support for custom models. It runs on Windows, Mac OS, and Linux, and the maintainers say your input stays local rather than being recorded or uploaded. Your desktop gets a tiny co-orker who takes typing far more seriously than you do.

## laya-mlx

[2:42](https://www.youtube.com/watch?v=GeYevz27gyc&t=162)

- https://github.com/mizorewww/laya-mlx

LIA MLX handles small decisions that don't need a chatbot response. Give it a support message and candidate departments and it returns probabilities for each choice without generating text. This MLX port runs locally on Apple silicon without PyTorch or a cloud API. On an M3 Max, the maintainers report a 13.4 mm's median for a short English decision.

## mini-AGI

[3:06](https://www.youtube.com/watch?v=GeYevz27gyc&t=186)

- https://github.com/volotat/mini-AGI

Mini AGI is a bite level language model you train from scratch on an 8 gigabyte GPU. It reads raw bytes with no tokenizer and pages its experts in from disk 32 at a time. It keeps learning as you feed it new data and the author reports 99.84% retention of what it learned earlier. The author calls it a toy model despite the name. Continual learning on a laptop GPU is the interesting part.

## laya-coreml

[3:33](https://www.youtube.com/watch?v=GeYevz27gyc&t=213)

- https://github.com/mizorewww/laya-coreml

LiaML brings LIA's typed decisions to Apple's neural engine. Give it a short question and it returns probabilities for choices or scores without generating a paragraph. On an M3 Max, the maintainer reports a 4.98 millisecond median for one multilingual decision and a 2.78fold improvement in system energy per decision over compiled MLX.

## nimble

[3:57](https://www.youtube.com/watch?v=GeYevz27gyc&t=237)

- https://github.com/bespokelabsai/nimble

Bespoke Nimble is a Quen 3.5-9B fine-tune that answers typed questions about text with no reasoning text. You hand it a schema of multiple choice or yes or no fields and it scores only the candidate answers returning JSON with a probability for each option. On their 324 example test set, the team reports 90.12% agreement, up from 66.36 for the base model.

## vmodal\_sdk\_swift\_iphoneduo

[4:23](https://www.youtube.com/watch?v=GeYevz27gyc&t=263)

- https://github.com/v-modal/vmodal_sdk_swift_iphoneduo

VMO's Swift SDK lets iOS and Mac OS apps search for moments inside video. Upload a clip, then look for a scene, spoken words, or text that appeared on screen. It handles streamed uploads, progress, cancellation, and typed search results with timestamps so your app can jump to the matching moment. VMO's backend does the indexing and search, and you'll need an API key. Magpie is a menu bar app that picks the model for all your coding

## magpie

[4:47](https://www.youtube.com/watch?v=GeYevz27gyc&t=287)

- https://github.com/yetone/magpie

agents from one place. It covers nine of them, including claude code, codecs, Gemini CLI, and cursor, and rewrites each config file in place without wrecking your comments or indentation. A local gateway speaks open AIS and Anthropics APIs and forwards to whichever vendor you chose. Profiles snapshot every agent's settings, so you can switch the whole setup at once.

## NullMotion

[5:16](https://www.youtube.com/watch?v=GeYevz27gyc&t=316)

- https://github.com/blixvip/NullMotion

Null Motion plays a finished ad film at full width and runs black and white motion drafts underneath it, frame synced, so you can see how each section was built. FFmpeg scene detection splits splits the reference to three to eight sections and each draft is HTML and GSAP on a pause timeline driven by the film's clock. Export renders the whole thing to MP4 in the browser with web codecs. It's a tear down view for motion design and it runs entirely local.

## shapeshift

[5:45](https://www.youtube.com/watch?v=GeYevz27gyc&t=345)

- https://github.com/anishfn/shapeshift

Shapeshift starts with one text box, then turns what you type into the right little tool. Dinner with Priya Friday becomes an event card. A shopping list becomes a checklist. Split 2400 between three calculates each share. Jev can identify the intent while ordinary code handles the dates and math. It also works offline with a built-in classifier and saved cards stay in your browser.

## riso-windowseat

[6:11](https://www.youtube.com/watch?v=GeYevz27gyc&t=371)

- https://github.com/sevenevesai/riso-windowseat

Rizo Windows is a collection of procedural films, each living in a single HTML file. One follows a night train, another turns a flock of starings into moving Rizograph ink. Canvas draws the frames. Web audio handles the sound and the repo includes clawed code skills and rendering tools for making your own. Every frame depends on time alone, so you can jump to any moment and inspect it exactly.

## flute

[6:37](https://www.youtube.com/watch?v=GeYevz27gyc&t=397)

- https://github.com/webprodigies-org/flute

Flute turns the React components you already have into cinematic 3D product shots. It installs into a Nex.js or Vitey app and your coding agent writes JSON scenes that point at your real UI with camera moves and depth of field layered on top. A built-in studio previews each scene and exports MP4 at up to 120 frames per second. Launch videos built from your actual interface instead of screenshots are the part that stands out.

## arc-cua

[7:06](https://www.youtube.com/watch?v=GeYevz27gyc&t=426)

- https://github.com/shhivv/arc-cua

ARC CUA lets a computer use agent hand off the clickby-click part of a task. A planner sets the goal, allowed text, constraints, and success check. JV chooses actions from controls the Mac desktop exposes. It uses accessibility data and local OCR, then waits for the UI to settle before the next move. If it gets stuck or hits its action budget, it hands control back to the planner.

## foremerge

[7:31](https://www.youtube.com/watch?v=GeYevz27gyc&t=451)

- https://github.com/naw103/foremerge

Former merge catches the merge conflict before anyone writes the code. When parallel coding agents publish what they plan to touch, it compares those intents. So if one agent plans to replace payment service while another plans to extend it, you hear about it now instead of at merge time. A verification gate runs your tests on a clean commit before anything lands.

## fast-browser-use

[7:55](https://www.youtube.com/watch?v=GeYevz27gyc&t=475)

- https://github.com/APUS-AI-Lab/fast-browser-use

Browser agents sometimes try to click buttons that aren't there. Fast browser use scans the controls actually visible on a page, then asks a local model to choose from those options. It can navigate sites and fill forms as a skill for codeex or clawed code and leaves a trace you can check afterward. It runs on your machine, though the model needs substantial memory.

## FluidUse

[8:19](https://www.youtube.com/watch?v=GeYevz27gyc&t=499)

- https://github.com/FluidInference/FluidUse

Fluid use a surprisingly small AI model for a familiar chore, filling out forms. On a Mac, it reads fields in a real app or browser, matches them to details you provide, and types the answers in. The decisions run on your device, and the repo reports about one millisecond per field. You handle anything that needs judgment, like essays, uploads, and clicking submit. Mr. Mac Workspace is a Windows desktop app that puts CodeCli or Claude code in one window and your

## mr-mak-workspace

[8:43](https://www.youtube.com/watch?v=GeYevz27gyc&t=523)

- https://github.com/witnesstodark/mr-mak-workspace

project files in the other. The right side has folders for your inbox, projects, knowledge, and processes with a markdown editor and preview built in. You can pin chats, color code tabs, and see which agent is still working. It ships with 14 project skills, including Blender Workflows.

## ai-manager

[9:08](https://www.youtube.com/watch?v=GeYevz27gyc&t=548)

- https://github.com/OnlistTeam/ai-manager

AI manager is a desktop app that keeps your AI coding CLI in one place, forked from CC Switch. It detects 10 tools including Claude Code, Codeex, Gemini CLI, and Open Code, and installs, updates, or repairs them across npm, PNPM, Bun, or Volta. From the same window, you point each tool at an API endpoint and test it, add MCP servers, install skills, and search old sessions to pick them back up. Astra Flash Orchestrator splits a coding task between two models. Astra plans the work

## astra-flash-orchestrator

[9:33](https://www.youtube.com/watch?v=GeYevz27gyc&t=573)

- https://github.com/ethanplusai/astra-flash-orchestrator

and reviews the finished patch. A DeepSeek Flash sub agent handles implementation, tests, and routine fixes. The idea is to spend Astra's attention on decisions while Flash does the longer build loop. It includes phase task briefs, verification steps, and reversible setup.

## JevRouter

[9:56](https://www.youtube.com/watch?v=GeYevz27gyc&t=596)

- https://github.com/BillionsBobby/JevRouter

Jevouter decides which tool your agent should reach for and stops there. It gathers models, sub aents, skills, MCP tools, and CLIs into one candidate list. Asks Typesafe's Jev a type choice question, then filters the answer through permission, availability, and risk checks. It never runs anything itself, and every decision goes into an appendon log.

## skills

[10:19](https://www.youtube.com/watch?v=GeYevz27gyc&t=619)

- https://github.com/isas1/skills

ISIS 1 skills pack is three clawed skills for explaining work, and they pick between themselves based on what you want to end up holding. Eli 5 succinct gives a short plain language answer in chat and never writes a file. The summary skill writes one self-contained HTML page with modes you can stack accessible for ADHD or dyslexia, artistic and animated. It reads the actual files before it summarizes instead of working from memory.

## ThinkingOrbs

[10:48](https://www.youtube.com/watch?v=GeYevz27gyc&t=648)

- https://github.com/haplollc/ThinkingOrbs

Thinking orbs is a swift UI port of Jako Benalik's thinking orbs animated loading indicators for AI interfaces. You drop in one line like thinking orb searching and get a dotted 3D sphere for that agent state with nine to choose from. They pause offcreen and respect reduce motion. The port was checked against the original TypeScript engine across 725,49 frames.

## jev-voice-browser

[11:13](https://www.youtube.com/watch?v=GeYevz27gyc&t=673)

- https://github.com/moritzkremb/jev-voice-browser

Jev voice browser lets you drive a Chromium window by talking to it and it often acts before you finish the sentence. Partial transcripts go to type safeaf's jev with about a dozen typed questions and it picks the intent and the target instead of generating text. So URLs and search terms come through verbatim. Say no the other one and it corrects itself. The author reports about 300 milliseconds from your last word to a decision.

## reflex

[11:42](https://www.youtube.com/watch?v=GeYevz27gyc&t=702)

- https://github.com/kshetrajna12/reflex

Reflex is a local decision model for jobs where you need a choice not a paragraph. Give it a support ticket, document, or photo and several fixed answer questions. It returns probabilities in one model pass. It asks each question with the options in two different orders to reduce position bias. There's a Jev compatible API, but you should calibrate the confidence numbers on your own data before using them as thresholds.

## laya

[12:10](https://www.youtube.com/watch?v=GeYevz27gyc&t=730)

- https://github.com/receptron/laya

This lia package runs conveys decision model from Node.js and TypeScript with no Python and no PyTorch. It uses ONX runtime and the author says outputs match the Python reference to four decimal places. You pass a state like a ticket or an email plus typed questions and get back per option probabilities, a rubric score or a calibrated yes or no.

## docjev

[12:33](https://www.youtube.com/watch?v=GeYevz27gyc&t=753)

- https://github.com/jerryjliu/docjev

A single PDF can contain several documents and sorting them by hand gets old fast. DocJev takes PDFs, word files, or slide decks, classifies them using rules you write, and splits combined packets into page ranges. It flags uncertain boundaries for review and can export the pieces as PDFs. Text extraction runs locally by default, but the extracted text goes to the hosted Jev service for decisions.

## Jevmind

[12:59](https://www.youtube.com/watch?v=GeYevz27gyc&t=779)

- https://github.com/dealerdefi/Jevmind

Jevmin pulls an agent's decisions out of its text and treats them as data. Every call becomes a yes or no with confidence, a pick from a list, or a score on a scale. And code-based rules decide whether the agent gets to act on it. Each decision lands in a hashchained ledger before the outcome is known, gets graded afterward, and feeds back into calibration. Logging the guess before the result is the part worth copying.

## ddc

[13:26](https://www.youtube.com/watch?v=GeYevz27gyc&t=806)

- https://github.com/ejfkdev/ddc

DDC is an Android decompiler written in Rust, going after the job Jadeex does. The author reports a 226 megabyte APK decompiled in 5 seconds and says all 99,689 output files across seven real APKs parse cleanly under Java. You don't always need a full decompile either. Over 20 subcomands answer questions like strings, cross references, and class hierarchies in milliseconds.

## jeff

[13:53](https://www.youtube.com/watch?v=GeYevz27gyc&t=833)

- https://github.com/logan-markewich/jeff

Jeff is a self-hosted standin for Typesafe's Jev API. Point the official SDK at your own server and it answers choice score and yes or no questions using a 400 million parameter gllyformer model. The maintainer estimates about 2.6 per million single question requests on an L4 against 15.6 for Jev. Their benchmark shows the trade-off. Jeff trails Jev on harder reasoning tasks.

## herdr-gpui

[14:19](https://www.youtube.com/watch?v=GeYevz27gyc&t=859)

- https://github.com/penso/herdr-gpui

Herder GPUi gives Herder a native Mac window for its terminal sessions, split panes, workspaces, and agent activity. It connects to a Herder Damon you install separately, then draws the terminal itself using Rust and GPUi. The useful bit is that the Damon owns the sessions. Close the window and your work keeps running until you attach again.

## Glyd

[14:41](https://www.youtube.com/watch?v=GeYevz27gyc&t=881)

- https://github.com/surya-koritala/Glyd

Glide is a Rust lossless compressor built for logs, data dumps, and version backups. Its record mode groups fields from structured data before compressing them. Its base mode stores a new version against an older one, while a companion store can find that older match automatically. The appeal is smaller files and fast parallel reads. The trade-off is slower compression, especially when record mode has to parse the data first.
