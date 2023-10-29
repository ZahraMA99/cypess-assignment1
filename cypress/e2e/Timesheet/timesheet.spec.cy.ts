import employee from "../../support/Helpers/timesheetHelper";
import logOutInPage from "../../support/pageObjects/logOutInPage";
import loginPage from "../../support/pageObjects/loginPage";
import timesheetPage from "../../support/pageObjects/timesheetPage";

const loginObj: loginPage = new loginPage();
const logoutObj: logOutInPage = new logOutInPage();
const timesheetObj: timesheetPage = new timesheetPage();

let empNum: string;
let userID: string;

describe("OrangHRM - Create Employee Timesheets & Make assertion on it", () => {
  beforeEach(function () {
    cy.visit("/").as("LoginPage");
    loginObj.userLogin("Admin", "admin123");
  });

  it("O1: Create Timesheet - Make assertion", () => {
    employee.addNewEmployeeViaAPI().then((resolve) => {
      empNum = `${resolve}`;
      employee.createLoginDetailsViaAPI("Aishah", "123456Zz/", `${empNum}`);
      logoutObj.logOut();
      loginObj.userLogin("Aishah", "123456Zz/");
    });
    timesheetObj.clickOnTimeTab();
    employee.getTimesheetID().then((response) => {
      userID = `${response}`;
      employee.addTimeEntrise(userID);
      employee.submitTimeEntrise(userID);
    });
    logoutObj.logOut();
    loginObj.userLogin("Admin", "admin123");
    timesheetObj.assertionOnStatus();
  });
});
