# quill: a Mac meeting recorder that survives crashes, CAF audio needs no finalisation

[Watch the original video](https://www.youtube.com/watch?v=PUyPibO6gDY)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Transcript

[0:00](https://www.youtube.com/watch?v=PUyPibO6gDY&t=0)

- https://github.com/digimata/quill

Quill records meetings on a Mac and transcribes them locally. And the engineering choices are all about surviving a crash. Audio writes as CF rather than M4A because CAF needs no finalization pass. So a session killed midme still leaves a readable file. The file system acts as the job cue. So anything unfinished picks up on next launch. There's a doctor command purely so you aren't downloading a 600 megabyte model minutes before a
