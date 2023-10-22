import { ICreateEmployeeAPIResponse } from "../loginAccountAPI/Response/employeeLoginAccountResponse";
import userInit from "../init/employeeLoginInit";
import genericMethods from "../Helpers/genericFunctions";

const baseUrl = Cypress.config("baseUrl");
let empNum: string;
let username: string;
let password: string;

export const URLs = {
  employee: `${baseUrl}/web/index.php/api/v2/pim/employees`,
  loginDetails: `${baseUrl}/web/index.php/api/v2/admin/users`,
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

  static createLoginDetailsViaAPI(username: string, password: string, employeeNum: string) {
    cy.request({
      method: "POST",
      url: `${URLs.loginDetails}`,
      body: {
        empNumber: employeeNum,
        password: password,
        status: true,
        userRoleId: 2,
        username: username,
      },
    }).then((response) => {
      console.log("createLoginDetailsViaAPI", response.body);
    });
  }
}
