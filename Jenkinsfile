pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
                sh 'npx playwright install'
            }
        }
        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright test'
            }
        }
    }
    post {
        always {
            publishHTML(target: [
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Test Report',
                keepAll: true,
                allowMissing: false,
                alwaysLinkToLastBuild: true
            ])
            junit 'playwright-report/results.xml'
        }
    }
}
}
