import { generateUser } from "../../utils/apiData";

describe("PetStore - User API", () => {
  const baseUrl = "https://petstore.swagger.io/v2";
  let user;

  beforeEach(() => {
    user = generateUser();
  });

  it("should create, retrieve, update, retrieve and delete a user", () => {
    cy.request({
      method: "POST",
      url: `${baseUrl}/user`,
      body: user,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("message");
    });

    cy.request({
      method: "GET",
      url: `${baseUrl}/user/${user.username}`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.username).to.eq(user.username);
      expect(response.body.email).to.eq(user.email);
    });

    const updatedUser = {
      ...user,
      firstName: "CristinaUpdated",
      email: `updated_${Date.now()}@example.com`
    };

    cy.request({
      method: "PUT",
      url: `${baseUrl}/user/${user.username}`,
      body: updatedUser,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("message");
    });

    cy.request({
      method: "GET",
      url: `${baseUrl}/user/${user.username}`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.firstName).to.eq(updatedUser.firstName);
      expect(response.body.email).to.eq(updatedUser.email);
    });

    cy.request({
      method: "DELETE",
      url: `${baseUrl}/user/${user.username}`,
      failOnStatusCode: false
    }).then((response) => {
      expect([200, 204]).to.include(response.status);
    });

    cy.request({
      method: "GET",
      url: `${baseUrl}/user/${user.username}`,
      failOnStatusCode: false
    }).then((response) => {
      expect([404, 400]).to.include(response.status);
    });
  });
});