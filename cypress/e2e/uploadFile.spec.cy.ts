import loginPage from "../support/pageObjects/loginPage";
import uploadFile from "../support/pageObjects/uploadFilePage";

const loginObj: loginPage = new loginPage();
const uploadFileObj: uploadFile = new uploadFile();

describe("OrangHRM - Upload File", () => {
  beforeEach(function () {
    cy.visit("/").as("LoginPage");
    loginObj.userLogin("Admin", "admin123");
  });

  it("O1: upload file", () => {
    const path = "cypress/fixtures/file.pdf"
    uploadFileObj.uploadFile(path);


  });
});
