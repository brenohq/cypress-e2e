describe('Sign in flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
    cy.intercept('POST', 'http://localhost:3000/user/login', {
      statusCode: 401,
    }).as('stubPost');
  });

  it('Empty state should have error messages', () => {
    cy.contains('User name is required!').should('be.visible');
    cy.contains('Password is required!').should('be.visible');
  });

  it('Fail when incorrect user input', () => {
    cy.login('aaaaaa', 'aaaaa');
    cy.wait('@stubPost');
  });
})
