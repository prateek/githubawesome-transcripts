# GitHub Trending Weekly \#48: pr-lens, bankmcp, niubigeo, i-have-adhd, bot-crossing, Spun, Flectar

[Watch the original video](https://www.youtube.com/watch?v=uAocwDKfDuQ)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Introduction

[0:00](https://www.youtube.com/watch?v=uAocwDKfDuQ&t=0)

Welcome back to GitHub awesome. This is GitHub trending weekly number 48. 35 trending open source projects on GitHub right now. Let's go.

## pr-lens

[0:11](https://www.youtube.com/watch?v=uAocwDKfDuQ&t=11)

- https://github.com/coldteadotai/pr-lens

Reviewing a PR full of AI generated changes means scrolling a diff trying to reconstruct what moved where. PR Lens drops an animated diagram into the pull request. One for architecture, one for data flow. Color-coded green for new, amber for changed, red for deleted. It scales up to a monor repo. six lanes and 37 nodes in their tests. Run it as a GitHub app with no API key or a CLI you can preview locally.

## bankmcp

[0:38](https://www.youtube.com/watch?v=uAocwDKfDuQ&t=38)

- https://github.com/noskillish/bankmcp

Bank MCP lets your AI assistant see your bank account read only so you can just ask what you spent on groceries in August. It runs on PSD2, the open banking standard covering over 2,700 European banks. And you log into your bank's site to approve access. Your credentials never touch this server. It doesn't store balances or transactions, just consents and account IDs.

## niubigeo

[1:03](https://www.youtube.com/watch?v=uAocwDKfDuQ&t=63)

- https://github.com/Albert-Weasker/niubigeo

You have no idea if chat GPT or claude mentions your product when someone asks for a recommendation or who gets named instead. Newbio answers that. You give it a domain. It queries OpenAI, Anthropic, Gemini, Perplexity, Deepseek, and shows how each one describes your brand, where it loses to a competitor, and which source got cited. Every conclusion links back to the real answer.

## i-have-adhd

[1:27](https://www.youtube.com/watch?v=uAocwDKfDuQ&t=87)

- https://github.com/ayghri/i-have-adhd

Coding assistants love to explain themselves before they tell you what to do. This skill flips that. It forces Claude Codeex to lead with the next concrete step, numbers the tasks, cuts the tangents, and gives you a real time estimate instead of vague words. No more hope. This helps at the end either. Despite the name, you don't need an ADHD diagnosis to want responses that get to the point.

## itsgiving

[1:52](https://www.youtube.com/watch?v=uAocwDKfDuQ&t=112)

- https://github.com/gazijarin/itsgiving

This turns your face into a meme dispenser on video calls. Media pipe watches your expressions and the moment you roll your eyes or throw the timeout gesture, it overlays the matching reaction and pipes the feed out as a virtual camera. Sarin Zoom or Teams treat as a webcam. It calibrates to your resting face first since everyone's neutral expression reads slightly different. 14 reactions built in plus room for your own gifts.

## EverRoom

[2:20](https://www.youtube.com/watch?v=uAocwDKfDuQ&t=140)

- https://github.com/NxcoreAI/EverRoom

Ever Room is trying to fix the messiest part of using AI agents, context. Instead of dumping every file and chat into one prompt, it builds context rooms, scoped workspaces, where an agent sees only what belongs to that project with provenence. Every document edit lands as a reviewable operation. You can inspect before it runs and everything stays local by default.

## okf-agent-memory

[2:44](https://www.youtube.com/watch?v=uAocwDKfDuQ&t=164)

- https://github.com/okf-memory/okf-agent-memory

OKF agent memory skips the vector database entirely. It stores agent memory as plain markdown with YAML front matter inside your repo's knowledge folder. So every fact is a git diff away from audit or roll back. Search runs on local BM25 indexing and the maintainers clock search latency under 300 micros with zero embedding costs. It enforces a search before write habit so agents stop reinventing the same concepts.

## bot-crossing

[3:13](https://www.youtube.com/watch?v=uAocwDKfDuQ&t=193)

- https://github.com/Station-Sciences/bot-crossing

Bot crossing turns your coding agent sessions into a little astronaut colony. Each repository gets a plot and each session gets an astronaut whose behavior reflects whether it's working, stuck, or waiting for you. Click one to reopen the original thread. It reads local session files from clawed code, codecs, and parts of cursor without uploading them.

## Spun

[3:35](https://www.youtube.com/watch?v=uAocwDKfDuQ&t=215)

- https://github.com/yappologistic/Spun

Spun is a Linux music player that turns album artwork into a CD with vinyl and cassette views, too. You can drop in local music or browse Apple Music through Cider, then search and rearrange your queue without switching apps. Cider still handles streaming and must stay running. It's built in QT and C++ with a quiet Material Design 3 look that stays out of your way.

## anything2explainer

[4:00](https://www.youtube.com/watch?v=uAocwDKfDuQ&t=240)

- https://github.com/Vincentwei1021/anything2explainer

Anything to explainer skips the choice between hiring a presenter and trusting a generative model to draw your diagram. Give it a topic or a document and it renders the whole video in code through motion. So every frame is deterministic and every number traces to a source. It writes the voice over, syncs subtitles word by word and runs a QC pass before final render. Cool brushes is a drawing app built around one weird idea, six brushes that don't feel like brushes.

## kool-brushez

[4:24](https://www.youtube.com/watch?v=uAocwDKfDuQ&t=264)

- https://github.com/blakeshao/kool-brushez

There's score, which paints in musical staff notation, schematic for technical diagrams, and gunplot, which draws in model kit components. Switch between any of them, and you're still on the same canvas. Nothing reloads, nothing resets. It's built on p5.js, bundled locally with no CDN dependency.

## mactap-app

[4:50](https://www.youtube.com/watch?v=uAocwDKfDuQ&t=290)

- https://github.com/jaskirat1616/mactap-app

MacTap turns knocking on your MacBook into a keyboard shortcut. It reads the motion sensor built into Apple silicon, M2 and later, or M1 Pro, Max, and Ultra. So it can tell a single knock from a double left edge from right. Each pattern maps to an action with swappable presets for different workflows, plus per app overrides. Tap classification runs entirely on device. Nothing leaves the machine.

## whiteboard-animator

[5:16](https://www.youtube.com/watch?v=uAocwDKfDuQ&t=316)

- https://github.com/masihsultani/whiteboard-animator

Whiteboard animator turns a finished whiteboard style image into a video of someone drawing it one stroke at a time. It runs a bundled text detector so it writes actual words instead of tracing letters and orders the drawing the way a person would contain contents. Feed it a narration and it paces the strokes to match. It runs entirely on CPU. No GPU or API key needed though Gemini is optional for picking regions automatically.

## Flectar Mail

[5:45](https://www.youtube.com/watch?v=uAocwDKfDuQ&t=345)

- https://github.com/flectar/mail

Flector Mail skips the part where your email client is secretly a browser tab. It's written entirely in Rust and renders HTML email through its own pipeline instead of a web view. So nothing in your inbox gets a script engine to run in. The maintainers say it launches instantly on as little as 20 megabytes of RAM. It syncs Gmail, Outlook, and plain IMAP or JMAP, stores everything locally, and blocks remote images by default.

## INSLIB

[6:12](https://www.youtube.com/watch?v=uAocwDKfDuQ&t=372)

- https://github.com/jnz/INSLIB

Inslib fuses your IMU with GPS, a barometer, and a magnetometer into one navigation solution written in pure C11 with zero dependencies. So it fits on a microcontroller. It runs a UDU common filter for stability, holds altitude through a GPS outage via the barometer and never allocates or recurses. Safe for a real control loop. Feed Galileo has or Ublock Spartan corrections and the maintainers report accuracy down to a few centimeters. tighter still with RTK.

## booking-microservices

[6:43](https://www.youtube.com/watch?v=uAocwDKfDuQ&t=403)

- https://github.com/evangelosvlachos96-dotcom/booking-microservices

This repo skips the toy CRUD tutorial for a real flight booking backend split across five.NET services. Booking rights run through event store DB with actual event sourcing and Rabbit MQ plus Wolverine move events between services with durable inbox and outbox patterns. So messages process exactly once. The rest splits reads and writes across Postgress and MongoDB under CQRS with gRPC for service calls. a full observability stack.

## hyalite--liquid-glass

[7:11](https://www.youtube.com/watch?v=uAocwDKfDuQ&t=431)

- https://github.com/VII-Cae/hyalite--liquid-glass

Highlight skips the fake glass look everyone's used since 2020. Blur plus a translucent layer and actually bends light. It computes a distance field for each element's rounded corners and runs the refraction through real Snell's law physics. So straight lines curve at the edges like actual glass. It's one JavaScript file. No WebGL, no build step, just SVG filters and backdrop filter.

## vintage-latex

[7:37](https://www.youtube.com/watch?v=uAocwDKfDuQ&t=457)

- https://github.com/Foadsf/vintage-latex

Vintage Latex doesn't fake old paper with a filter. It rebuilds how 19th century documents were actually type set. 20 standalone lux and metapost examples cover the long s period liatures and lens ray tracing with diagrams that stay real searchable text instead of a flattened image. It runs on eBaramond and the physico library and needs lux specifically. PDF latex won't compile it.

## vistep

[8:03](https://www.youtube.com/watch?v=uAocwDKfDuQ&t=483)

- https://github.com/int64ago/vistep

Vstep turns things like JPEG compression or elevator scheduling into animated films you can pause and poke at. Each scene pairs a chapter video with its own calculation model. So adjusting a variable actually recalculates the visualization instead of replaying a canned animation. It runs entirely in the browser, no account or API key with narration and captions in English and Chinese.

## YourDynamicDashboard

[8:30](https://www.youtube.com/watch?v=uAocwDKfDuQ&t=510)

- https://github.com/xtditom/YourDynamicDashboard

Your dynamic dashboard replaces your new tab with a command center that never phones home. Everything from search history to your to-do list stays local. It's built-in vanilla JavaScript, no framework bloat with a command pallet on control K, drag and drop tasks, live weather pulled from Open Media, and a voice search mode they call Jarvis mode.

## macos-sysdata

[8:52](https://www.youtube.com/watch?v=uAocwDKfDuQ&t=532)

- https://github.com/Jarvis322/macos-sysdata

CIS data goes after the system data bucket. Mac OS never lets you actually see into it. scans roughly 180 items, simulator runtimes, Xcode caches, Docker volumes, old time machine snapshots, and tags each safe review or manual. Reviewable deletions go to trash first with 30 days to change your mind. The maintainer says killing booted simulators at shutdown cut their own tear down time from 33 seconds to under six.

## dream-loop

[9:20](https://www.youtube.com/watch?v=uAocwDKfDuQ&t=560)

- https://github.com/achimala/dream-loop

Dream Loop is an agent skill that builds toward a picture instead of a spec. It generates a target screenshot, builds the scene in 3JS, then hands the result to a critic sub aent that compares it against the target and sends back notes, looping until it's satisfied. There's optional Blender support for custom 3D modeling. The demo, an isometric fantasy build called Vesper, took about an hour to build with GPT6 Astra.

## tmax

[9:48](https://www.youtube.com/watch?v=uAocwDKfDuQ&t=588)

- https://github.com/theo-kirby/tmax

T-max treats every T-Max session on every machine you SSH into as one searchable list instead of a pile of separate ones. Hit prefix plus space and an FZF popup shows local and remote sessions together with Vim style navigation and it'll flag whether a clawed code or codeex agent running in one is idle, working, or waiting on you. Remote sessions attach over SSH through T-Max's control mode and reconnect automatically if the connection drops.

## bang-motion

[10:17](https://www.youtube.com/watch?v=uAocwDKfDuQ&t=617)

- https://github.com/bangtutorial/bang-motion

Bang Motion exists to stop AI agents from turning every video brief into a PowerPoint deck with fade transitions. It's an agent skill for openers, bumpers, and kinetic typography that enforces an anti-slide rule in code, so scenes get a moving camera and a persistent subject instead of a cut. Every frame is a pure function of time, so you can scrub it frame by frame.

## browser-use-pi

[10:41](https://www.youtube.com/watch?v=uAocwDKfDuQ&t=641)

- https://github.com/browser-use/browser-use-pi

browser use pies the usual playwright wrapper and has the model write raw JavaScript straight into a persistent V8 ripple which then talks to Chrome over the DevTools protocol directly sessions persist with saved login so follow-up queries pick up where the last one left off instead of starting a fresh browser you can cap runs by cost time or step count and it exports recordings and GIFs so you can actually see what the agent clicked

## astra-advisor

[11:09](https://www.youtube.com/watch?v=uAocwDKfDuQ&t=669)

- https://github.com/DannyMac180/astra-advisor

lets GPT6 Astra act like a tech lead instead of just a coder. It plans the work, decides which of three sub aent models actually needs to run it. Saul, Terra, or Luna, and won't merge anything until a fresh reviewer signs off. Every delegation shows its actual runtime settings and cost, plus a same token price comparison, so you can see what that exact task would have cost on a different model.

## rolling-number

[11:36](https://www.youtube.com/watch?v=uAocwDKfDuQ&t=696)

- https://github.com/kitlangton/rolling-number

Rolling number animates numbers rolling or flipping to a new value. And if the value changes again mid animation, it doesn't restart. It just interrupts and resumes toward the new target. It runs on CSS key frames with sampled spring easing instead of a JavaScript animation loop. And it's accessible by default. Screen readers get the plain formatted text while the animation stays decorative.

## mador.js

[12:01](https://www.youtube.com/watch?v=uAocwDKfDuQ&t=721)

- https://github.com/marsbos/mador

Mor bolts reactivity onto HTML you already have without making you adopt a framework. You get automatic dependency tracking and DOM bindings that update when state changes, batched so it doesn't thrash the page, and elements clean themselves up when they're removed from the DOM. There's no virtual DOM, no components, no build step, just a native ES module you drop in from npm or a CDN.

## Tailtab

[12:27](https://www.youtube.com/watch?v=uAocwDKfDuQ&t=747)

- https://github.com/Stocist/Tailtab

Tail tab gives every browser profile its own tail scale node. So different profiles can sit on entirely different tail nets at once instead of sharing one connection. It only routes tailnet traffic through the tunnel, picks a separate exit node per profile, and lets you switch tail scale accounts without reauthenticating each time. Everything runs through an authenticated loop back proxy, so nothing else on the machine can piggyback on the tunnel.

## SuperAstra

[12:54](https://www.youtube.com/watch?v=uAocwDKfDuQ&t=774)

- https://github.com/ScottStevenson/SuperAstra

Super Astra hooks into the Bis Hawk emulator and lets you edit a running SNES game just by describing what you want changed. It digs through the game's memory, RAM, hardware domains, the CPU bus to find the right values, and keeps a running notebook of what it's learned about that specific cartridge. You get checkpoints to test a hypothesis against a known game state, plus eight undo states if something breaks.

## NavierStokesAndEuler

[13:21](https://www.youtube.com/watch?v=uAocwDKfDuQ&t=801)

- https://github.com/openai/NavierStokesAndEuler

Open AAI's Navier Stokes and Uler publishes lean proofs accompanying its reported results on when smooth fluid motion breaks down. The repository covers Navier Stokes with external forcing and Oiler without it. An important distinction when reading the headlines. You can build the formalizations using lean and math lib with separate instructions for independent checking through comparator.

## Gridline

[13:46](https://www.youtube.com/watch?v=uAocwDKfDuQ&t=826)

- https://github.com/wieslawsoltes/Gridline

Gridline is a full spreadsheet app built in plain HTML, CSS, and JavaScript. No frameworks, no CDN, nothing running server side. The formula engine has its own tokenizer and parser behind 83 functions, handles cross sheet references, and renders the grid through web GPU with a canvas 2D fallback. It opens CSV and partially reads XLSX, plus its own JSONbased.grid line format, and everything autosaves locally in the browser.

## DeepSelect

[14:14](https://www.youtube.com/watch?v=uAocwDKfDuQ&t=854)

- https://github.com/deepseek-ai/DeepSelect

Deep Select replaces PyTorch's stock TopK with a custom CUDA kernel built for DeepSseek's sparse attention and sampling. And the team says it's two to 20 times faster than the vanilla version depending on the scenario. It's tuned for two specific cases, a BFlat 16 lightning indexer path and a float 32 sampling path and handles top K values up to 4,96 across variable batch and vocabulary sizes.

## openshaders

[14:42](https://www.youtube.com/watch?v=uAocwDKfDuQ&t=882)

- https://github.com/openshaders/openshaders

Open Shaders wants to be the shad CN of shader code, a registry you install from the terminal instead of copy pasting from some WebGL demo you'll never find again. It ships a live editor supporting both WebGL and WebGPU plus ready-made React components and JS modules, so a shader actually drops into a real site instead of staying a standalone demo.

## VolAnti

[15:05](https://www.youtube.com/watch?v=uAocwDKfDuQ&t=905)

- https://github.com/agamrossen/VolAnti

Vante detects drones by listening for propeller noise rather than radio transmissions. Four microphones feed a small processor that triggers audible, visual, and vibration alerts, then shares the warning with nearby units over Laura. The repository includes firmware, hardware designs, and a simulator. It only detects and alerts. It cannot locate or stop a drone.
