import { WebPage } from "./WebPage";

export class DashboardPage extends WebPage{
    constructor(page){
        super(page)
        this.upgradeButton = page.locator('//button[@class="oxd-glass-button orangehrm-upgrade-button"]');
        this.userDDMenu = page.locator('//p[@class= "oxd - userdropdown - name"]');
        this.hamburgerMenuIcon = page.locator('//i[@class= "oxd - icon bi - list oxd - topbar - header - hamburger" ]');
        this.aboutTextFromDDMenu = page.locator('ul.oxd-dropdown-menu > li:first-child');
        this.menuSideBarButton = page.locator('div.oxd-main-menu-search > button');
        this.adminSideBarItemButton = page.locator('//span[text() = "Admin"]');
        this.versionElement = page.locator('//div[@class = "oxd - grid - 2 orangehrm - about"]/div[4]/p');
        this.aboutItemButton = page.locator('//div[@class = "oxd - topbar - header - userarea"]/ul/li/ul/li[1]/a');
        this.helpIconButton = page.locator('div.oxd-topbar-body-nav-slot > button');
        this.orangeHRMIconClickBtn = page.locator('div.oxd-sidepanel-header');
        this.searchInputBox = page.locator('input[placeholder = "Search"]');
        this.sidePanelBody = page.locator('div.oxd-sidepanel-body');
    }

    async clickUpgradeButton() {
        await this.upgradeButton.click();
    }

    async getCurrentPageURL() {
        return await this.page.url();
    }
    async openUserDropdown() {
        await this.userDDMenu.click();
    }

    async getUserDropdownOptions() {
        return await this.page.locator('ul.oxd-dropdown-menu > li').allTextContents();
    }
    async openAboutFromDropdown() {
        await this.userDDMenu.click();
        await this.aboutItemButton.click();
    }

    async getVersionInfo() {
        return await this.versionElement.textContent();
    }
    async clickMenuButton() {
        await this.menuSideBarButton.click();
    }

    async isSidebarExpanded() {
        return await this.sidePanelBody.isVisible();
    }
    async clickHelpIcon() {
        await this.helpIconButton.click();
    }

    async getNewPageTitle() {
        const [newPage] = await Promise.all([
            this.page.waitForEvent('popup'),
            this.helpIconButton.click()
        ]);
        return await newPage.title();
    }
    async clickOrangeHRMIcon() {
        await this.orangeHRMIconClickBtn.click();
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