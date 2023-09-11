## Sobre
Essa é um projeto de aplicação Web para o user ter um controle financeiro através das seguintes features:

(POST "/sign-up")
  <ul>
    <li>
      Cria nova conta do Usuário
    </li>
  </ul>

(POST "/sign-in")
  <ul>
    <li>
      Loga na conta do usário
    </li>
    <li>
      Gera token
    </li>
  </ul>

(GET "/transactions") **Rota com Autorização**
  <ul>
    <li>
      Lista transações do token
    </li>
  </ul>

(GET "/transactions/:id") **Rota com Autorização**
  <ul>
    <li>
      Informações de uma transação específica
    </li>
  </ul>

(POST "/transactions") **Rota com Autorização**
  <ul>
    <li>
      Cria nova transação
    </li>
  </ul>

## Tecnologias Usadas

<p>
  <img style='margin: 5px;' src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"/>
  <img style='margin: 5px;' src='https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E'/>
</p>

## Como usar
1. Clone o repositório
4. Instale as dependências do projeto
```bash
npm i
```
5. Configure o .env
6. Inicie a aplicação
```bash
npm start

# opcionalmente para acompanhar pelo terminal
$ npm run dev
```
