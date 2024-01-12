describe('Sign up flow', () => {
  it('Incorrectly fill form fields to register a new user', () => {
    cy.visit('http://localhost:4200');

    cy.contains('a', 'Register now').click();

    cy.get('[data-test="email"]').focus();
    cy.get('[data-test="fullName"]').focus();
    cy.get('[data-test="registerUserName"]').focus();
    cy.get('[data-test="registerPassword"]').focus();

    cy.contains('button', 'Register').click();

    cy.contains('Email is required!').should('be.visible');
    cy.contains('Full name is required!').should('be.visible');
    cy.contains('User name is required!').should('be.visible');
    cy.contains('Password is required!').should('be.visible');
  });
})
