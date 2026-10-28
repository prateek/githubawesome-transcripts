# GitHub Trending Today \#22: Vouch, VisionClaw, Ralph Playbook, x-research,  LocalGPT, ChernyCode

[Watch the original video](https://www.youtube.com/watch?v=a1dVtpA9ES8)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Introduction

[0:00](https://www.youtube.com/watch?v=a1dVtpA9ES8&t=0)

This is GitHub trending today number 22 and I've got 30 open source projects that are trending right now. AI projects and developer utilities that are getting serious traction on GitHub. Let's go.

## Vouch

[0:14](https://www.youtube.com/watch?v=a1dVtpA9ES8&t=14)

- https://github.com/mitchellh/vouch

Your open- source project is drowning in AI generated garbage PRs from people who don't understand the code. Mitchell Hashimoto built Vouch to fix that. Explicit trust system where users have to be vouched for by trusted community members before they can contribute. Maintain a flat file list of vouched and denounced users. GitHub actions autoclose PRs from unvouched people. Collaborators can vouch or denounce via issue comments.

## VisionClaw

[0:42](https://www.youtube.com/watch?v=a1dVtpA9ES8&t=42)

- https://github.com/sseanliu/VisionClaw

Vision Claw connects Meta Rayban glasses to Gemini for real-time AI vision and voice interaction. Tap the AI button. Speak and Gemini sees what you're looking at through the camera. It can add items to lists, send messages, search the web, or control smart home devices by routing through the open claw gateway. Streams camera at 1 fps and birectional audio over websocket to Gemini live API.

## Ralph Playbook

[1:08](https://www.youtube.com/watch?v=a1dVtpA9ES8&t=68)

- https://github.com/ClaytonFarr/ralph-playbook

Ralph playbook is a guide for using Ralph effectively. Based on Jeff Huntley's research and videos, it covers a three-phase workflow. jobs to be done, specs, planning mode, building mode. Maintain 40 to 60% context utilization. Use sub agents for memory extension. Steer with patterns and back pressure rather than instructions. Let the agent self-correct through iteration. Include specific file structures, bash scripts, and loop mechanics.

## Excalidraw MCP App

[1:37](https://www.youtube.com/watch?v=a1dVtpA9ES8&t=97)

- https://github.com/antonpk1/excalidraw-mcp-app

Excaladraw MCP app is an MCP server that lets AI create Excal diagrams. Ask Claude to draw architecture diagrams, flowcharts, or other visuals, and it opens an interactive excalid editor. Claude can take screenshots of the diagram and iterate based on feedback. Diagrams render with pan zoom, draw on animations, and autocentered text and shapes. Install via MCPB bundle or build from source.

## x-research

[2:03](https://www.youtube.com/watch?v=a1dVtpA9ES8&t=123)

- https://github.com/rohunvora/x-research-skill

X research skill is an MCP skill that lets Claude search and analyze X content. It breaks research questions into multiple search angles, scans tweets, follows threads, and reads linked content. Results are synthesized into a sourced markdown report organized by theme. Surfaces high engagement tweets with metrics and deep dives linked content for questions where the relevant discussion is happening on Twitter rather than indexed web pages.

## OneContext

[2:32](https://www.youtube.com/watch?v=a1dVtpA9ES8&t=152)

- https://github.com/TheAgentContextLab/OneContext

Your team is running AI agents, but every time someone new touches the project, they start from scratch. One context just fixed that agent self-managed context layer that records your agents full trajectory, shares it on Slack so anyone can talk to it and lets anyone load that context to continue from the exact same point. Unified context for all AI agents across your team. No more starting over, no more lost progress.

## LocalGPT

[2:59](https://www.youtube.com/watch?v=a1dVtpA9ES8&t=179)

- https://github.com/localgpt-app/localgpt

Local GPT is a local AI assistant with persistent memory. It's a 27 megabyte app that stores data in plain markdown files. You can literally open a file called memory.md and edit exactly what the AI knows about you. Includes a background damon that runs scheduled tasks autonomously. You just write a task in the heartbeat file and the AI wakes up on a schedule to do the work autonomously while you sleep.

## Textream

[3:26](https://www.youtube.com/watch?v=a1dVtpA9ES8&t=206)

- https://github.com/f/textream

Ever fumbled with notes on camera, breaking eye contact to read your script? Textamream is a Mac OS teleprompter app that highlights your script as you speak using local AI. It scrolls with you and pauses when you pause. Tap any word to jump ahead, pause and resume anytime, and adjust the size to fit your screen. It displays text in a small overlay right next to your webcam, so you read while looking directly at the camera.

## claude-code-controller

[3:54](https://www.youtube.com/watch?v=a1dVtpA9ES8&t=234)

- https://github.com/The-Vibe-Company/claude-code-controller

Claude Code Controller provides programmatic control of Claude code by implementing its internal file system protocol, the inbox and task file system that agents use to communicate. You can spawn cloud code processes with their full tool set, run multi- aent workflows like parallel security, performance, and style reviews, and create task cues that agents claim from.

## ChernyCode

[4:18](https://www.youtube.com/watch?v=a1dVtpA9ES8&t=258)

- https://github.com/meleantonio/ChernyCode

Boris Churnney created claude code. Someone extracted every productivity tip from his threads and turned it into a template repo. Churnney code gives you the exact configuration. Churnney and his team use memory files that persist context across sessions. Claw.md for projectwide rules. Personal ones for your preferences. Skills you invoke with slash commands for repeated workflows like commit push PR or finding technical debt.

## ReMemory

[4:46](https://www.youtube.com/watch?v=a1dVtpA9ES8&t=286)

- https://github.com/eljojo/rememory

What happens to your password manager if you're gone tomorrow? After concussions in a documentary about memory loss, a developer built Rememory, a cryptographic dead man's switch using Shamir's secret sharing. You encrypt files, split the key into five shares, and give them to friends. Any three can recover it. Two reveal zero information. Each share is an offline HTML file. No servers, installs, or internet built to work even decades later.

## neomacs

[5:13](https://www.youtube.com/watch?v=a1dVtpA9ES8&t=313)

- https://github.com/eval-exec/neomacs

Emacs is 40 years old. Its display engine is 50,000 lines of C designed for text terminals in the 1980s. CPUon rendering, no GPU, no video, no smooth animations. Your GPU sits idle while Emac struggles with large images. Someone looked at this and said, "We're rebuilding the entire thing in Rust. Neomax replaces that 50,000 lines with 4,000 lines of GPU accelerated WGPU code."

## md-browse

[5:40](https://www.youtube.com/watch?v=a1dVtpA9ES8&t=340)

- https://github.com/needle-tools/md-browse

Wonder what AI sees when browsing the web? While your browser shows visual chaos, images, ads, menus, AI tools like Claude get clean markdown. A new browser called MD browse lets you see that view. It requests markdown first from compatible sites like Versel Docs and converts everything else using Turndown, stripping scripts, styles, and navigation to show just content.

## MimiClaw

[6:04](https://www.youtube.com/watch?v=a1dVtpA9ES8&t=364)

- https://github.com/memovai/mimiclaw

Open Claw is cool, but you need a Mac Mini or a VPS to run it. Mim Claw just put the entire thing on a $5 chip. ESP32S3 microcontroller. No Linux, no Node.js, just pure C. Plug it into USB power and message it on Telegram. Full React agent loop with anthropics claude tool use protocol for web search and time sync. Local memory stored on flash and plain text markdown files.

## Matchlock

[6:29](https://www.youtube.com/watch?v=a1dVtpA9ES8&t=389)

- https://github.com/jingkaihe/matchlock

AI agents need to run code, but giving them unrestricted access to your machine is a terrible idea. Matchlock is a CLI tool that runs ephemeral Linux VMs in under 1 second for sandboxed code execution. Full isolation, disposable file systems, everything blocked by default. Here's the clever part. When your agent calls an API, the real credentials get injected in flight by a transparent ME team proxy.

## attractor

[6:55](https://www.youtube.com/watch?v=a1dVtpA9ES8&t=415)

- https://github.com/strongdm/attractor

StrongDM's AI team has a rule. No human is allowed to look at the code. Not for code review, not for debugging, nothing. Their threeperson team spends a thousand dollars a day per engineer on LLM tokens and ships production software they've literally never read. A tractor is the system that makes this possible. And the repo has zero lines of code, just three markdown files with specs written in natural language.

## Napkin

[7:22](https://www.youtube.com/watch?v=a1dVtpA9ES8&t=442)

- https://github.com/blader/napkin

Napkin, a clawed code skill that persists memory between sessions. The agent writes notes toclaude/napkin.mmd about what broke, how it was fixed, and patterns it noticed. Next session, it reads the file before starting work. Think of it as the agent keeping a running change log of its own work. Helpful if you're working on the same code base across multiple days. Code pilot is a guey wrapper for claude code.

## CodePilot

[7:45](https://www.youtube.com/watch?v=a1dVtpA9ES8&t=465)

- https://github.com/op7418/CodePilot

Instead of typing commands in the terminal, you get a chat interface with a file tree showing what Claude is accessing. You can click to approve permissions rather than typing yes repeatedly. Chat history saves to SQLite and persists between sessions. If you're constantly switching contexts or managing multiple conversations, the visual organization helps.

## Gondolin

[8:12](https://www.youtube.com/watch?v=a1dVtpA9ES8&t=492)

- https://github.com/earendil-works/gondolin

Stop giving your AI agents your actual API keys. You are asking to get hacked. You need to look at Gondolind. It's a new sandbox project from Armen Roner, the guy who created Flask. We all know we need to sandbox AI code, but Docker isn't enough. Gondolind spins up a microVM in milliseconds. But here's the genius part. The network stack is written in JavaScript.

## TinyClaw

[8:35](https://www.youtube.com/watch?v=a1dVtpA9ES8&t=515)

- https://github.com/jlia0/tinyclaw

Tiny Claw connects code to WhatsApp for conversational AI responses. Scan a QR code, send messages from your phone, and get clawed responses with persistent context. Uses a file-based queue to process messages sequentially without race conditions. Runs in T-Mux with four PES: WhatsApp client, Q processor, heartbeat monitor, and logs. Heartbeat sends periodic checks to keep tasks alive.

## MaximizeToVirtualDesktop

[9:01](https://www.youtube.com/watch?v=a1dVtpA9ES8&t=541)

- https://github.com/shanselman/MaximizeToVirtualDesktop

Maximize to virtual desktop brings Mac OS style full screen behavior to Windows 11. On Mac OS, clicking the green button sends a window to its own virtual desktop. Windows just makes the window bigger. This tool adds the Mac OS behavior. Press controlalttshift X and the window moves to a new virtual desktop. Close it or click again and it returns to the original desktop. The temporary desktop disappears.

## VortexL2

[9:27](https://www.youtube.com/watch?v=a1dVtpA9ES8&t=567)

- https://github.com/iliya-Developer/VortexL2

If you are trying to bridge two servers, like a local machine behind a restrictive firewall and a remote VPS, you know that setting up an L2TP tunnel is usually a headache. You need to use Vortex L2. It is a CLI tool that completely automates L2TPV3 Ethernet tunnels. It handles the connection, sets up hap proxy for high performance port forwarding and automatically creates systemd services so your tunnel survives a reboot.

## Stik

[9:55](https://www.youtube.com/watch?v=a1dVtpA9ES8&t=595)

- https://github.com/0xMassi/stik_app

Stick is a quick capture note app. Hit a keyboard shortcut, type your thought, close under 3 seconds. Notes save as markdown files in your documents folder. No account, no sync setup. If you already use iCloud or Dropbox, it works with those. Ondevice AI suggests folders. Semantic search finds notes by concept, not just keywords. You can pin notes as desktop stickies.

## crust

[10:19](https://www.youtube.com/watch?v=a1dVtpA9ES8&t=619)

- https://github.com/BakeLens/crust

Crust is a security gateway that sits between your AI agent and the LLM. It intercepts tool calls before they execute and blocks dangerous ones based on rules you define. Write YAML rules to block access tov files, shell history, SSH keys, or self modification attempts. Hot reload lets you add rules without restarting. It scans both the conversation history and the LLM's response before executing commands.

## Blossom Color Picker

[10:46](https://www.youtube.com/watch?v=a1dVtpA9ES8&t=646)

- https://github.com/dayflow-js/BlossomColorPicker

Blossom is a color picker that displays as a flower, 18 pedals arranged in two rings, sorted by hue. An arc slider controls saturation from bright to dark. It handles viewport edges automatically. If the picker opens too close to the bottom, it shifts up and repositions the slider. Written in vanilla.js with wrappers for React, Vue, Spelt, and Angular. Same API across all frameworks. Pass colors as hex, RGB, HSL, or objects.

## Picobot

[11:14](https://www.youtube.com/watch?v=a1dVtpA9ES8&t=674)

- https://github.com/louisho5/picobot

Picobot is a lightweight AI agent framework with persistent memory and tool calling, 12 megabytes binary that runs on 20 megabytes RAM. Includes a skills system, Telegram integration, and heartbeatuler. Fast, cold start compared to Python-based frameworks. Built-in tools, file system access, shell execution, web fetch, sub aent spawning, skill creation. Skills are markdown files the agent can create and use.

## paperbanana

[11:40](https://www.youtube.com/watch?v=a1dVtpA9ES8&t=700)

- https://github.com/llmsresearch/paperbanana

Paper Banana generates publication quality diagrams from text descriptions. Give it a methodology description and caption and it runs a five agent pipeline. Retrieves similar diagrams from 13 examples. Generates a plan. refineses for academic aesthetics, renders the image, then critiques and iterates. Works for methodology diagrams and statistical plots. Uses Google Gemini's free tier.

## Fun with clip-path

[12:05](https://www.youtube.com/watch?v=a1dVtpA9ES8&t=725)

- https://github.com/Momciloo/fun-with-clip-path

Someone reverse engineered a menu animation using pure CSS, no JavaScript. A circle expands from the top left corner to fill the screen using clip path with radius 1.42 \* 100 max. Works on any screen size since Vmax uses the larger dimension. includes a polygon clip path for light ray effects. Pure HTML and CSS. Click the button, circle grows, menu fades in.

## claude-pulse

[12:30](https://www.youtube.com/watch?v=a1dVtpA9ES8&t=750)

- https://github.com/NoobyGains/claude-pulse

Claude pulse is a terminal status bar that shows your Claude code usage limits. It displays session usage with a 5-hour countdown, weekly rolling total, and plan tier. Progress bars change color as you approach limits. Pulls data from Anthropic's OOTH API, the same numbers you'd see at Claude. caches responses for 30 seconds to avoid excessive API calls. Includes 10 themes if you care about aesthetics.

## Obsync

[12:57](https://www.youtube.com/watch?v=a1dVtpA9ES8&t=777)

- https://github.com/Santofer/Obsync

You're using Obsidian Tasks, but you need Apple reminders for the notifications and Siri integration. Obsync just gave you two-way sync. Obsync is a Mac menu bar app that syncs Obsidian tasks with Apple reminders. Two-way sync with Obsidian as the source of truth. Tasks flow to reminders automatically. Completions and reminders right back to markdown files. Uses surgical edits instead of full line reconstruction.
