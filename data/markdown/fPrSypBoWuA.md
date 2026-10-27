# GitHub Trending Today \#32: PPT-Design-Prompt, agent-simulator, cavemem, CrabTrap, OpenGame, LeanKG

[Watch the original video](https://www.youtube.com/watch?v=fPrSypBoWuA)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Introduction

[0:00](https://www.youtube.com/watch?v=fPrSypBoWuA&t=0)

Welcome back to GitHub Awesome episode 32 of GitHub trending today. 35 trending open- source projects on GitHub. Let's get into it.

## PPT-Design-Prompt

[0:11](https://www.youtube.com/watch?v=fPrSypBoWuA&t=11)

- https://github.com/Russell-cell/PPT-Design-Prompt

Design.md files work great for web, but hand them to an AI for a PowerPoint and you get web buttons and HTML layouts hallucinated onto your slides. PPT Design Prompt fixes that translation problem. a lightweight Python CLI that takes your web first design.md system and automatically strips away webspecific code. Reinterpreting the brand language strictly for presentation image generation.

## agent-simulator

[0:37](https://www.youtube.com/watch?v=fPrSypBoWuA&t=37)

- https://github.com/jasonkneen/agent-simulator

Running the heavy Xcode iOS simulator and fighting with XQ test is painful. Agent Simulator streams a fully interactive iOS simulator directly into your browser. Click any UI element and it maps perfectly to your React Native source code with the exact file path and line number. Tap, swipe, and type directly in the web UI without moving your mouse or needing the simulator in focus.

## cavemem

[1:02](https://www.youtube.com/watch?v=fPrSypBoWuA&t=62)

- https://github.com/JuliusBrussee/cavemem

The original Caveman skill went viral for slashing output tokens. Caveme is the sequel tackling AI amnesia. Why agent forget when agent can remember? Caveme gives your coding agents persistent local first memory that survives between sessions. It captures observations, shrinks them 75% using Caveman compression, stores them in a local SQLite database with FTS5 and vector search.

## privacy-filter

[1:28](https://www.youtube.com/watch?v=fPrSypBoWuA&t=88)

- https://github.com/openai/privacy-filter

OpenAI open source the exact privacy tool they use internally. Privacy filter is a 1.5 billion parameter model designed exclusively to detect and scrub PII from text. Runs completely locally on your own machine. No sending sensitive data to the cloud just to redact it. Processes a 128,000 token context window in a single forward pass. Detects eight categories including names, addresses, API keys, passwords, and account numbers. You give an AI

## CrabTrap

[1:57](https://www.youtube.com/watch?v=fPrSypBoWuA&t=117)

- https://github.com/brexhq/CrabTrap

agent internet access and real credentials. Suddenly, you're terrified it'll hallucinate a destructive API call or fall to prompt injection. Brex had the same problem. They built Crabt and open sourced it. An LLM is a judge HTTP proxy sitting between your agent and the internet. Intercepts every HTTP and HTTPS request before it hits a real API.

## OpenGame

[2:21](https://www.youtube.com/watch?v=fPrSypBoWuA&t=141)

- https://github.com/leigest519/OpenGame

Asking an AI agent to code a full video game usually ends in broken logic and disjointed files. Open is an open- source agentic framework built explicitly for end-to-end web game creation. Powered by game coder 27B, a massive code LLM fine-tuned specifically on game engines like phaser physics systems and state management patterns.

## open-codesign

[2:43](https://www.youtube.com/watch?v=fPrSypBoWuA&t=163)

- https://github.com/OpenCoworkAI/open-codesign

Drooling over vzero, lovable or clawed design but hate the vendor lockin? Open codeesign is a local first desktop app strict bring your own key model. Plug in anthropic openai Gemini or point it at localama models and pay zero cents for API calls. Type a prompt. Generate fully functional React prototypes, interactive landing pages, pitch slides, and PDFs right inside a sandboxed local iframe.

## pi-computer-use

[3:09](https://www.youtube.com/watch?v=fPrSypBoWuA&t=189)

- https://github.com/injaneity/pi-computer-use

Anthropic's computer use API lets AI see the screen, move the mouse, and click. PI computer use brings that natively to the Pi CLI on Mac OS. Tell your agent, "Build a login screen and test if the hover state works." and it writes the React code, spins up your dev server, takes control of your mouse, physically opens Chrome, clicks the button, and visually verifies the result.

## CubeSandbox

[3:33](https://www.youtube.com/watch?v=fPrSypBoWuA&t=213)

- https://github.com/TencentCloud/CubeSandbox

AI agents executing code is a security nightmare. Docker containers risk kernel breakouts. Traditional VMs kill real-time interaction with slow startup times. Cube Sandbox is an open- source execution environment with true hardware level isolation that cold starts in under 60 milliseconds. Built on Rust, VMM, and KVM with memory sharing optimizations, so each sandbox uses under five megabytes of RAM. Run over 2,000 concurrent isolated agents on a single server.

## mercury-agent

[4:04](https://www.youtube.com/watch?v=fPrSypBoWuA&t=244)

- https://github.com/cosmicstack-labs/mercury-agent

AI agents are either locked down corporate rappers or reckless with your machine's permissions. Mercury is the middle ground. A soul-driven AI agent with permission hardened tools built for 247 automation. Run it from the CLI or connect it to a Telegram bot. the soul-driven part. Its personality, taste, and behavior are defined purely in local markdown files you own and control.

## OpenChronicle

[4:29](https://www.youtube.com/watch?v=fPrSypBoWuA&t=269)

- https://github.com/Einsia/OpenChronicle

Open Chronicle is a self-hosted interaction engine that makes your LLM conversations durable. Persistent long-term memory, deterministic tasking, and fully auditable decision trails injected directly into your workflow. Totally provider agnostic. Plug in any model you want. seamlessly supports your local CLI, Discord bots, and MCP servers out of the box.

## claude-desktop-buddy

[4:52](https://www.youtube.com/watch?v=fPrSypBoWuA&t=292)

- https://github.com/vthinkxie/claude-desktop-buddy-esp32-s3-touch-amoled-1.8

Claude's desktop app has a built-in feature to connect to maker devices over Bluetooth low energy. Claude's desktop buddy is custom firmware for the Wave Share ESP32S3 AMOLED board that turns a 1.8 in capacitive touch display into a physical companion for your AI. Sits on your desk, shows realtime permission prompts, recent messages, and chat transcripts.

## Auto-Quant

[5:17](https://www.youtube.com/watch?v=fPrSypBoWuA&t=317)

- https://github.com/TraderAlice/Auto-Quant

Andre Carpathy's auto research pattern applied to crypto trading. Autoquant is an LLM native autonomous research loop built specifically for the freak trade framework. Point it at historical Bitcoin and Ethereum data. It autonomously writes Python strategy code, runs freak trade back tests, analyzes profit, loss, and draw down metrics, then rewrites its own code to optimize the strategy.

## browser-harness-js

[5:42](https://www.youtube.com/watch?v=fPrSypBoWuA&t=342)

- https://github.com/browser-use/browser-harness-js

AI browser agents usually rely on highle helpers like click. The problem every highle helper hides the true power of the browser. A basic click wrapper hides 14 parameters your LLM actually needs for complex humanlike tasks. Browser harnessjs flips that the thinnest possible bridge between your agent and Chrome. No rails, no recipes, pure raw access to the Chrome DevTools protocol.

## alice

[6:08](https://www.youtube.com/watch?v=fPrSypBoWuA&t=368)

- https://github.com/simoncirstoiu/alice

Frigate's AI constantly confuses tree shadows for people. Fixing it means fine-tuning YOLO, but every data set tool wants your home security footage in their cloud. Alice fixes that. 100% offline YOLO data set manager and trainer pulls snapshots from Fri Bounding box editor, auto annotation, full fine-tuning on your machine with ONX export back into Frigate.

## token-dashboard

[6:32](https://www.youtube.com/watch?v=fPrSypBoWuA&t=392)

- https://github.com/nateherkai/token-dashboard

Claude Code writes raw JSONL session transcripts locally. Reading them to figure out your costs is a nightmare. Token dashboard turns those logs into a gorgeous local web UI. Turnbyturn breakdowns, file heat maps showing which code burns the most tokens, cash hit analytics, plus a rule-based tips engine that flags expensive habits and suggests fixes. Pure Python and vanilla JavaScript. Zero telemetry.

## moltui

[6:59](https://www.youtube.com/watch?v=fPrSypBoWuA&t=419)

- https://github.com/kszenes/moltui

Computational chemists working over SSH rely on laggy X11 forwarding or constantly downloading files just to see a molecule. Moltoule brings a high performance molecular viewer to your terminal. Reads XYZ, Molden, Gaussian cube, and Orca GBW files. Uses Unicode Braille characters to render 3D geometries, atomic trajectories, and molecular orbitals directly in your shell.

## git-newspaper

[7:23](https://www.youtube.com/watch?v=fPrSypBoWuA&t=443)

- https://github.com/LordAizen1/git-newspaper

Staring at endless git log outputs is boring. Git newspaper turns your repo's commit history into a literal Victorian broad sheet. Biggest commit becomes the front page headline. Deleted files get obituaries. The most modified file writes a grumbling op-ed complaining about constant changes. Commit sentiment even generates a weather report.

## LeanKG

[7:46](https://www.youtube.com/watch?v=fPrSypBoWuA&t=466)

- https://github.com/FreePeak/LeanKG

Your AI coding assistant burns through thousands of tokens just to understand your project. Lean kg is a local first knowledge graph for your codebase. Built in Rust uses Treesitter to map every import, function call, and dependency. Expose the graph via MCP server and cursor or clawed code queries exactly what they need. Context usage drops from 10,000 tokens to 40.

## cc-statusline

[8:11](https://www.youtube.com/watch?v=fPrSypBoWuA&t=491)

- https://github.com/NYCU-Chung/cc-statusline

Spending hours in clawed code and suddenly hitting a rate limit because you lost track of your context window is brutal. CC status line injects a gorgeous real-time status bar at the bottom of your terminal. current git branch, active AI model, live progress bar of your remaining context window, and real-time session cost in USD. Incredibly lightweight, full 256 color support. Zero guesswork about your API budget.

## expo-agent-spinners

[8:39](https://www.youtube.com/watch?v=fPrSypBoWuA&t=519)

- https://github.com/Eronred/expo-agent-spinners

Expo agent spinners is a collection of 54 terminal style loading indicators built for React Native and Expo. RetroASKI, Braille patterns, arrows, emoji sets, all included. Zero native dependencies, no heavy SVG packages, no bloated UI threads, simple file copy workflow. Drop the component you want into your project and instantly give your app an authentic hacker terminal aesthetic.

## kittyfarm

[9:04](https://www.youtube.com/watch?v=fPrSypBoWuA&t=544)

- https://github.com/dnakov/kittyfarm

Testing a mobile app across different screen sizes means juggling six messy emulator windows. Kittyarm is a Mac OS app that shows multiple iOS simulators and Android emulators side by side in one unified window. Synchronized touch replication. Click, scroll, or type on one device and KittyFarmm replicates that input across every other device simultaneously.

## ui

[9:27](https://www.youtube.com/watch?v=fPrSypBoWuA&t=567)

- https://github.com/pacifio/ui

Constantly reprompting clawed code to make your UI look good is exhausting. Pacifio/UI, also known as Atlas, is the Shad CN for agent UI, a framework agnostic design language built specifically for AI. Drop the clawed skill into your workspace and it instantly teaches your agent to build dense AMOLED black professional interfaces inspired by the compactness of Zed, Versel, and Supabase.

## Vibecode-Cleaner-Fartrun

[9:52](https://www.youtube.com/watch?v=fPrSypBoWuA&t=592)

- https://github.com/ChuprinaDaria/Vibecode-Cleaner-Fartrun

Vibe coding with AI agents means accumulating a messy code base and you burn thousands of tokens just asking the AI to review its own work. Vibe code cleaner fart is a blazing fast rustpowered local code scanner built specifically to clean up AI generated projects. token-free llinter packed with 29 MCP tools covering dead code detection, security checks, save points, and frozen files.

## OpenGuider

[10:18](https://www.youtube.com/watch?v=fPrSypBoWuA&t=618)

- https://github.com/mo-tunn/OpenGuider

Tabbing over to a chatbot just to explain what's on your screen is tedious. OpenGuider is a real-time co-pilot for your entire desktop. An Electron application that actively watches your screen, listens to your voice commands, and guides you through your workflows with crystal clear voice and text actions built with Node.js. JS plug-and-play AI provider integrations and built-in texttospech engines.

## awawausb

[10:44](https://www.youtube.com/watch?v=fPrSypBoWuA&t=644)

- https://github.com/ArcaneNibble/awawausb

Firefox refuses to implement the web USB API, so web- based hardware flashers and crypto wallets force you into Chromium. Wawb brings full web USB support back to Firefox, a browser extension paired with a native messaging stub written in Rust. The Rust Demon talks directly to your USB devices and bridges them into the browser, perfectly mimicking Chrome's implementation.

## codex-voice

[11:09](https://www.youtube.com/watch?v=fPrSypBoWuA&t=669)

- https://github.com/anthnykr/codex-voice

Codex Voice is a native Mac OS menu bar app written in Swift. Blazing fast systemwide voice transcription anywhere on your computer. Hold a global hotkey, speak, and the transcribe text instantly pastes wherever your cursor is. It authenticates directly with your local codec credentials. Zero cloud subscriptions, state-of-the-art AI transcription, near zero latency.

## vigil-tui

[11:33](https://www.youtube.com/watch?v=fPrSypBoWuA&t=693)

- https://github.com/GIN-SYSTEMS/vigil-tui

Ever wondered how much power your rig pulls from the wall? Vigil 2 is a realtime hardware power monitor running entirely in your terminal built with Python and textual reads directly from motherboard and GPU sensors to show actual wattage, temperature, and frequencies. Punch in your electricity rate and it ranks your processes by how much money they're costing you in real time.

## prax-agent

[11:58](https://www.youtube.com/watch?v=fPrSypBoWuA&t=718)

- https://github.com/ChanningLua/prax-agent

AI coding assistants fix the same bug repeatedly because they never remember solving it before. Prag agent runs autonomous test verify fix loops to catch and repair its own errors. And when it detects a correction, it saves the lesson to a persistent cross project memory bank. A bug pattern solved in your React project today makes it smarter in your Python backend tomorrow.

## ActivSpot

[12:23](https://www.youtube.com/watch?v=fPrSypBoWuA&t=743)

- https://github.com/Devvvmn/ActivSpot

Apple's dynamic island, but on Linux. Active Spot is a gorgeous, fully functional dynamic island built natively for Hyperland on Linux. Sits at the top of your screen. Automatically morphs based on system context. Currently playing music with album art. Live Discord voice call timer with mute button. Screen recording indicator. Dual bubble mode where widgets split apart. morphing app launcher with fuzzy search.

## pith

[12:48](https://www.youtube.com/watch?v=fPrSypBoWuA&t=768)

- https://github.com/abhisekjha/pith

Pith is a zero configuration token optimization engine built to slash those costs. Installs four life cycle hooks directly into clawed code that automatically compress your context window behind the scenes. Intelligently intercepts file reads and maintains a persistent lightweight project wiki. Drastically reduces input tokens without losing any of your AI's reasoning.

## 10x

[13:13](https://www.youtube.com/watch?v=fPrSypBoWuA&t=793)

- https://github.com/10x-app-builder/10x

10X lets you describe an iOS app in plain English and get a complete Xcode project out the other end. The AI researches the plan, writes production quality Swift UI code, and scaffolds the project with Xcode gen. The live preview closes the loop. It compiles the code, boots an iOS simulator, and captures screenshots of the running app back into your conversation.

## auto-memory

[13:37](https://www.youtube.com/watch?v=fPrSypBoWuA&t=817)

- https://github.com/dezgit2025/auto-memory

Automemory is a zero dependency Python CLI that gives clawed code cursor and GitHub copilot persistent session memory acts as a strict readonly query layer over your agents local seek light database instead of dumping full chat history and burning 10,000 tokens. It uses progressive full text search to pull exactly the context your agent needs in about 50 tokens.

## ephemera

[14:02](https://www.youtube.com/watch?v=fPrSypBoWuA&t=842)

- https://github.com/vmi-rs/ephemera

Analyzing Windows kernel crash dumps on Linux or Mac usually means spinning up a Windows VM just to run Windbg. Ephera is a Rustbased crash dump CLI with a familiar Windbag style interface running natively on Linux. Loads the dump, maps virtual memory through a VMI backend, auto downloads PTB symbols, drops you into a lightning fast ripple.

## tabula-docs

[14:25](https://www.youtube.com/watch?v=fPrSypBoWuA&t=865)

- https://github.com/Lauwed/tabula-docs

Someone built an API in raw C and needed swagger docs. C has no decorators, so they built the documentation generator themselves. Tabula docs takes a single JSON file describing your API and renders a beautiful interactive documentation site with endpoints, request schemas, and dark mode. No React, no build steps, no node modules. Pure HTML, CSS, and vanilla JavaScript. And that is all 35 projects for GitHub trending today number 32. Everything is linked below. Subscribe if you want this every week. See you in number 33.
