import employee from "../../support/Helpers/loginAccount";
import logOutInPage from "../../support/pageObjects/logOutInPage";
import loginPage from "../../support/pageObjects/loginPage";


const loginObj: loginPage = new loginPage();
const logoutObj: logOutInPage = new logOutInPage();

let empNum: string;
//let arr: string[] = [];

describe("OrangHRM - Validation", () => {
  beforeEach(function () {
    cy.visit("/").as("LoginPage");
    loginObj.userLogin("Admin", "admin123");
  });

  it("O1: create Employee", () => {
    employee.addNewEmployeeViaAPI().then((resolve) => {
      empNum = `${resolve}`;
      //arr.push(empNum);
    });

    //employee.createLoginDetailsViaAPI("meroo", "123456Zz/", arr[arr.length]);
    logoutObj.logOut();
    //loginObj.userLogin("meroo", "123456Zz/");
  });
});
