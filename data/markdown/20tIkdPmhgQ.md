# GitHub Trending Weekly \#57: hop, coop-anything, nectarlink, omnidiff, t3code, blaze, DuoDesk, shim

[Watch the original video](https://www.youtube.com/watch?v=20tIkdPmhgQ)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Introduction

[0:00](https://www.youtube.com/watch?v=20tIkdPmhgQ&t=0)

Welcome back to GitHub awesome. This is GitHub trending weekly number 57. 35 trending open- source projects on GitHub right now. Let's go.

## hop

[0:11](https://www.youtube.com/watch?v=20tIkdPmhgQ&t=11)

- https://github.com/Arjun-Ingole/hop

Hop is a Windows app that installs Linux right next to Windows with no USB stick needed built-in C. It checks your PC first, then makes a small installer partition on your own drive and copies the Linux ISO onto it using the ISO's own signed bootloadader. You restart once and you're in the Linux installer with a list of the choices you'll need to make. It downloads Ubuntu, Linux Mint from their official servers and checks each download.

## coop-anything

[0:39](https://www.youtube.com/watch?v=20tIkdPmhgQ&t=39)

- https://github.com/cranebeaker/coop-anything

Co-op anything gives AI coding agents a playbook for turning single player PC games into co-op games you can play with friends. An MCP server reads a game's install folder to work out its engine and checks a shared directory of more than 230 co-op mods. Then the agent either finishes a mod someone already started or builds co-op from scratch.

## nectarlink

[1:02](https://www.youtube.com/watch?v=20tIkdPmhgQ&t=62)

- https://github.com/thtbee/nectarlink

Nectar Link connects your Android phone to your Windows PC so you can stop picking up your phone every time a notification arrives. Reply to messages, move files, share your clipboard, or open phone apps in their own windows on your computer. The devices connect directly over your network or USB with no account required. Some features need wireless debugging set up on your phone first. Omnidiff is a code diffing tool written in Rust that understands the structure of your code, not just its

## omnidiff

[1:27](https://www.youtube.com/watch?v=20tIkdPmhgQ&t=87)

- https://github.com/ivankovic/omnidiff

lines. It parses each file with tree sitter, so it can show that you renamed a function or moved a block instead of a wall of red and green lines. It handles 24 languages and falls back to a normal line diff for anything else. You can browse changes in an interactive terminal view, print plain output for scripts, or get JSON for your editor.

## t3code

[1:56](https://www.youtube.com/watch?v=20tIkdPmhgQ&t=116)

- https://github.com/pingdotgg/t3code

T3 Code is Theo's open-source control panel for the AI coding agents running on your own machine. Sign into the agents you already use, like Codeex, Claude Code, and run one command to start a local server. Then you manage all of them from one place, whether that's the web app, a desktop app, or the iOS and Android apps. It handles permission modes, multiple accounts, and source control, and it can run in the background.

## dsh-superagent-prototype

[2:24](https://www.youtube.com/watch?v=20tIkdPmhgQ&t=144)

- https://github.com/deepseek-ai/dsh-superagent-prototype

DSH Super Agent is a prototype of a proactive coding agent for a single GitHub repository built for Deep Seek Caress. When someone on your team asks for work on GitHub or on FishU if you connect it, it opens a work item and handles it in its own agent session and folder. Then it replies right where you asked, often with a pull request. It only acts when asked or when a team rule allows it.

## stack-diagram

[2:50](https://www.youtube.com/watch?v=20tIkdPmhgQ&t=170)

- https://github.com/caru-ini/stack-diagram

Stack diagram is an agent skill for clawed codecs and cursor that turns a one-s sentence description of your text stack into a clean architecture diagram. Say something like next.js on Versel talking to Postgress and Stripe and the agent builds the diagram, renders it and checks it over before handing it back. It pulls each tool's official logo at build time and never redraws or recolors it.

## skills

[3:16](https://www.youtube.com/watch?v=20tIkdPmhgQ&t=196)

- https://github.com/benjitaylor/skills

This repo holds Benji Taylor's design skills for coding agents, starting with stage show, which builds realistic product UI mockups in React. Ask for a still shot, a feature card, a cursor demo, or a bento grid, and the agent composes it using stage shows guidance on layout and motion. It comes with a starter kit and worked examples. Then it records what it built so the agent can watch its own mockup and fix what looks off.

## blaze

[3:43](https://www.youtube.com/watch?v=20tIkdPmhgQ&t=223)

- https://github.com/indexable-inc/blaze

Rejit in the Blaze repository makes rebuilding a Rust project after an edit take milliseconds instead of seconds. A background process keeps your whole project analyzed and compiled in memory using Rust Analyzer and the Cranalifty code generator. When you change a function, only that function gets recompiled and it's patched straight into the program that's already built with no full relink.

## HAS\_Prepper\_Disk

[4:09](https://www.youtube.com/watch?v=20tIkdPmhgQ&t=249)

- https://github.com/schematrix/HAS_Prepper_Disk

Has prepper disk turns a Raspberry Pi into an offline library you can reach from your phone or laptop. It uses Internet in a Box and Kwix to serve downloaded Wikipedia articles, maps, and repair guides over the Pi's own Wi-Fi hotspot. Once the content is downloaded, you can browse it without an internet connection. You'll need a Raspberry Pi 5 and an SSD with room for the archive.

## who-are-you

[4:34](https://www.youtube.com/watch?v=20tIkdPmhgQ&t=274)

- https://github.com/yt1988/who-are-you

Who are you is a privacy selfch check that shows what a website can figure out about you just from your visit. Running on Cloudflare workers. Open the page and scripts in your browser read your settings and fingerprints without asking for any permission. It writes a little portrait of you with your likely location, device, and browser. Then it grades 12 checks from A to F, flagging leaks like a time zone that doesn't match your IP with tips to fix each one. Duesk connects your computers and Android devices so they feel like one workspace.

## DuoDesk

[5:04](https://www.youtube.com/watch?v=20tIkdPmhgQ&t=304)

- https://github.com/0xCodez/DuoDesk

Move your mouse between a Mac and a Windows PC, copy text across devices, or use a tablet as a second screen. It can also bring your phone's calls, messages, and camera to your computer. devices connect directly without a cloud account and you choose which features to turn on.

## uncut

[5:28](https://www.youtube.com/watch?v=20tIkdPmhgQ&t=328)

- https://github.com/Balanov/uncut

Uncut is a tiny headless coding agent written in Go and shipped as one static binary with no dependencies made for shell pipelines, CI jobs and containers. It works with any OpenAI compatible endpoint, local models through Olama included. There's no interface, no telemetry, and no plugins. Just one agent loop with four tools. read a file, write a file, replace text, and run a command.

## godraw

[5:53](https://www.youtube.com/watch?v=20tIkdPmhgQ&t=353)

- https://github.com/egoist/godraw

Goddraw is a native whiteboard app written in Go by Egoist, built in the style of TLRAW and able to open and save the same TLDDR files. There's no web view and no JavaScript, just a native interface built on his MYO framework. You get shapes, arrows, frames, and a highlighter with grouping, alignment, and full undo. Boards can have several pages, save automatically, and export to PNG or SVG.

## initialis

[6:18](https://www.youtube.com/watch?v=20tIkdPmhgQ&t=378)

- https://github.com/azlen/initialis

Initialist generates ornate drop caps that look like they belong at the start of an old manuscript. Drag around to explore designs, pick a letter you like, and it fills the screen with variations. You can bookmark your favorites, preview one on a printed page, or download it as an image or animation. Each design is drawn in your browser and there's a library for adding one to your own website.

## open-3d-skills

[6:44](https://www.youtube.com/watch?v=20tIkdPmhgQ&t=404)

- https://github.com/Moh4696/open-3d-skills

Open 3D skills gives your coding agent a set of playbooks for building animated websites. It covers everything from 3JS scenes and scroll driven films to interactive diagrams that pull machines apart. The package also helps the agent check layouts in real browsers and record the finished page as a video. Some effects need an external image or video generation service. The codebuilt 3D scenes don't.

## shim

[7:11](https://www.youtube.com/watch?v=20tIkdPmhgQ&t=431)

- https://github.com/Balanov/shim

Shim is a small terminal based AI agent that connects your models, MCP tools, and agent skills in one place. You can use a hosted provider or a local model, then ask it to work on your code or manage its setup in plain language. It asks before editing files or running commands by default. The app itself is one binary, but you'll need to connect a model separately.

## neorex

[7:34](https://www.youtube.com/watch?v=20tIkdPmhgQ&t=454)

- https://github.com/alexrlocke/neorex

Neorex lets Neovim live inside the Rex terminal as real Rex PES written in Zigg. One Neoim runs quietly in the background and powers every pane you open. So your buffers, registers, undo history and language servers are all shared. When you split a window in Neovim, it opens as a proper Rex pane and closing that pane closes the window.

## teachable-figures

[7:56](https://www.youtube.com/watch?v=20tIkdPmhgQ&t=476)

- https://github.com/ywEdAi/teachable-figures

Teachable figures is an agent skill for Claude Code and Codeex that builds interactive figures for teaching where students learn by doing instead of just looking. Each lesson asks the learner to predict what will happen, change a cause, watch the effect, then explain a brand new case. The agent starts by writing down the idea, the common misconception, and the real behavior. Then picks a style from simple SVG to full 3D.

## looseleaf

[8:24](https://www.youtube.com/watch?v=20tIkdPmhgQ&t=504)

- https://github.com/kevintngo/looseleaf

Loose Leaf is Shaden UI drawn by hand, a React component library where every button, card, and input looks sketched on paper. It installs through the Shaden command line. So the components get copied straight into your project as code you own. There are 123 components, 61 ready-made blocks, plus handdrawn icons, doodles, stickers, and its own handwritten font.

## git-koi

[8:47](https://www.youtube.com/watch?v=20tIkdPmhgQ&t=527)

- https://github.com/yalongwastaken/git-koi

Gitcoy turns your GitHub activity into a pixel art koiish that swims across your profile page. built in Rust. Every night, a GitHub action draws a fresh looping GIF for your profile readme. The fish's colors come from the languages you code in, and it grows bigger as your contributions add up. Your streaks show up as markings on its body, and yesterday's activity decides how lively it swims. Ghost brings API testing into your terminal with keyboard shortcuts for sending requests and saving them into collections.

## Ghostman

[9:13](https://www.youtube.com/watch?v=20tIkdPmhgQ&t=553)

- https://github.com/4yk5/Ghostman

responses show up with formatted JSON, status codes, and timing details while your saved requests stay in local files. It also has a built-in web hook listener so you can catch a call back and inspect its headers and payload without leaving the terminal.

## fm1-sampler

[9:38](https://www.youtube.com/watch?v=20tIkdPmhgQ&t=578)

- https://github.com/ferluht/fm1-sampler

FM1 sampler turns an MVA FM1, a small music controller, into a sampler and eighttrack looper powered by your Android phone. The FM1 gives you the keys, knobs, and its little screen while the phone does all the sound processing with audio code written from scratch. Record from the mic, import a file, or pick from the built-in library, then play it as melodic notes, chopped up slices, or granular textures.

## lasm

[10:05](https://www.youtube.com/watch?v=20tIkdPmhgQ&t=605)

- https://github.com/Millillion/lasm

LSM compiles lean for programs ahead of time into web assembly, bringing a language built for mathematical proofs to the JavaScript world. Write your code in lean. Run one build command and you get a web assembly file plus a small JavaScript launcher. The same code can run as a node server, a serverless function on AWS Lambda or Cloudflare workers or an app in the browser.

## anyscene

[10:29](https://www.youtube.com/watch?v=20tIkdPmhgQ&t=629)

- https://github.com/apekshik/anyscene

Any scene builds photorealistic Blender scenes from a single paragraph with AI agents doing every step. The agent starts by generating reference images, then turns each prop into a 3D model through two different services and keeps whichever came out better. It scripts the room layout, sets up the lighting, and adds wear and grime so nothing looks too clean.

## bootgpt

[10:52](https://www.youtube.com/watch?v=20tIkdPmhgQ&t=652)

- https://github.com/kerlenton/bootgpt

Boot GPT is a tiny language model that fits in a computer's 512 boot sector and runs before any operating system loads. The boot code is handwritten assembly running in 16- bit real mode, the way a 1980s PC starts up. It loads the model's weights from the disk sectors right after it, then does every calculation with plain integer math. The model was trained in Python on fake Linux startup logs.

## arken-protocol

[11:20](https://www.youtube.com/watch?v=20tIkdPmhgQ&t=680)

- https://github.com/zacharybenson/arken-protocol

Arkin O is a library for passwordless sign-in on web servers with a Rust cryptography core that plugs into Express and Fast API. Instead of a password, each user has a private key and a public identity called a DID. When someone asks for a protected page, the server sends a one-time challenge. The user's app signs it with their key and sends it back, and the server checks that the signature matches the identity.

## koppar-lte-modem

[11:47](https://www.youtube.com/watch?v=20tIkdPmhgQ&t=707)

- https://github.com/Koppar-AI/koppar-lte-modem

The Copar LTE modem is an open hardware circuit board that gives your computer its own phone line through a single USBC cable. It's built around a Quctel LTE module, so your computer gets mobile data, text messages, and real voice calls. A small RP2040 chip on the board shows up as a USB sound card, so call audio goes through like an ordinary microphone and speaker.

## claude-animation-skills

[12:11](https://www.youtube.com/watch?v=20tIkdPmhgQ&t=731)

- https://github.com/artemnovitckii/claude-animation-skills

Claude animation skills helps you create short animated videos without filming anything. Each skill makes a different style. a 3D cartoon whatif explainer, a stick figure explainer, minimal black and white line art, a 3D route on a map, an exploded view of an object, and an animated line graph. Under the hood, they use 3JS and Gap with a local voice model reading the script and timing the animation to match.

## Droy

[12:38](https://www.youtube.com/watch?v=20tIkdPmhgQ&t=758)

- https://github.com/moonoops/Droy

Droid is an open-source AI assistant that runs on your Android phone built on Deep Seek harness with a Cotlin interface. Give it a task and an agent plans the steps, reads what's on screen, taps, swipes, and types its way through your apps, then checks that it worked. It hands the phone back to you whenever a signin or verification code comes up, and you can stop it anytime.

## pyWolf3D

[13:02](https://www.youtube.com/watch?v=20tIkdPmhgQ&t=782)

- https://github.com/atifcodesalot/pyWolf3D

Pywolf 3D is a remake of the classic Wolfenstein 3D, written from scratch in Python with Pygame, and the author wrote every line by hand with no AI help. It draws its fake 3D world the way the 1992 original did with a raycaster that casts one ray per column of the screen to find how far away each wall is. Sprites are scaled to look right at a distance and the music plays through an emulation of the old OPPL sound chip generated live.

## nanolight

[13:32](https://www.youtube.com/watch?v=20tIkdPmhgQ&t=812)

- https://github.com/justrach/nanolight

Nanolite is a spotlight style launcher for Mac OS written in Zigg with no Electron and the whole app is about 1 megabyte. Press a hotkey and start typing. It finds your apps even from initials or a typo. And the ones you open most rise to the top. It also does quick math, shows Google suggestions and opens results right inside its panel. You can jump straight to a result with command and a number.

## verdict

[13:58](https://www.youtube.com/watch?v=20tIkdPmhgQ&t=838)

- https://github.com/Balanov/verdict

Verdict is a tiny classifier that reads what happened when an AI agent ran a command and decides whether it actually worked. It looks at the command, the exit code, and the output. Then labels the run as success, failure, blocked, or unknown. That matters because a command can exit cleanly and still fail to do its job. The whole model weighs about 200 kilob, answering in about half a millisecond with no network calls. AI design- check is a set of 74 design rules, plus a checker for interfaces

## ai-design-check

[14:26](https://www.youtube.com/watch?v=20tIkdPmhgQ&t=866)

- https://github.com/enmerasoftware/ai-design-check

built by AI coding agents. Run it on your React view, spelt, or HTML files, and it points to the exact line where something breaks a rule, like a font size off your scale, an icon button with no label, or an emoji used as an icon. Other commands count duplicate button and card styles, and test your layout at phone width.

## skein

[14:52](https://www.youtube.com/watch?v=20tIkdPmhgQ&t=892)

- https://github.com/Balanov/skein

SCA is a control plane for running a swarm of local AI agents safely, written in Go as one static binary with no Damon and no database. You describe tasks in JSON with which ones depend on which, how many can run at once, and how long each one gets. Commands run directly, never through a hidden shell. Every batch of work belongs to an epoch.
