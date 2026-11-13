// Catalogue of the repositories featured on GitHub Awesome. Routes: #/ (the
// list; q, sort, in and lang live in its query), #/repo/OWNER/NAME, #/videos,
// #/video/ID and #/video/ID?section=sNNN. The words follow GLOSSARY.md.
const root = document.querySelector("main");
const cache = new Map();
const SITE = "GitHub Awesome repositories";
const PAGE = 50;
const EXT = 'target="_blank" rel="noopener"';
const SORTS = {
  newest: ["Newest", null],
  stars: ["Stars", (a, b) => (b.stars ?? -1) - (a.stars ?? -1)],
  featured: ["Most featured", (a, b) => b.features - a.features],
  active: [
    "Recently active",
    (a, b) => (b.pushed ?? "").localeCompare(a.pushed ?? ""),
  ],
};
// Scroll positions by history entry, so Back returns to where you were.
const positions = new Map();
let controller,
  generation = 0,
  entry = null,
  visits = 0,
  view = { limit: PAGE };
history.scrollRestoration = "manual";

const esc = (value) =>
  String(value ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const time = (seconds) =>
  `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, "0")}`;
const tc = (s) =>
  `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
const route = (id, section = "") =>
  `#/video/${id}${section ? `?section=${section}` : ""}`;
const repoRoute = (key) => `#/repo/${key}`;
const slug = (url) => url.replace("https://github.com/", "");
const watch = (id, start = 0) =>
  `https://www.youtube.com/watch?v=${id}${start ? `&t=${Math.floor(start)}` : ""}`;
const minutes = (words) => Math.max(1, Math.round((words ?? 0) / 230));
const date = (iso) =>
  iso
    ? new Date(`${iso.slice(0, 10)}T12:00:00Z`).toLocaleDateString("en", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "Date unavailable";
function ago(iso) {
  const days = Math.max(0, Math.round((Date.now() - Date.parse(iso)) / 864e5));
  if (days < 2) return days ? "yesterday" : "today";
  if (days < 60) return `${days} days ago`;
  if (days < 365) return `${Math.round(days / 30.4)} months ago`;
  return `${(days / 365).toFixed(1)} years ago`;
}
const heading = (ep) => `${ep.series}${ep.number ? ` #${ep.number}` : ""}`;
const repos = (s) =>
  s.repositories.filter((u) =>
    /^https:\/\/github\.com\/[\w.-]+\/[\w.-]+$/.test(u),
  );
const recent = (g) => (g?.weeks ?? []).slice(-12).reduce((n, w) => n + w, 0);
// Lowercase words behind single spaces, so " rust" finds the word and its
// prefixes but not "trust".
const norm = (text) =>
  ` ${String(text ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()}`;
// Round before choosing the unit, so 9,960 reads 10k and 999,600 reads 1M.
function stars(n) {
  if (n < 1000) return String(n);
  const [size, unit] = n >= 999500 ? [1e6, "M"] : [1e3, "k"];
  const v = n / size;
  return `${v < 9.95 ? Math.round(v * 10) / 10 : Math.round(v)}${unit}`;
}

function json(path, missing) {
  if (!cache.has(path))
    cache.set(
      path,
      fetch(path)
        .then((r) => {
          if (r.ok) return r.json();
          throw new Error(
            (r.status === 404 && missing) ||
              "The catalogue could not be loaded. Please try again.",
          );
        })
        .catch((error) => {
          cache.delete(path);
          throw error;
        }),
    );
  return cache.get(path);
}

function episode(title) {
  const trending = title.match(
    /^GitHub Trending (Weekly|Today) #(\d+):\s*(.*)$/i,
  );
  if (trending)
    return { series: `Trending ${trending[1]}`, number: trending[2] };
  const themed = title.match(/^(\d+)\s+(.+?)\s+on Github:\s*(.*)$/i);
  if (themed) return { series: themed[2], number: null };
  return { series: title.split(":")[0], number: null };
}

let loaded;
function catalogue() {
  loaded ||= json("./data/repos.json").then((data) => {
    const rows = data.repositories.map((r) => ({
      ...r,
      series: r.series ?? [],
      topics: r.topics ?? [],
      features: r.features ?? 1,
      addedAt: Date.parse(r.added),
      nameHay: norm(`${r.title} ${r.key}`),
      hay: norm(
        `${r.title} ${r.key} ${r.pitch ?? ""} ${(r.topics ?? []).join(" ")} ${(r.series ?? []).join(" ")} ${r.language ?? ""}`,
      ),
    }));
    const byKey = new Map(rows.map((r) => [r.key.toLowerCase(), r]));
    for (const [alias, key] of Object.entries(data.aliases ?? {}))
      byKey.set(alias, byKey.get(key.toLowerCase()));
    const count = (pick) => {
      const n = new Map();
      for (const r of rows)
        for (const v of pick(r)) n.set(v, (n.get(v) ?? 0) + 1);
      return [...n].sort((a, b) => b[1] - a[1]);
    };
    return {
      rows,
      fetched: data.fetched,
      videos: data.videos,
      find: (name) => byKey.get(name.replace(/\.git$/, "").toLowerCase()),
      series: count((r) => r.series),
      languages: count((r) => (r.language ? [r.language] : [])),
    };
  });
  loaded.catch(() => (loaded = null));
  return loaded;
}

let indexed;
function videos() {
  indexed ||= json("./data/index.json").then((index) => ({
    ...index,
    videos: index.videos.map((v) => ({ ...v, ep: episode(v.title) })),
  }));
  indexed.catch(() => (indexed = null));
  return indexed;
}

// What the videos said, by repository; only fetched once someone searches.
let spoken;
function transcripts() {
  spoken ||= json("./data/search.json").then((sections) => {
    const text = new Map();
    for (const s of sections)
      if (s.repo) text.set(s.repo, (text.get(s.repo) ?? "") + norm(s.text));
    return text;
  });
  spoken.catch(() => (spoken = null));
  return spoken;
}

// When this browser last looked, so the list can mark what arrived since.
// A visit is a gap of an hour or more; reloads within it keep the same mark.
const since = (() => {
  try {
    const now = Date.now();
    const visit = JSON.parse(localStorage.getItem("visit") || "null") ?? {
      since: null,
    };
    if (visit.at && now - visit.at > 36e5) visit.since = visit.at;
    visit.at = now;
    localStorage.setItem("visit", JSON.stringify(visit));
    return visit.since;
  } catch {
    return null;
  }
})();

function spark(weeks) {
  if (!weeks?.length) return "";
  const max = Math.max(1, ...weeks);
  const pts = weeks
    .map((w, i) => `${i},${(10 - (w / max) * 9.5).toFixed(2)}`)
    .join(" ");
  return `<svg class="spark" viewBox="0 0 ${weeks.length - 1} 10" preserveAspectRatio="none" aria-hidden="true"><polyline points="0,10 ${pts} ${weeks.length - 1},10" class="fill"/><polyline points="${pts}"/></svg>`;
}

function ghLine(g) {
  if (g?.stars == null) return "";
  const bits = [`★ ${stars(g.stars)}`];
  if (g.language) bits.push(esc(g.language));
  if (g.weeks) bits.push(`${recent(g)} commits in 12 weeks`);
  if (g.archived) bits.push("archived");
  return `<span class="gh">${bits.join(" · ")}${spark(g.weeks)}</span>`;
}

function bar(v, cls = "bar") {
  if (!v.sections.length) return "";
  const dur = v.duration || v.sections.at(-1).start + 30;
  return `<div class="${cls}" aria-hidden="true">${v.sections
    .map((s, i) => {
      const end = v.sections[i + 1]?.start ?? dur;
      return `<i style="flex-grow:${Math.max(1, end - s.start)}" class="${s.repositories.length ? "" : "lead-in"}"></i>`;
    })
    .join("")}</div>`;
}

const back = () =>
  `<a class="back" href="#/" data-back>← ${visits > 1 ? "Back" : "Repositories"}</a>`;
const top = (here) =>
  `<header class="head"><a class="brand" href="#/">GH/AWESOME <span>repositories</span></a><nav aria-label="Site"><a href="#/" ${here === "repos" ? 'aria-current="page"' : ""}>Repositories</a><a href="#/videos" ${here === "videos" ? 'aria-current="page"' : ""}>Videos</a></nav></header>`;
const foot = `<footer class="foot"><a href="./data/repos.json">Dataset ↗</a><a href="./feed.xml">RSS ↗</a><a href="https://github.com/prateek/githubawesome-transcripts" ${EXT}>Source ↗</a><span>An independent catalogue of repositories featured on <a href="https://www.youtube.com/@GithubAwesome" ${EXT}>GitHub Awesome</a>. Quotes come from captions and may contain errors.</span></footer>`;

function repoRow(r, feed) {
  const [owner, name] = r.key.split("/");
  const fresh = since && r.addedAt > since;
  const meta = [
    r.language,
    feed ? null : `First featured ${date(r.first)}`,
    r.series.join(", "),
    r.again ? `Featured again ${date(r.again)}` : null,
    r.archived ? "Archived" : null,
    r.gone ? "No longer on GitHub" : null,
    r.pitch_source === "captions" ? "Pitch from captions" : null,
  ].filter(Boolean);
  return `<li><a href="${repoRoute(esc(r.key))}">
    <span class="p-main"><b>${esc(r.title)}${fresh ? ' <span class="tag">New</span>' : ""}</b><span class="p-slug"><span>${esc(owner)}/</span>${esc(name)}</span>${r.pitch ? `<span class="lead">${esc(r.pitch)}</span>` : ""}<span class="label">${meta.map(esc).join(" · ")}</span></span>
    <span class="p-side">${r.stars != null ? `<span class="star">★ ${stars(r.stars)}</span>` : ""}${spark(r.weeks?.slice(-12))}</span>
  </a></li>`;
}

function choose(cat, state, text) {
  const tokens = norm(state.q).trim().split(" ").filter(Boolean);
  let list = cat.rows.filter(
    (r) =>
      (!state.in || r.series.includes(state.in)) &&
      (!state.lang || r.language === state.lang),
  );
  if (tokens.length) {
    // Names first, then the other written fields, then what the videos said.
    const tier = (r) => {
      if (tokens.every((t) => r.nameHay.includes(` ${t}`))) return 0;
      if (tokens.every((t) => r.hay.includes(` ${t}`))) return 1;
      const body = text?.get(r.key) ?? "";
      return tokens.every(
        (t) => r.hay.includes(` ${t}`) || body.includes(` ${t}`),
      )
        ? 2
        : 3;
    };
    list = list
      .map((r) => [tier(r), r])
      .filter(([t]) => t < 3)
      .sort((a, b) => a[0] - b[0])
      .map(([, r]) => r);
  }
  return SORTS[state.sort][1] ? [...list].sort(SORTS[state.sort][1]) : list;
}

async function home(ctx, query) {
  const cat = await catalogue();
  if (!ctx.alive()) return;
  document.title = SITE;
  const state = {
    q: query.get("q") ?? "",
    sort: SORTS[query.get("sort")] ? query.get("sort") : "newest",
    in: query.get("in") ?? "",
    lang: query.get("lang") ?? "",
  };
  view = { limit: ctx.restore?.limit ?? PAGE };
  const asOf = cat.fetched ? date(cat.fetched) : null;
  const options = (list, chosen, all) =>
    `<option value="">${all}</option>${list
      .map(
        ([v, n]) =>
          `<option value="${esc(v)}" ${v === chosen ? "selected" : ""}>${esc(v)} (${n})</option>`,
      )
      .join("")}`;

  root.innerHTML = `<div class="lib">
  ${top("repos")}
  <section class="intro">
    <h1>Repositories from GitHub Awesome.</h1>
    <p class="lede">${cat.rows.length.toLocaleString("en")} repositories featured across ${cat.videos ?? "the channel's"} videos, each with what the video said about it.</p>
  </section>
  <div class="find">
    <form role="search" onsubmit="return false"><label for="q" class="vh">Search repositories</label><input id="q" type="search" placeholder="Search by name, what it does, or topic" autocomplete="off" enterkeyhint="search" value="${esc(state.q)}"></form>
  </div>
  <div class="tools">
      <div class="chips" role="group" aria-label="Sort">${Object.entries(SORTS)
        .map(
          ([k, [label]]) =>
            `<button type="button" data-sort="${k}" aria-pressed="${k === state.sort}">${label}</button>`,
        )
        .join("")}</div>
      <label class="pick"><span class="vh">Featured in</span><select id="in">${options(cat.series, state.in, "Any series")}</select></label>
      <label class="pick"><span class="vh">Language</span><select id="lang">${options(cat.languages, state.lang, "Any language")}</select></label>
    </div>
  <p class="label asof"><output id="n" for="q"></output>${asOf ? ` · GitHub data as of ${esc(asOf)}` : ""}</p>
  <ol class="plist" id="list"></ol>
  <p class="notice" id="empty" hidden>No repositories match. Try a name, an owner, or fewer words.</p>
  <button type="button" class="open" id="more" hidden></button>
  ${foot}
</div>`;

  const q = root.querySelector("#q"),
    list = root.querySelector("#list"),
    more = root.querySelector("#more");
  let text = null;
  const draw = () => {
    const found = choose(cat, state, text);
    const feed = state.sort === "newest" && !state.q;
    const shown = found.slice(0, view.limit);
    const isNew = (r) => since && r.addedAt > since;
    let day = null,
      divided = !feed || !shown.length || !isNew(shown[0]),
      html = "";
    for (const r of shown) {
      if (!divided && !isNew(r)) {
        html += `<li class="since"><span class="label">Seen on your last visit</span></li>`;
        divided = true;
        day = null;
      }
      if (feed && r.first !== day) {
        day = r.first;
        html += `<li class="day"><h2>${esc(date(day))}</h2></li>`;
      }
      html += repoRow(r, feed);
    }
    list.innerHTML = html;
    root.querySelector("#n").textContent =
      `${found.length.toLocaleString("en")} ${found.length === 1 ? "repository" : "repositories"}`;
    root.querySelector("#empty").hidden = found.length > 0;
    more.hidden = found.length <= view.limit;
    more.textContent = `Show more (${(found.length - view.limit).toLocaleString("en")} remaining)`;
  };
  const update = () => {
    view.limit = PAGE;
    const next = new URLSearchParams();
    for (const [k, v] of Object.entries(state))
      if (v && !(k === "sort" && v === "newest")) next.set(k, v);
    const qs = next.toString();
    history.replaceState(history.state, "", `#/${qs ? `?${qs}` : ""}`);
    for (const b of root.querySelectorAll(".chips button"))
      b.setAttribute("aria-pressed", b.dataset.sort === state.sort);
    draw();
    if (state.q && !text)
      transcripts().then(
        (loaded) => {
          text = loaded;
          if (ctx.alive()) draw();
        },
        () => {},
      );
  };
  q.addEventListener("input", () => {
    state.q = q.value.trim();
    update();
  });
  root.querySelector(".chips").addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    state.sort = b.dataset.sort;
    update();
  });
  for (const id of ["in", "lang"])
    root.querySelector(`#${id}`).addEventListener("change", (e) => {
      state[id] = e.target.value;
      update();
    });
  const grow = () => {
    view.limit += PAGE;
    draw();
  };
  more.addEventListener("click", grow);
  const io = new IntersectionObserver(
    (entries) => entries.some((e) => e.isIntersecting) && grow(),
    { rootMargin: "600px" },
  );
  io.observe(more);
  ctx.signal.addEventListener("abort", () => io.disconnect());
  draw();
  if (state.q) {
    text = await transcripts().catch(() => null);
    if (ctx.alive() && text) draw();
  }
}

