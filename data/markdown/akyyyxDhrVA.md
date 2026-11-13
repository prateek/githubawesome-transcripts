# ESP32 AI: a 28.9M parameter LM on an $8 ESP32-S3, embeddings fetched from flash, no server

[Watch the original video](https://www.youtube.com/watch?v=akyyyxDhrVA)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Transcript

[0:00](https://www.youtube.com/watch?v=akyyyxDhrVA&t=0)

- https://github.com/slvDev/esp32-ai

ESP32 AI squeezes a 28.9 million parameter language model onto an $8 ESP32S3 with no server connection. The trick is keeping a 25 million parameter embedding table in flash and fetching only the rows needed for each token while the compute heavy core stays in faster memory. The maintainer measures roughly 9.5 tokens per second. It's an architecture experiment, not a chatbot. The tiny stories model writes simple stories but can't answer questions or
