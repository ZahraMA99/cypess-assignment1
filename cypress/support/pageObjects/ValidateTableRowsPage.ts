export default class validateTableRowsPage {
  elements = {
    MainMenuItems: () => cy.get(".oxd-sidepanel-body"),
    tableBody: () => cy.get(".oxd-table-body"),
  };

  enterRecruitment() {
    this.elements.MainMenuItems().contains("Recruitment").click({ force: true });
  }
  countNumberOfRows() {
    this.elements
      .tableBody()
      .find(".oxd-table-card > .oxd-table-row")
      .then((res) => {
        let countOfTableRows = res.length;
        cy.log(`number of records: ${countOfTableRows}`);
      });
  }
}
