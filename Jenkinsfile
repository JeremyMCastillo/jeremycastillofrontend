pipeline {
  agent any

  triggers {
    githubPush()
  }

  environment {
    NEXT_PUBLIC_STRAPI_API_URL = 'https://admin.jeremycastillo.net'
  }

  stages {
    stage('Build') {
      when {
        branch 'master'
      }
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
      when {
        branch 'master'
      }
      steps {
        echo 'Deploying...'
        sh 'sudo cp -r build/* /var/www/jeremycastillo.net/frontend/'
      }
    }
  }
}
