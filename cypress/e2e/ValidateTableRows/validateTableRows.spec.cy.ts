import loginPage from "../../support/pageObjects/loginPage";
import validateTableRows from "../../support/Helpers/validateTableRows";
import validateTableRowsPage from "../../support/pageObjects/ValidateTableRowsPage";

const loginObj: loginPage = new loginPage();
const validateTableRowsObj: validateTableRowsPage = new validateTableRowsPage();
//let total: number;

describe("OrangHRM - validate table rows", () => {
  beforeEach(function () {
    cy.visit("/").as("LoginPage");
    loginObj.userLogin("Admin", "admin123");
  });

  it("validate table rows", () => {
    validateTableRows.getTheTotalCountOfRows().then((resolve) => {
      let total = `${resolve}`
      cy.log(total);
      validateTableRowsObj.enterRecruitment();
      let countNumberOfRows = validateTableRowsObj.countNumberOfRows();
      cy.wrap(countNumberOfRows).should('eq', resolve);

    })
  });
});
