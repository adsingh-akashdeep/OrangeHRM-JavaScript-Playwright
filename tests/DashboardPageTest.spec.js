import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
import { AdminPage } from "../pages/AdminPage";
import { ConfigReader } from "../utils/ConfigReader";
import { AppConstants } from "../utils/Constants";

test.describe('Dashboard Page Tests', async() =>{
    let loginPage;
    let dashboardPage;
    let adminPage;
    
    test.beforeEach(async({page})=>{
        test.setTimeout(30000);
        loginPage = new LoginPage(page);
        dashboardPage = new DashboardPage(page);
        adminPage = new AdminPage(page);

        await loginPage.navigateToLoginPage();
        await loginPage.doLogin('Admin', 'admin123');
    })

    test('verifyUpgradeButtonRedirectsUserToUpgradePage', async({page})=>{
        const [newPage] = await Promise.all([
            page.waitForEvent('popup'),
            dashboardPage.clickUpgradeButton(),
        ])
        await newPage.waitForLoadState();
        const newUrl = newPage.url();
        console.log(newUrl);
        expect(newUrl).toContain('upgrade-to-advanced');
    })

    test('verifyUserDropdownDisplaysAllOptions', async({page})=>{
        await dashboardPage.openUserDropdown();
        const itemList = await dashboardPage.getUserDropdownOptions();
        expect(itemList.length).toBeGreaterThan(0);
    })

    test('verifyAboutItemOpensAboutPage', async({page})=>{
        await dashboardPage.openAboutFromDropdown();
        const version = await dashboardPage.getVersionInfo();
        expect(version).toContain('OrangeHRM OS 5.7');
    })

    test('verifyMenuButtonExpandsSidebarMenu', async({page})=>{
        await dashboardPage.clickMenuButton();
        const isExpanded = await dashboardPage.isSidebarExpanded();
        expect(isExpanded).toBeTruthy();
    })

    test('verifyHelpIconsOpenHelpPage', async({page})=>{
        const [newPage] = await Promise.all([
            page.waitForEvent('popup'),
            dashboardPage.clickHelpIcon(),
        ])
        await newPage.waitForLoadState();
        const newUrl = newPage.url();
        console.log(newUrl);
        expect(newUrl).toContain('starterhelp');
    })

    test('verifyOrangeHRMIconNavigatesToHRMSPage', async({page})=>{
        await dashboardPage.clickOrangeHRMIcon();
        const redirectedURL = await dashboardPage.getRedirectedPageURL();
        expect(redirectedURL).toContain('orangehrm');
    })

    test('verifyInputInSearchBoxRedirectsToCorrespondingPage',async({page})=>{
        await dashboardPage.searchForOption('Admin');
        const text = await dashboardPage.getAdminSidebarText();
        expect(text).toContain('Admin');
    })
    
})
