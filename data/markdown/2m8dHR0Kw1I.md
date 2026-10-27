# Hacker News Show \#7: forge, adam, phosphene, deltax, docx-editor, gobee, volt, e2a, kanwas, superhq

[Watch the original video](https://www.youtube.com/watch?v=2m8dHR0Kw1I)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Introduction

[0:00](https://www.youtube.com/watch?v=2m8dHR0Kw1I&t=0)

Welcome back to GitHub Awesome. This is Hacker News show number seven. 35 open- source projects that have recently been trending on Hacker News. Let's get into it.

## forge

[0:12](https://www.youtube.com/watch?v=2m8dHR0Kw1I&t=12)

- https://github.com/antoinezambelli/forge

Small local models fail constantly at tool calling. Forge fixes that without switching to a bigger model. A Python reliability layer that takes an 8B model from 38 to 99% on multi-step agenic workflows using rescue parsing retry nudges and VRAMmaware context compaction. Run it as a workflow runner, drop it in as middleware or spin up its OpenAI compatible proxy and point or continue straight at it. Atom is an AI agent library written in C. And the

## adam

[0:40](https://www.youtube.com/watch?v=2m8dHR0Kw1I&t=40)

- https://github.com/sqliteai/adam

pitch is basically seek light but for agents. One header file, one static library. Full agent loop with tool calling, long-term memory, voice, streaming, sessions, multi- aent, research mode, self-evolving loops. Embeds directly into seeite and postgrsql as a SQL extension. So you can run select atom ask how many users signed up last month against your own data.

## phosphene

[1:06](https://www.youtube.com/watch?v=2m8dHR0Kw1I&t=66)

- https://github.com/kageroumado/phosphene

Phosphine is a video wallpaper engine for Mac OS Tahoe that plugs directly into system settings. Your MP4s andovs show up right next to Apple's built-in aerials in the wallpaper picker because it uses the same private framework Apple uses. Gateless looping per display selections, power playback that backs off on battery or thermal pressure, smooth lock screen fade.

## deltax

[1:31](https://www.youtube.com/watch?v=2m8dHR0Kw1I&t=91)

- https://github.com/xataio/deltax

Storing time series data in Postgress usually means reaching for time scale DB which keeps changing its license terms and worrying everyone. Deltax from Zada is a fresh open-source take. It's a Postgres extension built for time series workloads. Efficient ingestion, compression, and fast queries over timestamped data all inside the Postgres you already run. Letting users edit Word documents inside your web app usually means embedding a clunky iframe or paying for a heavy commercial editor.

## docx-editor

[1:54](https://www.youtube.com/watch?v=2m8dHR0Kw1I&t=114)

- https://github.com/eigenpal/docx-editor

DocX editor is the open- source React component for it. Drop it in, load a real DOCX file, and your users get true Wizzywig editing right in the browser with the formatting preserved on the way back out. If your product touches Word documents at all, this saves you from a very painful build.

## files.md

[2:22](https://www.youtube.com/watch?v=2m8dHR0Kw1I&t=142)

- https://github.com/zakirullin/files.md

If you're tired of note apps that make you feel productive without actually thinking, files.mmd is the antidote. It runs your entire life on plain markdown files right in your browser. You do not even need to spin up a server. It even has a built-in chatbot so you can text yourself notes straight from your messenger. The author and his friends have used this exact setup for 5 years. No AI workflows, no plugins, just thinking, writing, connecting ideas.

## gobee

[2:51](https://www.youtube.com/watch?v=2m8dHR0Kw1I&t=171)

- https://github.com/boratanrikulu/gobee

Writing ebpf programs in go today means juggling psyllium ebpf and bpf2 go handwriting the cside and gluing it all together yourself. Goi is an endto-end toolkit for doing Linux ebpf entirely in go filling the BPF program piece that the existing libraries leave you to figure out alone. If you want to build kernel level observability networking or tracing tools and you'd rather stay in Go than drop into C, this is the missing link.

## volt

[3:20](https://www.youtube.com/watch?v=2m8dHR0Kw1I&t=200)

- https://github.com/elixir-volt/volt

Phoenix is a joy to work in until you need a real front-end build step and suddenly you're dragging Node, npm, and a Vite config into your Elixir project. Volt removes Node from the picture entirely. It's an Elixir native front-end build tool with a dev server, hot module reloading, and production builds for JavaScript, TypeScript, View, single file components, and CSS.

## e2a

[3:44](https://www.youtube.com/watch?v=2m8dHR0Kw1I&t=224)

- https://github.com/Mnexa-AI/e2a

You want your AI agent to receive email and act on it, but raw inbound mail is a spoofing and fishing nightmare. E2A is the gateway built for exactly that. It verifies every inbound message with SPF and DKIM before your agent ever sees it. Signs delivery with HMAC so your agent can trust the payload, then fans messages out over web hooks or websocket.

## whichllm

[4:07](https://www.youtube.com/watch?v=2m8dHR0Kw1I&t=247)

- https://github.com/Andyyyy64/whichllm

You want to run a local LLM, but have no idea which ones actually fit your hardware. which LLM fixes that with one command. It autodetects your GPU, RAM, and VRAMm, then pulls live model rankings from hugging face with real benchmark scores. Run witchum run and it downloads the best fit and drops you straight into a chat. Your teammates

## kanwas

[4:28](https://www.youtube.com/watch?v=2m8dHR0Kw1I&t=268)

- https://github.com/kanwas-ai/kanwas

know the project context. Your AI agents don't. So, you keep reexplaining the same background in every prompt. Conwest is a shared context board that fixes that for both at once. Humans and agents read from and write to the same board, so the agent always has the current state of the project, and your team can see what the agent knows and did.

## superhq

[4:52](https://www.youtube.com/watch?v=2m8dHR0Kw1I&t=292)

- https://github.com/superhq-ai/superhq

Running autonomous AI agents on your machine means trusting them with your file system, your network, and your secrets. Super HQ wraps that risk in a sandbox. It's an AI agent orchestration platform where agents run in isolated environments so a misbehaving or jailbroken agent can't reach beyond its box. Built in Rust with GPUi, the same UI framework behind the Z editor, so it's fast and native.

## let-go

[5:18](https://www.youtube.com/watch?v=2m8dHR0Kw1I&t=318)

- https://github.com/nooga/let-go

Closure gives you a beautiful lisp, but it drags the whole JVM along with it. Let Go is almost Closure rebuilt on top of Go instead. You get the lisp you love, a ripple and macros, but running on the Go runtime with access to the Go ecosystem underneath. From Nouga, who's been quietly hacking on this for a while. If you've ever wanted Closure's expressiveness without the JVM startup tax, this is a fascinating one to play with. You built a solid backend API and now you're staring at weeks of front-end work just to make it usable. UGen collapses that.

## uigen

[5:45](https://www.youtube.com/watch?v=2m8dHR0Kw1I&t=345)

- https://github.com/darula-hpp/uigen

Point it at your back end and it generates a working UI on top of it. So your endpoints become an actual product people can click through instead of a Postman collection. Still early, but the premise is exactly what every backendheavy solo dev wishes existed.

## InsForge

[6:10](https://www.youtube.com/watch?v=2m8dHR0Kw1I&t=370)

- https://github.com/InsForge/InsForge

Your coding agent can write a slick front end, then stalls the moment it needs a real backend. INSForge is an all-in-one open-source back-end platform built for Agentic coding, database, O, storage, compute, hosting, and an AI gateway. All exposed through an MCP server. Your agent can drive directly. So Claude code or cursor doesn't just generate UI. It provisions the database, wires up O, and ships a full stack app end to end.

## sx

[6:38](https://www.youtube.com/watch?v=2m8dHR0Kw1I&t=398)

- https://github.com/sleuth-io/sx

You've got skills, prompts, and configs for claude code, cursor, and copilot scattered across a dozen repos with no way to install or update any of them cleanly. SX is a package manager for AI coding assistance. Install, version, and share skills and configs across every harness with one tool, the same way npm or apt handles software packages.

## engine

[7:01](https://www.youtube.com/watch?v=2m8dHR0Kw1I&t=421)

- https://github.com/orch8-io/engine

Temporal is the gold standard for durable workflows, but running it means standing up Cassandra, Elastic Search, and JVM workers, which is a full-time ops job on a small team. Orgate keeps the good parts and drops the cluster. It's a self-hosted workflow engine in Rust. Define workflows as composable JSON, and every step either completes, retries, or lands in a dead letter Q.

## statewright

[7:25](https://www.youtube.com/watch?v=2m8dHR0Kw1I&t=445)

- https://github.com/statewright/statewright

Give an AI agent a multi-step task and it'll happily skip a step, repeat one, or do them in the wrong order because nothing stops it. State is a state machine guard rail for AI agents. You define the legal states and transitions and the agent can only move through your workflow in ways you've allowed. No jumping straight to deploy before test passes. No looping forever.

## adamsreview

[7:50](https://www.youtube.com/watch?v=2m8dHR0Kw1I&t=470)

- https://github.com/adamjgmiller/adamsreview

A single AI code review pass catches the obvious stuff and misses everything else. Adam's review is a multi-lens code review pipeline for claude code. A deep review pass using claude or codecs. An autofix loop that actually applies and rechecks the fixes. An interactive walkthrough so you understand every change. An external finding injection so you can feed in results from other tools and have them addressed too.

## nibble

[8:17](https://www.youtube.com/watch?v=2m8dHR0Kw1I&t=497)

- https://github.com/glouw/nibble

Most code that emits LLVM IR leans on the full LLVM C++ API, a huge dependency that drags in everything. Nibble does it the hard way on purpose. It generates LLVM with no Malo and no external dependencies at all, just lean self-contained code. It's the kind of project you study to actually understand how a compiler backend talks to LLVM stripped down to the bare metal.

## skrun

[8:42](https://www.youtube.com/watch?v=2m8dHR0Kw1I&t=522)

- https://github.com/skrun-dev/skrun

You've written a great agent skill and the only way to use it is inside your coding agent. Screw sets it free. It turns any agent skill into an HTTP API. Point it at your skill and you get a post/run endpoint you can call from anywhere, any app, any backend, any language. Multimodel, so you pick the LLM behind it. Stateful so it remembers across calls and fully open source.

## pii-shield

[9:07](https://www.youtube.com/watch?v=2m8dHR0Kw1I&t=547)

- https://github.com/aragossa/pii-shield

PII Shield is a zero code Kubernetes sidecar that strips PII from your logs before they leave the pod. Add the Helm chart, label your deployment, and it injects a DRO list sidecar automatically. No app code changes. It catches known patterns with custom regex and catches secrets it doesn't know about via entropy analysis, flagging anything above a Shannon entropy score of 3.6.

## php-fts

[9:32](https://www.youtube.com/watch?v=2m8dHR0Kw1I&t=572)

- https://github.com/olivier-ls/php-fts

Adding search to a PHP site usually means standing up Elastic Search or installing a native extension your shared host won't allow. PHP JFTS is a full text search engine in pure PHP. No extensions, no external services, no dependencies at all. Drop it in, index your content, and run real relevance rank search on plain shared hosting where you can't install anything.

## hsrs

[9:56](https://www.youtube.com/watch?v=2m8dHR0Kw1I&t=596)

- https://github.com/harmont-dev/hsrs

You've got a Haskell codebase and a Rust library you want to call into, but the foreign function interface between them is a manual type unsafe minefield. HSRS fixes that. It provides type- safe bindings between Haskell and Rust. So you can call Rust from Haskell without handwriting fragile FFI glue and praying the types line up at runtime. Two languages that both care deeply about correctness, finally talking to each other safely.

## keeper

[10:24](https://www.youtube.com/watch?v=2m8dHR0Kw1I&t=624)

- https://github.com/agberohq/keeper

Your API keys and database passwords are sitting in plainext.env files getting committed to git and shared over Slack. Keeper gives them a real home. It's a simple secure secrets manager written in Go. Store credentials encrypted. Retrieve them from the CLI and every access gets written to an audit log so you know what touched what. No sprawling vault cluster to operate, just one small binary that does the job.

## nfsdiag

[10:51](https://www.youtube.com/watch?v=2m8dHR0Kw1I&t=651)

- https://github.com/lsferreira42/nfsdiag

NFS mounts fail in the most maddening ways. Stale handles, silent permission mismatches, hangs with no error message. NFS Diag is the doctor you call. Point it at your NFS setup and it runs through the usual suspects. Connectivity, mount options, permissions, version mismatches, and the small misconfigurations that cost you an afternoon of guessing.

## id-agent

[11:14](https://www.youtube.com/watch?v=2m8dHR0Kw1I&t=674)

- https://github.com/vostride/id-agent

Standard UIDs are 36 characters of hex that your AI agent has to read, reason over, and repeat back, burning tokens every single time. ID agent fixes that. It generates compact, token efficient IDs designed for how LLM actually tokenize text. So the same unique identifier costs far fewer tokens to carry through a conversation. When your agent juggles hundreds of records, those savings stack up fast in both cost and context budget.

## agent-beacon

[11:42](https://www.youtube.com/watch?v=2m8dHR0Kw1I&t=702)

- https://github.com/Asymptote-Labs/agent-beacon

Running AI agents locally means trusting they're doing what you think they're doing with no way to verify. Beacon is an open-source endpoint telemetry layer that instruments local AI agents and surfaces what they touch, what they call, and how they behave. Think of it as observability and an audit trail for the agents on your own hardware instead of a black box you just hope is behaving.

## stage-cli

[12:08](https://www.youtube.com/watch?v=2m8dHR0Kw1I&t=728)

- https://github.com/ReviewStage/stage-cli

When your AI agent makes 40 file changes in one go, reviewing them as a single giant diff is overwhelming. Stage Cly breaks it into chapters. It's a local code review viewer that splits an agent's changes into small individual logical pieces. You read one at a time, like chapters in a book instead of one wall of red and green. Works with any AI agent. Runs entirely on your machine.

## posthorn

[12:33](https://www.youtube.com/watch?v=2m8dHR0Kw1I&t=753)

- https://github.com/craigmccaskill/posthorn

You wire your app directly to Postmark. Then a year later you want to switch to Rezend and now you're rewriting email code in five services. Posttor Horn fixes that. It's a self-hosted sit between your apps and whatever transactional mail provider you use. Postmark resend mail gun AWS SCES or plain SMTP. Three ways to send an HTTP form endpoint, an HTTP API or SMTP.

## ktx

[12:58](https://www.youtube.com/watch?v=2m8dHR0Kw1I&t=778)

- https://github.com/Kaelio/ktx

Point an AI agent at your data warehouse and ask a question and it'll confidently write a query against columns that don't mean what it thinks they mean. KTX gives it the missing context. It's a context layer for analytics agents. It captures your schema, metric definitions, table relationships, and the business meaning behind your data, then feeds that to the agent before it writes a single line of SQL.

## fungible

[13:23](https://www.youtube.com/watch?v=2m8dHR0Kw1I&t=803)

- https://github.com/tomfunk/fungible

Mint shut down. Every replacement wants a subscription and you'd rather not hand a startup your bank login anyway. Fungeible is a TUI for personal finance. Sync accounts through Plaid. Import CSVs from anywhere and track your spending without leaving the keyboard. There's a built-in AI assistant for asking questions about your money and an MCP server so your own coding agent can query your finances, too.

## skills-for-humanity

[13:49](https://www.youtube.com/watch?v=2m8dHR0Kw1I&t=829)

- https://github.com/human-avatar/skills-for-humanity

Your coding agent reaches for the first plausible answer instead of reasoning its way to the right one. Skills for humanity fixes that packages structured reasoning methodologies from history's most rigorous thinkers as clawed skills. Instead of vague think stepbystep prompts, your agent gets actual disciplined methods. How to decompose a problem, where to look for hidden assumptions, how to test a claim before trusting it.

## Spec-Driven-Development

[14:17](https://www.youtube.com/watch?v=2m8dHR0Kw1I&t=857)

- https://github.com/FredAntB/Spec-Driven-Development

Hand an AI agent a vague prompt and you get vague code. Specdriven development flips the order. Instead of letting Claude code or C-pilot improvise, you write a clear spec first. What you're building, the constraints, the acceptance criteria, and the agent builds against that contract. This repo gives you the structure to do it. A workflow and templates that turn fuzzy ideas into specs your agent can actually execute against.

## modal-16

[14:44](https://www.youtube.com/watch?v=2m8dHR0Kw1I&t=884)

- https://github.com/madmonk13/modal-16

You want to jam out a generative music idea right now. No DAW, no install, no plugins. Modal 16 lives in your browser. It's a generative music sequencer built with JavaScript and tone.js made for both live performance and composition. Set up patterns, let it generate and evolve and play it live straight from a browser tab. Pure web audio. Nothing to download, nothing to license.
