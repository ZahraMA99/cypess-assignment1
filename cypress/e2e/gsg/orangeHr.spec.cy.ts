import addEmployee from "../../pimObject/addEmployee";
import loginPage from "../../pageObjects/loginPage";

const loginObj: loginPage = new loginPage();
const addEmployeeObj: addEmployee = new addEmployee();

describe("login", () => {
  beforeEach(function () {
    cy.intercept("/web/index.php/dashboard/index").as("loginPage");
    cy.visit("/web/index.php/auth/login");
    loginObj.login("Admin", "admin123");
  });
  it("Validate locations api", () => {
    cy.request("/web/index.php/api/v2/dashboard/employees/locations").then(
      (response) => {
        expect(response).to.have.property("status", 200);
      }
    );
  })
});















//oxd-switch-wrapper

/*
import loginPage from "../../pageObjects/loginPage";

const loginObj: loginPage = new loginPage();
const userID: number; // type: number 

describe("Test login page", () => {
  beforeEach(function () {
    cy.intercept("/web/index.php/dashboard/index").as("loginPage");
    cy.visit("/web/index.php/auth/login");
    loginObj.login("Admin", "admin123");
  });

  it("Validate locations api", () => {
    cy.request("/web/index.php/api/v2/dashboard/employees/locations").then(
      (response) => {
        expect(response).to.have.property("status", 200);
      }
    );
  });

  it("Post new user", () => {
    cy.request({
      method: "POST",
      url: "/web/index.php/api/v2/admin/users",
      body: {
        username: "zahraa",
        password: "c12345678",
        status: true,
        userRoleId: 1,
        empNumber: 53,
      },
    }).then((response) => {
      expect(response).property("status").to.equal(200);
      userID = response.body.data.id;
      console.log("USER ID: " + userID);
    });
  });

  it("Delete user", () => {
    cy.request({
      method: "DELETE",
      url: "/web/index.php/api/v2/admin/users",
      body: {
        ids: [userID],
      },
    }).then((response) => {
      expect(response).property("status").to.equal(200);
    });
  });
});
*/
