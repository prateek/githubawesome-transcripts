# GitHub Trending Today \#51: hindsight, reladraw, Whiteboard, NeoHorse, company-brain, CLM, cogsend

[Watch the original video](https://www.youtube.com/watch?v=qb3ip0NzJKo)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Introduction

[0:00](https://www.youtube.com/watch?v=qb3ip0NzJKo&t=0)

Welcome back to GitHub awesome. This is GitHub trending today 51 35 trending open source projects on GitHub right now. Let's get into it.

## hindsight

[0:11](https://www.youtube.com/watch?v=qb3ip0NzJKo&t=11)

- https://github.com/vectorize-io/hindsight

Hindsight is an agent memory system from Vectorize built to help agents learn from what they've done beyond just recalling old chats. It sorts what it keeps into world facts, the agents own experiences, observations backed by several memories, and mental models that update as it learns. Recall runs semantic, keyword, graph, and timebased searches in parallel, then reranks the results.

## reladraw

[0:36](https://www.youtube.com/watch?v=qb3ip0NzJKo&t=36)

- https://github.com/reladraw/reladraw

Real is a text diagram language that sits between mermaid style auto layout and dragging boxes around in excellent. You write things like above left of the hub or between desktop one and laptop one. And a resolver treats those as minimum distances and finds the tightest layout that fits. It also reports overlaps, crossed edges, and text overflow without rendering.

## Whiteboard

[1:02](https://www.youtube.com/watch?v=qb3ip0NzJKo&t=62)

- https://github.com/devdotfast/whiteboard

Whiteboard is a desktop canvas where you and your coding agent design software together. Clawed code or codecs draws sequence and entity diagrams onto the canvas and clicking a box jumps you to the code behind it. Its diff viewer is aware so big functions collapse into pseudo code and tests fold away. Agents also log their decisions so you can trace why something was built the way it was.

## NeoHorse

[1:28](https://www.youtube.com/watch?v=qb3ip0NzJKo&t=88)

- https://github.com/TokenRhythm/NeoHorse

Neoor is a family of openw weight models trained from Quen 3.5 for coding and tool use. Its training harness routes tasks among models, records their actions and outcomes, then uses that feedback to shape the next training mix. The release includes 4B and 9B language models, plus a 4B Jev variant that scores predefined decisions. The repository describes recursive self-improvement as a goal.

## company-brain

[1:54](https://www.youtube.com/watch?v=qb3ip0NzJKo&t=114)

- https://github.com/supermemoryai/company-brain

Company brain is a Slack bot from Super Memory that remembers what your team says and can act on it. It only reads with the asker's own access. So a question in a public channel draws on shared memory while a DM can also pull from your private channels. It opens issues and reads PRs with writes running under your own credentials. It self-hosts on Cloudflare workers, but memory still runs through Super Memories API.

## CLM

[2:22](https://www.youtube.com/watch?v=qb3ip0NzJKo&t=142)

- https://github.com/Contrastive-LM/CLM

CLM, short for contrastive language model, makes agent decisions by matching embeddings instead of generating text. It encodes the state and each candidate action separately on a Quen 38B backbone with small trainable heads, then picks the action that lines up best. It serves through a Typesafe compatible API and the authors report parody with Jev at up to nine times lower latency.

## golive-skill

[2:47](https://www.youtube.com/watch?v=qb3ip0NzJKo&t=167)

- https://github.com/mikehasa/golive-skill

Golive is an agent skill for codecs and claude code that takes the app your agent just built and puts it into production on your own accounts. It figures out what the app needs, shows you a plan for hosting, database, domain, email, and payments, and waits for your approval before touching any provider. When it's done, it writes a handover file listing everything it created so you know exactly what you own. Cogsend is a self-hosted social scheduler that posts to Mastadon, Blue Sky, LinkedIn, Threads, and X from one

## cogsend

[3:13](https://www.youtube.com/watch?v=qb3ip0NzJKo&t=193)

- https://github.com/deepakness/cogsend

draft. You write once, tweak the copy per platform, and publish now or schedule it. It runs on Cloudflare workers with D1 and R2, and a per minute cron sends what's due. Failed posts retry five times, then park in a failed list instead of vanishing. Credentials are encrypted at rest and the admin account has 2FA.

## disktree

[3:41](https://www.youtube.com/watch?v=qb3ip0NzJKo&t=221)

- https://github.com/tobi/disktree

Disk tree shows what's filling your drive as a map of nested blocks sized by the space files actually use. Zoom into a folder, spot bulky caches or old builds, and mark what you want to remove. Before anything goes, you review the full list and see how much space it could free. It prefers the trash and permanent deletion asks for confirmation. It runs on Linux, Mac OS, and Windows.

## inkwave

[4:06](https://www.youtube.com/watch?v=qb3ip0NzJKo&t=246)

- https://github.com/jaydendavisnc/inkwave

Inkwave is a browser game where winning means painting more ground than the other team. You play threeinut fouron- matches against bots, switching between seven weapons and a squid form that swims through your ink and climbs painted walls. It's built with 3JS and runs without a build step. Even the characters, animations, textures, sound effects, and music are generated in code.

## ollaya

[4:30](https://www.youtube.com/watch?v=qb3ip0NzJKo&t=270)

- https://github.com/ollaya-dev/ollaya

decision models locally. Much like Olama lets you run language models, give it a message, email, or ticket, and ask things like, "Is this urgent?" or "What's the customer asking for?" It returns scores and probabilities instead of generating a paragraph. You can pull models by name, serve them through an API, and connect them to coding agents through MCP.

## jive

[4:54](https://www.youtube.com/watch?v=qb3ip0NzJKo&t=294)

- https://github.com/merijjeyn/jive

Jive is a terminal coding agent that turns a plan into an executable graph. Instead of asking a large language model what to do after every tool call, it can run connected steps and use smaller decision models along the way. That makes it an interesting fit for repetitive work like reviewing lots of records or tracing errors across a code base where constant model round trips add up.

## mu

[5:18](https://www.youtube.com/watch?v=qb3ip0NzJKo&t=318)

- https://github.com/qybaihe/mu

MW is a coding agent with a small judge handling routine decisions while the main model focuses on the code. The judge decides things like which tool output belongs in context, whether an action fits your instructions, and when a task is actually finished. Each verdict goes into a ledger you can inspect. You can even run a judge in shadow mode to see its decisions before letting them affect the agent.

## cli-faq-shortcuts

[5:44](https://www.youtube.com/watch?v=qb3ip0NzJKo&t=344)

- https://github.com/kishormorol/cli-faq-shortcuts

Clifact Shortcuts looks through your coding agent history for requests you keep typing. It groups similar asks, shows you the repeats, and lets you turn the useful ones into short project commands. So, did the newsletter reach everyone? Can become/sent with the right query and reporting steps saved behind it. The history extractor runs locally, and you choose which shortcuts get created.

## anidoodle

[6:10](https://www.youtube.com/watch?v=qb3ip0NzJKo&t=370)

- https://github.com/alexgreensh/anidoodle

Anadoodle makes handdrawn art with code, so the same source can produce an illustration, a drawing time lapse, or an animated film. It includes 31 styles from charcoal and watercolor to woodcut and pixel art. You can even add music composed in code. The neat part is consistency. Render it again at a different size and the marks stay where you put them. Keel brings the coding agents you already use into one native Mac OS workspace. You can follow

## keel

[6:33](https://www.youtube.com/watch?v=qb3ip0NzJKo&t=393)

- https://github.com/codejunkie99/keel

sessions, inspect changes, use a terminal, and see agents and the files they touch in a live graph. For new tasks, a local lia model can help choose which agent to use. Keel checks that choice and records the decision so you can see how the task was routed.

## logo-design-skill

[6:56](https://www.youtube.com/watch?v=qb3ip0NzJKo&t=416)

- https://github.com/kaankiziltug/logo-design-skill

Logo design skill guides Claude through a logo project from the first brand brief to SVG concepts you can actually test. It checks how each mark looks at tiny sizes in one color on different backgrounds and beside competitors. There's also a searchable library of more than 1,400 real logos for studying design patterns. Once you pick a direction, it can build the icon set and brand guidelines.

## shipvideo

[7:22](https://www.youtube.com/watch?v=qb3ip0NzJKo&t=442)

- https://github.com/diggerhq/shipvideo

Ship video turns a website URL or a short prompt into a launch video. An AI agent writes the animation as a single HTML page, checks how it looks at different moments, then renders each frame in a headless browser and encodes an MP4 with ffmpeg. The useful twist is that the video comes from editable web code, so its text, colors, and motion have a clear source.

## tidewater

[7:46](https://www.youtube.com/watch?v=qb3ip0NzJKo&t=466)

- https://github.com/dgreenheck/tidewater

Tidewater is a browser fishing game built around a tropical island you can explore on foot, underwater, or by boat. Fish bite in different places and at different times, and you have to manage line tension to land them. Sell your catch, upgrade your gear, and head farther offshore. Its ocean and sky run on a custom web GPU engine, so you'll need a capable browser and GPU.

## YuE2-Studio

[8:10](https://www.youtube.com/watch?v=qb3ip0NzJKo&t=490)

- https://github.com/timoncool/YuE2-Studio

UE2 Studio generates full songs with vocals on your own Windows PC. Give it a style and lyrics, and UE2 writes a melody and chords as sheet music before performing the track. You can edit that score, then render the same composition with a different sound. It runs on UA2.cpp, CPP and the author reports a 338 song in about 46 seconds on an RTX 4090.

## rooms

[8:35](https://www.youtube.com/watch?v=qb3ip0NzJKo&t=515)

- https://github.com/saragordic/rooms

Rooms turns each project on your Mac into a saved set of windows and a layout. Press option space, type a room name, and its windows come back in place while everything else hides. It can adjust the layout for your laptop or an external monitor, and you can save your own arrangement. The windows stay open, and your room data stays on your Mac.

## jevry

[8:57](https://www.youtube.com/watch?v=qb3ip0NzJKo&t=537)

- https://github.com/michaelswissa/jevry

Jevy is a desktop browser agent that plans with a language model and picks each action with Typesafe's Jev. It observes the page, turns the real controls on it into a list of choices and Jev picks one, so it never makes up a selector or writes its own JavaScript. You can redirect it midtask on a 12 task slice of web arena verified. The author reports 10 passes.

## phantomat

[9:21](https://www.youtube.com/watch?v=qb3ip0NzJKo&t=561)

- https://github.com/kaolti/phantomat

Phantomat is a hyperland plugin that replaces workspaces with one infinite canvas. Every window sits on the same zoomable plane and multiple monitors show neighboring parts of it moving together like one desk. Hit super control G and it zooms out to show everything. Then type part of a window title to fly straight there. It remembers where everything was across restarts.

## product-film-skill

[9:45](https://www.youtube.com/watch?v=qb3ip0NzJKo&t=585)

- https://github.com/Rieranthony/product-film-skill

Product film is a clawed code skill that builds launch videos and landing page loops out of your product's real components with Remotion. It reads your design tokens and logos first, then writes a brand kit and a beat sheet. A Python script maps the beat grid of your track so cuts land on the music. You approve stills and contact sheets before the final render, which comes out as a 240fps master with motion blur. Omnibin puts tens of thousands of Nyx package commands on your path without installing

## omnibin

[10:12](https://www.youtube.com/watch?v=qb3ip0NzJKo&t=612)

- https://github.com/fzakaria/omnibin

them all up front. A virtual file system knows which package provides each command and fetches its files from the Nyx cache only when you use it. You can even call a specific version like an older Python release. That's handy for disposable Linux environments, though the first run of a tool needs a download.

## changelog.earth

[10:38](https://www.youtube.com/watch?v=qb3ip0NzJKo&t=638)

- https://github.com/byalex33/changelog.earth

Changelog.ear Earth presents the news like patch notes for the planet. It gathers reporting, picks a few stories, and turns their headlines into short updates about discoveries, conservation wins, and things still unresolved. Each note keeps the original publisher, date, and source link, so you can check the story behind the joke. It also saves past editions and publishes an RSS feed.

## flux

[11:03](https://www.youtube.com/watch?v=qb3ip0NzJKo&t=663)

- https://github.com/bjarneo/flux

Flux links an Omari desktop with an Android phone over your local network. Once you pair them, you can move files and clipboard text, see phone notifications, control media, and even use the phone as a webcam or microphone. There's a desktop app for everyday use and a CLI for scripts. Pairing shows a verification code on both devices, so you can check the right phone.

## interference-search

[11:28](https://www.youtube.com/watch?v=qb3ip0NzJKo&t=688)

- https://github.com/Badtheorylabs/interference-search

Interference search is a research project that explores reasoning through explicit states. It advances several possible moves at once, merges branches that reach the same state, and uses a small judge to drop dead ends. The approach performed well on the project's countdown arithmetic tests, while gains on code problems were much smaller. The repo includes its code, model weights, raw results, and failed experiments.

## bridgeclip

[11:55](https://www.youtube.com/watch?v=qb3ip0NzJKo&t=715)

- https://github.com/bridge-mind/bridgeclip

Bridge Clip turns long videos you have permission to use into short captioned clips. Drop in a file and it transcribes the speech, picks promising moments, refframes them for vertical or widescreen video and renders wordbyword captions. The final video is cut on your computer with ffmpeg. Transcription and clip selection use your open router account, so audio and transcript data go to that provider.

## omarchy-meeting-recorder

[12:21](https://www.youtube.com/watch?v=qb3ip0NzJKo&t=741)

- https://github.com/jankeesvw/omarchy-meeting-recorder

Omari meeting recorder records your calls without a bot joining them, and the audio never leaves your machine. It captures your mic and the computer's audio as two separate tracks, then transcribes locally with whisper.cpp and labels who said what. Your coding agent adds chapters, and the only thing it sees is the transcript text. You get a waveform player and a transcript you can fix in line.

## ritridata

[12:47](https://www.youtube.com/watch?v=qb3ip0NzJKo&t=767)

- https://github.com/reco-tools/ritridata

Retradata is a Rust command line tool for looking inside disk images without changing them. It reads MBR and GPT partition tables, checks header and entry CRC's, flags overlapping partitions, and identifies files by their signatures. You can also generate blank or deliberately damaged images for tests. Everything prints as JSON, and it runs fully offline.

## HaloBattery

[13:10](https://www.youtube.com/watch?v=qb3ip0NzJKo&t=790)

- https://github.com/HeyOkay/HaloBattery

Halo battery puts the battery level of each wireless peripheral in the Windows system tray, so you can close Synapse. Every device gets its own ring icon that fills clockwise, turns amber when it's low, and breathes green while charging. It talks directly to a Razer Black Shark V2 Pro, a WL mouse Beastex Max, and a Game Seir G7 Pro, and reads Bluetooth batteries from Windows.

## jev-use

[13:34](https://www.youtube.com/watch?v=qb3ip0NzJKo&t=814)

- https://github.com/savka777/jev-use

Jev use lets you speak or type a task and have your Mac carry it out. It reads the current app's accessibility controls, asks Jev to choose the next action, then checks the screen again after acting. That means it can work without sending screenshots. Though your command and visible control details go to type safe, it needs a type-S safe API key and Mac OS accessibility permission.

## OmaPhoto

[13:59](https://www.youtube.com/watch?v=qb3ip0NzJKo&t=839)

- https://github.com/ZacharyZhang-NY/OmaPhoto

Omoto brings compositor's layered image editor to Linux with special attention to Omari. It even follows your desktop theme. You can work with masks, selections, retouching tools, adjustment layers, and offline background removal. It also opens and saves compositors, comp projects, so a layered edit can move between Linux and Mac without being flattened into a single image.

## jevgrep

[14:24](https://www.youtube.com/watch?v=qb3ip0NzJKo&t=864)

- https://github.com/dzhng/jevgrep

Jevp helps coding agents find the right file in an unfamiliar codebase. Ask where is authentication checked and it walks the repository, judges which files matter, then returns source excerpts with line numbers in one response. A companion skill shows agents when to use it. Relevant source content goes to the provider you configure, so check what you're comfortable sending.
