import { test, expect } from "@playwright/test";
import { readFileSync } from "node:fs";

const extract = readFileSync(
  new URL("../../archive/caption_panel.js", import.meta.url),
  "utf8",
);

test("retains identity and title when the blocked player omits all meta tags", async ({
  page,
}) => {
  const data = {
    currentVideoEndpoint: { watchEndpoint: { videoId: "abcdefghijk" } },
    contents: {
      twoColumnWatchNextResults: {
        results: {
          results: {
            contents: [
              {
                videoPrimaryInfoRenderer: {
                  title: { runs: [{ text: "Projects" }] },
                  dateText: { simpleText: "Oct 25, 2026" },
                },
              },
              {
                videoSecondaryInfoRenderer: {
                  owner: {
                    videoOwnerRenderer: {
                      navigationEndpoint: {
                        browseEndpoint: { browseId: "channel" },
                      },
                    },
                  },
                },
              },
            ],
          },
        },
      },
    },
  };
  await page.setContent(
    `<script>var ytInitialData = ${JSON.stringify(data)};</script>`,
  );
  const result = await page.evaluate(extract);
  expect(result.metadata.id).toBe("abcdefghijk");
  expect(result.metadata.channel_id).toBe("channel");
  expect(result.metadata.title).toBe("Projects");
  expect(result.metadata.published_label).toBe("Oct 25, 2026");
  expect(result.metadata.duration).toBeNull();
});

test("extracts public transcript rows and expands repository links without player metadata", async ({
  page,
}) => {
  const description = "0:00 Tool https://github.com/example/pro...";
  const start = description.indexOf("https:");
  const data = {
    contents: {
      twoColumnWatchNextResults: {
        results: {
          results: {
            contents: [
              {
                videoSecondaryInfoRenderer: {
                  owner: {
                    videoOwnerRenderer: {
                      navigationEndpoint: {
                        browseEndpoint: { browseId: "channel" },
                      },
                    },
                  },
                  attributedDescription: {
                    content: description,
                    commandRuns: [
                      {
                        startIndex: start,
                        length: description.length - start,
                        onTap: {
                          innertubeCommand: {
                            urlEndpoint: {
                              url: "https://www.youtube.com/redirect?redir_token=private&q=https%3A%2F%2Fgithub.com%2Fexample%2Fproject",
                            },
                          },
                        },
                      },
                    ],
                  },
                },
              },
            ],
          },
        },
      },
    },
  };
  await page.setContent(`<meta itemprop="identifier" content="abcdefghijk"><meta property="og:title" content="Projects">
    <meta itemprop="duration" content="PT2M"><meta itemprop="datePublished" content="2026-10-25T00:00:00Z">
    <script>var ytInitialData = ${JSON.stringify(data)};</script>
    <transcript-segment-view-model><div class="ytwTranscriptSegmentViewModelTimestamp">0:00</div>
    <div class="ytwTranscriptSegmentViewModelTimestampA11yLabel">0 seconds</div><span role="text">Hello world.</span></transcript-segment-view-model>`);
  const result = await page.evaluate(extract);
  expect(result.metadata).toEqual({
    id: "abcdefghijk",
    channel_id: "channel",
    title: "Projects",
    duration: 120,
    published: "2026-10-25",
    published_label: null,
    description: "0:00 Tool https://github.com/example/project",
    chapters: [],
  });
  expect(result.segments).toEqual([
    { timestamp: "0:00", text: "Hello world." },
  ]);
  expect(JSON.stringify(result)).not.toContain("private");
});
