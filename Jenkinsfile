pipeline {
  agent any

  triggers {
    githubPush()
  }

  environment {
    NEXT_PUBLIC_STRAPI_API_URL = 'https://admin.jeremycastillo.net'
  }

  stages {
    stage('Debug') {
      steps {
        echo "GIT_BRANCH: ${env.GIT_BRANCH}"
      }
    }
    stage('Build') {
      when {
        expression {
          env.GIT_BRANCH == 'origin/master'
        }
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
        expression {
          env.GIT_BRANCH == 'origin/master'
        }
      }
      steps {
        echo 'Deploying...'
        sh 'sudo cp -r build/* /var/www/jeremycastillo.net/frontend/'
      }
    }
  }
}
