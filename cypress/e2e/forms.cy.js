describe("form tests", () => {
  beforeEach(() => {
    cy.visit("/forms");
  });
  it("test subscribe form", () => {
    cy.contains(/testing forms/i);
    cy.getDataTest("subscribe-form").find("input").as("subscribe-input");
    cy.get("@subscribe-input").type("hello@gmail.com");
    cy.contains(/Successfully subbed: hello@gmail.com/i).should("not.exist");
    cy.getDataTest("subscribe-button").click();
    cy.contains(/Successfully subbed: hello@gmail.com/i).should("exist");
    cy.wait(3000);
    cy.contains(/Successfully subbed: hello@gmail.com/i).should("not.exist");

    cy.get("@subscribe-input").type("hello@gmail.io");
    cy.getDataTest("subscribe-button").click();
    cy.contains(/invalid email/i).should("exist");
    cy.wait(3000);
    cy.contains(/invalid email/i).should("not.exist");
  });
});
