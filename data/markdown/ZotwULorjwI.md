# GitHub Trending Today \#39: car-diagnosis, dory, SiliconScope, cliare, token-diet, OpenOPC, crustc

[Watch the original video](https://www.youtube.com/watch?v=ZotwULorjwI)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Introduction

[0:00](https://www.youtube.com/watch?v=ZotwULorjwI&t=0)

Welcome back to GitHub awesome. This is GitHub trending today number 39. 35 trending open- source projects on GitHub right now. Let's get into it.

## skills

[0:11](https://www.youtube.com/watch?v=ZotwULorjwI&t=11)

- https://github.com/davidondrej/skills

This is David Andre's own personal agent skill stack opened up. The workflows he actually runs, not a demo set. Most skill repos give you a narrow slice, coding only or research only. This spans his whole day. one folder for orchestrating and scheduling other agents, one for authoring new skills, plus research, structured thinking, and machine setup. Each skill is a single skill MD. The agent loads only when the task calls for it. Codebased memory MCP gives your coding agent a map of your

## codebase-memory-mcp

[0:39](https://www.youtube.com/watch?v=ZotwULorjwI&t=39)

- https://github.com/DeusData/codebase-memory-mcp

repo instead of making it GP the same files over and over. Every what calls this function turn usually burns a pile of tokens on fileby file exploration. This indexes the whole codebase into a queryable knowledge graph first. So one graph query replaces dozens of read cycles. The author benchmarks the Linux kernel fully indexed in 3 minutes and a 99% token cut on structural questions.

## car-diagnosis

[1:09](https://www.youtube.com/watch?v=ZotwULorjwI&t=69)

- https://github.com/adam-s/car-diagnosis

Cardier listens to a recording of your engine and tells you roughly and it's honest enough to say uncertain instead of bluffing. Describing a weird noise to a mechanic over the phone almost never lands right. This cleans the mechanical sound out of a noisy phone clip, embeds it with a frozen clap model, and returns a ranked short list. Is something wrong? Where in the car? Which part?

## dory

[1:35](https://www.youtube.com/watch?v=ZotwULorjwI&t=95)

- https://github.com/Augani/dory

Dory is a native Mac app for Docker that runs every container in one shared VM instead of spinning up a separate one per container. Docker Desktop and per container setups quietly eat gigabytes of idle RAM just sitting there. On the author's own benchmark, two containers use around 122 megabytes against 574, and the gap grows from there.

## SiliconScope

[1:58](https://www.youtube.com/watch?v=ZotwULorjwI&t=118)

- https://github.com/kennss/SiliconScope

Silicon scope shows you the Apple silicon numbers, activity monitor hides, neural engine load, and memory bandwidth. When your local LLM slows down, activity monitor just shows GPU percent, not whether you're actually bandwidth bound, computebound, or thermal throttling. This classifies the bottleneck for you, catches the exact moment the GPU throttles under sustained load, and lives in your menu bar as a six bar glyph across every engine.

## cliare

[2:26](https://www.youtube.com/watch?v=ZotwULorjwI&t=146)

- https://github.com/modiqo/cliare

Clar audits a command line tool, the way an agent would first meet it, then hands over a map so the agent stops guessing. Point a coding agent at an unfamiliar CLI and it burns tokens, rediscovering the surface. Run help, guess a flag, hit a missing operand, back up, retry. This probes the real binary as a black box, records what actually exists, which commands emit parsible JSON, and which safe ones quietly write files.

## token-diet

[2:54](https://www.youtube.com/watch?v=ZotwULorjwI&t=174)

- https://github.com/Kulaxyz/token-diet

Token diet is a coding agent skill that quietly trims your token bill across the whole session, not just the chat replies. Left alone, agents pad every answer with great question, here's reread files they just edited, and overest. This installs an always on rule that cuts the filler, grips before reading whole files and batches tool calls while treating correctness and critical tests as offlimits.

## skillspec

[3:20](https://www.youtube.com/watch?v=ZotwULorjwI&t=200)

- https://github.com/modiqo/skillspec

Every agent skill has the same failure mode. You write careful stepbystep instructions and the agent still skips a step or reads the wrong part. Skillspec fixes that by adding a small YAML contract next to your skill.md that spells out the route required checks and what proof should exist when it's done. It works with clawed codeex or any agent harness and after a run it prints an alignment report showing exactly what got followed and what got skipped.

## brain2qwerty

[3:50](https://www.youtube.com/watch?v=ZotwULorjwI&t=230)

- https://github.com/facebookresearch/brain2qwerty

Brain tquerty reconstructs the exact sentence someone typed straight from their brain activity. No implant required. This isn't decoding vague intent. It's recovering the actual words keystroke by keystroke from a participant sitting in an MEG or EEG scanner. The pipeline runs a convolutional encoder into a transformer. Then a character level language model cleans up the output.

## Boogu-Image

[4:15](https://www.youtube.com/watch?v=ZotwULorjwI&t=255)

- https://github.com/boogu-project/Boogu-Image

Bugu image is an open weights image model that leans on smarter training instead of a giant data pile. Roughly a tenth the training data of comparable open models. It's a 10 billion parameter family in three flavors. A base model built for ultra dense text rendering, a four-step turbo for fast photo realism, and an edit variant. all strong at bilingual Chinese and English text.

## OpenOPC

[4:41](https://www.youtube.com/watch?v=ZotwULorjwI&t=281)

- https://github.com/HKUDS/OpenOPC

Open OPC doesn't just run one agent on your task. It staffs a whole company around it, then runs the org for you. Most multi- aent setups make you handde every role and hardwire who talks to whom. Give this a goal and it drafts the org chart itself, hires agents into each role, and routes work through a canbon with a manager that delegates, reviews, and reworks.

## GameBlocks

[5:05](https://www.youtube.com/watch?v=ZotwULorjwI&t=305)

- https://github.com/xt4d/GameBlocks

Game Blocks hands a coding agent the 3D game logic it consistently gets wrong. Coordinate frames, actor motion, world structure. Ask an agent to prototype a browser game and small spatial slips creep in. Inverted directions, jittery movement, a game state that no longer matches what's on screen. Natural language is just a lossy way to describe precise 3D math.

## launch-your-agent

[5:29](https://www.youtube.com/watch?v=ZotwULorjwI&t=329)

- https://github.com/anthropics/launch-your-agent

Launch your agent takes you from a rough idea to a live scheduled agent running in your own anthropic account in one clawed code session. The gap most people hit isn't building an agent, it's the launch, wiring the API payloads, defining done, and getting it to run on a clock without you. This skill interviews you about what you want, scopes a v 0, launches it in your console, then grades it against your own success criteria, and iterates.

## local-llm

[5:57](https://www.youtube.com/watch?v=ZotwULorjwI&t=357)

- https://github.com/jamesob/local-llm

$40,000 gets you noticeably closer to Claude Opus running entirely on your own hardware. No subscription, no API key. This is one engineer's actual build log for getting there. four RTX Pro 6000s linked through PCIe switches so the GPUs talk directly to each other instead of routing through the CPU. He walks through the exact BIOS settings, kernel flags, and ACS fix that took his card to card bandwidth from broken to full Gen 4 speed.

## Pythia

[6:28](https://www.youtube.com/watch?v=ZotwULorjwI&t=388)

- https://github.com/jangles-byte/Pythia

Pythia turns 30 plus live global feeds into a single spinning globe cockpit that generates forecasts you can actually interrogate. Most world dashboards just show you dots on a map with no reasoning behind them. This fuses conflict, disasters, markets, disease, and polyarket odds. Then has a local LLM draft located predictions across four time horizons, each with a probability and its logic.

## claude-real-video

[6:54](https://www.youtube.com/watch?v=ZotwULorjwI&t=414)

- https://github.com/HUANGCHIHHUNGLeo/claude-real-video

Claude real video lets Claude actually watch a video instead of just reading its transcript. Paste a YouTube link into most tools and the model never sees a single frame. Gemini samples at a fixed one per second and misses fast cuts entirely. This detects real scene changes, so a 10-minute static slide collapses to one frame while a rapid cut reel keeps every beat. It ddupes repeated shots, transcribes the audio, and hands you a folder any model can read. Crust C is the entire Rust compiler translated into 46 million lines of C that GCC can actually build

## crustc

[7:24](https://www.youtube.com/watch?v=ZotwULorjwI&t=444)

- https://github.com/FractalFir/crustc

into a working Rust C. It exists to solve a real complaint. Some old and obscure platforms have a C compiler but no Rust. So doesn't run on plan 9 keeps getting used against Rust. The trick underneath is a backend that adapts to whatever weird C compiler you pointed at, emitting tiny witness programs to probe what the target supports instead of assuming.

## loopkit

[7:54](https://www.youtube.com/watch?v=ZotwULorjwI&t=474)

- https://github.com/Archive228/loopkit

Loopkit is a library of 33 coding agent skills that load only when they're relevant. So your agent specializes instead of guessing. A raw agent under pressure fabricates. Invented APIs, tests that assert nothing, a fix that just renames the bug. Each skill here is a tight technique the agent pulls in on trigger. Systematic debugging, an OASP security pass, write the failing test first without paying tokens for all 33 on every prompt.

## mcpsnoop

[8:23](https://www.youtube.com/watch?v=ZotwULorjwI&t=503)

- https://github.com/kerlenton/mcpsnoop

MCPS snoop is Wireshark for MCP. It shows every real tool call flowing between your AI client and your MCP servers live. The official inspector connects as its own separate client, so it never sees what clawed desktop or cursor actually sent, which is exactly the traffic you need when a tool silently doesn't fire. This sits in the real data path and streams every JSON RPC frame, flags hung calls with a live timer, and lets you replay any captured call against a fresh server.

## Pocket-Lab-Power-Supply

[8:54](https://www.youtube.com/watch?v=ZotwULorjwI&t=534)

- https://github.com/BenMakesEverything/Pocket-Lab-Power-Supply

Pocket Lab power supply is a full bench power supply that fits in your pocket and runs off battery. No wall outlet, no bulky. A regular lab supply chains you to the workbench, which is useless when you're debugging a circuit out in the field or across the room. This runs off a 4S lithium ion pack, gives you adjustable voltage and a current limit on an LED matrix display and recharges over USBC PD.

## Generals-Mac-iOS-iPad

[9:21](https://www.youtube.com/watch?v=ZotwULorjwI&t=561)

- https://github.com/ammaarreshi/Generals-Mac-iOS-iPad

General's Mac iOS iPad isn't an emulator wrapping the old zero hour. It's the real 2003 engine compiled straight for ARM 64. Getting a 20-year-old Windows RTS running natively on an iPad, touch controls and all means solving problems nobody wrote down. It renders through a DirectX8 to Vulcan to metal chain. Ships real RTS touch gestures like dragbox select and pinch zoom. And its docs folder is a full engineering log of every bug it took to get there.

## AI-auto-generate-video

[9:52](https://www.youtube.com/watch?v=ZotwULorjwI&t=592)

- https://github.com/huytranvan2010/AI-auto-generate-video

This pipeline turns a Vietnamese article into a finished 916 short from a single command. No editing timeline required. Most AI video tools generate slop or leave you stitching clips in Cap Cut for an hour. This splits the job. Claude writes the script and picks templates. Then deterministic code owns the pixels, so the same script always renders the same video.

## dnsglobe

[10:16](https://www.youtube.com/watch?v=ZotwULorjwI&t=616)

- https://github.com/514-labs/dnsglobe

DNS globe is dnschecker.org in your terminal. Watch a DNS record propagate across 34 resolvers worldwide on a live map. After you change a record, the usual move is refreshing a website every few minutes to see if it's gone global yet. This queries every resolver directly, no cache, then repoles on its own until propagation hits 100%. So you can walk away.

## chromeless

[10:40](https://www.youtube.com/watch?v=ZotwULorjwI&t=640)

- https://github.com/antiwork/chromeless

Chromeless is a Mac OS browser where the window is the web page. No tabs, no toolbar, no address bar, nothing. Screenshotting a site or a local dashboard means cropping out browser Chrome every single time. And even clean screenshot tools leave a title bar behind. Here, everything's a keystroke. Hit a key for the URL bar, another to snapshot the page straight to your desktop, another to pin it above every window.

## engram

[11:07](https://www.youtube.com/watch?v=ZotwULorjwI&t=667)

- https://github.com/nagisanzenin/engram

Engram is a clawed code learning system built to stop the feeling of understanding from passing for the real thing. A slick AI explanation feels like learning, then evaporates in days. So, this splits the roles. The tutor teaches a separate assessor grades your free recall answers blind and deterministic code never the model schedules every review with FSRS fit to your own forgetting curve.

## open-science

[11:33](https://www.youtube.com/watch?v=ZotwULorjwI&t=693)

- https://github.com/ai4s-research/open-science

Open science is a research workbench where every figure and number traces back to the exact code data and conversation that made it. AI that writes your analysis is easy. Trusting a plot months later when you can't tell which script or model produced it is the real problem. This logs every step to a provenence file, then audits the final report, resolving citations and flagging any number with no traceable source.

## fable-token-saving-skills-orchestrator

[12:00](https://www.youtube.com/watch?v=ZotwULorjwI&t=720)

- https://github.com/100yenadmin/fable-token-saving-skills-orchestrator

This kit's whole trick is timing. When a long agent run goes idle, Anthropic's prompt cache dies after 5 minutes. So, waking cold repays that context over and over. Most orchestration setups ignore that and quietly pay the cold start tax every few minutes. This routes Fable to the judgment work, strategy, review, synthesis, and pushes mechanical coding and log digesting to cheaper lanes.

## Honami-Animation-System

[12:25](https://www.youtube.com/watch?v=ZotwULorjwI&t=745)

- https://github.com/loyal-studio/Honami-Animation-System

Honami is a from scratch replacement for Unity's built-in animator built so your character graph stays readable no matter how complex the rig gets. Unity's animator turns into spaghetti as a project grows, and its humanoid retargeting actively fights you the moment you build a spider, a mech, or a dragon. Honami is rig agnostic, hides secondary logic like VFX and IK inside subnodes.

## ratatuefi

[12:50](https://www.youtube.com/watch?v=ZotwULorjwI&t=770)

- https://github.com/sermuns/ratatuefi

Ratatouafi runs a Ratatouille terminal app straight from your motherboard's firmware with no operating system underneath it at all. Ratatouille normally assumes there's a Linux or Windows terminal to draw into. This builds your app as a UEFI executable instead. So it boots the instant the machine powers on before any OS exists and the author has it running on real hardware off a USB stick, not just in a VM.

## onklaud-5

[13:16](https://www.youtube.com/watch?v=ZotwULorjwI&t=796)

- https://github.com/KorroAi/onklaud-5

Enclad 5's actual insight is that you're paying an LLM to rewrite code the standard library already gives you for free. Ask any model for an HTTP client with retries and it'll happily generate 80 custom lines. The real answer was requests session with a retry adapter. So this checks a deterministic pattern ladder first and on its own 35 task benchmark that resolves 57% of tasks at zero API cost and zero hallucination risk. Fable harness makes clawed code stop trusting its own conclusions until

## fable-harness

[13:45](https://www.youtube.com/watch?v=ZotwULorjwI&t=825)

- https://github.com/Miguok/fable-harness

three critics have tried to tear them apart. An agent under pressure talks itself into a shaky root cause or an overengineered fix. then confidently ships it. Before any big call, this dispatches three parallel sub agents. A skeptic hunting logic holes, a red team hunting failure modes, and a simplifier hunting needless complexity. And the conclusion only survives if the majority clear it.

## windfoil

[14:16](https://www.youtube.com/watch?v=ZotwULorjwI&t=856)

- https://github.com/texel-org/windfoil

Windfoil fills 2D vector shapes with near exact anti-aliasing computed per pixel, right in the fragment shader. The go-to technique, slug, walks two rays per pixel and assumes roughly one edge per pixel. So overlapping strokes need a CPU cleanup pass and still soften at the seams. This uses a single winding integral instead, which handles overlap for free, dropping that CPU prepass and on the author's own tiger test, nearly having the acceleration buffer.

## rampart

[14:46](https://www.youtube.com/watch?v=ZotwULorjwI&t=886)

- https://github.com/nationaldesignstudio/rampart

Rampart strips PII out of user text before it ever reaches an LLM running entirely in the browser. Most redaction is server side. So by the time it runs the raw data already left the client. This pairs a 15 megabyte ondevice model with checksum backed rejects for cards, SSNs and emails. Then swaps names and numbers for placeholders that get restored locally after the model replies.

## MrFlow

[15:11](https://www.youtube.com/watch?v=ZotwULorjwI&t=911)

- https://github.com/Xingyu-Zheng/MrFlow

Missaflow makes Flux and Quen image generate roughly 10 times faster and it needs no fine-tuning to do it. High resolution diffusion is slow because every denoising step runs at full res and most speed tricks either need retraining or fall apart when you push them hard. This shifts the work instead. Generate small upscale the decoded image with real ESR GAN, then spend a single high-res step cleaning up the detail.

## FableClaudeMDForOpus

[15:38](https://www.youtube.com/watch?v=ZotwULorjwI&t=938)

- https://github.com/TheColliny/FableClaudeMDForOpus

This kit's core idea is that ensure you tested it is worthless because a weaker model will just claim it did. So every rule here forces a receipt, a pasted GP, a quoted tool output, a verify step that only passes if the exact line exists in the transcript. It converts the judgment a frontier model applies automatically into countable event triggered checks. Opus can run mechanically. Done means 12 claims each backed by real output. \[music\]
