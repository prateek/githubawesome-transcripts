# Walgit: a Git server where the bucket is the repository and the disk is a throwaway cache

[Watch the original video](https://www.youtube.com/watch?v=J3adIIJ9IE4)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Transcript

[0:00](https://www.youtube.com/watch?v=J3adIIJ9IE4&t=0)

- https://github.com/tobi/walgit

WGit puts a git server in one binary backed by S3 or GCS with no database or elected leader. The bucket is the repository. Each server's disk is just a disposable cache. Pushes become immutable log entries while a compare and swap manifest decides which update wins, letting multiple instances share storage safely. It includes smart HTTP policies, web hooks, and a web UI.
