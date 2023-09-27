import addEmployee from "../../pageObjects/addEmployee";
import loginPage from "../../pageObjects/loginPage";

const loginObj: loginPage = new loginPage();
const addEmployeeObj: addEmployee = new addEmployee();

// describe
describe("check login", () => {
  beforeEach(function () {
    cy.visit("/web/index.php/auth/login");
    loginObj.login("Admin", "admin123");
  });
});

