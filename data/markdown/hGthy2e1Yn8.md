# Hacker News Show \#5: wuphf, libretto, GOModel, plain, tolaria, langalpha, holos, superhq, obscura

[Watch the original video](https://www.youtube.com/watch?v=hGthy2e1Yn8)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Introduction

[0:00](https://www.youtube.com/watch?v=hGthy2e1Yn8&t=0)

What is up developers? Welcome back to GitHub awesome. This is the Hacker News Show, episode 5. We tracked down 34 repositories that took over Hacker News lately. Let's get into it.

## wuphf

[0:13](https://www.youtube.com/watch?v=hGthy2e1Yn8&t=13)

- https://github.com/nex-crm/wuphf

Someone built Woophf.com from the office and it actually works and it just exploded on HackerNews. Woopf is an open-source multi-agent platform that spins up a virtual office. CEO, PM, engineers, and designers collaborate, debate, and ship autonomously. A getback shared brain wiki keeps every agent in sync. Telegram bridge lets you DM your AI team from your phone. Dumping raw

## libretto

[0:37](https://www.youtube.com/watch?v=hGthy2e1Yn8&t=37)

- https://github.com/saffron-health/libretto

HTML into an agent's context window is expensive and breaks on every layout change. Labretto is a token efficient browser CLI for coding agents that listens to raw network requests while navigating and autonomously reverse engineers the hidden internal APIs underneath. Your agent converts a slow UI clicking script into a direct API integration in seconds.

## no-mistakes

[1:01](https://www.youtube.com/watch?v=hGthy2e1Yn8&t=61)

- https://github.com/kunchenguid/no-mistakes

Vibe coding with AI looks fine until you realize the code is full of edge case bugs, missing tests, and broken lints. No mistakes moves your AI to the git push boundary. Type git push no mistakes and instead of hitting GitHub, the code is intercepted by a local Damon. spins up a disposable work tree, runs pre-commit hooks, and forces an AI agent into a strict QA loop until zero errors.

## GOModel

[1:26](https://www.youtube.com/watch?v=hGthy2e1Yn8&t=86)

- https://github.com/ENTERPILOT/GOModel

Switching between LLM providers usually means rewriting SDK code every time. Go model is a go gateway that accepts standard OpenAI format requests and translates them to Claude, Gemini, or Chat GPT in the background. One integration, every provider. The two-layer cache with semantic vector search is the standout feature. Different wording, same meaning, instant cash hit, zero upstream calls for semantically duplicate requests.

## paniclock

[1:54](https://www.youtube.com/watch?v=hGthy2e1Yn8&t=114)

- https://github.com/paniclock/paniclock

Touch ID is convenient until you're at a border crossing where a fingerprint can be legally compelled and a memorized password often can't. Panic lock is a lightweight menu bar utility that instantly disables Touch ID and forces password only unlock. Trigger it with a hotkey or autot trigger the moment you close your laptop. one keystroke between biometric access and something a lawyer might actually protect.

## plain

[2:21](https://www.youtube.com/watch?v=hGthy2e1Yn8&t=141)

- https://github.com/dropseed/plain

Most Python frameworks were designed for human developers and force AI agents to learn thousands of lines of implicit conventions. Plane is a Django fork reshaped for the agent era. Native markdown guardrails prevent cla or cursor from making framework mistakes. And built-in skills like /plane optimize and plane upgrade mean the agent already understands the workflow before you write a line of code.

## langalpha

[2:48](https://www.youtube.com/watch?v=hGthy2e1Yn8&t=168)

- https://github.com/ginlix-ai/langalpha

Standard AI agents analyzing financial data dump raw JSON straight into context and burn through tokens before any actual reasoning starts. Lang Alpha uses programmatic tool calling instead. The agent drops into a sandboxed workspace, writes Python to pull market data, crunches numbers with pandas in the background, and returns only the final results to the LLM context.

## tolaria

[3:12](https://www.youtube.com/watch?v=hGthy2e1Yn8&t=192)

- https://github.com/refactoringhq/tolaria

Carpathy's LLM wiki idea turned into a productionready app. Taria is an offline first knowledge base for Mac OS and Linux. Plain markdown files in a folder, get backed with autosync, notion style feel, total file ownership. The killer feature is the MCP server registration. Claude Code and Open Claw read, search, and update your knowledge base directly while you work. Your second brain accessible to every agent in your workflow.

## omi

[3:40](https://www.youtube.com/watch?v=hGthy2e1Yn8&t=220)

- https://github.com/BasedHardware/omi

Tired of waiting for Humane AI Pin or Rabbit R1 to work? OMI is an open-source AO AI wearable ecosystem, a second brain that listens to conversations, transcribes in real time, and generates meeting summaries automatically. The repo contains the entire stack. C++ firmware for custom NRF and ESP32S3 wearables, Flutter mobile app, Python fast API backend, native desktop clients.

## holos

[4:05](https://www.youtube.com/watch?v=hGthy2e1Yn8&t=245)

- https://github.com/zeroecco/holos

Tired of wrestling with libvert XML or vagrance Ruby scripts? Holos is docker compose for Kimu KVM virtual machines? Just blew up on hacker news? Skips the libvert damon entirely. Define your VM stack and clean YAML. Holos drives Kimu directly. Rootless socket multiccast L2 networking GPU pass through as a first class primitive SSH health checks before booting the next VM.

## superhq

[4:29](https://www.youtube.com/watch?v=hGthy2e1Yn8&t=269)

- https://github.com/superhq-ai/superhq

Super HQ runs every agent inside its own isolated microVM on Mac OS using Apple's virtualization framework. Your projects mount into the VM, but file writes redirect to a temporary overlay, never touching your host. When the agent finishes, you get a unified diff and explicitly accept changes before anything syncs back. An O gateway injects credentials into API requests on the fly, so the AI never sees your raw keys.

## agent-vault

[4:57](https://www.youtube.com/watch?v=hGthy2e1Yn8&t=297)

- https://github.com/Infisical/agent-vault

In Physical's agent vault is an HTTP credential proxy using credential brokering. Give your agent a scoped HTTPS proxy URL instead of an API key. When it calls Stripe or GitHub, Agent Vault intercepts traffic locally, injects your real encrypted key at the network layer, and forwards upstream. The agent never sees the secret. If hijacked, there's nothing to exfiltrate.

## smolvm

[5:21](https://www.youtube.com/watch?v=hGthy2e1Yn8&t=321)

- https://github.com/smol-machines/smolvm

Letting an AI agent run untrusted code on your host is a massive security risk. Small VM spins up hardware isolated Linux microVMs with sub-second cold starts using libcrun on Apple's hypervisor framework or KVM on Linux. Elastic memory via Versio balloons means the host only commits the RAM the guest actually uses. Spawn dozens of parallel sandboxes without crashing your machine. Headless Chrome is 200 plus megabytes of RAM and seconds to start for every agent request.

## obscura

[5:46](https://www.youtube.com/watch?v=hGthy2e1Yn8&t=346)

- https://github.com/h4ckf0r0day/obscura

Obscura is a headless browser engine written in Rust that speaks Chrome DevTools protocol. So, it's a drop-in replacement. 30 megabytes per tab, boots in under 80 milliseconds, built-in stealth mode that bypasses bot detection and defeats Cloudflare turnstyle.

## broccoli

[6:10](https://www.youtube.com/watch?v=hGthy2e1Yn8&t=370)

- https://github.com/besimple-oss/broccoli

Automating your issue backlog usually means handing your private codebase to a SAS. Broccoli turns linear tickets into shipped GitHub PRs. Assign a ticket to the bot and it autonomously plans the architecture, writes the implementation using claude or codecs and opens a reviewable PR. Also acts as an automated reviewer, leaving actionable comments and pushing fixed commits when asked.

## context-engineering

[6:35](https://www.youtube.com/watch?v=hGthy2e1Yn8&t=395)

- https://github.com/outcomeops/context-engineering

Context engineering treats organizational knowledge as a versioned engineering artifact. Ingests your architecture decision records, codebase patterns, and docs into a strict operating manual for the AI. Adds an enforcement layer that autonomously validates every line against your standards and self-corrects drift before a human sees the PR. Stops AI coding assistance from generating generic code that violates your internal architecture.

## fakecloud

[7:04](https://www.youtube.com/watch?v=hGthy2e1Yn8&t=424)

- https://github.com/faiscadev/fakecloud

Local stack gating the free tier behind accounts and tokens was the kind of move that guarantees a fork. Fakecloud is a drop-in local AWS emulator written in Rust. No accounts, no tokens ever. 19 megabyte binary boots in half a second. 100% conformance across 23 services validated against 59,000 plus generated tests. Real cross-ervice wiring. So S3 uploads actually trigger local lambdas.

## macmind

[7:31](https://www.youtube.com/watch?v=hGthy2e1Yn8&t=451)

- https://github.com/SeanFDZ/macmind

Someone trained a transformer in HyperTalk, the scripting language Apple shipped with HyperCard in 1987. MacMind is a 1,216 parameter single layer transformer with full self attention and back propagation trained on an actual Macintosh SE30 to learn the bit reversal step of the FFT. The point it's making, the same process that trains GPT4 ran on a 1989 Hypercard stack.

## VTCode

[7:58](https://www.youtube.com/watch?v=hGthy2e1Yn8&t=478)

- https://github.com/vinhnx/VTCode

Vibe coding breaks fast when your agent runs a destructive command by accident. VTC code is a semantic AI coding agent written in Rust that runs natively in the terminal. Hooks into OpenAI, Anthropic or local Alama models. Human in the loop shell safety physically stops destructive commands before they execute. Automatic API failover reroutes to Gemini or Open Router the moment your primary provider goes down.

## kontext-cli

[8:25](https://www.youtube.com/watch?v=hGthy2e1Yn8&t=505)

- https://github.com/kontext-dev/kontext-cli

Pasting longived API keys into NV files or AI chat windows is a massive security mistake. Context-le is a security token service for AI agents. Give your agent a placeholder instead of a god mode key. Run context start and an RFC 8693 token exchange fetches short-lived scoped credentials and injects them into your agents memory. The real secret never hits disk. Session ends, credentials expire instantly. Nothing to revoke.

## yantrikdb-server

[8:54](https://www.youtube.com/watch?v=hGthy2e1Yn8&t=534)

- https://github.com/yantrikos/yantrikdb-server

Most AI memory systems dump embeddings and hope the right ones surface. Yantric DB models human memory instead. Memories decay over time. Similar ones consolidate automatically and contradictions get flagged instantly. Selective recall keeps queries around 70 Toni tokens even with 5,000 memories stored. Built-in Rust ships as a single binary with an MCP server for clawed code included.

## doors

[9:20](https://www.youtube.com/watch?v=hGthy2e1Yn8&t=560)

- https://github.com/doors-dev/doors

Doors is a serverdriven UI framework that lets you build stateful reactive web apps entirely in Go. The framework handles state sync between server and browser over an HTTP3 ready protocol. Zero public API endpoints. Reactive primitives, parallel rendering, custom concurrency engine. Bundle the entire stack into one deployable binary. Full stack web development without leaving Go.

## leaf

[9:46](https://www.youtube.com/watch?v=hGthy2e1Yn8&t=586)

- https://github.com/RivoLink/leaf

Reading raw markdown in the terminal with cat is brutal. Leaf is a blazing fast terminal markdown previewer in Rust. Interactive table of content sidebar syntax highlighting latte equations rendered in Unicode. Watch mode hot reloads in 250 millise when you save in neovim. Pipe cloud outputs straight in and read it with perfect formatting. AI agents produce a lot of markdown.

## marky

[10:08](https://www.youtube.com/watch?v=hGthy2e1Yn8&t=608)

- https://github.com/GRVYDEV/marky

Reading it raw in the terminal is genuinely unpleasant. Marky is a lightweight desktop markdown viewer built for exactly this. Type marquee in a file name and an Obsidian style workspace opens. As your agent writes to disk, it live reloads instantly. Command K. Fuzzy search, shaky syntax highlighting, mermaid diagrams, KEX math.

## xtrace-sdk

[10:31](https://www.youtube.com/watch?v=hGthy2e1Yn8&t=631)

- https://github.com/XTraceAI/xtrace-sdk

Plain text embedding sitting unencrypted in cloud vector databases is a quiet privacy risk most rag pipelines just accept. X-trace embeds locally, encrypts text with AES 256, and encrypts vectors with Pier homorphic encryption. The server runs nearest neighbor similarity search directly on the encrypted vectors without ever decryting them. Results come back, your machine decrypts locally. Keys never leave your laptop.

## backlit-kbd

[11:00](https://www.youtube.com/watch?v=hGthy2e1Yn8&t=660)

- https://github.com/itsmeadarsh2008/backlit-kbd

Pop-up notifications are easy to miss. A keyboard that physically flashes is harder to ignore. Backlit KBD is a Python package that programmatically controls your Linux laptop's keyboard backlight. Adjust brightness, create custom blink patterns, script your keyboard to flash when a website goes down, or blink when CI/CD fails, notification system that bypasses your eyes entirely.

## sostactic

[11:25](https://www.youtube.com/watch?v=hGthy2e1Yn8&t=685)

- https://github.com/mmaaz-git/sostactic

Lean for's built-in tactics hit a wall on complex polomial inequalities. Liner and positivity just fail and leave you stuck. So, Stactic offloads the hard cases to a Python backend running CVXPI, solves the problem as a convex semi-definite program, exactifies the numerical result, and feeds a mathematically sound proof back into Lean. Global non- negativity proofs and algebraic inequalities that native Lean can't handle handled.

## cartoon-studio

[11:53](https://www.youtube.com/watch?v=hGthy2e1Yn8&t=713)

- https://github.com/Jellypod-Inc/cartoon-studio

Cartoon Studio is an open-source electron app that automates 2D animation end to end. Drop SVG characters onto a backdrop. Type your script. Assign AI voices. It generates audio via Jelly Pod Speech SDK. Calculates word timestamps. Lip syncs character mouth cues with hyperframes and renders to MP4. Local first zero telemetry. Bring your own API keys.

## hiraeth

[12:16](https://www.youtube.com/watch?v=hGthy2e1Yn8&t=736)

- https://github.com/SethPyle376/hiraeth

Here is an open source local AWS emulator written in Rust for lightning fast integration testing. An alternative to local stack. First release targets SQS. Signed AWS SDK requests hit a local endpoint Q state stored offline in SQLite. Four megabyte docker image instant startup full SIG v4 off plus a debug friendly web UI to inspect cues and messages.

## gova

[12:40](https://www.youtube.com/watch?v=hGthy2e1Yn8&t=760)

- https://github.com/NV404/gova

Crossplatform desktop development means electron bloat or C++ tool chain pane. Gova builds native desktop apps for Mac OS, Windows and Linux from a single Go codebase. No JavaScript runtime, no embedded browser, pure declarative ghostrs that compile to a single static binary with access to real native platform features like Mac OS system dialogues. Hot reload via the Govadeev CLI with UI state preserved between reloads.

## sfsym

[13:07](https://www.youtube.com/watch?v=hGthy2e1Yn8&t=787)

- https://github.com/yapstudios/sfsym

SFSIM is a CLI that exports SF symbols as perfect SVG, PDF or PNG files, reaches into private Mac OS APIs of the native symbol renderer, and extracts bit perfect vector paths directly from the OS. All 8,300 plus symbols stay current automatically. Every subcomands JSON output, perfect for agent tool sets, eliminates the tedious open the Mac app and click copy image as workflow.

## ctx

[13:33](https://www.youtube.com/watch?v=hGthy2e1Yn8&t=813)

- https://github.com/dchu917/ctx

Juggling multiple tasks in a single clawed code session means context drift. The agent starts forgetting earlier work as newer conversation pushes it out. CTX introduces isolated work streams with exact transcript binding. Branch your AI's memory safely without it jumping to the newest chat on disk. Local SQLite zero API keys. CTX curate opens a Vim keybinding interface to scroll memories, pin important context, and delete junk.

## remoto.el

[14:01](https://www.youtube.com/watch?v=hGthy2e1Yn8&t=841)

- https://github.com/agzam/remoto.el

Cloning a repo just to read two files is wasteful. Remoto.el lets you browse remote GitHub repositories natively inside Emacs without cloning. Paste a GitHub URL using your standard find file shortcut and you're in a fully functional dire buffer. Instead of Tramp's remote shell approach, it talks directly to the GitHub REST API via the GH CLI, fetches the entire recursive directory tree in one call, and caches it.

## YourMemory

[14:29](https://www.youtube.com/watch?v=hGthy2e1Yn8&t=869)

- https://github.com/sachitrafa/YourMemory

Most AI memory systems accumulate forever. Stale preferences, contradictions, and noise that never gets cleaned up. Your memory applies the Ebinghouse forgetting curve to LLM memory. Failures fade in 11 days. Facts in 24. Strategies in 38. Importance slows the decay. Frequent recalls strengthen memories. Anything below threshold gets pruned automatically.
