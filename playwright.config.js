const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 60000,

  reporter: [
    ['list'],
    ['allure-playwright', { outputFolder: 'allure-results/js', detail: true }] // ✅ important
  ],

  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,
  },
});