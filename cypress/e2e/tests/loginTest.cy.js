/// <reference types="cypress"/>

import { LoginActionPage } from "../actions/loginActionPage";

describe('Login test suite', () => {

  before(() => {
    cy.fixture(`${Cypress.env('env')}/credentials.json`).then((credentials) => {
      cy.wrap(credentials).as('credentials');
      cy.log('Credentials loaded:', JSON.stringify(credentials));
    });
  });

  it('User login test', () => {
    const loginActionPageLoc = new LoginActionPage();
    cy.get('@credentials').then((credentials) => {
      
      cy.visit(credentials.baseUrl);
      cy.title().should('include', 'Home Page');
      loginActionPageLoc.login(credentials.email, credentials.password);
    });
    loginActionPageLoc.verifyLogoutCTA();
  });
});
