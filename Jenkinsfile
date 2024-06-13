pipeline {
  agent { 
    docker { 
      image 'mcr.microsoft.com/playwright:v1.44.1-focal'
    } 
  }
  stages {
    stage('install playwright') {
      steps {
        script {
                    sh 'chown -R 122:124 "/.npm"'
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