import employee from "../../support/Helpers/loginAccount";
import logOutInPage from "../../support/pageObjects/logOutInPage";
import loginPage from "../../support/pageObjects/loginPage";


const loginObj: loginPage = new loginPage();
const logoutObj: logOutInPage = new logOutInPage();

let empNum: string;

describe("OrangHRM - Validation", () => {
  beforeEach(function () {
    cy.visit("/").as("LoginPage");
    loginObj.userLogin("Admin", "admin123");
  });

  it("O1: create Employee", () => {
    employee.addNewEmployeeViaAPI().then((resolve) => {
      empNum = `${resolve}`;
      employee.createLoginDetailsViaAPI("lana", "123456Zz/", `${empNum}`);
    });

    logoutObj.logOut();
    loginObj.userLogin("lana", "123456Zz/");
  });
});
