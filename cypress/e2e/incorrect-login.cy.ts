describe('Sign in flow', () => {
  it('Empty state should have error messages', () => {
    cy.visit('http://localhost:4200');

    cy.contains('User name is required!').should('be.visible');
    cy.contains('Password is required!').should('be.visible');
  });
})
