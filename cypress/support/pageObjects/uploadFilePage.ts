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
    uploadIcon: () => cy.get(".oxd-icon.bi-upload.oxd-file-input-icon"), 
    uploadFile: () => cy.get("input[type = 'file']"),
    saveBtn: () => cy.get('button[type="submit"]'),
  };

  uploadFile(path: string) {
    this.elements.MainMenuItems().contains("Recruitment").click();
    this.elements.addEmpBtn().click();
    this.elements.firstName().type("zahar");
    this.elements.lastName().type("aqel");
    this.elements.email().type("zaharaqel@gmail.com"); 
    this.elements.uploadIcon().click();
    this.elements.uploadFile().selectFile(path,{force: true});
    this.elements.saveBtn().click();
  }
}
