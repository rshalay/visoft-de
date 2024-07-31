import { expect } from "@playwright/test";
import { testBaseFixture } from "../fixtures";

testBaseFixture('Check Base Features page is loaded',
    {tag: ['@home'],
    annotation: [
        { type: 'Owner', description: 'Roman Shalay'},
        { type: 'JiraID', description: 'https://jira.visoft.de:8443/browse/' 
      }]
    },
    async ({ web }) => {
      await web.visoftPremium.open();
      await web.visoftPremium.openBestFeatures();
      await web.visoftPremium.expectThatBestFeaturesTitleIsVisible();
    });

    testBaseFixture('Check System Requirements page is loaded',
      {tag: ['@home'],
      annotation: [
          { type: 'Owner', description: 'Roman Shalay'},
          { type: 'JiraID', description: 'https://jira.visoft.de:8443/browse/' 
        }]
      },
      async ({ web }) => {
        await web.visoftPremium.open();
        await web.visoftPremium.openSystemRequirements();
        await web.visoftPremium.expectThatSystemRequirementsIsVisible();
      });

      