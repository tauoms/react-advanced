describe("Countries homepage tests", () => {
  it("Home page is visible", () => {
    cy.visit("http://localhost:5174/");
    cy.get("h1").should("contain", "Home");
  });
});
