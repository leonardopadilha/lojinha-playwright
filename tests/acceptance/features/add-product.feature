#language: pt

Funcionalidade: Adicionar Produtos

    Como usuario
    Quero cadastrar produtos
    Para validar a inclusao com sucesso

    Contexto: Formulario de adicao de produtos

    Dado que acesso a tela de login da lojinha

    @adicionarProdutoComSucesso
        Cenario: Adicionar produtos com sucesso
        Quando preencho os campos "<nome_produto>" "<valor_produto>" "<cores_produtos>" com dados corretos
        Entao os produtos sao adicionados conforme "<mensagem>"

        Exemplos:
        |nome_produto           |valor_produto  |cores_produtos             |mensagem                       |
        |Bola de futebol        |50,01          |Azul                       |Produto adicionado com sucesso |
        |Notebook               |199,99         |Preto                      |Produto adicionado com sucesso |
        |Camisa Polo            |250,00         |Branca, Preta, Vermelha    |Produto adicionado com sucesso |
        |Carro Popular          |7.000,00       |Cinza                      |Produto adicionado com sucesso |
        |Borracha               |0,01           |Branco                     |Produto adicionado com sucesso |

    @naoAdicionarProdutosDevidosErros
        Cenario: Nao adicionar produtos
        Quando preencho os campos "<nome_produto>" "<valor_produto>" "<cores_produtos>" com dados incorretos
        Entao os produtos não sao adicionados conforme "<mensagem>"

        Exemplos:
        |nome_produto           |valor_produto  |cores_produtos             |mensagem                                                   |
        |Calça Jeans            |0,00           |Azul                       |O valor do produto deve estar entre R$ 0,01 e R$ 7.000,00  |
        |Moleton                |7.000,01       |Vermelho                   |O valor do produto deve estar entre R$ 0,01 e R$ 7.000,00  |
        |                       |               |Vermelho                   |O valor do produto deve estar entre R$ 0,01 e R$ 7.000,00  |
        |                       |               |                           |O valor do produto deve estar entre R$ 0,01 e R$ 7.000,00  |

    @adicionarComponente
        Cenario: Adicionar componente ao produto salvo
        Quando preencho os campos "<nome_produto>" "<valor_produto>" "<cores_produtos>" "<nome_componente>" "<qtd_componente>" com dados corretas
        Entao o componente e adicionado com sucesso conforme "<mensagem_componente>"

        Exemplos:
        |nome_produto           |valor_produto  |cores_produtos             |nome_componente    |qtd_componente |mensagem_componente                            |
        |Notebook               |2.500,01       |Preto, Cinza, Branco       |Cabo de energia    |2              |Componente de produto adicionado com sucesso   |
        |Controle remoto        |22,50          |Azul                       |Pilhas             |5              |Componente de produto adicionado com sucesso   |
        |Xbox                   |1.000,25       |Branco                     |Jogos              |3              |Componente de produto adicionado com sucesso   |
