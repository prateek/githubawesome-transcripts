# GitHub Trending Weekly \#19: Ferrite, Ralph TUI, xyOps, intercept, Pocket TTS, UCP, VAMSeek, Pairlane

[Watch the original video](https://www.youtube.com/watch?v=OPJWOxKiTyk)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Introduction

[0:00](https://www.youtube.com/watch?v=OPJWOxKiTyk&t=0)

GitHub just keeps bringing amazing projects, and this week is no exception. I've rounded up 31 trending open- source gems you don't want to miss. Some that will boost your workflow, some that are just downright fun. Let's go.

## Ferrite

[0:15](https://www.youtube.com/watch?v=OPJWOxKiTyk&t=15)

- https://github.com/OlaProeis/Ferrite

Fite, a fast text editor built in Rust that claims to be 100% AI generated. You get split view markdown, a structural tree editor for JSON, and native mermaid diagrams without touching a single line of JavaScript. The UI includes Zen modes, Minimap support, workspace folders, Git status indicators, and multiformat support. So, you get power without sacrificing polish.

## Ralph TUI

[0:40](https://www.youtube.com/watch?v=OPJWOxKiTyk&t=40)

- https://github.com/subsy/ralph-tui

If you've been using the Claude Code CLI, you know the struggle. You sit there pasting tasks one by one, waiting for it to finish just to paste the next one. It's manual babysitting. Ralph changes that. It's an agent loop orchestrator. You give it a list of tasks in a simple JSON file and it puts Claude to work in an infinite loop. It picks the task, runs the agent, verifies it's done, and moves to the next one automatically.

## xyOps

[1:07](https://www.youtube.com/watch?v=OPJWOxKiTyk&t=67)

- https://github.com/pixlcore/xyops

If you've ever had a cron job fail at 3:00 a.m. and had no idea why, you need this. It's a complete replacement for your cron tab, but it's also a server monitor and a ticketing system rolled into one. Here is the magic. It doesn't just run your scripts blindly. It tracks the CPU and RAM of every single job. And if something crashes, it doesn't just send a vague error email. It autocreates a ticket with a full snapshot of exactly what the server was doing at that split second.

## intercept

[1:38](https://www.youtube.com/watch?v=OPJWOxKiTyk&t=98)

- https://github.com/smittix/intercept

This is how you turn your RTL SDR dongle into a signal intelligence station. Meet Incept. It is a unified signal intelligence platform that runs in your browser. It combines everything into one dashboard. I'm talking decoding your neighbor's weather station, spotting drones over Wi-Fi, and even detecting hidden air tags or stalker wear. It basically turns a $20 dongle into a full-blown surveillance station.

## Pocket TTS

[2:05](https://www.youtube.com/watch?v=OPJWOxKiTyk&t=125)

- https://github.com/kyutai-labs/pocket-tts

Pocket TTS by QI Labs. We are used to highquality AI voices needing massive GPUs or expensive cloud APIs, but this this is a 100 million parameter model that runs entirely on your CPU. It uses a new method called continuous audio language modeling to predict sound directly, making it blazing fast. It handles instant voice cloning from just a 5-second clip and sounds incredible. No cloud, no lag, just studio quality audio running locally.

## UCP

[2:35](https://www.youtube.com/watch?v=OPJWOxKiTyk&t=155)

- https://github.com/Universal-Commerce-Protocol/ucp

We all want AI agents that can actually buy things for us, right? But currently, that's impossible because the AI needs a custom connection to every single store. UCP fixes this by creating a universal adapter for the internet. It's a standard language backed by Google and Shopify that lets any AI agent connect to any store, build a cart, and check out instantly. It basically gives the entire internet a standard API so your AI can finally go shopping for you.

## Perfect Pixel

[3:05](https://www.youtube.com/watch?v=OPJWOxKiTyk&t=185)

- https://github.com/theamusing/perfectPixel

Perfect pixel, a Python tool that takes AI generated pixel art and makes it pixel perfect. If you've ever tried to generate pixel art with AI, you know the struggle. You get blurry edges, random noise, and pixels of different sizes. This repo fixes that. It snaps every smear onto a strict grid and cleans up the color palette. It turns that fuzzy AI slop into crisp game ready sprites that look like they were actually drawn by hand.

## VAM Seek

[3:33](https://www.youtube.com/watch?v=OPJWOxKiTyk&t=213)

- https://github.com/unhaya/vam-seek

Vamp, a tiny 15 kilob library that replaces the boring progress bar with a visual navigation grid. Instead of guessing where the good part is, it generates a 2D visual map of the entire video, letting you jump to the exact scene you want with a single click. The best part, it runs entirely in the browser. It extracts the thumbnails on the fly using canvas, so you don't need a backend server or pre-generated sprite sheets.

## Pairlane

[4:01](https://www.youtube.com/watch?v=OPJWOxKiTyk&t=241)

- https://github.com/kiyo-e/pairlane

Perilane is a peer-to-peer file transfer tool that works entirely in the browser. It is completely serverless. Your files are encrypted and streamed directly between devices via WebRTC. They never touch a cloud storage bucket. And for the developers, you don't even need the website. Just open a room, drag and drop your files, and share the link. Your receiver gets them straight over the web with optional endtoend AES GCM encryption baked in. We know that even with infinite context windows, models actually get dumber when you stuff them full of text. It's called context rot.

## rlm

[4:29](https://www.youtube.com/watch?v=OPJWOxKiTyk&t=269)

- https://github.com/alexzhang13/rlm

RLM fixes this by changing the physics of how AI reads. Instead of pasting the whole document into the prompt, it stores your data in a Python environment. The model then writes code to recursively call itself, reading and processing the data in smart chunks, just like a human reading a book page by page.

## M5Tab-Macintosh

[4:58](https://www.youtube.com/watch?v=OPJWOxKiTyk&t=298)

- https://github.com/amcchord/M5Tab-Macintosh

You are not going to believe what this little tablet is running. This is the M5 Stack Tab 5. Usually meant for smart home stuff. But this repo just turned it into a portal to 1992. It's running a full port of Basilisk 2 directly on the ESP32P4 chip. That means you are looking at a fully functional Macintosh running system 7 right in your hand. It boots in 15 seconds, supports a USB keyboard, and yes, the touchcreen works as your mouse.

## Open Claude Cowork

[5:28](https://www.youtube.com/watch?v=OPJWOxKiTyk&t=328)

- https://github.com/DevAgentForge/Claude-Cowork

Anthropic just dropped Claude Co-work for a hundred bucks a month, but this this is the open source version. Meet OpenCl Claude Co-work. It gives you that same agentic power, creating files, organizing folders, and running commands, but it runs locally and works with any model, even DeepSeek or open source LLMs. It basically turns your AI into an autonomous employee that actually has permission to do the work.

## toofer

[5:55](https://www.youtube.com/watch?v=OPJWOxKiTyk&t=355)

- https://github.com/Rich-Harris/toofer

Tufer, a local first web-based authenticator app built by Rich Harris. We all hate digging for our phones just to get a six-digit login code. Tufer runs entirely in your browser, but keeps your secrets 100% offline using local storage. No backend, no cloud syncing, just your keys on your device. Built with the spvelt 5 stack, it's secure and finally makes two-factor authentication feel like a native part of the web.

## HAPI

[6:23](https://www.youtube.com/watch?v=OPJWOxKiTyk&t=383)

- https://github.com/tiann/hapi

Happy is basically a remote control for your AI coding agents. You run clawed code or Gemini on your local machine, but you don't want to be stuck at your desk staring at the terminal. Happy wraps that session and beams it directly to your phone or a web link. Now, when the AI needs permission to edit a file or run a command, you just tap approve right from Telegram. It's fully encrypted and lets you ship code without even touching your keyboard.

## json-render

[6:52](https://www.youtube.com/watch?v=OPJWOxKiTyk&t=412)

- https://github.com/vercel-labs/json-render

This is how you turn your AI's raw data into a beautiful interface without writing a single line of front-end logic. Meet JSON Render from Versel Labs, the engine behind Generative UI. JSON Render takes that raw structured output and instantly maps it to your existing React components. Whether the AI generates a product card, a weather widget, or a dynamic form, this tool renders it perfectly on the fly, allowing your agent to build its own interface in real time.

## Global-LVBA

[7:22](https://www.youtube.com/watch?v=OPJWOxKiTyk&t=442)

- https://github.com/xuankuzcr/Global-LVBA

Stop building blurry 3D maps with your robot. This is global LVBA and it's fixing the biggest headache in LAR mapping. When you slap camera images onto LAR scans in real time, you usually get drift, ghosting, and messy colors. Global LVBA solves this by running a global bundle adjustment. It doesn't just guess. It mathematically locks your LAR geometry first, then perfectly align your camera images to that structure using phototric optimization.

## TinyCity

[7:51](https://www.youtube.com/watch?v=OPJWOxKiTyk&t=471)

- https://github.com/chrisdiana/TinyCity

Tiny City, a city simulator that runs entirely in MicroPython. Designed for the thumb keychain console, it packs an entire economy into a screen the size of a postage stamp. We're talking residential zoning, power grids, tax collection, and even random disasters like fires, all rendered on a 72x40 pixel display. It's open source, runs on the RP2040.

## llm-tldr

[8:16](https://www.youtube.com/watch?v=OPJWOxKiTyk&t=496)

- https://github.com/parcadei/llm-tldr

This is LLM TLDDR and it is a compression engine for AI coding. AI doesn't always need every single line of code to understand your project. It just needs the structure. This tool scans your repo and strips it down to just the essentials, function signatures, and dependencies. It reduces your token usage by 95%. Now you can fit a 100,000line project into a single prompt and the AI understands how everything connects.

## Doomscrolling Blocker

[8:45](https://www.youtube.com/watch?v=OPJWOxKiTyk&t=525)

- https://github.com/kristelTech/Doomscrolling_Blocker

Doomcrolling Blocker, a Python app that uses your webcam to physically catch you slacking off. Instead of blocking websites, it tracks your face and eye movement to detect when you look down at your phone. If it catches you doom scrolling, it doesn't just send a notification. It blasts Rick Ashley and roasts you with harsh messages until you look back at your monitor. It literally rick rolls you into being productive.

## MeowCV

[9:12](https://www.youtube.com/watch?v=OPJWOxKiTyk&t=552)

- https://github.com/reinesana/MeowCV

Meow CV, a realtime meme mirror that turns your face into famous Tik Tok cats. It uses Media Pipe and Open CV to track your facial landmarks in real time. If you squint, it triggers a judgmental glare. If you open your mouth, it triggers a shock reaction. It's fully loaded with goated cats like and Larry, essentially letting you roleplay as your favorite internet memes just by making faces at your webcam.

## UI Skills

[9:39](https://www.youtube.com/watch?v=OPJWOxKiTyk&t=579)

- https://github.com/ibelick/ui-skills

We know AI is great at logic, but usually terrible at making things look good. This skill fixes that by injecting deep knowledge of Shadsen UI, Tailwind, and framer motion directly into the agent. It stops the AI from generating ugly generic layouts and forces it to build polished productionready components with proper spacing and animations. It basically turns your CLI agent into a senior front-end engineer.

## zeroshot

[10:06](https://www.youtube.com/watch?v=OPJWOxKiTyk&t=606)

- https://github.com/covibes/zeroshot

We all know the pain of using AI coding tools. You spend half your day babysitting the terminal, copy pasting errors back and forth. Zeroot solves this by turning coding tools into a fully autonomous engineering team. You just point it at a GitHub issue and walk away. It spawns a planner to map out the logic, a worker to write the code, and this is the best part, a blind validator. This agent tests the code in a totally fresh environment without seeing the chat history.

## AnyDepth

[10:37](https://www.youtube.com/watch?v=OPJWOxKiTyk&t=637)

- https://github.com/AIGeeksGroup/AnyDepth

Anyth, a lightweight AI framework that solves moninocular depth estimation. Traditional models use massive complex decoders that are slow and heavy. Any replaces all that junk with a simple depth transformer that cuts parameter counts by nearly 90%. It uses a single path fusion strategy to instantly turn any 2D image into a precise depth map.

## NovaSR

[11:00](https://www.youtube.com/watch?v=OPJWOxKiTyk&t=660)

- https://github.com/ysharma3501/NovaSR

Nova SR, an audio upsampler that fits entirely in just 52 kilob. Yes, the model file is smaller than a typical JPEG image. Despite its size, it takes muffled 16 kHz audio and reconstructs it into crisp 48 kHz quality. It runs 3600 times faster than real time, meaning it can restore an hour of audio in just 1 second. If you're trying to fix lowquality TTS or clean up old data sets without burning your GPU, this is pure magic in a tiny package.

## cachekit

[11:31](https://www.youtube.com/watch?v=OPJWOxKiTyk&t=691)

- https://github.com/OxidizeLabs/cachekit

Cache Kit, the high performance caching engine for Rust that goes beyond basic key value stores. While most developers settle for a simple LRU, Cashachkit gives you advanced eviction policies like LRUK and support for tiered storage architectures, letting you build sophisticated L1 and L2 cache layers with ease. It's designed for systems engineers who need granular control over memory, featuring built-in metrics to track hit rates.

## Contour

[12:00](https://www.youtube.com/watch?v=OPJWOxKiTyk&t=720)

- https://github.com/sk-ruban/contour

Contour, the tool that turns flat maps into flyable worlds. You just upload a 2D top too map and Contour automatically fetches the real world elevation data to build a 3D landscape right in your browser. But here's the crazy part. It connects to the Gemini Live API via websockets. This means you can actually talk to the map while you fly through it. And the AI acts as a realtime guide answering questions about the terrain you're exploring.

## grepai

[12:29](https://www.youtube.com/watch?v=OPJWOxKiTyk&t=749)

- https://github.com/yoanbernabeu/grepai

GP AI, the missing link between your codebase and your AI agent. Traditional GP was built in 1973 for exact text matching, but modern AI needs to understand concepts. GP AI gives your terminal semantic search superpowers. Instead of searching for specific variable names, you can ask for user authentication flow and it finds the relevant code logic using vector embeddings.

## webctl

[12:54](https://www.youtube.com/watch?v=OPJWOxKiTyk&t=774)

- https://github.com/cosinusalpha/webctl

You ask the AI to read a website and it drowns in thousands of lines of raw HTML and logs. It burns your tokens and confuses the model. WebCTL fixes this by turning the browser into a Unix style CLI. Instead of dumping the whole page, you can pipe the website directly into tools like GP or JQ. You can filter the output so the AI sees only the buttons or text it actually needs.

## openwork

[13:19](https://www.youtube.com/watch?v=OPJWOxKiTyk&t=799)

- https://github.com/accomplish-ai/openwork

If you want Claude Co-work but hate the idea of a monthly subscription or sending all your data to the cloud, you need this. It's a completely open source desktop app that gives you an autonomous AI co-worker running locally. You just plug in your own API keys, whether that's Claude, OpenAI, or DeepSeek. It doesn't just chat. It uses the Open Code CLI to actually access your file system, edit code, and run terminal commands.

## Obsidian Visual Skills

[13:46](https://www.youtube.com/watch?v=OPJWOxKiTyk&t=826)

- https://github.com/axtonliu/axton-obsidian-visual-skills

Obsidian Visual Skills, a custom skill pack that teaches Clawed Code how to draw. Instead of just generating text, this tool lets the AI build fully editable diagrams directly in your Obsidian vault. You can ask it to turn a long article into a mind map and it generates an infinite canvas file with perfect layout. You can even tell it to sketch a system architecture and it builds a handdrawn excell.

## pmxt

[14:13](https://www.youtube.com/watch?v=OPJWOxKiTyk&t=853)

- https://github.com/qoery-com/pmxt

It lets you fetch live order books, search active markets, and pull historical OLCV candles from multiple exchanges using the exact same code. It handles the API quirks, giving you a standardized data pipeline to build the ultimate prediction market strategy.
