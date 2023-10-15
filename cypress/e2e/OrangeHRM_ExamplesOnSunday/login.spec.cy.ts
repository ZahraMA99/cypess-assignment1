import loginPage from "../../support/pageObjects/loginPage";
import recruitmentPage from "../../support/pageObjects/recruitmentPage";
const loginObj: loginPage = new loginPage();
const recruitmentObj: recruitmentPage = new recruitmentPage();

describe("Add New Candidate via API", () => {
  beforeEach(function () {
    //cy.intercept("/web/index.php/dashboard/index").as("LoginPage");
    cy.visit("https://opensource-demo.orangehrmlive.com/").as("LoginPage");
    loginObj.userLogin("Admin", "admin123");
    recruitmentObj.clickOnCandidate();
  });

  it("should add a new candidate", () => {
    cy.fixture("candidate.json").then((candidateData) => {
      // api to add new candidate
      cy.api({
        method: "POST",
        url: "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates",
        body: candidateData,
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
       // expect(response.status).to.be.oneOf([200, 201]);
        const candidateID = response.body.data.id;
        console.log(candidateID, "idddddddddd");
        //cy.log(response.body.data);
        //const newStatus = 'shortlisted';
        updateCandidateStatus(candidateID);
      });
    });
  });
});


function updateCandidateStatus(candidateId: number) {
  cy.api({
    method: "PUT",
    url: `https://opensource-demo.orangehrmlive.com/web/index.phpapi/v2/recruitment/candidates/${candidateId}/shortlist`,
    body: {
      note:"note"
    },
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((response) => {
    expect(response)
      .haveOwnProperty("status")
      .to.eq(200);
  })
  .its("body").as("UpdateStatus");;
  /*cy.get("@UpdateStatus").then((responseStatusAPI) => {
    //const res = responseStatusAPI
    console.log(responseStatusAPI, "apiiiiiiiiiiii");
  });*/
}
