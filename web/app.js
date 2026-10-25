const main = document.querySelector("main");
let index,
  searchData,
  routeGeneration = 0;
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
const route = (id, section = "") =>
  `#/video/${id}${section ? `?section=${section}` : ""}`;
async function json(path) {
  const response = await fetch(path);
  if (!response.ok)
    throw new Error("The archive could not be loaded. Please try again.");
  return response.json();
}
function card(video) {
  return `<article class="card"><div class="meta"><span>${esc(video.published || "Date unavailable")}</span><span>${video.sections.length} sections</span><span>${video.edition === "edited" ? "Copy-edited" : "Caption edition"}</span></div><h2><a href="${route(video.id)}">${esc(video.title)}</a></h2><p class="projects">${esc(
    video.sections
      .slice(0, 6)
      .map((s) => s.title)
      .join(" · "),
  )}${video.sections.length > 6 ? " …" : ""}</p><a class="read-link" href="${route(video.id)}">Read transcript →</a></article>`;
}
function library() {
  document.title = "GitHub Awesome, in writing";
  main.innerHTML = `<section class="hero"><p class="eyebrow">The video archive, made readable</p><h1>Good projects.<br>A little less playback.</h1><p>Read GitHub Awesome’s project discoveries at your own pace. Chaptered transcripts, links to the projects, and timestamps back to the source.</p></section><div class="stats"><div><strong>${index.counts.available}</strong>transcripts</div><div><strong>${index.counts.edited}</strong>copy-edited</div><div><strong>${index.counts.discovered}</strong>videos discovered</div></div><div class="tools"><label>Find a project or video<input id="search" type="search" placeholder="Search the archive…" autocomplete="off"></label><label class="scope">Search in<select id="scope" aria-label="Search in"><option value="titles">Titles & projects</option><option value="full">Full transcripts</option></select></label></div><p class="results-label" role="status" id="results-label"></p><section class="cards" id="results" aria-label="Transcripts"></section><details class="pending"><summary>${index.pending.length} videos awaiting captions</summary><p>Videos without accessible English captions stay in the queue. Collection retries automatically.</p><ul>${index.pending.map((v) => `<li><a href="https://www.youtube.com/watch?v=${esc(v.id)}">${esc(v.title)}</a> — ${esc(v.status)}</li>`).join("")}</ul></details>`;
  const input = document.querySelector("#search"),
    scope = document.querySelector("#scope");
  const results = document.querySelector("#results"),
    label = document.querySelector("#results-label");
  let searchGeneration = 0;
  async function filter() {
    const generation = ++searchGeneration,
      query = input.value.trim().toLowerCase();
    let matches = new Set();
    if (query && scope.value === "full") {
      label.textContent = "Searching full transcripts…";
      try {
        searchData ||= await json("./data/search.json");
      } catch {
        if (generation === searchGeneration)
          label.textContent = "Search could not load. Try again.";
        return;
      }
      matches = new Set(
        searchData
          .filter((s) => s.text.toLowerCase().includes(query))
          .map((s) => s.video_id),
      );
    }
    if (generation !== searchGeneration) return;
    const videos = index.videos.filter(
      (v) =>
        !query ||
        `${v.title} ${v.sections.map((s) => `${s.title} ${s.repositories.join(" ")}`).join(" ")}`
          .toLowerCase()
          .includes(query) ||
        matches.has(v.id),
    );
    label.textContent = `${videos.length} transcript${videos.length === 1 ? "" : "s"} · newest first`;
    results.innerHTML =
      videos.map(card).join("") ||
      `<p class="notice">${query ? "No matching transcripts. Try another project name." : "The archive is getting started. Transcripts will appear here as CI retrieves captions."}</p>`;
  }
  input.addEventListener("input", filter);
  scope.addEventListener("change", filter);
  filter();
}
async function reader(id, section, generation) {
  if (!/^[\w-]{11}$/.test(id))
    throw new Error("This video address is invalid.");
  const video = await json(`./data/editions/${id}.json`);
  if (generation !== routeGeneration) return;
  document.title = `${video.title} — GitHub Awesome, in writing`;
  const toc = video.sections
    .map((s) => `<li><a href="${route(id, s.id)}">${esc(s.title)}</a></li>`)
    .join("");
  main.innerHTML = `<a class="back" href="#/">← All transcripts</a><div class="article-head"><p class="eyebrow">${esc(video.published || "")} · ${video.edition === "edited" ? "Copy-edited transcript" : "Caption edition"}</p><h1>${esc(video.title)}</h1><div class="actions"><a href="https://www.youtube.com/watch?v=${id}">Watch the video ↗</a><a href="./data/editions/${id}.md" download>Markdown ↓</a><a href="./data/editions/${id}.json" download>JSON ↓</a><a href="./data/raw/${id}/captions.json">Raw captions ↗</a></div><p class="edition-note">${video.edition === "edited" ? "AI copy-edited for punctuation and readability; the original captions are preserved." : "Captions grouped into chapters. AI copy-editing is pending."} Recognition and editing errors may remain.</p></div><div class="reader"><details class="toc" ${matchMedia("(min-width:651px)").matches ? "open" : ""}><summary>In this video · ${video.sections.length} sections</summary><ol>${toc}</ol></details><article>${video.sections
    .map(
      (s) =>
        `<section class="section" id="${esc(s.id)}"><a class="timestamp" href="https://www.youtube.com/watch?v=${id}&t=${Math.floor(s.start)}">${time(s.start)} ↗</a><h2>${esc(s.title)}</h2><div class="repos">${s.repositories
          .filter((url) =>
            /^https:\/\/github\.com\/[\w.-]+\/[\w.-]+$/.test(url),
          )
          .map(
            (url) =>
              `<a href="${esc(url)}">${esc(url.replace("https://github.com/", ""))} ↗</a>`,
          )
          .join(
            "",
          )}</div>${s.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("") || "<p>No caption text is available for this section.</p>"}</section>`,
    )
    .join("")}</article></div>`;
  if (section && /^s\d+$/.test(section))
    document.getElementById(section)?.scrollIntoView();
  else window.scrollTo(0, 0);
}
async function render() {
  const generation = ++routeGeneration;
  try {
    index ||= await json("./data/index.json");
    if (generation !== routeGeneration) return;
    const [path, query] = location.hash.slice(1).split("?");
    if (path?.startsWith("/video/"))
      await reader(
        path.slice(7),
        new URLSearchParams(query).get("section"),
        generation,
      );
    else library();
  } catch (error) {
    if (generation === routeGeneration)
      main.innerHTML = `<p class="notice" role="alert">${esc(error.message)}</p><a href="#/">Return to archive</a>`;
  }
}
window.addEventListener("hashchange", render);
render();
