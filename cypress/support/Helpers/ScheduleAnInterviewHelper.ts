import { ICreateCandidateAPIResponse } from "../CandidateAPI/Response/CandidateAPIResponse";
import userInit from "../init/candidateInit";
const baseUrl = Cypress.config("baseUrl");
let candidateID: number;

export const URLs = {
  candidates: `${baseUrl}/web/index.php/api/v2/recruitment/candidates`,
};

export default class candidate {
  static addNewCandidateViaAPI() {
    return new Cypress.Promise((resolve, reject) => {
      cy.addNewCandidate("POST", URLs.candidates, userInit.initUser()).then(
        (response) => {
          candidateID = response.data.id;
           resolve(candidateID);
           
        }
      );
    });
  }

  static shortlistCandidateStatus(candidateID: string) { 
    cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate/${candidateID}`) 
    cy.addNewCandidate('PUT', `${URLs.candidates}/${candidateID}/shortlist`, userInit.shortlistCandidate()) 
}

}
