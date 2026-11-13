# Autoresearch: AI agents conducting deep learning research completely on their own

[Watch the original video](https://www.youtube.com/watch?v=g7V0UJv9gT4)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Transcript

[0:00](https://www.youtube.com/watch?v=g7V0UJv9gT4&t=0)

- https://github.com/karpathy/autoresearch

Andre Karpathy, just open- sourced auto research. You give an AI agent a real LLM training setup, point it at an instruction file, and go to sleep. The agent autonomously modifies the architecture, runs a fixed 5-minute training loop on a single GPU, checks validation loss, and decides whether to keep or discard the changes, then repeats the cycle all night. By morning, you wake up to a full log of automated experiments and an optimized
