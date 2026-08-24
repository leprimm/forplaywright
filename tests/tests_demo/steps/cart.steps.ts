import { expect, Page } from '@playwright/test';
import { ProductPage} from '../pages/ProductPage';

export async function addProductToCart(page: Page, productName: string){
    let productPage = new ProductPage(page);
    productPage.addToCart(productName);
    await expect(productPage.getToast()).toBeVisible();
    await expect(productPage.getToast()).toContainText('added to cart');
}

export async function verifyProductAdded(page: Page,productName: string,expectedCount: string){
    let productPage = new ProductPage(page);
    const product = productPage.getProductCard(productName);
    await expect(product.getByText('Added!')).toBeVisible();

    await expect(productPage.getToast()).toBeVisible();
    await expect(productPage.getToast()).toContainText('added to cart');
    await expect(productPage.getCartBadge()).toHaveText(expectedCount);
}


export async function verifyCartPageEmpty(page: Page){
    let productPage = new ProductPage(page);

    await expect(page.locator('p', { hasText: 'Your cart is empty.' }));
    await expect(page.locator('a', { hasText: 'Browse Products' }));
}

export async function clickIncrease(page: Page, expectedCount: string){
    let productPage = new ProductPage(page);
    let rowId = Number(expectedCount);
    await expect(productPage.clickIncreaseQty(rowId));
}

export async function clickDecrease(page: Page, expectedCount: string){
    let productPage = new ProductPage(page);
    let rowId = Number(expectedCount);
    await expect(productPage.clickDecreaseQty(rowId));
}

export async function verifyCartItem(page: Page, productName: string){
    let productPage = new ProductPage(page);
    
    await expect(productPage.getCartItem(productName));
    await expect(productPage.getTotalCart()).toHaveText('$89.99');
}

export async function verifyCartIncrease(page: Page, productName: string){
    const productPage = new ProductPage(page);

    await expect(productPage.getCartItem(productName));
    await expect(productPage.getTotalCart()).toHaveText('$179.98');
}

export async function clickRemoveItem(page: Page, expectedCount: string){
    let productPage = new ProductPage(page);
    let rowId = Number(expectedCount);
    await expect(productPage.clickRemove(rowId));
}

export async function clickToCart(page: Page){
    let productPage = new ProductPage(page);

    await productPage.getCart();
    await expect(page).toHaveURL(/cart/);
    await expect(page.locator('.page-title')).toHaveText('Your Cart');  
}

export async function clickCheckout(page: Page){
    let productPage = new ProductPage(page);
    await expect(productPage.clickCheckout());
}

export async function verifyCartCheckout(page: Page){
    await expect(page).toHaveURL(/checkout-success/);
    await expect(page.locator('h1', { hasText: 'Order placed!' }));
    await expect(page.locator('p', { hasText: 'Thank you for your purchase. Your items are on their way.' }));
    await expect(page.locator('a', { hasText: 'Continue Shopping' }));
}