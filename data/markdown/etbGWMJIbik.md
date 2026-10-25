# GitHub Trending Weekly \#49: open-compute, VoiceStudio, fugleramme, jevlike, plexo, pizza-bot, bg0

[Watch the original video](https://www.youtube.com/watch?v=etbGWMJIbik)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Introduction

[0:00](https://www.youtube.com/watch?v=etbGWMJIbik&t=0)

Welcome back to GitHub awesome. This is GitHub trending weekly number 49. 35 trending open source projects on GitHub right now. Let's go.

## open-compute

[0:11](https://www.youtube.com/watch?v=etbGWMJIbik&t=11)

- https://github.com/elliothux/open-compute

Open compute runs the Cloudflare workers programming model on hardware you control. Packaged as one Rust binary instead of a stack of side cars. It bundles a pinned worker runtime with KV, D1, R2, durable objects, Q's, cron, and workflows, while SQLite and local or S3 compatible storage hold the data. Existing Wrangler workflows can deploy to it.

## VoiceStudio

[0:34](https://www.youtube.com/watch?v=etbGWMJIbik&t=34)

- https://github.com/debpalash/VoiceStudio

Voice Studio is what you run instead of watching an 11 Labs meter tick every time you generate a line. It clones a voice from a short sample, dubs a whole video with the speaker's voice preserved across languages, and doubles as a systemwide dictation tool, all on your own hardware. No account or API key. Under the hood, it routes between 16 TTS engines and 11 ASR engines, depending on the job.

## fugleramme

[1:01](https://www.youtube.com/watch?v=etbGWMJIbik&t=61)

- https://github.com/arnegiacomo/fugleramme

Fugler listens to the birds outside your window and turns them into art on your wall instead of a notification. It runs birdn net go to identify species from audio then draws each one with old public domain illustrations sized to the bird's real body mass and arranged by distance from center. It's an e- in panel on a Raspberry Pi or a web only kiosk if you skip the hardware and every illustration and size data set is credited.

## open-code-review

[1:29](https://www.youtube.com/watch?v=etbGWMJIbik&t=89)

- https://github.com/alibaba/open-code-review

Open code review is what Alibaba built internally after getting tired of AI reviewers skimming half a pull request. Point a general agent at a huge diff and it'll miss files or leave a comment on the wrong line entirely. This one pairs deterministic file selection and rule matching with an actual reasoning agent. So every changed file gets covered and comments land where they belong.

## jevlike

[1:53](https://www.youtube.com/watch?v=etbGWMJIbik&t=113)

- https://github.com/vinnylarouge/jevlike

Jev answers multiple choice questions without generating a single word. Ask an LLM to pick between a handful of options and it usually writes out full text. Then you parse the answer back out of it. Jevlicki scores every option in one forward pass using query vectors and attention, then hands you probabilities directly on their own benchmark. It's roughly a 100 times faster than a small decoder for an eight option choice.

## lint

[2:21](https://www.youtube.com/watch?v=etbGWMJIbik&t=141)

- https://github.com/shadcn-ui/lint

Shad and lint turns your Tailwind design rules into checks coding agents can run. You define which styles a component can change. Then violations explain what went wrong and suggest alternatives from your existing design system. A button with forbidden padding can point the agent toward its size variance instead. It works with ESLint or Oxlint on Tailwind V4 projects, even if you don't use Shad/ UI. Plexo uses every network

## plexo

[2:48](https://www.youtube.com/watch?v=etbGWMJIbik&t=168)

- https://github.com/anmolkapil/plexo

connection your laptop has at once instead of just one. You've got Wi-Fi and a phone tethered over USB, and your OS still routes the whole download through only one of them while the other sits idle. Plexo splits the file into 8 megabyte chunks across up to two connections spread ac spread across every interface and a work stealing queue means the faster network naturally does more of the work.

## pizza-bot

[3:15](https://www.youtube.com/watch?v=etbGWMJIbik&t=195)

- https://github.com/pizza-bot-app/pizza-bot

Pizza treats your AI agents work like an actual inbox instead of a terminal you're afraid to close. Kick off a longunn task and normally you're stuck watching the tab or hoping it's still running when you get back. This one checkpoints everything, so closing your laptop doesn't kill the run. And finished work lands in an unread queue, while anything needing your approval sits in action.

## bg0

[3:40](https://www.youtube.com/watch?v=etbGWMJIbik&t=220)

- https://github.com/opencoredev/bg0

Every background remover you've used probably means uploading your photo to someone else's server, hoping they don't keep a copy. BG0 skips that, running the whole model in your browser with web GPU, falling back to web assembly, so the image never leaves your machine. It downloads a brefnet light model once and outputs a transparent PNG. No account, no API key, no usage limits, and a browser library if you want to embed it elsewhere.

## Editable-Design

[4:09](https://www.youtube.com/watch?v=etbGWMJIbik&t=249)

- https://github.com/yejy53/Editable-Design

Editable design has an AI agent. Build a poster or infographic the way a designer actually would. Real text layers, independent shapes, and images. You can still select and move afterward instead of just spitting out a flattened PNG. It uses image models to nail down the visual direction, but none of those reference pixels make it into the final file. Everything gets rebuilt as clean, semantic HTML.

## page-mascot

[4:35](https://www.youtube.com/watch?v=etbGWMJIbik&t=275)

- https://github.com/nilbuild/page-mascot

Page mascot adds a character to your website that follows your cursor and reacts when clicked. Each mascot uses two sprite sheets, one for head directions, another for expressions. You can pick an existing character or use its coding agent skill to generate and align your own. Cursor tracking switches off without a fine pointer and the click animation respects reduced motion settings.

## AgentVerse-OS

[5:00](https://www.youtube.com/watch?v=etbGWMJIbik&t=300)

- https://github.com/agentverse-os/AgentVerse-OS

Self-hosting is great until you switch to your phone and your workspace is gone. Agent verse OS turns one Ubuntu server into your own cloud open from any browser. Each project gets an isolated container with VS Code, a terminal, and Claude code or codeex. So your workspace stays on the server when you switch devices. It stays locked behind tail scale instead of sitting open online.

## ToolReplay

[5:25](https://www.youtube.com/watch?v=etbGWMJIbik&t=325)

- https://github.com/Matthew0822/ToolReplay

Tool replay audits an AI agents recorded tool calls without executing them again. Its Python CLI flags repeated calls, inconsistent recorded responses, and tools outside a declared permission list. Reports stay identical for identical inputs, so you can compare them in git or fail CI on findings. It runs offline with no third party dependencies.

## sonar.cool

[5:48](https://www.youtube.com/watch?v=etbGWMJIbik&t=348)

- https://github.com/eperez28/sonar.cool

Sonar experiments with camera-free gesture control using your Mac speakers and microphone. It plays a highfrequency tone, measures frequency shifts and echoes from your hand, and translates movement into scrolling, swiping, or zooming. Audio stays in memory and is discarded after processing. Recognition still varies across setups, and the default tone can be audible to pets.

## AuK

[6:13](https://www.youtube.com/watch?v=etbGWMJIbik&t=373)

- https://github.com/Tencent-Hunyuan/AuK

AUK is a 1.5 billion parameter model that handles speech generation and editing through plain language instructions. It can synthesize speech from a reference voice, rewrite spoken content, adjust emotion or pacing, remove noise, and separate speakers. A flash trades some quality for four-step inference, while the base model offers more control.

## window-sweaters

[6:36](https://www.youtube.com/watch?v=etbGWMJIbik&t=396)

- https://github.com/saragordic/window-sweaters

Window Sweaters is a Mac OS menu bar app that wraps your active windows in knitted borders. You can change the pattern, stitch size, width, and color, while its buy app mode gives 37 supported apps their own handpicked designs. Unknown apps still receive a consistent color based on their name. It runs on private Mac OS APIs, and isn't notorized, so you'll click through a security warning to launch it.

## video-generator-client

[7:02](https://www.youtube.com/watch?v=etbGWMJIbik&t=422)

- https://github.com/letorig/video-generator-client

Every video generation API ships its own client, its own O, its own way to check if a job's done. This wraps four of the biggest sea dance, clinging, miniaxes, Hyuo, and Juan behind one async interface. So switching means changing a string, not your integration. You get text to video, image to video, a CLI, and a web UI with no node build required.

## ember

[7:24](https://www.youtube.com/watch?v=etbGWMJIbik&t=444)

- https://github.com/Made-In-Basement/ember

Somebody wrote an entire OS in assembly, so old DOS games would run on modern hardware. Ember's kernel is 46 kilobytes of handwritten NASM with its own bootloadader file system and a virtual sound blaster card. It runs real DOS executables, Doom and Hexon included alongside a graphical desktop with a file manager and a word processor. It's been tested on real hardware including a UFIO Dell and the desktop fits in one 735 kilobyte file.

## design-studio-ai

[7:54](https://www.youtube.com/watch?v=etbGWMJIbik&t=474)

- https://github.com/bestagentkits/design-studio-ai

Design Studio AI gives people and coding agents a shared workspace for web interfaces, slides, reports, 3D scenes, and motion graphics. Start from a brief, inspect the result, then refine it through chat or the manual editor without splitting work across separate files. Agents can connect through MCP or the CLI, and projects export to formats including HTML, PDF, PowerPoint, and WebM.

## regen-icons

[8:19](https://www.youtube.com/watch?v=etbGWMJIbik&t=499)

- https://github.com/kazdenc/regen-icons

Every AI agent building a UI needs icons, and it either invents inconsistent ones or grabs whatever's closest from a mismatched set. Region icons is 225 outline icons on one 24 pixel grid, each with a filled variant built so agents pull from a consistent system instead of guessing. Every icon compiles from one source, drawing into raw SVGs, React components, a sprite, and a searchable gallery.

## airspace

[8:46](https://www.youtube.com/watch?v=etbGWMJIbik&t=526)

- https://github.com/danielroe/airspace

Every side project starts the same way. spin up a database, wire up O, sort out hosting. Airspace skips that by using the personal data server you already have from Blue Sky at Proto as your backend instead. Your data lives in your own repository under a schema you define and the client generates full TypeScript types straight from it. It works with NXT, Astro or Plain Node. No separate database to stand up. Keystone Bench tests whether clinical chat assistants change their advice when the evidence

## keystone-bench

[9:13](https://www.youtube.com/watch?v=etbGWMJIbik&t=553)

- https://github.com/xinxuxin/keystone-bench

changes. It pairs Healthbench conversations with controlled twins that remove, replace, or contradict one decisive fact, plus paraphrase controls that should leave the answer unchanged. The benchmark scores the resulting action and checks whether the original physician rubric still applies.

## claude-siri-ai

[9:38](https://www.youtube.com/watch?v=etbGWMJIbik&t=578)

- https://github.com/mpociot/claude-siri-ai

Somebody wired Claude into Spotlight and Siri on Mac OS. So you hit command space and ask it something. It streams the answer into Apple's own Siri interface and works with writing tools on selected text. Under the hood, a sandboxed extension talks to a local bridge that calls the claude code CLI you're signed into. It's text only. No images or device actions.

## RSIAgent

[10:01](https://www.youtube.com/watch?v=etbGWMJIbik&t=601)

- https://github.com/AetherLabsAI/RSIAgent

RSI agent is a training free framework that helps AI agents improve in unfamiliar software without changing model weights. A curriculum agent chooses practice tasks, an actor works through them, and a separate verifier checks the results. Procedures, scripts, and failure lessons become reusable memory, moving from broad exploration into focused practice.

## O.status

[10:24](https://www.youtube.com/watch?v=etbGWMJIbik&t=624)

- https://github.com/CATCHINGL/O.status

O Status replaces Android's busy status bar with a compact iPhone Duo inspired overlay for the essentials. It combines cellular strength, Wi-Fi, network type, and a battery ring with dual SIM details and live transfer speeds one tap away. The indicator follows light or dark mode, supports custom sizing and placement, and can hide in full screen apps.

## kinesis

[10:47](https://www.youtube.com/watch?v=etbGWMJIbik&t=647)

- https://github.com/callbacked/kinesis

Kinesis turns Meta's neural band into a native Mac OS controller, so wrist and finger gestures can replace a handful of keyboard shortcuts. You can swipe between desktops, open mission control, control music, or pinch and rotate to adjust volume and brightness. The mappings are customizable. There's a practice mode, and the app stays in the menu bar.

## status-trio

[11:10](https://www.youtube.com/watch?v=etbGWMJIbik&t=670)

- https://github.com/lingyired/status-trio

Your Max menu bar shows Wi-Fi, battery, and volume as three separate icons eating up space. Status Trio merges them into the single combined icon iPhones had for years. Tap it for signal strength, network name, charge percentage, low power mode, and mute state. It ships in 12 languages, skips telemetry entirely, and only asks for location if you actually want the Wi-Fi network name shown.

## gap-trap

[11:35](https://www.youtube.com/watch?v=etbGWMJIbik&t=695)

- https://github.com/pliablepixels/gap-trap

Gap trap turns coding guidelines from suggestions into checks your AI agent cannot quietly ignore. It scans a repository, writes codebase specific contracts, and installs gates that fail commits or CI when those rules are broken. Its proven red check rejects tests that also pass against the old code, while ratchets stop known problems from growing.

## iphone-duo-macos-animation

[11:58](https://www.youtube.com/watch?v=etbGWMJIbik&t=718)

- https://github.com/lqSky7/iphone-duo-macos-animation

Your MacBook tracks its lid angle 60 times a second. It just never used that for anything fun. Mac Tilt hooks into that sensor and turns closing your laptop into a real 3D fold. Metal shaders handling the perspective, blur, and reflections on your frozen screen. It works off your live desktop, your wallpaper, or bundled art. Zero overhead while the lids open. The whole effect stays invisible until you start closing it. Trackpads on Linux have always felt like an afterthought. One acceleration

## omarchy-trackpad-plus

[12:25](https://www.youtube.com/watch?v=etbGWMJIbik&t=745)

- https://github.com/davefano/omarchy-trackpad-plus

curve no matter the hardware. Trackpad Plus gives Omari real per device profiles, system flat, a Mac inspired feel, or a fully custom curve you drag by hand. You get separate scroll speed and sensitivity scaling per trackpad, three and four-finger workspace swiping, and toggles for tap toclick and disable while typing.

## arsumbris

[12:51](https://www.youtube.com/watch?v=etbGWMJIbik&t=771)

- https://github.com/arsumbris/arsumbris

Our sus turns markdown and YAML files across repositories into a typed knowledge graph that checks fields and references. Its Electron app displays editable views of that graph, while MCP tools let your coding agent work with the same data and extend the interface. Repositories can depend on each other, so knowledge and tools carry across projects.

## nix-graph

[13:14](https://www.youtube.com/watch?v=etbGWMJIbik&t=794)

- https://github.com/AlexAntonik/nix-graph

Nyx graph lets you explore Nyx dependencies in your terminal and flip any package into a view of what depends on it. It turns Nick's path info output into an expandable tree with sorting, filtering, and size columns that separate a package's own size from its full dependency footprint. You can inspect your current system, a profile, or a derivation's build dependencies.

## panel

[13:38](https://www.youtube.com/watch?v=etbGWMJIbik&t=818)

- https://github.com/greentfrapp/panel

Panel is what you actually want on screen while an agent does real instead of a chat log scrolling past. Ask an agent to explore a data set and normally you get a wall of text back with no visibility into the notebook it ran or the scratch data it generated along the way. Panel puts a real Jupyter notebook live kernel right next to the chat and you and the agent can edit it at the same time.

## Minted

[14:05](https://www.youtube.com/watch?v=etbGWMJIbik&t=845)

- https://github.com/haplollc/Minted

Minted turns flat artwork into spinning 3D gold medallions for Swift UI without shipping separate model files. It builds geometry from vector paths, adds enamel and engraved lettering, and uses studio lighting so reflections move as you drag the coin. For badge grids, it renders thumbnails once and caches them to disk instead of keeping every coin animated.

## monid

[14:29](https://www.youtube.com/watch?v=etbGWMJIbik&t=869)

- https://github.com/monid-ai/monid

Monid gives AI agents one API for finding and calling tools across different providers. Its discovery endpoint returns candidates with prices, live health, and observed latency. So an agent can choose a service for each task instead of sticking with one vendor. This repository contains the connector layer, declarative definitions for requests, schemas, and usage billing.
