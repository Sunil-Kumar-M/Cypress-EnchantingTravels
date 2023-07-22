# Enchanting Travels Cypress Automation

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![EnchantingTravels Automation](https://github.com/Sunil-Kumar-M/Cypress-EnchantingTravels/actions/workflows/ci.yml/badge.svg)](https://github.com/Sunil-Kumar-M/Cypress-EnchantingTravels/actions/workflows/ci.yml)
[![EnchantingTravels Wiki](https://img.shields.io/badge/EnchantingTravels-Wiki-blue)](https://github.com/Sunil-Kumar-M/Cypress-EnchantingTravels/wiki)

## Description

This project has a capability to handle multiple browsers and it can abel to run on the CI pipeline which is already configured in GitHub Actions. As of now this will be running on default Chrome browser on Ubuntu machine.

## Table of Contents

- [Installation For Local Run](#InstallationForLocalRun)
- [Installation For CI/CD Run](#InstallationForCloudRun)
- [Tests](#tests)
- [TestResult](#testresult)

## Installation For Local Run

1. Clone the repository.
2. Install dependencies using npm: (Below command)
3. After Cypress dashboard got open just follow the instructions as shown in the images.

## Installation For CI/CD Run (Cloud)


```bash
npm install
npx cypress open
```
4. After the above command you will see the Cypress Dashboard as shown below.
![Alt CypressDashboard](.//cypress/SupportDocs/cypressDashboard.png)
5. E2E Testing should show as it is Configured. Then you click on E2E testing and you will be navigated to select a browsers as shown below. Electorn Browser is the fastest browser and it is in built from Cypress.
![Alt BrowserSections](.//cypress/SupportDocs/cypressBrowsers.png)
6. Once you select the browser you will be navigated to test scripts page to run the test cases. Select any of the test cases from the listed the automation will immediately get invoked and you will be taken to view the automation steps in the ViewPort of the Cypress dashboard.
![Alt ViewPortDashboard](.//cypress/SupportDocs/AutomationInitScreen.png)
7. Once all the test cases got completed you can able to review each and every steps with before and after the invoke and along with the recording.

### Running the automation on different approaches
1. Running the automation on Chrome browser with headless type the below command.
```bash
npx cypress run --browser chrome
```
2. Running the automation on FireFox browser with headless type the below command.
```bash
npx cypress run --browser firefox
```
3. Running the automation on Edge browser with headless type the below command.
```bash
npx cypress run --browser edge
```
4. Running the automation on Electron browser with headless type the below command.
```bash
npx cypress run --browser electron
```
5. Running the automation on Default browser with headed type the below command.
```bash
npx cypress run --headed
```

## Tests
#### I have tired to cover most of the things in a short span of time. I have listed down all the test cases covered from automation below.
1. Validate the user inputs with valid set of user data and navigate till the checkout flow.
2. Validate the user inputs with multiple set of user data and check the behaviour of the application.
    a. A male user data with valid details.
    b. A Female user data with valid details.
    c. A Invalid data and error messsages validation.
3. Validate the user inputs with valid set of the data for 2 Passengers details. 

## Test Result
### Here is the Latest Test Result from the CI GitHub Actions.
![Alt CypressDashboard](.//cypress/SupportDocs/LatestResultOnCloudRun.png)