async function repository(ctx, name) {
  const cat = await catalogue();
  const row = cat.find(decodeURIComponent(name));
  if (!row) throw new Error("This repository is not in the catalogue.");
  const repo = await json(`./data/repos/${row.key}.json`);
  if (!ctx.alive()) return;
  document.title = `${repo.title} — ${SITE}`;
  const [owner, short] = repo.key.split("/");
  const facts = [];
  const fact = (label, value) => value && facts.push([label, value]);
  fact("Language", esc(repo.language));
  fact("Licence", esc(repo.license));
  if (repo.stars != null)
    fact(
      "Stars",
      `★ ${stars(repo.stars)}${repo.stars_then != null ? ` now · ★ ${stars(repo.stars_then)} when first featured` : ""}`,
    );
  if (repo.pushed)
    fact("Last push", `${esc(date(repo.pushed))} (${esc(ago(repo.pushed))})`);
  if (repo.created) fact("Created", esc(date(repo.created)));
  if (repo.weeks)
    fact(
      "Commits",
      `<span class="gh">${recent(repo)} in the last 12 weeks${spark(repo.weeks)}</span>`,
    );
  if (repo.archived) fact("Status", "Archived on GitHub");
  if (repo.gone)
    fact(
      "Status",
      `No longer on GitHub (first missing ${esc(date(repo.gone))})`,
    );
  if (repo.topics.length)
    fact(
      "Topics",
      repo.topics
        .map((t) => `<a href="#/?q=${encodeURIComponent(t)}">${esc(t)}</a>`)
        .join(", "),
    );
  const features = repo.mentions.filter((m) => !m.recap).length;
  const recaps = repo.mentions.length - features;
  const said = (m) => `<article class="mention">
    <header>
      <p class="label">${esc(date(m.date))} · ${esc(m.heading)}${m.recap ? ' · <span class="tag">Recap</span>' : ""}${m.stars != null ? ` · ★ ${stars(m.stars)} at the time` : ""}</p>
      <a class="tc" href="${watch(m.video, m.start)}" ${EXT} aria-label="Watch from ${time(m.start)}">▶ ${tc(m.start)}</a>
    </header>
    ${m.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("") || "<p>No caption text is available for this mention.</p>"}
    ${m.edited ? "" : `<p class="note">Captions, not yet copy-edited. Names may be misheard.</p>`}
    <a class="slug page" href="${route(m.video, m.section)}">Read in the transcript of “${esc(m.video_title)}” →</a>
  </article>`;

  root.innerHTML = `<div class="read repo">
  <header class="rh">
    ${back()}
    <p class="p-slug"><span>${esc(owner)}/</span>${esc(short)}</p>
    <h1>${esc(repo.title)}</h1>
    ${repo.pitch ? `<p class="rsub">${esc(repo.pitch)}</p>` : ""}
    ${repo.pitch_source === "captions" ? `<p class="note">This line comes from captions that have not been copy-edited.</p>` : ""}
    <p class="acts"><a href="${esc(repo.url)}" ${EXT}>Open on GitHub ↗</a>${repo.homepage && /^https?:\/\//.test(repo.homepage) ? `<a href="${esc(repo.homepage)}" ${EXT}>Website ↗</a>` : ""}</p>
    ${
      facts.length
        ? `<dl class="facts">${facts.map(([k, v]) => `<div><dt class="label">${k}</dt><dd>${v}</dd></div>`).join("")}</dl>${cat.fetched ? `<p class="label asof">GitHub data as of ${esc(date(cat.fetched))}</p>` : ""}`
        : `<p class="note">GitHub data has not been fetched for this repository yet.</p>`
    }
  </header>
  <div class="text">
    <h2 class="said">Featured ${features === 1 ? "once" : `${features} times`}${recaps ? `, plus ${recaps} ${recaps === 1 ? "recap" : "recaps"}` : ""}</h2>
    ${repo.mentions.map(said).join("")}
  </div>
  ${foot}
</div>`;
}

