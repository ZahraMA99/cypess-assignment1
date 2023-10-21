import { ICreateEmployeeAPIResponse } from "../loginAccountAPI/Response/employeeLoginAccountResponse";
import userInit from "../init/employeeLoginInit";
const baseUrl = Cypress.config("baseUrl");
let empNum: string;

export const URLs = {
  employee: `${baseUrl}/web/index.php/api/v2/pim/employees`,
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

}
