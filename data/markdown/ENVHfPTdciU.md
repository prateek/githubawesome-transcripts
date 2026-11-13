# Swiftlet: streams 80B Qwen MoE experts from iPhone SSD, 2.5GB RAM, one token per second

[Watch the original video](https://www.youtube.com/watch?v=ENVHfPTdciU)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Transcript

[0:00](https://www.youtube.com/watch?v=ENVHfPTdciU&t=0)

- https://github.com/leonickson1/Swiftlet

Swiftllet runs 35B and 80B Quen mixture of experts models on Apple devices by keeping the dense core in memory and streaming routed experts from SSD. QAC files turn each expert fetch into one read while caching and metal kernels handle inference. The maintainer reports the 35B model using about 2.5 gigabytes of RAM on an iPhone 17 at roughly one token per
