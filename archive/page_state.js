(() => {
  function initial(name) {
    const prefix = `var ${name} = `;
    const script = Array.from(document.scripts).find((s) =>
      s.textContent.startsWith(prefix),
    );
    const match = script?.textContent
      .slice(prefix.length)
      .match(/^(.*?);(?:var |$)/s);
    try {
      return match ? JSON.parse(match[1]) : null;
    } catch {
      return null;
    }
  }
  const player = initial("ytInitialPlayerResponse");
  const text = (document.body?.innerText || "").replace(/\s+/g, " ").trim();
  const buttons = Array.from(document.querySelectorAll("button")).map((x) =>
    x.innerText.trim(),
  );
  return {
    path: location.pathname + location.search,
    title: document.title,
    ready_state: document.readyState,
    has_initial_data: !!initial("ytInitialData"),
    has_player_response: !!player,
    playability_status: player?.playabilityStatus?.status || null,
    playability_reason: player?.playabilityStatus?.reason || null,
    duration_meta:
      document.querySelector('meta[itemprop="duration"]')?.content || null,
    description_expander: !!document.querySelector("#expand"),
    transcript_button: buttons.includes("Show transcript"),
    modern_rows: document.querySelectorAll("transcript-segment-view-model")
      .length,
    legacy_rows: document.querySelectorAll("ytd-transcript-segment-renderer")
      .length,
    block_signals: [
      "not a bot",
      "unusual traffic",
      "Before you continue",
      "Sign in to confirm",
      "Video unavailable",
    ].filter((phrase) => text.toLowerCase().includes(phrase.toLowerCase())),
    text_sample: text.slice(0, 300),
  };
})();
