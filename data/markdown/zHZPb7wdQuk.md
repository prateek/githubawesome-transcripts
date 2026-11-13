# GitHub Trending Weekly \#58: rune, nsh, openjutsu, Henge, mygo-music, vork, devvm, satmux, airpointer

[Watch the original video](https://www.youtube.com/watch?v=zHZPb7wdQuk)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Introduction

[0:00](https://www.youtube.com/watch?v=zHZPb7wdQuk&t=0)

Welcome back to GitHub Awesome. This is GitHub Trending Weekly number 58. 35 trending open source projects on GitHub right now. Let's go.

## rune

[0:11](https://www.youtube.com/watch?v=zHZPb7wdQuk&t=11)

- https://github.com/anomalyco/rune

Rune is a native UI framework written in Rust that draws everything on the GPU with its own renderer, text engine, layout, and spring animations. One codebase targets Mac OS, Windows, Linux, and the web. Every app can also run headless. So a coding agent can render screens to PNG, dump the element tree, and drive the interface with scripted input. That means the agent can check its own work before you ever open the app. Native shell is an open source

## nsh

[0:38](https://www.youtube.com/watch?v=zHZPb7wdQuk&t=38)

- https://github.com/longbridge/nsh

framework built in Rust that turns TSX and Tailwind into real native interfaces. The same module renders with UI kit on iOS, Android views, AppKit, Win32, GTK, GPUi, or HTML on the web. Host apps can load these modules at runtime as signed plugins, each running in its own sandboxed Quick.js VM. You write TSX once and get the systems own text, scrolling, and accessibility.

## openjutsu

[1:04](https://www.youtube.com/watch?v=zHZPb7wdQuk&t=64)

- https://github.com/D3voz/openjutsu

Open Jutzu lets you swap a character into a video using a reference photo. Drop in your clip, choose a character, and it uses AI to follow the original person's movement while keeping the soundtrack. You can also change clothing, replace objects, or edit the background. It runs locally through Comfy UI on an NVIDIA GPU, so you can make the edits on your own machine.

## Henge

[1:28](https://www.youtube.com/watch?v=zHZPb7wdQuk&t=88)

- https://github.com/Leviidev/Henge

Henge is an open-source emulator project that boots Mac OS on an iPhone or iPad. Instead of QMU or Apple's virtualization framework, it runs the Mac's ARM 64 code through its own JIT engine with its own memory management and virtual devices. Graphics go through a custom virtual GPU whose commands are replayed with Metal. The touch screen becomes a trackpad and on iPad the Mac display resizes to fit the screen.

## swarm-cursors

[1:55](https://www.youtube.com/watch?v=zHZPb7wdQuk&t=115)

- https://github.com/DhvanilPatel/swarm-cursors

Swarm Rebuild is a Chrome extension built as a tribute to Joel Khalifa's Swarm website. Press a shortcut and the page you're on wipes down to a blank canvas. Then a crowd of multiplayer cursors rebuilds it from a snapshot, dragging boxes, typing text, drawing with a pen tool, and duplicating repeated parts, all with synthesized sound effects. It's written in JavaScript with no dependencies.

## mygo-music

[2:21](https://www.youtube.com/watch?v=zHZPb7wdQuk&t=141)

- https://github.com/egoist/mygo-music

Go music player written in Go on the Migo framework with no web view. It plays your local files with tags, covers, and synced lyrics plus playlists, a cue and loudness normalization. On Mac OS, it has a notch. Everything else comes from plugins written in JavaScript or TypeScript, each asking for network or process access up front.

## vork

[2:45](https://www.youtube.com/watch?v=zHZPb7wdQuk&t=165)

- https://github.com/voyager-so/vork

Vorc is a headless 3D and VFX engine made for AI agents written in Rust and Slang and rendering on the GPU through Vulcan or Metal. There's no editor at all. An agent writes a scene as code, renders it, looks at the image, and revises. Scenes can customize camera rays, materials, and even how light travels. The examples range from a bird flock and a black hole to effects composited onto real footage.

## claude-animated-shorts

[3:11](https://www.youtube.com/watch?v=zHZPb7wdQuk&t=191)

- https://github.com/mromidev/claude-animated-shorts

Claude animated shorts is a skill that has Claude code build a full vertical animated story short using 3JS and motion. Claude works through the topic, script, voice, and shot plan, then renders 2D characters inside a painted 3D town with ink outlines, lens blur, and gliding cameras. Even the march score and sound effects are synthesized in code. Every frame renders on your own PC with no AI video generator involved.

## devvm

[3:39](https://www.youtube.com/watch?v=zHZPb7wdQuk&t=219)

- https://github.com/devvmhq/devvm

Devm gives every project folder its own isolated Linux VM. It reads your project files to set up the right tool chain, then runs claude code, codecs, or open code inside. The VM only sees that folder. Network access starts on an allow list and tokens for GitHub and Claude stay on your host. In clone mode, the agent works on its own copy and nothing reaches your repo until you fetch it.

## satmux

[4:04](https://www.youtube.com/watch?v=zHZPb7wdQuk&t=244)

- https://github.com/Th0rgal/satmux

Satm is a pure Python tool that speeds up slow in-flight Wi-Fi on geostationary satellite links. It keeps persistent connections open to a cloud server near the satellite ground station, so each new request skips extra trips to space and back. Traffic is compressed, signed, and exposed locally as a SOCK 5 or HTTP proxy. In the author's own test, loading six sites at once, dropped from 19 seconds to about five.

## CUI

[4:31](https://www.youtube.com/watch?v=zHZPb7wdQuk&t=271)

- https://github.com/yappologistic/CUI

CUI brings a full component kit to plain C99 with no dependencies and about 150 ready-made components. Build it with CMake on GCC, Clang, or MSVC. And the same code runs on Windows, Mac OS, and Linux through Win32, Coco or X11. Rendering goes through OpenGL with a software fallback. Light and dark themes, spring animations, and keyboard first controls come builtin.

## airpointer

[4:57](https://www.youtube.com/watch?v=zHZPb7wdQuk&t=297)

- https://github.com/musubipapi/airpointer

AirPointer is a Mac OS app that turns your AirPods Pro case into a pointer for your Mac. It reads the motion sensors in the closed case. So, moving the case moves the cursor and tapping its front counts as a click. A quick shortcut starts a session and a setup wizard walks you through calibrating it to your screen. It's built in Xcode with a bit of Objective C and everything stays on your Mac.

## mousepods

[5:22](https://www.youtube.com/watch?v=zHZPb7wdQuk&t=322)

- https://github.com/starman-tech/mousepods

MousePods turns AirPods into a headtracking mouse on Linux with no Apple device anywhere in the loop. It reads the motion sensors over Bluetooth and feeds them into a virtual input device that works on both Wayland and X11. A local app shows battery rings, live 3D orientation, and a raw packet view with guided calibration. You click by pressing the stem, tilting your head, or dwelling in place.

## cc-remote

[5:49](https://www.youtube.com/watch?v=zHZPb7wdQuk&t=349)

- https://github.com/AkaraChen/cc-remote

CC remote runs clawed code as an ACP agent with a split setup. The model runs on a remote server over SSH while file reads, edits, and shell commands happen on your own machine. It gives the agent the usual local tools and plugs into ACP clients like Zed. Sessions mirror, resume, and fork. Local MCP servers work with OOTH login and bash commands go through permission prompts you can approve by prefix.

## pinky

[6:15](https://www.youtube.com/watch?v=zHZPb7wdQuk&t=375)

- https://github.com/DIYgod/pinky

Pinky lets an AI agent operate a real iPhone or Android phone over MCP. You watch from your computer, approve anything risky, and can take over at any point. A gateway, not the agent, enforces approval gates on payments, sends and installs, blocks typing into password fields and hides banking apps by default. On Android, it can even work on a hidden display so the phone stays locked.

## tinker-ai-skill

[6:40](https://www.youtube.com/watch?v=zHZPb7wdQuk&t=400)

- https://github.com/drost-ai/tinker-ai-skill

Tinker AI Skill walks a coding agent through turning your own clawed code sessions into a fine-tuned model. It runs a nine-step workflow. Collect your transcripts, clean and anonymize them, train a Laura on Tinker, then merge it and convert to a GUF that runs locally in Llama CPP. It's the recipe behind the author's test for models. And a synthetic transcript generator lets you do a full dry run before touching real data.

## chimera-vocal-synth

[7:08](https://www.youtube.com/watch?v=zHZPb7wdQuk&t=428)

- https://github.com/jamesondh/chimera-vocal-synth

Chimera is a browser based voice synthesizer where every sound comes from a simulated airway with no samples anywhere. You shape the tongue, lips, and jaw in a live cutaway of a head and it can speak from text, sing a piano roll with lyrics or beatbox on a step sequencer. A beastiary mode gives you creature voices from a song bird to an elephant and male, female, and child bodies blend smoothly.

## textjs

[7:34](https://www.youtube.com/watch?v=zHZPb7wdQuk&t=454)

- https://github.com/anomalyco/textjs

Text.js is a React framework from Anomaly. The open code team for apps that render inside the browser's developer console. You write components like box and text handle keys with a use input hook and route pages with an app router. Each frame is laid out with yoga and written in one console. Log using styled spans and a frame with no changes logs nothing. There are VS Code and Chrome DevTools extensions too.

## waymark

[8:00](https://www.youtube.com/watch?v=zHZPb7wdQuk&t=480)

- https://github.com/piercefreeman/waymark

Waymark is a library for durable background tasks that survive server restarts, crashes, and longunning jobs built on a rust runtime with Postgres as its only dependency. You write workflows as ordinary async Python with real if, for, and while control flow, retries, and durable sleeps. The twist is that your code is compiled once and runs on a durable virtual machine so it doesn't replay from the start when a task recovers.

## noop

[8:28](https://www.youtube.com/watch?v=zHZPb7wdQuk&t=508)

- https://github.com/huacnlee/noop

N runs a small team of Claude code and codeex agents on your own computers coordinated through a free Cloudflare account. You give it a goal in one sentence and it breaks the work into tasks, runs them in parallel and reports back. When it needs you, it offers a short list of options you answer with one tap and it learns from your past choices how much to decide on its own.

## timon

[8:53](https://www.youtube.com/watch?v=zHZPb7wdQuk&t=533)

- https://github.com/ai-timon/timon

Teon is a self-hosted platform that runs a whole team of AI coding agents on your own machine. You describe a job and an orchestrator splits it into tasks for agents that code, review, merge, and research. Each task gets its own git work tree. A second model reviews the work and risky steps wait for your approval. It works with clawed code, codecs, open code, and more.

## PulsoIcon

[9:17](https://www.youtube.com/watch?v=zHZPb7wdQuk&t=557)

- https://github.com/CityPulso/PulsoIcon

Pulso Icon is an open-source set of nearly 10,000 animated icons built as a drop-in replacement for Lucide React on top of motion. Each icon gets its own motion that plays on hover or focus and it respects reduced motion settings. The same component names and props work across React View and Spelt with native versions for Jetack Compose and Swift UI plus a filled variant for about 1,700 icons.

## phoneuse

[9:44](https://www.youtube.com/watch?v=zHZPb7wdQuk&t=584)

- https://github.com/lxe/phoneuse

Phone use lets a Linux PC see and control an unmodified iPhone with no jailbreak, cable, or app on the phone. The screen arrives over AirPlay as a desktop window, while your PC pretends to be a Bluetooth mouse and keyboard, so clicks become taps and drags become swipes. Agents get the same controls through a command line or an MCP server and can read the screen as text before they act.

## 1.5-joint-module

[10:09](https://www.youtube.com/watch?v=zHZPb7wdQuk&t=609)

- https://github.com/yzytz17/1.5-joint-module

The 1.5 joint module is an open hardware robot joint built around a four layer motor driver board whose bare PCB costs about $1.50. It pairs an ESP32C3 running Simple Faulk with a small brushless gimbal motor and a 3D printed 10 to1 gearbox. The repo includes the PCB files, Solid Works parts, printable STLs, and openloop firmware. So you could stack them into an arm, a quadriped, or a pan tilt head. Watch Pointer turns an Apple Watch into a pointer for your Mac connected over

## WatchPointer

[10:37](https://www.youtube.com/watch?v=zHZPb7wdQuk&t=637)

- https://github.com/umarz317/WatchPointer

Bluetooth with no Wi-Fi or servers. Aim the top edge of the watch and the cursor follows across every display. Tap to click, hold to drag, and use the digital crown to scroll. A small panel in the Max Notch shows battery and live aim. And there's even a little light gun game to test it.

## graphicle

[11:01](https://www.youtube.com/watch?v=zHZPb7wdQuk&t=661)

- https://github.com/graphicle-ai/graphicle

Graphical gives coding agents a memory of your project running as a single Rust program with no API key, account or telemetry. It parses your repo with Treesitter into a graph of files, functions, calls, and imports. Then stores docs, decisions, and past agent sessions alongside it. Agents query everything over MCP and get back short excerpts with file and line citations and stale memories get flagged when the code changes.

## ding

[11:29](https://www.youtube.com/watch?v=zHZPb7wdQuk&t=689)

- https://github.com/YusufCeng1z/ding

Ding is a toast notification library with real Spring physics written in Typescript with zero dependencies for React, spelt or plain DOM. Instead of stacking toasts, each new call morphs the one already on screen, and interrupted animations keep their momentum. Toasts can carry avatars, buttons, progress bars, and countdowns, and promise helpers handle loading states.

## office-engine

[11:52](https://www.youtube.com/watch?v=zHZPb7wdQuk&t=712)

- https://github.com/p10node/office-engine

Office Engine is an open- source library that opens and edits DOCX, XLSX, and PPTX files right in the browser. Built with TypeScript and React, it reads each file lazily in a web worker, so even huge documents start showing almost immediately, and only the visible pages, cells, and slides get rendered. Edits save back to the original format, and live collaboration with cursors and offline sync is built in.

## Spotish

[12:18](https://www.youtube.com/watch?v=zHZPb7wdQuk&t=738)

- https://github.com/huacnlee/spotish

Spottish is an unofficial native desktop client for Spotify built with NSH. Instead of opening the web app in a full browser window, it runs Spotify's own web player hidden in a browser you already have and drives it through the Chrome DevTools protocol. The interface on top is drawn natively. It works with free or premium accounts and ads play just as Spotify serves them. Headless is an agent skill that lets your coding agent set up a Mac, Linux, or Windows

## headless

[12:43](https://www.youtube.com/watch?v=zHZPb7wdQuk&t=763)

- https://github.com/kunchenguid/headless

machine over SSH so it can run unattended. It walks through never sleeping, signing in automatically after a restart, key only SSH and an optional tail scale join. Every step can be rerun and shows its result. At the end, it reads back every setting, restarts the machine and checks that it comes back.

## good-door

[13:08](https://www.youtube.com/watch?v=zHZPb7wdQuk&t=788)

- https://github.com/dreamers-laboratory/good-door

Good is a command line secrets manager for people and AI agents. Each machine's key lives in the OS vault or secure hardware like the Mac secure enclave or a Linux TPM. Agents can run commands that need credentials without ever seeing the values and output gets masked in agent shells. It also encrypts SSH keys, cloud login, and NV files in place.

## simcraft

[13:31](https://www.youtube.com/watch?v=zHZPb7wdQuk&t=811)

- https://github.com/dotslashsimran/simcraft

Simcraft is a collection of 24 clawed code skills, each a folder that teaches the agent one kind of hard work with its method, judgment calls, and tested scripts. The video skills cover 3D loops in 3JS, scripted screencasts, git history, time-lapses, and audio cleanup. On the engineering side, there's codebased mapping, regression bisecting, flaky test fixing, and threat modeling.

## ovnfs

[13:56](https://www.youtube.com/watch?v=zHZPb7wdQuk&t=836)

- https://github.com/stencil-hq/ovnfs

OpenFS gives every coding agent its own isolated copyon-write checkout of any folder git repo or not without copying it. It runs one background damon that serves every checkout as a single mount using NFS on Mac OS fuse on Linux and SMB on Windows. Agents work in their checkout. You review the changes with a diff and a three-way apply merges them back. Flawless UIUX is a skill and local command line tool that helps codeex and open code design, redesign, and refine

## flawless-ui-ux

[14:20](https://www.youtube.com/watch?v=zHZPb7wdQuk&t=860)

- https://github.com/smokeeaasd/flawless-ui-ux

web interfaces. Instead of pushing one look, it starts from your product, then checks the rendered result in a real browser with playright and axe. It flags low contrast, tiny text, horizontal overflow, broken images, and repeated copy at desktop and phone sizes.

## mini-harness

[14:44](https://www.youtube.com/watch?v=zHZPb7wdQuk&t=884)

- https://github.com/phuryn/mini-harness

Mini harness is a small agent harness written for teaching about400 lines of Python with just two dependencies. It runs a full tool loop with file shell and search tools plus resumable sessions, compaction, skills, MCP servers, and sub aents. In goal mode, a task only counts as done after a verify command passes and a fresh reviewer agrees. Permissions can even be judged by a second model.
