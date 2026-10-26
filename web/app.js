// Reader for the archive. Routes: #/ (episodes), #/projects, #/video/ID and
// #/video/ID?section=sNNN. Stars and weekly commits come from the
// data/github.json snapshot, written by scripts/refresh_github_stats.py.
const root = document.querySelector("main");
const cache = new Map();
const PREVIEW = 5;
const SORTS = {
  newest: ["Newest", (a, b) => a.vi - b.vi || a.start - b.start],
  stars: ["Stars", (a, b) => (b.gh?.stars ?? -1) - (a.gh?.stars ?? -1)],
  active: ["Active", (a, b) => recent(b.gh) - recent(a.gh)],
  az: [
    "A–Z",
    (a, b) => a.title.localeCompare(b.title, "en", { sensitivity: "base" }),
  ],
};
let data,
  controller,
  generation = 0,
  sort = "newest",
  only = "",
  from = "#/";

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
const slug = (url) => url.replace("https://github.com/", "");
const key = (url) => slug(url).replace(/\.git$/, "");
const watch = (id, start = 0) =>
  `https://www.youtube.com/watch?v=${id}${start ? `&t=${Math.floor(start)}` : ""}`;
const minutes = (words) => Math.max(1, Math.round((words ?? 0) / 230));
const date = (iso) =>
  iso
    ? new Date(`${iso}T12:00:00Z`).toLocaleDateString("en", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "Date unavailable";
const heading = (ep) => `${ep.series}${ep.number ? ` #${ep.number}` : ""}`;
const lead = (text) => text.match(/^.*?[.!?](?=\s|$)/)?.[0] ?? text;
const repos = (s) =>
  s.repositories.filter((u) =>
    /^https:\/\/github\.com\/[\w.-]+\/[\w.-]+$/.test(u),
  );
const recent = (g) => (g?.weeks ?? []).slice(-12).reduce((n, w) => n + w, 0);
// Round before choosing the unit, so 9,960 reads 10k and 999,600 reads 1M.
function stars(n) {
  if (n < 1000) return String(n);
  const [size, unit] = n >= 999500 ? [1e6, "M"] : [1e3, "k"];
  const v = n / size;
  return `${v < 9.95 ? Math.round(v * 10) / 10 : Math.round(v)}${unit}`;
}

function json(path, optional = false) {
  if (!cache.has(path))
    cache.set(
      path,
      fetch(path)
        .then((r) => {
          if (r.ok) return r.json();
          if (optional) return null;
          throw new Error("The archive could not be loaded. Please try again.");
        })
        .catch((error) => {
          cache.delete(path);
          throw error;
        }),
    );
  const pending = cache.get(path);
  return optional ? pending.catch(() => null) : pending;
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

async function load() {
  const [index, search, github] = await Promise.all([
    json("./data/index.json"),
    json("./data/search.json", true),
    json("./data/github.json", true),
  ]);
  const text = new Map(
    (search ?? []).map((s) => [`${s.video_id}/${s.section_id}`, s.text]),
  );
  const gh = (url) => github?.repositories?.[key(url)] ?? null;
  const videos = index.videos.map((v) => ({
    ...v,
    ep: episode(v.title),
    hay: v.title.toLowerCase(),
  }));
  // Every section is searchable; sections that link a repository are projects.
  const sections = videos.flatMap((v, vi) =>
    v.sections.map((s) => {
      const urls = repos(s);
      const body = text.get(`${v.id}/${s.id}`) ?? "";
      return {
        video: v,
        vi,
        id: s.id,
        title: s.title,
        repo: urls[0],
        slug: urls[0] ? slug(urls[0]) : "",
        start: s.start,
        text: body,
        gh: urls[0] ? gh(urls[0]) : null,
        hay: `${s.title} ${urls.map(slug).join(" ")} ${body}`.toLowerCase(),
      };
    }),
  );
  return {
    index,
    videos,
    sections,
    projects: sections.filter((p) => p.repo),
    gh,
    fetched: github?.fetched,
    pending: index.pending,
  };
}

function spark(weeks) {
  if (!weeks?.length) return "";
  const max = Math.max(1, ...weeks);
  const pts = weeks
    .map((w, i) => `${i},${(10 - (w / max) * 9.5).toFixed(2)}`)
    .join(" ");
  return `<svg class="spark" viewBox="0 0 ${weeks.length - 1} 10" preserveAspectRatio="none" aria-hidden="true"><polyline points="0,10 ${pts} ${weeks.length - 1},10" class="fill"/><polyline points="${pts}"/></svg>`;
}

function ghLine(g) {
  if (!g) return "";
  const bits = [`★ ${stars(g.stars)}`];
  if (g.language) bits.push(esc(g.language));
  bits.push(`${recent(g)} commits in 12 weeks`);
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

function chapterRow(p) {
  return `<li><a href="${route(p.video.id, p.id)}"><time>${tc(p.start)}</time><span><b>${esc(p.title)}</b><span class="lead">${esc(lead(p.text))}</span></span>${p.gh ? `<span class="star">★ ${stars(p.gh.stars)}</span>` : "<span></span>"}</a></li>`;
}

function projectRow(p) {
  const [owner, name] = key(p.repo).split("/");
  return `<li data-hay="${esc(p.hay)}"><a href="${route(p.video.id, p.id)}">
    <span class="p-main"><b>${esc(p.title)}</b><span class="p-slug"><span>${esc(owner)}/</span>${esc(name)}</span><span class="lead">${esc(lead(p.text))}</span><span class="label">${esc(heading(p.video.ep))} · ${tc(p.start)}${p.gh?.language ? ` · ${esc(p.gh.language)}` : ""}</span></span>
    <span class="p-side">${p.gh ? `<span class="star">★ ${stars(p.gh.stars)}</span>${spark(p.gh.weeks)}<span class="p-act">${recent(p.gh)} commits<br>last 12 wk</span>` : `<span class="p-act">No GitHub stats</span>`}</span>
  </a></li>`;
}

function projectsView(ctx) {
  const list = ctx.projects
    .filter((p) => !only || p.video.id === only)
    .sort(SORTS[sort][1]);
  return `<section class="projects" aria-label="Projects">
    <div class="tools">
      <div class="chips" role="group" aria-label="Sort">${Object.entries(SORTS)
        .map(
          ([k, [label]]) =>
            `<button type="button" data-sort="${k}" aria-pressed="${k === sort}">${label}</button>`,
        )
        .join("")}</div>
      <label class="pick"><span class="vh">Episode</span><select id="only"><option value="">All episodes</option>${ctx.videos
        .map(
          (v) =>
            `<option value="${esc(v.id)}" ${v.id === only ? "selected" : ""}>${esc(heading(v.ep))}</option>`,
        )
        .join("")}</select></label>
    </div>
    <ol class="plist">${list.map(projectRow).join("")}</ol>
    <p class="notice" id="empty" ${list.length ? "hidden" : ""}>No matching projects. Try another name or owner.</p>
  </section>`;
}

function episodesView(ctx) {
  if (!ctx.videos.length)
    return `<p class="notice">The archive is getting started. Transcripts will appear here as CI retrieves captions.</p>`;
  const byVideo = Map.groupBy(ctx.projects, (p) => p.video.id);
  return `<section class="eps" aria-label="Episodes">${ctx.videos
    .map((v) => {
      const ps = byVideo.get(v.id) ?? [];
      return `<article class="ep">
      <a class="ep-head" href="${route(v.id)}">
        <span class="label">${esc(date(v.published))} · ${tc(v.duration ?? 0)} · ${minutes(v.word_count)} min read</span>
        <h2>${esc(heading(v.ep))}</h2>
        <span class="ep-sub">${ps.length} projects · ${v.edition === "edited" ? "Copy-edited" : "Caption edition"}</span>
      </a>
      ${bar(v)}
      <ol class="chapters">${ps.slice(0, PREVIEW).map(chapterRow).join("")}</ol>
      ${ps.length > PREVIEW ? `<details class="more"><summary>Show all ${ps.length} projects</summary><ol class="chapters">${ps.slice(PREVIEW).map(chapterRow).join("")}</ol></details>` : ""}
      <a class="open" href="${route(v.id)}">Read the episode →</a>
    </article>`;
    })
    .join("")}</section>`;
}

function library(ctx) {
  document.title = "GitHub Awesome, in writing";
  const { counts } = ctx.index;
  const retry = ctx.pending.filter((p) => p.status === "retry").length;
  const total = Math.max(1, counts.discovered);
  const hours = (
    ctx.videos.reduce((t, v) => t + (v.duration ?? 0), 0) / 3600
  ).toFixed(1);
  const tab = location.hash.startsWith("#/projects") ? "projects" : "episodes";
  from = tab === "projects" ? "#/projects" : "#/";
  const asOf = ctx.fetched
    ? new Date(ctx.fetched).toLocaleDateString("en", {
        month: "short",
        day: "numeric",
      })
    : null;

  root.innerHTML = `<div class="lib">
  <header class="head"><a class="brand" href="#/">GH/AWESOME <span>in writing</span></a></header>
  <section class="intro">
    <h1>GitHub Awesome, read instead of watched.</h1>
    <p class="lede">${counts.available} episodes, ${ctx.projects.length} projects, ${hours} hours of video. Every chapter links back to its second in the source.</p>
    <div class="meter" role="img" aria-label="${counts.available} of ${counts.discovered} videos readable"><i style="width:${(counts.available / total) * 100}%"></i><i class="retry" style="width:${(retry / total) * 100}%"></i></div>
    <p class="label">${counts.available} of ${counts.discovered} videos readable · ${counts.edited} copy-edited · ${ctx.pending.length} waiting</p>
  </section>
  <nav class="tabs" aria-label="Browse by"><a href="#/" ${tab === "episodes" ? 'aria-current="page"' : ""}>Episodes <span>${ctx.videos.length}</span></a><a href="#/projects" ${tab === "projects" ? 'aria-current="page"' : ""}>Projects <span>${ctx.projects.length}</span></a></nav>
  ${asOf ? `<p class="label asof">GitHub stars and commits as of ${esc(asOf)}</p>` : ""}
  ${tab === "projects" ? projectsView(ctx) : episodesView(ctx)}
  <details class="queue"><summary>${ctx.pending.length} videos waiting for transcripts</summary><p>Videos without accessible captions stay in the queue. Collection retries automatically.</p><ul>${ctx.pending
    .map(
      (p) =>
        `<li><a href="${watch(esc(p.id))}">${esc(p.title)}</a>${p.status === "retry" ? " <em>retrying</em>" : ""}</li>`,
    )
    .join("")}</ul></details>
  <footer class="foot"><a href="./data/index.json">Dataset ↗</a><a href="./feed.xml">RSS ↗</a><a href="https://github.com/prateek/githubawesome-transcripts">Source ↗</a><span>An independent reading archive of <a href="https://www.youtube.com/@GithubAwesome">GitHub Awesome</a>. Caption and editing errors may remain.</span></footer>
  <div class="cmd">
    <ol class="hits" id="hits" hidden></ol>
    <form class="cmd-bar" role="search" onsubmit="return false"><label for="q">Find</label><input id="q" type="search" placeholder="Search projects and transcripts" autocomplete="off" enterkeyhint="search"><output id="n"></output></form>
  </div>
</div>`;

  const q = root.querySelector("#q"),
    hits = root.querySelector("#hits"),
    count = root.querySelector("#n");
  if (tab === "projects") {
    const items = [...root.querySelectorAll(".plist li")],
      empty = root.querySelector("#empty");
    q.addEventListener("input", () => {
      const term = q.value.trim().toLowerCase();
      let shown = 0;
      for (const li of items) {
        li.hidden = !!term && !li.dataset.hay.includes(term);
        shown += !li.hidden;
      }
      count.textContent = term ? shown : "";
      empty.hidden = shown > 0;
    });
    const redraw = () => {
      const keep = q.value;
      library(ctx);
      const next = root.querySelector("#q");
      next.value = keep;
      next.dispatchEvent(new Event("input"));
    };
    root.querySelector(".chips").addEventListener("click", (e) => {
      const b = e.target.closest("button");
      if (!b) return;
      sort = b.dataset.sort;
      redraw();
    });
    root.querySelector("#only").addEventListener("change", (e) => {
      only = e.target.value;
      redraw();
    });
    return;
  }
  q.addEventListener("input", () => {
    const term = q.value.trim().toLowerCase();
    hits.hidden = term.length < 2;
    count.textContent = "";
    if (hits.hidden) return;
    const found = ctx.sections.filter(
      (p) => p.hay.includes(term) || p.video.hay.includes(term),
    );
    count.textContent = found.length;
    hits.innerHTML =
      found
        .slice(0, 40)
        .map((p) => {
          const i = p.text.toLowerCase().indexOf(term);
          const snip =
            i < 0
              ? esc(lead(p.text))
              : `…${esc(p.text.slice(Math.max(0, i - 40), i))}<mark>${esc(p.text.slice(i, i + term.length))}</mark>${esc(p.text.slice(i + term.length, i + 70))}…`;
          return `<li><a href="${route(p.video.id, p.id)}"><span class="h-m">${esc(heading(p.video.ep))} · ${tc(p.start)}</span><b>${esc(p.title)}</b><span class="h-s">${snip}</span></a></li>`;
        })
        .join("") ||
      `<li class="none">Nothing matches. Try another project, owner or phrase.</li>`;
  });
}

async function reader(ctx, id) {
  if (!/^[\w-]{11}$/.test(id))
    throw new Error("This video address is invalid.");
  const video = await json(`./data/editions/${id}.json`);
  if (!ctx.alive()) return;
  const meta = ctx.videos.find((v) => v.id === video.id);
  const ep = meta?.ep ?? episode(video.title);
  const next = meta ? ctx.videos[ctx.videos.indexOf(meta) + 1] : null;
  const secs = video.sections;
  const chapters = secs.filter((s) => s.repositories.length);
  document.title = `${video.title} — GitHub Awesome, in writing`;
  const name = (s) => s.title;
  const toc = secs
    .map(
      (s) =>
        `<li><a href="${route(id, s.id)}" data-id="${esc(s.id)}"><time>${tc(s.start)}</time><span>${esc(name(s))}</span></a></li>`,
    )
    .join("");

  root.innerHTML = `<div class="read">
  <header class="rh">
    <a class="back" href="${from}">← All ${from === "#/" ? "episodes" : "projects"}</a>
    <p class="label">${esc(date(video.published))}${video.duration ? ` · ${tc(video.duration)} video` : ""}</p>
    <h1>${esc(heading(ep))}</h1>
    <p class="title">${esc(video.title)}</p>
    <p class="rsub">${chapters.length} projects · ${(video.word_count ?? 0).toLocaleString("en")} words · ${minutes(video.word_count)} min read</p>
    <p class="acts"><a href="${watch(id)}">Watch ↗</a><a href="./data/editions/${id}.md" download>Markdown ↓</a><a href="./data/editions/${id}.json" download>JSON ↓</a><a href="./data/raw/${id}/captions.json">Raw captions ↗</a></p>
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
        <a class="tc" href="${watch(id, s.start)}" aria-label="Watch from ${time(s.start)}">▶ ${tc(s.start)}</a>
        ${s.title === "Introduction" ? "" : `<h2>${esc(s.title)}</h2>`}
        ${repos(s)
          .map(
            (u) =>
              `<a class="slug" href="${esc(u)}"><span>${esc(slug(u).split("/")[0])}/</span>${esc(slug(u).split("/")[1])} ↗</a>${ghLine(ctx.gh(u))}`,
          )
          .join("")}
      </header>
      ${s.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("") || "<p>No caption text is available for this section.</p>"}
    </section>`,
    )
    .join("")}
    ${next ? `<a class="next" href="${route(next.id)}"><span class="label">Next episode</span><b>${esc(heading(next.ep))}</b><span>${minutes(next.word_count)} min read →</span></a>` : ""}
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
    history.replaceState(null, "", route(id, secs[k].id));
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
  try {
    data ||= await load();
    if (mine !== generation) return;
    const [path, query] = location.hash.slice(1).split("?");
    const ctx = {
      ...data,
      signal: controller.signal,
      alive: () => mine === generation,
    };
    const section = path?.startsWith("/video/")
      ? new URLSearchParams(query).get("section")
      : null;
    const jump = path?.startsWith("/video/")
      ? await reader(ctx, path.slice(7))
      : library(ctx);
    // Web fonts shift layout, so deep links scroll again once they land.
    await document.fonts?.ready;
    if (!ctx.alive()) return;
    if (jump && section && document.getElementById(section)) {
      jump(section);
      document.fonts?.addEventListener("loadingdone", () => jump(section), {
        once: true,
        signal: ctx.signal,
      });
    } else scrollTo(0, 0);
  } catch (error) {
    if (mine === generation)
      root.innerHTML = `<p class="notice" role="alert">${esc(error.message)}</p><a class="back" href="#/">Return to archive</a>`;
  }
}

addEventListener("hashchange", render);
render();
