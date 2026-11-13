import { test, expect } from "@playwright/test";
const intro = {
  id: "s001",
  title: "Intro",
  start: 0,
  repositories: [],
  paragraphs: ["Welcome to the show."],
};
const widget = {
  id: "s002",
  title: "Widget",
  start: 12,
  repositories: ["https://github.com/example/widget"],
  paragraphs: [
    "A useful tool with a searchable unusual phrase. <script>window.injected=true</script>",
  ],
};
const gadget = {
  id: "s003",
  title: "Gadget",
  start: 40,
  repositories: ["https://github.com/example/gadget.git"],
  paragraphs: ["Gadget does one thing well."],
};
const video = {
  id: "abcdefghijk",
  title: "GitHub Trending Weekly #7: widget, gadget",
  published: "2026-10-25",
  duration: 90,
  word_count: 460,
  edition: "captions",
  sections: [intro, widget, gadget],
};
const rows = [
  {
    key: "example/widget",
    title: "Widget",
    pitch: "A trusted helper for builders.",
    pitch_source: "github",
    language: "Rust",
    stars: 1500,
    stars_then: 900,
    pushed: "2026-10-20T10:00:00Z",
    first: "2026-10-25",
    added: "2026-10-26T00:00:00+00:00",
    features: 2,
    again: "2026-12-01",
    series: ["Trending Weekly", "Monthly"],
    topics: ["cli"],
    weeks: [0, 2, 5],
  },
  {
    key: "example/gadget",
    title: "Gadget",
    pitch: "Does one thing well, in Go.",
    pitch_source: "captions",
    language: "Go",
    stars: 90000,
    first: "2026-10-25",
    added: "2026-10-26T00:00:00+00:00",
    features: 1,
    series: ["Trending Weekly"],
    archived: true,
  },
  {
    key: "old/thing",
    title: "Thing",
    first: "2026-09-01",
    added: "2026-09-02T00:00:00+00:00",
    series: ["Self-Hosted"],
    gone: "2026-10-01",
  },
];
// Enough older rows that the list has to be extended to reach the last ones.
const filler = Array.from({ length: 120 }, (_, i) => ({
  key: `bulk/repo-${i}`,
  title: `Bulk ${i}`,
  pitch: `Filler repository number ${i}.`,
  pitch_source: "github",
  first: "2026-08-01",
  added: "2026-08-02T00:00:00+00:00",
  series: ["Trending Today"],
}));
const detail = {
  ...rows[0],
  url: "https://github.com/example/widget",
  aliases: ["example/old-widget"],
  license: "MIT",
  created: "2025-01-05T00:00:00Z",
  homepage: "https://widget.example",
  mentions: [
    {
      video: "zyxwvutsrqp",
      section: "s004",
      start: 200,
      date: "2026-11-01",
      series: "Monthly",
      heading: "Monthly #3",
      video_title: "GitHub Trending monthly #3",
      recap: true,
      edited: true,
      stars: null,
      paragraphs: ["A useful tool, again."],
    },
    {
      video: "abcdefghijk",
      section: "s002",
      start: 12,
      date: "2026-10-25",
      series: "Trending Weekly",
      heading: "Trending Weekly #7",
      video_title: video.title,
      recap: false,
      edited: false,
      stars: 900,
      paragraphs: widget.paragraphs,
    },
  ],
};
test.beforeEach(async ({ page }) => {
  await page.route("**/data/repos.json", (route) =>
    route.fulfill({
      json: {
        fetched: "2026-10-25T00:00:00+00:00",
        videos: 1,
        repositories: [...rows, ...filler],
        aliases: { "example/old-widget": "example/widget" },
      },
    }),
  );
  await page.route("**/data/repos/example/widget.json", (route) =>
    route.fulfill({ json: detail }),
  );
  await page.route("**/data/repos/old/thing.json", (route) =>
    route.fulfill({
      json: {
        ...rows[2],
        url: "https://github.com/old/thing",
        topics: [],
        mentions: [],
      },
    }),
  );
  await page.route("**/data/index.json", (route) =>
    route.fulfill({
      json: {
        counts: { available: 1, edited: 0, discovered: 2 },
        videos: [video],
        pending: [
          { id: "lmnopqrstuv", title: "Queued video", status: "pending" },
        ],
      },
    }),
  );
  await page.route("**/data/search.json", (route) =>
    route.fulfill({
      json: video.sections.map((s) => ({
        video_id: video.id,
        section_id: s.id,
        text: s.paragraphs[0],
        ...(s.repositories.length
          ? { repo: `example/${s.title.toLowerCase()}` }
          : {}),
      })),
    }),
  );
  await page.route("**/data/editions/abcdefghijk.json", (route) =>
    route.fulfill({ json: video }),
  );
});
const names = (page) => page.locator("#list b");

