# GitHub Trending Weekly \#31: trellis-mac, OpenMythos, zennotes, pgque, cc-design, AutoProber, hostc

[Watch the original video](https://www.youtube.com/watch?v=JGBcwuPCR4c)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Introduction

[0:00](https://www.youtube.com/watch?v=JGBcwuPCR4c&t=0)

What is up developers? Welcome back to GitHub awesome episode 31 of GitHub trending weekly. 35 repositories trending on GitHub right now. Let's get into it.

## trellis-mac

[0:12](https://www.youtube.com/watch?v=JGBcwuPCR4c&t=12)

- https://github.com/shivampkumar/trellis-mac

Microsoft released Trellis Bont 2, a state-of-the-art image to 3D model. The catch, it was locked to Nvidia GPUs because it relied on custom CUDA kernels. Trellis Mac ports the entire 4 billion parameter model to run natively on Apple Silicon via PyTorch MPS. The developer rewrote the CUDA specific sparse 3D convolutions and mesh extraction algorithms into pure Python and PyTorch.

## OpenMythos

[0:38](https://www.youtube.com/watch?v=JGBcwuPCR4c&t=38)

- https://github.com/kyegomez/OpenMythos

Open Mythos is an open-source PyTorch reconstruction of what the research community believes. Claude mythos is a recurrent depth transformer. Instead of stacking hundreds of layers, it uses a looped recurrent block with sparse mixture of experts routing. Instead of chain of thought where the model physically prints intermediate tokens, Open Mythos performs multi-step reasoning entirely inside continuous latent space.

## zennotes

[1:05](https://www.youtube.com/watch?v=JGBcwuPCR4c&t=65)

- https://github.com/ZenNotes/zennotes

Zenotes is a keyboard first desktop notes app. Plain portable MD files on disk, full Vim modal editing, live rendering for math plots and architecture diagrams from fenced code blocks. Wire it directly into claw desktop cursor or clawed code. Your AI seamlessly reads your project plans, searches your knowledge base, and writes research directly into your actual markdown files on disk. PGQu is a zero

## pgque

[1:31](https://www.youtube.com/watch?v=JGBcwuPCR4c&t=91)

- https://github.com/NikolayS/pgque

bloat Postgress message Q implemented in pure PL. No C extensions, no external demons, one SQL file dropped into your database plus PGRON to keep it ticking. Instead of heavy per row deletions, it uses snapshot-based batching and truncatebased table rotation. Batch completes. Entire active table gets truncated. Expensive vacuum overhead completely bypassed.

## cc-design

[1:56](https://www.youtube.com/watch?v=JGBcwuPCR4c&t=116)

- https://github.com/ZeroZ-lab/cc-design

CC design is a structured design workflow skill that turns your local coding agent into an expert product designer. Enforces context first design. Before writing a single div, the agent actively hunts down your existing brand systems, UI libraries, and product code to guarantee new designs match your actual product. Playright MCP visually verifies everything locally.

## browser-harness

[2:20](https://www.youtube.com/watch?v=JGBcwuPCR4c&t=140)

- https://github.com/browser-use/browser-harness

Most browser automation breaks the moment a site changes its DOM structure or throws an unexpected popup. Browser harness connects directly to Chrome over websocket via Chrome DevTools protocol. When the agent hits something unexpected, it injects its own JavaScript on the fly to handle it. No pre-written scrapers, no rigid rules. Plug it into clawed code. Watch it drive your browser.

## AutoProber

[2:45](https://www.youtube.com/watch?v=JGBcwuPCR4c&t=165)

- https://github.com/GainSec/AutoProber

AI agents aren't just stuck in terminals anymore. They're physically hacking hardware. Autoprober is an open- source flying probe stack that lets an AI agent control a cheap $220 desktop CNC machine. Place a raw circuit board on the bed, tell the agent there's a new target. The AI drives a USB microscope around, stitches a highresolution map, uses vision to read IC labels, and autonomously identifies interesting test pads.

## lingbot-map

[3:13](https://www.youtube.com/watch?v=JGBcwuPCR4c&t=193)

- https://github.com/Robbyant/lingbot-map

Lingbot map is a 3D foundation model operating on a pure see as you go principle. Standard single RGB camera, continuous camera pose estimation, dense 3D geometry reconstructed frame by frame in real time at around 20 frames per second. Powered by a feed forward geometric context transformer. Borrows page KV cache technology from LLM to maintain trajectory memory across sequences longer than 10,000 frames without running out of RAM.

## activeframe

[3:44](https://www.youtube.com/watch?v=JGBcwuPCR4c&t=224)

- https://github.com/activetheory/activeframe

Frame accurate video control in the browser has always been painful. The HTML 5 video tag lags, drops frames, and scrubs imprecisely. Active frame from Creative Agency Active Theory throws the video element out entirely. A custom AAF video format built for the modern web codec API. Takes your video, extracts raw H.264 or H.265 samples, packs them with a JSON manifest into one lightweight binary.

## KillerPDF

[4:11](https://www.youtube.com/watch?v=JGBcwuPCR4c&t=251)

- https://github.com/SteveTheKiller/KillerPDF

Tired of Adobe Acrobat begging for a subscription? Killer PDF is a standalone Windows executable under 10 megabytes. No installer, no account, no subscription, zero telemetry. Drop it on a USB drive and it runs. PDFM rendering. Merge and split documents. Drag and drop pages. Reusable signatures. Highlight overlays. Doubleclick any text to edit it in line and it automatically matches the original documents font.

## diagram-design

[4:38](https://www.youtube.com/watch?v=JGBcwuPCR4c&t=278)

- https://github.com/cathrynlavery/diagram-design

Diagram design is a clawed code skill built by someone tired of fighting Figma for 30 minutes every time she needed an architecture sketch. Your agent becomes a high-end editorial graphic designer generating stunning self-contained HTML and SVG files. Zero JavaScript, zero external images, zero build steps, 13 built-in structural types, including sequence diagrams, state machines, ven diagrams, and swim lanes.

## hostc

[5:05](https://www.youtube.com/watch?v=JGBcwuPCR4c&t=305)

- https://github.com/akazwz/hostc

Using Enro means signing up, dealing with session limits, and getting pushed toward paid tiers. Host C is a blazing fast zero config edge tunneling tool built entirely on Cloudflare, workers, and durable objects. One CLI command instantly exposes your local host with a secure HTTPS URL, native websocket proxying out of the box, something heavily restricted on most free tunneling services.

## design-md-chrome

[5:31](https://www.youtube.com/watch?v=JGBcwuPCR4c&t=331)

- https://github.com/bergside/design-md-chrome

Design.md files fix AI hallucinating ugly generic UI, but manually writing design rules or extracting hex codes from sites you like takes forever. Design MD-chrome automates it. Navigate to any beautiful website, click the extension, and it instantly rips the entire design language directly from the live DOM. typography scales, spacing variables, brand colors, shadow effects, using cursor in your IDE, clawed code in

## agentic-stack

[5:55](https://www.youtube.com/watch?v=JGBcwuPCR4c&t=355)

- https://github.com/codejunkie99/agentic-stack

your terminal, windsurf for second opinions. Each one has isolated memory. Teach one a rule, the others forget it. Agentic stack fixes that. One brain, many harnesses. A portable aagent folder that standardizes your AI's memory, custom skills, and protocols. Drop it into your project and it plugs into claude code, cursor, windsurf, openclaw or even a custom Python loop.

## nemesis

[6:21](https://www.youtube.com/watch?v=JGBcwuPCR4c&t=381)

- https://github.com/assai-id/nemesis

Government spending data lives in massive unreadable spreadsheets. Nemesis is an open-source AI auditing dashboard, ingests millions of rows of public procurement data, and uses LLM to instantly flag anomalies, markup, and wasted taxpayer money. Luxury SUVs, absurdly priced billiard tables, all the stuff hidden in regional budgets. turns unreadable spreadsheets into a clean, searchable database with color-coded risk flags.

## your-everyday-tools

[6:49](https://www.youtube.com/watch?v=JGBcwuPCR4c&t=409)

- https://github.com/listyantidewi1/your-everyday-tools

Googling for PDF to Word or JSON formatter always lands you on shady ad-filled sites trying to steal your data. Your everyday tools bundles 57 utilities into one self-hosted dashboard. Text calculator and security tools run entirely clientside in vanillajs. Document conversions use purely in-memory processing on the server, so your sensitive files are never written to disk.

## open-carrusel

[7:14](https://www.youtube.com/watch?v=JGBcwuPCR4c&t=434)

- https://github.com/Hainrixz/open-carrusel

Open Carousel is an open-source AI powered Instagram carousel builder running entirely local. Type start in claude code. Teach it your brand colors, fonts, and logo once, then just tell it what to post. Make me a five slide post about learning React, and your agent autonomously designs the entire carousel slide by slide. Preview live in your browser. Ask Claude to tweak layouts in chat. Export perfectly sized PGs for Instagram.

## tiks

[7:42](https://www.youtube.com/watch?v=JGBcwuPCR4c&t=462)

- https://github.com/rexa-developer/tiks

Native iOS and Android apps have satisfying UI clicks and pops. Web apps have been silent for 30 years because shipping MP3s is slow and bloated. Tix fixes that in 2 kilob. Zero audio files. It generates crisp clicks, toggles, success chimes, and error buzzes dynamically at runtime using pure web audio API synthesis and oscillators. Design custom sound themes by tweaking frequency, oscillator type, and decay.

## dinky

[8:10](https://www.youtube.com/watch?v=JGBcwuPCR4c&t=490)

- https://github.com/heyderekj/dinky

Stop uploading your images, videos, and PDFs to slow adfilled compression sites. Dinky is a small Mac OS utility, just 14 megabytes. Drag and drop, paste from clipboard, or set it to autowatch a folder. Instantly converts heavy images into WEBP. It automatically detects whether an image is a photograph or a screenshot and dynamically adjusts compression quality for the perfect balance of file size and visual clarity.

## gridex

[8:37](https://www.youtube.com/watch?v=JGBcwuPCR4c&t=517)

- https://github.com/gridex/gridex

Gradex is a native database IDE built specifically for Mac OS in Swift and AppKit with a Windows version in WinUI3. connects to Postgress SQL, MySQL, SQLite, and Reddus from one keyboard-driven interface. Built-in AI assistant that actually understands your database schema. Connect to Claude Open AI. Type plain English. Get perfect SQL queries executed automatically.

## mdv

[9:01](https://www.youtube.com/watch?v=JGBcwuPCR4c&t=541)

- https://github.com/drasimwagan/mdv

MDV is a markdown superset built for documents, dashboards, and slides. Extend standard markdown so you can embed data and visualizations directly in your text. Fenced code blocks render instantly into gorgeous SVG charts and KPI stats. Layout containers let you build complex grids without writing any messy HTML. Everything exports to a single self-contained HTML or PDF.

## USB-Uncensored-LLM

[9:26](https://www.youtube.com/watch?v=JGBcwuPCR4c&t=566)

- https://github.com/techjarves/USB-Uncensored-LLM

USB uncensored LLM is a zeroinstall plug-and-play local AI environment. Run high-quality models like Gemma and Neomix directly from any USB drive or portable SSD. Fully airgapped, zero internet required, zero dependencies left on the host machine. Plug it in and it natively executes on Windows, Mac OS, Linux, and even Android via Termox.

## Phosphor

[9:48](https://www.youtube.com/watch?v=JGBcwuPCR4c&t=588)

- https://github.com/momenbasel/Phosphor

Imeazing is the go-to iOS device manager until you look at the subscription price. Phosphor does the same job for free. Browse iOS backups without restoring. Export iMessage conversations to HTML or CSV. Extract camera roll photos. Install IPAs. Stream the device SIS log in real time. Parses Apple's manifest. DB directly for file system style backup browsing without touching the backup itself.

## MD-This-Page

[10:14](https://www.youtube.com/watch?v=JGBcwuPCR4c&t=614)

- https://github.com/Ademking/MD-This-Page

Pasting web content into an AI agent means dumping navigation bars, ads, and hidden HTML tags into your context window alongside the actual content. MD this page is a browser extension powered by Mozilla's readability that converts any web page to clean markdown with AltM or a right click. opens a preview tab where you can tweak formatting, toggle images, and copy directly into Claude or Chat GPT.

## cydintosh

[10:40](https://www.youtube.com/watch?v=JGBcwuPCR4c&t=640)

- https://github.com/likeablob/cydintosh

Sidintosh runs a real 68K Mac emulator on a $10 ESP32 display, complete with touchpad mouse control on the LCD. The clever part is the IPC bridge. Custom homebrew Mac apps running inside the emulator communicate with the ESP32 chip underneath, so your emulated 1984 Macintosh can scan for Wi-Fi and pull live MQTT weather data from a modern home assistant setup.

## tokenjuice

[11:06](https://www.youtube.com/watch?v=JGBcwuPCR4c&t=666)

- https://github.com/vincentkoc/tokenjuice

Token Juice hooks into your terminal and compresses noisy command output before the LLM sees it. progress bars, verbose install logs, repetitive status messages squashed down to the dense signal your agent actually needs to keep working. Native clawed code hook installer included. Less junk in the context window. Lower API bill at the end of the month.

## animate

[11:29](https://www.youtube.com/watch?v=JGBcwuPCR4c&t=689)

- https://github.com/vyfor/animate

Adding smooth animations to terminal UIs in Rust usually means writing a lot of timing and interpolation logic from scratch. Animate is a zero dependency animation crate with a macrodriven API that handles the boiler plate, built-in easing functions, custom interpolators, and playback modes, including once, cycle, and alternate. Native Ratatoury support behind a feature flag.

## claudemap

[11:53](https://www.youtube.com/watch?v=JGBcwuPCR4c&t=713)

- https://github.com/QuinnAho/claudemap

Vibe coding a full application in a weekend and then having no idea how it actually works is a very specific and relatable problem. Claude Map installs into Cloud Code, sends your repository structure to an architecture sub agent, and renders an interactive conceptual map in your browser. Not a file tree, a map grouped by what the code actually does.

## macterm

[12:16](https://www.youtube.com/watch?v=JGBcwuPCR4c&t=736)

- https://github.com/thdxg/macterm

Ghosty's rendering performance is hard to beat, but the window management leaves some things to be desired. MacTerm wraps lib ghosty in a native swift UI interface. Vertical project sidebar, infinite split panes, a global drop-down terminal you can summon from anywhere. Workspace auto persistence saves your entire pane layout and restores it exactly on next open.

## superspider

[12:40](https://www.youtube.com/watch?v=JGBcwuPCR4c&t=760)

- https://github.com/Lyx3314844-03/superspider

AI agents hitting Cloudflare blocks and captures midtask is one of those pipeline failures that's hard to debug and annoying to work around. Super spider handles anti-bot bypass, headless browser rendering, and multi-engine search out of the box. The LLM focused design is the practical difference. Instead of dumping raw HTML into your context window, it converts pages directly to clean markdown or structured JSON.

## fetch

[13:08](https://www.youtube.com/watch?v=JGBcwuPCR4c&t=788)

- https://github.com/areofyl/fetch

Neofetch shows your system specs. Fetch shows them while your DRO logo spins in 3D. Single optimized C file zeroheavy dependencies reads directly from /proc and cis. It takes your Linux DRO's ASI logo and extrudes it into a rotating 3D relief map with blindfong shading, specular highlights, and a Zbuffer. System stats tick and update in real time while it spins. Over 500 DRO logos supported with original Anie colors preserved.

## Boxer3D

[13:38](https://www.youtube.com/watch?v=JGBcwuPCR4c&t=818)

- https://github.com/Barath19/Boxer3D

Boxer 3D turns a LAR equipped iPhone into a realtime 3D object detector. A lightweight YOLO model handles 2D detection. Then Boxeret from Meta Research lifts those flat detections into fully oriented seven degree of freedom 3D bounding boxes using LAR depth data and Dinov3 visual features. Arkit handles gravity and camera tracking. Scene kit anchors the 3D wireframes into your physical environment.

## memkraft

[14:05](https://www.youtube.com/watch?v=JGBcwuPCR4c&t=845)

- https://github.com/seojoonkim/memkraft

Most agent memory systems require a vector database, an embedding model, and a chunking strategy before you can store a single fact. Memcraft stores everything in plain human readable markdown. No vector embeddings, no infrastructure, zero dependencies. It autonomously extracts facts, classifies information, and maintains a compounding knowledge base that your agent reads and updates as local text files.

## PsUi

[14:32](https://www.youtube.com/watch?v=JGBcwuPCR4c&t=872)

- https://github.com/jlabon2/PsUi

Building UIS in PowerShell means WPF, ZAML, and frozen windows the moment a long script runs. PSUI fixes that with simple PowerShell functions and async background execution. The clever part is the custom PSH host that intercepts standard simmenlets. Write host pipes to a UI console panel with color support. Write progress drives a real graphical progress bar. Get credential pops a native credential dialogue.

## aube

[14:58](https://www.youtube.com/watch?v=JGBcwuPCR4c&t=898)

- https://github.com/endevco/aube

OB is a Node.js JS package manager written in Rust up to 7x faster than PNPM and 3x faster than bun in warmci environments with a global content addressable store that cuts disk usage significantly. It natively reads and writes your existing packaged lock.json or bund.lock files in place. Use it locally for the speed boost while the rest of your team stays on whatever they're using.
