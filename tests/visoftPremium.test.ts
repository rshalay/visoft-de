import { testBaseFixture } from "../fixtures";

  testBaseFixture(
    "Check Base Features part is in Viewport",
    {
      tag: ["@ViSoftPremium", "@Desktop"],
      annotation: [
        { type: "Owner", description: "Roman Shalay" },
        { type: "JiraID", description: "https://jira.visoft.de:8443/browse/" },
      ],
    },
    async ({ web }) => {
      await web.visoftPremium.open();
      await web.visoftPremium.openBestFeatures();
      await web.visoftPremium.expectThatBestFeaturesTitleIsInViewport();
    }
  );

  testBaseFixture(
    "Check System Requirements part is in Viewport",
    {
      tag: ["@ViSoftPremium", "@Desktop"],
      annotation: [
        { type: "Owner", description: "Roman Shalay" },
        { type: "JiraID", description: "https://jira.visoft.de:8443/browse/" },
      ],
    },
    async ({ web }) => {
      await web.visoftPremium.open();
      await web.visoftPremium.openSystemRequirements();
      await web.visoftPremium.expectThatSystemRequirementsIsInViewport();
    }
  );

  testBaseFixture(
    "Check Customer References part is in Viewport",
    {
      tag: ["@ViSoftPremium", "@Desktop"],
      annotation: [
        { type: "Owner", description: "Roman Shalay" },
        { type: "JiraID", description: "https://jira.visoft.de:8443/browse/" },
      ],
    },
    async ({ web }) => {
      await web.visoftPremium.open();
      await web.visoftPremium.openCustomerReferences();
      await web.visoftPremium.expectThatCustomerReferencesIsInViewport();
    }
  );

  testBaseFixture(
    "Check ViSoft Ultimate page is in Viewport",
    {
      tag: ["@ViSoftPremium", "@Desktop"],
      annotation: [
        { type: "Owner", description: "Roman Shalay" },
        { type: "JiraID", description: "https://jira.visoft.de:8443/browse/" },
      ],
    },
    async ({ web }) => {
      await web.visoftPremium.open();
      await web.visoftPremium.openViSoftUltimate();
      await web.visoftPremium.expectThatViSoftUltimateIsInViewport();
    }
  );

  testBaseFixture(
    "Check ViSoft Live page is in Viewport",
    {
      tag: ["@ViSoftPremium", "@Desktop"],
      annotation: [
        { type: "Owner", description: "Roman Shalay" },
        { type: "JiraID", description: "https://jira.visoft.de:8443/browse/" },
      ],
    },
    async ({ web }) => {
      await web.visoftPremium.open();
      await web.visoftPremium.openViSoftLive();
      await web.visoftPremium.expectThatViSoftLiveIsInViewport();
    }
  );

  testBaseFixture(
    "Check ViSoft Photo Tuning page is in Viewport",
    {
      tag: ["@ViSoftPremium", "@Desktop"],
      annotation: [
        { type: "Owner", description: "Roman Shalay" },
        { type: "JiraID", description: "https://jira.visoft.de:8443/browse/" },
      ],
    },
    async ({ web }) => {
      await web.visoftPremium.open();
      await web.visoftPremium.openViSoftPhotoTuning();
      await web.visoftPremium.expectThatViSoftPhotoTuningIsInViewport();
    }
  );

  testBaseFixture(
    "Check Free demo version text is in Viewport and clickable button",
    {
      tag: ["@ViSoftPremium", "@Desktop"],
      annotation: [
        { type: "Owner", description: "Roman Shalay" },
        { type: "JiraID", description: "https://jira.visoft.de:8443/browse/" },
      ],
    },
    async ({ web }) => {
      await web.visoftPremium.open();
      await web.visoftPremium.openViSoftPremiumSubmenu();
      await web.visoftPremium.checkTextForFreeDemoVersion();
      await web.visoftPremium.clickOnGetDemo();
      await web.visoftPremium.expectThatFreeDemoVersionTextIsInViewport();
    }
  );