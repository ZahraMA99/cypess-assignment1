export default class logOutInPage{
    elements = {
        dropDown: () => cy.get(".oxd-userdropdown-icon"),
        logoutBtn: () => cy.contains('.oxd-userdropdown-link', "Logout"),
    }

    logOut(){
        this.elements.dropDown().click({force: true});
        this.elements.logoutBtn().click();
    }
}
