import { test, expect } from '@playwright/test';
// test case
test('Opens correctly', async({ page }) => {

    //arrange
    await page.goto('https://demo-shop-ten.vercel.app/');
    await page.getByRole('textbox', {name: 'Username'}).fill('testuser');
    await page.getByRole('textbox', {name: 'Password'}).fill('password123');
    await page.getByRole('button', {name: 'Sign in'}).click();

    //act
    await page.locator('button[data-product-id="1"]').click();
    //await page.getByPlaceholder('Search products…').fill('Wireless Noise-Cancelling Headphones');

    //assert
    await expect(page.getByTestId('cart-bage')).toHaveText('1');
    await expect(page.getByTestId('added-1')).toHaveText('Added!');
    
});

