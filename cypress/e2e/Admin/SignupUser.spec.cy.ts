import { resolve } from "cypress/types/bluebird";
import addUser from "../../support/Helpers/signupHelper";

describe("Signup Logic", () => {
  it("Signup: User should be able to create new user", () => {
    addUser.addNewUserViaAPI().then((resolve) => {
      cy.log(`${resolve}`);
    });
  });
});
