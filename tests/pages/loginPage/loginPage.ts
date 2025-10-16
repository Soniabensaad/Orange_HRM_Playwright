import BasePage from "../basePage";

export  default class LoginPage extends BasePage {
    private readonly usernameId = this.page.locator('[class="oxd-input oxd-input--active"]')
    
    private readonly passwordId = this.page.locator('[class="oxd-input oxd-input--active"]')

    protected readonly loginButton = this.page.locator('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]')
    

    async enterUsername (){
        await this.enterText(this.usernameId, 'Admin')
    }
   async enterPassword() {
  await this.enterText(this.passwordId, 'admin123');
}

    async clickButton(){
        await this.clickElemment(this.loginButton)
    }

}
