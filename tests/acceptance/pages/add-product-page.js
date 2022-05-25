const {expect} = require('@playwright/test')
const BasePage = require('./base-page')

module.exports = class AddProductPage extends BasePage {
    $s = this.$$s.addProductSelector;
    $$$s = this.$$s.addComponentSelector;

    async createProduct(productName, productValue, productColor) {
        await page.fill(this.$s.INPUT_PRODUCT_NAME, productName)
        await page.fill(this.$s.INPUT_PRODUCT_VALUE, productValue)
        await page.fill(this.$s.INPUT_PRODUCT_COLOR, productColor)
        await page.click(this.$s.BUTTON_SAVE_PRODUCT)
    }

    async assertMsgSuccess(msgSuccess) {
        const messagSuccess = await page.locator(this.$s.TEXT_MSG).textContent() 
        await expect(msgSuccess).toEqual(messagSuccess)
    }

    async assertMsgError(msgError) {
        const messageError = await page.locator(this.$s.TEXT_MSG).textContent()
        await expect(msgError).toEqual(messageError)
    }

    async clickButtonAddComponent() {
        await page.click(this.$s.BUTTON_ADD_COMPONENT)
    }

    async clickBtnProductList() {
        await page.click(this.$s.BUTTON_PRODUCT_LIST)
    }

    async changeProductName(oldProduct, newProduct) {
        await page.click(this.$s.INPUT_PRODUCT_NAME)
        await page.keyboard.down('Shift')
        for (let i = 0 ; i < oldProduct.length; i++) {
            await page.keyboard.press('ArrowLeft')
        }

        await page.keyboard.up('Shift')
        await page.keyboard.press('Backspace')
        await page.keyboard.type(newProduct)

        await page.click(this.$s.BUTTON_SAVE_PRODUCT)
    }
}