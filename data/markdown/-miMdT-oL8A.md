# GitHub Trending Weekly \#40: clawk, clodex-ide, neverclick, grok-build, Krbn, domain-sdk, Flawless

[Watch the original video](https://www.youtube.com/watch?v=-miMdT-oL8A)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Introduction

[0:00](https://www.youtube.com/watch?v=-miMdT-oL8A&t=0)

Welcome back to GitHub awesome. This is GitHub trending weekly number 40. 35 trending open- source projects on GitHub right now. Let's go.

## clawk

[0:11](https://www.youtube.com/watch?v=-miMdT-oL8A&t=11)

- https://github.com/clawkwork/clawk

Clock gives coding agents a disposable Linux VM. Instead of letting them loose on your laptop, your repo is mounted in, but the host file system and keychain stay out of reach. The agent gets root inside the guest, so package installs, servers, and destructive experiments don't need constant approvals. If it wrecks the machine, destroy the VM and recreate it without losing the repo or conversation.

## waggle

[0:37](https://www.youtube.com/watch?v=-miMdT-oL8A&t=37)

- https://github.com/modiqo/waggle

Waggle gives multi- aent systems a tiny reference token. Instead of copying whole files and plans into every handoff, an agent resolves that token through MCP, pulls only the sections it needs, and leaves a receipt showing what it actually read. References are versioned, can be revoked or superseded, and can return different projections for different consumers. That makes handoffs easier to audit and harder to quietly lose during delegation.

## mindwalk

[1:05](https://www.youtube.com/watch?v=-miMdT-oL8A&t=65)

- https://github.com/cosmtrek/mindwalk

Mindwalk replays a coding agent session as light across a 3D map of your codebase. A session log tells you what the agent did, not how it understood the task, which files it treated as relevant. Raw JSONL never shows that here. The files it read and edited glow while the rest stays dark, so its mental model becomes a shape. You can see it reads claude code and codeex logs locally.

## clodex-ide

[1:31](https://www.youtube.com/watch?v=-miMdT-oL8A&t=91)

- https://github.com/mereyabdenbekuly-ctrl/clodex-ide

Cloex is a local first agentic IDE that treats model output as untrusted input rather than giving a coding assistant the keys to your machine. You've watched an agent reach for a shell command or network request that deserves more than a cheerful prompt. Cloex keeps tasks persistent across restarts, isolates agent and MCP processes, and puts high impact shell browser and remote actions behind approval.

## neverclick

[1:57](https://www.youtube.com/watch?v=-miMdT-oL8A&t=117)

- https://github.com/LazoVelko/neverclick

NeverClick replaces mouse travel with keyboard controlled visual hints using local computer vision instead of appsp specific accessibility hooks. Trigger it and every clickable region gets a label. Then press the matching key to place the pointer or perform the action. It works across Windows apps, supports full screen and multimonitor setups, and runs entirely offline.

## grok-build

[2:22](https://www.youtube.com/watch?v=-miMdT-oL8A&t=142)

- https://github.com/xai-org/grok-build

Grock build is SpaceX AI's coding agent and unlike most lab CLIs, the full Rust source is public under Apache 2 zero. It's a full screen TUI that edits files, runs shell commands, and searches the web with headless mode for CI and MCP support builtin. Parts of the tool layer are ported from OpenAI's codecs and open code. Contributions aren't accepted, though. It's read only open source.

## Krbn

[2:47](https://www.youtube.com/watch?v=-miMdT-oL8A&t=167)

- https://github.com/vpalos/Krbn

Most 3D renderers ask what color each pixel is. Kerenne asks which lines an artist would draw and which they'd leave out. It renders a scene as a pencil drawing, deriving strokes from geometry, not shading pixels. A sphere's silhouette is an exact conic and cross-hatching handles both shading and see-through. No alpha channel. The wobble is deterministic, so an orbiting camera stays calm instead of boiling.

## beautify-github-readme

[3:13](https://www.youtube.com/watch?v=-miMdT-oL8A&t=193)

- https://github.com/oil-oil/beautify-github-readme

Beautify GitHub readme is an agent skill that redesigns a repository homepage around the project itself rather than dropping in another generic template. It reads the repo first, moves the clearest proof forward, then separates decorative SVG assets from searchable markdown and copyable commands. You can request a full readme overhaul or just the visual pieces with local previews before anything is published.

## Amicro--Micro-transitions

[3:40](https://www.youtube.com/watch?v=-miMdT-oL8A&t=220)

- https://github.com/Subhan-code/Amicro--Micro-transitions-

A micro is a gallery of copyable React microtransitions instead of another design demo that leaves you rebuilding every animation from scratch. Browse its live button and control previews in grid list or matrix layouts. Then copy the generated react, tailwind, and motion code. It also handles light, dark transitions and gives you a defined place to add your own interactions.

## ai-trains-ai

[4:04](https://www.youtube.com/watch?v=-miMdT-oL8A&t=244)

- https://github.com/Danau5tin/ai-trains-ai

Most RL projects train one model. This one trains an agent that trains other models. Give it a task, teach multihop reasoning, and it writes a full training job, then ships it to real GPUs on RunPod. The maintainer clocks reward climbing from zero to a 0.63 peak over 54 steps, holding up on a task family. The agent never trained on weights, reward code, GPU orchestration, the failed pilots, all public. Otter ASRV1

## Audar-ASR-V1

[4:31](https://www.youtube.com/watch?v=-miMdT-oL8A&t=271)

- https://github.com/AudarAI/Audar-ASR-V1

is Arabic first speech recognition built for dialects rather than treating Arabic as an afterthought in a general transcription model. The pain shows up when Gulf, Egyptian, Levventine or McGrebby speech gets flattened into errors, especially when English is mixed in. Flash runs for live captions and offline edge use, while Turbo targets hard dialectal and long audio.

## domain-sdk

[4:56](https://www.youtube.com/watch?v=-miMdT-oL8A&t=296)

- https://github.com/opencoredev/domain-sdk

Domain SDK gives SAS teams one TypeScript API for customer domains instead of writing separate provisioning logic for every hosting provider. It normalizes Versel, Cloudflare for SAS, Railway, Render, and Netlefi behind the same add, verify, monitor, and remove life cycle. It returns the exact DNS records customers need and waits for provider confirmed routing and certificate status so your UI doesn't announce readiness early.

## Flawless

[5:24](https://www.youtube.com/watch?v=-miMdT-oL8A&t=324)

- https://github.com/William-Lu-stack/Flawless

A pod restart in Kubernetes could mean five different things, and most AI ops tools just tell you to go check logs. Flawless runs a full loop instead. Diagnose, preview the fix, get human approval, execute, then retest the original symptom to confirm it actually recovered. Topology mapping shows blast radius before you touch anything, and reusable skills packages capture what worked last time.

## app-monitor

[5:50](https://www.youtube.com/watch?v=-miMdT-oL8A&t=350)

- https://github.com/jcranokc/app-monitor

App Monitor is a local first Mac OS dashboard for app usage and cleanup instead of making you piece the story together from activity monitor and a deletion utility. You know the question, can I remove this old app without leaving caches, containers, and support files behind? It tracks foreground use, maps related storage and update status, then stages cleanup in reversible quarantine.

## paxm

[6:15](https://www.youtube.com/watch?v=-miMdT-oL8A&t=375)

- https://github.com/pax-beehive/paxm

Every new coding agent session starts blank. You restate the architecture and rules you explained last time. Memory tools help but lock you to one agent and one backend. Paxom is a provider neutral memory adapter. Record a decision from codecs and recall it in clawed code or any MCP client, one path across all of them. Start on local SQLite, no key or embeddings, and swap to zep or mem without rewiring.

## loop.js

[6:42](https://www.youtube.com/watch?v=-miMdT-oL8A&t=402)

- https://github.com/loop-js/loop.js

An agent in a while loop is one line, but two things stop it converging. It says done when it isn't and long sessions drift. Loop.js fixes both. You state a goal and what done means. It runs the agent round after round, fresh context until a separate readonly verify agent, not the worker, rules the barmet. It's budget guarded, crash safe, and schedules to cron or the cloud. So it outlives your terminal.

## personal-model

[7:08](https://www.youtube.com/watch?v=-miMdT-oL8A&t=428)

- https://github.com/Intuition-Lab/personal-model

Person builds a local personal model from the apps you use. Instead of leaving every agent blind to your work context outside its chat window, it reads focused Mac OS accessibility data, uses ondevice OCR only as a fallback, and exposes receipts backed memory over MCP to trusted clients. You can inspect, correct, or delete the model. Screenshots are encrypted, no telemetry.

## riptide

[7:32](https://www.youtube.com/watch?v=-miMdT-oL8A&t=452)

- https://github.com/Foxemsx/riptide

Riptide turns an internet speed test into a polished terminal app with oneshot measurements and a live bandwidth monitor in the same interface. It tracks download, upload, and ping, draws live graphs, and saves completed runs to SQLite so you can compare recent results. The monitoring mode reads your computer's existing traffic counters without generating test load.

## aval

[7:56](https://www.youtube.com/watch?v=-miMdT-oL8A&t=476)

- https://github.com/pixel-point/aval

Making a web video react to hover or state means seeking to timestamps and it stutters at every scene. Aval is a new format. One AVL file packs decodable motion units and a state graph. So, so the browser runs decoder timeline forward instead of seeking. Hover and state become graphs, not handtime seeks. It has packed alpha transparency and an image fallback in one web component.

## understory

[8:22](https://www.youtube.com/watch?v=-miMdT-oL8A&t=502)

- https://github.com/thecodacus/understory

Most agent memory is a vector blob. You dump text in, get a fuzzy match back, and can't read or trust it. Understory makes memory plain markdown. Every fact your agent learns becomes a diffable concept in a living graph, and the agent keeps it healthy. New facts link themselves in, and a lint fixes the orphans and broken links. Plug it into any MCP client. It runs great on local models.

## deja-vu

[8:47](https://www.youtube.com/watch?v=-miMdT-oL8A&t=527)

- https://github.com/vshulcz/deja-vu

Your agent fixed that bug 3 weeks ago, and it's about to redbug it from scratch. Deja indexes the session logs clawed codecs and open code already write. No capture step, so months of pre-install history count. The maintainer clocks warm search at 7 to 9 milliseconds over gigabytes. There's an MCP recall tool. API keys get stripped at index time and memory syncs between machines.

## inference-school

[9:13](https://www.youtube.com/watch?v=-miMdT-oL8A&t=553)

- https://github.com/videlalvaro/inference-school

Inference School teaches LLM inference by making every exercise build toward one small engine for Apple silicon instead of handing you disconnected GPU puzzles. You start with DOT products, turn them into Swift and Metal kernels, then work through attention, KV caches, quantization, batching, and speculative decoding. The course includes 47 runnable problems, a native Mac OS workbench, and a 545page companion book.

## react-native-system-thumbnails

[9:41](https://www.youtube.com/watch?v=-miMdT-oL8A&t=581)

- https://github.com/MarshallBear1/react-native-system-thumbnails

React Native System Thumbnails gives mixed file apps one-typed API for the thumbnail your OS would actually show instead of stitching together separate PDF and video libraries. It uses QuickLook on iOS and native decoders on Android, handles content URLs without pushing file bytes through JavaScript and falls back to a real file icon when previewing fails. Caching and abort signal cancellation are built in and remote URLs are rejected on purpose.

## waku-agent

[10:10](https://www.youtube.com/watch?v=-miMdT-oL8A&t=610)

- https://github.com/ShenSeanChen/waku-agent

Waku is a local first personal agent built as a readable blueprint with the core loop kept to about 95 lines of plain Python instead of buried inside an agent framework. Its memory lives in one SQLite file. A retrieval gate decides when that memory is actually useful and a local dashboard exposes tool calls, costs, traces, and decisions. Deterministic tests and LLM judged evaluations stay separate, then feed a release gate before changes ship. Blitz

## blitzos

[10:40](https://www.youtube.com/watch?v=-miMdT-oL8A&t=640)

- https://github.com/blitzdotdev/blitzos

OS turns your agent setup into a context repo, so a fresh Claude Code Cloud VM can boot knowing which repositories belong together, your conventions, and what earlier agents changed. It stores the map in cloud.md, pins member repos by reference instead of copying source, and keeps a shared session log in git. Launch the right multi-reo workspace in one click. Close your laptop and the cloud agent keeps working.

## RaptorQR

[11:07](https://www.youtube.com/watch?v=-miMdT-oL8A&t=667)

- https://github.com/infrost/RaptorQR

Raptor QR moves files through animated QR codes so you don't need cables, Bluetooth, or an upload server. It breaks each payload into Raptor Q fountain code symbols, renders multiple QR codes in parallel with web assembly, and rebuilds the file from whatever the receiving camera captures. The maintainers report 50x plus throughput over their earlier JavaScript path, including a 6.5 megabyte LA transfer in 36 seconds.

## kubeez-scroll-world-video

[11:35](https://www.youtube.com/watch?v=-miMdT-oL8A&t=695)

- https://github.com/KubeezMedia/kubeez-scroll-world-video

Kub's scroll world video turns scrolling into camera control using pre-rendered clips instead of trying to build a 3D world in the browser. Each scroll position maps to video time, while transition clips connect the final frame of one scene to the first frame of the next. The dependencyfree JavaScript engine handles blob loading, lazy prefetch, crossfades, and reduced motion.

## pixel-art-fixer

[12:00](https://www.youtube.com/watch?v=-miMdT-oL8A&t=720)

- https://github.com/Retro-Diffusion/pixel-art-fixer

Pixel art fixer converts images that merely look pixelated into an actual editable pixel grid without running a model. Instead of assuming a fixed integer scale, it combines autocorrelation, run lengths, self- similarity, and deeper arbitration to recover warped or fractional cells, then rebuilds each cell with crisp structure and colors from the source. The maintainers report 77% exact native resolution across 4,300 benchmark images.

## inky-bird-frame

[12:30](https://www.youtube.com/watch?v=-miMdT-oL8A&t=750)

- https://github.com/veteranbv/inky-bird-frame

Inky bird frame turns a color e-aper panel into a living field journal. Illustrated plates of birds spotted near you. It pulls sightings from I naturalist eird or your bird weather station. And when a species has no plate yet, an agent researches it, illustrates it, then a separate review pass checks anatomy and field marks against reference photos. Failed plates never reach the frame. Approved ones go into a shared catalog anyone can reuse.

## marketing-studio

[12:59](https://www.youtube.com/watch?v=-miMdT-oL8A&t=779)

- https://github.com/ucsandman/marketing-studio

You ship the product in a week, then burn another one, making the launch video, the demo, the OG image, and five social clips. Marketing Studio renders the whole suite from one/comand in clawed code. Playright films your running app. Headless Blender does the logo reveal. Remotion composes every final video, and 11 Labs scores it. After picture lock, expomorphing menu turns a React Native composer into the picker itself instead

## expo-morphing-menu

[13:22](https://www.youtube.com/watch?v=-miMdT-oL8A&t=802)

- https://github.com/rit3zh/expo-morphing-menu

of opening a separate bottom sheet that fights the keyboard. One spring controller animates the field size, position, and corner radius together, while live keyboard height keeps the surface pinned above it. You can register camera, photo, file, or plug-in panels. Navigate between them through a typed API.

## sigwire

[13:47](https://www.youtube.com/watch?v=-miMdT-oL8A&t=827)

- https://github.com/yeet-src/sigwire

Sig wire is tail f for Linux signals watching the whole machine through kernel trace points instead of attaching strace to one process. Each row tells you who raised a signal, where it landed, how it was generated, whether a handler caught it, and how long that handler ran. The useful bit is EIN. It shows which blocked SIS call got interrupted and whether say restart recovered it. NTFS MAC gives Apple Silicon Max NTFS write access without installing a kernel extension or

## ntfsmac

[14:12](https://www.youtube.com/watch?v=-miMdT-oL8A&t=852)

- https://github.com/khr898/ntfsmac

weakening system integrity protection. A disposable Linux microVM runs NTFS 3G, then exports the drive back to Mac OS over NFS on a hostonly bridge. You get a homebrew CLI today, plus a menu bar app that shows mount state at a glance. It's a heavier architecture than a driver, but a cleaner security boundary.

## Codex-Orchestration

[14:38](https://www.youtube.com/watch?v=-miMdT-oL8A&t=878)

- https://github.com/Cjbuilds/Codex-Orchestration

Codeex orchestration lets codec stay in charge while different models take explicit planning, review and implementation roles. That matters when one model writing the plan is also tempted to approve its own assumptions. The adviser can send the plan back through several revisions. Then executives work only after approval with codeex checking and delivering the result.

## sample-specship

[15:02](https://www.youtube.com/watch?v=-miMdT-oL8A&t=902)

- https://github.com/aws-samples/sample-specship

Specship gives Kero agents a specd driven path from reconnaissance to a merge ready pull request with hard gates instead of one long autonomous prompt. Brownfield works starts by mapping existing behavior. Then each milestone follows test-driven development. Independent agents validate code security browser behavior design and contract alignment. And fresh agents repair failures with regression tests. \[music\]
