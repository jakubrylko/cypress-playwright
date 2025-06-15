## Overview

In this project I have configured [Cypress](https://docs.cypress.io/app/get-started/why-cypress) and [Playwright](https://playwright.dev/docs/intro) with [TypeScript](https://www.typescriptlang.org/docs/) to compare their test automation capabilities. A functional approach was used for Cypress, while Playwright follows the [Page object model](https://playwright.dev/docs/pom) (POM) pattern. Both frameworks are integrated with [Cucumber](https://cucumber.io/docs) to enable BDD (Behavior-Driven Development) testing. In addition to frontend, support for REST API and GraphQL testing has been added. [Allure Reporter](https://allurereport.org/docs/) is implemented for detailed and interactive test reports. To ensure consistent code quality, [Prettier](https://prettier.io/docs/en/), [ESLint](https://eslint.org/docs/latest/), and [Husky](https://typicode.github.io/husky/) are configured to run checks on every commit. Finally, Github workflows are set up to execute tests and quality scans on every new pull request.

Most of the tests were performed on the publicly available [DemoQA](https://demoqa.com/) website. Some were conducted on other sites with restricted access that I had the opportunity to work with, featuring challenging scenarios worth automating.

## Project setup

This guide has been prepared to successfully run all tests on the DemoQA website locally. It is designed for macOS users.

1.&nbsp; Install Homebrew

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

2.&nbsp; Install Node.js

```
brew install node@20
```

3.&nbsp; Install yarn

```
brew install yarn
```

4.&nbsp; Clone the repository

```
git clone https://github.com/jakubrylko/cypress-playwright.git
```

5.&nbsp; Install dependencies

```
cd cypress-playwright && yarn install
```

## Cypress

### Running tests

Interactive UI mode:

```
yarn cy:open
```

Headless mode:

```
yarn cy:run
```

Single spec in headed mode:

```
yarn cy:run:headed:spec <relative-path>

yarn cy:run:headed:spec cypress/tests/demoqa/alerts.cy.ts
```

Single spec in headless mode:

```
yarn cy:run:spec <relative-path>

yarn cy:run:spec cypress/tests/demoqa/alerts.cy.ts
```

Cucumber BDD tests:

```
yarn cy:run:bdd
```

### Utilities

Toggle API logs for UI mode:

```
yarn cy:logs:off

yarn cy:logs:on
```

### Test reporting

Open Allure report:

```
yarn allure:cy
```

Remove Allure report data:

```
yarn allure:cy:clean
```

## Playwright

### Running tests

Interactive UI mode:

```
yarn pw:test:ui
```

Headed mode:

```
yarn pw:test:headed <spec-file-name>

yarn pw:test:headed alerts
```

Headless mode:

```
yarn pw:test <spec-file-name>

yarn pw:test alerts
```

Cucumber BDD tests:

```
yarn pw:test:bdd
```

### Test reporting

Open Allure report:

```
yarn allure:pw
```

Remove Allure report data:

```
yarn allure:pw:clean
```

Open Playwright report:

```
yarn pw:report
```

Open Cucumber report:

```
yarn pw:report:bdd
```

Remove artifacts:

```
yarn pw:report:clean

yarn pw:traces:clean
```
