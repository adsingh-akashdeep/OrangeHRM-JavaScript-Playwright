import { WebPage } from "./WebPage";

export class DashboardPage extends WebPage{
    constructor(page){
        super(page)
        this.upgradeButton = page.locator('button.oxd-glass-button.orangehrm-upgrade-button');
        this.userDDMenu = page.locator('//p[@class= "oxd-userdropdown-name"]');
        this.hamburgerMenuIcon = page.locator('//i[@class= "oxd-icon.bi-list.oxd-topbar-header-hamburger"]');
        this.aboutTextFromDDMenu = page.locator('ul.oxd-dropdown-menu>li:first-child');
        this.menuSideBarButton = page.locator('div.oxd-main-menu-search > button');
        this.adminSideBarItemButton = page.locator('//span[text()="Admin"]');
        this.versionElement = page.locator('div.oxd-grid-2.orangehrm-about>div:nth-of-type(4)>p');
        this.aboutItemButton = page.locator('//div[@class="oxd-topbar-header-userarea"]/ul/li/ul/li[1]/a');
        this.helpIconButton = page.locator('div.oxd-topbar-body-nav-slot>button');
        this.orangeHRMIconClickBtn = page.locator('div.oxd-sidepanel-header');
        this.searchInputBox = page.locator('input[placeholder="Search"]');
        this.sidePanelBody = page.locator('div.oxd-sidepanel-body');
    }

    async clickUpgradeButton() {
        await this.upgradeButton.click({force:true});
    }

    async getCurrentPageURL() {
        return await this.page.url();
    }
    async openUserDropdown() {
        await this.userDDMenu.click({force:true});
    }

    async getUserDropdownOptions() {
        return await this.page.locator('ul.oxd-dropdown-menu > li').allTextContents();
    }
    async openAboutFromDropdown() {
        await this.userDDMenu.click({force:true});
        await this.aboutItemButton.click({force:true});
    }

    async getVersionInfo() {
        return await this.versionElement.textContent();
    }
    async clickMenuButton() {
        await this.menuSideBarButton.click({force:true});
    }

    async isSidebarExpanded() {
        return await this.sidePanelBody.isVisible();
    }
    async clickHelpIcon() {
        await this.helpIconButton.click({force:true});
    }

    async clickOrangeHRMIcon() {
        await this.orangeHRMIconClickBtn.click({force:true});
    }

    async getRedirectedPageURL() {
        return await this.page.url();
    }
    async searchForOption(optionName) {
        await this.searchInputBox.fill(optionName);
        await this.page.keyboard.press('Enter');
    }

    async getAdminSidebarText() {
        return await this.adminSideBarItemButton.textContent();
    }

}