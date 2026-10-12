import {Page } from '@playwright/test';

export class ProductPage {
    constructor(private page:Page) {}

    async addToCart(productName: string){
        const productCard = this.page.locator('.product-card',{hasText: productName});
        await productCard.getByRole('button', {name: 'Add to Cart'}).click();
    }

    getProductCard(productName: string){
        return this.page.locator('.product-card',{hasText: productName});
    }

    getToast(){
        return this.page.locator('#toast');
    }
    getCartBadge(){
        return this.page.getByTestId('cart-badge');
    }

    async getCart(){
        await this.page.locator('a:text("Cart")').click();
    }

    async SearchProduct(productName: string){
        await this.page.getByTestId('search-input').fill(productName);
    }

    getSearchResultInfo(){
        return this.page.getByTestId('results-info');
    }

    getProductGrid(){
        return this.page.locator('p', { hasText: 'No products found.' });
    }

    getProductNames(){
        return this.page.getByTestId('product-name');
    }

    getProductCatagory(catagory: string){
        return this.page.locator('.pcard-category',{hasText: catagory});
    }

    getNoProductNames(){
        return this.page.getByTestId('product-grid');
    }

    getCartItem(productName: string){
        return this.page.locator('.cart-item-name').filter({hasText: productName});
    }

    getTotalCart(){
        return this.page.getByTestId('cart-total');
    }

    async clickIncreaseQty(rowId: number){
       const CartRow = this.page.locator(`[data-cart-row="${rowId}"]`);
       await this.page.locator('button[aria-label="Increase quantity"]').click();
    }

    async clickDecreaseQty(rowId: number){
       const CartRow = this.page.locator(`[data-cart-row="${rowId}"]`);
       await CartRow.locator('button[aria-label="Decrease quantity"]').click();
    }

    async clickRemove(rowId: number){
       await this.page.locator(`[onclick="removeItem(${rowId})"]`).click({ force: true });
    }

    async typeSearchBox(keyword: string){
        await this.page.getByTestId('search-input').fill(keyword);
    }

    clearSearchProduct(){
        return this.page.getByPlaceholder('Search Product').clear();
    }

    async selectSearchFilter(value: string){
        await this.page.getByTestId('category-filter').selectOption(value); 
    }

    async clickCheckout(){
        await this.page.getByTestId('checkout-btn').click();
    }
}