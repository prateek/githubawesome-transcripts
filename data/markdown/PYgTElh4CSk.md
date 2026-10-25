# GitHub Trending Weekly \#54: git-ai, sill, Filee, Tracely-ai, Snitch, web-ocean, earshot, net-merge

[Watch the original video](https://www.youtube.com/watch?v=PYgTElh4CSk)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Introduction

[0:00](https://www.youtube.com/watch?v=PYgTElh4CSk&t=0)

Welcome back to GitHub awesome. This is GitHub trending weekly number 54. 35 trending open source projects on GitHub right now. Let's go.

## git-ai

[0:10](https://www.youtube.com/watch?v=PYgTElh4CSk&t=10)

- https://github.com/feder-cr/git-ai

GI moves the heavy parts of version control onto a server so coding agents can work on the same repository without each cloning everything. Agents fetch only the files they need while history queries and landing changes happen centrally. You can also plug in your own conflict resolver, including an AI model. It's an independent open- source implementation inspired by Anthropic Scion design.

## sill

[0:36](https://www.youtube.com/watch?v=PYgTElh4CSk&t=36)

- https://github.com/Saffsanity/sill

Sill puts any Mac window or your whole desktop on your iPhone or iPad. Pair a device once by scanning a code. Then pick windows from a bar and control them with touch, a trackpad, a keyboard, or Apple Pencil. It works over Wi-Fi or a USB cable and away from home through your own VPN like tail scale. On the folding iPhone Duo, the layout adjusts as you open and close it. Fleet puts a file converter right under your cursor.

## Filee

[1:00](https://www.youtube.com/watch?v=PYgTElh4CSk&t=60)

- https://github.com/KnifeLemon/Filee

Hold a key, drag your files and drop them onto a format in the menu that appears. It converts locally and saves results beside the originals so your documents never need uploading. You can batch conversions or watch a folder for incoming files. Some formats need optional engines which FY downloads when needed.

## Tracely-ai

[1:24](https://www.youtube.com/watch?v=PYgTElh4CSk&t=84)

- https://github.com/jwuthri-cloud/Tracely-ai

Tracely turns failed AI agent runs into regression tests you can run before merging another change. It grades production traces, groups similar failures into issues, and lets you freeze a bad run with its recorded model responses and tool outputs. Those fixtures support repeatable tests without fresh model calls, provided your agent uses its replay integration.

## Snitch

[1:48](https://www.youtube.com/watch?v=PYgTElh4CSk&t=108)

- https://github.com/aixisstudio/Snitch

Snitch shows where your computer's network traffic goes and which apps are responsible. Connections appear in a live graph and on a world map with per app bandwidth history to help explain what's happening in the background. Traffic records stay on your machine and even IP geoloccation works offline. It visualizes connections and flags suspicious patterns. Blocking traffic still needs a separate firewall.

## Open Screen Sharing

[2:15](https://www.youtube.com/watch?v=PYgTElh4CSk&t=135)

- https://github.com/nekohasekai/open-screen-sharing

Open screen sharing is a better client for Apple's built-in Mac screen sharing written in Go and Swift on top of the protocol Apple's own screen sharing app uses. It runs on Mac OS, iPhone, and iPad, and it can also connect over RDP. It's tuned for both your local network and the internet, including direct tail scale connections and adds exclusive mouse control and a debug HUD.

## web-ocean

[2:39](https://www.youtube.com/watch?v=PYgTElh4CSk&t=159)

- https://github.com/Noniv/web-ocean

Web Ocean renders a moving ocean in your browser using web GPU with no game engine or rendering library. Simulated waves form white caps, sunlight glitters across the surface, and a free camera lets you fly over the water. You can adjust wind, swell, and sunset lighting as it runs. The whole scene opens from one self-contained HTML file, though you'll need Chrome with web GPU and a capable GPU.

## earshot

[3:05](https://www.youtube.com/watch?v=PYgTElh4CSk&t=185)

- https://github.com/Leonxlnx/earshot

Earshot gives coding agents audio feedback they can reason about. It describes sound files, finds moments matching a description, and checks how effects line up with video cuts. An agent can also synthesize effects from code, then revise them using measurements and audio model scores. The core tools run locally on CPU through a CLI or MCP server, though those scores still need a human listening check. Netmerge combines several internet connections like Wi-Fi, Ethernet, and a phone hotspot, so your

## net-merge

[3:31](https://www.youtube.com/watch?v=PYgTElh4CSk&t=211)

- https://github.com/rohit267/net-merge

apps use all of them at once. It's written in Go and creates a virtual network adapter with no account, no server, and noVPN. Each new connection goes to one of your links, and faster links get more of them. If a link drops, it stops getting new connections until it comes back.

## leanrea

[3:56](https://www.youtube.com/watch?v=PYgTElh4CSk&t=236)

- https://github.com/aicodeking/leanrea

Lean RIA gives coding agents a compact guide to inspecting compiled apps with ordinary command line tools. It routes each file type to a useful first command, then narrows the search through strings, imports, or extracted code. You can trace an electron feature or check a go binary dependencies without an MCP server. It also tells the agent to distinguish what it found from what it inferred.

## tv-vibehack

[4:21](https://www.youtube.com/watch?v=PYgTElh4CSk&t=261)

- https://github.com/Gathin23/tv-vibehack

TV Vibe hack replaces your Android TV's cluttered home screen with a lightweight launcher built around your apps. Give it setup prompt to a coding assistant. Choose your favorites and it backs things up before disabling unwanted packages over ADB. You get a four app doc, an app grid and navigation designed for the remote. Packages stay installed but disabled and a restore script brings the stock launcher back.

## harness2

[4:49](https://www.youtube.com/watch?v=PYgTElh4CSk&t=289)

- https://github.com/google-research/harness2

Harness Squared improves the setup around an AI agent while keeping the model's weights fixed. It proposes changes to prompts, memory or tool guidance, tries them on the current task, and combines useful changes by comparing how the runs behaved. Lessons carry forward to later tasks. You can explore alternatives in parallel or refine them sequentially with saved execution evidence to inspect alongside the adopted configuration.

## motion-prompt

[5:15](https://www.youtube.com/watch?v=PYgTElh4CSk&t=315)

- https://github.com/showheyohtaki/motion-prompt

Motion prompt helps when you can picture an animation but don't know what to call it. It pairs visual samples with names, explanations, and example prompts across motion graphics, camera moves, UI, web effects, and photography. Browse the gallery, pick what you want, and pass those references to your coding AI. There's also a skill for claude code and codecs that brings the specs and reference code into your project.

## timestral

[5:42](https://www.youtube.com/watch?v=PYgTElh4CSk&t=342)

- https://github.com/mistralai/timestral

Timestraw is Mistl's family of models for forecasting data over time with related signals predicted together. You feed it historical observations, add information you already know about the future, and get a range of possible outcomes rather than one confident looking number. The inference package runs on CPU or GPU, so you can try it without a dedicated graphics card.

## reason-network

[6:07](https://www.youtube.com/watch?v=PYgTElh4CSk&t=367)

- https://github.com/reason-machines/reason-network

Reason network lets your coding agent message a teammate's agent directly, even when they use different tools. A small background service on each computer shows who's working in which repository and branch, then routes messages into the right session. It supports tools including clawed code, codecs, and cursor with encrypted connections and cued messages for offline teammates.

## trim-1

[6:31](https://www.youtube.com/watch?v=PYgTElh4CSk&t=391)

- https://github.com/caveman-ai/trim-1

Trim 1 is a tiny model that decides which lines of a context an AI agent actually needs for its current question. It's written in pure go and runs on 712 gradient boosted trees in a file of about a megabyte, not a neural network. Give it a log, a file or a tool result along with a query and it keeps the useful lines in their original order. It marks wherever something was cut.

## yomado

[6:57](https://www.youtube.com/watch?v=PYgTElh4CSk&t=417)

- https://github.com/chekusu/yomado

Yumato is a native Mac OS app that creates virtual displays for visual AI agents built only on Apple's own frameworks. Give a task its own named virtual screen, then drag an app like Blender onto it. An agent such as Codeex can work there with screenshots, mouse, and keyboard while your main screen stays free. A bundled skill walks the agent through creating the screen, moving the windows, and putting them back afterward.

## Hy-Memory

[7:24](https://www.youtube.com/watch?v=PYgTElh4CSk&t=444)

- https://github.com/Tencent-Hunyuan/Hy-Memory

High memory gives AI agents a memory system that separates what happened from what's worth reusing. Its working mode stores session facts alongside lessons for future tasks. for coding. It also keeps a chain of actual code changes, including revisions that summaries can lose. Tenscent includes a Python SDK and Memhub, a desktop and command line tool for recalling history across authorized AI apps.

## opendesk

[7:50](https://www.youtube.com/watch?v=PYgTElh4CSk&t=470)

- https://github.com/useopendesk/opendesk

Openesk brings support email and website chat into one shared inbox, so your team can assign conversations and see updates live. Its built-in assistant, Ali, drafts replies and answers questions from your knowledge base with support for local models. You can publish a help center alongside it. The self-hosted edition runs the same code as the hosted service, so you can keep support conversations on your own infrastructure.

## c64-hw-simulator

[8:18](https://www.youtube.com/watch?v=PYgTElh4CSk&t=498)

- https://github.com/antirez/c64-hw-simulator

64 HW Simulator lets you break a virtual Commodore 64 one pin at a time and watch what happens. pull a chip, ground a signal, or disconnect a resistor, then inspect the screen and oscilloscope. The symptoms emerge from simulated board connections and chip behavior. You can explore repair hypotheses without touching a soldering iron, though a matching symptom is only a clue, and some electrical behavior remains approximate.

## binny

[8:45](https://www.youtube.com/watch?v=PYgTElh4CSk&t=525)

- https://github.com/openbin-ai/binny

Binny connects an AI model to reverse engineering tools and turns binary analysis into a report you can review. It reads decompiled functions, strings, and imports, records findings, and saves progress after each step. Local GIDra support keeps decompilation on your machine, while analysis scripts run in a restricted Docker sandbox without network access.

## frametell

[9:08](https://www.youtube.com/watch?v=PYgTElh4CSk&t=548)

- https://github.com/sitor-ai/frametell

FrameTell turns your notes, PDFs, or a single idea into an animated explainer video. Its director agent drafts a storyboard for your approval, then writes narration, generates a voice over, and builds the animated pages. You can point at a page and ask for changes before exporting a subtitled MP4. Rendering runs locally, while the model and voice services use your own API keys.

## esp32sim

[9:33](https://www.youtube.com/watch?v=PYgTElh4CSk&t=573)

- https://github.com/mikroverk/esp32sim

ESP32 SIM runs ESP32 firmware on your computer or in a browser, so you can test supported projects without plugging in a board. It boots real ROMs and boot loaders with models for displays, buttons, and other peripherals. The desktop version can connect firmware to a virtual Wi-Fi network and real services. Hardware coverage varies by chip, though, and the browser version has no network pass through.

## mcp-for-blender-pro

[10:00](https://www.youtube.com/watch?v=PYgTElh4CSk&t=600)

- https://github.com/anujasid/mcp-for-blender-pro

MCP for Blender Pro lets an AI assistant inspect and edit your Blender scene through chat. Ask it to arrange a product display or change materials. Then inspect the result in a viewport preview. You can connect cloud models or local Alama models and expose the same scene tools to an MCP client. Built-in chat includes operation approvals and named undo steps so you can review changes as they happen. Lucian UX UI prompt lets you try an interface before asking your coding agent to build it.

## lucian-uxui-prompt

[10:26](https://www.youtube.com/watch?v=PYgTElh4CSk&t=626)

- https://github.com/Seokwoooo/lucian-uxui-prompt

Browse interactive buttons, charts, or animated website sections. Then copy a prompt containing the working code and instructions for adapting it to your project. You can also take the raw HTML, CSS, and JavaScript yourself. The elements include light and dark themes, keyboard controls, and reduced motion support with no dependencies.

## Mayoi

[10:54](https://www.youtube.com/watch?v=PYgTElh4CSk&t=654)

- https://github.com/sorrycc/Mayoi

Mayo is a code editor written in Go that draws its interface directly on the GPU. You can split files into columns, edit with Vim motions, and stage individual changes from the gutter. A built-in terminal uses Ghosty's emulator. Its remote SSH mode is a useful detail. The file explorer, Git, and Search run on the remote host through your systems SSH with nothing extra installed there.

## enclose

[11:18](https://www.youtube.com/watch?v=PYgTElh4CSk&t=678)

- https://github.com/enclosedev/enclose

Enclose is a Mac OS workbench for CAD projects that are built from code powered by Claude. Open a model in 3D. Click the part you want to change and describe the change in plain words. Claude edits the project's code and rebuilds the model so you see the new version right away. It reads step files and runs on both Apple Silicon and Intel Max.

## SOMA

[11:41](https://www.youtube.com/watch?v=PYgTElh4CSk&t=701)

- https://github.com/Kai-Jungsthoefel/SOMA

Singing 3D parts by talking to a coding agent built on CAD query. Describe a case bracket or mount and an agent like clawed code or codeex writes the model as Python. S rebuilds it on every change. You can click, measure or sketch on the view to point out a problem and send that back to the agent. It checks overhangs and wall thickness, runs strength tests, and exports to STL or step.

## anan-iphone-use

[12:08](https://www.youtube.com/watch?v=PYgTElh4CSk&t=728)

- https://github.com/ananhq/anan-iphone-use

Anan iPhone use is ESP32S3 firmware that turns a small M5 stack stopwatch into an MCP server for controlling an iPhone. The board plugs into the phone over USBC and shows up as a mouse and keyboard with assist of touch handling the pointer. Your AI client watches the screen through screen sharing, decides the next step, and calls simple tools like tap, drag, and type.

## coop-anything

[12:33](https://www.youtube.com/watch?v=PYgTElh4CSk&t=753)

- https://github.com/cranebeaker/coop-anything

Co-op anything gives AI coding agents a playbook for adding co-op multiplayer to single player PC games. An MCP server works out a game's engine from its install folder and checks a directory of more than 230 co-op mods. From there, the agent either finishes an existing mod or reverse engineers the game and builds co-op from scratch. Bots test every build with real game clients over a Steam relay so friends can join with no port forwarding.

## casa-serra

[13:02](https://www.youtube.com/watch?v=PYgTElh4CSk&t=782)

- https://github.com/Sam1983Aing/casa-serra

Casera starts as a flat architectural floor plan, then builds a house around you as you scroll. The drawing is a slice through the actual 3D model. Scrolling raises the cut, reveals the walls, and takes the camera through the rooms. Materials appear as you enter each space. It uses 3JS with geometry built-in code and falls back to images and video on devices that can't render it. Marorrow puts notes and databases in

## Morrow

[13:27](https://www.youtube.com/watch?v=PYgTElh4CSk&t=807)

- https://github.com/Aarav2709/Morrow

a desktop workspace where each page stays a markdown file in your own folder. You can open an Obsidian vault or import a notion export, then organize pages into tables, boards, or calendars. Database values remain readable file properties, so they're accessible outside the app, too. It works offline without an account with built-in encrypted sync between computers on the same network.

## AI-Scientist-v3

[13:54](https://www.youtube.com/watch?v=PYgTElh4CSk&t=834)

- https://github.com/SakanaAI/AI-Scientist-v3

The Agentic Scientist version three of Sakana AI's AI scientist turns a short task description into experiments, ablations, and a written paper, all driven by coding agents. The agents propose ideas, run experiments in Docker containers, and score the results against the tasks rubric, then try again. After that come baselines, a sealed final evaluation, analysis, and the paper itself. Most peer-to-peer file tools make you trade one-time codes every single time you want to move a

## flipflop

[14:18](https://www.youtube.com/watch?v=PYgTElh4CSk&t=858)

- https://github.com/andunieee/flipflop

file. Flip-flop pairs your devices once and keeps a persistent trusted tunnel open between them. It routes transfers over Bluetooth, local Wi-Fi, or straight across the internet with automaticnat hole punching. You can push files or clipboard text between Linux, Mac OS, Windows, and Android whenever you want. No repairing required.

## parin

[14:46](https://www.youtube.com/watch?v=PYgTElh4CSk&t=886)

- https://github.com/Kapendev/parin

Parin is a simple 2D game engine for the D programming language. It aims for the space between a small library and a full engine like god do. You write one function that runs every frame, and you're free to structure the rest of your game however you like. It comes with pixel perfect physics, a dialogue system, animation from texture atlases and tile maps. \[music\]
