# neha-bali

# qa-automation-suite
Playwright UI tests with Postman API tests

Automated UI tests for the [Conduit](https://conduit.bondaracademy.com) web application using **Playwright** and **TypeScript**.
Automated API tests using Postman 

## Features

-Covered flows for:

- Login to the Application
- Creating, editing and deleting **Article**
- Structured using **Page Object Model**
- Configurable via `.env` file
- Integrated with **Allure Reporting**
- Test data cleanup handled dynamically

## Project Setup

## 1. **Install dependencies**

```bash
npm install playwright
npm install dotenv
```

## 2. **Add `.env` file**

Create a `.env` in the root directory:

```env

URL=https://conduit.bondaracademy.com
EMAIL=your@email.com
PASSWORD=yourPassword

```

```bash
npm install dotenv
```

Use with: `process.env.BASE_URL` in code

## 3. **Install Allure CLI** (if not already)

```bash
npm install -g allure-commandline
npm i -D allure-playwright allure-commandline
```

## 4. Extensions Added \*\*

- Prettier Code formatter
- Playwright Test for VS Code

## Running Tests

## Run All Tests can refer package.json

```bash
* Run npm run test to run test.ts files
* Run npm playwright test
```

## Headed Mode

```bash
npx playwright test --headed
```

## 📊 Allure Report

## Generate Report

```bash
npx allure generate allure-results --clean
```

## Open Report

```bash
npx allure open allure-report
```

## Project Structure

```bash
.
├── tests/
│   ├── TC01_CreateEditDeleteArticle.test.ts
├── page-objects/
│   ├── BasePage.ts
│   └── CreateArticlePage.ts
│   └── EditArticlePage.ts
│   └── DeleteArticlePage.ts
│   └── LoginPage.ts
│── data/
│   ├──testdata.ts
├── .env
├── playwright.config.ts
└── README.md
└──conduit-postman-collection/
│  ├──Conduit API Tests.postman_collection.json

```

## Best Practices

- Use `test.describe()` to group flows
- Cleanup data in `afterAll` if reused across tests
- Use `getByRole` and `getByLabel` for resilient locators
- Use `await expect(locator).toBeVisible()` for stability

## Parallel Test Execution

- Playwright supports parallel execution using multiple worker processes
- Tests are distributed across workers (parallel threads).
- Each worker runs in a separate browser context or browser instance.
- Configuration- `playwright.config.ts` file:

```ts
 playwright.config.ts
 export default defineConfig({
 workers: process.env.CI ? 1 : undefined, // Set to desired number of parallel workers
 fullyParallel: true, // Run tests in parallel without queuing
});
```

## Future Enhancements

- CI integration (e.g., GitHub Actions, Jenkins)
- Multi-environment config support
