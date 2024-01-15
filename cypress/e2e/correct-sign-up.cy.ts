describe('Sign up flow', () => {
  it('Fill form fields to register a new user', () => {
    cy.visit('http://localhost:4200');
    cy.contains('a', 'Register now').click();

    cy.get('[data-test="email"]').type(Cypress.env().email);
    cy.get('[data-test="fullName"]').type(Cypress.env().fullName);
    cy.get('[data-test="registerUserName"]').type(Cypress.env().userName);
    cy.get('[data-test="registerPassword"]').type(Cypress.env().password);

    cy.contains('button', 'Register').click();
  });
})
