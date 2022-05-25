const {Given, When, defineStep, Then} = require('@cucumber/cucumber')

const ProductListPage = require('../pages/product-list-page')
const RegisterPage = require('../pages/register-page')
const AddProductPage = require('../pages/add-product-page')
const AddComponentPage = require('../pages/add-component-page')

let productListPage = new ProductListPage()
let registerPage = new RegisterPage()
let addProductPage = new AddProductPage()
let addComponentPage = new AddComponentPage()

const getEnvString = require('../helpers/get-env-string');

Given('que acesso a tela de login da lojinha', async function() {
    await page.goto(getEnvString("URL_HOME"))
    await registerPage.loginWithoutParameters()
    await productListPage.clickButtonAddProduct()
})

When('preencho os campos {string} {string} {string} com dados corretos', 
async function(productName, productValue, productColor) {
    await addProductPage.createProduct(productName, productValue, productColor)
})

Then('os produtos sao adicionados conforme {string}', async function(msgSuccess) {
    await addProductPage.assertMsgSuccess(msgSuccess)
})

When('preencho os campos {string} {string} {string} com dados incorretos', 
async function(productName, productValue, productColor) {
    await addProductPage.createProduct(productName, productValue, productColor)
})

Then('os produtos não sao adicionados conforme {string}', async function(msgError) {
    await addProductPage.assertMsgError(msgError)
})

When('preencho os campos {string} {string} {string} {string} {string} com dados corretas', 
async function(productName, productValue, productColor, componentName, componentQuantity) {
    await addProductPage.createProduct(productName, productValue, productColor)

    await addProductPage.clickButtonAddComponent()
    await addComponentPage.addComponent(componentName, componentQuantity)
})

Then('o componente e adicionado com sucesso conforme {string}', async function(msgSuccess) {
    await addProductPage.assertMsgSuccess(msgSuccess)
})

