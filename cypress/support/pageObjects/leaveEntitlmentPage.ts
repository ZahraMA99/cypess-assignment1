export default class leaveEntitlmentPage {
  elements = {
    sidebarTabs: () => cy.get(".oxd-sidepanel-body"),
    topbar: () => cy.get(".oxd-topbar-body"),
    addEntitlmentLink: () => cy.get(".oxd-topbar-body-nav-tab-link"),
    meLeaveTableBodyContainer: () =>
      cy.get(".oxd-table-body > .oxd-table-card"),
  };

  clickIntoEntitlementsLink() {
    this.elements.sidebarTabs().contains("Leave").click();
    this.elements.topbar().contains("Entitlements").click();
  }

  clickIntoMyEntilments() {
    this.clickIntoEntitlementsLink();
    this.elements.addEntitlmentLink().contains("My Entitlements").click();
  }

  clickIntoAddEntitlmentLink() {
    this.clickIntoEntitlementsLink();
    this.elements.addEntitlmentLink().contains("Add Entitlements").click();
  }

  clickIntoLeaveLink() {
    this.elements.sidebarTabs().contains("Leave").click();
  }

  clickIntoApplyLink() {
    this.clickIntoEntitlementsLink();
    this.elements.topbar().contains("Apply").click();
  }

  assertionOnLeaveStatus() {
    this.elements.meLeaveTableBodyContainer().should("Scheduled");
  }
}