async function videoList(ctx) {
  const [index, cat] = await Promise.all([videos(), catalogue()]);
  if (!ctx.alive()) return;
  document.title = `Videos — ${SITE}`;
  const { counts } = index;
  const retry = index.pending.filter((p) => p.status === "retry").length;
  const total = Math.max(1, counts.discovered);
  root.innerHTML = `<div class="lib">
  ${top("videos")}
  <section class="intro">
    <h1>Videos.</h1>
    <p class="lede">The transcripts the catalogue is built from. Every chapter links back to its second in the source.</p>
    <div class="meter" role="img" aria-label="${counts.available} of ${counts.discovered} videos transcribed"><i style="width:${(counts.available / total) * 100}%"></i><i class="retry" style="width:${(retry / total) * 100}%"></i></div>
    <p class="label">${counts.available} of ${counts.discovered} videos transcribed · ${counts.edited} copy-edited · ${index.pending.length} waiting</p>
  </section>
  ${
    index.videos.length
      ? `<ol class="plist vlist">${index.videos
          .map((v) => {
            const n = v.sections.filter((s) =>
              cat.find(slug(repos(s)[0] ?? "")),
            ).length;
            return `<li><a href="${route(v.id)}"><span class="p-main"><b>${esc(v.title)}</b><span class="label">${esc(date(v.published))} · ${n} ${n === 1 ? "repository" : "repositories"} · ${minutes(v.word_count)} min read · ${v.edition === "edited" ? "Copy-edited" : "Captions"}</span></span></a></li>`;
          })
          .join("")}</ol>`
      : `<p class="notice">No videos have been transcribed yet. They appear here as CI retrieves captions.</p>`
  }
  <details class="queue"><summary>${index.pending.length} videos waiting for transcripts</summary><p>Videos without accessible captions stay in the queue. Collection retries automatically.</p><ul>${index.pending
    .map(
      (p) =>
        `<li><a href="${watch(esc(p.id))}" ${EXT}>${esc(p.title)}</a>${p.status === "retry" ? " <em>retrying</em>" : ""}</li>`,
    )
    .join("")}</ul></details>
  ${foot}
</div>`;
}

