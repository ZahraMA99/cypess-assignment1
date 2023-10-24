
import { ICreateCandidateAPIPayload } from "../CandidateAPI/Payload/CandidateAPIPayload";
import { ICreateCandidateAPIResponse } from "../CandidateAPI/Response/CandidateAPIResponse"; 

declare global {
  namespace Cypress {
    interface Chainable {
        addNewCandidate: (
        method: string,
        requestURL: string,
        candidatePayload: ICreateCandidateAPIPayload
      ) => Chainable<ICreateCandidateAPIResponse>;
    }
  }
}

Cypress.Commands.add(
  "addNewCandidate",
  (method: string, requestURL: string, candidatePayload: ICreateCandidateAPIPayload) => {
    return cy.request({
      method: method,
      url: requestURL,
      body: candidatePayload,
      //failOnStatusCode: false,
      // headers: {'Content-Type': 'application/json'}
    }).its('body');
  }
);
