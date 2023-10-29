export default class timesheetPage {
  elements = {
    sidebarTabs: () => cy.get(".oxd-sidepanel-body"),
    employeeName: () =>
      cy.get(
        ".orangehrm-container > .oxd-table > .oxd-table-body > .oxd-table-card"
      ), 
    submitStatus: () => cy.get(".oxd-text--subtitle-2"),
  };

  clickOnTimeTab() {
    this.elements.sidebarTabs().contains("Time").click();
  }

  assertionOnStatus() { // parameter: employeeName: string
    this.clickOnTimeTab();
    this.elements.employeeName().contains("View").click(); // it alwayse take the last row => not accurate
    this.elements.submitStatus().contains("Status: Submitted");
  }
}
