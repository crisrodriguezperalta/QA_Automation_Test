# QA BP - E2E & API Automation

Automated solution for the practical QA exercise using **Cypress** and **Page Object Model (POM)**.

## Selected exercises

### E2E - Option 2: SauceDemo
URL: https://www.saucedemo.com/

Flow:
1. Authenticate with `standard_user / secret_sauce`.
2. Add two products to the cart.
3. Verify the cart.
4. Complete the checkout form.
5. Finish the purchase.
6. Validate `Thank you for your order!`.

### API - Option 3: PetStore
Documentation: https://petstore.swagger.io/

Flow:
1. Create a user.
2. Retrieve the created user.
3. Update first name and email.
4. Retrieve the updated user.
5. Delete the user.
6. Validate that the user is no longer retrievable.

## Architecture

The E2E layer uses Page Object Model:
- `pages/saucedemo/LoginPage.js`
- `pages/saucedemo/ProductsPage.js`
- `pages/saucedemo/CartPage.js`
- `pages/saucedemo/CheckoutPage.js`

Tests contain business flow and assertions, while page objects encapsulate UI selectors/actions.

API test data generation is separated into `cypress/utils/apiData.js`.

## Requirements

- Node.js 18+ recommended
- npm

## Installation

```bash
npm install
```

## Execution

Open Cypress:

```bash
npm run test:headed
```

Run E2E:

```bash
npm run test:e2e
```

Run API:

```bash
npm run test:api
```

Run all tests:

```bash
npm test
```

## Notes

The API exercise uses a dynamically generated username to avoid collisions between executions.

Reports/screenshots should be generated from actual test execution. No execution result is fabricated in this repository.
