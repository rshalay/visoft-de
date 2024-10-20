import { test } from "@playwright/test";
import { testBaseFixture } from '../fixtures/';

  testBaseFixture(
    'Home page is loaded', 
    {    
      tag: ['@home', "@Desktop"],
      annotation: [
          { type: 'Owner', description: 'Roman Shalay'},
          { type: 'JiraID', description: 'https://jira.visoft.de:8443/browse/'}
        ]
      },  
    async ({ web }) => {  
      await web.home.open();
      await web.home.openViSoftPremium();
      await web.home.expectThatViSoftPremiumPageOpened();
      await web.home.clickOnLogo();
      await web.home.isLoaded();
  });

  testBaseFixture(
    'Check carousel buttons and chevron', 
    {    
      tag: ['@home', "@Desktop"],
      annotation: [
          { type: 'Owner', description: 'Roman Shalay'},
          { type: 'JiraID', description: 'https://jira.visoft.de:8443/browse/' 
        }]
      },  
    async ({ web }) => {  
      await web.home.open();
      await web.home.expectThatButtonInCarouselIsClickedAndPageOpened();
      await web.home.expectThatChevronIsClickedAndPageOpened();
  });

  testBaseFixture(
    'Chech text in Tile / Sanitary / Digital section', 
    {    
      tag: ['@home', "@Desktop"],
      annotation: [
          { type: 'Owner', description: 'Roman Shalay'},
          { type: 'JiraID', description: '' 
        }]
      },  
    async ({ web }) => {  
      await web.home.open();
      await web.home.expectThatTextInTileSanitaryDigitalSectionIsCorrect();
  });

  testBaseFixture(
    'Check text in ViSoft Premium 2024 section', 
    {    
      tag: ['@home', "@Desktop"],
      annotation: [
          { type: 'Owner', description: 'Roman Shalay'},
          { type: 'JiraID', description: '' 
        }]
      },  
    async ({ web }) => {  
      await web.home.open();
      await web.home.expectThatTextInViSoftPremium2024SectionIsCorrect();
  });

  testBaseFixture(
    'Check Get demo in ViSoft Premium 2024 section', 
    {    
      tag: ['@home', "@Desktop"],
      annotation: [
          { type: 'Owner', description: 'Roman Shalay'},
          { type: 'JiraID', description: '' 
        }]
      },  
    async ({ web }) => {  
      await web.home.open();
      await web.home.clickOnGetDemoButton();
      await web.home.expectThatGetDemoFormPageOpened();
  });

  testBaseFixture(
    'Check Learn more in ViSoft Premium 2024 section', 
    {    
      tag: ['@home', "@Desktop"],
      annotation: [
          { type: 'Owner', description: 'Roman Shalay'},
          { type: 'JiraID', description: '' 
        }]
      },  
    async ({ web, page }) => {  
      await web.home.open();
      await web.home.clickOnLearnMoreButton();
      const newPage = await page.waitForEvent('popup');
      await web.home.expectThatLearnMorePageOpened(newPage);
  });

  testBaseFixture(
    'Check text in 7 steps for sales success section', 
    {    
      tag: ['@home', "@Desktop"],
      annotation: [
          { type: 'Owner', description: 'Roman Shalay'},
          { type: 'JiraID', description: '' 
        }]
      },  
    async ({ web }) => {  
      await web.home.open();
      await web.home.expectThatTextIn7StepsForSalesSuccessSectionIsCorrect();
  });

  testBaseFixture(
    'Check text and clickability of the ViSoft Vision button in 01 section', 
    {    
      tag: ['@home', "@Desktop"],
      annotation: [
          { type: 'Owner', description: 'Roman Shalay'},
          { type: 'JiraID', description: '' 
        }]
      },  
    async ({ web }) => {  
      await web.home.open();
      await web.home.expectThatTextIn01SectionIsCorrect();
      await web.home.clickOnViSoftVisionButton();
      await web.home.expectThatViSoftVisionPageOpened();
  });

  testBaseFixture(
    'Check text and clickability of the ViSoft ViPlan button in 02 section', 
    {    
      tag: ['@home', "@Desktop"],
      annotation: [
          { type: 'Owner', description: 'Roman Shalay'},
          { type: 'JiraID', description: '' 
        }]
      },  
    async ({ web }) => {  
      await web.home.open();
      await web.home.expectThatTextIn02SectionIsCorrect();
      await web.home.clickOnViSoftViPlanButton();
      await web.home.expectThatViSoftViPlanPageOpened();
  });

  testBaseFixture(
    'Check text and clickability of the ViSoft Smart button in 03 section', 
    {    
      tag: ['@home', "@Desktop"],
      annotation: [
          { type: 'Owner', description: 'Roman Shalay'},
          { type: 'JiraID', description: '' 
        }]
      },  
    async ({ web }) => {  
      await web.home.open();
      await web.home.expectThatTextIn03SectionIsCorrect();
      await web.home.clickOnViSoftSmartButton();
      await web.home.expectThatViSoftSmartPageOpened();
  });

  //Should be fixed section because the discription and button are mistaking in the section

  // testBaseFixture(
  //   'Check text and clickability of the ViSoft Ultimate button in 04 section', 
  //   {    
  //     tag: ['@home', "@Desktop"],
  //     annotation: [
  //         { type: 'Owner', description: 'Roman Shalay'},
  //         { type: 'JiraID', description: '' 
  //       }]
  //     },  
  //   async ({ web }) => {  
  //     await web.home.open();
  //     await web.home.expectThatTextIn04SectionIsCorrect();
  //     await web.home.clickOnViSoftUltimateButton();
  //     await web.home.expectThatViSoftUltimatePageOpened();
  // });

  testBaseFixture(
    'Check text and clickability of the ViSoft Photo Tuning button in 05 section', 
    {    
      tag: ['@home', "@Desktop"],
      annotation: [
          { type: 'Owner', description: 'Roman Shalay'},
          { type: 'JiraID', description: '' 
        }]
      },  
    async ({ web }) => {  
      await web.home.open();
      await web.home.expectThatTextIn05SectionIsCorrect();
      await web.home.clickOnViSoftPhotoTuningButton();
      await web.home.expectThatViSoftPhotoTuningPageOpened();
  });

  testBaseFixture(
    'Check text and clickability of the ViSoft 360 button in 06 section', 
    {    
      tag: ['@home', "@Desktop"],
      annotation: [
          { type: 'Owner', description: 'Roman Shalay'},
          { type: 'JiraID', description: '' 
        }]
      },  
    async ({ web }) => {  
      await web.home.open();
      await web.home.expectThatTextIn06SectionIsCorrect();
      await web.home.clickOnViSoft360Button();
      await web.home.expectThatViSoft360PageOpened();
  });

  testBaseFixture(
    'Check text and clickability of the ViSoft Live button in 07 section', 
    {    
      tag: ['@home', "@Desktop"],
      annotation: [
          { type: 'Owner', description: 'Roman Shalay'},
          { type: 'JiraID', description: '' 
        }]
      },  
    async ({ web }) => {  
      await web.home.open();
      await web.home.expectThatTextIn07SectionIsCorrect();
      await web.home.clickOnViSoftLiveButton();
      await web.home.expectThatViSoftLivePageOpened();
  });

  testBaseFixture(
    'Check "Our solutions for your success" section', 
    {    
      tag: ['@home', "@Desktop"],
      annotation: [
          { type: 'Owner', description: 'Roman Shalay'},
          { type: 'JiraID', description: '' 
        }]
      },  
    async ({ web, page }) => {  
      await web.home.open();
      await web.home.expectThatTextInOurSolutionsBlockIsCorrect();
      await web.home.clickOnLearnMoreButtonInOurSolutionsBlock();
      await web.home.expectThatLearnMoreInOurSolutionsBlockIsOpenedPage();
  });

  testBaseFixture(
    'Check "What our clients say" section', 
    {    
      tag: ['@home', "@Desktop"],
      annotation: [
          { type: 'Owner', description: 'Roman Shalay'},
          { type: 'JiraID', description: '' 
        }]
      },  
    async ({ web, page }) => {  
      await web.home.open();
      await web.home.scrolleToWhatOurClientsSaySection();
      await web.home.expectThatTextInWhatOurClientsSaySectionIsCorrect();
  });

  testBaseFixture(
    'Check "Customers worldwide" section', 
    {    
      tag: ['@home', "@Desktop"],
      annotation: [
          { type: 'Owner', description: 'Roman Shalay'},
          { type: 'JiraID', description: '' 
        }]
      },  
    async ({ web, page }) => {  
      await web.home.open();
      await web.home.scrolleToCustomersWorldwide();
      await web.home.expectThatTextInCustomersWorldwideIsCorrect();
      await web.home.expectThatMapIsVisible();
  });

  testBaseFixture(
    'Check "Customers in Germany" section', 
    {    
      tag: ['@home', "@Desktop"],
      annotation: [
          { type: 'Owner', description: 'Roman Shalay'},
          { type: 'JiraID', description: '' 
        }]
      },  
    async ({ web, page }) => {  
      await web.home.open();
      await web.home.scrolleToCustomersInGermany();
      await web.home.expectThatTextInCustomersInGermanyIsCorrect();
      await web.home.expectThatLogosIsVisible();
  });

  testBaseFixture(
    'Check "Try ViSoft Premium for free" section', 
    {    
      tag: ['@home', "@Desktop"],
      annotation: [
          { type: 'Owner', description: 'Roman Shalay'},
          { type: 'JiraID', description: '' 
        }]
      },  
    async ({ web, page }) => {  
      await web.home.open();
      await web.home.scrolleToTryViSoftPremiumForFree();
      await web.home.expectThatTextInTryViSoftPremiumForFreeIsCorrect();
      await web.home.clickOnGetDemoButtonInTryViSoftPremiumForFreeSection();
      await web.home.expectThatTestViSoftPremiumPageIsOpened();
  });