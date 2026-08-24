import {test, expect, Page} from '@playwright/test'
import { loginValid } from './steps/login.steps';
import { verifyNoSearchResult, searchKeyword, verifySearchResult, clearSearch, verifyAllProduct, selectFilter,verifyClothingProduct} from './steps/search.steps';

test('search success', async ({ page }) => {

        await loginValid(page);

        await searchKeyword(page, 'Headphones');
                
        await verifySearchResult(page ,'1 product', 'Wireless Noise-Cancelling Headphones');

});

test('search with no result', async ({ page }) => {

        await loginValid(page);

        await searchKeyword(page, 'abc123');
                
        await verifyNoSearchResult(page ,'0 products','No products found.');

});

test('clear search', async ({ page }) => {

        await loginValid(page);

        await searchKeyword(page, 'abc123');

        await clearSearch(page)
                
        await verifyAllProduct(page,'24 products');

});

test('filter each catagory', async ({ page }) => {

        await loginValid(page);

        await selectFilter(page,'Clothing');

        await verifyClothingProduct(page,'5 products','Clothing');

});

test('filter change catagory', async ({ page }) => {

        await loginValid(page);

        await selectFilter(page,'All');

        await selectFilter(page,'Clothing');
        
        await verifyClothingProduct(page,'5 products','Clothing');

});

test('filter all', async ({ page }) => {

        await loginValid(page);

        await selectFilter(page,'All');

        await verifyAllProduct(page,'24 products');

});

test('filter search', async ({ page }) => {

        await loginValid(page);

        await searchKeyword(page,'Headphones');

        await selectFilter(page,'Electronics');
                
        await verifySearchResult(page ,'1 product' , 'Wireless Noise-Cancelling Headphones');

});