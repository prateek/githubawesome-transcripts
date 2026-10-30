# 10 Self-Hosted Google Analytics Alternatives You Should Try

[Watch the original video](https://www.youtube.com/watch?v=mSvME1vpa10)

Cleaned captions, grouped by video chapter. Caption recognition errors may remain.

## Introduction

[0:00](https://www.youtube.com/watch?v=mSvME1vpa10&t=0)

Today, we're checking out 10 of the best open-source Google Analytics alternatives. These tools are simpler, faster, and privacyfriendly. Perfect for indie devs, startups, and anyone who loves clean analytics dashboards without the Google tracking baggage. Let's dive right in.

## Umami

[0:18](https://www.youtube.com/watch?v=mSvME1vpa10&t=18)

- https://github.com/umami-software/umami

All right, Umami. This is one of my personal favorites, and here's why. Umami was created by three brothers, Mike, Brian, and Francis Cao, who were just fed up with Google Analytics. And honestly, I totally get it. No personal data collection, no tracking scripts that spy on users, just fast, simple, ethical analytics. Setting it up is super easy. You can use Yummi Cloud for instant hosting or go fully self-hosted with Docker, giving you total ownership of your data. The dashboard is lightweight, modern, and beautifully minimal. You get real-time tracking, clear traffic insights, and no clutter.

For smaller projects and personal websites, Umami just works. It might not track as many metrics as Google Analytics, but for most devs, that's actually a good thing. If you're tired of over complicated dashboards and privacy invading scripts, Umami is a refreshing alter. Up next, let's talk

## Rybbit

[1:11](https://www.youtube.com/watch?v=mSvME1vpa10&t=71)

- https://github.com/rybbit-io/rybbit

about Ribbit Analytics. Ribbit just dropped version 2.0 a week ago, and it's looking amazing. The brand new map feature with a replayable timeline that lets you visualize your visitors in real time. It's genuinely fun to use. Now, how does Ribbit compare to Umami? Well, Ribbit is definitely more featurerich. It uses a bit more resources built on Next.js with ClickHouse for data storage and Postgress for configuration, but it's still incredibly stable. No cutting edge tech here that's going to break on you. It's not just beautiful to look at, it's actually functional and intuitive.

They've redesigned the user journeys, improved filters, and added a sessions and users page that makes analyzing behavior super easy. Like Umami, it's cookieless, GDPR compliant, and privacy first. Setup is dead simple. One script tag or spin it up with.

## Matomo

[2:06](https://www.youtube.com/watch?v=mSvME1vpa10&t=126)

- https://github.com/matomo-org/matomo

If you want something closer to the full power of Google Analytics without the Google part, Mtomo is the one to watch. Formerly known as Pewick, Mtomo is one of the most comprehensive open-source analytics platforms available. It packs everything from heat maps and AB testing to SEO, keyword tracking, media analytics, and over 100 integrations right out of the box. You can host it yourself for free or choose Mtomo Cloud, which runs on privacy focused servers in Germany. Either way, you own your data.

No sharing, no third party tracking ever. Now with great power comes a slightly heavier footprint. Its tracking script is about 22 kab larger than Umami or Ribbit. But that's the trade-off for such deep analytics capability.

## Plausible

[2:54](https://www.youtube.com/watch?v=mSvME1vpa10&t=174)

- https://github.com/plausible/analytics

While Mtomo aims to match Google Analytics feature for feature, Plausible takes the opposite approach. It's clean, simple, and focused only on what really matters. You get the essentials. Unique visitors, page views, bounce rate, and traffic sources, all in a minimal, easy to read dashboard. No clutter, no tracking bloat. Plausible's analytics script is incredibly lightweight, less than 1 kilob, which makes it one of the fastest analytics tools you can use. And it's completely cookiefree and privacy compliant right out of the box. Under the hood, Plausible runs on Elixir and ClickHouse, which means blazing fast analytics queries and solid scalability for larger sites. It can be self-hosted or used via their managed cloud service hosted in Germany.

## GoatCounter

[3:41](https://www.youtube.com/watch?v=mSvME1vpa10&t=221)

- https://github.com/arp242/goatcounter

If you like your tools simple, open and old school, Goat Counter might just be your vibe. It's a free analytics platform that gives you the basics: page views, visitor counts, and referers. Nothing more, nothing less. Goat Counter can be self-hosted or used as a hosted service, so you don't have to deal with setup if you don't want to. It's super lightweight, too. The tracking script adds less than 1 kilobyte to your site, making it one of the smallest footprints in this list. Now, it's not perfect. It doesn't have live visitor tracking, detailed comparisons, or fancy charts like Ribbit or Mtomo. And as of now, there's no official Docker image, which makes setup and migration a bit less convenient.

## Swetrix

[4:26](https://www.youtube.com/watch?v=mSvME1vpa10&t=266)

- https://github.com/Swetrix/swetrix

Let's talk about Swatrix, a relatively new player that's been getting quite a bit of buzz on Reddit. Swrix is a privacy focused analytics platform that's easy to self-host and packed with features similar to Umami, but with a more enterpriseoriented twist. You get the usual analytics dashboard, but also extras like error and uptime monitoring, funnel analysis, and custom alerts. Their UI absolutely clean and modern. One of the nicest I've seen in this space. Under the hood, Sweatrix uses ClickHouse instead of Postgre as SQL, which means it's faster and more scalable, but also heavier on resources.

The project is under active development with an updated Docker Compose setup and a public road map, so you can literally see what's coming next.

## Openpanel

[5:13](https://www.youtube.com/watch?v=mSvME1vpa10&t=313)

- https://github.com/Openpanel-dev/openpanel

Open Panel is positioning itself as the perfect middle ground. It combines the power of Mix Panel with the simplicity of Plausible. Open Panel's live dashboard is super dynamic, showing visitors, sessions, bounce rate, user locations, referers, and even which pages are trending in real time. But what really sets it apart is the product analytics layer with insights like first and last scene dates, session duration, browser and OS, and detailed interaction history. You can even use the inspect profile feature to drill down into individual user behavior, seeing how often they visit, how long they stay, and what they interact with most. For growth and optimization, Open Panel includes funnel analysis, user retention tracking, and even AB testing, all builtin. You can also set up smart alerts for specific events or conversion drops.

## litlyx

[6:06](https://www.youtube.com/watch?v=mSvME1vpa10&t=366)

- https://github.com/Litlyx/litlyx

Let's move on to Litix, a privacy first all-in-one analytics platform built and hosted in the EU. It's fully GDPR compliant and designed to blend website analytics, product analytics, and ethical marketing into one clean dashboard. With Litlex, you can track visitor behavior, run funnel analyses, manage user permissions, and even generate custom branded reports, all without leaving the app. The UI feels modern and minimal yet powerful, making it great for marketers, developers, and product teams alike. If you're looking for a privacy respecting analytics tool that goes beyond page views, Litlex is a solid container.

## Ackee

[6:45](https://www.youtube.com/watch?v=mSvME1vpa10&t=405)

- https://github.com/electerious/Ackee

AI is a self-hosted analytics solution built on NodeJS. I really like that AI is completely free and open-source, and that it gives you real-time stats in a smooth UI. The dashboard is clean and minimal, offering a straightforward view of your site traffic with real-time visitor monitoring baked in. But it does come with a few caveats. There's no data comparison over time. And since it's self-hosted only, you'll need to handle all the setup and maintenance yourself. From a technical standpoint, AI is lightweight, adding just a few HTTP requests totaling less than half a kilobyte. In short, AI is great for developers who want a minimalist privacy first analytics tool they can fully control.

## Databuddy

[7:31](https://www.youtube.com/watch?v=mSvME1vpa10&t=451)

- https://github.com/databuddy-analytics/Databuddy

Next up, Databuddy. What makes Databuddy special is that it's featurerich without sacrificing privacy. You get a real-time analytics dashboard, user behavior tracking, goal and conversion tracking, custom events, and funnel analysis. And on the road map, cohort analysis, AB testing, advanced visualizations, and multi-tenant support. This thing is packed with features. The tech stack gives you flexibility too. It supports Postgress SQL and Reddus out of the box with optional click house via Docker if you need that extra performance for high volume analytics. You can self-host it completely. And because it's open source under AGPL 3.0, you can inspect, modify, and extend it however you want. Now, Databuddy is relatively new with around 630 GitHub stars as of 10 2025.
