import { testBaseFixture } from '../fixtures/';

  testBaseFixture('Home page is loaded', 
    {    
      tag: ['@home'],
      annotation: [
          { type: 'Owner', description: 'Roman Shalay'},
          { type: 'JiraID', description: 'https://jira.visoft.de:8443/browse/' 
        }]
      },  
    async ({ app }) => {  
      await app.home.open();
      await app.home.isLoaded();
      await app.home.header.openViSoftPremium();
      await app.home.header.expectLoaded();
      await app.home.clickOnLogo();
      await app.home.isLoaded();
  });

  testBaseFixture('Check carousel buttons and chevron', 
    {    
      tag: ['@home'],
      annotation: [
          { type: 'Owner', description: 'Roman Shalay'},
          { type: 'JiraID', description: 'https://jira.visoft.de:8443/browse/' 
        }]
      },  
    async ({ app }) => {  
      await app.home.open();
      await app.home.expectThatButtonInCarouselIsClickedAndPageOpened();
      await app.home.expectThatChevronIsClickedAndPageOpened();
  });