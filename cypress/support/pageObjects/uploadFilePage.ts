export default class uploadFile {
  elements = {
    MainMenuItems: () => cy.get(".oxd-sidepanel-body"),
    userName: () => cy.getByCy("Username"),
    password: () => cy.getByCy("Password"),
    loginBtn: () => cy.get("[type=submit]"),
    addEmpBtn: () => cy.get(".oxd-button > .oxd-icon"),
    firstName: () => cy.get(".oxd-input.oxd-input--active.orangehrm-firstname"),
    lastName: () => cy.get(".oxd-input.oxd-input--active.orangehrm-lastname"),
    email: () => cy.get(":nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"), //getByCy("Type here"),
    browsIcon: () => cy.get(".oxd-file-button"), 
    //uploadIcon: () => cy.get(".oxd-file-input-icon"),
    uploadFile: () => cy.get('input[type = "file"]'), 
    //resumeInput: () => cy.get('.oxd-input-group'),
    uploadTxt: () => cy.get('.oxd-file-input-div'),
    saveBtn: () => cy.get('button[type="submit"]'),
  };

  uploadFile(path: string) {
    this.elements.MainMenuItems().contains("Recruitment").click();
    this.elements.addEmpBtn().click();
    this.elements.firstName().type("mero");
    this.elements.lastName().type("mm");
    this.elements.email().type("m@gmail.com"); 
    this.elements.browsIcon().click(); 
    this.elements.uploadFile().selectFile(path).click();
    this.elements.saveBtn().click();
  }

  validateUploadingFile(){
    this.elements.uploadTxt().contains("file.pdf")
  }
}
