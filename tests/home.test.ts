import { baseFixture } from '../fixtures';

baseFixture('Home page is loaded', async ({ app, page}) => {
  // await page.goto('https://playwright.dev/');
  await app.home.open();
  await app.home.isLoaded()
});
