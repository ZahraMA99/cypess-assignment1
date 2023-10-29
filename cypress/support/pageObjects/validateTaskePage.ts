export default class validateTask{
    elements = {
        table: () => cy.get('.oxd-table > .oxd-table-header'),
        MainMenuItems: ()=>cy.get('.oxd-sidepanel-body'), 
    }
    
    validateTask(){
    this.elements.MainMenuItems().contains('Recruitment').click();
    this.elements.table().contains('Vacancy');
    cy.log("foundit");
    }

}
