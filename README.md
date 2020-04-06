# Busca por usuário e listagem de repositórios do Github

Esse projeto tem como o objetivo sanar os seguintes requisitos:

- Eu, como usuário, desejo buscar por um usuário do GitHub;
- Eu, como usuário, desejo ver os detalhes desse usuário que foi buscado (número de seguidores, número de seguidos, imagem do avatar, e-mail e bio);
- Eu, como usuário, desejo ver a listagem dos repositórios desse usuário que foi buscado, ordenados pelo número decrescente de estrelas;

## Detalhes técnicos

O projeto foi desenvolvido utilizando-se de React, Styled components, Axios, React hooks, Helmet e webfontloader. As tecnologias foram selecionadas devida maior familiaridade do desenvolvedor com elas e além disso também pela tecnologia do projeto da stone ser React.

Algumas melhorias poderiam ser feitas ainda sobre esse projeto, e essas estarão listadas aqui:

- [ ] Cachear por algum período as chamadas às apis do Github por usuário, devido ao Rate Limit que as apis do github fornecem.
- [ ] Caso houvessem componentes com bastante regras de negócio e interações seria bem interessante a aplicação de testes unitários.
- [ ] Criar testes E2E da aplicação, e integrar esse step no processo de deploy a cada vez que houver um commit na esteira do netlify.
- [ ] Utilizar padrões de commit como commitizen afim de padronizar as mensagens de commit

---

## About project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
