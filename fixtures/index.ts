import { test, expect  } from "@playwright/test";
import { WebApplication } from "../web";

export const testBaseFixture = test.extend<{ web: WebApplication }>({
  web: async ({ page }, use) => {
    const app = new WebApplication(page);
    await use(app);
  },
});

