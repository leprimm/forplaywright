import { expect,Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

export async function loginValid(page: Page){
    await login(page,'testuser', 'password123');
}

export async function login(page: Page, username: string, password: string){
    let loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.fillUsername(username);
    await loginPage.fillPasswprd(password);
    await loginPage.clickSigIn();
}

export async function verifyLoginSuccess(page: Page) {
    await expect(page).toHaveURL(/products/);
    await expect(page.getByTestId('page-title')).toHaveText('Products');
    await expect(page.getByRole('button', {name: 'Logout'})).toBeVisible();
}

export async function verifyLoginError(page: Page) {
    await expect(page.getByTestId('login-error-msg')).toBeVisible();
    await expect(page.getByTestId('login-error-msg')).toHaveText('Invalid username or password.');
    await expect(page).toHaveURL('');
}

export async function verifyLoginBlank(page: Page) {
    await expect(page.locator('#username-error')).toBeVisible();
    await expect(page.locator('#username-error')).toHaveText('Username is required.');
    await expect(page.locator('#password-error')).toBeVisible();
    await expect(page.locator('#password-error')).toHaveText('Password is required.');
    await expect(page).toHaveURL('');
}

export async function logout(page: Page){
    let logoutPage = new LoginPage(page);
    await logoutPage.clickSignOut();
}

export async function verifyLogoutSuccess(page: Page) {
    await expect(page).toHaveURL(/login/);
    await expect(page.getByRole('button', {name: 'Sign in'})).toBeVisible();
}