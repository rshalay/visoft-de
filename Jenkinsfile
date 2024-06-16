pipeline {
    // agent any{
    //     label 'your-node-label'
    // }
    agent any

    environment {
        TEAMS_WEBHOOK_URL = 'https://visoftgmbh.webhook.office.com/webhookb2/0ff09896-ed44-4b0f-b76e-fec08c951a9d@3cd15a46-0164-4a52-89b9-7948a007c4d3/JenkinsCI/d544d9eebe784b629370dc2ce34414d8/56a52362-29df-4942-b602-3432ae370d8d'  
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
                sh 'npx playwright install'
            }
        }
     stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright test --reporter=list'
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
            office365ConnectorSend message: """
                Build ${currentBuild.fullDisplayName} finished with status ${currentBuild.currentResult}.
                [View Playwright Test Report](${env.JENKINS_URL}job/${env.JOB_NAME}/${env.BUILD_NUMBER}/playwright-report/)
            """,
            status: currentBuild.currentResult,
            webhookUrl: "${env.TEAMS_WEBHOOK_URL}"
        }
    }
}