# 30 Self-Hosted Projects on GitHub: wacrm, halcyon-video, wrtag, Codeman, romm, wger, homelab, clay

[Watch the original video](https://www.youtube.com/watch?v=KH_B-elfONE)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Introduction

[0:00](https://www.youtube.com/watch?v=KH_B-elfONE&t=0)

Welcome back to GitHub awesome. Today we're looking at 30 self-hosted projects on GitHub. Let's get into it.

## wacrm

[0:09](https://www.youtube.com/watch?v=KH_B-elfONE&t=9)

- https://github.com/ArnasDon/wacrm

Way CRM is a WhatsApp CRM you fork rather than subscribe to shared inbox contacts canban pipelines and broadcasts on Nex.js and superbase. It runs on Meta's official business API with approved templates, not an unofficial web client, which is the usual way these get a number banned. The AI reply assistant takes your own open AI or anthropic key and answers from a knowledge base you load. Houseian video

## halcyon-video

[0:34](https://www.youtube.com/watch?v=KH_B-elfONE&t=34)

- https://github.com/halcyon-video/halcyon-video

rebuilds your jellyfin or Plex library as a walkable 1990s rental store rather than another grid of posters. It builds the floor procedurally. Libraries become aisles. Genres become signposted sections. Duplicate quality versions stack behind the face copy. And the worst rated titles end up in the bargain bin. Era, lighting, and floor plan are independent settings.

## wrtag

[1:00](https://www.youtube.com/watch?v=KH_B-elfONE&t=60)

- https://github.com/sentriz/wrtag

Art tag does what Beats and Picard do, tagging and filing music from music brains, but as a Unix style suite of small tools in Go rather than one program. Your library layout is a path template you write. So rettagging after you change that template is just running the move command again. A sync subcomand rescans the whole library for music brains changes. Sync is non-interactive and destructive if you point it at unmanaged files.

## talivia

[1:28](https://www.youtube.com/watch?v=KH_B-elfONE&t=88)

- https://github.com/talivia-group/talivia

TIVIA is a self-hosted analytics tool that ties visits to revenue so a traffic source is reported alongside the money it produced rather than just sessions. It reads subscription life cycle refunds and disputes from Stripe, Lemon Squeezy, Polar or Dodo and keeps first and last touch against them. Session replay is optional per website.

## reactive-resume

[1:51](https://www.youtube.com/watch?v=KH_B-elfONE&t=111)

- https://github.com/amruthpillai/reactive-resume

Reactive RSé gives you a live réé editor without locking your career data into a proprietary service. You can rearrange sections, customize templates, import JSON RSé files, and export to PDF, JSON or DOCX. PDF generation now happens in the browser and the entire app can run on your own server with Poster SQL. Basic editing needs no account, but optional AI features still depend on whichever model provider you configure.

## OpenArchiver

[2:19](https://www.youtube.com/watch?v=KH_B-elfONE&t=139)

- https://github.com/LogicLabs-OU/OpenArchiver

Open Archiver gives organizations a self-hosted place to retain and search email from Google Workspace, Microsoft 365, IMAP accounts, and common mailbox exports. Messages stay in standard EML files with compression, dduplication, encryption at rest, and hashes that flag later changes. Full text indexing covers messages and supported attachments, while storage can remain local or move to S3 compatible infrastructure.

## Codeman

[2:47](https://www.youtube.com/watch?v=KH_B-elfONE&t=167)

- https://github.com/Ark0N/Codeman

Codeman puts multiple coding agent CLIs behind one self-hosted browser dashboard with each session running inside T-Mux so work survives disconnects and restarts. You can watch terminals and background agents live, send prompts from a phone, schedule jobs, and resume long runs after an agent becomes idle or a usage window legitimately resets.

## Super Productivity

[3:09](https://www.youtube.com/watch?v=KH_B-elfONE&t=189)

- https://github.com/super-productivity/super-productivity

Super productivity combines a task list with actual day planning. So estimates, time boxes, timers and completed work stay in one place. It can pull assigned issues from Jira, GitHub, GitLab, linear and other trackers. Then keep personal planning details local and create work logs. No account is required. Crossdevice sync is optional through webdav, Dropbox, or the project's endtoend encrypted superersync service.

## TaxHacker

[3:36](https://www.youtube.com/watch?v=KH_B-elfONE&t=216)

- https://github.com/vas3k/TaxHacker

Tax Hacker turns a pile of receipt photos and invoice PDFs into a structured table. dates, merchants amounts, line items extracted by an LLM you choose. Currency conversion uses the historical rate from the transaction date across 170 currencies and 14 cryptocurrencies. You can write your own extraction prompts, including the system prompt.

## romm

[3:59](https://www.youtube.com/watch?v=KH_B-elfONE&t=239)

- https://github.com/rommapp/romm

ROM is a self-hosted library manager for game files you already own, closer to Jellyfin than to a front end like ESD. It scans your folders, pulls metadata for over 400 platforms from IGDB, Screen Scraper, and MOI games, and parses tags out of file names. EmulatorJS plays supported titles in the browser, and retro achievements progress shows on the game page.

## karakeep

[4:23](https://www.youtube.com/watch?v=KH_B-elfONE&t=263)

- https://github.com/karakeep-app/karakeep

Carakeep saves the page itself rather than just a link, so a dead URL still has readable content behind it. Monolith archives the full page. OCR pulls text out of images and PDFs, and Miley search indexes all of it for full text and semantic search. Tagging and summarization run through an LLM, and Alama works if you'd rather keep that local. Browser extensions, mobile apps, and RSS ingestion on top.

## wger

[4:49](https://www.youtube.com/watch?v=KH_B-elfONE&t=289)

- https://github.com/wger-project/wger

WGR is a self-hosted fitness manager that keeps workouts, nutrition, weight measurements, and progress photos under one roof. You can build routines with automatic weight progression, log meals against the open foodax database, and use its REST API for your own integrations. Mobile and desktop clients connect to the same system. Treat its exercise and nutrition data as tracking aids, though, not personalized medical or coaching advice.

## safebucket

[5:18](https://www.youtube.com/watch?v=KH_B-elfONE&t=318)

- https://github.com/safebucket/safebucket

Safebucket is a self-hosted file sharing platform where the bites never touch the application server. It hands out pre-signed URLs, so uploads and downloads go straight between the browser and your object storage. And the Go backend only handles O and metadata. Storage, database, cache, events, and notifier are each swappable. Share links take a password, a download cap, and an expiry.

## homelab

[5:43](https://www.youtube.com/watch?v=KH_B-elfONE&t=343)

Eden is one engineer's home lab published as its actual source, a Talos Kubernetes cluster on Proxmox provisioned with Terraform with Argo CD reconciling every workload from the repo. Psyllium handles networking, authentic does SSO, and Prometheus, Grafana, Loki, and Tempo cover metrics, logs, and traces. The architecture diagrams are generated from D2 files by a GitHub action so they can't drift from the config.

## drydock

[6:10](https://www.youtube.com/watch?v=KH_B-elfONE&t=370)

- https://github.com/CodesWhat/drydock

Dryd do watches your containers for image updates and notifies you. Applying the update is optin which is the split from watchtowwer. It reads 23 registries and fans out to 20 notification and action providers. It expects a socket proxy instead of the raw Docker socket. Outbound web hooks resolve through a guarded DNS lookup that blocks cloud metadata addresses and an instance with no O configured fails closed.

## inkstone

[6:38](https://www.youtube.com/watch?v=KH_B-elfONE&t=398)

- https://github.com/shuaiplus/inkstone

Inkstone is a self-hosted markdown notebook built on Cloudflare workers. Your notes stay readable as plain text while the app adds folders, back links, version history, offline editing, real-time sync, and full text search. Optional workers AI enables private semantic search and its scoped MCP interface can read or update notes through revocable keys.

## reconya

[7:01](https://www.youtube.com/watch?v=KH_B-elfONE&t=421)

- https://github.com/Dyneteq/reconya

Recona maps devices on a network you administer in go with a dashboard instead of end mapap output you have to read ICMP sweeps TCP probes and ARP find hosts then background workers pull MAC vendors host names OS fingerprints and open ports and raise alerts when something new appears. The backend makes zero outbound calls by default.

## AdventureLog

[7:23](https://www.youtube.com/watch?v=KH_B-elfONE&t=443)

- https://github.com/seanmorley15/AdventureLog

Adventure Log is a self-hosted travel journal and trip planner that keeps your map, memories, and future itineraries together. You can pin locations with photos and repeat visits, build multi-day plans with lodging and checklists, track countries and regions, and attach GPX trails. Trips can stay private, use public links, or be edited collaboratively.

## NoteDiscovery

[7:45](https://www.youtube.com/watch?v=KH_B-elfONE&t=465)

- https://github.com/gamosoft/NoteDiscovery

Note Discovery is a self-hosted note app that serves every browser library from its own container. no CDN, so it runs on an airgapped network where most self-hosted note apps fail. Notes are plain markdown files and folders with a graph view over the links between them and an inapp drawing editor that saves PGs next to the note. A built-in MCP server lets Claude or cursor search and edit the same files.

## expensave

[8:12](https://www.youtube.com/watch?v=KH_B-elfONE&t=492)

- https://github.com/algirdasc/expensave

Expensive is a self-hosted expense tracker designed for households rather than individual spreadsheets. Family members can share separate calendars, record recurring costs, review spending and income reports, and install the interface as a mobile PWA. Bank data arrives through exported OFX, QFX, XML, or CSV files, so there's no live banking connection to maintain.

## viofosync

[8:36](https://www.youtube.com/watch?v=KH_B-elfONE&t=516)

- https://github.com/RobXYZ/viofosync

VOFSYNC automatically copies footage from a VOPO dash cam when the car joins your home Wi-Fi. The self-hosted dashboard organizes clips into journeys, fetches GPS traces before full videos arrive, and lets you trim footage, switch camera angles, create pictureand picture exports, and manage retention. It needs an always on host, plus compatible station mode firmware.

## clay

[9:00](https://www.youtube.com/watch?v=KH_B-elfONE&t=540)

- https://github.com/chadbyte/clay

Clay turns Cloud Code and Codeex into a shared browser-based workspace for teams. One self-hosted Damon can run sessions across multiple repositories, isolate parallel work trees, surface approvals on mobile, and keep persistent agent teammates with their own markdown memory. Sessions and decisions stay as JSON L and markdown on your disk, though model requests still go to the selected provider.

## telecast

[9:26](https://www.youtube.com/watch?v=KH_B-elfONE&t=566)

- https://github.com/andatoshiki/telecast

Telecast turns your Telegram channel into a static microblog you can host almost anywhere. During each build, it pulls posts and media into local files, creates a Luner search index, and generates RSS, social previews, and PWA assets. The result is a responsive Twitter style archive with no database or runtime Telegram dependency. Mirror only content you own or have permission to republish.

## opengeni

[9:51](https://www.youtube.com/watch?v=KH_B-elfONE&t=591)

- https://github.com/Cloudgeni-ai/opengeni

Open Genie is a runtime for longunning agents rather than an agent itself. Every event lands in a Postgress log. So a browser reload or an audit replays the same session history. Sessions can target a machine you enroll which dials out only and keeps its own git credentials. No platform token pushed to it. Agent memories are proposed not written. A human approves before one becomes retrieval context.

## Magic Cloud

[10:17](https://www.youtube.com/watch?v=KH_B-elfONE&t=617)

- https://github.com/polterguy/magic

Magic combines a self-hosted app builder with the backend it generates. point its wizard at SQLite, Postgress SQL, MySQL, Mariab or SQL Server and it creates authenticated REST endpoints that you can extend in plain English. Those endpoints can also become MCP tools for coding agents while Hyper Lambda restricts which functions generated code may call.

## nodyx

[10:40](https://www.youtube.com/watch?v=KH_B-elfONE&t=640)

- https://github.com/Pokled/nodyx

Nix puts a forum, real-time chat, voice rooms, a collaborative canvas, and a public homepage into one self-hosted community server. Its WebRTC layer handles peer-to-peer voice, while a Rust relay can publish a home server without opening inbound ports or buying a domain. Posts stay searchable, and admins get moderation, plus a widget system.

## libredesk

[11:03](https://www.youtube.com/watch?v=KH_B-elfONE&t=663)

- https://github.com/abhinavxd/libredesk

Libes is a self-hosted support desk that puts website, chat, and email into one shared inbox. Teams can route conversations with rules, assign work by capacity, track SLAs's, and control access with custom roles. It also offers a knowledgebased assistant that can answer chats or draft replies before handing off to a person. The application ships as one go binary, but production still needs Postgraq and Reddus alongside it.

## hqbase

[11:31](https://www.youtube.com/watch?v=KH_B-elfONE&t=691)

- https://github.com/HQBase/hqbase

HQbase is a shared email workspace that runs inside your own Cloudflare account, keeping mail and credentials on infrastructure you control. Teams can manage shared inboxes with access controls, multiple domains, collaborative drafts, and an audit history, while operators get documented installation, update, backup, and recovery workflows. It also exposes an OOTH protected MCP server for agent access.

## warpgate

[11:57](https://www.youtube.com/watch?v=KH_B-elfONE&t=717)

- https://github.com/warp-tech/warpgate

Warpgate is a self-hosted bastion that puts precise access controls in front of SSH, web apps, Kubernetes, databases, RDP, and VNC without forcing users onto a custom client. It authenticates the user itself, opens its own connection to the target and joins the two, so your SSH command and native clients keep working unchanged. Every session is recorded and replayable from the admin UI with command level audit.

## nutritrace

[12:23](https://www.youtube.com/watch?v=KH_B-elfONE&t=743)

- https://github.com/TraceApps/nutritrace

Neutrrace is a self-hosted nutrition tracker that keeps food logs, recipes, goals, and wellness data on your own hardware. It runs in one docker container, includes a browser PWA and Android app, and can pull food data from open food facts or USDA. Optional integrations cover fitness services and AI assisted logging. Its calorie estimates, wellness scores, and AI suggestions areformational, not medical or dietary advice. \[music\]
