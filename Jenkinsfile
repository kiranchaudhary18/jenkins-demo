pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out code...'
            }
        }

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

        stage('Build') {
            steps {
                echo 'Jenkins + Docker Build Successful!'
            }
        }
    }
}

        stage('Build') {
            steps {
                echo 'Jenkins Pipeline Build Successful!'
            }
        }
    }
}
