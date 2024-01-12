describe('Sign up flow', () => {
  it('Fill form fields to register a new user', () => {
    cy.visit('http://localhost:4200');
    cy.contains('a', 'Register now').click();

    cy.get('[data-test="email"]').type('brenosc2@email.com');
    cy.get('[data-test="fullName"]').type('Breno Henrique');
    cy.get('[data-test="registerUserName"]').type('brenosc2');
    cy.get('[data-test="registerPassword"]').type('pswdteste123');

    cy.contains('button', 'Register').click();
  });
})
