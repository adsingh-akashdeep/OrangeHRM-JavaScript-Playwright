import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test.describe('Login Page Tests',async()=>{
    let loginPage;

    test.beforeEach(async({page})=>{
        loginPage = new LoginPage(page);
    });

    test('verifySuccessfulLoginRedirectsToDashboardPage', async({page})=>{
        await loginPage.navigateToLoginPage();
        await loginPage.doLogin('Admin', 'admin123');
        await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    });

    test('verifyOrangeHRMLogoIsDisplayedInLoginPage(', async({page})=>{
        await loginPage.navigateToLoginPage();
        expect(await loginPage.isLogoDisplayed()).toBeTruthy();
    });

    test('verifySampleCredentialsDisplayedAtLoginPage', async({page})=>{
        await loginPage.navigateToLoginPage();
        const [usernameCred, passwordCred] = await loginPage.getCredentialsSampleDisplay();
        expect(usernameCred).toContain('Username : Admin');
        expect(passwordCred).toContain('Password : admin123');
    });

});