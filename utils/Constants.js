export class AppConstants{

    static baseURL ='https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
    static HomePageTitle = 'OrangeHRM';

}

/*
static → No need to create an instance with new.
No constructor → Saves memory and avoids confusion.
Keeps it truly constant, not dependent on the Playwright page.

Use for static or app-wide constants: These rarely change and are safe to commit to your repo.
*/