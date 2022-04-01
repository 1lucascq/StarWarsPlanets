# Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Objetivos](#objetivos)
  - [1 - Header](#1---header)
  - [2 - Barra de buscas](#2---barra-de-buscas)
  - [3 - Barra de filtragem](#3---barra-de-filtragem)
  - [4 - Tabela de dados](#4---tabela-de-dados)
  - [5 - Campo de filmes](#5---campo-de-filmes)
  - [6 - Ordenação de planetas](#6---ordenação-de-planetas)
  - [8 - Estilização](#8---estilização)
- [Deployment](#deployment)

# Sobre o Projeto 

Nesse projeto, o objetivo era criar uma aplicação que consumisse uma com dados sobre planetas do universo de Star Wars. O desenvolvimento da aplicação deveria abordar os seguintes tópicos:
 - Construção através do uso de Hooks;
 - Criação do FrontEnd que oferecesse uma experiẽncia agradável ao usuário;
 - Uso de libs para estilização;
 - Possibilidade de filtragem para exibição dos planetas;
 - Possibilidade de ordenação de planetas;
 - Possiblidade de busca por um planeta específico.

# Objetivos

- A realização de todos os objetivos deve ser feita com o uso de Hooks e seguindo os princípios do Clean Code.

## 1 - Header
- A aplicação deveria ter um Header com o título "Star Wars Planets Search".

## 2 - Barra de buscas
- A barra de buscas deve possibilitar a pesquisa de planetas através do nome;
- Deve existir um retorno visual para os dados dispóniveis a medida que o usuário faça a busca.
  
## 3 - Barra de filtragem
- A barra de filtragem deve possibilitar o filtro de planetas através dos seguintes campos:
  - `Population`;
  - `Orbital Period`;
  - `Diameter`;
  - `Rotation Period`;
  - `Surface Water`.

- Deve ser possível filtrar os campos citados acimas através das seguintes medidas de grandeza:
  - Maior que;
  - Menor que;
  - Igual a.

- Por último, deve haver um campo para que o usuário estabeleça um valor número para realizar a filtragem..

## 4 - Tabela de dados
- A aplicação deve conter uma tabela que mostre os resultados disponíveis a medida que o usuário execute filtragens ou buscas.
- A tabela deve ter os campos:
  - ID;
  - Name;
  - Rotation Period;
  - Orbital Period;
  - Diameter;
  - Climate;
  - Gravity;
  - Terrain;
  - Surface Water;
  - Population

## 5 - Campo de filmes
- Deve ainda haver um campo demonstrando os filmes e que os referidos planetas aparecem;
- Este campo deve ser acessível somente quando o usuário buscar mais informações sobre o planeta.


## 6 - Ordenação de planetas
- Deve ser possível filtrar a tabela através dos campos:
  - Name;
  - Rotation Period;
  - Orbital Period;
  - Diameter;
  - Climate;
  - Gravity;
  - Terrain;
  - Surface Water;
  - Population.
- O ordenamento deve ser possível através da ordem crescente e decrescente.
- O botão de deleção do contato deverá excluir o contato permanentemente;
- A deleção deve refletir no banco de dados usado pelo BackEnd.
- Ao deletar um contato, a lista de contatos deve ser atualizada.

## 7 - Estilização
- A aplicação deve ser utilizada com uma biblioteca popular no mercado e deve ser possibilitar uma experiência agradável para o usuário.

# Deployment 
- A aplicação está disponível para consulta através deste [LINK](https://star-wars-planets-search.herokuapp.com/).
