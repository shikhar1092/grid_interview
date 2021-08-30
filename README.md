# Cypress automation for D3A website.

## Motivation:
This repository contains the task which were completed as part of the interview process of Grid Singularity.

### Steps to execute the tests:

1. Clone the repository using the command: "https://github.com/shikhar1092/grid_interview.git"
2. Open the repository in any IDE and execute following on terminal "npm install"(ensure your variables are correctly set)
3. Install cypress using "npm install cypress --save --dev"
4. Execute the command "npm run test" This command will run all the tests and will generate a HTML and JSON report.
5. Report can be accessed here: "cypress/reports/mochareports/report.html/

### Tests automated:

1. Login Functionality: It validates that a precreated user is able to login to d3a.io
2. Create a new project(dependent on first test case): This test case validates if the logged in user is able to create a new project and the newly created project is correctly listed on the top of the projects list.
3. Create a new simulation(ependent on second test case): User is able to create a new simulation inside the newly created project and validate if the simulation is correctly created.

The aforementioned tests have been automated keeping in mind if one tests fail then execution totally comes to halt and other tests are automatically skipped. I have also provided the support for screenshot which will be taken only in case of failures.

### Resources:
1. XPATH: https://www.npmjs.com/package/cypress-xpath
2. NPM: https://www.npmjs.com/
3. CYPRESS: https://docs.cypress.io/guides/overview/why-cypress

### Note:
I have put Login code in Before hook because everytime I was clicking on project then my webpage was automatically logged out, thus, put it inside hook.
