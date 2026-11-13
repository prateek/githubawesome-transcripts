# Deltafin runs Kimi K3, 2.8 trillion parameters and 1.56 terabytes of weights, on a 64GB MacBook

[Watch the original video](https://www.youtube.com/watch?v=ylXndtJtQzk)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Transcript

[0:00](https://www.youtube.com/watch?v=ylXndtJtQzk&t=0)

- https://github.com/gavamedia/deltafin

Delta Fin runs Kimmy K3 2.8 trillion parameters and 1.56 tab of weights on a 64 GB MacBook. The trick is that a mixture of experts model only touches a sliver of itself per token. So the attention spine lives on local disk and the 82,432 routed experts stay on HuggingFac's CDN fetched one HTTP range request at a time into a growing cache. It's about a token per minute. The author calls it an existence proof, not a chat setup.