async function reader(ctx, id) {
  if (!/^[\w-]{11}$/.test(id))
    throw new Error("This video address is invalid.");
  const [video, index, cat] = await Promise.all([
    json(`./data/editions/${id}.json`),
    videos(),
    catalogue(),
  ]);
  if (!ctx.alive()) return;
  const meta = index.videos.find((v) => v.id === video.id);
  const ep = meta?.ep ?? episode(video.title);
  const next = meta ? index.videos[index.videos.indexOf(meta) + 1] : null;
  const secs = video.sections;
  const chapters = secs.filter((s) => s.repositories.length);
  document.title = `${video.title} — ${SITE}`;
  const name = (s) => s.title;
  const toc = secs
    .map(
      (s) =>
        `<li><a href="${route(id, s.id)}" data-id="${esc(s.id)}"><time>${tc(s.start)}</time><span>${esc(name(s))}</span></a></li>`,
    )
    .join("");

  root.innerHTML = `<div class="read">
  <header class="rh">
    ${back()}
    <p class="label">${esc(date(video.published))}${video.duration ? ` · ${tc(video.duration)} video` : ""}</p>
    <h1>${esc(heading(ep))}</h1>
    <p class="title">${esc(video.title)}</p>
    <p class="rsub">${chapters.length} ${chapters.length === 1 ? "repository" : "repositories"} · ${(video.word_count ?? 0).toLocaleString("en")} words · ${minutes(video.word_count)} min read</p>
    <p class="acts"><a href="${watch(id)}" ${EXT}>Watch ↗</a><a href="./data/editions/${id}.md" download>Markdown ↓</a><a href="./data/editions/${id}.json" download>JSON ↓</a><a href="./data/raw/${id}/captions.json">Raw captions ↗</a></p>
    <p class="note">${video.edition === "edited" ? "AI copy-edited for punctuation and readability; the original captions are preserved." : "Captions grouped into chapters. AI copy-editing is pending."} Recognition and editing errors may remain.</p>
  </header>
  <nav class="toc" aria-label="Contents"><details ${matchMedia("(min-width:1100px)").matches ? "open" : ""}><summary><span>Contents</span><span class="label">${secs.length} chapters</span></summary><ol>${toc}</ol></details></nav>
  <div class="text">${secs
    .map(
      (
        s,
        i,
      ) => `<section class="sec${s.title === "Introduction" ? " sec-intro" : ""}" id="${esc(s.id)}" data-i="${i}">
      <header>
        <a class="tc" href="${watch(id, s.start)}" ${EXT} aria-label="Watch from ${time(s.start)}">▶ ${tc(s.start)}</a>
        ${s.title === "Introduction" ? "" : `<h2>${esc(s.title)}</h2>`}
        ${repos(s)
          .map((u) => {
            const row = cat.find(slug(u));
            return `<a class="slug" href="${esc(u)}" ${EXT}><span>${esc(slug(u).split("/")[0])}/</span>${esc(slug(u).split("/")[1])} ↗</a>${ghLine(row)}${row ? `<a class="slug page" href="${repoRoute(row.key)}">Repository page →</a>` : ""}`;
          })
          .join("")}
      </header>
      ${s.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("") || "<p>No caption text is available for this section.</p>"}
    </section>`,
    )
    .join("")}
    ${next ? `<a class="next" href="${route(next.id)}"><span class="label">Next video</span><b>${esc(heading(next.ep))}</b><span>${minutes(next.word_count)} min read →</span></a>` : ""}
  </div>
  ${
    secs.length
      ? `<div class="dock">
    <button type="button" class="step" data-step="-1" aria-label="Previous chapter"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 5-7 7 7 7"/></svg></button>
    <button type="button" class="now" aria-haspopup="dialog" aria-label="All chapters"><span class="now-l"><b id="now-t">00:00</b><span id="now-name"></span><span id="now-idx"></span></span>${bar(video, "bar bar-dock")}</button>
    <button type="button" class="step" data-step="1" aria-label="Next chapter"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7"/></svg></button>
  </div>
  <dialog class="sheet" aria-label="Chapters"><form method="dialog"><p class="label">${esc(heading(ep))} · ${secs.length} chapters</p><button>Done</button></form><ol>${toc}</ol></dialog>`
      : ""
  }
</div>`;
  if (!secs.length) return null;

  const sections = [...root.querySelectorAll(".sec")],
    segs = [...root.querySelectorAll(".bar-dock i")],
    links = [...root.querySelectorAll(".toc a, .sheet a")],
    sheet = root.querySelector(".sheet");
  // After a jump, the observer would re-pick a neighbour of a short section or
  // of one the page cannot scroll to the top, so it waits for the reader to scroll.
  let at = 0,
    held = false;
  for (const type of ["wheel", "touchmove", "pointerdown", "keydown"])
    addEventListener(type, () => (held = false), {
      passive: true,
      signal: ctx.signal,
    });
  const show = (i) => {
    at = i;
    const s = secs[i];
    root.querySelector("#now-t").textContent = tc(s.start);
    root.querySelector("#now-name").textContent = name(s);
    root.querySelector("#now-idx").textContent = `${i + 1}/${secs.length}`;
    segs.forEach((g, j) => g.classList.toggle("past", j <= i));
    for (const a of links)
      a.toggleAttribute("aria-current", a.dataset.id === s.id);
  };
  const io = new IntersectionObserver(
    (entries) => {
      if (held) return;
      for (const e of entries)
        if (e.isIntersecting) show(Number(e.target.dataset.i));
    },
    { rootMargin: "-30% 0px -65% 0px" },
  );
  sections.forEach((s) => io.observe(s));
  ctx.signal.addEventListener("abort", () => io.disconnect());

  // In-episode jumps scroll in place instead of re-rendering the route.
  const go = (i) => {
    const k = Math.max(0, Math.min(secs.length - 1, i));
    sections[k].scrollIntoView({ block: "start" });
    show(k);
    held = true;
    history.replaceState(history.state, "", route(id, secs[k].id));
  };
  root.addEventListener(
    "click",
    (e) => {
      const a = e.target.closest(".toc a, .sheet a");
      if (a) {
        e.preventDefault();
        if (sheet.open) sheet.close();
        go(secs.findIndex((s) => s.id === a.dataset.id));
        return;
      }
      const step = e.target.closest(".step");
      if (step) go(at + Number(step.dataset.step));
      if (e.target.closest(".now")) {
        sheet.showModal();
        sheet
          .querySelector("[aria-current]")
          ?.scrollIntoView({ block: "center" });
      }
    },
    { signal: ctx.signal },
  );
  sheet.addEventListener("click", (e) => e.target === sheet && sheet.close());
  show(0);
  return (sectionId) => {
    const i = secs.findIndex((s) => s.id === sectionId);
    if (i >= 0) go(i);
  };
}

