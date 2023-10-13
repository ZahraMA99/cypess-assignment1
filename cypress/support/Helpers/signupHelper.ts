import userInit from "../init/userInit";

const baseUrl = Cypress.config().baseUrl;

export const URLs = {
  users: `${baseUrl}/api/user`,
};

export default class addUser{
    static addNewUserViaAPI(){
        cy.addNewUser(URLs.users, userInit.initUser());
    }
}