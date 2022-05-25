const selectors = require('../selectors/selectors');

module.exports = class BasePage {

   $$s = selectors;

    /**
     * @param {import("playwright").Page} page
     */
    constructor (page) {
        this.page = page;
    }

}