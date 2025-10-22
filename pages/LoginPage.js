import { TIMEOUT } from "dns";
import { WebPage } from "./WebPage";

export class LoginPage extends WebPage{
    constructor(page){
        super(page)
        this.usernameInputBox = page.locator('input[name="username"]');
        this.passwordInputBox = page.locator('input[name="password"]');
        this.loginButton = page.locator('button[type="submit"]');
        this.logo = page.locator('img[alt="company-branding"]');
        this.credentialUsername = page.locator('div.orangehrm-login-error > div > p:nth-of-type(1)');
        this.credentialPassword = page.locator('div.orangehrm-login-error > div > p:nth-of-type(2)');
    }

    async navigateToLoginPage(){
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    async doLogin(username, password){
        await this.usernameInputBox.fill(username);
        await this.passwordInputBox.fill(password);
        await this.loginButton.click();
    }
    async getPageURL() {
        return await this.page.url();
    }

    async isLogoDisplayed(){
        await this.page.waitForSelector('img[alt="company-branding"]',{TIMEOUT: 5000})
        const visible = await this.logo.isVisible();
        console.log('Logo Visible: ', visible);
        return visible;
    }

    async getCredentialsSampleDisplay() {
        await this.credentialUsername.waitFor({ timeout: 5000 });
        await this.credentialPassword.waitFor({ timeout: 5000 });
        const username = await this.credentialUsername.innerText();
        const password = await this.credentialPassword.innerText();
        console.log(username, password);
        return [username.trim(), password.trim()];
    }

}

