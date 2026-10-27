# Hacker News Show \#4: hippo-memory, react-rewrite, Zerobox, claudraband, Kiyeovo, Raincast, Pegboard

[Watch the original video](https://www.youtube.com/watch?v=mYU9vcvL-yk)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Introduction

[0:00](https://www.youtube.com/watch?v=mYU9vcvL-yk&t=0)

Welcome back to GitHub Awesome. This is the Hacker News Show, episode 4. We've compiled 35 open-source repositories that recently went viral on Hacker News. Let's get into it.

## hippo-memory

[0:13](https://www.youtube.com/watch?v=mYU9vcvL-yk&t=13)

- https://github.com/kitfunso/hippo-memory

Every new AI session starts with amnesia. Hippo memory fixes that with a biologically inspired approach. Memories decay over time with configurable half- lives, but facts the agent uses frequently undergo retrieval strengthening and become permanent. At the end of each session, a sleep-based consolidation phase merges and prunes what the agent learned. Same as human memory during sleep.

## git bayesect

[0:38](https://www.youtube.com/watch?v=mYU9vcvL-yk&t=38)

- https://github.com/hauntsaninja/git_bayesect

Git bisct breaks on flaky tests because it assumes every pass or fail is absolute truth. Git basect fixes that with basian inference. Report whether a test passed or failed on each checkout and a beta bernoli conjugacy trick calculates the probability of which commit introduced the instability. for race conditions, flaky pipelines, and ML evaluations that randomly shift. This makes the problem tractable.

## pg\_textsearch

[1:05](https://www.youtube.com/watch?v=mYU9vcvL-yk&t=65)

- https://github.com/timescale/pg_textsearch

Adding full text search usually means spinning up elastic search or paying for Alolia and maintaining a separate sync pipeline. PGEX search is a PostgreSQL extension that puts BM25 full text search directly inside your database. Memtable architecture and blockmax WAN optimization make top K searches up to 4x faster than native Postgress full text search with proper relevance ranking for term frequency, document length, and word rarity.

## Zerobox

[1:34](https://www.youtube.com/watch?v=mYU9vcvL-yk&t=94)

- https://github.com/afshinm/zerobox

Xerobox is a cross-platform sandbox CLI written in Rust built on the same sandboxing engine that powers OpenAI's codecs. Deny by default policy. No Docker Damon, no VMs. Single binary with 10 milliseconds of overhead using native OS sandboxing. Give your agent a fake API key placeholder. When it makes a network call, Zerobox intercepts it, verifies the destination is approved, and injects the real key into the headers.

## claudraband

[2:02](https://www.youtube.com/watch?v=mYU9vcvL-yk&t=122)

- https://github.com/halfwhey/claudraband

Claude code dies when you close the terminal. Claudra wraps the CLI in T-Mux for true session persistence. Start a massive refactor. Close your laptop. pick up exactly where you left off. An HTTP Damon adds remote headless control and an ACP server lets you drive the agent directly from Zed or Toad. Because sessions persist, your current Claude instance can query older sessions and ask why it made specific architectural decisions last week.

## react-rewrite

[2:31](https://www.youtube.com/watch?v=mYU9vcvL-yk&t=151)

- https://github.com/donghaxkim/react-rewrite

Switching between your code editor and browser to tweak spacing and colors is small friction that compounds across a full day of UI work. React Rewrite injects a visual overlay directly into your running React Dev Server. Click any element, adjust layout, spacing, colors, and typography in a sidebar. Double click text to edit inline. Drag siblings to reorder them on screen.

## Agents Observe

[2:55](https://www.youtube.com/watch?v=mYU9vcvL-yk&t=175)

- https://github.com/simple10/agents-observe

Parallel agent execution produces terminal output that's impossible to follow when something goes wrong. Three agents deep. Agents Observe installs as a clawed plug-in and spins up a real-time web dashboard via Docker. Every hook event visualized as it happens. Hierarchical tree of parent and child agents, real-time tool calls, exact files being touched, searchable and filterable execution output.

## Kiyeovo

[3:21](https://www.youtube.com/watch?v=mYU9vcvL-yk&t=201)

- https://github.com/Realman78/Kiyeovo

Kovo is a peer-to-peer desktop messenger with two completely airgapped network modes. Fast mode uses standard P2P relays for low latency messaging and WebRTC audio and video calls. Anonymous mode routes everything through tour. Separate DHT name spaces and storage scopes mean the two modes share nothing. Offline messages go into encrypted DHT buckets and get delivered the moment the recipient reconnects.

## mtproto.zig

[3:48](https://www.youtube.com/watch?v=mYU9vcvL-yk&t=228)

- https://github.com/sleep3r/mtproto.zig

A telegram proxy written in Zigg that disguises traffic as standard TLS 1.3 HTTPS invisible to deep packet inspection firewalls. OS level TCP desync and packet fragmentation built in. 177 kilobyte binary under 1 megabyte of RAM. Boots in under 10 milliseconds. Zero dynamic memory allocations at runtime. Everything pre-allocated on startup. No garbage collector stalls under load.

## korb

[4:15](https://www.youtube.com/watch?v=mYU9vcvL-yk&t=255)

- https://github.com/yannick-cw/korb

Cororb is a HA hasll CLI wrapping aways APIs, but every command outputs structured JSON specifically so AI agents can drive it. The workflow the creator built dictate groceries to Siri throughout the week. Then unleash an agent that searches Ray for each item, fills the basket, finds a pickup slot, executes checkout, and ticks it off Apple reminders when headless Chrome for AI web browsing renders pixels just so a vision model

## Openbrowser

[4:38](https://www.youtube.com/watch?v=mYU9vcvL-yk&t=278)

- https://github.com/JasonHonKL/Openbrowser

can guess where to click. That's wasteful by design. Open browser throws that architecture out entirely. Instead of rendering pixels, it fetches HTML and parses it into a structured semantic tree. Arya rolls, headings, forms, and interactive elements tagged with action annotations like click, fill, and navigate. Describe a desktop app in plain English.

## Raincast

[5:03](https://www.youtube.com/watch?v=mYU9vcvL-yk&t=303)

- https://github.com/tihiera/raincast

Get a shippable Tory binary out the other end. Raincast generates a React front end with a compiled Rust backend. real file system access, shell commands, and native OS interaction. When the AI writes Rust backend commands, a extraction spins up a proxy CLI binary instantly, giving you hot reloading for both UI and Rust backend simultaneously without waiting for the full Tory compiler on every change.

## Pegboard

[5:33](https://www.youtube.com/watch?v=mYU9vcvL-yk&t=333)

- https://github.com/virpo/pegboard

A handdrawn sketch on paper, a photo, two measurements. 5 minutes later, a 3D printer was producing the parts. Pegboard is a modular 3D printable gear and pegboard system, but the real story is the agents.md file included in the repo. It's explicitly designed so your local AI coding agents can read the CAD parameters and autonomously modify the 3D models.

## TinyOS

[5:57](https://www.youtube.com/watch?v=mYU9vcvL-yk&t=357)

- https://github.com/cmc-labo/tinyos-rtos

Ever wanted to understand exactly how an operating system works under the hood? Tiny OS Artios is a bare metal real-time operating system built from scratch for CortexM microcontrollers under 10 kilobytes for the kernel, minimum 2 kilobyt of RAM, preemptive priority based scheduler with 256 priority levels, custom memory management, and thin POSIX compatibility layers for Pthreads and sockets.

## numa

[6:23](https://www.youtube.com/watch?v=mYU9vcvL-yk&t=383)

- https://github.com/razvandimescu/numa

NUMA is a portable DNS resolver written in Rust, zero external DNS libraries, single 8 megabyte binary. Spin it up and use clean local domains like front-end numa and api.numa instantly. Autogenerates local CAS and TLSerts so you get HTTPS with a green padlock in local dev. It also blocks 400,000 ad and tracker domains systemwide on any network turning your laptop into a portable Pi Hole.

## baremail

[6:50](https://www.youtube.com/watch?v=mYU9vcvL-yk&t=410)

- https://github.com/matt-virgo/baremail

Gmail refuses to load on a bad connection because the interface is multiple megabytes of JavaScript. BareMail is a minimalist Gmail client that fits into 60 kilobytes and permanently caches in your browser. No backend. Your browser talks directly to the Gmail API, so your emails never touch a third party server. Only raw message text travels over the wire. Plug in your Google Cloud API key and your inbox loads on any connection.

## modo

[7:19](https://www.youtube.com/watch?v=mYU9vcvL-yk&t=439)

- https://github.com/mohshomis/modo

Moto is an open- source AI IDE built on VS Code's core with specdriven development. Before writing a single line of code, it generates requirements, design documents, and a step-by-step task checklist. All saved as steering files directly in your project folder. Watch the agent execute tasks one by one. Close the IDE, pick up exactly where you left off tomorrow.

## craft

[7:42](https://www.youtube.com/watch?v=mYU9vcvL-yk&t=462)

- https://github.com/randerson112/craft

Setting up a new C or C++ project means an hour of CMake files, find package fights, and mysterious linking errors. Craft brings cargo style workflow to C and C++. Configure your project with a simple craft.l file. Need a dependency? Type craft add and drop the GitHub URL. It clones the dependency, handles linking, and regenerates CMake completely under the hood. AI coding agents struggle with data analysis

## marimo-pair

[8:06](https://www.youtube.com/watch?v=mYU9vcvL-yk&t=486)

- https://github.com/marimo-team/marimo-pair

because they can't see what's actually in memory. Mimo pair drops your agent directly into a live running Mimo notebook session. It inspects dataf frames in memory, runs scratchpad tests to validate logic, and manipulates notebook UI elements in real time, not a text editor guessing at your data. A stateful, reactive Python environment your agent can actually see and interact with. Buffer and Sendable get expensive fast with per seat and per channel pricing. Bright Bean Studio is a

## brightbean-studio

[8:34](https://www.youtube.com/watch?v=mYU9vcvL-yk&t=514)

- https://github.com/brightbeanxyz/brightbean-studio

self-hostable alternative. Schedule and publish across 12 platforms from one dashboard, including Tik Tok, Threads, Blue Sky, and Mastadon. Visual drag and drop calendar, multi-stage approval workflows via magic links, so clients need zero accounts, and a unified inbox for all DMs and mentions.

## finalrun-agent

[9:00](https://www.youtube.com/watch?v=mYU9vcvL-yk&t=540)

- https://github.com/final-run/finalrun-agent

Final Run is a vision-based QA agent that sees your iOS or Android app the way a human does. Write test flows in plain English or YAML, and it visually navigates the app. clicks buttons and verifies screens without touching a single selector. Installs as a clawed code skill so your agent can build a feature and immediately instruct Final Run to open the emulator and verify it works before the commit goes through.

## ttf-doom

[9:27](https://www.youtube.com/watch?v=mYU9vcvL-yk&t=567)

- https://github.com/4RH1T3CT0R7/ttf-doom

Someone built a 3D raycasting engine inside a true type fonts hinting virtual machine. The font hinting instruction set is touring complete. JavaScript handles WD movement. The font file acts as the GPU. Player coordinates pass in via CSS font variation settings. And the font's bite code does actual 3D ray marching to render the walls.

## mdarena

[9:50](https://www.youtube.com/watch?v=mYU9vcvL-yk&t=590)

- https://github.com/HudsonGri/mdarena

Prompt engineering for clawed code is usually guesswork. You change a rule and hope the output improves. Mina makes it empirical. It fetches your merged pull requests from GitHub, sets up isolated git work trees, injects your custom clawed MD rules, and runs your actual test suite against them. Piest jest cargo whatever you use niclaus worth's Oberon operating system

## OberonSystem3Native

[10:11](https://www.youtube.com/watch?v=mYU9vcvL-yk&t=611)

- https://github.com/rochus-keller/OberonSystem3Native

running bare metal on a $15 Raspberry Pi no Linux underneath no emulation layer flash the SD card plug it in and it boots directly into the Oberon graphical desktop in seconds on a Pi 3B Pi02 or Alamex ESP32 a 1980s operating system designed for minimalism running on modern hardware exactly as intended the kind project that exists purely because someone thought it should. Decision node is a universal shared memory store for all

## DecisionNode

[10:41](https://www.youtube.com/watch?v=mYU9vcvL-yk&t=641)

- https://github.com/decisionnode/DecisionNode

your agents. Record a decision once via CLI. It saves a structured JSON and gets embedded as a vector. Connect any AI tool via MCP and it semantically searches your entire decision history in real time. If your AI tries to contradict a past architectural decision, it gets flagged before the contradiction makes it into the codebase.

## keeper

[11:07](https://www.youtube.com/watch?v=mYU9vcvL-yk&t=667)

- https://github.com/agberohq/keeper

HashiCorp Vault is overkill for most projects. Plain text environment variables are terrifying. Keeper sits right in between, a standalone embedded cryptographic secret store written in Go, Argon 2 ID and XCHA20 poly305 encryption at rest stored in an embedded Bbolt database. Ships as a go library, an HTTP handler, and a CLI with a persistent terminal ripple that leaves zero shell history.

## fast-ebook

[11:34](https://www.youtube.com/watch?v=mYU9vcvL-yk&t=694)

- https://github.com/arc53/fast-ebook

Parsing EPUB files in pure Python is a bottleneck when you're processing thousands of books for a rag pipeline. Fast ebook is a Python EPUB parsing library built entirely in Rust under the hood. Rust's memory safety and multi-threading speed exposed through a clean, frictionless Python API. Drop it into your existing pipeline. Your book ingestion gets dramatically faster.

## zoneless

[11:58](https://www.youtube.com/watch?v=mYU9vcvL-yk&t=718)

- https://github.com/zonelessdev/zoneless

Stripe fees and slow payouts are a real cost center for marketplace businesses at scale. Zoneless is a drop-in replacement with an identical API built by the promptbased founder after spending $10,000 a month on Stripe fees. Payouts settle instantly in 220 plus countries via USDC on Salana. Transaction fees drop to fractions of a cent and it's fully self-custodial, so the code never touches your funds.

## dinobase

[12:26](https://www.youtube.com/watch?v=mYU9vcvL-yk&t=746)

- https://github.com/DinobaseHQ/dinobase

Ask an AI agent a complex business question and it makes dozens of pageionated API calls across Stripe, HubSpot, and Zenesk, blowing out your context window and usually failing anyway. Dinobase syncs all your SAS APIs, databases, and parquet files into a unified schema powered by Duck DB. Your agent writes one SQL query to join data across platforms and gets one clean result back.

## clickhouse-etl

[12:51](https://www.youtube.com/watch?v=mYU9vcvL-yk&t=771)

- https://github.com/glassflow/clickhouse-etl

Moving streaming data from Kafka into ClickHouse at scale is notoriously painful, especially when dealing with duplicates and late arriving events. Click House STL by Glassflow is a stream processing engine purpose-built for this exact problem. A web UI to configure streaming dduplication, temporal stream joins, and exactly once ingestion without writing heavy stream processing code from scratch.

## skrun

[13:16](https://www.youtube.com/watch?v=mYU9vcvL-yk&t=796)

- https://github.com/skrun-dev/skrun

Scrum is a functions as a service platform for AI capabilities. Take any agent skill, deploy it, and any application can trigger it via a simple post run. No lang chain infrastructure duct tape. Built-in stateful memory, MCP server support, and automatic multimodel fallbacks across Enthropic, OpenAI, and Mistral.

## tui-use

[13:37](https://www.youtube.com/watch?v=mYU9vcvL-yk&t=817)

- https://github.com/onesuper/tui-use

Claude and Cursor fail completely when interacting with interactive terminal programs like a Python, ripple, GDB, or Vim. Standard shell commands can't handle programs that expect a human at the keyboard. 2i uses browser use for the terminal, runs PTY output through a headless XTerm emulator, strips all the antsy noise, and gives your AI agent a 20 plus command interface to type, navigate, and interact with complex 2I apps without brittle sleepbased polling.

## multigres-operator

[14:07](https://www.youtube.com/watch?v=mYU9vcvL-yk&t=847)

- https://github.com/multigres/multigres-operator

Multigress opensourced their Kubernetes operator, automated topology orchestration, pod level life cycle management, and drain safe zero downtime rolling updates. Built-in PG back rest for point in time recovery and deep observability via open telemetry distributed tracing. Production grade Postgress SQL cluster management on Kubernetes.

## go-bt

[14:29](https://www.youtube.com/watch?v=mYU9vcvL-yk&t=869)

- https://github.com/rvitorper/go-bt

Behavior trees are the industry standard for AI decision-m but most libraries are bloated or built for C++ and Python. Go BT is a minimalist behavior tree implementation built specifically for Go. just the core composite nodes, decorators, and selectors you need to build modular reactive AI logic. Clean datadriven decision trees without the finite state machine spaghetti and without bloating your binaries.

## turbovec

[14:56](https://www.youtube.com/watch?v=mYU9vcvL-yk&t=896)

- https://github.com/RyanCodrai/turbovec

Most vector search engines require a heavy training phase. Every time your data changes, you retrain the entire index. Turbo eliminates that completely. A Rust implementation of Google's Turbo Quant paper specializing in data oblivious vector compression. No training phase ever. Compresses highdimensional embeddings down to two to four bits per coordinate. Up to 16x compression ratio with nearperfect recall. \[music\]
