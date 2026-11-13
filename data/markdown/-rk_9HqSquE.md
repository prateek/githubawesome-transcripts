# flash-moe: A 400B Model Running on a MacBook?!

[Watch the original video](https://www.youtube.com/watch?v=-rk_9HqSquE)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Transcript

[0:00](https://www.youtube.com/watch?v=-rk_9HqSquE&t=0)

- https://github.com/danveloper/flash-moe

Running a 400 billion parameter model locally usually means a server rack. Someone just did it on a MacBook Pro with 48 GB of RAM. The engine is called FlashMo. Instead of loading a 209 GB model into memory, it streams weights from SSD to GPU on demand, pulling around five tokens per second on consumer hardware. The whole engine was built in 24 hours with Claude code autonomously running experiments based on an Apple research
