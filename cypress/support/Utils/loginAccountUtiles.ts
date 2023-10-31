// custom command in utils 

import { ICreateEmployeeAPIPayload } from "../loginAccountAPI/Payload/employeeLoginAccountPayload";
import { ICreateEmployeeAPIResponse } from "../loginAccountAPI/Response/employeeLoginAccountResponse";

declare global {
  namespace Cypress {
    interface Chainable {
        addNewEmployee: (
        method: string,
        requestURL: string,
        employeePayload: ICreateEmployeeAPIPayload
      ) => Chainable<ICreateEmployeeAPIResponse>;
    }
  }
}

Cypress.Commands.add(
  "addNewEmployee",
  (method: string, requestURL: string, employeeLoginAccountPayload: ICreateEmployeeAPIPayload) => {
    return cy.request({
      method: method,
      url: requestURL,
      body: employeeLoginAccountPayload,
      //failOnStatusCode: false,
     // headers: {'Content-Type': 'application/json'}
    }).its('body');
  }
);
