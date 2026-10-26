# 35 Self-hosted Github Projects That Will Kill Your Monthly Subscriptions

[Watch the original video](https://www.youtube.com/watch?v=o1DsUPdSj1s)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Introduction

[0:00](https://www.youtube.com/watch?v=o1DsUPdSj1s&t=0)

Welcome back to GitHub awesome. Today we're looking at 35 self self-hosted projects on GitHub. Let's get into it.

## withoutBG

[0:09](https://www.youtube.com/watch?v=o1DsUPdSj1s&t=9)

- https://github.com/withoutbg/withoutbg-python

Without BG removes image backgrounds in Python running locally on CPU with no GPU and no API key. One call downloads a 495 megabyte model once, then every image after that is free and offline. Two things sit behind the open label, though. The SDK is Apache 2.0, zero, but the weights carry Meta's Dinov3 license on the backbone, and the company sells a cloud tier, it says handles hair and fur better than the local one.

## openship

[0:37](https://www.youtube.com/watch?v=o1DsUPdSj1s&t=37)

- https://github.com/oblien/openship

Open Ship is a self-hosted deployment platform that takes a repository from build to routing and TLS without handing the control plane to a managed host. It detects common stacks, snapshot resolve configuration for repeatable rollbacks and can redeploy from GitHub web hooks. You can drive the same backend from its desktop app, dashboard, or CLI.

## harper

[1:00](https://www.youtube.com/watch?v=o1DsUPdSj1s&t=60)

- https://github.com/automattic/harper

Harper is an offline English grammar checker that keeps your drafts on your machine instead of sending every sentence to a server. Its Rust core is small enough to run through web assembly, and integrations cover editors including VS Code, Neoim, Zed, and Emacs. There's also a language server and JavaScript package for building it into your own workflow.

## Agentic Inbox

[1:23](https://www.youtube.com/watch?v=o1DsUPdSj1s&t=83)

- https://github.com/cloudflare/agentic-inbox

Agentic inbox is Cloudflare's reference email client. Email routing delivers. Each mailbox gets its own durable object with SQLite. Attachments land in R2 and a worker's AI agent drafts replies you confirm before sending. Self-hosted means your Cloudflare account, not your hardware. The caveat the readme states plainly is that anyone passing your access policy reaches every mailbox and the MCP endpoint lets external tools do the same.

## sockudo

[1:52](https://www.youtube.com/watch?v=o1DsUPdSj1s&t=112)

- https://github.com/sockudo/sockudo

Sudo is a self-hosted Rust Realtime server that accepts pusher compatible clients, then adds a second protocol for stronger delivery control. Beyond that, it adds its own protocol version with durable history, message recovery after a dropped connection and mutable messages you can edit or delete after sending. Fan Out runs through Reddus, NATS, Kafka, or five others.

## openGym

[2:16](https://www.youtube.com/watch?v=o1DsUPdSj1s&t=136)

- https://github.com/DuarteSantos8/openGym

Open Gym is a self-hosted workout tracker that keeps routines, training logs, and body weight history on your own server. It guides today's session, prefills weights from your previous workout, supports supersets and timed exercises, and tracks progress with charts and personal records. Pass keys handle signin across devices, while a standalone Android build can stay entirely on one phone.

## openreply

[2:41](https://www.youtube.com/watch?v=o1DsUPdSj1s&t=161)

- https://github.com/diwenne/openreply

Open Reply is a self-hosted comment to DM tool for Instagram. Someone comments your keyword on a real and Meta's official private reply API sends them the link. That's the feature Many Chat charges monthly for. It's a fork of Anish Raj's Instagram comment to DM with the billing layer stripped out. No scraping, no browser automation, no password, and it cues under Meta's 750 per hour cap.

## Mindwtr

[3:07](https://www.youtube.com/watch?v=o1DsUPdSj1s&t=187)

- https://github.com/dongdongbh/Mindwtr

MindTutor is a local first task app built around the getting things done loop rather than a generic checklist. Capture ideas from a desktop hotkey or phone share sheet. Sort them through a guided inbox. Then use focus and weekly review views to surface what matters next. It runs on desktop, mobile, and web with optional sync through your chosen provider.

## netmon

[3:30](https://www.youtube.com/watch?v=o1DsUPdSj1s&t=210)

- https://github.com/Role1776/netmon

Netmon is a self-hosted network watcher that combines recurring speed tests with device counts from your own LAN. Every run stores download, upload, latency, and active host totals in SQLite. Every four hours, it builds a dayong graph and sends a sarcastic summary to Telegram or Discord. Setup needs a tightly scoped passwordless pseudo rule for end mapap and its single stream results won't match browser speed tests.

## stenoai

[3:56](https://www.youtube.com/watch?v=o1DsUPdSj1s&t=236)

- https://github.com/ruzin/stenoai

Steno is a desktop meeting notepad that records, transcribes, summarizes, and searches conversations using models on your own machine. It can capture microphone and system audio, label you versus other speakers, and save transcripts and summaries as editable markdown. You can query one meeting or your whole library without uploading it by default.

## bento

[4:19](https://www.youtube.com/watch?v=o1DsUPdSj1s&t=259)

- https://github.com/nyblnet/bento

Bento turns an entire presentation app into one HTML file. Your deck, editor, viewer, fonts, charts, and animations all travel together with no account or installer. It can save itself, run fully offline, and even support encrypted live collaboration through a relay that only sees cipher text. The clever part is the plain JSON document block, which also lets coding assistants edit slides directly, though mobile remains focused on viewing and presenting.

## dns-blocklists

[4:49](https://www.youtube.com/watch?v=o1DsUPdSj1s&t=289)

- https://github.com/hagezi/dns-blocklists

Hegazy DNS block lists gives your network one maintained filter instead of a pile of mismatched lists. It bundles ads, trackers, fishing, malware, scams, and cryptojacking domains, then ships them in formats for Pi Hole, Adguard, DNS Mask, RPZ, and more. You can choose anything from a relaxed light list to an aggressive ultimate tier. That range is useful, but stricter lists can break sites, so keep an allow list handy.

## collective-intelligence

[5:16](https://www.youtube.com/watch?v=o1DsUPdSj1s&t=316)

- https://github.com/ailinone/collective-intelligence

Alen is an OpenAI compatible gateway that answers a request with several models instead of one, arbitrates between them and returns the reasoning trail as metadata. Which strategy ran, which models, what each sub call cost, where they disagreed. Swap your base URL and it works. The headline claim that a coordinated pool of cheaper models beat every Frontier flagship on accuracy is the vendor's own 38 task run.

## openobserve

[5:43](https://www.youtube.com/watch?v=o1DsUPdSj1s&t=343)

- https://github.com/openobserve/openobserve

Open Observe puts logs, metrics, traces, dashboards, and front-end monitoring behind one self-hosted platform instead of stitching together half an observability stack. It ships as a single Rust binary, accepts open telemetry data, and lets you query with SQL or PromQL. Its S3 native parquet design is where the maintainers claim up to 140 times lower storage costs than Elastic Search. Devonel is a self-hosted catalog for the physical media that somehow keeps multiplying on your

## DVinyl

[6:09](https://www.youtube.com/watch?v=o1DsUPdSj1s&t=369)

- https://github.com/Kyonew/DVinyl

shelves. Scan a barcode or import an existing discogs library and it pulls cover art, metadata, and music value estimates. Plugins handle records, books, films, games, and Lego while custom types cover stranger collections. Multiple libraries, roles, and optional OIDC make it sharable, too. Though several metadata sources require their own API keys.

## Dockhand

[6:37](https://www.youtube.com/watch?v=o1DsUPdSj1s&t=397)

- https://github.com/Finsys/dockhand

Dochand gives Docker a clean control panel for containers, compose stacks, and multiple hosts. You can edit compose files visually, stream logs beside an interactive shell, and deploy stacks from git with web hooks and automatic syncing. It also maps container networks and scans images with Trivy or Grip. Personal and internal business use are free, but running Dockhand as a commercial hosted service isn't allowed before 2029.

## CrawlSEO

[7:06](https://www.youtube.com/watch?v=o1DsUPdSj1s&t=426)

- https://github.com/crawlseo/crawlseo

Crawco combines Google search console, a site crawler, and core web vitals in one self-hosted dashboard. It tracks keyword changes, audits up to 2,000 pages for 16 issue types, and flags problems like traffic drops, new 404s, or content decay. There's also an MCP server, so coding assistants can query the data or start crawls. Setup still needs Google OOTH, an optional keyword or backlink research requires a data for SEO key.

## ShelfDroid

[7:35](https://www.youtube.com/watch?v=o1DsUPdSj1s&t=455)

- https://github.com/100nandoo/shelfdroid

Shelf Droid is an Android client for your self-hosted audiobook shelf server with more admin access than a basic player. It streams audiobooks and podcasts, syncs listening progress, and downloads episodes for offline playback. Chapters, bookmarks, sleep timers, and speed controls cover the listening side, while permitted accounts can manage users, API keys, backups, logs, and server settings.

## parker

[8:00](https://www.youtube.com/watch?v=o1DsUPdSj1s&t=480)

- https://github.com/parker-server/parker

Parker is a self-hosted server for comic files you already have, and it treats your folders as the source of truth. It reads comic info metadata directly from CBZ and CBR, then organizes everything into series, volumes, collections, and smart lists. The browser reader supports manga direction, double page spreads, bookmarks, and long view.

## hopp

[8:23](https://www.youtube.com/watch?v=o1DsUPdSj1s&t=503)

- https://github.com/gethopp/hopp

Hop is a remote pair programming app built around low latency screen sharing with a backend you can host yourself. It uses a native Tori and Rust desktop client with WebRTC through LiveKit, supports one-click pairing, and lets up to 10 people join a mob programming room. The team claims sub 100 millisecond latency, which will still depend on your network.

## helicalinsight

[8:47](https://www.youtube.com/watch?v=o1DsUPdSj1s&t=527)

- https://github.com/helicalinsight/helicalinsight

Hel Insight is a self-hosted BI platform that combines dashboards, printable reports, and embedded analytics in one stack. You can connect databases through JDBC, build drill down visualizations, schedule personalized reports, and export them to formats like PDF, Excel, or Word. It also offers natural language analysis with your own language model.

## compose-lint

[9:10](https://www.youtube.com/watch?v=o1DsUPdSj1s&t=550)

Compose lint checks docker compose files for security mistakes before they land in production. Its rules catch privileged containers, exposed host ports, Docker socket mounts, unpinned images, and credentials written directly into environment values. You can run it locally or in CI, export SAR for code scanning annotations, and preview safe mechanical fixes as a dryr run diff.

## PeaNUT

[9:35](https://www.youtube.com/watch?v=o1DsUPdSj1s&t=575)

- https://github.com/Brandawg93/PeaNUT

Peanut gives network UPS tools a compact web dashboard, so checking backup power doesn't mean living in a terminal. It monitors multiple UPS units in real time, shows battery charge, runtime, load, and status, and can execute supported device commands. Metrics can flow into Prometheus, Influx DB, Graphana, or a homepage widget. Authentication is included, and you'll want to keep it enabled if the dashboard is reachable beyond your trusted network. Docy turns Docker Compose

## dockge

[10:04](https://www.youtube.com/watch?v=o1DsUPdSj1s&t=604)

- https://github.com/louislam/dockge

Stacks into a focused self-hosted dashboard without taking ownership of your files. You can edit compose.yaml in the browser, watch pull and startup output live, and manage stacks across multiple Docker hosts from one interface. It even converts Docker run commands into Compose files. Doc focuses on compose, so networks and standalone containers may still send you back to Portainer or the CLI.

## CheapSecurity

[10:32](https://www.youtube.com/watch?v=o1DsUPdSj1s&t=632)

- https://github.com/gmrandazzo/CheapSecurity

Cheap security is a single camera CCTV app for a Raspberry Pi and a USB webcam. Flask dashboard, MJPEG stream, motion detection by frame differencing, and clips with a premotion buffer pushed to Telegram or email. Storage cleans itself up by age, size, and free space. Motion here is pixel difference, not object detection, so expect trees and headlights to trigger it.

## langfuse

[10:55](https://www.youtube.com/watch?v=o1DsUPdSj1s&t=655)

- https://github.com/langfuse/langfuse

Langfuse is an LLM observability platform. trace every model call, retrieval step and agent action. Then manage prompts, run a vowels and replay a bad trace in a playground. It ingests open telemetry, so Langchain, Llama index, light LM and the OpenAI SDK all work through a decorator or a callback. The real stack is Postgres, ClickHouse, and object storage and usage telemetry reports to Post Hog unless you turn it off.

## Fractera

[11:23](https://www.youtube.com/watch?v=o1DsUPdSj1s&t=683)

- https://github.com/Fractera/Agent-Engineering-Infrastructure

Fractera combines VPS provisioning with a browser workspace for several coding agents. give it an Ubuntu 2404 server and it sets up EngineX, HTTPS, authentication, SQLite storage, and a Nex.js starter. Then exposes coding tools through browser terminals and shared rag memory. The maintainers claim its MCP-based design cuts token costs by up to 90%. A figure worth validating yourself.

## cairn

[11:49](https://www.youtube.com/watch?v=o1DsUPdSj1s&t=709)

- https://github.com/MorganKryze/cairn

Karen gives the people using your self-hosted services a directory, not another admin dashboard. You write a welcome note, group tools by purpose, and add plain descriptions so family or clients know what each service does. Optional Gatis integration adds live status without polling from visitors browsers, while search and translated labels keep the page approachable.

## Expense Budget Tracker

[12:13](https://www.youtube.com/watch?v=o1DsUPdSj1s&t=733)

- https://github.com/kirill-markin/expense-budget-tracker

Expense budget tracker keeps personal finance records in a Postgress app you can run yourself. The web interface handles budgets, balances, account transfers, and multicurrency reporting. Its unusual feature is a SQL API that lets an agent import statements or analyze transactions with an API key. The hosted chat can send extracted financial data and telemetry to OpenAI and Langfuse. So self-hosting is the safer fit for sensitive records.

## fak

[12:42](https://www.youtube.com/watch?v=o1DsUPdSj1s&t=762)

- https://github.com/anthony-chaudhary/fak

Fact, the fused agent kernel wraps an existing coding agent with operational controls without replacing its interface or model. It keeps prompt prefixes cache stable, compacts long sessions and can resume after a crash. Tool calls pass through explicit allow, deny, transform, or witness policies, while local GGF serving is also built in. The maintainers report roughly 4.1 times less work than a tuned warm cache stack.

## Getbased

[13:10](https://www.youtube.com/watch?v=o1DsUPdSj1s&t=790)

- https://github.com/elkimek/get-based

Getbased is a local first health dashboard that brings lab results, DNA context, wearables, and personal notes into one browser workspace. It charts biomarkers over time, imports reports for review, and creates deterministic biology scores that summarize patterns rather than diagnose conditions. Most data stays in the browser with encryption, sync, sharing, and model analysis optional.

## backup-maker

[13:35](https://www.youtube.com/watch?v=o1DsUPdSj1s&t=815)

- https://github.com/phil9922/backup-maker

Backup maker protects one computer by copying folders to several local destinations at once with nothing installed on the drives, NAS boxes, or shared folders. It can maintain real-time incremental mirrors with about 30 days of file history. Plus, scheduled AES 256 encrypted snapshots for point in time recovery. The dashboard stays on local host and internet relays are disabled.

## superlog

[14:00](https://www.youtube.com/watch?v=o1DsUPdSj1s&t=840)

- https://github.com/superloglabs/superlog

Superlog turns raw open telemetry data into incidents you can actually investigate instead of another wall of disconnected logs. It ingests traces, logs and metrics, groups related noise and provides a local first workspace backed by Postgres and ClickHouse. Investigation runners are pluggable while the community runner records a local incident summary.

## renfield

[14:23](https://www.youtube.com/watch?v=o1DsUPdSj1s&t=863)

- https://github.com/ebongard/renfield

Renfield is a self-hosted assistant designed to live around the house, not inside one browser tab. Raspberry Pi voice satellites provide local wakeword detection, speech recognition, and text to speech. While its agent can work across home assistant, calendars, email, media, and documents, a rag knowledge base and long-term memory keep local context available.

## news-dashboard

[14:47](https://www.youtube.com/watch?v=o1DsUPdSj1s&t=887)

- https://github.com/lihor-hub/news-dashboard

News dashboard turns a pile of technical feeds into a self-hosted inbox with an actual triage workflow. Articles move through new, saved, skipped, snoozed, and archived states, while source health checks expose feeds that quietly stopped updating. Search and optional generated briefings help compress the backlog, and a Google reader compatible API keeps third party RSS clients in sync.
