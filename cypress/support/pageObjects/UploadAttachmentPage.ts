export default class uploadAttachment {
  elements = {
    mainMenuItems: () => cy.get(".oxd-sidepanel-body"),
    navbar: () => cy.get(".oxd-topbar-body-nav"),
    tableBody: () => cy.get(".oxd-table-body"),
    //editIcon: () => cy.get(".bi-pencil-fill"),
    addBtn: () => cy.get(".orangehrm-attachment-header"),
    browseBtn: () => cy.get(".oxd-file-input-icon"),
    inputFile: () => cy.get('input[type="file"]'),
    saveContainer: () => cy.get(".orangehrm-background-container"),
    //saveBtn: () => cy.get('button[type="Submit"]'),
  };

  accessAddAttachmentBtn() {
    this.elements.mainMenuItems().contains("Recruitment").click();
    this.elements.navbar().contains("Vacancies").click();
    this.elements.tableBody().find(".oxd-table-card").as("vacancy record");
    cy.get("@vacancy record").eq(1).find(".bi-pencil-fill").click({force: true});
   
  }
  
  uploadFile(path: string) {
    this.elements.addBtn().contains("Add").click();
   // this.elements.browseBtn().click();
    //this.elements.inputFile().attachFile(path);
    this.elements.saveContainer().children().should('have.length', 3).get('button[type="Submit"]').contains("Save").click();
  }

  // Validation
}
