# 16 Trending AI Agent Projects on GitHub: sim, Astron, Code2Video, mcp-use, ART, AutoAgent, CrewAI

[Watch the original video](https://www.youtube.com/watch?v=366lsOXiHAU)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Introduction

[0:00](https://www.youtube.com/watch?v=366lsOXiHAU&t=0)

Today, I've cured 16 awesome open-source AI agent projects. If you're building your own AI agent or just love experimenting with cutting edge automation, these projects are going to fire up your imagination. Let's jump straight into it. And as always, links to all repos are down below. Don't forget to smash that on GitHub if you like what you see.

## sim

[0:25](https://www.youtube.com/watch?v=366lsOXiHAU&t=25)

- https://github.com/simstudioai/sim

This is SIM, an open-source visual platform for building and deploying AI agent workflows. No coding required. SIM lets you connect AI models, APIs, and business tools on an interactive canvas to design assistance, automate processes, or analyze data. You can trigger workflows from chat, APIs, or web hooks, and collaborate with your team in real time. It integrates with over 80 services from OpenAI and Slack to Notion and GitHub and can run in the cloud or fully self-hosted with local AI models for complete privacy.

## Astron Agent

[1:00](https://www.youtube.com/watch?v=366lsOXiHAU&t=60)

- https://github.com/iflytek/astron-agent

Astron agent is an enterprisegrade development platform for building and managing AI agents. It integrates model hosting, application deployment, optimization, and access control into a single environment. A key feature is the combination of intelligent robotic process automation allowing agents not only to reason but to act across digital systems. The platform supports multiple programming languages and provides a full tool chain with dockerized deployment making it accessible to both developers and organizations adopting AI workflows.

## Code2Video

[1:38](https://www.youtube.com/watch?v=366lsOXiHAU&t=98)

- https://github.com/showlab/Code2Video

Now this one's seriously cool. Code to video is a codecentric framework for generating educational videos from executable scripts. Instead of using pixelbased generation, it relies on manim code to produce clear reproducible visual explanations. The system uses a three agent design, a planner for storyboarding, a coder for generating scripts, and a critic for layout refinement. It also introduces the MMC benchmark for evaluating coddriven video generation across clarity, efficiency, and knowledge transfer. \[Music\]

## mcp-use

[2:13](https://www.youtube.com/watch?v=366lsOXiHAU&t=133)

- https://github.com/mcp-use/mcp-use

Next up, let's talk about MCP use, the open- source bridge that connects any LLM to any MCP server and gives your AI agents real tool access. With MCP use, you can build custom MCP agents that browse the web, read and write files, or interact with any system, all without relying on closed source clients. The best part, it's super lightweight. You can spin up your first MCP capable agent in just six lines of code. It supports all major LLMs, OpenAI, Anthropic, Groke, Llama, and lets agents dynamically pick the right MCP server for each task.

\[Music\]

## ART

[2:51](https://www.youtube.com/watch?v=366lsOXiHAU&t=171)

- https://github.com/OpenPipe/ART

Coming up next, ART, the agent reinforcement trainer designed to teach AI agents how to learn from experience and master multi-step tasks in the real world. The star feature here is ruler, a zeroot reward system that eliminates the need for handcrafted reward functions. Just define your task in a prompt and ruler acting as a judge scores agent behavior automatically. That means two to threex faster development and high performance across almost any task. ART provides an ergonomic Python framework for integrating GRPO reinforcement learning into your agents. Whether you're training them to play games like 2048 and tic-tac-toe, search emails, or handle complex MCP server operations.

\[Music\]

## magentic-ui

[3:38](https://www.youtube.com/watch?v=366lsOXiHAU&t=218)

- https://github.com/microsoft/magentic-ui

Next up, Magentic UI, a research prototype designed for human- centered web agents that can browse, generate code, analyze files, and perform web actions all in one interface. Unlike traditional autonomous web bots, Magent UI puts humans in the loop, letting you co-plan, guide, and approve every step of the task. Whether it's filling forms, navigating complex websites, or generating charts from online data, you stay in control while the agents handle the heavy lifting. The interface is split into sessions. A navigator panel to manage tasks and a detailed session panel where you interact with the agents, monitor progress, and attach files for analysis.

## AutoAgent

[4:22](https://www.youtube.com/watch?v=366lsOXiHAU&t=262)

- https://github.com/HKUDS/AutoAgent

Auto agent is a fully automated framework that allows users to create and deploy large language model agents without writing code. Just tell it what you want and it creates agents, tools, and workflows for you. It supports natural language-based creation of tools, workflows, and retrieval systems. The framework includes an integrated vector database for agentic rag and supports a wide range of LLM providers. Auto agents focus is on flexibility and low overhead, offering a zero code approach to agent design and deployment.

## PocketFlow

[4:58](https://www.youtube.com/watch?v=366lsOXiHAU&t=298)

- https://github.com/The-Pocket/PocketFlow

Pocketflow is a minimalist LLM framework written in about 100 lines of code. It captures the core abstraction of agent workflows using a graph-based design without external dependencies or vendor lockin. Despite its simplicity, it supports multi-agent coordination, task decomposition, and retrieval augmented generation. The framework is designed to be understandable, adaptable, and easy to extend across multiple programming languages. Pocketflow now even supports TypeScript, Java, Go, Rust, C++, and PHP, making it one of the most portable LLM frameworks ever built.

## trae-agent

[5:37](https://www.youtube.com/watch?v=366lsOXiHAU&t=337)

- https://github.com/bytedance/trae-agent

Trey Agent is a command line agent framework for automating software engineering workflows using large language models. It translates natural language instructions into structured operations such as file editing, code generation, and shell execution. Trey Agent emphasizes modularity and research transparency, making it suitable for studying agent design and conducting controlled experiments. It supports multiple model providers, an interactive mode, detailed action logging, and concise progress summaries through its Lake View module.

## web-ui

[6:14](https://www.youtube.com/watch?v=366lsOXiHAU&t=374)

- https://github.com/browser-use/web-ui

Web UI builds on the foundation of browser use, extending its goal of making websites directly accessible to AI agents. The project introduces a gradi-based interface providing a clear and intuitive environment for users to interact with the browser agent. A custom browser integration feature allows users to connect their existing browsers keeping login states and authentication intact. This design also supports highdefin screen recording. Finally, persistent browser sessions enable users to maintain a continuous workspace between AI tasks, preserving interaction history and browser state for ongoing workflows.

## Playwright MCP

[6:57](https://www.youtube.com/watch?v=366lsOXiHAU&t=417)

- https://github.com/microsoft/playwright-mcp

Next up is Playright MCP, a model context protocol server that brings browser automation to language models. Instead of relying on screenshots or visual recognition, it uses structured accessibility snapshots, allowing models to understand and interact with web pages directly through data. It's lightweight, deterministic, and designed for precision, avoiding the ambiguity that often comes with pixelbased inputs. If you want your AI agents to browse and interact with the web through pure data, not pixels, Playright MCP is the open- source tool you've been waiting for.

## smolagents

[7:35](https://www.youtube.com/watch?v=366lsOXiHAU&t=455)

- https://github.com/huggingface/smolagents

All right, let's talk about small agents. This open- source Python library makes it insanely easy to build and run AI agents in just a few lines of code. The whole logic fits in around a thousand lines. Unlike most frameworks, small agents gives you a code agent. It writes and executes its own code securely in sandboxed environments like Docker, E2B, or even web assembly. It's model agnostic, tool agnostic, and even modality agnostic, handling text, vision, video, or audio. With support for everything from local transformers to OpenAI and anthropic models, you can share or pull tools straight from the hugging face hub and even run agents directly from the command line with built-in CLI tools.

## AgenticSeek

[8:20](https://www.youtube.com/watch?v=366lsOXiHAU&t=500)

- https://github.com/Fosowl/agenticSeek

Meet Agentic Seek, a private local alternative to cloud AI assistance like Manus. It runs entirely on your device. No cloud, no data sharing, keeping your work and conversations fully private. Agentic Seek can browse the web, read and extract information, fill forms, and even write and debug code across multiple languages, all autonomously. It selects the right agent for each task, plans complex workflows, and executes them step by step. With voice support under development, Agentic Seek is designed to be a fast, local, and secure AI assistant that works entirely on your terms.

## TradingAgents

[8:59](https://www.youtube.com/watch?v=366lsOXiHAU&t=539)

- https://github.com/TauricResearch/TradingAgents

Next, we have Trading Agents, a multi-agent framework that models how real trading firms operate. It brings together LLM powered agents specializing in fundamental, sentiment, news, and technical analysis. Each contributing their expertise to build a complete market view. These agents debate and collaborate, allowing trader and riskmanagement agents to make structured datainformed decisions. Trading agents is open- source and research focused, a tool for studying market dynamics, agent collaboration, and financial decision-making systems in a controlled environment.

## CrewAI

[9:38](https://www.youtube.com/watch?v=366lsOXiHAU&t=578)

- https://github.com/crewAIInc/crewAI

Meet Crew AA, a Python framework for multi-agent automation. Unlike most frameworks, Crew Aai was built completely from scratch. No lang chain dependencies, no bloat, just pure performance and control. It focuses on performance and flexibility, giving developers control over how agents collaborate and execute event-driven tasks. The framework supports both crews of agents for autonomous collaboration and flows for fine-trained orchestration. Crew AI also provides an enterprise suite called AMP offering observability, analytics, and security for production scale agent management.

## DeepResearch

[10:17](https://www.youtube.com/watch?v=366lsOXiHAU&t=617)

- https://github.com/Alibaba-NLP/DeepResearch

Meet Tongi Deep Research, a large-scale agentic language model built for deep multi-step reasoning and long horizon information retrieval. Developed by Tongi Lab, it features 30.5 billion parameters with only 3.3 billion activated per token, delivering strong efficiency and performance across benchmarks like browser comp, weber QA, and humanity's last exam. It's trained through a fully automated data generation pipeline. Largecale continual pre-training on agentic data and on policy reinforcement learning using a group relative policy optimization framework.
