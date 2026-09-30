class LoginPage {
  elements = {
    username: () => cy.get("#user-name"),
    password: () => cy.get("#password"),
    loginButton: () => cy.get("#login-button"),
    errorMessage: () => cy.get('[data-test="error"]')
  };

  visit() {
    cy.visit("/");
  }

  login(username, password) {
    this.elements.username().clear().type(username);
    this.elements.password().clear().type(password);
    this.elements.loginButton().click();
  }
}

export default new LoginPage();