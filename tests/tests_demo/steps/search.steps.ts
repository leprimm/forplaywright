import { expect, Page } from '@playwright/test';
import { ProductPage } from '../pages/ProductPage';

export async function searchKeyword(page: Page, keyword: string){
    const productPage = new ProductPage(page);
    await expect (productPage.typeSearchBox(keyword));
}

export async function verifySearchResult(page: Page, expectedCount: string, expectedProductName: string){
    const productPage = new ProductPage(page);
    await expect(productPage.getSearchResultInfo()).toHaveText(expectedCount);
    await expect(productPage.getProductNames()).toHaveText(expectedProductName);
}

export async function verifyNoSearchResult(page: Page ,expectedCount: string, productGrid: string){
    const productPage = new ProductPage(page);
    await expect(productPage.getSearchResultInfo()).toHaveText(expectedCount);
    await expect(productPage.getProductGrid()).toHaveText(productGrid);
}

export async function clearSearch(page: Page){
    const productPage = new ProductPage(page);
    await expect(productPage.clearSearchProduct());
}

export async function verifyAllProduct(page: Page, expectedCount: string){
    const productPage = new ProductPage(page);
    await expect(productPage.getSearchResultInfo()).toHaveText(expectedCount);
}

export async function verifyClothingProduct(page: Page, expectedCount: string, catagory: string){
    const productPage = new ProductPage(page);
    await expect(productPage.getSearchResultInfo()).toHaveText(expectedCount);

    const categories = productPage.getProductCatagory(catagory);

    // วนลูปเช็คทุก Element ที่ค้นเจอในหน้าจอ
    for (const element of await categories.all()) {
    await expect(element).toHaveText(catagory);}
}

export async function selectFilter(page: Page, filterName: string){
    const productPage = new ProductPage(page);
    await expect (productPage.selectSearchFilter(filterName));
}



