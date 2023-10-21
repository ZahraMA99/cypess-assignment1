import employee from "../../support/Helpers/loginAccount";
import loginPage from "../../support/pageObjects/loginPage";

const loginObj: loginPage = new loginPage();
let empNum: string; 

describe("OrangHRM - Validation", () => {
  beforeEach(function () {
    cy.visit("/").as("LoginPage");
    loginObj.userLogin("Admin", "admin123");
  });

  it("O1: create Employee", () => {
    employee.addNewEmployeeViaAPI().then((resolve) => {
      empNum = `${resolve}`;
      cy.log(empNum);
    });
   // validateTaskObj.validateTask();
  });

});
