import {test, expect, Page} from '@playwright/test'
import { loginValid } from './steps/login.steps';
import { addProductToCart, verifyCartItem, clickIncrease, clickDecrease, clickRemoveItem, verifyCartPageEmpty, clickToCart ,verifyCartIncrease} from './steps/cart.steps';

test('Add to Cart Item Success ', async ({ page }) => {

        await loginValid(page);

        await addProductToCart(page, 'Wireless Noise-Cancelling Headphones');

        await clickToCart(page);

        await verifyCartItem(page,'Wireless Noise-Cancelling Headphones'); 
     
});

test('QTY Increase Item Success ', async ({ page }) => {

        await loginValid(page);

        await addProductToCart(page, 'Wireless Noise-Cancelling Headphones');

        await clickToCart(page);

        await clickIncrease(page,'1');

        await verifyCartIncrease(page,'Wireless Noise-Cancelling Headphones'); 
        
});

test('QTY Decrease Item Success ', async ({ page }) => {

        await loginValid(page);

        await addProductToCart(page, 'Wireless Noise-Cancelling Headphones');

        await clickToCart(page);

        await clickDecrease(page,'1');

        await verifyCartPageEmpty(page)
        
});

test('Remove Item Success ', async ({ page }) => {

        await loginValid(page);

        await addProductToCart(page, 'Wireless Noise-Cancelling Headphones');

        await clickToCart(page);

        await clickRemoveItem(page,'1')
        
        await verifyCartPageEmpty(page)
         
});

test('Empty State ', async ({ page }) => {

        await loginValid(page);

        await clickToCart(page);

        await verifyCartPageEmpty(page)
         
});











