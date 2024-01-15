import { ELEMENTS } from './elements';

class SignUp {
  navigateToSignUpPage() {
    cy.visit('http://localhost:4200');
    cy.contains('a', 'Register now').click();
  }

  fillForm(user) {
    cy.get(ELEMENTS.EMAIL).type(user.email);
    cy.get(ELEMENTS.FULL_NAME).type(user.fullName);
    cy.get(ELEMENTS.REGISTER_USER_NAME).type(user.userName);
    cy.get(ELEMENTS.REGISTER_PASSWORD).type(user.password);
  }

  submitForm() {
    cy.contains('button', 'Register').click();
  }
}

export default new SignUp();
