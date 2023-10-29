export default class buzzPage {
  elements = {
    sidebarTabs: () => cy.get(".oxd-sidepanel-body"),
    textArea: () => cy.get(".oxd-buzz-post-input"),
    postBtn: () => cy.get(".oxd-buzz-post-slot > .oxd-button"),
  };

  clickIntoBuzzTab() {
    this.elements.sidebarTabs().contains("Buzz").click();
  }

  createPost(text: string) {
    this.elements.textArea().type(text);
    this.elements.postBtn().click({ force: true });
  }
}
