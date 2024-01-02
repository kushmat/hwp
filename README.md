# hwp

Higi(H) web-portal (W) test automation via playwright (P) (H FWP)

## Installation guide

```bash
git clone https://github.com/kushmat/hwp.git
cd hwp
```

### Playwright installation

Official documentation: https://playwright.dev/docs/intro

#### Package management tool

We will use PNPM for this project - PNPM: Utilizes a shared dependency mechanism - Allows different projects to use the same copy of a package given version specified is same. - Efficient as it minimizes duplication and reduces disk space usage.

#### Install PNPM

```bash
brew install pnpm
```

#### Install playwright in our project hwp

```bash
pnpm create playwright
```

- let's use javascript for now
- e2e under tests
- set yes in github actions workflow
- install browsers yes

#### Running example test:

```shell
npx playwright test
```

` pnpm exec playwright test`
Runs the end-to-end tests.

` pnpm exec playwright test --ui`
Starts the interactive UI mode.

`pnpm exec playwright test --project=chromium`
Runs the tests only on Desktop Chrome.

`pnpm exec playwright test example`
Runs the tests in a specific file.

`pnpm exec playwright test --debug`
Runs the tests in debug mode.

And check out the following files:

- ./tests/example.spec.js - Example end-to-end test
- ./tests-examples/demo-todo-app.spec.js - Demo Todo App end-to-end tests
- ./playwright.config.js - Playwright Test configuration

Visit https://playwright.dev/docs/intro for more information. ✨

Let's update playwright.config.js to set base url to our webportal. Uncomment baseUrl under module.exports > use

```
 use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
     baseURL: 'https://web-dev-secure.superbuddytime.com/login',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
  },
```

#### Run test

```
npx playwright test contact.spec.js -g "has\s+title$"
```

Runs test in headless mode ( no browser is opened)

```
npx playwright test contact.spec.js -g "update\s+contact\s+information\s+for\s+higi\s+user$" --debug
```

Will open a browser with debug console

```
npx playwright test contact.spec.js -g "update\s+contact\s+information\s+for\s+higi\s+user$" --ui
opens chromium interactive UI mode
```

#### Show report

```
npx playwright show-report
```

## Why Playwright

See slide

## API testing and n/w interception

See Slide and Demo

## Git tips

```
git config –-global alias.co "checkout"
git config –-global alias.s "status"
git config –-global alias.l "log"
git config –-global alias.p "push"
```