test("the feed lists repositories by first feature, and search finds written fields then quotes", async ({
  page,
}) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: "Repositories from GitHub Awesome." }),
  ).toBeVisible();
  await expect(names(page).first()).toHaveText("Widget");
  await expect(page.locator(".day h2").first()).toHaveText("Oct 25, 2026");
  await expect(page.locator("#n")).toHaveText("123 repositories");
  await expect(page.getByText("Featured again Dec 1, 2026")).toBeVisible();
  await expect(page.getByText("Pitch from captions")).toBeVisible();
  const search = page.getByRole("searchbox");
  await search.fill("no such thing anywhere");
  await expect(page.getByText("No repositories match.")).toBeVisible();
  // A word matches from its start: "rust" is a language here, not part of "trusted".
  await search.fill("rust");
  await expect(names(page)).toHaveText(["Widget"]);
  await search.fill("trust");
  await expect(names(page)).toHaveText(["Widget"]);
  await search.fill("usted");
  await expect(page.locator("#n")).toHaveText("0 repositories");
  await search.fill("well go");
  await expect(names(page)).toHaveText(["Gadget"]);
  await search.fill("phrase unusual");
  await expect(names(page)).toHaveText(["Widget"]);
  await expect(page).toHaveURL(/#\/\?q=phrase\+unusual$/);
  await page.reload();
  await expect(page.getByRole("searchbox")).toHaveValue("phrase unusual");
  await expect(names(page)).toHaveText(["Widget"]);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
});

test("sort and filters live in the address", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Stars" }).click();
  await expect(names(page).first()).toHaveText("Gadget");
  await expect(page.getByText("★ 90k")).toBeVisible();
  await expect(page.getByText("First featured Oct 25, 2026")).toHaveCount(2);
  await page.getByLabel("Featured in").selectOption("Self-Hosted");
  await expect(names(page)).toHaveText(["Thing"]);
  await expect(page.getByText("No longer on GitHub")).toBeVisible();
  await expect(page).toHaveURL(/sort=stars&in=Self-Hosted$/);
  await page.getByLabel("Featured in").selectOption("");
  await page.getByLabel("Language").selectOption("Go");
  await expect(names(page)).toHaveText(["Gadget"]);
});

