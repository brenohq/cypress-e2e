describe('Sign in flow', () => {

  it('Fill the form to login a valid user', () => {
    cy.visit('http://localhost:4200');

    cy.login(Cypress.env().userName, Cypress.env().password);

    cy.url().should('eq', `http://localhost:4200/#/user/${Cypress.env().userName}`);
  });
})
