class CheckoutPage {
  elements = {
    title: () => cy.get(".title"),
    firstName: () => cy.get("#first-name"),
    lastName: () => cy.get("#last-name"),
    postalCode: () => cy.get("#postal-code"),
    continueButton: () => cy.get("#continue"),
    finishButton: () => cy.get("#finish"),
    completeHeader: () => cy.get(".complete-header"),
    orderSummary: () => cy.get(".checkout_summary_container")
  };

  verifyInformationStep() {
    this.elements.title().should("have.text", "Checkout: Your Information");
  }

  completeCustomerInformation(data) {
    this.elements.firstName().type(data.firstName);
    this.elements.lastName().type(data.lastName);
    this.elements.postalCode().type(data.postalCode);
    this.elements.continueButton().click();
  }

  verifyOverview() {
    this.elements.title().should("have.text", "Checkout: Overview");
    this.elements.orderSummary().should("be.visible");
  }

  finishOrder() {
    this.elements.finishButton().click();
  }

  verifyOrderConfirmation() {
    this.elements.completeHeader()
      .should("be.visible")
      .and("have.text", "Thank you for your order!");
  }
}

export default new CheckoutPage();