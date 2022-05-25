const {Given, When, defineStep, Then} = require('@cucumber/cucumber')

const ProductListPage = require('../pages/product-list-page')
const RegisterPage = require('../pages/register-page')
const AddProductPage = require('../pages/add-product-page')
const AddComponentPage = require('../pages/add-component-page')

let productListPage = new ProductListPage()
let registerPage = new RegisterPage()
let addProductPage = new AddProductPage()

const getEnvString = require('../helpers/get-env-string');

Given('que a acesso o login da lojinha', async function() {
    await page.goto(getEnvString("URL_HOME"))

    await registerPage.loginWithoutParameters()
    await productListPage.clickButtonAddProduct()
})

When('preencho os campos {string} {string} {string} com dados corretos conforme {string} e clico no produto cadastrado para alterar o nome do produto', 
async function(productName, productValue, productColor, msgSuccess) {
    await addProductPage.createProduct(productName, productValue, productColor)

    await addProductPage.assertMsgSuccess(msgSuccess)
    await addProductPage.clickBtnProductList()

    await productListPage.clickOnProduct(productName)

    await addProductPage.changeProductName(productName, `Novo ${productName}`)
})

Then('as informacoes sao alteradas com sucesso conforme {string}', async function(msgSuccess) {
    await addProductPage.assertMsgSuccess(msgSuccess)
})