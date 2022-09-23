node 
{
    stage('Checking Java Version'){
        bat 'java --version'
    }
    stage('Repo Cloning'){
        git branch: 'master', url: 'https://github.com/niket2509/HTML.git'
    }
    stage('build'){
       publishHTML ( [allowMissing: false,
 alwaysLinkToLastBuild: false,
 keepAll: false,
 reportDir: 'untitled',
 reportFiles: 'index1.html',
 reportName: 'HTML2509',
 reportTitles: 'Calculator'])
    }
}
