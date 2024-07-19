import { test } from "@playwright/test";
import { Application } from "../app/";

export const testBaseFixture = test.extend<{ app: Application }>({
  app: async ({ page }, use) => {
    const app = new Application(page);
    await use(app);
  },
});

