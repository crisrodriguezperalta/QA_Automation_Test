class CartPage {
  elements = {
    title: () => cy.get(".title"),
    items: () => cy.get(".cart_item"),
    checkoutButton: () => cy.get("#checkout")
  };

  verifyLoaded() {
    this.elements.title().should("have.text", "Your Cart");
  }

  verifyProduct(productName) {
    cy.contains(".cart_item", productName).should("be.visible");
  }

  verifyItemCount(count) {
    this.elements.items().should("have.length", count);
  }

  checkout() {
    this.elements.checkoutButton().click();
  }
}

export default new CartPage();