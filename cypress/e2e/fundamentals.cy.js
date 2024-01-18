describe("fundamentals test", () => {
  it("contains correct header text", () => {
    cy.visit("/fundamentals");
    cy.get('[data-test="fundamental-header"]').contains(
      /Testing Fundamentals/i
    );
  });
});
