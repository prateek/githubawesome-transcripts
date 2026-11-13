# Cloudflare OS: every user gets their own private app instance

[Watch the original video](https://www.youtube.com/watch?v=YmQtiQFlpVE)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Transcript

[0:00](https://www.youtube.com/watch?v=YmQtiQFlpVE&t=0)

- https://github.com/cloudflare/cloudflare-os

Cloudflare OS gives every user a private copy of each app rather than one shared SAS instance. So a slide deck is a sandboxed program you can ask an agent to modify. Rather than stalling on every permission prompt, a gatekeeper simulates the outcome and feeds the agent simulated results, letting it cue work you approve in bulk later. Running it off Cloudflare on Worker is marked coming
