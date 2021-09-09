[Luciano Felix](https://github.com/FelixLuciano), [Insper](https://www.insper.edu.br/), 2021.

[![Insper Mileage logo](public/assets/mileage-logo.svg)](https://inspermileage.netlify.app/)

# Insper Mileage REST API case

Este repositório contém o projeto referente a minha participação na 2ª fase do processo seletivo do [Insper Mileage](https://www.instagram.com/inspermileage/) na área de Software.

### Objetivo

A atividade consiste na criação de uma [API REST](https://pt.wikipedia.org/wiki/REST) utilizando os principais métodos [HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Overview). Para isso, há duas opções de linguagem: utilizar [nodeJS](https://nodejs.org/en/) e, de preferência, com [Typescript](https://www.typescriptlang.org/), ou utilizar Python. Na qual optei por utilizar nodeJS. Então, deve-se:

1. Criar uma aplicação utilizando os frameworks [Express](https://expressjs.com/pt-br/) e [Prisma](https://www.prisma.io/) (opcional). Com a possibilidade de utilizar outras bibliotecas na implementação da aplicação.

2. Utilizar um [Database relacional](https://pt.wikipedia.org/wiki/Banco_de_dados_relacional), atualizando esse database localmente. Contendo uma tabela `Carros`, com informações como: `modelo`, `marca`, `motor`, `nome do piloto`. Com a liberdade de adicionar mais informações se necessário.

3. A `API` deve conter rotas capazes de:
  -  Acessar a informação de todos os carros;
  -  Adicionar um novo modelo a tabela;
  -  Alterar o valor do motor de algum dos modelos;
  -  Deletar um dos modelos;
  -  Filtrar os carros pelo motor.

4. Hospedar a aplicação em algum serviço de nuvem para aplicações.

### Como utilizar

#### API REST

##### Obtém lista de carros

```js
fetch("https://stark-ravine-77496.herokuapp.com/modelos", {
  mthod: "GET"
})
```

##### Obtém lista de carros filtrados por `motor`

```js
fetch("https://stark-ravine-77496.herokuapp.com/modelos/[motor]", {
  mthod: "GET"
})
```

##### Registra os dados de um carro no banco de dados

```js
fetch("https://stark-ravine-77496.herokuapp.com/modelos", {
  mthod: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    password,
    data: {
      modelo: "",
      marca: "",
      motor: "",
      piloto: ""
    }
  })
  }
})
```

##### Atualiza os dados de um carro com base no `id`

```js
fetch("https://stark-ravine-77496.herokuapp.com/modelos/[id]", {
  mthod: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    password,
    data: {
      modelo: "",
      marca: "",
      motor: "",
      piloto: ""
    }
  })
  }
})
```

##### Deleta os dados de um carros com base no `id`

```js
fetch("https://stark-ravine-77496.herokuapp.com/modelos/[id]", {
  mthod: "DELETE",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    password
  })
  }
})
```

#### Cliente online

Através do [cliente online](https://stark-ravine-77496.herokuapp.com/), é possível fazer todo tipo de interação com o banco de dados utilizando da API REST em uma interface gráfica.

**As ações que modificam o boanco de dados (adição, modificação e remoção) exigem uma palavra-passe. Para obtê-la, entre em contato comigo!**

### Crie seu próprio

O arquivos [database.sql](https://github.com/FelixLuciano/Insper-Mileage-REST-API-case/blob/main/database.sql) possui os comandos SQL para criar uma base de dados com o esquema deste projeto.

As seguintes variáveis de ambiente, que pode mser declaradas em um arquivo `.env` na raiz do projeto, são necessárias:
- **DATABASE_URL**: Endereço do banco de dados;
- **API_PASS**: Palavra-chave para requisições na API.

### Licença

Este projeto está sob a [licença do MIT](https://github.com/FelixLuciano/Insper-Mileage-RESTful-API-case/blob/main/LICENSE)!
