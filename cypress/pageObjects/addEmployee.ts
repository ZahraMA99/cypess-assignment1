class addEmployee {
  // Elemnts
  elements = {
    MainMenuItems: () => cy.get(".oxd-sidepanel-body"),
    AddEmp: () => cy.get(".oxd-button--secondary"),
    EmployeeInputName: () => cy.get(".--name-grouped-field"),
    saveNewEmp: () => cy.get('button[type="submit"]'),
    createLoginSwitch: () => cy.get(".oxd-switch-wrapper"),
    userName: () => cy.get("#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.orangehrm-employee-container > div.orangehrm-employee-form > div:nth-child(4) > div > div:nth-child(1) > div > div:nth-child(2) > input"),
    password: () => cy.get("#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.orangehrm-employee-container > div.orangehrm-employee-form > div.oxd-form-row.user-password-row > div > div.oxd-grid-item.oxd-grid-item--gutters.user-password-cell > div > div:nth-child(2) > input"),
    confirmPassword: () => cy.get("#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.orangehrm-employee-container > div.orangehrm-employee-form > div.oxd-form-row.user-password-row > div > div:nth-child(2) > div > div:nth-child(2) > input"),
    save: () => cy.get(".oxd-form-actions"),
    //employeeNickName: () => cy.get(".oxd-form > :nth-child(1) > :nth-child(2) > .oxd-grid-item--gutters > .oxd-input-field-bottom-space > :nth-child(2) > input "),
  };
  // Actions
  addNewEmployee(
    firstName: string,
    middleName: string,
    lastName: string,
    userName: string,
    password: string,
    confirmPassword: string,
  ) {
    this.elements.MainMenuItems().contains("PIM").click();
    this.elements.AddEmp().eq(1).click();
    this.elements.EmployeeInputName().children().eq(0).type(firstName);
    this.elements.EmployeeInputName().children().eq(1).type(middleName);
    this.elements.EmployeeInputName().children().eq(2).type(lastName);
    this.elements.createLoginSwitch().click();
    this.elements.userName().type(userName);
    this.elements.password().type(password);
    this.elements.confirmPassword().type(confirmPassword);
    this.elements.save().children().eq(2).click();
  }

}
export default addEmployee;



