pipeline {
    agent any

    stages {
        stage('Install') {
            steps {
                echo 'Install..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Release') {
            steps {
                echo 'Release....'
                
                sh("npm install")
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploy....'
                sh("npm install")
                
            }
        }
    }
}
