import { test } from "@playwright/test";
import { Application } from "../app/";
import { randomUUID } from "node:crypto";
// import { UserCreateRequest, UserCreatedResponse } from "../api/models;


export const baseFixture = test.extend<{ app: Application }>({
  app: async ({ page }, use) => {
    const app = new Application(page);
    await use(app);
  },
});

export type DefaultUserOption = {
  defaultUser: {
    email: string;
    password: string;
  };
};

export const loggedUserFixture = baseFixture.extend<
  DefaultUserOption & { app: Application }
>({
  defaultUser: [
    {
      email: "test+e1f76f13-0f04-4f2e-86d8-0e78e3df2ddd@test.com",
      password: "xotabu4@gmail.com",
    },
    {
      option: true,
    },
  ],
  app: async ({ app, defaultUser }, use) => {
    // await app.signIn.open();
    // await app.signIn.signIn(defaultUser);
    // await app.accountDetails.expectLoaded();
    await app.home.header.openShop();

    await use(app);
    // Cleanup
    console.log("Post fixture!", defaultUser);
  },
});

// interface UserContext {
//   user: { userModel: UserCreateRequest; createdUser: UserCreatedResponse };
// }

// export const loggedInAsNewUserFixture = baseFixture.extend<UserContext>({
//   user: async ({ app }, use) => {
//     const userModel = {
//       isSubscribed: false,
//       email: `test+${randomUUID()}@test.com`,
//       firstName: "test",
//       lastName: "test",
//       password: "xotabu4@gmail.com",
//     };

//     const createdUser = await app.api.auth.createNewUser(userModel);
//     await app.headlessLogin(userModel);
//     await app.home.open();

//     await use({ userModel, createdUser });
//   },
// });