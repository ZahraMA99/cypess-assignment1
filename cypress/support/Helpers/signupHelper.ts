import userInit from "../init/userInit";
import { ICreateEmployeeResponse } from "../API/Response/UserAPIResponse";
import { reject, resolve } from "cypress/types/bluebird";
const baseUrl = Cypress.config().baseUrl;

export const URLs = {
  users: `${baseUrl}/api/user`,
};

export default class addUser {
  static addNewUserViaAPI() {
    // promise code
    return new Cypress.Promise<ICreateEmployeeResponse>((resolve, reject) => {
      cy.addNewUser(URLs.users, userInit.initUser()).then(() => {
        resolve('done');
      });
    });
  }
}

// i will add code to append promise there with this code.
// there in this file all the operation excute and then we can complete work in test case:)
