import { test, expect, Page } from '@playwright/test';
import { login, logout, verifyLoginBlank, verifyLoginError, verifyLoginSuccess, verifyLogoutSuccess } from './steps/login.steps';

test('login success', async ({ page }) => {

    await login(page,'testuser', 'password123');

    await verifyLoginSuccess(page);

});

test('login with wrong pass', async ({ page }) => {

    await login(page,'testuser', 'abc');

    await verifyLoginError(page);
    
});

test('login with wrong user', async ({ page }) => {

    await login(page,'test', 'password123');
    
    await verifyLoginError(page);
});

test('login blank user/pass', async ({ page }) => {

    await login(page,'', '');
    
    await verifyLoginBlank(page);
});

test('logout success', async ({ page }) => {

    await login(page,'testuser', 'password123');

    await logout(page);

    await verifyLogoutSuccess(page);

});