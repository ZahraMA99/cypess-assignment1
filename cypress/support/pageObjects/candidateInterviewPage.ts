export default class scheduleInterview {
    elements = { 
        interviewBtn: () => cy.get('.oxd-button--medium.oxd-button--success'), 
        inputFields: () => cy.get('.oxd-input'), 
        interviewer: () => cy.get('[placeholder="Type for hints..."]'), 
        interviewerOptions: () => cy.get('.oxd-autocomplete-dropdown'), 
        month: () => cy.get('.oxd-calendar-selector-month-selected'), 
        monthOptions: () => cy.get('.oxd-calendar-dropdown--option'), 
        year: () => cy.get('.oxd-calendar-selector-year-selected'), 
        yearOptions: () => cy.get('.oxd-calendar-dropdown--option'), 
        day: () => cy.get('.oxd-calendar-dates-grid'), 
        saveBtn: () => cy.get('.oxd-button--secondary.orangehrm-left-space'), 
        status: () => cy.get('.oxd-text.oxd-text--p.oxd-text--subtitle-2') 
    } 
 
    scheduleInterviewDetails() { 
        cy.fixture('scheduleInterviewInfo').as('interviewInfo') 
        cy.get('@interviewInfo').then((Interviewinfo: any) => { 
            this.elements.interviewBtn().click({ force: true }) 
            this.elements.inputFields().eq(5).type(Interviewinfo.interviewTitle) 
            this.elements.interviewer().type(Interviewinfo.interviewerPicker).invoke('show');
            this.elements.interviewerOptions().contains(Interviewinfo.interviewer).click(); 
            this.elements.inputFields().eq(6).click(); 
            this.elements.month().click(); 
            this.elements.monthOptions().contains(Interviewinfo.month).click(); 
            this.elements.year().click(); 
            this.elements.yearOptions().contains(Interviewinfo.year).click(); 
            this.elements.day().contains(Interviewinfo.day).click(); 
            this.elements.saveBtn().click() 
        }) 
    } 
    verifyStatus() { 
        this.elements.status().should('contain', 'Interview Scheduled') 
    } 
} 

  