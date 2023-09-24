class addEmployee {
  // Elemnts
  elements = {
    MainMenuItems: () => cy.get(".oxd-sidepanel-body"),
    AddEmp: () => cy.get(".oxd-button--secondary"),
    EmployeeInputName: () => cy.get(".--name-grouped-field"),
    saveNewEmp: () => cy.get('button[type="submit"]'),
    createLoginSwitch: () => cy.get(".oxd-switch-wrapper"),
    userName: () =>
      cy.get(
        "#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.orangehrm-employee-container > div.orangehrm-employee-form > div:nth-child(4) > div > div:nth-child(1) > div > div:nth-child(2) > input"
      ),
    password: () =>
      cy.get(
        "#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.orangehrm-employee-container > div.orangehrm-employee-form > div.oxd-form-row.user-password-row > div > div.oxd-grid-item.oxd-grid-item--gutters.user-password-cell > div > div:nth-child(2) > input"
      ),
    confirmPassword: () =>
      cy.get(
        "#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div.orangehrm-employee-container > div.orangehrm-employee-form > div.oxd-form-row.user-password-row > div > div:nth-child(2) > div > div:nth-child(2) > input"
      ),
    statusEnabled: () => cy.get(".--label-right"),
    statusDisabled: () => cy.get(".--label-left"),
    save: () => cy.get(".oxd-form-actions"),
    assertEmployeeName: () => cy.get(".orangehrm-edit-employee-name"),
  };
  // Actions
  addNewEmployee(
    firstName: string,
    middleName: string,
    lastName: string,
    userName: string,
    password: string,
    confirmPassword: string
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
    //this.elements.statusEnabled().click();
    //this.elements.statusDisabled().click();
    this.elements.save().children().eq(2).click();
  }
  //- Write an assertion for the Employee name text shown in the header !! not complete yet..
  checkEmployeeName(firstName: string, LastName: string) {
    this.elements
      .assertEmployeeName()
      .should("have.string", `${firstName} ${LastName}`);
  }
}
export default addEmployee;
