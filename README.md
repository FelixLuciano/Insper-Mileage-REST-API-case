[Luciano Felix](https://github.com/FelixLuciano), [Insper](https://www.insper.edu.br/), 2021.

[![Insper Mileage logo](assets/mileage-logo.svg)](https://inspermileage.netlify.app/)

# Insper Mileage RESTful API case

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

### Licença

Este projeto está sob a [licença do MIT](https://github.com/FelixLuciano/Insper-Mileage-RESTful-API-case/blob/main/LICENSE)!
