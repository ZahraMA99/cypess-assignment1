import addEmployee from "../../pimObject/addEmployee";
import loginPage from "../../pageObjects/loginPage";

const loginObj: loginPage = new loginPage();
const addEmployeeObj: addEmployee = new addEmployee();

// describe 
describe("login", () => {
  beforeEach(function () {
    cy.intercept("/web/index.php/dashboard/index").as("loginPage");
    cy.visit("/web/index.php/auth/login");
    loginObj.login("Admin", "admin123");
  });

// validate locations api
  /*it("Validate locations api", () => {
    cy.request("/web/index.php/api/v2/dashboard/employees/locations").then(
      (response) => {
        expect(response).to.have.property("status", 200);
      }
    );
  });*/

  // add employee test case 
  it("add employee", () => {
    addEmployeeObj.addNewEmployee("Zahra", "Mahmoud", "Aqel", "zahramh7", "123456789Xx", "123456789Xx");
    addEmployeeObj.checkEmployeeName("Zahra", "Aqel");
  });

});
