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
          npm init -y
          npm install -D playwright

          
          npx playwright install
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
      post {
        success {
          archiveArtifacts(artifacts: 'homepage-*.png', followSymlinks: false)
          sh 'rm -rf *.png'
        }
      }
    }
  }
}