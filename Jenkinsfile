pipeline {
  agent { 
    docker { 
      image 'mcr.microsoft.com/playwright:v1.44.1-jammy'
    } 
  }
  stages {
    stage('install playwright') {
      steps {
        script {
                    // Install dependencies
                    sh 'npm i -D @playwright/test'
                    sh 'npx playwright install'
                }
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