import SignUp from 'cypress/support/pages/signup/signup-page';

describe('Sign up flow', () => {
  const users = require('../fixtures/users.json');

  users.forEach(user => {
    it('Fill form fields to register a new user', () => {
      SignUp.navigateToSignUpPage();
      SignUp.fillForm(user);
      SignUp.submitForm();
    });
  });
})
