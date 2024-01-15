describe('Sign up flow', () => {
  const users = require('../fixtures/users.json');

  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  users.forEach(user => {
    it('Fill form fields to register a new user', () => {
      cy.contains('a', 'Register now').click();

      cy.get('[data-test="email"]').type(user.email);
      cy.get('[data-test="fullName"]').type(user.fullName);
      cy.get('[data-test="registerUserName"]').type(user.userName);
      cy.get('[data-test="registerPassword"]').type(user.password);

      cy.contains('button', 'Register').click();
    });
  });
})
