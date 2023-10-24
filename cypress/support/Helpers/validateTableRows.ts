

const baseUrl = Cypress.config("baseUrl");

export const URLs = {
    tableRowsCountAPI: `${baseUrl}/web/index.php/api/v2/recruitment/candidates?limit=50&offset=0&model=list&sortField=candidate.dateOfApplication&sortOrder=DESC`,
}


