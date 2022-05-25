#language: pt

Funcionalidade: Editar produtos

    Como usuario
    Quero alterar produtos
    Para incluir as informacoes necessarias

    Contexto: Edicao de produtos inclusos

    Dado que a acesso o login da lojinha

    @alterarProdutoComSucesso
        Cenario: Alterar com sucesso produto incluso
        Quando preencho os campos "<nome_produto>" "<valor_produto>" "<cores_produtos>" com dados corretos conforme "<mensagem>" e clico no produto cadastrado para alterar o nome do produto
        Entao as informacoes sao alteradas com sucesso conforme "<mensagem_alteracao>"
    
        Exemplos: 
        |nome_produto           |valor_produto  |cores_produtos   |mensagem                       |mensagem_alteracao             |
        |Iphone 11              |3.500,00       |Branco           |Produto adicionado com sucesso |Produto alterado com sucesso   |
        |Samsung Galaxy         |4.572,13       |Preto, Prata     |Produto adicionado com sucesso |Produto alterado com sucesso   |
        |Tapete                 |100,00         |Preto, Prata     |Produto adicionado com sucesso |Produto alterado com sucesso   |
        |Nike                   |600,50         |Preto            |Produto adicionado com sucesso |Produto alterado com sucesso   |