class ProductsPage {
  elements = {
    title: () => cy.get(".title"),
    inventoryContainer: () => cy.get(".inventory_container"),
    cartBadge: () => cy.get(".shopping_cart_badge"),
    cartLink: () => cy.get(".shopping_cart_link")
  };

  verifyLoaded() {
    this.elements.title().should("have.text", "Products");
    this.elements.inventoryContainer().should("be.visible");
  }

  addProduct(productName) {
    cy.contains(".inventory_item", productName)
      .should("be.visible")
      .find("button")
      .click();
  }

  verifyCartCount(count) {
    this.elements.cartBadge().should("have.text", String(count));
  }

  openCart() {
    this.elements.cartLink().click();
  }
}

export default new ProductsPage();