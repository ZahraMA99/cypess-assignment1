export default class recruitmentPage {
  elements = {
    MainMenuItems: () => cy.get(".oxd-sidepanel-body"),
  };

  clickOnCandidate() {
    this.elements.MainMenuItems().contains("Recruitment").click();
  }
}
