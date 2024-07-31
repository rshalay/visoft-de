import { testBaseFixture } from '../fixtures/';

  testBaseFixture('Home page is loaded', 
    {    
      tag: ['@home'],
      annotation: [
          { type: 'Owner', description: 'Roman Shalay'},
          { type: 'JiraID', description: 'https://jira.visoft.de:8443/browse/' 
        }]
      },  
    async ({ web }) => {  
      await web.home.open();
      await web.home.isLoaded();
      await web.home.openViSoftPremium();
      await web.home.expectLoaded();
      await web.home.clickOnLogo();
      await web.home.isLoaded();
  });

  testBaseFixture('Check carousel buttons and chevron', 
    {    
      tag: ['@home'],
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
