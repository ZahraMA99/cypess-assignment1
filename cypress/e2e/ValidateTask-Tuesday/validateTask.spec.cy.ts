import loginPage from "../../support/pageObjects/loginPage";
import candidate from "../../support/Helpers/ScheduleAnInterviewHelper";
import scheduleInterview from "../../support/pageObjects/candidateInterviewPage";
import validateTask from "../../support/pageObjects/validateTaskePage";

const loginObj: loginPage = new loginPage();
const interviewObj: scheduleInterview = new scheduleInterview();
const validateTaskObj: validateTask = new validateTask();
let candidateID: string;

describe("OrangHRM - Validation", () => {
  beforeEach(function () {
    cy.visit("/").as("LoginPage");
    loginObj.userLogin("Admin", "admin123");
  });

  it("O1: Validate table", () => {
    candidate.addNewCandidateViaAPI().then((resolve) => {
      candidateID = `${resolve}`;
      cy.log(candidateID);
    });
    validateTaskObj.validateTask();
  });
});
