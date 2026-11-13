# SmolVM: a single-executable VM that cold-starts in under a second, real hardware isolation

[Watch the original video](https://www.youtube.com/watch?v=67qswlKD8Vs)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Transcript

[0:00](https://www.youtube.com/watch?v=67qswlKD8Vs&t=0)

- https://github.com/smol-machines/smolvm

Docker solves it works on my machine. Small VM takes a different approach. Just ship the entire machine. It packs your software into a single executable small machine file that codes in under a second using hypervisor framework on Mac OS or KVM on Linux via libcrun. Real hardware isolation, not container namespaces. Built by a former AWS firecracker engineer. Live migration on the road
