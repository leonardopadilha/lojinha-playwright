const {expect} = require("@playwright/test");
const BasePage = require("./base-page");
module.exports = class RegisterPage extends BasePage {

    $s = this.$$s.registerSelector;

    async loginWithoutParameters() {
        await page.fill(this.$s.INPUT_USER, 'admin')
        await page.fill(this.$s.INPUT_PASSWORD, 'admin')
        await page.click(this.$s.BUTTON_LOGIN)
    }

    async loginWrongParameters(user, password) {
        await page.fill(this.$s.INPUT_USER, user)
        await page.fill(this.$s.INPUT_PASSWORD, password)
        await page.click(this.$s.BUTTON_LOGIN)
    }

    async assertMessageError(expectedMessageError) {
        const msgError = await page.locator(this.$s.MSG_ERROR).textContent()
        await expect(expectedMessageError).toEqual(msgError)
    }
}