import { test, expect } from "@playwright/test";
const section = {
  id: "s001",
  title: "Widget",
  start: 0,
  repositories: ["https://github.com/example/widget"],
  paragraphs: [
    "A useful tool with a searchable unusual phrase. <script>window.injected=true</script>",
  ],
};
const video = {
  id: "abcdefghijk",
  title: "Two useful projects",
  published: "2026-10-25",
  edition: "captions",
  sections: [section],
};
test.beforeEach(async ({ page }) => {
  await page.route("**/data/index.json", (route) =>
    route.fulfill({
      json: {
        counts: { available: 1, edited: 0, discovered: 1 },
        videos: [video],
        pending: [],
      },
    }),
  );
  await page.route("**/data/search.json", (route) =>
    route.fulfill({
      json: [
        { video_id: video.id, section_id: "s001", text: section.paragraphs[0] },
      ],
    }),
  );
  await page.route("**/data/editions/abcdefghijk.json", (route) =>
    route.fulfill({ json: video }),
  );
});
test("search, read, source links, downloads and mobile layout", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("searchbox").fill("no match");
  await expect(
    page.getByText("No matching transcripts. Try another project name."),
  ).toBeVisible();
  await page.getByLabel("Search in", { exact: true }).selectOption("full");
  await page.getByRole("searchbox").fill("unusual phrase");
  await page.getByRole("link", { name: "Read transcript →" }).click();
  await expect(page.getByRole("heading", { name: "Widget" })).toBeVisible();
  await expect(page.getByRole("link", { name: "0:00 ↗" })).toHaveAttribute(
    "href",
    "https://www.youtube.com/watch?v=abcdefghijk&t=0",
  );
  await expect(page.getByRole("link", { name: "Markdown ↓" })).toHaveAttribute(
    "href",
    "./data/editions/abcdefghijk.md",
  );
  expect(await page.evaluate(() => window.injected)).toBeUndefined();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await page.reload();
  await expect(page.getByRole("heading", { name: video.title })).toBeVisible();
  await page.getByRole("link", { name: "← All transcripts" }).click();
  await expect(page.getByRole("searchbox")).toBeVisible();
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
