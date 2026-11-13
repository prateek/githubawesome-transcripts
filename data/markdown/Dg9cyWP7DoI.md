# ha.mr: a URL shortener with no backend, compresses the URL itself using Huffman

[Watch the original video](https://www.youtube.com/watch?v=Dg9cyWP7DoI)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Transcript

[0:00](https://www.youtube.com/watch?v=Dg9cyWP7DoI&t=0)

- https://github.com/p2r3/ha.mr

PAMR shrinks links without storing them in a back-end database. Instead, it compresses the URL itself, stripping common patterns, matching domains against Huffmancoded dictionaries, then packing the remainder into a compact character set. For QR codes, it switches to QR's alpha numeric mode to reduce encoding overhead. Everything runs in the browser.
