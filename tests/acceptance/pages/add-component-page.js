const {expect} = require('@playwright/test')
const BasePage = require('./base-page')

module.exports = class AddComponentPage extends BasePage {
    $s = this.$$s.addComponentSelector

    async addComponent(componentName, componentQuantity) {
        await page.fill(this.$s.INPUT_NAME_COMPONENT, componentName)
        await page.fill(this.$s.INPUT_QTD_COMPONENT, componentQuantity)
        await page.click(this.$s.BUTTON_SAVE_COMPONENT)
    }
}