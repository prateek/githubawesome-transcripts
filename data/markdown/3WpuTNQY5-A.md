# GitHub Trending Today \#44: paritok, KiroCrew, wyzer, quickdraw, RunCat Neo, gemma-translator, auteur

[Watch the original video](https://www.youtube.com/watch?v=3WpuTNQY5-A)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Introduction

[0:00](https://www.youtube.com/watch?v=3WpuTNQY5-A&t=0)

Welcome back to GitHub awesome. This is GitHub trending today number 44. 35 trending open-source projects on GitHub right now. Let's get into it.

## paritok-4b-v1

[0:11](https://www.youtube.com/watch?v=3WpuTNQY5-A&t=11)

- https://github.com/Paritok-official/paritok-4b-v1

Parat talk is a 4B model whose only job is compressing what your coding agent sends upstream. It runs as a local proxy. Point your agents base URL at it and tool outputs and old history get rewritten before their build. Nothing is destroyed since compressed blocks carry a reference ID. The model can expand on demand. Self-hosting runs on a llama with nothing leaving your machine.

## Cloudflare OS

[0:36](https://www.youtube.com/watch?v=3WpuTNQY5-A&t=36)

- https://github.com/cloudflare/cloudflare-os

Cloudflare OS gives every user a private copy of each app rather than one shared SAS instance. So a slide deck is a sandboxed program you can ask an agent to modify. Rather than stalling on every permission prompt, a gatekeeper simulates the outcome and feeds the agent simulated results, letting it cue work you approve in bulk later. Running it off Cloudflare on worker is marked coming soon. Kirro crew is a persistent agent workspace from Amazon's Kro team that keeps running after you close the

## KiroCrew

[1:02](https://www.youtube.com/watch?v=3WpuTNQY5-A&t=62)

- https://github.com/kirodotdev/KiroCrew

chat. It preserves sessions, memory, schedules, and checkpoints, learns reusable lessons from corrections, and can delegate work to isolated sub aents. Use it through a desktop app, web dashboard, CLI, or messaging tools. While approvals, sandboxing, credential redaction, and audit logs add control.

## wyzer

[1:28](https://www.youtube.com/watch?v=3WpuTNQY5-A&t=88)

- https://github.com/Wyzer-Lang/wyzer

Wiser is a compiled language built on a bet that most hard bugs come from nobody being sure who owns a resource. Memory, message passing, and hardware interrupts all get the same rule. So once a resource is used, it can't be used again. The compiler deres network protocols from your function types and checks them catching deadlocks and drop messages before anything runs.

## quickdraw

[1:53](https://www.youtube.com/watch?v=3WpuTNQY5-A&t=113)

- https://github.com/quickdrawjs/quickdraw

Quickraw is an infinite canvas whiteboard you drop into a React React Native or PlainJS app. Pressure sensitive ink handdrawn shape wobble palm rejection once a stylus appears. The part worth studying is the store. Every change emits a JSON diff. So, persistence, undo, collaborative sync, and strokebystroke replay all fall out of one shape. You bring the transport since there's no multiplayer server yet.

## MiniMax-H3

[2:19](https://www.youtube.com/watch?v=3WpuTNQY5-A&t=139)

- https://github.com/MiniMax-AI/MiniMax-H3

Miniax H3 generates video with native stereo audio in one pass, up to 15 seconds from text, images, video, and audio references mixed together. One transformer predicts both video and audio latence rather than dubbing sound on afterwards. The open weights run at 768p since the 2K stage and the context prep-processor stay behind Miniax's API.

## RunCat Neo

[2:43](https://www.youtube.com/watch?v=3WpuTNQY5-A&t=163)

- https://github.com/runcat-dev/RunCatNeo

Runcat Neo is a running cat in the Mac OS menu bar whose stride speeds up with your CPU load, so you feel a busy machine before you check activity monitor. The part worth knowing is the custom metrics format pointed at any local JSON file and it renders that as a dashboard card. So GPU temperature, agent token usage, or remaining reminders all become menu bar readouts. Runners are key frame animations you can write yourself.

## gemma-translator

[3:11](https://www.youtube.com/watch?v=3WpuTNQY5-A&t=191)

- https://github.com/google-gemma/gemma-translator

Gemma translator is a two-way voice translator that runs entirely on a Raspberry Pi 5 with no internet after setup. Two lanes face each other on a small kiosk screen, each with a rotating language selector. Hold a key, speak, and the other side hears it back in their language. Moonshine handles the speech in and out. Gemma does the translation and the repo ships STL files for the case.

## starboard

[3:36](https://www.youtube.com/watch?v=3WpuTNQY5-A&t=216)

- https://github.com/palamim/starboard

Starboard is a Mac OS terminal you can audit in an afternoon. Under 700 lines across four Swift files, no dependencies, no pseudo in the installer and accessibility used for exactly one thing, reading where the doc sits so the window can track it. It docks beside the dock, follows it across spaces and full screen apps, and runs a real persistent login shell rather than spawning a new one per command.

## auteur

[4:03](https://www.youtube.com/watch?v=3WpuTNQY5-A&t=243)

- https://github.com/agiwhitelist/auteur

Aur is an agent skill that treats landing page development like film direction, locking the art direction in a commit sheet before writing markup. It can scout references, generate assets, and build WebGL or scroll driven scenes from recipes. Shipping is gated by executable checks. Slopscan rejects cliche styling and accessibility mistakes, while Motion QA measures dropped frames and browser errors.

## drydock

[4:29](https://www.youtube.com/watch?v=3WpuTNQY5-A&t=269)

- https://github.com/yetidevworks/drydock

Drydock answers one question across every checkout on your disc. What still has work sitting in it? Uncommitted files, commits you never pushed on any branch rather than just the current one, and commits sitting past the last tag. Color carries the state, so you scan rather than read. The speed trick is tearing. Refs and tags are cheap and run every sweep, while the working tree scan caches against head and index m time.

## codex-router

[4:57](https://www.youtube.com/watch?v=3WpuTNQY5-A&t=297)

- https://github.com/duolahypercho/codex-router

Codex router puts Kimmy and DeepSseek in the codeex model picker as named entries beside the GPT models rather than replacing them. It adds one marked block to your config, pointing the base URL at a local listener that splits traffic. Native requests keep your chat GPT off. External ones get a throwaway loop back key that the final forwarder discards before injecting the real provider credential.

## gauntlet-loop

[5:23](https://www.youtube.com/watch?v=3WpuTNQY5-A&t=323)

- https://github.com/robonuggets/gauntlet-loop

Gauntlet loop is a single skill file that turns a goal into one short prompt for a fresh session. The idea worth stealing is the standard, not a rubric the agent grades itself against, but a named real thing it can actually fetch and open. A separate critic with no memory of the attempt puts both side by side with labels stripped and picks one. Winning ends the loop, not a round count.

## cyclop

[5:48](https://www.youtube.com/watch?v=3WpuTNQY5-A&t=348)

- https://github.com/akalikbergenov/cyclop

Cyclop turns the MacBook notch into a panel that unfolds on hover. Whatever is playing anywhere on the machine with a working scrubber, a shelf you drag files onto, clipboard history, snippets, your next meeting with a join button, and offline translation. The engineering notes are the real draw. Pointer sampling drops to eight hertz away from the top edge and a 150 millisecond dwell separates choosing a tab from passing over one.

## Octop

[6:16](https://www.youtube.com/watch?v=3WpuTNQY5-A&t=376)

- https://github.com/TencentCloud/Octop

OCTOP is a self-hosted assistant for a household or small team run as one process with everything under a folder in your home directory. Each user gets their own set of agents they switch between per task reachable from a web dashboard, a CLI or chat apps like Discord and FishU. The design point is single process, no external broker, and the entire state rebuilds from one seek light file on restart.

## travel-photo-abstraction

[6:43](https://www.youtube.com/watch?v=3WpuTNQY5-A&t=403)

- https://github.com/Evianis/travel-photo-abstraction

Travel photo abstraction is a codec skill that reads one of your photographs as a visual system, counts, positions, proportions, directions, then distills it into a sparse editorial panel set beside the untouched original. The discipline is what sets it apart. It inventories what's actually there before drawing, maps each fact to one minimal mark and a fail script pixel verifies your original rather than regenerating it.

## wptui

[7:10](https://www.youtube.com/watch?v=3WpuTNQY5-A&t=430)

- https://github.com/Andiveli/wptui

WP2i is a WhatsApp client that lives entirely in your terminal. A Ratatouille interface in Rust bridged to the what's meow library in Go. Link with a QR code and you get Vim style keybindings for browsing chats, replying, reacting, and even pasting an image from the clipboard as an attachment with media rendered inline through Chaffa. Your session and history stay in a local folder.

## himekuri

[7:35](https://www.youtube.com/watch?v=3WpuTNQY5-A&t=455)

- https://github.com/pluk-inc/himekuri

Himakuri is a Japanese tearoff calendar that sits on your Mac desktop and the point is the paper. The top sheet is a verlet simulated grid with real bending constraints. So pulling it down makes fibers part along the staple seam and the page comes off in your hand. Let go halfway and it rests torn permanently since there's no undo by design. Six print styles, procedurally synthesized rip sounds, and it never turns its own page.

## holosticker

[8:03](https://www.youtube.com/watch?v=3WpuTNQY5-A&t=483)

- https://github.com/jal-co/holosticker

Host sticker is a browserbased studio that turns an SVG or PNG into a realistic holographic sticker without building the foil effect by hand. 3JS renders defraction bands, iridesence, metallic flakes, and reflections in real time, while pointer movement lets you inspect the finish from different angles. You can tune ink coverage and diecut borders, add refractor patterns or a 3D peel, then export a transparent PNG up to 496 pixels.

## deident-wasm

[8:33](https://www.youtube.com/watch?v=3WpuTNQY5-A&t=513)

- https://github.com/ikuV/deident-wasm

Dent is a rust privacy engine that transforms CSV data sets from a declarative YAML policy with separate modes for reversible pseudonymization and risk assessed anonymization. It can remove direct identifiers, generalize quasi identifiers, preserve joinable tokens across related files and produce a JSON report showing residual reidentification signals. Jobs can also run inside isolated web assembly sandboxes.

## Lithe-IDEA

[9:00](https://www.youtube.com/watch?v=3WpuTNQY5-A&t=540)

- https://github.com/1lck/Lithe-IDEA

Life is a native Mac OS IDE that keeps Intelligj style Java workflows without carrying the full IntelliJ footprint. It targets Spring Boot projects, starts language services, terminals, Maven and debuggers only when needed and gives you git diffs plus local snapshots for reviewing AI generated changes. Semantic navigation depends on Eclipse JDLS and Windows support is still under development.

## jc-rs

[9:26](https://www.youtube.com/watch?v=3WpuTNQY5-A&t=566)

- https://github.com/OlegSotnikov/jc-rs

JCRS turns command output, files, and plain strings into JSON using one static Rust binary, so scripts and minimal containers don't need Python installed. It implements 237 parsers, preserves JC's schemas, and streams records as input arrives instead of waiting for EOF. The maintainers report 100% compatibility across 934 of 934 Oracle valid fixture pairs enforced in CI while unqualified fixtures remain reported separately.

## Cambium

[9:56](https://www.youtube.com/watch?v=3WpuTNQY5-A&t=596)

- https://github.com/KimGLee/Cambium

Cambium is a governance standard and reference tool set for knowledge corpora maintained by LLM agents. It separates domain neutral rules from a selected corpus profile, then records scoped batches, dependencies, progress, receipts, and recovery state inside the adopting repository. Deterministic checks catch drift and stale evidence, but they don't prove who performed an action. Codex iOS assistant lets codecs on your Mac inspect and control your iPhone through iMessage and Apple

## codex-ios-assistant

[10:21](https://www.youtube.com/watch?v=3WpuTNQY5-A&t=621)

- https://github.com/Samin100/codex-ios-assistant

Shortcuts. Its CLI sends private commands. The phone runs native actions and context returns through an authenticated Cloudflare tunnel endpoint. It can read visible screen text, manage alarms, and toggle settings, but it deliberately won't send ordinary messages or make purchases.

## phone-harness

[10:46](https://www.youtube.com/watch?v=3WpuTNQY5-A&t=646)

- https://github.com/ShawnPana/phone-harness

Phone harness lets an agent drive your own iPhone with no jailbreak and no web driver agent. The phone is already a window, so screen capture plus Apple's vision OCR gives every visible string a tap ready coordinate. and siege events post the taps screenshot again to verify since there's no DOM. The failure notes are the useful part like Apple script clicks vanishing silently because the window is just a video stream.

## KADATH

[11:13](https://www.youtube.com/watch?v=3WpuTNQY5-A&t=673)

- https://github.com/i3T4AN/KADATH

Kadath evolves complete AI agents instead of repeatedly tweaking one prompt. It runs populations through timed epochs, grades their frozen evidence against an approved benchmark, then preserves, mutates, or replaces each agent's prompt, code, tools, and dependencies. The fixed kernel keeps scoring, lineage, credentials, and isolation outside the evolvable genome.

## rangi

[11:36](https://www.youtube.com/watch?v=3WpuTNQY5-A&t=696)

- https://github.com/pi0/rangi

Ranji is a tiny synchronous syntax highlighter that returns self-contained HTML without loading CSS, clientside JavaScript, or hydration. The maintainers put the full package with 46 languages and default themes at roughly 13.2 bill minified and gzipped while the core code to HTML path is about 1.5 kilobyt. It also exposes raw tokens and anti- terminal output.

## soundshuman

[12:01](https://www.youtube.com/watch?v=3WpuTNQY5-A&t=721)

- https://github.com/aashaexo/soundshuman

Sound Schuman scores how much you're writing reads as AIS lop on a 0 to 100 scale. And the point is that every point is traceable. Pattern density does most of the work, blended with statistical tells like burstiness and word repetition. And each hit names the rule that fired, so you can argue with it or delete that rule. The fixer only auto applies the safe mechanical stuff. M dashes, curly quotes, filler phrases.

## vibewatch

[12:28](https://www.youtube.com/watch?v=3WpuTNQY5-A&t=748)

- https://github.com/GOROman/vibewatch

Vibeatch turns an M5 stack stopwatch into a wrist controller for running several AI coding agents at once. Six agents sit around the round screen with their live state always visible and pressing both buttons flips to an action layer where you approve or reject with a physical click toggle plan mode or hold the center to talk. Every Q is multiensory so okay rises in pitch and ng falls.

## deepseek-and-destroy

[12:54](https://www.youtube.com/watch?v=3WpuTNQY5-A&t=774)

- https://github.com/frozenpepper/deepseek-and-destroy

Deepseek and destroy is a portable coding agent skill that executes large implementation plans through persistent worker loops. A main orchestrator keeps the architecture and phase gates while fresh agents implement, review, repair findings, and independently recheck the result. Run folders preserve plan snapshots, evidence, defects, and the exact next action across context resets.

## react-native-nitro-theme-transition

[13:19](https://www.youtube.com/watch?v=3WpuTNQY5-A&t=799)

- https://github.com/saleh2001k/react-native-nitro-theme-transition

This library animates a React Native theme switch without touching Skia, Reanimated, or any JS animation. The trick is that it never animates the theme at all. It takes a GPUide copy of the screen, pins it on top, runs your change underneath invisibly, then wipes the copy away with the platform's own animator on the render thread, so a busy JavaScript thread can't drop a frame of it. Circular reveal from the touch point, plus wipe, fade, and blur.

## kage

[13:48](https://www.youtube.com/watch?v=3WpuTNQY5-A&t=828)

- https://github.com/MengTo/kage

Scroll down and Cajoke night at a Kyoto mountain temple. 3.js builds the Tory gates, lanterns, fog, falling leaves, and moon in real time, while generated scene plates and foreground artwork add depth across five chapters. The experience lives in one HTML file with no build step or runtime network dependency.

## wallfacer

[14:11](https://www.youtube.com/watch?v=3WpuTNQY5-A&t=851)

- https://github.com/pradipta/wallfacer

Wallfacer is one view of every AI coding session you've started across cloud code and codecs. Each agent buries its transcripts in its own folder under an untitled or hashnamed file. So after a few weeks, you can't find anything. Wallfacer indexes them all read only, never touching the originals, and keeps your titles, tags, and projects in a separate database. Browse them full screen or from the shell, then resume anyone where it started.

## fec

[14:39](https://www.youtube.com/watch?v=3WpuTNQY5-A&t=879)

- https://github.com/brian-armstrong/fec

Feck is a rust crate for recovering corrupted data in softwaredefined radio and spacecraft links. It implements convolutional codes with hard or soft decision vurby decoding plus read Solomon error and eraser correction including the standard CCSDS configuration. Optional nightly rust SIMD accelerates Vurby on SSE, AVX2 and AVX 512 while a CABI shim can replace libc in existing code bases.

## neuroarxiv

[15:06](https://www.youtube.com/watch?v=3WpuTNQY5-A&t=906)

- https://github.com/UditAkhourii/neuroarxiv

Neuroarchceive makes a coding agent check arcseceive before it invents an architecture. It maps your problem to a few categories, fetches real papers over HTTP, then reads each abstract in isolation so no one source colors another, and converges on a single cited recommendation with a first step and the documented ways it has already failed for someone. The point isn't search, it's forcing a decision. \[music\]
