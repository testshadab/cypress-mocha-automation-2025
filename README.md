# Cypress Mocha Automation Framework (JavaScript)

This framework is a Cypress-based test automation setup for testing the Luma eCommerce application. It uses the **Mocha** test runner and follows the **Page Object Model (POM)** structure for maintainable, scalable test automation.

## 📁 Folder Structure

Luma-Cypress-POC-2025/
│
├── cypress/
│   ├── e2e/
│   │   ├── actions/               # This folder contains JS files with business logic.
│   │   │                          # Example: loginActionPage.js handles the login steps.
│   │   │
│   │   ├── pages/                 # This contains Page Object files with element locators.
│   │   │                          # Example: loginLocatorPage.js stores selectors for login elements.
│   │   │
│   │   ├── tests/                 # This folder contains actual test cases.
│   │                              # Example: loginTest.cy.js runs the login test using actions/pages.
│   │
│   ├── fixtures/                  # This holds test data and environment-specific credentials.
│   │   ├── testData.json          # Common test data like email, password, etc.
│   │   ├── dev/                   # Development environment credentials.
│   │   └── production/            # Production environment credentials.
│   │
│   ├── support/
│       ├── commands.js            # Custom Cypress commands (like reusable login command).
│       └── e2e.js                 # Runs before every test — used for setup code.
│
├── cypress.config.js              # Main Cypress configuration file.
├── package.json                   # Project dependencies and npm scripts.
├── package-lock.json              # Auto-generated file to lock dependency versions.


## 🔧 Setup Instructions

1. **Clone the repo**

```bash
git clone https://github.com/your-username/Luma-Cypress-POC-2025.git
cd Luma-Cypress-POC-2025

2. **Install dependencies**
npm install

3. **Running Tests**
npx cypress run



