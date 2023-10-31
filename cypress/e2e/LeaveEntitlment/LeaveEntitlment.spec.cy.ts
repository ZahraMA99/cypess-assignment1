import employee from "../../support/Helpers/timesheetHelper";
import leaveEntitlment from "../../support/Helpers/leaveEntitlmentHelper";
import loginPage from "../../support/pageObjects/loginPage";
import leaveEntitlmentPage from "../../support/pageObjects/leaveEntitlmentPage";

const loginObj: loginPage = new loginPage();
const leaveEntitlmentObj: leaveEntitlmentPage = new leaveEntitlmentPage();

let empNum: string;
let leaveRequestID: string;

describe("OrangHRM - Request Leave & Approve it", () => {
  beforeEach(function () {
    cy.visit("/").as("LoginPage");
    loginObj.userLogin("Admin", "admin123");
  });

  it("O1: Request Leave & Approve it", () => {
    employee.addNewEmployeeViaAPI().then((resolve) => {
      empNum = `${resolve}`;
      employee.createLoginDetailsViaAPI("sondos", "123456Zz/", `${empNum}`);
      leaveEntitlmentObj.clickIntoAddEntitlmentLink();
      leaveEntitlment.addEntitlmentViaAPI(empNum);
      leaveEntitlment.logOutLogIn("sondos", "123456Zz/");
      leaveEntitlmentObj.clickIntoApplyLink();
      leaveEntitlment.applyLeaveViaAPI().then((resolve) => {
        leaveRequestID = `${resolve}`;
        leaveEntitlment.logOutLogIn("Admin", "admin123");
        leaveEntitlmentObj.clickIntoLeaveLink();
        leaveEntitlment.approveLeaveViaAPI(leaveRequestID);
        cy.wait(3000);
      });
      leaveEntitlment.logOutLogIn("sondos", "123456Zz/");
      leaveEntitlmentObj.clickIntoLeaveLink();
      leaveEntitlmentObj.assertionOnLeaveStatus();
    });
  });
});
