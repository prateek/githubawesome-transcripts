# TileKernels: DeepSeek's internal GPU kernels, MoE routing, FP4 quantization, written in TileLang

[Watch the original video](https://www.youtube.com/watch?v=Qia2-Qp75nQ)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Transcript

[0:00](https://www.youtube.com/watch?v=Qia2-Qp75nQ&t=0)

- https://github.com/deepseek-ai/TileKernels

Deepseek just open sourced the GPU kernels underneath their models. Tile kernels is written entirely in tile lang and bypasses standard libraries to extract maximum floatingpoint throughput directly from Nvidia Hopper and Blackwell architectures. Optimized mixture of experts routing FP8 and FP4 per channel quantization. Specialized Engram gating, the exact colonel's Deepseek runs internally.
