describe('Sign up flow', () => {
  it('Fill form fields to register a new user', () => {
    cy.visit('http://localhost:4200');
    cy.contains('a', 'Register now').click();

    cy.get('[formcontrolname="email"]').type('brenosc2@email.com');
    cy.get('[formcontrolname="fullName"]').type('Breno Henrique');
    cy.get('[formcontrolname="userName"]').type('brenosc2');
    cy.get('[formcontrolname="password"]').type('pswdteste123');

    cy.contains('button', 'Register').click();
  });
})
