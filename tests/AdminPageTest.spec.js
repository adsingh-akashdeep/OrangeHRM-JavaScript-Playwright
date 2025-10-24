import {test, expect} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
import { AdminPage } from "../pages/AdminPage";
import { ConfigReader } from "../utils/ConfigReader";
import { AppConstants } from "../utils/Constants";

test.describe('Admin Page Tests', async () => {
    let loginPage;
    let dashboardPage;
    let adminPage;

    test.beforeEach(async ({page}) => {
        test.setTimeout(30000);
        loginPage = new LoginPage(page);
        dashboardPage = new DashboardPage(page);
        adminPage = new AdminPage(page); 

        await loginPage.navigateToLoginPage();
        await loginPage.doLogin('Admin', 'admin123');
    });

    test('verifyUserManagementDropdownDisplaysItems',async({page})=>{
        await adminPage.adminOptionClick();
        await adminPage.openUserManagementDropdown();
        const items = await adminPage.getUserManagementMenuItems();
        expect(items.length).toBeGreaterThan(0);
    });

    test('verifyJobDropdownDisplaysAllOptions',async({page})=>{
        await adminPage.adminOptionClick();
        await adminPage.openJobDropdown();
        const items = await adminPage.getJobDropdownItems();
        expect(items.length).toBeGreaterThan(0);
    });

    test.only('verifySystemUsersInputsFindAccurateUser',async({page})=>{
        await adminPage.adminOptionClick();
        await adminPage.openUserManagementDropdown();
        await adminPage.searchSystemUser('Admin');

        const results = await adminPage.getUserFromSearchResult();
        // Extract text from each
        const texts = await Promise.all(results.map(async el => el.textContent()));
        // Check if any element includes the word "Admin"
        const hasAdmin = texts.some(text => text.includes('Admin'));
        expect(hasAdmin).toBeTruthy();
    });
});
 