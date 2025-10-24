import { WebPage } from "./WebPage";

export class AdminPage extends WebPage{
    constructor(page){
        super(page);
        this.adminOption = page.locator('//span[text()="Admin"]');
        this.userManagementDDnavigator = page.locator('ul > li.oxd-topbar-body-nav-tab:nth-of-type(1) > span')
        this.userText = page.locator("a[role = 'menuitem']");
        this.jobDDNavigator = page.locator("ul > li.oxd-topbar-body-nav-tab:nth-of-type(2)");
        this.jobTitlesItem = page.locator("ul > li.oxd-topbar-body-nav-tab:nth-of-type(2) > ul > li:nth-of-type(1)");
        this.usernameInputInSystemUsersForm = page.locator("//div[@id='app']//div//div[2]//div//div//div//div[2]//form//div//div//div//div//div[2]//input[@class]");
        this.submitButtonInSystemUserForm = page.locator("button[type = 'submit']");
        this.userInTheSearchResult = page.locator('//div[@class="oxd-table-cell oxd-padding-cell"]/div[text()="Admin"]')
       // this.userInTheSearchResult = page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div[2]/div[3]/div/div[2]/div/div/div[2]/div");
    }

    async adminOptionClick(){
        await this.adminOption.click();
    }
    async openUserManagementDropdown() {
        await this.userManagementDDnavigator.click(); 
    }

    async getUserManagementMenuItems() {
        await this.userManagementDDnavigator.hover();
        return await this.userText.allTextContents(); // captures menu item texts
    }

    async openJobDropdown() {
        await this.jobDDNavigator.click();
    }

    async getJobDropdownItems() {
        await this.jobDDNavigator.click();
        return await this.jobTitlesItem.allTextContents();
    }

    async searchSystemUser(username) {
        await this.usernameInputInSystemUsersForm.fill(username);
        await this.submitButtonInSystemUserForm.click();
    }

    async getUserFromSearchResult() {
        return await this.userInTheSearchResult.allTextContents();
    }

}