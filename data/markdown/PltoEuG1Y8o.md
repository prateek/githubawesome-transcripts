# DeepSpec: DeepSeek's full speculative decoding pipeline, cache prep, draft model training

[Watch the original video](https://www.youtube.com/watch?v=PltoEuG1Y8o)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Transcript

[0:00](https://www.youtube.com/watch?v=PltoEuG1Y8o&t=0)

- https://github.com/deepseek-ai/DeepSpec

Speculative decoding speeds up a big model. A small draft model guesses the next tokens. The big one verifies them in one pass. But training a good draft model is its own rabbit hole. Deepspec is Deepseek's full pipeline for it. Prep the target cache, train the draft, then measure acceptance on the benchmarks. It ships three algorithms, including Deepseek's own D-Spark.
