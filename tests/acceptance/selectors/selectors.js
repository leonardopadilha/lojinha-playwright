const registerSelector = require('./register-selector');
const productListSelector = require('./product-list-selector')
const addProductSelector = require('./add-product-selector')
const addComponentSelector = require('./add-component-selector')

module.exports = selectors = {
    registerSelector: registerSelector,
    productListSelector: productListSelector,
    addProductSelector: addProductSelector,
    addComponentSelector: addComponentSelector,
}