async function render() {
  const mine = ++generation;
  controller?.abort();
  controller = new AbortController();
  visits++;
  // An entry we have rendered before carries its key, so this is Back or Forward.
  const restore = positions.get(history.state?.k);
  entry = history.state?.k ?? `${Date.now()}-${visits}`;
  if (!history.state?.k) history.replaceState({ k: entry }, "");
  try {
    const [path = "/", query = ""] = location.hash.slice(1).split("?");
    const ctx = {
      signal: controller.signal,
      alive: () => mine === generation,
      restore,
    };
    const params = new URLSearchParams(query);
    const section = path.startsWith("/video/") ? params.get("section") : null;
    let jump = null;
    if (path.startsWith("/video/")) jump = await reader(ctx, path.slice(7));
    else if (path.startsWith("/repo/")) await repository(ctx, path.slice(6));
    else if (path === "/videos") await videoList(ctx);
    else await home(ctx, params);
    // Web fonts shift layout, so deep links scroll again once they land.
    await document.fonts?.ready;
    if (!ctx.alive()) return;
    if (restore) scrollTo(0, restore.y);
    else if (jump && section && document.getElementById(section)) {
      jump(section);
      document.fonts?.addEventListener("loadingdone", () => jump(section), {
        once: true,
        signal: ctx.signal,
      });
    } else scrollTo(0, 0);
  } catch (error) {
    if (mine === generation)
      root.innerHTML = `<p class="notice" role="alert">${esc(error.message)}</p><a class="back" href="#/">Return to the catalogue</a>`;
  }
}

addEventListener(
  "scroll",
  () => entry && positions.set(entry, { y: scrollY, limit: view.limit }),
  { passive: true },
);
addEventListener("click", (e) => {
  if (e.target.closest("[data-back]") && visits > 1) {
    e.preventDefault();
    history.back();
  }
});
addEventListener("hashchange", render);
render();
