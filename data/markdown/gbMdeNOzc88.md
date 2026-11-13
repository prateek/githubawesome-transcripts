# scriptc compiles ordinary TypeScript to native binaries with no Node and no V8 inside, from Vercel

[Watch the original video](https://www.youtube.com/watch?v=gbMdeNOzc88)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Transcript

[0:00](https://www.youtube.com/watch?v=gbMdeNOzc88&t=0)

- https://github.com/vercel-labs/scriptc

Script C compiles ordinary TypeScript to native binaries with no node and no V8 inside from Versel Labs. Real TSC does the type checking, then lowering runs through a typed to LLVM or C. It reports statement by statement what compiles statically and names each blocker with an error code. Zero runtime holds for the static path only. NPM dependencies need dynamic mode which embeds quick.js. JS.
