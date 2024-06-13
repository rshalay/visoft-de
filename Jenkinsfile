pipeline {
  agent { 
    docker { 
      image 'mcr.microsoft.com/playwright:v1.44.1-focal'
    } 
  }
  stages {
    stage('install playwright') {
      steps {
        sh '''
          npx playwright install
          npm config set cache $(pwd)/.npm-cache --global
          npm i -D @playwright/test
          
        '''
      }
    }
    stage('help') {
      steps {
        sh 'npx playwright test --help'
      }
    }
    stage('test') {
      steps {
        sh '''
          npx playwright test --list
          npx playwright test
        '''
      }
    
    }
  }
}