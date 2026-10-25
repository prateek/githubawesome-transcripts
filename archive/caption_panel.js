(() => {
  function initial(name) {
    const prefix = `var ${name} = `;
    const script = Array.from(document.scripts).find((s) =>
      s.textContent.startsWith(prefix),
    );
    const match = script?.textContent
      .slice(prefix.length)
      .match(/^(.*?);(?:var |$)/s);
    return match ? JSON.parse(match[1]) : {};
  }
  const data = initial("ytInitialData");
  const content =
    data.contents?.twoColumnWatchNextResults?.results?.results?.contents || [];
  const secondary = content.find(
    (x) => x.videoSecondaryInfoRenderer,
  )?.videoSecondaryInfoRenderer;
  const attributed = secondary?.attributedDescription;
  let description = attributed?.content || "";
  for (const run of [...(attributed?.commandRuns || [])].sort(
    (a, b) => b.startIndex - a.startIndex,
  )) {
    const raw = run.onTap?.innertubeCommand?.urlEndpoint?.url;
    if (!raw) continue;
    const url = new URL(raw, "https://www.youtube.com");
    const target =
      url.hostname === "www.youtube.com" && url.pathname === "/redirect"
        ? url.searchParams.get("q")
        : url.href;
    if (target && /^https?:\/\//.test(target)) {
      description =
        description.slice(0, run.startIndex) +
        target +
        description.slice(run.startIndex + run.length);
    }
  }
  const meta = (name) =>
    document.querySelector(`meta[itemprop="${name}"]`)?.content;
  const isoDuration = meta("duration")?.match(
    /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/,
  );
  const duration = isoDuration
    ? Number(isoDuration[1] || 0) * 3600 +
      Number(isoDuration[2] || 0) * 60 +
      Number(isoDuration[3] || 0)
    : null;
  const modern = Array.from(
    document.querySelectorAll("transcript-segment-view-model"),
  );
  const segments = modern.length
    ? modern.map((x) => ({
        timestamp: x
          .querySelector(".ytwTranscriptSegmentViewModelTimestamp")
          ?.textContent.trim(),
        text: x.querySelector('span[role="text"]')?.textContent.trim(),
      }))
    : Array.from(
        document.querySelectorAll("ytd-transcript-segment-renderer"),
      ).map((x) => ({
        timestamp: x.querySelector(".segment-timestamp")?.textContent.trim(),
        text: x.querySelector(".segment-text")?.textContent.trim(),
      }));
  return {
    metadata: {
      id: meta("identifier"),
      title: document.querySelector('meta[property="og:title"]')?.content,
      channel_id:
        secondary?.owner?.videoOwnerRenderer?.navigationEndpoint?.browseEndpoint
          ?.browseId,
      published: meta("datePublished")?.slice(0, 10),
      duration,
      description,
      chapters: [],
    },
    segments,
  };
})();
