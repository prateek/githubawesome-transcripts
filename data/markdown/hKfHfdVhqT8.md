# GitHub Trending Today \#50: fast-jev-compaction, SemIf, jev-trader, jev-search, pg-jev, jev-review

[Watch the original video](https://www.youtube.com/watch?v=hKfHfdVhqT8)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Introduction

[0:00](https://www.youtube.com/watch?v=hKfHfdVhqT8&t=0)

This is GitHub trending today number 50. Jev keeps showing up in the feed, so today's lineup leans heavily into it. From local decision models to tools that review code and control devices. Let's get into it.

## fast-jev-compaction

[0:13](https://www.youtube.com/watch?v=hKfHfdVhqT8&t=13)

- https://github.com/tamaratran/fast-jev-compaction

Fast Jev compaction fixes the thing that's annoying about normal context compaction. It summarizes and summaries lose the exact file path or error message you needed two turns later. This one never rewrites anything. It scores every tool call and result with Jev and only deletes the ones scored as no longer needed, keeping your actual text untouched.

## Compositor

[0:35](https://www.youtube.com/watch?v=hKfHfdVhqT8&t=35)

- https://github.com/robbietilton/Compositor

Compositor is an open- source Mac image editor built around compositing with Photoshop style shortcuts. You can combine layers with masks and blend modes, then adjust color through editable adjustment layers. Resizing a layer preserves its original resolution, so shrinking it doesn't throw away detail. contentaware fill and a clone stamp handle cleanup.

## SemIf

[0:59](https://www.youtube.com/watch?v=hKfHfdVhqT8&t=59)

- https://github.com/TheoLeeCJ/SemIf

SEM if does the same trick as type safe's jev reading probabilities off option tokens directly except it runs on open models you can actually download instead of a service with a weight list ask a model to pick between 21 options the normal way generate JSON and parse it and on their benchmark that took 5.3 seconds on an RTX3090 reading the typed logits directly did it in about 1 second five times faster Jev trader is a market maker built to

## jev-trader

[1:28](https://www.youtube.com/watch?v=hKfHfdVhqT8&t=88)

- https://github.com/jarrodwatts/jev-trader

fit an entire decision inside one monad block. Most bots blow their block window doing gas estimation and synchronous sends on every order. So by the time it posts, the price already moved. This one hardcodes gas limits and static fees and cuts everything else off the path. Decision to order runs in about 100 milliseconds. 80 of that just inference.

## jev-ultrafast

[1:54](https://www.youtube.com/watch?v=hKfHfdVhqT8&t=114)

- https://github.com/browser-use/jev-ultrafast

Jev Ultraast clicks through a web page without generating a single coordinate or selector. Most browser agents screenshot the page, feed it to a vision model, and wait while it writes out where to click step after step. This one reads the DOM directly, builds an index table of clickable elements, and makes two decisions, action and target, in one network round trip.

## jev-search

[2:16](https://www.youtube.com/watch?v=hKfHfdVhqT8&t=136)

- https://github.com/superagents-lab/jev-search

Jev uses AI to choose where to search and rank what comes back without writing a generated answer. Describe what you need and Jev selects search terms, sources, and a time range with filters you can override. Results arrive as links and snippets with visible relevance scores while duplicate URLs get merged. Self-hosting still requires type safe and search one API keys and each search can trigger multiple billable calls.

## tax-doc-classifier

[2:44](https://www.youtube.com/watch?v=hKfHfdVhqT8&t=164)

- https://github.com/kyotofin/tax-doc-classifier

Tax.classifier identifies tax forms page by page, returning labels and confidence scores instead of generated explanations. It extracts PDF text and sends it to Typesafe's Jev model using form descriptions derived from IRS documents. Your pipeline can route low confidence results for review. It identifies federal forms in English, but scanned pages need OCR first. Without a text layer, they're treated as blank.

## kev

[3:12](https://www.youtube.com/watch?v=hKfHfdVhqT8&t=192)

- https://github.com/jaredpalmer/kev

Kev is a local open- source standin for Typesafees Jev that runs entirely on your laptop. Built on quen 2.5b, it reads a document once and answers multiple questions in parallel, returning probabilities instead of generating text. Each question can see the document but not the other questions. Its local server works with Typesafe's SDK, so you can reuse that interface.

## NanoJev

[3:37](https://www.youtube.com/watch?v=hKfHfdVhqT8&t=217)

- https://github.com/TianyuCodings/NanoJev

NanoJV is a nano replica of Jev, 600 million parameters that scores every possible move in one forward pass instead of generating a token at a time. You supply states, questions, and candidate answers, then batch decisions into one forward pass. The repository includes the training pipeline and browser replays of maze and snake tests.

## ABot-Recon

[3:59](https://www.youtube.com/watch?v=hKfHfdVhqT8&t=239)

- https://github.com/amap-cvlab/ABot-Recon

Abot Recon builds a 3D reconstruction from video while keeping just 12 frames of local context. It estimates geometry and camera movement frame by frame, then combines those estimates into a global point cloud and trajectory. that keeps the model's working memory from growing with video length. Optional loop closure can refine the trajectory when you revisit a location.

## typesafe-computer-use

[4:24](https://www.youtube.com/watch?v=hKfHfdVhqT8&t=264)

- https://github.com/awlevin/typesafe-computer-use

Typesafe computer- use skips screenshotting a frontier model for every single click. Most computer use agents send a screenshot to something like Opus every step, wait five plus seconds, and burn real money doing it. This one reads the screen deterministically. instead OCR plus the accessibility tree plus date plus date parsing and only calls a writing model when it actually needs to type something. PGEV adds plain language conditions to SQL so you can filter

## pg-jev

[4:50](https://www.youtube.com/watch?v=hKfHfdVhqT8&t=290)

- https://github.com/realZachi/pg-jev

support tickets by frustration or classify them by department without creating embeddings. It sends row data to Typesafe's Jev API in batches and caches answers within the session letting you change thresholds without repeating those calls. It needs super user access and PostgreSQL's untrusted Python extension which rules out many managed database hosts.

## homeassistant\_espscreen

[5:17](https://www.youtube.com/watch?v=hKfHfdVhqT8&t=317)

- https://github.com/MaxGramser/homeassistant_espscreen

ESP screens turns a cheap ESP32 touchscreen into a real smartome control panel without writing a line of YAML. The alternative is either an expensive wall tablet or hand coding ESP home for a weekend just to get your lights on a screen. This one's drag and drop straight from Home Assistant. Up to 48 tiles across eight pages. lights, climate, blinds, media, even history graphs.

## aside-codemode

[5:43](https://www.youtube.com/watch?v=hKfHfdVhqT8&t=343)

- https://github.com/lidge-jun/aside-codemode

Aside code mode lets an agent search files, filter results, and batch browser work inside one JavaScript call. Instead of filling the conversation with entire files or pages, it can return just matching paths or extracted fields. Local search uses RIP Grep while browser batches run through a site's native ripple. The gain comes from fewer tool round trips and smaller outputs, not a faster search engine than rip grip itself.

## jev-review

[6:10](https://www.youtube.com/watch?v=hKfHfdVhqT8&t=370)

- https://github.com/devagrawal09/jev-review

Jev review is honest about what an AI code reviewer actually is, a prompt worth investigating, not proof of a bug. Most AI review tools hand you a confident paragraph and let you sort out later whether it's real. This one uses bounded judgment calls with explicit thresholds instead of a blackbox explanation, checking correctness, security, reliability, compatibility.

## laya

[6:34](https://www.youtube.com/watch?v=hKfHfdVhqT8&t=394)

- https://github.com/NandhaKishorM/laya

Lia turns text or JSON into decisions without generating an answer sentence. You define questions with choices, yes or no outcomes, or ordered scores. And its encoder models return probabilities for routing tickets or checking content. A built-in router selects English, multilingual, or task focused checkpoints and loads them when needed.

## HFTENGINE

[6:56](https://www.youtube.com/watch?v=hKfHfdVhqT8&t=416)

- https://github.com/mirkovicdev/HFTENGINE

HFGen lets you replay marketmaking back tests frame by frame against recorded Binance futures data. Its Rustr runner uses HFT back test while the dashboard shows the order book, estimated Q positions, latency, and simulated fills. You can inspect why orders were filled or rejected instead of staring at a final score. It never places real orders and the simulation excludes market impact and partial fills.

## herdr-projects

[7:23](https://www.youtube.com/watch?v=hKfHfdVhqT8&t=443)

- https://github.com/eliasstravik/herdr-projects

Herder projects gives you one coordinator conversation for work spread across multiple coding agents. After you approve its proposed tasks, each worker gets a separate work tree and branch with shared instructions and project memory. The sidebar separates finished work from threads waiting for your input so you don't have to check every conversation.

## foreman

[7:46](https://www.youtube.com/watch?v=hKfHfdVhqT8&t=466)

- https://github.com/thruwire/foreman

Foreman watches a coding agent while it works using Jev to assess progress, test coverage, and whether human input is needed. A separate Python policy decides when to steer the active codec session, stop a stuck worker, or launch verification. The worker keeps running during those assessments. It's upfront about being an experiment, though. Jev's accuracy for this job is unproven and still needs calibration.

## FLYON

[8:12](https://www.youtube.com/watch?v=hKfHfdVhqT8&t=492)

- https://github.com/dealerdefi/FLYON

Flyion is a wallet tracker that actually publishes how wrong it is. Most of these trackers rank the top trader as whoever got a lucky airdrop or bridge tokens dumped into their wallet. And none of them let you check a real hit rate. Flyion writes every call to a hashchain ledger before the result exists, then settles it later against the first price once the window closes.

## typesafe-mario

[8:37](https://www.youtube.com/watch?v=hKfHfdVhqT8&t=517)

- https://github.com/fhshaik/typesafe-mario

Typesafe Mario lets Jev choose controller inputs from structured game data. Rather than screenshots, the program reads emulator memory and turns movement, terrain, and nearby enemies into JSON with timing calculations handled in code. A live dashboard shows action probabilities and response latency, while logs preserve each decision for analysis.

## procedural-film

[9:00](https://www.youtube.com/watch?v=hKfHfdVhqT8&t=540)

- https://github.com/kuhnhomeuk-cell/procedural-film

Procedural film makes a 30-se second vertical video with zero stock footage, zero AI generated clips. Every pixel is just JavaScript drawing on a canvas and every sound comes out of the web audio API. You hand it a topic and an agent writes the shots, critiques its own work across multiple review passes and renders the whole thing to an interactive HTML file plus an MP4.

## titania

[9:24](https://www.youtube.com/watch?v=hKfHfdVhqT8&t=564)

- https://github.com/penberg/titania

Titania runs Quen 30.6B through its own compiler, instruction set, and simulated GPU, so you can follow how model operations become individual instructions. A live panel shows the executing kernel and disassembly while it generates text. The physical GPU is still planned, including FPGA and eventual silicon stages. One practical warning, its chat interface includes a bash tool that runs commands without asking for confirmation.

## openjev-sglang

[9:53](https://www.youtube.com/watch?v=hKfHfdVhqT8&t=593)

- https://github.com/ekzhang/openjev-sglang

OpenJV SG lang serves a Jev compatible API using Quen with no requests sent to Typesafe. It scores answer options from first token probabilities instead of generating explanations. and reuses cached context across parallel questions that gives you yes or no decisions, choices, and ordered scores through one interface. The included deployment uses a B200 GPU on modal lead lets you test

## lead

[10:18](https://www.youtube.com/watch?v=hKfHfdVhqT8&t=618)

- https://github.com/planetscale/lead

tin compatible text search queries in Postgress without running the production tin engine. It supports query parsing, scoring, and highlighting so application SQL can run in development and CI. The unusual part is its index. It stores no search data and sends every table page back to Postgress for checking. That favors correctness over speed, making lead a testing substitute, not a production search engine.

## expo-gpt-live

[10:45](https://www.youtube.com/watch?v=hKfHfdVhqT8&t=645)

- https://github.com/davidmokos/expo-gpt-live

Expo GPT live is a voice app template that lets you interrupt AI replies and keep conversations running in the background on iPhone. It combines GPT Live 1 with web search, a weather tool, and animated personas while keeping your OpenAI key on the server. You'll need a native build rather than Expo Go. Before making the backend public, replace its shared development token with proper user authentication.

## jev-review

[11:12](https://www.youtube.com/watch?v=hKfHfdVhqT8&t=672)

- https://github.com/NiazMorshed2007/jev-review

Jev review gives coding agents separate quality scores instead of a written code review. Your agent submits a focus diff through MCP, gets feedback on dimensions like correctness and complexity, then compares scores after changes. Jev doesn't explain what caused a weak score. The coding agent still has to investigate and fix it. The plugin runs locally, but submitted code goes to Typesafe's API for evaluation.

## uplifting-biomolecular-modeling

[11:39](https://www.youtube.com/watch?v=hKfHfdVhqT8&t=699)

- https://github.com/anthropics/uplifting-biomolecular-modeling

Anthropic's uplifting biomolelecular modeling packages inference optimizations around pinned research tools without changing their usual calling interface. Its modes distinguish output preserving optimizations from those allowing small numerical differences or prioritizing lower GPU memory use. Each kit reports which optimizations activate and refuses unsupported configurations rather than silently falling back.

## mobile-jev

[12:06](https://www.youtube.com/watch?v=hKfHfdVhqT8&t=726)

- https://github.com/droidrun/mobile-jev

Mobile Jev turns a written goal into Android actions through mobile run without an ADB connection. Jev chooses an operation and target in one request while code checks that the target is still valid before acting. A live studio shows the phone action history and latency. Text entry copies exact wording from your goal rather than generating it. And a model saying done still needs verification against the phone's actual state. Bashka checks shell installers

## bashka

[12:34](https://www.youtube.com/watch?v=hKfHfdVhqT8&t=754)

- https://github.com/dmtrKovalenko/bashka

before you run them, flagging patterns like credential theft, destructive commands, and unverified downloads. It can follow scripts that fetch other scripts and records installed binaries so you can review, update, or remove them later. The useful distinction is inspection, not isolation. Static checks can misbehavior, and a server can change what it serves between review and execution.

## splash

[13:01](https://www.youtube.com/watch?v=hKfHfdVhqT8&t=781)

- https://github.com/incoai/splash

Splash runs language models locally on Apple silicon using kernels and draft models tailored to each supported model. The draft proposes blocks of tokens that the main model checks in parallel while startup calculates a memory budget for your Mac. It exposes open AI and enthropic compatible APIs for existing clients. The trade-off is flexibility. Ordinary MLX or transformers checkpoints won't load.

## simple-jev

[13:28](https://www.youtube.com/watch?v=hKfHfdVhqT8&t=808)

- https://github.com/featherless-ai/simple-jev

Simple Jev is for when you don't need a model to write an essay just to pick an answer. It reads the loits directly instead of generating text. So choice, score, and truth judgments come back as JSON. No parsing required. It caches the shared prefix across questions. The maintainers say four questions on one document dropped from 4200 tokens to,200.

## localjev

[13:52](https://www.youtube.com/watch?v=hKfHfdVhqT8&t=832)

- https://github.com/githubnext/localjev

Local Jev lets apps using Typesafe's decision interface talk to a local language model through a standard chat endpoint. It translates questions into classification prompts, validates the return JSON, and calculates choices and scores in code. The important difference, these probabilities are numbers the model writes, not values read directly from its internal logits.

## abide

[14:16](https://www.youtube.com/watch?v=hKfHfdVhqT8&t=856)

- https://github.com/coldteadotai/abide

Abide turns your project instructions into checks that run after coding agent edits. And at the end of each turn, it sends rules and changed code to Jev, then asks the agent to repair likely violations, including judgment calls a llinter might miss. Each verdict points back to the original instruction. It's feedback, not a hard gate. Without a key or network connection, edits go through unchecked.

## perch

[14:42](https://www.youtube.com/watch?v=hKfHfdVhqT8&t=882)

- https://github.com/lakeday-org/perch

Perch checks code against plain English rules using Jev, so you can express requirements like keeping environment variable reads out of individual methods. You scope rules to files, choose what gets checked, and set thresholds in YAML. Scans produce ranked findings with line numbers and confidence scores, and you can recheck an issue after a fix.
