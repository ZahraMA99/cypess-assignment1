export default class logOutInPage{
    elements = {
        dropDown: () => cy.get(".oxd-userdropdown-tab"),
        logoutBtn: () => cy.get('a[href*="/web/index.php/auth/logout"]'),
    }

    logOut(){
        this.elements.dropDown().click();
        this.elements.logoutBtn().click();
    }
}
