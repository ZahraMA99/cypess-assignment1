
import time from '../../support/pageObjects/time';
import loginPage from "../../support/pageObjects/loginPage"; 


const timeObj: time = new time();
const loginObj: loginPage = new loginPage(); 


describe('Print time zone', () => { 
    beforeEach(function () { 
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        loginObj.userLogin('Admin', 'admin123');
    })

    it('Print time', () => {
        timeObj.getTime();
    })
});