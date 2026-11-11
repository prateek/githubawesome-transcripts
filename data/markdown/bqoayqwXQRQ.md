# pgbot: a Postgres health check that runs on a read-only role and installs nothing

[Watch the original video](https://www.youtube.com/watch?v=bqoayqwXQRQ)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Transcript

[0:00](https://www.youtube.com/watch?v=bqoayqwXQRQ&t=0)

PGBot checks your Postgress database's health without touching it. No agent, no write access, just a readonly role and the stats views Postgress already tracks. It scores the database 0 to 100 and flags findings as critical, warning, note or good. It keeps a local baseline so it knows what got worse since last time. It also knows the quirks of RDS, Superbase, and Neon.
