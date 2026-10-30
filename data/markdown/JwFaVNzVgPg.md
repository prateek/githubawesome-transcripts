# 17 Trending AI Projects on GitHub: nanochat, Superpowers, beads, AI Hedge Fund,Sora Extend,AgentFlow

[Watch the original video](https://www.youtube.com/watch?v=JwFaVNzVgPg)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Introduction

[0:00](https://www.youtube.com/watch?v=JwFaVNzVgPg&t=0)

Today we're diving into the top 17 trending AI projects on GitHub, including LLM tools, chatgpt clone, and generating long videos in Sora 2. Whether you're an AI enthusiast, researcher, or indie dev building your next side project, there's something in here that'll inspire you. All the links are in the description. And let's dive straight into the trending AI projects on GitHub.

## nanochat

[0:25](https://www.youtube.com/watch?v=JwFaVNzVgPg&t=25)

- https://github.com/karpathy/nanochat

First, we've got Nanohat by Andre Carpathy. And wow, this one blew up fast. Within just 12 hours of release, it racked up over 5,000 GitHub views. Nanohat is a from scratch chat GPT clone, training to inference packed into just 8,000 lines of code. You can spin it up on a single cloud GPU and in as little as 4 hours, you'll be chatting with your very own LLM in a chat GPT like web UI. It covers everything. Tokenizer training, pre-training on fine web, mid-training with small talk, and even tool use with a Python sandbox. And the best part, you can build a model for about a hundred bucks and scale up to GPT3 level coherence with just a bit more compute.

## Superpowers

[1:08](https://www.youtube.com/watch?v=JwFaVNzVgPg&t=68)

- https://github.com/obra/superpowers

Let's talk about superpowers, a plugin that gives Claude code developer level abilities. Think of it as a skills library for AI coding agents packed with proven techniques for testing, debugging, collaboration, and even metalarning. It installs a full suite of commands, letting Claude design, plan, and code with structure, not chaos. The plugin automatically syncs your local skill repository, registers new hooks, and even lets you create or contribute your own skills through GitHub pull requests with built-in skill discovery, version syncing, and test-driven documentation. Superpowers turns your coding AI into a structured, disciplined teammate.

## beads

[1:50](https://www.youtube.com/watch?v=JwFaVNzVgPg&t=110)

- https://github.com/steveyegge/beads

Ever wish your coding agent could remember what it was doing yesterday? Meet Beads, a lightweight memory system that gives your AI agents long-term focus and organizational superpowers. Instead of dumping half-finish markdown plans, Beads turns your agents workflow into a graph-based issue tracker, chaining related tasks together like beads on a string. The result, your agents can follow complex multiseession plans flawlessly without losing context or skipping steps. Drop beads into any repo and suddenly your coding agent stops forgetting, starts planning and works like a real teammate with structured reasoning.

## UnifoLM-WMA-0

[2:30](https://www.youtube.com/watch?v=JwFaVNzVgPg&t=150)

- https://github.com/unitreerobotics/unifolm-world-model-action

Meet UNIFM WMA0, a system designed to teach robots how to understand and interact with the real world. At its core is a model that learns the physics of robot environment interactions. It does two things well. First, it acts as a simulation engine, generating synthetic data so robots can practice safely before touching the real world. Second, it works as a policy enhancer, predicting how future interactions will unfold, helping the robot plan smarter moves in real time. UNIFM D0 can simulate complex long horizon tasks like packing objects, navigating obstacles, or manipulating tools, all through video-based controllable generation.

## FastAPI-MCP

[3:12](https://www.youtube.com/watch?v=JwFaVNzVgPg&t=192)

- https://github.com/tadata-org/fastapi_mcp

Meet Fast API MCP, a slick new bridge between your Fast API apps and the model context protocol. This project lets you expose any Fast API endpoint as an MCP tool, complete with built-in authentication, schema preservation, and full documentation support, all with zero setup. Unlike generic converters, Fast API MCP is fast API native, meaning it directly leverages your ASGI interface for efficient low latency communication. You can mount your MCP server inside the same app or deploy it separately, giving you total flexibility in how your AI agents interact with your backend.

## gitingest

[3:49](https://www.youtube.com/watch?v=JwFaVNzVgPg&t=229)

- https://github.com/coderamp-labs/gitingest

Here's one for all the AI coders and prompt engineers out there. Introducing Guide Injest. This tool does something beautifully simple but gamechanging. It turns any GitHub repository into a prompt friendly text digest that you can feed directly into an LLM. Want to analyze a project with Chat GPT or Claude? Just replace hub with ingest in the GitHub URL and boom, you instantly get a clean structured text version of the entire codebase. Guidingest gives you file statistics, directory structure, token counts, and perfectly formatted code extracts designed for AI context windows.

## memvid

[4:27](https://www.youtube.com/watch?v=JwFaVNzVgPg&t=267)

- https://github.com/Olow304/memvid

Imagine if your AI's entire memory could fit inside a video file. Mevid is the memory infrastructure for real world AI, compressing millions of text chunks into a single searchable MP4 file, all while keeping sub 100 millisecond retrieval speeds. Instead of querying massive vector databases every time you prompt an LLM, Mevid encodes text as QR codes inside video frames using decades of video compression research to achieve 50 to 100 times smaller storage than traditional methods. There's no database cluster, no Docker setup, no network latency, just Python and an MP4 file, meaning your AI can store, search, and recall huge knowledge bases entirely offline.

## AI Hedge Fund

[5:12](https://www.youtube.com/watch?v=JwFaVNzVgPg&t=312)

- https://github.com/virattt/ai-hedge-fund

Meet the AI hedge fund, a proof of concept that turns investors into autonomous AI agents, all working together in a virtual trading floor. This project doesn't trade real money. Instead, it simulates how multiple investing philosophies might interact under one intelligent framework. Imagine a digital investment committee with legends like Warren Buffett, Charlie Munger, Peter Lynch, and Michael Bur, each embodied as an AI agent with reasoning and portfolio logic. The valuation agent calculates intrinsic value. The sentiment, fundamentals, and technicals agents provide market intelligence. Then the risk manager and portfolio manager collaborate to make simulated decisions.

## OpenSpec

[5:56](https://www.youtube.com/watch?v=JwFaVNzVgPg&t=356)

- https://github.com/Fission-AI/OpenSpec

Ever asked your AI coding assistant to build something only to realize it misunderstood what you meant? That's where OpenSpec comes in. It brings specdriven development to the world of AI coding. Instead of relying on vague chat memory or ad hoc prompts, OpenSpec gives you a lightweight workflow where humans and AI agree on what to build before a single line of code is written. You draft a change proposal, review it collaboratively with your AI, and once aligned, the assistant implements code that matches the approved spec every time. No API keys, no complex setup.

## diffusion-gpt

[6:33](https://www.youtube.com/watch?v=JwFaVNzVgPg&t=393)

- https://github.com/ash80/diffusion-gpt

We've seen diffusion models transform how we create images and videos. But what if we applied that same concept to text? Enter diffusion GPT, an annotated character level discrete diffusion model for text generation. Blending the simplicity of Carpathy's baby GPT with the cutting edge research of discrete diffusion modeling. Instead of generating one token at a time like traditional auto reggressive models, diffusion GPT learns to denoise entire sequences in parallel, turning corrupted text back into meaning. Run it on Collab, tweak the data set or noise schedule, and watch Shakespeare's chaos turn back into coherent verse.

## mcp-agent

[7:13](https://www.youtube.com/watch?v=JwFaVNzVgPg&t=433)

- https://github.com/lastmile-ai/mcp-agent

Next up is MCP agent, a lightweight framework for building AI agents using the model context protocol. Think of it as the missing link between your AI models and real world tools. With MCP agent, you can easily build multi-agent workflows, human in the loop systems, or even retrieval augmented chat bots, all using simple reusable patterns inspired by Anthropic's building effective agents guide. It automatically manages MCP server connections, supports OpenAI's swarm orchestration, and integrates seamlessly with tools like Claude Desktop, Gmail, or Murmo Notebooks.

## Sora Extend

[7:50](https://www.youtube.com/watch?v=JwFaVNzVgPg&t=470)

- https://github.com/mshumer/sora-extend

Next up is Sora Extend, a tool for anyone frustrated by OpenAI's 12c Sora video limit. Sora Extend lets you generate long form AI videos seamlessly by chaining short clips together with perfect continuity. Here's how it works. Your prompt is broken into coherent segments, each processed independently by Sora 2. The magic happens when the final frame of each clip becomes context for the next, ensuring visual and thematic consistency across the entire sequence. Once all segments are generated, Sora Extend automatically concatenates them into a single smooth video, so you get highquality extended content without manual editing.

## rCM

[8:32](https://www.youtube.com/watch?v=JwFaVNzVgPg&t=512)

- https://github.com/NVlabs/rcm

Next up is RCM, the framework for few-step highquality video generation. RCM scales continuous time consistency distillation to massive 10b plus parameter video diffusion models and delivers videos with high fidelity and strong diversity in just two to four steps. The secret sauce, a forward reverse divergence joint distillation framework, plus an open- source flash attention to JVP kernel that supports large-scale parallelism, making even huge models efficient to train and infer. Built on top of Cosmos Predict 2, RCM lets you generate cinematic videos in seconds from text prompts while offering full control over resolution, aspect ratio, and random seeds for reproducibility.

## The Markovian Thinker

[9:16](https://www.youtube.com/watch?v=JwFaVNzVgPg&t=556)

- https://github.com/McGill-NLP/the-markovian-thinker

Next up, we have the Marovian thinker, a method for scaling inference in large language models. Traditional RL for reasoning LLM like long treats the state as the entire prompt plus all past thinking tokens. The problem, the state keeps growing, making computation cost quadratic and memory usage balloon. Enter the Marovian thinking paradigm. By keeping the state bounded and fixed, models now advance their reasoning without ever growing the context uncontrollably. This makes compute cost linear with the number of reasoning steps, a huge efficiency gain.

\[Music\]

## Nanobrowser

[9:53](https://www.youtube.com/watch?v=JwFaVNzVgPg&t=593)

- https://github.com/nanobrowser/nanobrowser

Nano browser, an open-source AI web automation tool that runs inside your browser. Think of it as a free alternative to OpenAI Operator, but with a twist. It's powered by a multi- aent system that plans, navigated. Whether you're automating workflows, scraping data, or running research agents on the fly, Nano Browser turns your browser into a full AI control center.

## AgentFlow

[10:29](https://www.youtube.com/watch?v=JwFaVNzVgPg&t=629)

- https://github.com/lupantech/AgentFlow

Introducing Agent Flow, a trainable framework that learns how to plan, reason, and use tools in the flow. Agent Flow takes a modular approach with four specialized agents, the planner, executor, verifier, and generator. These modules work together across multiple turns guided by evolving memory and integrated tools like Python coder, Google search, and Wikipedia forming a self-optimizing ecosystem of intelligence. Agent Flow continuously improves while reasoning, refining its planning and decision making in real time.

## StreamingVLM

[11:02](https://www.youtube.com/watch?v=JwFaVNzVgPg&t=662)

- https://github.com/mit-han-lab/streaming-vlm

Meet streaming VLM real time understanding to infinite video streams. Traditional VLM struggle when processing long or continuous video. Full attention leads to quadratic compute costs. Streaming VLM changes the game. It keeps a compact KV cache, smartly reuses states, and aligns its training perfectly with streaming inference. The result, stable real-time understanding at up to eight frames per second on a single Nvidia H100. This model's supervised fine-tuning strategy not only boosts streaming performance, but also improves general visual question answering.
