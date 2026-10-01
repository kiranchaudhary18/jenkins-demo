pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npm test'
            }
        }

        stage('Docker Check') {
            steps {
                bat 'docker --version'
            }
        }

        stage('Docker Build') {
            steps {
                bat 'docker build -t jenkins-demo:latest .'
            }
        }

        stage('Docker Run') {
            steps {
               bat 'docker stop jenkins-demo-container || exit 0'
               bat 'docker rm jenkins-demo-container || exit 0'
               bat 'docker run -d --name jenkins-demo-container -p 3000:3000 jenkins-demo:latest'
            }
        }

        stage('Build') {
            steps {
                echo 'Jenkins + Docker Build Successful!'
            }
        }
    }
}