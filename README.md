# Automação E2E para o Native Demo App (WebdriverIO)

![Build Status](https://github.com/mtenorio745/native-demo-app-automation-webdriverio/actions/workflows/android.yml/badge.svg)
[![Allure Report](https://img.shields.io/badge/Allure_Report-blue?logo=allure)](https://mtenorio745.github.io/native-demo-app-automation-webdriverio/)

## 📝 Descrição do Projeto

Este repositório contém uma suíte de testes de automação End-to-End (E2E) para um aplicativo mobile de demonstração. Os testes foram desenvolvidos utilizando o framework **WebdriverIO** e o **Appium** para automação em dispositivos Android.

O objetivo do projeto é validar as funcionalidades do aplicativo, como cadastro, login, navegação e interações com formulários, de forma automatizada e contínua.

## 🚀 Tecnologias Utilizadas

* **WebdriverIO**: Framework de automação de testes para Node.js.
* **Appium**: Ferramenta de automação para aplicativos móveis.
* **Allure Report**: Adaptador para gerar relatórios de testes ricos em detalhes e gráficos.
* **Node.js**: Ambiente de execução para o JavaScript.
* **Android SDK**: Necessário para rodar emuladores Android.

## 📦 Estrutura do Projeto

* `./apks`: Diretório onde o arquivo `.apk` do aplicativo é armazenado.
* `./test/specs`: Contém todos os arquivos de especificação de testes (`.spec.js`).
* `./screen-objects`: Contém os arquivos de "Page Objects" para os testes, organizando os seletores da interface.
* `./data`: Contém arquivos de dados para os testes (`users.json`, `forms_data.json`).
* `./.github/workflows`: Contém o fluxo de trabalho (`android.yml`) do GitHub Actions para a execução CI/CD.

## 🔧 Como Rodar os Testes

### Pré-requisitos

* Node.js (versão 18 ou superior).
* Java Development Kit (JDK) (versão 11 ou superior).
* Android Studio com o Android SDK e as variáveis de ambiente configuradas.

### Instalação

1.  Clone este repositório:
    `git clone https://github.com/mtenorio745/native-demo-app-automation-webdriverio.git`
2.  Acesse o diretório do projeto:
    `cd native-demo-app-automation-webdriverio`
3.  Instale as dependências:
    `npm install`

### Execução Local

Para rodar os testes em um emulador local, certifique-se de que o Appium Server está rodando e que o emulador está ligado.

`npm run wdio`

### Execução em CI/CD

O fluxo de trabalho do GitHub Actions está configurado para rodar automaticamente a cada `push` para a branch `main` ou manualmente através do menu de *workflow_dispatch* na aba **Actions** do repositório.

## 📊 Relatório Allure

Após a execução dos testes, um relatório detalhado é gerado e publicado automaticamente no **GitHub Pages**.

### Visualização Local

1.  Certifique-se de ter a ferramenta Allure instalada globalmente:
    `npm install -g allure-commandline`
2.  Gere e abra o relatório:
    `npx allure serve allure-results`

### Visualização Online (CI/CD)

O relatório mais recente pode ser acessado diretamente pelo GitHub Pages. O link está disponível na aba **Settings** > **Pages** do repositório ou no badge no topo deste `README`.

## 🧑 Autor

**Mateus Tenório** - [mtenorio745](https://github.com/mtenorio745)