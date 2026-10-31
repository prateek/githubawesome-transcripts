# uniprof — CPU profiling made simple for humans and AI agents

[Watch the original video](https://www.youtube.com/watch?v=ivQWqk3Cvic)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Transcript

[0:00](https://www.youtube.com/watch?v=ivQWqk3Cvic&t=0)

Welcome back to GitHub awesome. Today's project is all about making performance profiling simple. It's called Uniro and it helps humans and AI agents profile applications without code changes, without dependencies, and without a headache. You can run it straight from the CLI or even plug it into your AI agent as an MCP server so your agent can find the real performance bottlenecks instead of just guessing. Out of the box, UniROV supports multiple profiling backends like PY Spy, Perf, and Instruments, automatically picking the right one for your platform and runtime.

It normalizes their outputs into a single format, and even runs statistical analysis to highlight hotspots. And the best part, it comes with built-in flame graph visualization powered by Speed Scope, so you can actually see what's slowing you down. Setup is penless, too. By default, Unirov runs your code inside preconfigured Docker containers, keeping your environment clean and isolated. Or if you prefer, you can run in local mode if you already have the tools installed. It works on Mac OS and Linux with partial WSL to support for Windows users and can profile everything from Python and Node.js to native ELF and Macco binaries. So, if you've ever struggled with profiling setups or want to give your AI agents the power to autooptimize code, check out UniR. Link to the repo is in the description.
