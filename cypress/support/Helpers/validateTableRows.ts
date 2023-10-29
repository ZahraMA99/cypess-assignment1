import { data } from "cypress/types/jquery";

const baseUrl = Cypress.config("baseUrl");

let total: number;
export const URLs = {
  tableRowsCountAPI: `${baseUrl}/web/index.php/api/v2/recruitment/candidates?limit=50&offset=0&model=list&sortField=candidate.dateOfApplication&sortOrder=DESC`,
};

export default class validateTableRows {
  static getTheTotalCountOfRows() {
    return new Cypress.Promise((resolve, reject) => {
    return cy.api({
      method: "GET",
      url: URLs.tableRowsCountAPI,
      body: {},
    }).its("body").then((response) => {
      total = response.Response?.meta.total;
      resolve(total);
    })
  })
}
}
