# GitHub Trending Weekly \#34: workshop, forkd, HRM-Text, codegraph, ELF, ASCII-Aquarium, mailflare

[Watch the original video](https://www.youtube.com/watch?v=ZPwv5Ipqyzc)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Introduction

[0:00](https://www.youtube.com/watch?v=ZPwv5Ipqyzc&t=0)

Welcome back to GitHub awesome. This is GitHub trending weekly number 34. 35 trending open source projects on GitHub right now. Let's get into it.

## workshop

[0:11](https://www.youtube.com/watch?v=ZPwv5Ipqyzc&t=11)

- https://github.com/raindrop-ai/workshop

Raindrop Workshop is a local debugger for AI agents. Run instrument agent in cloud codecs or cursor and every token tool call and span from your agent streams into a local UI the moment it happens. Claude code can then read those traces, write evals against your codebase, and run a self-healing loop. Write the eval, run the agent, see the failure, fix the code, repeat until it passes.

## forkd

[0:37](https://www.youtube.com/watch?v=ZPwv5Ipqyzc&t=37)

- https://github.com/deeplethe/forkd

Spinning up a fresh firecracker microVM for every AI agent task takes seconds. Fork cuts that 101 milliseconds. It keeps a warmed parent microVM ready, then forks it on demand using Linux user fault FD and copy on write memory, so new sandboxes inherit the full warm state instantly. Each fork is fully isolated, costs almost no extra RAM while idle, and tears down cleanly after use.

## HRM-Text

[1:02](https://www.youtube.com/watch?v=ZPwv5Ipqyzc&t=62)

- https://github.com/sapientinc/HRM-Text

Training a foundation model from scratch used to mean millions in compute. HRM text does it for about $1,000. It's a 1B parameter model built on a hierarchical recurrent architecture with latent space reasoning and the claim is 130 to 600 times less compute than comparable transformers. The 1B reference run takes 16 H100s in 46 hours.

## codegraph

[1:28](https://www.youtube.com/watch?v=ZPwv5Ipqyzc&t=88)

- https://github.com/colbymchenry/codegraph

Claude code burns tokens reading files it doesn't need because it has no structural understanding of your codebase. Code graph fixes that. It pre-indexes your repo into a knowledge graph. So Claude code knows which functions call what, where types are defined, and how your modules connect before touching a single file. Fewer tool calls, fewer wasted tokens, 100% local.

## ELF

[1:53](https://www.youtube.com/watch?v=ZPwv5Ipqyzc&t=113)

- https://github.com/lillian039/ELF

ELF is a diffusion language model from MIT Cale that generates text by denoising in continuous embedding space rather than over discrete tokens. It only maps back to actual words at the final step, which makes classifier free guidance straightforward to apply. Three model sizes 105mm, 342mm, and 652mm. Pre-trained checkpoints on hugging face, Jack's implementation on TPU.

## make-pages-interactive

[2:18](https://www.youtube.com/watch?v=ZPwv5Ipqyzc&t=138)

- https://github.com/paraschopra/make-pages-interactive

Say, make these pages interactive in Claude code, and every HTML file in your directory becomes a live commenting surface. Highlight text, click an element, leave a note. Claude reads the inbox, edits the page, and auto reloads with a walkthrough of what changed. A 250line steadlib Python server handles it. Shuts itself down when you close the window. Built for HTML research reports. Works for anything. Got a cheap yellow display collecting dust? Flash it with asy aquarium. It turns the ESP 32320x240

## ASCII-Aquarium

[2:45](https://www.youtube.com/watch?v=ZPwv5Ipqyzc&t=165)

- https://github.com/POWER-PILL/ASCII-Aquarium

touchscreen into a live fish tank rendered entirely in asy characters. Fish that school and wander bubbles swaying seaweed. Occasional octopus and seahorse visitors tap to feed. Wi-Fi NTP clock sync, persistent settings, SD card screenshots, no water changes, browser flasher, no IDE required.

## mailflare

[3:12](https://www.youtube.com/watch?v=ZPwv5Ipqyzc&t=192)

- https://github.com/hieunc229/mailflare

Mailflare is a self-hosted email platform built entirely on Cloudflare workers D1 and Cloudflare email routing. Add a domain you already have on Cloudflare. Create mailboxes and it wires up the MX SPF, DKIM, and routing rules automatically through the API. inbox sent drafts spam trash pop-up composer with autosave drafts. Next.js front end via open next one-click deploy button. QML is the go-to GPU library for classical ML operators, but on Hopper GPUs, it leaves a lot on the table.

## flashlib

[3:37](https://www.youtube.com/watch?v=ZPwv5Ipqyzc&t=217)

- https://github.com/FlashML-org/flashlib

Flash lib from researchers at Berkeley and MIT rebuilds those primitives from scratch. Kins runs 26 times faster, KN&N 19 times, HDB scan 40 times, truncated SVD 208 times. The flash lib.info Info API predicts runtime, flops, and memory usage in 5 microsconds on CPU. No GPU profiling needed. MDX let you drop React

## mdxg

[4:04](https://www.youtube.com/watch?v=ZPwv5Ipqyzc&t=244)

- https://github.com/vercel-labs/mdxg

components into Markdown, but it's tied to the JavaScript ecosystem. MDXG from Versel Labs aims higher. It's a spec for markdown presentation and interaction, a portable way to describe how a markdown document should render and respond to input independent of any one framework. Think of it as defining the contract. So the same interactive document works across different renderers.

## PiD

[4:31](https://www.youtube.com/watch?v=ZPwv5Ipqyzc&t=271)

- https://github.com/nv-tlabs/PiD

Every latent diffusion pipeline ends the same way. VAE decode to a soft 5 and2 px image, then a separate super resolution pass to get to 2K. NVIDIA's PID kills that two-step cascade. It's a plug-and-play pixel diffusion decoder that converts latence directly to 2048 x 2048 pixels in a single generative pass under 1 second on an RTX5090 210 milliseconds on a GB200. Six times faster than cascaded pipelines.

## Agent-HTML

[5:01](https://www.youtube.com/watch?v=ZPwv5Ipqyzc&t=301)

- https://github.com/Sayhi-bzb/Agent-HTML

When an AI agent dumps a giant wall of markdown at you, it's hard to scan, impossible to interact with, and it rerenders from scratch every time. Agent HTML is a semantic HTML architecture designed for human agent collaboration, replacing those long markdown blobs with stable interactive artifacts the agent can update in place instead of regenerating wholesale.

## openbrief

[5:25](https://www.youtube.com/watch?v=ZPwv5Ipqyzc&t=325)

- https://github.com/tantara/openbrief

You save dozens of videos and podcasts to watch later and never get through any of them. Open Brief turns that backlog into something you can actually use. It's a local first desktop app built on Tori that imports any video or audio file or URL, transcribes it on device, then generates a grounded blog style summary with timestamp takeaways. Chat with the transcript, ask questions, even turn the summary back into audio.

## taste

[5:52](https://www.youtube.com/watch?v=ZPwv5Ipqyzc&t=352)

- https://github.com/jaytel0/taste

Taste turns a folder of reference images into a skill.md your AI agent can actually use. Drop in up to 20 screenshots and a two model vision pipeline reads layout, spacing, color, type, and hierarchy. Fuses the analyses and writes concrete rules, not make it premium. Actual constraints like keep accent color localized and avoid beige luxury defaults.

## adhd

[6:16](https://www.youtube.com/watch?v=ZPwv5Ipqyzc&t=376)

- https://github.com/UditAkhourii/adhd

Coding agents are great at converging on the obvious answer and terrible at the weird lateral idea that actually solves your problem. ADHD is built to fix that. It's a skill for coding agents built on the claude agent SDK that runs tree of thought with pruning. It fans out parallel divergent thoughts under different cognitive frames, scores each one, prunes the dead ends and deepens the survivors.

## PhenoPixel

[6:42](https://www.youtube.com/watch?v=ZPwv5Ipqyzc&t=402)

- https://github.com/ikeda042/PhenoPixel

Phenopixel is a single cell microscopy analysis platform deployed at Hiroshima University. Upload a Nikon ND2 file, configure canny parameters, and it extracts every cell contour using PCA based axis alignment and convexity scoring to separate real cells from debris. From there, length measurements at 065 microns per pixel, fluorescent heat maps along the fitted center line, batch analytics across the whole population.

## auth.md

[7:10](https://www.youtube.com/watch?v=ZPwv5Ipqyzc&t=430)

- https://github.com/workos/auth.md

We have robots.txt to tell crawlers what they can access. We have nothing to tell AI agents how to sign up for a service on your behalf. Work OS just proposed a fix. OMD is an open protocol that lets agents register for services for their users discovered through a single markdown file at your domain. Drop an O.MD at your root and any compliant agent can read how to create an account, what scopes it needs, and how to authenticate.

## ShadowCat

[7:39](https://www.youtube.com/watch?v=ZPwv5Ipqyzc&t=459)

- https://github.com/unprovable/ShadowCat

Shadowcat transfers files between two devices using light. One screen encodes the file as a stream of optical codes. The other device points its camera at the screen to read the data back. Single HTML file, no install, no server, runs entirely in the browser on both ends. Genuinely useful for air gap machines or any situation where two devices can see each other but can't share a network. If

## tuie

[8:05](https://www.youtube.com/watch?v=ZPwv5Ipqyzc&t=485)

- https://github.com/jake-stewart/tuie

you've built terminal UIs in Rust, you've probably used Ratatouille and hit its immediate mode walls on anything complex. TUI takes a different approach. It's a rich, performant TUI library for Rust built for real applications, not just dashboards. Proper widgets, layout, and event handling designed to scale up to genuinely complex terminal interfaces without fighting the framework.

## PilotDeck

[8:29](https://www.youtube.com/watch?v=ZPwv5Ipqyzc&t=509)

- https://github.com/OpenBMB/PilotDeck

Most AI agent platforms either do open-ended chat or rigid automation with nothing in between. Pilot Deck from Open BMBB sits in that gap. It's a taskoriented agent productivity platform built around getting actual work done, not just conversation. You define the task, the agent plans and executes it across tools, and you stay in control of the outcome.

## av-curator

[8:52](https://www.youtube.com/watch?v=ZPwv5Ipqyzc&t=532)

- https://github.com/henliveira/av-curator

Training or fine-tuning a video model means wrangling terabytes of messy web footage, and most of it is garbage you don't want in your data set. AV curator does the cleanup. It's an audiovisisual data visual data curation pipeline that detects scene cuts, trims silence, removes duplicates, and filters clips using clip and whisper. So only the clips that actually match your criteria survive.

## wha-spell-simulator

[9:17](https://www.youtube.com/watch?v=ZPwv5Ipqyzc&t=557)

- https://github.com/ytnrvdf/wha-spell-simulator

If you've read Witch Hat atelier, you know magic in that world isn't waving a wand. It's drawing precise glyphs and getting them wrong has consequences. This fan-made browser project turns that idea into an actual simulator. Draw spell glyphs in your browser, see how they resolve, and experiment with the runebased magic system from the series. Pure client side, no install. Just open it and start drawing.

## SAM3DBody-cpp

[9:43](https://www.youtube.com/watch?v=ZPwv5Ipqyzc&t=583)

- https://github.com/AmmarkoV/SAM3DBody-cpp

Real motion capture means a room full of cameras and a suit covered in markers. SAM 3D body CP does it from a single webcam. It's a C++ runtime for real-time 3D full body reconstruction running on ONX and GGML that outputs a 70 joint skeleton including the hands. No GPU farm, no special hardware, just one camera and native C++ performance.

## triton-llm-kernel-lab

[10:06](https://www.youtube.com/watch?v=ZPwv5Ipqyzc&t=606)

- https://github.com/zengxiao-he/triton-llm-kernel-lab

Writing fast GPU kernels for LLM sounds like dark magic until someone shows you the code. Triton-lm kernel-l is that someone? It's a hands-on lab for learning to write Triton kernels. The same approach behind flash attention and liger kernel where you fuse operations and tile data to dodge the GPU memory bottleneck. Work through the implementations, benchmark them against PyTorch, and actually understand why your training runs are slow.

## agent-oss

[10:35](https://www.youtube.com/watch?v=ZPwv5Ipqyzc&t=635)

- https://github.com/quarqlabs/agent-oss

Agent O is a memory native cognitive runtime for AI agents built around an evidencegated loop. So the agent has to back its reasoning with retrieved facts instead of confidently making things up. hybrid retrieval, temporal reasoning so it understands when things happened, async learning that updates memory in the background, and plugandplay tools.

## OpenPixel-RPG

[10:58](https://www.youtube.com/watch?v=ZPwv5Ipqyzc&t=658)

- https://github.com/tensor2023/OpenPixel-RPG

What if you could turn your own neighborhood into a JRPG? Open Pixel RPG does exactly that. Feed it any address or a photo, describe the art style you want, and it generates a complete interactive pixel art world to explore, populated with AI generated NPCs based on that real location. Userenerated worlds, classic JRPG feel, modern generative AI doing the heavy lifting underneath.

## tmux-palette

[11:23](https://www.youtube.com/watch?v=ZPwv5Ipqyzc&t=683)

- https://github.com/eduwass/tmux-palette

If you live in T-Max, you've memorized a dozen prefix shortcuts and still forget half of them. T-Max pallet gives you a raycast style command pallet instead. Hit a key, fuzzy search every action, hit enter, switch sessions, jump windows, run your custom commands, all from one searchable list. It's fast, fully scriptable, and easy to extend with your own entries. So, the actions you actually use are one search away instead of buried in a cheat sheet.

## linux-devmgmt

[11:51](https://www.youtube.com/watch?v=ZPwv5Ipqyzc&t=711)

- https://github.com/actuallyaridan/linux-devmgmt

Someone rebuilt Windows Device Manager on Linux, and it actually reads real hardware data. QT6 front end, CISFS, and Procfus backends, full device tree by type, per device properties dialogue with general, driver details, and resources tabs. Enable and disable via kernel module blacklisting, DKMS driver uninstall. built for Arch and Cashios.

## orthrus

[12:13](https://www.youtube.com/watch?v=ZPwv5Ipqyzc&t=733)

- https://github.com/chiennv2000/orthrus

Diffusion language models can decode multiple tokens in parallel, but they usually trade away accuracy to do it. Orthus refuses that trade-off. It's a fast lossless LLM inference method built on dual view diffusion decoding where two views cross-check each other so you get the speed up of parallel generation without drifting from what the model would have produced token by token.

## mykonos-island-voxels

[12:38](https://www.youtube.com/watch?v=ZPwv5Ipqyzc&t=758)

- https://github.com/boona13/mykonos-island-voxels

Sometimes the best side project isn't useful at all. It just feels nice. Macos Island Voxels is exactly that. A browserbased isometric island builder with the soft sun bleached pallet of a Greek island, white buildings, blue domes, that hazy summer light. Place voxal tiles, grow your own little island, and just zone out. It's pure vanilla ES modules. No bundler, no buildep, and it works on mobile.

## AirTranslate

[13:04](https://www.youtube.com/watch?v=ZPwv5Ipqyzc&t=784)

- https://github.com/himomohi/AirTranslate

Watching a foreign language lecture stream or meeting on your Mac and routing the audio through a mic just to translate it is a pain. Air translate skips that entirely. It captures your Mac's system audio directly with Screen Capture Kit, turns it into a live transcript, translates it in real time, and shows the result as a floating caption overlay. Apple mode runs on device with no account and no servers.

## piia-engram

[13:31](https://www.youtube.com/watch?v=ZPwv5Ipqyzc&t=811)

- https://github.com/Patdolitse/piia-engram

Every AI tool you use keeps its own siloed memory. So Claude doesn't know what you told cursor and cursor doesn't know what you told chat GPT. Py engram fixes that. One local first memory store MCP compatible that every AI tool can read from and write to. Your context, preferences, and history live in one place you actually own, not scattered across a dozen vendor databases.

## btype

[13:55](https://www.youtube.com/watch?v=ZPwv5Ipqyzc&t=835)

- https://github.com/tidwall/btype

Go's built-in map is great until you need your keys in sorted order and then you're hand rolling a tree or sorting on every iteration. Btype is a set of B treebased collection types for go ordered maps and sets that keep your data sorted automatically with fast lookups, inserts, and range scans. Generic so they're type safe and from Tidwall the developer behind Bunt DB and the popular Go Bree package.

## can-i-finetune-this

[14:22](https://www.youtube.com/watch?v=ZPwv5Ipqyzc&t=862)

- https://github.com/DaoyuanLi2816/can-i-finetune-this

You find a promising model on hugging face, kick off a fine-tune, and 20 minutes in it crashes without memory. That can I fine-tune this saves you that pain. Point it at any hugging face model and your local GPU, and it estimates up front whether the model fits and whether you can actually fine-tune it, full fine-tune or Laura, before you download a single weight.

## ClickLight

[14:45](https://www.youtube.com/watch?v=ZPwv5Ipqyzc&t=885)

- https://github.com/aurorascharff/ClickLight

You're recording a screencast or doing a live demo and nobody watching can tell where you're actually clicking. Click fixes that. It's a tiny native Mac OS menu bar app that highlights every click anywhere on your Mac so your taps show up clearly on screen. No Electron, no bloat, just a small native Swift app that sits in your menu bar and does one thing well. \[music\]
