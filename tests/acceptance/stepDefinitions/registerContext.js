const {Given, When, Then} = require('@cucumber/cucumber')
const RegisterPage = require("../pages/register-page");
const ProductListPage = require('../pages/product-list-page');

let registerPage = new RegisterPage();
let productListPage = new ProductListPage();

const getEnvString = require('../helpers/get-env-string');

Given('que acesso a tela de login da lojinha web', async function() {
    await page.goto(getEnvString("URL_HOME"))
})

When('informo os dados corretos', async function() {
    await registerPage.loginWithoutParameters()
})

Then('visualizo a página de produtos anunciados', async function() {
    await productListPage.assertProductList('Lista de Produtos')
})

When('informo os dados incorretos no campo {string} e {string}', async function(user, password) {
    await registerPage.loginWrongParameters(user, password)
})

Then('o sistema retorna de alerta {string}', async function(messageError) {
    await registerPage.assertMessageError(messageError)
})