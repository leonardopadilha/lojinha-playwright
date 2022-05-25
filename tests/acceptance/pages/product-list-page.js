const {expect} = require("@playwright/test");
const BasePage = require("./base-page");

module.exports = class ProductListPage extends BasePage {

    $s = this.$$s.productListSelector;

    async assertProductList(phrase) {
        const productList = await page.locator(this.$s.PRODUCT_LIST)
        await expect(productList).toContainText(phrase)

    }

    async clickButtonAddProduct() {
        await page.click(this.$s.BUTTON_ADD_PRODUCT)
    }

    async clickOnProduct(productName) {
        let listAllProducts = await page.locator('.collection li:last-child span')
        await listAllProducts.click(productName)
    }
    
}