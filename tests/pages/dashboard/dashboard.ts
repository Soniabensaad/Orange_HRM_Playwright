import BasePage from "../basePage";

export default class dashboard extends BasePage{
private readonly dashboard = this.page.locator('[class="oxd-icon bi-list oxd-topbar-header-hamburger"]');
private readonly myInfo = this.page.locator('[class="oxd-text oxd-text--span oxd-main-menu-item--name"]')

    async dashborD (){
        await this.clickElemment(this.dashboard)
    }
    async myInfos (){
        await this.clickElemment(this.myInfo)
    }
}
