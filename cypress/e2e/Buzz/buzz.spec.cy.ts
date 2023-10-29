import employee from "../../support/Helpers/timesheetHelper";
import loginPage from "../../support/pageObjects/loginPage";
import buzzPage from "../../support/pageObjects/buzzPage";

const loginObj: loginPage = new loginPage();
const buzzObj: buzzPage = new buzzPage();
let filePath: string = "cypress/fixtures/buzz.txt";

describe("OrangHRM - Create Post", () => {
  beforeEach(function () {
    cy.visit("/").as("LoginPage");
    loginObj.userLogin("Admin", "admin123");
    buzzObj.clickIntoBuzzTab();
    cy.writeFile(filePath, "Have A nice dreams!");
  });

  it("O1: create post by orangehrm", () => {
    cy.readFile(filePath)
      .should("eq", "Have A nice dreams!")
      .then((text) => {
        buzzObj.createPost(text);
      });
  });
});
