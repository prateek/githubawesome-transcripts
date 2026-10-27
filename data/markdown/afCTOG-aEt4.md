# GitHub Trending monthly \#7（2026.05）

[Watch the original video](https://www.youtube.com/watch?v=afCTOG-aEt4)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Introduction

[0:00](https://www.youtube.com/watch?v=afCTOG-aEt4&t=0)

Welcome back to GitHub Awesome. Today we're taking a look back at 35 popular projects from May and seeing which ones the developer community was most excited about last month. Let's get into it.

## ds4

[0:14](https://www.youtube.com/watch?v=afCTOG-aEt4&t=14)

- https://github.com/antirez/ds4

When Salvatore Sanfalippo, the creator of Reddus, ships a new C project, you pay attention. DS4 is his local inference engine for Deepseek V4 Flash, a 284 billion parameter mixture of experts model. It's deliberately narrow, not a generic GGF runner, completely self-contained, handtuned for one model family. With two-bit quantization, it runs on a 128 gig MacBook, supports a 1 million token context, and persists the KV cache to disk, so session state survives a restart.

## open-design

[0:46](https://www.youtube.com/watch?v=afCTOG-aEt4&t=46)

- https://github.com/nexu-io/open-design

Cloud design lets you generate UIs, slides, and prototypes from chat, but it lives in the cloud. Open Design brings the whole thing to your desktop. It's a local first open- source alternative with a native app, 259 skills, and 142 design systems baked in. Generate web, desktop, and mobile prototypes, slides, images, even videos, all previewed in a sandbox and exported to HTML, PDF, PPTX, or MP4.

## html-anything

[1:13](https://www.youtube.com/watch?v=afCTOG-aEt4&t=73)

- https://github.com/nexu-io/html-anything

You want a polished magazine layout, a poster, or a tweet card. But you don't want to handwrite HTML or pay for a design. SAS HTML Anything does it through your own agent. It's a local agentic HTML editor. Your coding agent writes the HTML. You preview it in a sandbox, then ship it. 75 skills across nine surfaces. Magazine, deck, poster, social card, prototype, data report.

## zerolang

[1:37](https://www.youtube.com/watch?v=afCTOG-aEt4&t=97)

- https://github.com/vercel-labs/zerolang

Every agent framework today is bolted on top of a language that was never designed for agents. Versel Labs took the harder path and built one from scratch. Zerolang calls itself the programming language for agents. small native tools, explicit effects, predictable memory, and compiler output structured to be read by LLMs. If you want to see where agent tooling is heading at the language level, this is the experiment to watch.

## whatcable

[2:05](https://www.youtube.com/watch?v=afCTOG-aEt4&t=125)

- https://github.com/darrylmorley/whatcable

You own six identical looking USBC cables and exactly one of them charges your laptop at full speed. The rest are a mystery. What cable solves it? It's a tiny Mac OS menu bar app that tells you in plain English what each USB cable plugged into your Mac can actually do. Power delivery, data speed, the works. No more guessing which cable is the good one or why your monitor won't light up.

## zero-native

[2:30](https://www.youtube.com/watch?v=afCTOG-aEt4&t=150)

- https://github.com/vercel-labs/zero-native

Also from Versel Labs, Zero Native is a Zig desktop app shell that renders your existing web front end natively. No Electron, no bundled Chromium by default. Use the system web view for a tiny binary or opt into CF when you need rendering consistency. The JSTOG bridge is permission gated and origin checked. Starters for next, react, spelt, and view included, plus iOS and Android embedding examples.

## bumblebee

[2:56](https://www.youtube.com/watch?v=afCTOG-aEt4&t=176)

- https://github.com/perplexityai/bumblebee

Supply chain attacks are hitting developers where it hurts. A poisoned npm package, a backdoor VS code extension, a compromised CLI tool you installed months ago. Bumblebee from Perplexity helps you find out if you're exposed. It's a readonly scanner that checks the packages, extensions, and developer tools already on your disk against known supply chain compromises.

## deepsec

[3:20](https://www.youtube.com/watch?v=afCTOG-aEt4&t=200)

- https://github.com/vercel-labs/deepsec

DeepSec is an agentpowered vulnerability scanner you run on your own infrastructure. It fans regx matchers across your codebase first, then sends candidates to claude or codeex at maximum thinking levels for deep investigation, revalidation, and false positive filtering. Large monor repos fan out across versel sandbox microVMs in parallel and pick up where they left off if

## mirage

[3:46](https://www.youtube.com/watch?v=afCTOG-aEt4&t=226)

- https://github.com/strukto-ai/mirage

your AI agent might need to read from S3, a local folder, a database, and a Google Drive. And right now you write custom glue for everyone. Mirage unifies them. It's a virtual file system for AI agents. One consistent interface that makes every backing store, cloud bucket, local disc, remote API look like a single-mounted file system the agent can read and write.

## petdex

[4:09](https://www.youtube.com/watch?v=afCTOG-aEt4&t=249)

- https://github.com/crafter-station/petdex

Open Pets lets you put a little animated buddy on your screen that reacts to your coding agent. Petex is where you go shopping for one. It's a public gallery of animated codeex pets, plus a CLI to install them. Browse the collection, pick the creature you want, run one command, and it lands in your setup. And because it's open, you can submit your own pixel pet to the gallery for everyone else to adopt.

## 9arm-skills

[4:36](https://www.youtube.com/watch?v=afCTOG-aEt4&t=276)

- https://github.com/thananon/9arm-skills

If you use Claw Code, you felt the pain of writing the same debugging discipline, the same review checklist into every project. Ninearm skills is a curated set of clawed code skills straight from a working engineer'sclaw directory. Debug mantra walks the agent through reproduce, trace, falsify, cross reference in that order before any fix. Postmortem refuses to draft until you have a real repro and a validated fix.

## 3DCellForge

[5:04](https://www.youtube.com/watch?v=afCTOG-aEt4&t=304)

- https://github.com/huangserva/3DCellForge

3D Cell Forge is an open-source browser studio for exploring 3D biological cell models built with React 3 fiber. You drag to rotate, scroll to zoom, click any organel to read its details, and even export the whole thing as a GB file. The wild part, upload a microscope image, and it generates a real 3D model from it using Tripo or a local Hunuan 3D backend.

## book-to-skill

[5:28](https://www.youtube.com/watch?v=afCTOG-aEt4&t=328)

- https://github.com/virgiliojr94/book-to-skill

You buy a 600page technical book, read three chapters, then never open it again. Book tokill flips that. It's a clawed code skill that turns any technical book PDF into a clawed code skill of its own. Drop the PDF in, get back a structured, queryable skill your agent can study, reference, and apply while you actually work. Your bookshelf becomes your AI's training material.

## beautiful-html-templates

[5:53](https://www.youtube.com/watch?v=afCTOG-aEt4&t=353)

- https://github.com/zarazhangrui/beautiful-html-templates

Ask your coding agent to make a slide deck and it'll improvise the layout badly. Beautiful HTML templates fixes the input. It's a library of HTML slide templates designed so any agent can pick the right one for the content and produce a polished deck automatically. Title slides, comparison layouts, data slides. The agent matches your content to a template instead of handrolling CSS that looks like a 2009 PowerPoint.

## opensquilla

[6:21](https://www.youtube.com/watch?v=afCTOG-aEt4&t=381)

- https://github.com/opensquilla/opensquilla

Every AI coding agent today burns through tokens like there's no tomorrow. And your API bill at the end of the month proves it. OpenSQL is built specifically to fix that. It's an open- source AI agent designed for token efficiency, getting more intelligence per dollar out of the same budget. Smarter context management, leaner prompts, more useful output per call.

## vggt-omega

[6:45](https://www.youtube.com/watch?v=afCTOG-aEt4&t=405)

- https://github.com/facebookresearch/vggt-omega

Traditional 3D reconstruction means running structure from motion and iterative optimization that can take minutes per scene. Meta's VGGT line threw that out and did it in a single forward pass of a transformer. VGGT Omega is the latest, a CVPR 2026 oral. Feed it images and it predicts camera poses, depth, and 3D geometry all at once. No slow optimization loop. You

## deepclaude

[7:10](https://www.youtube.com/watch?v=afCTOG-aEt4&t=430)

- https://github.com/aattaran/deepclaude

love Claude Code's autonomous agent loop, but the API bill at the end of the month makes you wse. DeepCloud swaps the engine, keeps the car. It's a small proxy that points Claude Code at Deepseek V4 Pro, Open Router, or any anthropic compatible backend. So you get the exact same agent experience for up to 17 times less. One shell script works on Mac, Linux, and Windows via PowerShell.

## dictionary-of-ai-coding

[7:35](https://www.youtube.com/watch?v=afCTOG-aEt4&t=455)

- https://github.com/mattpocock/dictionary-of-ai-coding

AI coding is drowning in jargon, and a lot of that confusion is manufactured by people who profit from keeping it mysterious. Matt PCO's AI coding dictionary cuts through it. It's the vocabulary explained in plain English. Why context degrades? Why your bill is so high. Why the same prompt behaves differently daytoday. Each one has a clean answer once someone tells you the right words.

## SkillOpt

[8:01](https://www.youtube.com/watch?v=afCTOG-aEt4&t=481)

- https://github.com/microsoft/SkillOpt

Fine-tuning teaches an agent new behavior by changing its weights. That's expensive and you need access to the model. Skill opt from Microsoft takes a different route. It optimizes in text space instead. It runs the agent, watches its trajectories, edits a natural language skill, gates every update behind validation, so it only keeps changes that actually help, and outputs a deployable best scorekill.md.

## rmux

[8:27](https://www.youtube.com/watch?v=afCTOG-aEt4&t=507)

- https://github.com/Helvesec/rmux

AI coding agents need to drive terminal apps, but most CLI tools were never designed to be controlled programmatically. Armucks is a universal Rust multiplexer with a typed SDK that lets you spawn, read, write, and control any CLI or 2I app from code native on Linux, Mac OS, and Windows. No T-m or screen dependency. Your agent can drive HTTOP, Vim, PSUL, or any other terminal program as if it had hands.

## tokenspeed

[8:53](https://www.youtube.com/watch?v=afCTOG-aEt4&t=533)

- https://github.com/lightseekorg/tokenspeed

VLM and Llama.cpp are great, but there's always room for someone to chase the theoretical limit. Token speed makes that its whole identity, a speed of light LLM inference engine. The pitch is right there in the name. Squeeze the maximum possible tokens per second out of your hardware, getting as close to the physical ceiling as the math allows. Worth watching if you're running your own inference.

## keep-codex-fast

[9:19](https://www.youtube.com/watch?v=afCTOG-aEt4&t=559)

- https://github.com/vibeforge1111/keep-codex-fast

Run codeex long enough and its local state bloat. Caches pile up, sessions accumulate, and one bad cleanup can wipe context you actually needed. Keep Codeex Fast handles it safely. It's a backup first codec skill that keeps your local state fast, clean, and recoverable. Before it prunes anything, it backs up. So a cleanup never cost you data you can't get back.

## agents-best-practices

[9:42](https://www.youtube.com/watch?v=afCTOG-aEt4&t=582)

- https://github.com/DenisSergeevitch/agents-best-practices

Codeex prompts that work great suddenly break when you paste them into clawed code and vice versa. Agents best practices is built to end that. It's a providerneutral agent skill covering harness design patterns that work across codecs, claude code, and other coding agents. One set of practices, one shared way to think about prompts, tools, and context, regardless of which model is on the other end.

## files-sdk

[10:08](https://www.youtube.com/watch?v=afCTOG-aEt4&t=608)

- https://github.com/haydenbleasel/files-sdk

Every time you switch from S3 to Cloudflare R2 or Versel blob, you rewrite your storage code from scratch. Files SDK ends that one unified TypeScript SDK with a single honest API that works across S3, R2, Versal, blob, Superbase, and more. Web standards IO tree shakable, zero lock in. Write your upload and download logic once, swap the back end in config.

## zerostack

[10:32](https://www.youtube.com/watch?v=afCTOG-aEt4&t=632)

- https://github.com/gi-dellav/zerostack

Most coding agents are bloated Python processes that eat RAM before they've written a single line of code. ZeroStack is the opposite. A minimalistic coding agent written in Rust built around one obsession. Memory footprint and performance. No heavy runtime, no unnecessary dependencies, just a lean agent that reads your codebase, calls your LLM, and gets out of the way.

## forkd

[10:56](https://www.youtube.com/watch?v=afCTOG-aEt4&t=656)

- https://github.com/deeplethe/forkd

Spinning up a fresh firecracker microVM for every AI agent task takes seconds. Forkked cuts that to 101 milliseconds. It keeps a warmed parent microVM ready, then forks it on demand using Linux user fault FD and copy on write memory, so new sandboxes inherit the full warm state instantly. Each fork is fully isolated, costs almost no extra RAM while idle, and tears down cleanly after use.

## HRM-Text

[11:22](https://www.youtube.com/watch?v=afCTOG-aEt4&t=682)

- https://github.com/sapientinc/HRM-Text

Every major AI lab says bigger models need more data and more compute. HRM text is a direct challenge to that. It's a 1B parameter model trained on just 40 billion tokens, up to 1,000 times less data than comparable models using a hierarchical recurrent architecture that reasons in latent space before producing any output. No post-training, no fine-tuning, and it still hits 82.2 on drop and 81.9 on arc challenge.

## Mega-ASR

[11:51](https://www.youtube.com/watch?v=afCTOG-aEt4&t=711)

- https://github.com/xzf-thu/Mega-ASR

Whisper sounds amazing in a quiet room and falls apart the moment there's real world noise, reverb, or a bad mic. Mega ASR is built for exactly those conditions. It's a foundation speech recognition model trained on 2.6 million samples across seven acoustic conditions and 54 compound scenarios. Noise, farfield, echo, distortion, dropout, the messy stuff.

## anysearch-skill

[12:15](https://www.youtube.com/watch?v=afCTOG-aEt4&t=735)

- https://github.com/anysearch-ai/anysearch-skill

Your AI agent's built-in search is fine for general queries. It falls apart the moment you need CV lookups, stock tickers, academic DOIs, or legal filings. Any search is a unified real-time search skill that covers all of it. General web search, vertical domain search across 23 categories, parallel batch queries for up to five intents in one call, and full page URL extraction as markdown.

## hallmark

[12:41](https://www.youtube.com/watch?v=afCTOG-aEt4&t=761)

- https://github.com/Nutlope/hallmark

AI generated UIs all look the same. Hero section, three features, CTA, footer, repeat forever. Hallmark is built to kill that pattern. It's an anti-AII slop design skill for clawed code, cursor, and codecs from Together AI, maintained by Hassan Elmagari. Pick a macro structure, dress it in one of 22 themes, run 65 slop test gates, plus a pre-emit self-critique before anything ships.

## get-shit-done-redux

[13:06](https://www.youtube.com/watch?v=afCTOG-aEt4&t=786)

- https://github.com/open-gsd/get-shit-done-redux

Long autonomous agent runs drift. The agent forgets the goal, improvises, and you come back to a mess. Get done Redux is built to to keep it on the rails. It's a spec driven development workflow for coding agents. You define the work as a structured spec and the agent executes against it instead of wandering. The redux is the rebuilt communitydriven take on the original GSD method.

## smallcode

[13:31](https://www.youtube.com/watch?v=afCTOG-aEt4&t=811)

- https://github.com/Doorman11991/smallcode

Claude code and cursor assume you're running a frontier model with an infinite context budget. Small code assumes you're not. It's an AI coding agent built specifically for small LLMs, hitting 87% on bench with a 4B active parameter model designed to get maximum coding performance out of the models that actually run locally on your hardware.

## Pixal3D

[13:54](https://www.youtube.com/watch?v=afCTOG-aEt4&t=834)

- https://github.com/TencentARC/Pixal3D

Most image to 3D models hallucinate geometry that doesn't actually match the photo you fed them. Pixel 3D fixes that with pixel alignment. The generated 3D shape stays faithful to the input image at the pixel level. So what you see in the photo is what you get in the mesh. No drifting silhouettes, no invented bumps. Feed it a single image. Get back accurate 3D geometry.

## Clawdmeter

[14:19](https://www.youtube.com/watch?v=afCTOG-aEt4&t=859)

- https://github.com/HermannBjorgvin/Clawdmeter

Someone put a physical code usage meter on their desk and honestly I respect it. Claude meter runs on a Waveshare ESP32 with a 2.16 in AMOLED screen. A Damon on your laptop reads your token usage every 60 seconds and sends it over Bluetooth. The faster you burn through your quota, the more animated the pixel art mascot gets. Two hardware buttons handle voice mode and mode toggle shortcuts.

## OpenMonoAgent.ai

[14:46](https://www.youtube.com/watch?v=afCTOG-aEt4&t=886)

- https://github.com/StartupHakk/OpenMonoAgent.ai

Metered AI coding tools charge you per token and bill you forever. Open Mono Agent is a terminal native coding agent powered by local LLMs, so the tokens are unlimited because they run on your machine, not someone's cloud. The unusual part, it's built on car andnet on the argument that AI tooling should be infrastructure you own, not a subscription you rent. \[music\]
