describe('Sign in flow', () => {

  it('Fill the form to login a valid user', () => {
    cy.visit('http://localhost:4200');

    cy.login('brenosc2', 'pswdteste123');

    cy.url().should('eq', 'http://localhost:4200/#/user/brenosc2');
  });
})
