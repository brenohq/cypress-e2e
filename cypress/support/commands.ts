declare namespace Cypress {
  interface Chainable<Subject = any> {
    login(userName: string, password: string): Chainable<any>;
  }
}

Cypress.Commands.add('login' as any, (userName: string = 'brenosc2', password: string = 'pswdteste123') => {
  cy.get('[data-test="loginUserName"]').type(userName);
  cy.get('[data-test="loginPassword"]').type(password);

  cy.get('[data-test="loginBtn"]').click();
});
