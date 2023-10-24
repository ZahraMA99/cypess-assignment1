import loginPage from "../../support/pageObjects/loginPage";
import uploadFile from "../../support/pageObjects/uploadFilePage";

const loginObj: loginPage = new loginPage();
const uploadFileObj: uploadFile = new uploadFile();

describe("OrangHRM - validate table rows", () => {
  beforeEach(function () {
    cy.visit("/").as("LoginPage");
    loginObj.userLogin("Admin", "admin123");
  });

  it('validate table rows', () => {
    cy.log("motasem");
  })
});