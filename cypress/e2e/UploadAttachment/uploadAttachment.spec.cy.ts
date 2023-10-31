import loginPage from "../../support/pageObjects/loginPage";
import uploadAttachment from "../../support/pageObjects/UploadAttachmentPage";

const loginObj: loginPage = new loginPage();
const uploadAttachmentObj: uploadAttachment = new uploadAttachment();


describe("OrangHRM - Upload Vacancy Attachment", () => {
  beforeEach(function () {
    cy.visit("/").as("LoginPage");
    loginObj.userLogin("Admin", "admin123");
  });

  it("O1: upload vacancy attachment", () => {
    const path = "cypress/fixtures/file.txt"
    uploadAttachmentObj.accessAddAttachmentBtn();
    uploadAttachmentObj.uploadFile(path);
    //uploadFileObj.validateUploadingFile();

  });
});
