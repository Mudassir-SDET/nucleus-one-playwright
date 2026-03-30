# Nucleus One - Playwright Automation Tests

## Project Overview

This project contains automated login tests for the **Nucleus One application** using **Playwright with JavaScript**.  

The tests cover both **positive (happy path)** and **negative login scenarios**, verifying the login functionality and error messages.

---

## Tech Stack

* **Playwright** – browser automation  
* **JavaScript / Node.js** – scripting and test execution  

---

## Project Structure

```text
nucleus-one
├── pages
│   └── login.page.js       # Page Object for Login page
├── tests
│   └── login.spec.js       # Playwright test cases
├── test-data
│   └── users.json          # Test credentials for positive/negative scenarios
├── playwright.config.js    # Playwright configuration
├── package.json            # Project dependencies
└── README.md               # Project documentation
---
```
## Test Scenarios Covered

### Positive Test

* Login with **valid email and password**  
* Verify the user successfully reaches the dashboard

### Negative Tests

1. Login with **invalid email**  
2. Login with **invalid password**  

Both should display the error message:

---

## Installation & Running Tests

### Run Playwright Tests

```bash
npm install                     # install dependencies
npx playwright test             # run all Playwright tests
npx playwright test --headed    # run with browser visible
npx playwright show-report      # view HTML report
``` 

```
``` 
## Notes

Each test runs in an isolated browser context, preventing conflicts.

Page Object pattern is used for maintainability (login.page.js).

## Author
Mudassir Moavia