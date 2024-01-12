describe('Sign in flow', () => {
  it('Fill the form to login a valid user', () => {
    cy.visit('http://localhost:4200');

    cy.get('[data-test="loginUserName"]').type('brenosc2');
    cy.get('[data-test="loginPassword"]').type('pswdteste123');

    cy.get('[data-test="loginBtn"]').click();

    cy.url().should('eq', 'http://localhost:4200/#/user/brenosc2');
  });
})
