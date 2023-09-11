# Sistema de Vistoria Veicular - SVV

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.5.

## Gerenciador de pacotes

Estamos utilizando o **pnpm** como gerenciador de pacotes desse projeto, portanto, é necessário fazer a instalação global com o comando:

`npm install -g pnpm`

## Formatação de código

O ESLint foi adicionado ao projeto com o intuito de padronizar a formatação do código, para resolver todos os "problemas" do código que o ESLint apontar, adicione a seguinte linha no seu `settings.json` do VS Code:

```json
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
```

## Padronização de commits

O [commitizen](https://github.com/commitizen/cz-cli) também foi adicionado ao projeto, para mantermos a qualidade e melhor visibilidade e entendimento dos commits da aplicação.

### Instalação da CLI do commitizen

Execute o comando abaixo apenas uma vez para fazer a instalação:
`npm install -g commitizen`

### Usando a ferramenta

E para usar a ferramenta basta digitar:
`git add .`

E logo após:
`git cz`

E pronto! Seu commit será feito utilizando os padrões da Conventional Commits.
