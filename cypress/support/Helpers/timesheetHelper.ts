import userInit from "../init/employeeLoginInit";

const baseUrl = Cypress.config("baseUrl");
let empNum: string;

export const URLs = {
  employee: `${baseUrl}/web/index.php/api/v2/pim/employees`,
  loginDetails: `${baseUrl}/web/index.php/api/v2/admin/users`,
  userTimsheet: `${baseUrl}/web/index.php/api/v2/time/timesheets/default?date=2023-10-29`,
  timesheet: `${baseUrl}/web/index.php/api/v2/time/timesheets`,
};

export default class employee {
  static addNewEmployeeViaAPI() {
    return new Cypress.Promise((resolve, reject) => {
      cy.addNewEmployee("POST", URLs.employee, userInit.initUser()).then(
        (response) => {
          empNum = response.data.empNumber;
          resolve(empNum);
        }
      );
    });
  }

  static createLoginDetailsViaAPI(
    username: string,
    password: string,
    employeeNumber: string
  ) {
    cy.request({
      method: "POST",
      url: `${URLs.loginDetails}`,
      body: {
        empNumber: employeeNumber,
        password: password,
        status: true,
        userRoleId: 2,
        username: username,
      },
    }).then((response) => {
      console.log("createLoginDetailsViaAPI", response.body);
    });
  }
  static getTimesheetID() {
    return new Cypress.Promise((resolve, reject) => {
      cy.request({
        method: "GET",
        url: `${URLs.userTimsheet}`,
      }).then((response) => {
        resolve(response.body.data.id);
      });
    });
  }

  static addTimeEntrise(userID: string) {
    cy.request({
      method: "PUT",
      url: `${URLs.timesheet}/${userID}/entries`,
      body: {
        entries: [
          {
            projectId: 2,
            activityId: 12,
            dates: {
              "2023-10-23": {
                duration: "03:00",
              },
              "2023-10-24": {
                duration: "08:00",
              },
              "2023-10-25": {
                duration: "02:00",
              },
              "2023-10-26": {
                duration: "01:00",
              },
              "2023-10-27": {
                duration: "05:00",
              },
              "2023-10-28": {
                duration: "08:00",
              },
              "2023-10-29": {
                duration: "05:00",
              },
            },
          },
        ],
        deletedEntries: [],
      },
    }).then(() => {
      cy.log("----ADDING TIME SUCSESSFULLY----");
    });
  }

  static submitTimeEntrise(userID: string) {
    cy.request({
      method: "PUT",
      url: `${URLs.timesheet}/${userID}`,
      body: {
        action: "SUBMIT",
      },
    }).then(() => {
      cy.log(`----STATUS IS SUBMITTED----`);
    });
  }
}
