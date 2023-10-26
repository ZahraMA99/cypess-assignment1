
import { ICreateEmployeePayload } from "../API/Payload/UserAPIPayload";
import { ICreateEmployeeResponse } from "../API/Response/UserAPIResponse";

declare global {
  namespace Cypress {
    interface Chainable {
      addNewUser: (
        requestURL: string,
        employeePayload: ICreateEmployeePayload
      ) => Chainable<ICreateEmployeeResponse>;
    }
  }
}

Cypress.Commands.add(
  "addNewUser",
  (requestURL: string, userPayload: ICreateEmployeePayload) => {
    return cy.api({
      method: "POST",
      url: requestURL,
      body: userPayload,
      failOnStatusCode: false,
      headers: {'Content-Type': 'application/json'}
    }).its('body');
  }
);
