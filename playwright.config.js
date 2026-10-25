import { defineConfig, devices } from "@playwright/test";
export default defineConfig({
  testDir: "./tests/browser",
  use: { baseURL: "http://127.0.0.1:18765", trace: "retain-on-failure" },
  webServer: {
    command:
      "uv run python -m http.server 18765 --bind 127.0.0.1 --directory dist",
    url: "http://127.0.0.1:18765",
    reuseExistingServer: false,
  },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"] } },
    { name: "mobile-webkit", use: { ...devices["iPhone 13"] } },
  ],
});
