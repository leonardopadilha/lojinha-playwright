#language: pt

Funcionalidade: Realizar Login

    Como usuário
    Quero realizar login
    Para efetuar as compras com sucesso

    Contexto: Formulário de Login
    Dado que acesso a tela de login da lojinha web

    @loginComSucessoSemParametro
        Cenario: Login com credenciais válidas
        Quando informo os dados corretos
        Entao visualizo a página de produtos anunciados

    @loginSemSucesso
        Cenario: Login com credenciais inválidas
        Quando informo os dados incorretos no campo "<usuario>" e "<senha>"
        Entao o sistema retorna de alerta "<mensagem>"

        Exemplos:
        |usuario            |senha          |mensagem                 |
        |usuarioInvalido    |admin          |Falha ao fazer o login   |
        |admin              |senhaInvalida  |Falha ao fazer o login   |
        |                   |               |Falha ao fazer o login   |
        |admin              |               |Falha ao fazer o login   |
        |                   |admin          |Falha ao fazer o login   |
