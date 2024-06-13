pipeline {
  agent { 
    docker { 
      image 'mcr.microsoft.com/playwright:v1.44.1'
    } 
  }
  stages {
    stage('install playwright') {
      steps {
        script {
          sh '''
            npm install -g npm@7
            npm install -g yarn
            sudo chown -R 1000:1000 "/.npm"
            npm config set cache /path/to/your/npm-cache --global
            export npm_config_cache=/path/to/your/npm-cache
            sudo npm install -D @playwright/test
            npm install -D @playwright/test --loglevel=verbose
          '''
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