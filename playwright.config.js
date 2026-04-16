// playwright.config.js

const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  timeout: 60000, // 60 seconds per test

  retries: process.env.CI ? 2 : 0, // retries only in CI

  use: {
    headless: !!process.env.CI, // ✅ KEY FIX (CI runs headless)
    viewport: { width: 1280, height: 720 },
    actionTimeout: 15000,
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // Optional: enable later
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],

  reporter: [
    ['html', { open: 'never' }], // HTML report
    ['list'], // console output
  ],
});