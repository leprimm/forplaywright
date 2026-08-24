import {test, expect, Page} from '@playwright/test'
import { loginValid } from './steps/login.steps';
import { addProductToCart, clickCheckout,verifyCartCheckout, clickToCart} from './steps/cart.steps';

test('Checkout success', async ({ page }) => {

        await loginValid(page);

        await addProductToCart(page, 'Wireless Noise-Cancelling Headphones');

        await clickToCart(page);

        await clickCheckout(page);

        await verifyCartCheckout(page);

});