# Qwen3.8-27B on one RTX 3090: 417 tokens a second from a 27B model on one 24GB gaming card

[Watch the original video](https://www.youtube.com/watch?v=yk94KK2i3wo)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Transcript

[0:00](https://www.youtube.com/watch?v=yk94KK2i3wo&t=0)

- https://github.com/syv-ai/qwen38-27b-rtx3090

Fitting a 27 billion parameter model onto one 24 GB gaming card usually means stopping at it loads. This recipe pushes past that to 417 tokens a second batched. And the wins are unglamorous in the best way. Quen's untied embeddings ship as two unquantized 2.5 GB matrices nobody bothered with. So re-quantizing both to int 8 hands back 2.6 6 GB. And on this architecture, spare memory converts straight into batch
