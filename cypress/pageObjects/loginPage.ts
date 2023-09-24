class loginPage{
    // elements
    elements = {
        userName: () => cy.getByCy("Username"), // locator
        password: () => cy.getByCy("Password"),
        loginbtn: () => cy.get('button'),
        forgotPassword: () => cy.get('.orangehrm-login-forgot-header'),
        resetbtn: () => cy.get('.orangehrm-forgot-password-button--reset')
    }
    // actions
    login(userName: string, password: string ){
        this.elements.userName().type(userName);
        this.elements.password().type(password);
        this.elements.loginbtn().click();
    }

    forgotPassword(userName: string){
        this.elements.forgotPassword().click();
        this.elements.userName().type(userName);
        this.elements.resetbtn().click();
    }
};
export default loginPage;
