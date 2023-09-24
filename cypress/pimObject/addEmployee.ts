class addEmployee {
// Elemnts 
  elements = {
    MainMenuItems: () => cy.get(".oxd-sidepanel-body"),
    AddEmp: () => cy.get(".oxd-button--secondary"),
    EmployeeInputName: () => cy.get(".--name-grouped-field"),
    saveNewEmp: () => cy.get('button[type="submit"]'),
    createLoginSwitch: () => cy.get('.oxd-switch-wrapper'),
    userName: () => cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.orangehrm-employee-container > div.orangehrm-employee-form > div:nth-child(4) > div > div:nth-child(1) > div > div:nth-child(2) > input'),
    };
// Actions
  addNewEmployee(firstName: string, MiddleName: string, LastName: string, userName: string) {
    this.elements.MainMenuItems().contains("PIM").click();
    this.elements.AddEmp().eq(1).click();
    this.elements.EmployeeInputName().children().eq(0).type(firstName);
    this.elements.EmployeeInputName().children().eq(1).type(MiddleName);
    this.elements.EmployeeInputName().children().eq(2).type(LastName);
    this.elements.createLoginSwitch().click();
    this.elements.userName().type(userName);
  }
}
export default addEmployee;
