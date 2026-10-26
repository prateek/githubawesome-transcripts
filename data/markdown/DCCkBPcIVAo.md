# Hacker News Show \#10: mindwalk, spaceprojectsim, dom-docx, ctx, codealmanac, bramble, remux, leaves

[Watch the original video](https://www.youtube.com/watch?v=DCCkBPcIVAo)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Introduction

[0:00](https://www.youtube.com/watch?v=DCCkBPcIVAo&t=0)

Welcome back to GitHub Awesome Hacker News show number 10. 35 projects with the most replies and up votes. Let's get into it.

## mindwalk

[0:10](https://www.youtube.com/watch?v=DCCkBPcIVAo&t=10)

- https://github.com/cosmtrek/mindwalk

Mindwalk replays a coding agent session as light moving across a 3D map of your repo. So you can see which files it searched, read, and edited and which it never touched at all. Each file keeps its deepest touch state. So scope creep shows up as glow where you didn't expect any. It reads claude code and codeex logs locally. One go binary. Nothing leaving the machine. The space project

## spaceprojectsim

[0:34](https://www.youtube.com/watch?v=DCCkBPcIVAo&t=34)

- https://github.com/Kalcode/spaceprojectsim

is a rust and bevy space economy simulator where you watch hundreds of autonomous entities make their own decisions. Ships trade, refuel, accept contracts, and go bankrupt while stations price 13 commodities from live shortages instead of fixed values. Factions tax and subsidize. Unhappy populations migrate and the whole universe persists in SQLite.

## dom-docx

[0:58](https://www.youtube.com/watch?v=DCCkBPcIVAo&t=58)

- https://github.com/floodtide/dom-docx

Most HTML to word converters wrap everything in nested layout tables. So the file opens in Word and nothing is editable. DOM-doc X maps a practical subset to real u XML instead. Headings become headings, lists become numbered lists, tables become tables. The default path is pure JavaScript with no browser needed. And there's a browser bundle that converts in the user's own tab. charts rasterize to PNG when you ask.

## ctx

[1:25](https://www.youtube.com/watch?v=DCCkBPcIVAo&t=85)

- https://github.com/ctxrs/ctx

CTX is a Rust CLI that searches the coding agent history already stored on your machine instead of giving every new session amnesia. It imports transcripts from codecs, claude code, and many other tools into a local SQLite index. You can search by ordinary terms or touched file, then reopen the exact event or session behind a result. Nothing is uploaded, but transcripts retain paths and secretl looking strings.

## codealmanac

[1:52](https://www.youtube.com/watch?v=DCCkBPcIVAo&t=112)

- https://github.com/AlmanacCode/codealmanac

One clawed MD file stops working around a few hundred lines, and it goes stale the first time someone commits without touching it. Almanac keeps a wiki of small linked pages in your repo instead, covering the decisions and gotchas the code can't state. A scheduler reads your finished agent sessions and writes new pages which land in git status for you to review like any other diff.

## bramble

[2:18](https://www.youtube.com/watch?v=DCCkBPcIVAo&t=138)

- https://github.com/flythenimbus/bramble

Bramble is a local first password manager that keeps the vault on your own devices instead of a company server. Its Rust cryptocore encrypts everything while browser iOS and Android clients sync directly over an endtoend encrypted peer-to-peer connection. It also supports pass keys, native autofill, and encrypted backups to files or storage you control. The trade-off is real. Lose every password, hardware key, and recovery code, and nobody can restore the vault.

## remux

[2:48](https://www.youtube.com/watch?v=DCCkBPcIVAo&t=168)

- https://github.com/h3nock/remux

SSH from your phone means the connection dies the moment you lock the screen. Remox is a native iOS client that talks T-Mux directly, so sessions keep running on the server and windows and panes become real iOS surfaces. you swipe between a bottom sheet picks panes. You can split and close them from the app and server passwords go into keychain.

## clx

[3:10](https://www.youtube.com/watch?v=DCCkBPcIVAo&t=190)

- https://github.com/samyeyo/clx

Shipping a Lua tool means shipping an interpreter alongside it or asking users to install one. CLX compiles the script ahead of time through clang GCC or MSVC and hands you a single native executable small enough to land under a 100 kilobyt with a minimal flag. Startup skips bite code loading entirely. Native modules get written against a C++ API instead of the old LIC C1.

## mcpsnoop

[3:36](https://www.youtube.com/watch?v=DCCkBPcIVAo&t=216)

- https://github.com/kerlenton/mcpsnoop

MCP snoop is a transparent proxy that shows the actual JSON RPC traffic between your AI client and MCP servers instead of opening a separate test connection. Its terminal UI exposes every tool call flags malformed frames and hung requests and can export sessions or gate CI on failures because those traces may contain credentials or private arguments. configure its key, value, and JSON path redaction before recording real workloads.

## go-shirei

[4:04](https://www.youtube.com/watch?v=DCCkBPcIVAo&t=244)

- https://github.com/hasenj/go-shirei

Shereé is a cross-platform guey framework that lets you build desktop apps entirely in Go with no browser bundled and no HTML in sight. Its immediate mode API rebuilds the interface from your data each frame. So there's no widget tree to keep in sync. One codebase covers Mac OS, Windows, and Linux with flexbox layout, complex text shaping, birectional text, and IME support included.

## Observal

[4:29](https://www.youtube.com/watch?v=DCCkBPcIVAo&t=269)

- https://github.com/Observal/Observal

Observ is a self-hosted control plane for teams whose agents, skills, and MCP servers have scattered across separate repositories. It provides a governed registry, generates installation configs for tools like codecs and cursor, and tracks which components people actually use. Session replay captures prompts, responses, reasoning, and tool calls for debugging.

## leaves

[4:53](https://www.youtube.com/watch?v=DCCkBPcIVAo&t=293)

- https://github.com/patonw/leaves

Leaves is a treemap disc usage analyzer that runs entirely in the terminal. So it works over SSH where wind darstat or Q darstat can't. Files and directories become nested rectangles sized by disk usage, files colored by extension, and directories by name with a collapsible tree alongside. X-ray mode flips the grouping to file type first. It respects git ignore by default and hard links get counted twice.

## reame

[5:19](https://www.youtube.com/watch?v=DCCkBPcIVAo&t=319)

- https://github.com/swellweb/reame

RAM is an LLM inference server that treats cheap CPUs as the target rather than the fallback built on llama. Dedger CPP for free tier VPS boxes and two core ARM machines. Prompt prefixes get snapshotted to disk with ZSTD. So a shared system prompt is paid for once and survives restarts. It measures whether speculative decoding actually helps on your hardware and switches it off when it doesn't.

## dbosify-py

[5:45](https://www.youtube.com/watch?v=DCCkBPcIVAo&t=345)

- https://github.com/dbos-inc/dbosify-py

Debossify is a drop-in replacement for the temporal Python SDK that runs durable workflows on Postgress alone. So there's no separate orchestration server to operate. Change the import and point workers at a database. Activities and timers become checkpointed steps. Signals and cancellations travel through listen notify and recovery replays against those checkpoints on a new worker.

## Imagin-Raw

[6:10](https://www.youtube.com/watch?v=DCCkBPcIVAo&t=370)

- https://github.com/cristibaluta/Imagin-Raw

Imagine RAW is a native Mac OS browser for culling and organizing raw photos aimed at the read rate and organize half of what Adobe Bridge does. There's no import step pointed at folders on discs, external drives or SD cards and FS events picks up changes live. Ratings and color labels write to XMPP sidecars, so Lightroom and Bridge read them. Previews are unprocessed though with no camera raw adjustments applied.

## bash4llm

[6:37](https://www.youtube.com/watch?v=DCCkBPcIVAo&t=397)

- https://github.com/kamaludu/bash4llm

Bash for LLM is a single bash script that talks to Grokes OpenAI compatible chat API. So there's no Python environment or npm tree between you and the model. It pulls the model list live rather than hard- coding names, streams or buffers output and saves long responses automatically. No eval anywhere, no shared tmp, and it never executes what the model returns. Webbase 3 rebuilds dbase 3 as a browser appprompt and all with its own W3 script interpreter written in Typescript over

## WebBaseIII

[7:01](https://www.youtube.com/watch?v=DCCkBPcIVAo&t=421)

- https://github.com/DDecoene/WebBaseIII

SQLite. Use a table, index on a field, seek a value, then browse into an editable grid. The at say get form engine and PRG program editor are there too. A sidebar assistant echoes the command every click generates. So you pick up the language by watching.

## nanoeuler

[7:25](https://www.youtube.com/watch?v=DCCkBPcIVAo&t=445)

- https://github.com/JustVugg/nanoeuler

Nanou is a GPT2 class model written from scratch in C and CUDA with no PyTorch and no autograd anywhere. The backward pass is hand derived and make check compares every analytic gradient against a finite difference in double precision before you train anything. The CUDA engine ships a handwritten flash attention validated against the CPU reference. Roughly 116 million parameters on one RTX 4070 fluent English with nothing behind it.

## shumai

[7:56](https://www.youtube.com/watch?v=DCCkBPcIVAo&t=476)

- https://github.com/shumaiOne/shumai

Shumi is a self-hosted media review platform that keeps creative assets, feedback, and versioning under your control. Teams can annotate exact video frames, share curated collections with RO based access, and store originals locally or in S3 compatible storage. Background workers handle transcoding while its optional agent can fill metadata and search assets semantically.

## rowboat

[8:21](https://www.youtube.com/watch?v=DCCkBPcIVAo&t=501)

- https://github.com/rowboatlabs/rowboat

Root is a desktop AI co-worker that keeps its memory as plain markdown on your machine, indexing email, meetings, and Slack into a backl you can open and edit yourself. Around it sit real work surfaces. An email client that drafts replies, an isolated browser, a local meeting transcriber, and background agents that fire on a schedule or a new message. Bring your own model, local or hosted.

## docx-cli

[8:47](https://www.youtube.com/watch?v=DCCkBPcIVAo&t=527)

- https://github.com/kklimuk/docx-cli

Dox CLI lets an agent edit Word files without flattening them, which is what happens when you convert to markdown and back. It parses the document into an addressable a. So you target paragraph 3 characters 5 to 20 and it mutates that XML in place. Everything it doesn't model, custom styles, and theme colors survives untouched. Comments, replies, track changes, images, and hyperlinks all get real commands.

## frugon

[9:14](https://www.youtube.com/watch?v=DCCkBPcIVAo&t=554)

- https://github.com/Rodiun/frugon

Fruges your actual LLM logs against every model locally rather than telling you what you already spent like a billing dashboard does. Point it at a JSON L file and it splits your traffic into calls that could move to a cheaper model and calls that shouldn't with a monthly figure attached. A bundled proxy captures the logs if you don't have them. Nothing leaves the machine unless you opt into sampling with your own keys.

## earth-game

[9:42](https://www.youtube.com/watch?v=DCCkBPcIVAo&t=582)

- https://github.com/skorotkiewicz/earth-game

EarthGame is a goal tracker that stays on your machine Python standard library and a local SQLite file with no accounts and no outbound requests. It holds one current quest at a time with a single next action plus a list of open loops you haven't closed. A review command records five short reflections and can promote your answer into the next action. There's a browser UI too bound to loop back only 77 is an LZ codec built for write once read many data trading slow compression

## misa77

[10:09](https://www.youtube.com/watch?v=DCCkBPcIVAo&t=609)

- https://github.com/welcome-to-the-sunny-side/misa77

for decompression speed on the author's Clesia runs. It decodes several times faster than LZ4 while holding a better ratio and it gets faster on more compressible files. So effort spent at compression time pays twice. Decompression needs no memory buffer at all. The decoder assumes valid input though. So don't point it at anything untrusted.

## xarray-sql

[10:37](https://www.youtube.com/watch?v=DCCkBPcIVAo&t=637)

- https://github.com/xqlsystems/xarray-sql

Zer SQL lets SQL users query multi-dimensional zer data sets without first flattening everything by hand. It registers array chunks as data fusion tables through arrow record batches, pushes selected columns and dimension filters toward the source, then converts results back into zere or pandas that makes climate and geospatial work expressable with joins, grouping, and window functions.

## bun-sqlgen

[11:03](https://www.youtube.com/watch?v=DCCkBPcIVAo&t=663)

- https://github.com/ilbertt/bun-sqlgen

Bunsql gen gives raw bun SQL queries real types without putting an ORM in the way. tag a template literal with a name and codegen plans that query against your actual Postgress or SQLite schema then writes a declaration file so a typo in a column name fails the build instead of production nullability comes from the schema ability so a schema flags the fields that can genuinely be null runtime stays plain bun most AI video tools hide the edit behind an API so you

## FableCut

[11:29](https://www.youtube.com/watch?v=DCCkBPcIVAo&t=689)

- https://github.com/ronak-create/FableCut

get a rendered file and no way in Fable Cut makes the timeline a plain JSON document instead head clips, key frames, transitions, all of it patchable over MCP or REST while the browser UI reloads in about 150 milliseconds. You and an agent can work the same timeline with a revision counter rejecting whichever right would clobber the other.

## wyrm\_math

[11:55](https://www.youtube.com/watch?v=DCCkBPcIVAo&t=715)

- https://github.com/dicroce/wyrm_math

Worm math is a symbolic algebra engine built so illegal moves can't happen rather than getting rejected. Equations only change through rewrite rules. So any state you can reach is sound by construction and moves with conditions attached like dividing by something that might be zero carry those conditions along as visible assumptions. Arithmetic is exact big rationals with no floating point.

## cactus-hybrid

[12:21](https://www.youtube.com/watch?v=DCCkBPcIVAo&t=741)

- https://github.com/cactus-compute/cactus-hybrid

Cactus hybrid is a small ondevice model that ships with a confidence probe built into the checkpoint. So every answer comes back with a score between zero and one alongside the text. set a threshold and anything under it escalates to a larger model instead of shipping a confident guess. The score arrives as its own field, not something parsed out of the response.

## max-studio-tools

[12:45](https://www.youtube.com/watch?v=DCCkBPcIVAo&t=765)

- https://github.com/apresta/max-studio-tools

Max Studio Tools brings a rack of studio style EQs and compressors into Max MSP as native externals. The collection covers broad tonal shaping, saturation, transparent leveling, and aggressive transient control, so you can build Macs for live devices without recreating the DSP layer yourself. Every device supports optional oversampling up to eight times. C++ on the Mind Devkit tested on Mac OS with Windows cross compilation through Mingub.

## billai-bass

[13:13](https://www.youtube.com/watch?v=DCCkBPcIVAo&t=793)

- https://github.com/morganwilliscloud/billai-bass

Bill AI base turns a big mouth billy base into a real-time voice assistant running on a Raspberry Pi 5. Live audio streams through Strand's bitey agent to Amazon Nova 2 Sonic, while GPIO controlled motors sync the mouth, swivel the head, and flap the tail. The repository includes wiring tests and a least privilege AWS setup. It's a funny build, but it still requires soldering, an AWS account, and permanently opening the fish.

## jacquard-lang

[13:41](https://www.youtube.com/watch?v=DCCkBPcIVAo&t=821)

- https://github.com/jbwinters/jacquard-lang

Jakard is a research language built for code that models write and people review. A function's type carries the effects it may perform. So one line tells you whether something can touch the network and the runtime refuses ungranted effects unless you pass allow. Handlers can resume a computation more than once which makes exhaustive search and exact probability ordinary library code.

## RelayBar

[14:06](https://www.youtube.com/watch?v=DCCkBPcIVAo&t=846)

- https://github.com/lx2026/RelayBar

Relay bar puts SSH local port forwards in a tiny native Mac OS menu bar app instead of another terminal tab. Import a standard SSH local forward command. Start or stop each tunnel with one click and open its local URL straight in your browser. It retries dropped connections and shows failures beside the affected tunnel. It deliberately rejects shell executing options, though it still inherits access to your normal SSH config keys and agent.

## mcp

[14:35](https://www.youtube.com/watch?v=DCCkBPcIVAo&t=875)

- https://github.com/open-and-async/mcp

Open and async MCP turns remote work practices into callable tools for your coding assistant. feed it a decision and options to draft an ADR, convert a meeting agenda into an owned async artifact, or score a status update before it surprises the team. It also searches cited summaries from the open and async book. The code is MIT, but its bundled book data is proprietary and can't be redistributed or used for model training.

## Yorishiro

[15:03](https://www.youtube.com/watch?v=DCCkBPcIVAo&t=903)

- https://github.com/sktkkoo/Yorishiro

Your Shiro is a Mac OS terminal that puts a 3D character beside your coding agent. It watches the PTY stream directly. So, the character reacts to an error before the model has formed a sentence and a light comes on in the scene. When the agent is waiting on your approval, the agent can reshape its own room over MCP, changing lighting, scenes, and UI. Everything beyond the core is a swappable pack.
