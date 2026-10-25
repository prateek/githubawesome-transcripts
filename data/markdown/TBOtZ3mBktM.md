# 35 Self-Hosted Projects on GitHub: openshorts, Mailflare, Handy, mStream, netwatch, JellyBoxPlayer

[Watch the original video](https://www.youtube.com/watch?v=TBOtZ3mBktM)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Introduction

[0:00](https://www.youtube.com/watch?v=TBOtZ3mBktM&t=0)

Welcome back to GitHub Awesome. Today we're looking at 35 self-hosted projects on GitHub. Let's get into it.

## openshorts

[0:09](https://www.youtube.com/watch?v=TBOtZ3mBktM&t=9)

- https://github.com/mutonby/openshorts

Open Shorts is what you reach for when Opus Clips subscription and descripts limits get old. Turning a long podcast into short form clips used to mean hours of manual picking or paying monthly. Gemini finds 3 to 15 viral moments, reframes them to 916, and writes wordle subtitles itself. It can even generate AI actors and autopublish straight to Tik Tok and YouTube.

## Mailflare

[0:34](https://www.youtube.com/watch?v=TBOtZ3mBktM&t=34)

- https://github.com/hieunc229/mailflare

Mailflare gives you a real inbox on your own domain without handing your mail to Google or Fastmail. It runs as a single Cloudflare worker, so there's no server to manage. Email routing pulls in the mail. D1 stores it. R2 holds the attachments all inside your own Cloudflare account. You get shared mailboxes, search folders, and routing rules. the stuff you'd expect from a real client.

## Handy

[1:00](https://www.youtube.com/watch?v=TBOtZ3mBktM&t=60)

Handy is a push-to talk transcription tool that never leaves your machine. Every dictation app wants a monthly subscription and your audio uploaded to their servers. This one runs Whisper or Parakeet locally, so nothing gets sent anywhere. Hold a hotkey, talk, and the text drops into whatever field you're in on Windows, Mac, or Linux. Parakeet clocks in around five times real time on a mid-range Intel chip, they say.

## mStream

[1:27](https://www.youtube.com/watch?v=TBOtZ3mBktM&t=87)

- https://github.com/IrosTheBeggar/mStream

Mstream is a self-hosted music server that skips the setup headache. Plex feels like overkill just to stream your own flack collection, and most alternatives make you wait out a full scan before you can hit play. This one streams straight off your folder structure, so playback starts before the database is even built. It talks subsonic and DNA, transcodes on the fly.

## netwatch

[1:51](https://www.youtube.com/watch?v=TBOtZ3mBktM&t=111)

- https://github.com/matthart1983/netwatch

Netwatch is what you'd get if HTOP and Wireshark had a baby that also did intrusion detection. It maps every connection back to the process that opened it, decodes TLS, Quick, HTTP, DNS, and SSH, and fingerprints clients through JA4. The egress policy feature learns what each program normally talks to, then flags it the moment it reaches somewhere new. Jellybox is the client Jellyfin shipped.

## JellyBoxPlayer

[2:13](https://www.youtube.com/watch?v=TBOtZ3mBktM&t=133)

- https://github.com/avdept/JellyBoxPlayer

The official app tries to handle video and music at once, and it still feels like a web page wearing a native icon. Jellybox only does audio built native for each platform, so it actually feels at home on Mac, Windows, Linux, iOS, and Android. You get synced lyrics, full offline downloads, and CarPlay and AirPlay support, plus album art that colors the whole interface.

## assemblrr

[2:40](https://www.youtube.com/watch?v=TBOtZ3mBktM&t=160)

- https://github.com/soulis-1256/assemblrr

Assembler wires up your whole self-hosted media stack so you don't have to. Standing up jellyfin, cubator, sonar, radar, and prowler by hand is a full weekend of Docker Compose and forum posts. Assembler connects all eight services automatically, routes your download traffic through a VPN with health checks built in, and applies Trash Guides quality profiles for you.

## OpenArchiver

[3:04](https://www.youtube.com/watch?v=TBOtZ3mBktM&t=184)

- https://github.com/LogicLabs-OU/OpenArchiver

Open Archiver is what you stand up instead of paying a vendor to hold your email compliance archive. Google Vault works fine until you think about what happens if that vendor changes pricing or disappears. This one pulls from IMAP, Google Workspace, Microsoft 365, and old PST files, storing everything as plain EML with encryption at rest. Every message gets hashed so you can prove nothing's been altered. Web SSH turns your browser into an SSH client that never talks to anyone's cloud. You're on

## webssh

[3:31](https://www.youtube.com/watch?v=TBOtZ3mBktM&t=211)

- https://github.com/bifrost0x/webssh

a laptop that isn't yours and just need to check a box in your home lab. This runs entirely on your own server. No hosted control plane, no CDN. You get up to four SSH panes at once. Sessions that survive a dropped connection through T-Max and a dual pane SFTP browser for moving files.

## bookorbit

[3:56](https://www.youtube.com/watch?v=TBOtZ3mBktM&t=236)

- https://github.com/bookorbit/bookorbit

Book Orbit fixes the sync problem. Caliber Web never solved. You highlight something on your Coobo, then open the same book on your phone later, and none of it followed you. This one does three-way sync between your Coobo core reader and its own web reader, so highlights and progress travel with you. It pulls metadata from 14 sources, syncs your reading to Readwise, hard cover.

## useagent

[4:20](https://www.youtube.com/watch?v=TBOtZ3mBktM&t=260)

- https://github.com/useagenthq/useagent

Use agent turns whatever coding agent you're already using into an actual co-worker instead of a chat window. Cloud code, codeex, open code, they all lock you into their own interface and none make it easy to trust with real company credentials. Use agent runs the agent in an isolated sandbox and keeps credentials at the gateway. So they never touch that sandbox.

## kept

[4:44](https://www.youtube.com/watch?v=TBOtZ3mBktM&t=284)

- https://github.com/ericerkz/kept

Kept is what you get when someone actually tries to copy Google Keep instead of building another notion clone. Most self-hosted note apps are either bloated with features nobody uses or ugly enough that you give up and go back to Google. This one keeps the same sticky note feel, checklists, labels, and drawings. And it imports notes straight from a Google Takeout export.

## homelable

[5:08](https://www.youtube.com/watch?v=TBOtZ3mBktM&t=308)

- https://github.com/Pouzor/homelable

Home label is the network diagram that actually knows what's running. Draw your home lab in draw.io once and by the next time you touch it, half the devices have moved and the diagram's lying to you. This one scans your network with end mapap and builds the map itself. Tracks MAC addresses and pulls devices straight from Proxmox, ZigGB, MQTT, and Z-Wave.

## pictaria-server

[5:31](https://www.youtube.com/watch?v=TBOtZ3mBktM&t=331)

- https://github.com/pictaria-ai/pictaria-server

Pictaria is the AI layer image doesn't have without sending a single photo to Google. Image nails the self-hosted photo library part, but you're still scrolling through 50 nearly identical shots trying to pick the keeper. Pictaria stacks those duplicates, scores them by frameworthiness, and lets you override every call. Human decisions always win over the AI.

## renewlet

[5:55](https://www.youtube.com/watch?v=TBOtZ3mBktM&t=355)

- https://github.com/zhiyingzzhou/renewlet

Renewit tracks every subscription you forgot you had in 20 to 30 megabytes of memory. Most subscription trackers are either a spreadsheet you stop after a month or a SAS charging you to track your subscriptions. This one screenshots a bill and reads the price and renewal date off it automatically. It sends reminders through Telegram, Discord, and email.

## MindSpark

[6:20](https://www.youtube.com/watch?v=TBOtZ3mBktM&t=380)

- https://github.com/prasadpatil25/MindSpark

MindSpark treats Markdown as a real format, not a one-way export button. Most mind mapping tools export to markdown once, and the file goes stale the moment you edit the map. This one keeps them synced in both directions, live nodes carry a real formula engine, sum, average, if, so they actually calculate instead of holding text. Citations autofill from crossre by DOI.

## tether

[6:44](https://www.youtube.com/watch?v=TBOtZ3mBktM&t=404)

- https://github.com/zackb/tether

Tether brings the Apple continuity stuff back after you leave the Mac for Linux. Switch to Linux and suddenly your iPhone stops talking to your laptop. No shared clipboard, no drag and drop transfer, no texting from your desktop. Tether rebuilds that link specifically for Wayand with an iOS companion app. Clipboard sync over Wi-Fi and SMS and iMessage and beta over Bluetooth.

## dashlit

[7:08](https://www.youtube.com/watch?v=TBOtZ3mBktM&t=428)

- https://github.com/codewec/dashlit

Dashlit is a start page you build without ever opening a config file. homepage and most of the self-hosted dashboard options are great until you need to add one bookmark and remember the exact YAML indentation. Dashlit skips that. Everything's drag and drop through the built-in editor. It's one Docker container sits behind your own reverse proxy.

## tapmap

[7:30](https://www.youtube.com/watch?v=TBOtZ3mBktM&t=450)

- https://github.com/olalie/tapmap

Tap Map shows you exactly where your computer's been talking behind your back. Every app on your machine makes connections you never see, most of them to servers you couldn't name if asked. Tapmap watches those connections live and drops them on an actual world map as they happen, geolocced. It keeps a rolling 30-day history, so a new provider showing up gets noticed.

## rootprint

[7:57](https://www.youtube.com/watch?v=TBOtZ3mBktM&t=477)

- https://github.com/rootprint/rootprint

Root is what you reach for right before your data dog bill makes you rethink logging entirely. Most observability platforms charge by ingest volume, so the more you log, the more it costs to find anything. Rootprint indexes straight onto object storage S3, R2, Minio or a local disc, so storage stays cheap. You get a real log explorer with severity filters and saved views. Trace waterfalls with per span timing.

## repowise

[8:24](https://www.youtube.com/watch?v=TBOtZ3mBktM&t=504)

- https://github.com/repowise-dev/repowise

Repowise indexes your repo once so your AI agent stops rediscovering it every session. Clawed code, cursor, whatever you're running, they all burn tool calls, relearning your codebase's shape before they can actually help. Repo wise builds one local index covering dependencies, git history, and code health and hands it to the agent through MCP.

## meelo

[8:46](https://www.youtube.com/watch?v=TBOtZ3mBktM&t=526)

- https://github.com/Arthi-chaud/meelo

Milo is built for the person whose music folder has three versions of the same album, and Plex just can't handle it. Feed Plex, a deluxe edition alongside the original, and you get duplicate songs everywhere, plus your music videos filed like their TV shows. Milo actually understands album releases, so you pick which version shows by default without losing the rest. And music videos count as real tracks on the album page.

## mtl-explorer

[9:14](https://www.youtube.com/watch?v=TBOtZ3mBktM&t=554)

- https://github.com/mindalyze-com/mtl-explorer

MTL Explorer is where your GPS history goes once you stop trusting Garmin Connect to keep it forever. Load a few hundred activities into most tracking apps, and the map starts choking. This one's built to put thousands of tracks on a single map without falling over. It imports Garmin, GPX, and FIT files straight off your device, computes the usual activity stats, and does a cinematic 3D flyover replay of a route.

## Prismedia

[9:41](https://www.youtube.com/watch?v=TBOtZ3mBktM&t=581)

- https://github.com/pauljoda/Prismedia

Prisia is the one media server instead of the five you're currently running. You've probably got Jellyfin for movies, something else for books, coma for comics, and a separate app for music, each with its own login and its own bugs. Pris Media puts movies, series, music, audio books, comics, and photo galleries behind one interface with native readers for EPUB and PDF, proper resume, and subtitles on video. Gyroid Vault is what your STL folder needed

## GyroidVault

[10:08](https://www.youtube.com/watch?v=TBOtZ3mBktM&t=608)

- https://github.com/TeeCodeDev/GyroidVault

about 5,000 files ago. Right now, it's probably a folder called models with files named final, final 2, and actually final. And you open a slicer just to see what's inside one. Gyroid Vault gives you a real 3D viewer in the browser, X-ray mode, multi-art assemblies in different colors, and exact measurements before you slice.

## geolens

[10:32](https://www.youtube.com/watch?v=TBOtZ3mBktM&t=632)

- https://github.com/geolens-io/geolens

Geolens is the shared GIS catalog your team's shape files have been begging for. Right now, everyone's spatial data probably lives scattered across a shared drive with zero search. And finding last year's survey means asking whoever made it. GLens in ingests shape files, geotiffs, geo packages, and CSVs into PostGS, gives you fuzzy and semantic search, and still speaks the standards your team already uses.

## issued

[10:58](https://www.youtube.com/watch?v=TBOtZ3mBktM&t=658)

Issued reads your comics exactly where they already sit. No reorganizing required. Most comic servers want a specific folder structure before they'll even scan. So, step one becomes moving thousands of files around. issue just points at your existing folders and picks up CBZ, CBR, CB7, and PDF automatically, thumbnails, and all. It tracks which series are active, so you know when a new issue lands or a gap opens up.

## vaultisse

[11:26](https://www.youtube.com/watch?v=TBOtZ3mBktM&t=686)

- https://github.com/AlbertAmat/vaultisse

Vaultist tracks physical books the way a library needs without the enterprise software built for a system with 50 branches. You lend someone a book and there's no record beyond your memory. or you're running Koha for a shelf of 200 books it was never built for. Vultis scans an ISBN pulls metadata from Google books with open library and library thing as backups.

## altero

[11:51](https://www.youtube.com/watch?v=TBOtZ3mBktM&t=711)

- https://github.com/eseifert/altero

Alterero self-hosts your actual Zotterero library, not just the file attachments web gives you. Zotterero's own self-hosting option only covers file storage. Your metadata, notes, and group libraries still live on Zotterero.org. Alterero runs a full sync server that talks to the unmodified Zotterero desktop client. No patches and syncs everything, libraries, groups, notes, annotations.

## dynacat-dashboard

[12:14](https://www.youtube.com/watch?v=TBOtZ3mBktM&t=734)

- https://github.com/ThunderCls/dynacat-dashboard

Dinoat is the home lab dashboard where one dead widget doesn't take the whole page down with it. Most of these dashboards, one service goes offline and half the page just breaks. Dinoat's widgets fail independently, so your CPU graph still works even if Jellyfin's down. It auto discovers your Docker containers and groups them by compos project. No manual config needed.

## nethera

[12:38](https://www.youtube.com/watch?v=TBOtZ3mBktM&t=758)

- https://github.com/Nethera-io/nethera

Nethera skips the part where you port forward, set up DDNS, and configure a reverse proxy just to share one self-hosted app. You already wrote a Docker Compose file, so it just extends that file instead of inventing a new deployment format. Install the CLI on your laptop, the agent on the machine running the containers. Run ne deploy and you get a real public HTTPS URL. No router touched. Tinta doesn't sleep

## tinta

[13:03](https://www.youtube.com/watch?v=TBOtZ3mBktM&t=783)

- https://github.com/c0de111/tinta

between updates. It actually shuts off completely. Every other e-paper dashboard claims great battery life and you're still charging it every couple weeks because deep sleep still draws power. Tinta wakes on a real-time clock, grabs data over Wi-Fi, updates the display, and powers down entirely. Zero standby drain. The maintainer's own office unit ran 393 days and over 5,000 wake cycles on three AAA batteries.

## Hatchdoor

[13:32](https://www.youtube.com/watch?v=TBOtZ3mBktM&t=812)

- https://github.com/BatterWorks/Hatchdoor

Hatchd gives your notes vault two front doors that both lead to the same room. You want Claude to read and edit your notes, so you point it at a folder of markdown files and hope for the best. No search, no safety rails. Hatchdor runs one vault with a real web UI, wiki links, back links, a knowledge graph, and an MCP endpoint where an agent gets the exact same read, search, and edit access under the same rules.

## logdeck

[13:59](https://www.youtube.com/watch?v=TBOtZ3mBktM&t=839)

- https://github.com/AmoabaKelvin/logdeck

Log fixes the thing that's mildly infuriating about Docker logs. The second you rebuild the container, that history's gone. This one persists every log into SQLite, so it survives restarts and rebuilds with real full text search and level filters instead of scrolling a terminal. It manages Docker and Podman 2. Start, stop, restart, edit, end varss without recreating anything. Even SSH into remote hosts from one interface.

## Deft

[14:27](https://www.youtube.com/watch?v=TBOtZ3mBktM&t=867)

- https://github.com/Maneek21/Deft

Deft is Slack and Asauna in one app except the AI agent can actually query the database instead of just searching your messages. Most Workspace AI features bolt a chatbot onto search and call it context. Deft's agent has direct SQL access to your conversations and tasks, so it can summarize a thread or create a task from plain language with an approval gate before anything real happens.
