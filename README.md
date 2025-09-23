# ✍️ Automação E2E com WebdriverIO para o Native Demo App

-----

## 📄 Sobre o Projeto

Este repositório apresenta uma suíte de testes de automação de ponta a ponta (E2E) para o **Native Demo App**. Desenvolvida com o framework **WebdriverIO** e a ferramenta **Appium**, a solução visa garantir a qualidade e a estabilidade do aplicativo em dispositivos **Android**.

O projeto valida de forma automatizada e contínua funcionalidades essenciais, como login, navegação, interação com formulários e muito mais.

**Acesse o [relatório de testes completo](https://mtenorio745.github.io/native-demo-app-automation-webdriverio/) para ver os resultados detalhados.**

[](https://www.google.com/search?q=%5Bhttps://mtenorio745.github.io/native-demo-app-automation-webdriverio/%5D\(https://mtenorio745.github.io/native-demo-app-automation-webdriverio/\))

-----

## 🛠️ Tecnologias Utilizadas

  * **Linguagem**: JavaScript
  * **Framework**: WebdriverIO
  * **Biblioteca**: Appium
  * **Gerenciador de testes**: Mocha
  * **Asserts**: Chai
  * **Relatórios**: Allure Report ou ExtentReport
  * **CI/CD**: GitLab CI/CD

-----

## 📂 Estrutura do Projeto

  * `./test/specs`: Contém as especificações dos testes (`.spec.js`).
  * `./screen-objects`: Arquivos de "Page Objects" para organizar os seletores da interface.
  * `./data`: Dados de teste (ex: `users.json`).
  * `./.github/workflows`: Fluxo de trabalho do GitHub Actions para CI/CD.

-----

## ⚙️ Como Executar os Testes

### Pré-requisitos

  * Node.js (versão 18+)
  * Java Development Kit (JDK) (versão 11+)
  * Android Studio com o Android SDK e variáveis de ambiente configuradas.

### Instalação

1.  Clone o repositório:
    `git clone https://github.com/mtenorio745/native-demo-app-automation-webdriverio.git`
2.  Acesse a pasta do projeto:
    `cd native-demo-app-automation-webdriverio`
3.  Instale as dependências:
    `npm install`

### Execução Local

Certifique-se de que o Appium Server e um emulador local estejam rodando.

`npm run wdio`

### CI/CD

O workflow do GitHub Actions executa os testes automaticamente a cada `push` na branch `main` e pode ser acionado manualmente na aba **Actions** do repositório.

-----

## 📊 Relatório Allure

O relatório de testes é gerado e publicado no **GitHub Pages** a cada execução de CI/CD, oferecendo uma visão clara dos resultados.

**Acesse o [relatório mais recente aqui](https://mtenorio745.github.io/native-demo-app-automation-webdriverio/).**

### Visualização Local

1.  Instale a ferramenta Allure globalmente:
    `npm install -g allure-commandline`
2.  Gere e abra o relatório:
    `npx allure serve allure-results`

-----

## 🧑‍💻 Autor

**Mateus Tenório** - [mtenorio745](https://github.com/mtenorio745)