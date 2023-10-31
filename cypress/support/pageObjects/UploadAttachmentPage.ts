export default class uploadAttachment {
  elements = {
    mainMenuItems: () => cy.get(".oxd-sidepanel-body"),
    navbar: () => cy.get(".oxd-topbar-body-nav"),
    tableBody: () => cy.get(".oxd-table-body"),
    addVacancyBtn: () => cy.get(".orangehrm-header-container"),
    inputFile: () => cy.get('input[type="file"]'),
    saveContainer: () => cy.get(".orangehrm-background-container"),
    vacancyName: () => cy.get(".oxd-input--active"),
    jobTitleSelector: () => cy.get(".oxd-select-text-input"),
    dropDownPicker: () => cy.get(".oxd-select-dropdown.--positon-bottom"),
    hiringManagerPicker: () => cy.get('[placeholder="Type for hints..."]'),
    hiringManagerOptions: () => cy.get(".oxd-autocomplete-dropdown"),
    saveBtn: () => cy.get(".oxd-button--secondary"),
    addAttachmentBtn: () => cy.get(".orangehrm-attachment-header"),
    saveAttachmentBtn: () =>
      cy.get(
        ".:nth-child(3) > .oxd-form > .oxd-form-actions > .oxd-button--secondary"
      ),
    assertion: () => cy.get(".orangehrm-paper-container"),
  };

  clickIntoRecruitmentLink() {
    this.elements.mainMenuItems().contains("Recruitment").click();
  }

  clickIntoVacanciesLink() {
    this.elements.navbar().contains("Vacancies").click();
  }

  clicksIntoAddBtnForVacancy() {
    this.elements.addVacancyBtn().contains("Add").click();
  }

  typeVacancyName() {
    this.elements.vacancyName().eq(1).click().type("accounttmt");
  }

  clickIntoJobTitleSelector() {
    this.elements.jobTitleSelector().click({ force: true }).invoke("show");
    this.elements.dropDownPicker().contains("Account Assistant").click();
  }

  selectHiringManager() {
    cy.fixture("addVacancy").as("data");
    cy.get("@data").then((vacancyinfo: any) => {
      this.elements
        .hiringManagerPicker()
        .type(vacancyinfo.hiringManagerPicker)
        .invoke("show");
      this.elements
        .hiringManagerOptions()
        .contains(vacancyinfo.hiringManager)
        .click();
    });
  }

  clickIntoSaveBtn() {
    this.elements.saveBtn().click({ force: true });
  }

  clicksIntoAddBtnForAttachment() {
    this.elements.addAttachmentBtn().contains("Add").click({ force: true });
  }

  addNewVacancyViaUI() {
    this.clickIntoRecruitmentLink();
    this.clickIntoVacanciesLink();
    this.clicksIntoAddBtnForVacancy();
    this.typeVacancyName();
    this.clickIntoJobTitleSelector();
    this.selectHiringManager();
    this.clickIntoSaveBtn();
  }

  uploadFile(path: string) {
    this.clicksIntoAddBtnForAttachment();
    this.elements.inputFile().selectFile(path, { force: true });
    this.elements
      .saveContainer()
      .find('button[type="Submit"]')
      .eq(1)
      .click({ force: true });
  }

  assertionOnFileName() {
    cy.reload();
    this.elements
      .assertion()
      .contains(".oxd-table-cell")
      .eq(1)
      .should("file.txt");
  }
}