test("a repository page gathers its mentions and leads to the transcript", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("link", { name: /Widget/ }).click();
  await expect(page).toHaveURL(/#\/repo\/example\/widget$/);
  await expect(page.getByRole("heading", { name: "Widget" })).toBeVisible();
  await expect(page.getByText("A trusted helper for builders.")).toBeVisible();
  const github = page.getByRole("link", { name: "Open on GitHub ↗" });
  await expect(github).toHaveAttribute(
    "href",
    "https://github.com/example/widget",
  );
  await expect(github).toHaveAttribute("target", "_blank");
  await expect(
    page.getByText("★ 1.5k now · ★ 900 when first featured"),
  ).toBeVisible();
  await expect(page.getByText("MIT", { exact: true })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Featured once, plus 1 recap" }),
  ).toBeVisible();
  await expect(page.locator(".mention .tag")).toHaveText(["Recap"]);
  await expect(page.getByText("Captions, not yet copy-edited.")).toHaveCount(1);
  await expect(
    page.getByRole("link", { name: "Watch from 0:12" }),
  ).toHaveAttribute("href", "https://www.youtube.com/watch?v=abcdefghijk&t=12");
  expect(await page.evaluate(() => window.injected)).toBeUndefined();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await page
    .getByRole("link", {
      name: /Read in the transcript of “GitHub Trending Weekly #7/,
    })
    .click();
  await expect(page).toHaveURL(/#\/video\/abcdefghijk\?section=s002$/);
  await expect(page.getByRole("heading", { name: "Widget" })).toBeInViewport();
  await expect(
    page.getByText("★ 1.5k · Rust · 7 commits in 12 weeks"),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Repository page →" }).first(),
  ).toHaveAttribute("href", "#/repo/example/widget");
  await expect(page.getByRole("link", { name: "Markdown ↓" })).toHaveAttribute(
    "href",
    "./data/editions/abcdefghijk.md",
  );
  await page.getByRole("button", { name: "Next chapter" }).click();
  await expect(page).toHaveURL(/section=s003/);
  await expect(page.locator("#now-idx")).toHaveText("3/3");
  await page.reload();
  await expect(page.getByRole("heading", { name: "Gadget" })).toBeInViewport();
  await expect(page.locator("#now-idx")).toHaveText("3/3");
});

test("a renamed repository's old address reaches its page", async ({
  page,
}) => {
  await page.goto("/#/repo/Example/Old-Widget");
  await expect(page.getByRole("heading", { name: "Widget" })).toBeVisible();
  await page.goto("/#/repo/nobody/nothing");
  await expect(page.getByRole("alert")).toContainText("not in the catalogue");
});

test("a repository without GitHub data says so", async ({ page }) => {
  await page.goto("/#/repo/old/thing");
  await expect(
    page.getByText("No longer on GitHub (first missing Oct 1, 2026)"),
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: "Featured" })).toBeVisible();
});

test("Back returns to the same place in an extended list", async ({ page }) => {
  await page.goto("/");
  await page
    .getByRole("button", { name: /Show more/ })
    .scrollIntoViewIfNeeded();
  const far = page.getByRole("link", { name: /Bulk 95/ });
  await far.scrollIntoViewIfNeeded();
  await expect(far).toBeInViewport();
  await page
    .getByRole("link", { name: /Widget/ })
    .first()
    .waitFor({ state: "attached" });
  const before = await page.evaluate(() => scrollY);
  expect(before).toBeGreaterThan(1000);
  await page.goto("/#/videos");
  await expect(page.getByRole("heading", { name: "Videos." })).toBeVisible();
  await page.goBack();
  await expect(far).toBeInViewport();
  const after = await page.evaluate(() => scrollY);
  expect(Math.abs(after - before)).toBeLessThan(200);
});

test("repositories that arrived since the last visit are marked", async ({
  page,
}) => {
  await page.addInitScript(() => {
    if (!localStorage.getItem("visit"))
      localStorage.setItem(
        "visit",
        JSON.stringify({ at: Date.parse("2026-10-01T00:00:00Z") }),
      );
  });
  await page.goto("/");
  await expect(page.locator("#list .tag")).toHaveText(["New", "New"]);
  await expect(page.getByText("Seen on your last visit")).toBeVisible();
  // A reload is the same visit, so the mark stays where it was.
  await page.reload();
  await expect(page.locator("#list .tag")).toHaveText(["New", "New"]);
});

test("videos page lists transcripts and the queue", async ({ page }) => {
  await page.goto("/#/videos");
  await expect(
    page.getByRole("link", { name: /GitHub Trending Weekly #7/ }),
  ).toHaveAttribute("href", "#/video/abcdefghijk");
  await expect(page.getByText("2 repositories")).toBeVisible();
  await page.getByText("1 videos waiting for transcripts").click();
  await expect(page.getByRole("link", { name: "Queued video" })).toBeVisible();
  await page.getByRole("link", { name: /GitHub Trending Weekly #7/ }).click();
  await page.getByRole("link", { name: "← Back" }).click();
  await expect(page.getByRole("heading", { name: "Videos." })).toBeVisible();
});

test("a failed load says so", async ({ page }) => {
  await page.route("**/data/repos.json", (route) =>
    route.fulfill({ status: 503, body: "unavailable" }),
  );
  await page.goto("/");
  await expect(page.getByRole("alert")).toContainText("could not be loaded");
});
