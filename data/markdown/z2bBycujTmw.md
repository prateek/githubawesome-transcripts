# GitHub Trending Weekly \#43: Cloudflare Computer, waku-agent, querysplat, findphone, Soup, morphicons

[Watch the original video](https://www.youtube.com/watch?v=z2bBycujTmw)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Introduction

[0:00](https://www.youtube.com/watch?v=z2bBycujTmw&t=0)

Welcome back to GitHub awesome. This is GitHub trending weekly number 43. 35 trending open source projects on GitHub right now. Let's go.

## Cloudflare Computer

[0:10](https://www.youtube.com/watch?v=z2bBycujTmw&t=10)

- https://github.com/cloudflare/computer

Cloudflare computer gives an agent a file system whose authoritative copy lives in a durable object SQLite then projects it into whichever execution surface you pick. A container mounts it as a real fuse file system with a full Linux userland and real binaries. Lighter backends run a shell or an ECMAScript module in a dynamic worker hitting the same store over RPC with no sync round trip.

## waku-agent

[0:36](https://www.youtube.com/watch?v=z2bBycujTmw&t=36)

- https://github.com/ShenSeanChen/waku-agent

Waku agent is a personal assistant you read rather than install built to show the four parts of any real agent harness loop memory and a val. The loop is about 95 lines of plain Python with no framework hiding it. The interesting piece is a retrieval gate that first asks whether a turn needs memory at all since irrelevant memories bias answers. Memory is one SQLite file you can open.

## querysplat

[1:02](https://www.youtube.com/watch?v=z2bBycujTmw&t=62)

- https://github.com/inspatio/querysplat

Query splat predicts 3D Gaussian splats from a handful of photos of one scene and the paper's idea is separating the geometry representation from the appearance one rather than learning both in the same tangle. The release runs feed forward or with test time optimization for a short refinement pass. It exports Gaussian ply files at your chosen opacity thresholds plus predicted cameras and depth point clouds.

## anydoc

[1:29](https://www.youtube.com/watch?v=z2bBycujTmw&t=89)

- https://github.com/firecrawl/anydoc

Any doc converts word, powerpoint, excel, open document, rtf, eub, csv, and pdf into markdown written in rust with node and python bindings. Every format parses into one shared document model and renders through one serializer. So a table escaping fix for DOCX fixes RTF and ODT at the same time. Format detection reads the bytes rather than the extension. So mislabeled files still convert.

## cargo-frisk

[1:54](https://www.youtube.com/watch?v=z2bBycujTmw&t=114)

- https://github.com/HaidarJbeily7/cargo-frisk

Cargo frisk checks what cargo actually ships rather than what git tracks and those differ. Cargo package includes unttracked but unignored files. So a stray.env invisible to your secret scanner still lands in the tarball on crates.io permanently. It diffs the built crate against git ls files, then runs git leaks derived rules over the packaged files. An entropy gate and path context stop test fixtures failing your build. Fingerframe AI turns the two-hand

## finger-frame-effect-ai

[2:21](https://www.youtube.com/watch?v=z2bBycujTmw&t=141)

- https://github.com/sophiamyang/finger-frame-effect-ai

framing gesture into a window onto an AI generated version of the same video. A videotovideo model regenerates the whole clip. So the animated version blinks and moves exactly as you did. And every prompt gets a strict alignment suffix appended. No zoom or recentering facial features at the same screen coordinates so it lines up behind the frame. Gen

## genoffice

[2:47](https://www.youtube.com/watch?v=z2bBycujTmw&t=167)

- https://github.com/genspark-ai/genoffice

puts document spreadsheet presentation and PDF editors into one desktop suite with model driven editing built into each workspace. Its most interesting detail is file preservation. DocX saves regenerate only changed paragraphs while untouched XML and archive entries remain bite forbite intact. Sheets uses a Rust import and export sidecar and slides has its own pptx renderer.

## findphone

[3:12](https://www.youtube.com/watch?v=z2bBycujTmw&t=192)

- https://github.com/ben-z/findphone

Find locates a nearby Bluetooth device from the Mac OS command line for when Find My is switched off. Run it with a name and it tracks signal strength with an optional click that speeds up as you close in. So you sweep a room by ear. The author is careful about what the number means, saying plainly that a phone in a filing cabinet 2 meters away reads like 1 15 meters off.

## Soup

[3:38](https://www.youtube.com/watch?v=z2bBycujTmw&t=218)

- https://github.com/MakazhanAlpamys/Soup

Soup fine-tunes LLMs from one YAML file and one command, handling batch size, GPU detection, and quantization for you, running locally on your own card with Qura. The interesting new piece is reward hack mitigation for GRPO runs. When multiple signals agree, the model is gaming the reward. It raises the KL coefficient, then rolls back to the last good checkpoint if that fails.

## morphicons

[4:02](https://www.youtube.com/watch?v=z2bBycujTmw&t=242)

- https://github.com/guillermolg00/morphicons

Morphicons morphs any stroke icon into any other. And the trick is that rotations are never declared by hand. It solves the optimal similarity between the two shapes in closed form, then interpolates rotation, scale, and residual, each in its own space. So, arrow right to arrow down comes out as a clean 90° turn because the math found it. Corners are anchored as exact sample points, so a check mark doesn't round off in transit.

## Backchannel

[4:31](https://www.youtube.com/watch?v=z2bBycujTmw&t=271)

- https://github.com/twalichiewicz/Backchannel

Back channel is a user script that puts the hacker news and Reddit threads about whatever you're reading in a sidebar on the article itself. Quotes in the comments get matched back into the page and highlighted where they sit. So, clicking a highlight filters the thread to people arguing about that exact passage. You can vote and reply through your existing HN session. Reddit is readon and off by default since enabling it sends your browsing to Reddit.

## vphone-ws

[5:00](https://www.youtube.com/watch?v=z2bBycujTmw&t=300)

- https://github.com/zqxwce/vphone-ws

Vphone workstation is a native Mac OS app for running virtual iPhones wrapping Locker 233's VPON Cly in a real library window. Every VM with its live state, iOS and cloud OS build, CPU, memory, and UDID at a glance, plus clone, rename, and export. The create wizard streams progress step by step and hands you an exportable log. It checks host readiness first since these research VMs need SIP research guests allowed and AMFI bypassed.

## Swiftlet

[5:29](https://www.youtube.com/watch?v=z2bBycujTmw&t=329)

- https://github.com/leonickson1/Swiftlet

Swift runs 35B and 80B Quen mixture of experts models on Apple devices by keeping the dense core in memory and streaming routed experts from SSD. QAC files turn each expert fetch into one read while caching and metal kernels handle inference. The maintainer reports the 35B model using about 25 GB of RAM on an iPhone 17 at roughly one token per second.

## capptivo

[5:55](https://www.youtube.com/watch?v=z2bBycujTmw&t=355)

- https://github.com/SECHAK-AG/capptivo

Captivo is a screen recorder for demo videos, the kind where the camera follows your cursor and clicks trigger zooms. Open a fresh recording and it suggests zoom fragments from where you actually clicked. Capture runs native per platform, Screen Capture Kit, Windows Graphics Capture, and Pipewire into hardware H.264 264 with a crash safe fragmented MP4. Captions run on device through whisper.cpp.

## shitty

[6:22](https://www.youtube.com/watch?v=z2bBycujTmw&t=382)

- https://github.com/pg83/shitty

Shitty is a terminal emulator that keeps all its state on the CPU and hands rendering to a single Vulcan compute shader, drawing only the cells that actually changed. It's a hard fork and rewrite of Zuti. Coverage is deep for the parts people hit daily. Kitty keyboard protocol, five mouse protocols, scroll back that reflows on resize, OSC8 hyperlinks, no sixle and no birectional text which the readme states plainly bindwidth sizes an on-prem LLM deployment by finding the constraint

## bindwidth

[6:49](https://www.youtube.com/watch?v=z2bBycujTmw&t=409)

- https://github.com/juxhinr/bindwidth

that actually stops it rather than guessing from model size alone. It calculates memory for the KV cache, shared prefill, and decode capacity and the runtime session ceiling, then identifies which limit binds. Hardware profiles distinguish measured results from estimates, and scenarios export as markdown or JSON.

## open-edit

[7:14](https://www.youtube.com/watch?v=z2bBycujTmw&t=434)

- https://github.com/veedstudio/open-edit

OpenEdit burns stylized subtitles into a video from your coding agent. point clawed code or codeex at a file and it transcribes, designs captions to match the clip, renders through ffmpeg and opens a preview, then takes plain language corrections like moving the text up or emphasizing one word. Transcription uploads your video to V and spends credits from a free account you have to create.

## da-cli

[7:40](https://www.youtube.com/watch?v=z2bBycujTmw&t=460)

- https://github.com/FZ2000/da-cli

backs up the DeviantArt art you follow to a local folder and the whole tool is Python standard library with zero runtime dependencies. A SQLite index means a rerun costs one API call when nothing new was posted. So a daily launch job is nearly free. Secrets go to the Mac OS keychain rather than a dot file and a diagnose command tells you when a scheduled run has been quietly failing.

## VirtualMacOniPad

[8:06](https://www.youtube.com/watch?v=z2bBycujTmw&t=486)

- https://github.com/nfzerox/VirtualMacOniPad

Virtual Mac on iPad runs Mac OS in a hardware virtualized VM on an M1 iPad. And the hard part was the frameworks. Apple's hypervisor and virtualization libraries live only inside Mac OS's dild shared cache. And pulling them out is lossy. A script walks the cach's slide information, separates rebases from cross image binds, relays out the segments, and emits new chained fixups with pointer authentication intact.

## jungle-trail

[8:33](https://www.youtube.com/watch?v=z2bBycujTmw&t=513)

- https://github.com/StarKnightt/jungle-trail

Jungle Trail is a first person walk through a procedural jungle in 3JS with no art files at all. Every texture is a GLSL function rendered into a target and normal maps come from sobell sampling that same function. So the normal can never disagree with the albido. The canopy is left out of the shadow map entirely and replaced with an analytic transmittance term.

## Desko

[8:57](https://www.youtube.com/watch?v=z2bBycujTmw&t=537)

- https://github.com/typewriter03/Desko

Desco turns an old phone into a desk dashboard pushed from your PC over websocket to one browser tab. No app and no cloud. Five scenes rotate clock and weather now playing with time synced lyrics. You can tap to seek live CPU and GPU stats. Git and editor state and a Pomodoro timer that lives server side so reloads don't reset it. There's no authentication so keep it on your home network.

## doc7

[9:22](https://www.youtube.com/watch?v=z2bBycujTmw&t=562)

- https://github.com/magicrew/doc7

Doc 7 converts documents to markdown by rendering each page and handing it to your own vision model rather than extracting a text layer. That means charts arrive as labels, values and trends. Diagrams keep their ordering and relationships and a screenshot's visible UI state survives. A failed page is marked failed rather than written as truncated markdown and resume tries just those pages while leaving the good ones bite identical.

## rork-medieval-3d-chess

[9:51](https://www.youtube.com/watch?v=z2bBycujTmw&t=591)

- https://github.com/alexngdev99/rork-medieval-3d-chess

King's Gambit is a 3D chess game where the pieces are rigged characters with idle, attack, and death animations and captures play as a cinematic. The camera punches in, the strike lands on the hit frame, and the loser burns away from the souls upward through a shader dissolve. The rules core never imports 3JS, so logic stays testable headlessly. Search runs in a web worker, so the render loop never blocks.

## outreachr

[10:18](https://www.youtube.com/watch?v=z2bBycujTmw&t=618)

- https://github.com/lalalune/outreachr

Outreacher is a fundraising CRM that keeps everything in a seclite vault you own with secrets in the OS keychain rather than the database. The interesting part is where the guardrails live. Duplicate sends, daily and hourly caps, per domain cooldowns and suppression lists are enforced by database triggers before anything reaches Gmail or Outlook. Security relevant activity is append only and hashchained.

## ComfyUI-Spectrum-MiniMax-H3

[10:44](https://www.youtube.com/watch?v=z2bBycujTmw&t=644)

- https://github.com/xmarre/ComfyUI-Spectrum-MiniMax-H3

This node speeds up Miniaax H3 video generation in Comfy UI by not running the transformer on every step. It fits a CHB ridge model to the hidden features after the final block, forecast them for intermediate steps, and runs the real output heads regardless. Ancestral samplers stay native because injected noise breaks the smooth trajectory it fits.

## Token-Saver

[11:08](https://www.youtube.com/watch?v=z2bBycujTmw&t=668)

- https://github.com/Marktechpost/Token-Saver

Token Saver is a clawed desktop extension that keeps big PDFs out of the context window entirely. Local hybrid search BM25 blended with a local embedding model finds the passages that answer your question and sends only those with page citations below about 20 pages. It's not worth it and the authors say so. They also publicly walked back their own earlier recall numbers after their retrieval changes made them stop reproducing.

## Falco

[11:37](https://www.youtube.com/watch?v=z2bBycujTmw&t=697)

- https://github.com/poxk/Falco

Falco is a browser engine in about 36,000 lines of Rust with nothing borrowed from Chromium or Gecko down to a handwritten PNG encoder and its own JavaScript VM with a bite code interpreter and a JIT. Point it at a URL and it writes a real PNG or opens a window you can scroll and fill forms in. The readme is the best part, a section separating what actually runs from what merely compiles.

## stickman-video-director

[12:04](https://www.youtube.com/watch?v=z2bBycujTmw&t=724)

- https://github.com/kaomei/stickman-video-director

Stickman video director is a codec skill that does the directing before you spend generation credits. Paste your copy, pick an aspect ratio and a light or dark theme, and it returns a six scene proposal with narration, camera moves, transitions, and sound. Approve it and you get six standalone prompts, each repeating the character, line weight, and pallet locks, so separately generated clips still stitch into one minute.

## RealReplicaBench

[12:31](https://www.youtube.com/watch?v=z2bBycujTmw&t=751)

- https://github.com/Accio-Lab/RealReplicaBench

Real Replica Bench tests whether AI agents can finish long business workflows inside reproducible replicas of online services. Its 107 tasks span browser work, command line tools, files, and API or MCP operations, including product publishing, and freight booking. Each attempt starts in a fresh container, changes state in local mock services, and leaves artifacts, logs, and verifier results for inspection.

## diri

[12:58](https://www.youtube.com/watch?v=z2bBycujTmw&t=778)

- https://github.com/cristicretu/diri

Diri runs several coding agents side by side on Mac OS, each in its own git work or on a remote host. The design choice worth stealing is process separation. A headless Swift Damon owns the PTY and out lives the app with a separate tiny helper holding the PTI master so sessions survive a demon crash. Closing the window kills nothing. Adding a new agent is a JSON manifest rather than code.

## MAGI-2-preview

[13:24](https://www.youtube.com/watch?v=z2bBycujTmw&t=804)

- https://github.com/SandAI-org/MAGI-2-preview

Magi 2 preview generates 10-second video with its own soundtrack from a prompt or a prompt plus a still. It's 114 billion parameters that activate six per token and it runs in two passes, one denoising at low resolution and a refiner taking that to 1080p. Audio is generated alongside the picture and the requirement is eight hopper GPUs and 307 GB of weights. So this is cluster work. Can I vibe code? It helps you judge whether a paid SAS subscription can be replaced by a personal app built with a coding agent.

## canivibecodeit

[13:52](https://www.youtube.com/watch?v=z2bBycujTmw&t=832)

- https://github.com/canivibecodeit/canivibecodeit

Each listing gives a yes kind of or not really verdict, an exact build prompt, and the trade-offs you inherit by leaving. Contributions are plain JSON files submitted through pull requests. Network effects, proprietary data, and expensive infrastructure still count as genuine moes.

## creakwork12

[14:19](https://www.youtube.com/watch?v=z2bBycujTmw&t=859)

- https://github.com/ArcaEge/creakwork12

Creekwork 12 reads your laptop's lid angle sensor and turns the hinge into a creaky wooden door. Pitch follows the angle, volume follows how fast you move it, so slamming the lid sounds different from easing it shut. It's a rust port of lid angle sensor to the framework 12. And the filtering is tuned to that specific hinge stiffness. So other laptops are untested. The stated reason for building it is that it's funny.

## chapter-tgz

[14:47](https://www.youtube.com/watch?v=z2bBycujTmw&t=887)

- https://github.com/dtolnay/chapter-tgz

Chapter TGZ is a tar.gz that lets you jump straight to a group of entries without decompressing everything before it and read different chapters on different threads at once. The trick is where the boundary markers live. They're encoded as valid but empty GZIP blocks with unusual Huffman alphabets. So every existing tool still reads the file as an ordinary archive and ignores them completely.

## deepseek-v4-flash-mi300x

[15:13](https://www.youtube.com/watch?v=z2bBycujTmw&t=913)

- https://github.com/ryanzhou/deepseek-v4-flash-mi300x

This repo runs Deepseek V4 flash 304 billion parameters on one AMD MI300X with no extra quantization and it's really a bug hunt write up. The card uses AMD's own FP8 variant rather than the standard one. So a kernel assuming the wrong format is off by a factor of two. AOE routing kernel masked its padding lanes against the wrong bound quietly corrupting tool names under load. \[music\]
