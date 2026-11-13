# h3.c: MiniMax H3 video generation on Apple Silicon in pure C and Metal

[Watch the original video](https://www.youtube.com/watch?v=TyUyM7Et1VI)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Transcript

[0:00](https://www.youtube.com/watch?v=TyUyM7Et1VI&t=0)

- https://github.com/antirez/h3.c

H3.C runs Miniax's H3 video model on Apple silicon in plain C and metal. No Python and no PyTorch anywhere from the Reddus author. It generates video with synced stereo audio from a prompt from first and last frame anchors or from ordered image video and audio references. You'll still need the Miniax H3 checkpoint, FFmpeg, and substantial unified memory with optimization focused on M3 Max and M5
