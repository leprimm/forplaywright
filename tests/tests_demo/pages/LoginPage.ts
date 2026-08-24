import { Page } from "@playwright/test";

export class LoginPage {
    constructor(private page: Page){}

    async open(){
        await this.page.goto('');
    }
    async clickSigIn(){
        await this.page.getByRole('button', {name: 'Sign In'}).click();
    }
    async fillUsername(username: string){
        await this.page.getByLabel('Username').fill(username);
    }
    async fillPasswprd(password: string){
        await this.page.getByLabel('Password').fill(password);
    }
    async clickSignOut(){
        await this.page.getByRole('button', {name: 'Logout'}).click();
    }
}
