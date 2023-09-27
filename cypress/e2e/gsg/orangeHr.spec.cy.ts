import addEmployee from "../../pageObjects/addEmployee";
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

  // add employee test case 
  it("add employee", () => {
    addEmployeeObj.addNewEmployee("mela", "sultan", "sh", "mmila", "123456789Xx", "123456789Xx", "melo");
    //addEmployeeObj.checkEmployeeName("Zahra", "Aqel");
  });

});
