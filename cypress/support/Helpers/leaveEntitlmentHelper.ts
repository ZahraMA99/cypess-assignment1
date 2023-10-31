import loginPage from "../../support/pageObjects/loginPage";
import logOutInPage from "../../support/pageObjects/logOutInPage";

const loginObj: loginPage = new loginPage();
const logoutObj: logOutInPage = new logOutInPage();

const baseUrl = Cypress.config("baseUrl");
let leaveRequestID: string;

export const URLs = {
  addEntitlment: `${baseUrl}/web/index.php/api/v2/leave/leave-entitlements`,
  applyLeave: `${baseUrl}/web/index.php/api/v2/leave/leave-requests`,
  approveLeave: `${baseUrl}/web/index.php/api/v2/leave/employees/leave-requests`,
};

export default class leaveEntitlment {
  static logOutLogIn(username: string, password: string) {
    logoutObj.logOut();
    loginObj.userLogin(username, password);
  }

  static addEntitlmentViaAPI(empNum: string) {
    cy.request({
      method: "POST",
      url: `${URLs.addEntitlment}`,
      body: {
        empNumber: empNum,
        leaveTypeId: 8,
        fromDate: "2023-01-01",
        toDate: "2023-12-31",
        entitlement: "10",
      },
    }).then(() => {
      cy.log("---- SUCCESSFULL: ADMIN ADD NEW ENTITLMENT ----");
    });
  }

  static applyLeaveViaAPI() {
    return new Cypress.Promise((resolve, reject) => {
      cy.request({
        method: "POST",
        url: `${URLs.applyLeave}`,
        body: {
          leaveTypeId: 8,
          fromDate: "2023-10-31",
          toDate: "2023-11-02",
          comment: "my entitlments",
          duration: {
            type: "half_day_morning",
          },
          partialOption: "all",
        },
      }).then((response) => {
        leaveRequestID = response.body.data.id;
        resolve(leaveRequestID);
        cy.log("---- SUCCESSFULL: EMPLOYEE APPLY THE LEAVE ----");
      });
    });
  }

  static approveLeaveViaAPI(leaveRequestID: string) {
    cy.request({
      method: "PUT",
      url: `${URLs.approveLeave}/${leaveRequestID}`,
      body: {
        action: "APPROVE",
      },
    }).then(() => {
      cy.log("---- SUCCESSFULL: ADMIN APPROVED LEAVE ----");
    });
  }
}
