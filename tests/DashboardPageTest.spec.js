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
        loginPage = new LoginPage(page);
        dashboardPage = new DashboardPage(page);
        adminPage = new AdminPage(page);
        
        await loginPage.navigateToLoginPage();
        await loginPage.doLogin('Admin', 'admin123');
    })

    test('verifyUpgradeButtonRedirectsUserToUpgradePage', async({page})=>{

    })
    test('verifyUserDropdownDisplaysAllOptions', async({page})=>{

    })
    test('verifyAboutItemOpensAboutPage', async({page})=>{

    })
    test('verifyMenuButtonExpandsSidebarMenu', async({page})=>{

    })
    test('verifyHelpIconsOpenHelpPage', async({page})=>{

    })
    test('verifyOrangeHRMIconNavigatesToHRMSPage', async({page})=>{

    })
    test('verifyInputInSearchBoxRedirectsToCorrespondingPage',async({page})=>{

    })
})
