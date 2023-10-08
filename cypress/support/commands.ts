// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

declare namespace Cypress{
    interface Chainable<Subject> {
        getByCy: typeof getByCy
    }

}
    function getByCy(field: string){
        return cy.get(`[placeholder="${field}"]`);
    }
    
/*
    interface SignUpHelper {
        apiRequest(method: string, url: string, body: any): Cypress.Chainable<any>;
        // Add any other custom commands here
      }
      
      declare global {
        namespace Cypress {
          interface Chainable {
            customCommand: SignUpHelper;
          }
        }
      }
*/
Cypress.Commands.add('getByCy', getByCy);
//Cypress.Commands.add('apiRequest', apiRequest);