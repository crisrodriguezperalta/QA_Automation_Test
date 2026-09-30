import LoginPage from "../../pages/saucedemo/LoginPage";
import ProductsPage from "../../pages/saucedemo/ProductsPage";
import CartPage from "../../pages/saucedemo/CartPage";
import CheckoutPage from "../../pages/saucedemo/CheckoutPage";

describe("SauceDemo - E2E Checkout", () => {
  beforeEach(() => {
    cy.fixture("checkoutData").as("checkoutData");
    LoginPage.visit();
  });

  it("should complete a purchase with two products", function () {
    LoginPage.login("standard_user", "secret_sauce");

    ProductsPage.verifyLoaded();
    ProductsPage.addProduct("Sauce Labs Backpack");
    ProductsPage.addProduct("Sauce Labs Bike Light");
    ProductsPage.verifyCartCount(2);

    ProductsPage.openCart();
    CartPage.verifyLoaded();
    CartPage.verifyItemCount(2);
    CartPage.verifyProduct("Sauce Labs Backpack");
    CartPage.verifyProduct("Sauce Labs Bike Light");

    CartPage.checkout();
    CheckoutPage.verifyInformationStep();
    CheckoutPage.completeCustomerInformation(this.checkoutData);

    CheckoutPage.verifyOverview();
    CheckoutPage.finishOrder();
    CheckoutPage.verifyOrderConfirmation();
  });
});