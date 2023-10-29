
class timeSelector{
    elements = {
        time : () => cy.get('.orangehrm-attendance-card-bar')
    }

    getTime(){
        this.elements.time().children().eq(0).contains('span', 'Today');
    }
}

export default timeSelector;