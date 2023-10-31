import loginPage from "../../support/pageObjects/loginPage";
import candidate from "../../support/Helpers/ScheduleAnInterviewHelper";
import scheduleInterview from "../../support/pageObjects/candidateInterviewPage";

const loginObj: loginPage = new loginPage();
const interviewObj: scheduleInterview = new scheduleInterview();
let candidateID: string;

describe("OrangHRM - shedule an interview", () => {
  beforeEach(function () {
    cy.visit("/").as("LoginPage");
    loginObj.userLogin("Admin", "admin123");
  });

  it("O1: Scedule an interview", () => {
    candidate.addNewCandidateViaAPI().then((resolve)=>{ 
      candidateID =`${resolve}`
      candidate.shortlistCandidateStatus(candidateID)
      })
      interviewObj.scheduleInterviewDetails()
      interviewObj.verifyStatus();
  });
});
