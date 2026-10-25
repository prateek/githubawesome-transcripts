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
const github = {
  fetched: "2026-10-25T00:00:00+00:00",
  repositories: {
    "example/widget": {
      name: "example/widget",
      stars: 1500,
      forks: 3,
      archived: false,
      language: "Rust",
      weeks: [0, 2, 5],
    },
    "example/gadget": {
      name: "example/gadget",
      stars: 90000,
      forks: 9,
      archived: false,
      language: "Go",
      weeks: [1, 1, 1],
    },
  },
};
test.beforeEach(async ({ page }) => {
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
      })),
    }),
  );
  await page.route("**/data/github.json", (route) =>
    route.fulfill({ json: github }),
  );
  await page.route("**/data/editions/abcdefghijk.json", (route) =>
    route.fulfill({ json: video }),
  );
});
test("search, read, source links, downloads and mobile layout", async ({
  page,
}) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: "Trending Weekly #7" }),
  ).toBeVisible();
  await page.getByRole("searchbox").fill("no match");
  await expect(
    page.getByText("No matching projects. Try another name or owner."),
  ).toBeVisible();
  await page.getByRole("searchbox").fill("unusual phrase");
  await page
    .getByRole("link", { name: /Widget/ })
    .first()
    .click();
  await expect(page.getByRole("heading", { name: "Widget" })).toBeVisible();
  await expect(page).toHaveURL(/section=s002/);
  await expect(
    page.getByRole("link", { name: "Watch from 0:12" }),
  ).toHaveAttribute("href", "https://www.youtube.com/watch?v=abcdefghijk&t=12");
  await expect(page.getByRole("link", { name: "Markdown ↓" })).toHaveAttribute(
    "href",
    "./data/editions/abcdefghijk.md",
  );
  await expect(
    page.getByText("★ 1.5k · Rust · 7 commits in 12 weeks"),
  ).toBeVisible();
  expect(await page.evaluate(() => window.injected)).toBeUndefined();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await page.getByRole("button", { name: "Next chapter" }).click();
  await expect(page).toHaveURL(/section=s003/);
  await page.reload();
  await expect(page.getByRole("heading", { name: "Gadget" })).toBeInViewport();
  await page.getByRole("link", { name: "← All episodes" }).click();
  await expect(page.getByRole("searchbox")).toBeVisible();
});
test("projects can be sorted by stars and lead back to the list", async ({
  page,
}) => {
  await page.goto("/#/projects");
  const names = page.locator(".plist b");
  await expect(names).toHaveText(["Widget", "Gadget"]);
  await page.getByRole("button", { name: "Stars" }).click();
  await expect(names).toHaveText(["Gadget", "Widget"]);
  await expect(page.getByText("★ 90k")).toBeVisible();
  await page.getByRole("searchbox").fill("widget");
  await expect(names.filter({ visible: true })).toHaveText(["Widget"]);
  await names.filter({ visible: true }).click();
  await page.getByRole("link", { name: "← All projects" }).click();
  await expect(page).toHaveURL(/#\/projects$/);
});
test("missing stats leave the reader usable", async ({ page }) => {
  await page.route("**/data/github.json", (route) =>
    route.fulfill({ status: 404, body: "missing" }),
  );
  await page.goto("/#/projects");
  await expect(page.getByText("No GitHub stats").first()).toBeVisible();
});
test("empty archive and failed fetch have explicit states", async ({
  page,
}) => {
  await page.route("**/data/index.json", (route) =>
    route.fulfill({
      json: {
        counts: { available: 0, edited: 0, discovered: 0 },
        videos: [],
        pending: [],
      },
    }),
  );
  await page.goto("/");
  await expect(page.getByText(/archive is getting started/)).toBeVisible();
  await page.route("**/data/index.json", (route) =>
    route.fulfill({ status: 503, body: "unavailable" }),
  );
  await page.reload();
  await expect(page.getByRole("alert")).toContainText("could not be loaded");
});
