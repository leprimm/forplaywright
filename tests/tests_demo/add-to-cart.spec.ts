import {test, expect, Page} from '@playwright/test'
import { loginValid } from './steps/login.steps';
import { addProductToCart, verifyProductAdded} from './steps/cart.steps';

test('Add to Cart', async ({ page }) => {

        await loginValid(page);

        await addProductToCart(page, 'Mechanical Keyboard');
        
        await verifyProductAdded(page, 'Mechanical Keyboard','1');

});

test('Add to Cart multiple', async ({ page }) => {

        await loginValid(page);

        await addProductToCart(page, 'Wireless Noise-Cancelling Headphones');

        await addProductToCart(page, 'Mechanical Keyboard');

        await verifyProductAdded(page, 'Mechanical Keyboard','2');
        
});

