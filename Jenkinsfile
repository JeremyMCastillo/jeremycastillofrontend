pipeline {
  agent any

  environment {
    NEXT_PUBLIC_STRAPI_API_URL = 'https://admin.jeremycastillo.net'
  }

  stages {
    stage('Build') {
      steps {
        echo 'Building...'
        nvm('22.19.0') {
          sh 'npm install -g yarn'
          sh 'yarn'
          sh 'yarn build'
        }
      }
    }
    stage('Deploy') {
      steps {
        echo 'Deploying...'
        sh 'sudo cp -r build/* /var/www/jeremycastillo.net/frontend/'
      }
    }
  }
}
