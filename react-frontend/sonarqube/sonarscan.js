import scanner from 'sonarqube-scanner'

scanner(
    {
        serverUrl: 'http://localhost:9000',
        token: "sqp_c62c774119e0e8b37e75d298194011d141676a82",
        options: {
            'sonar.projectName': 'test1',
            'sonar.projectDescription': 'Here I can add a description of my project',
            'sonar.projectKey': 'Ayush@123',
            'sonar.projectVersion': '0.0.1',
            'sonar.exclusions': '',
            'sonar.sourceEncoding': 'UTF-8',
        }
    },
    () => process.exit()
)