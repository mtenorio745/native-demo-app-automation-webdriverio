const AppScreen = require('../../screen-objects/AppScreen');

describe('Cenário de Navegação', () => {
  it('deve navegar por todas as abas do aplicativo e verificar os títulos das telas', async () => {
    // Navegar para a aba Webview e esperar pelo texto de carregamento e depois pelo título da página
    await AppScreen.webviewTab.click();
    const webviewLoading = await $('//android.widget.TextView[@text="LOADING..."]');
    await webviewLoading.waitForDisplayed({ timeout: 15000 });
    await AppScreen.webviewTitle.waitForDisplayed({ timeout: 15000 });
    await expect(AppScreen.webviewTitle).toBeDisplayed();

    // Navegar para a aba Login e verificar o título da tela
    await AppScreen.loginTab.click();
    await expect(AppScreen.loginTitle).toBeDisplayed();

    // Navegar para a aba Forms e verificar o título da tela
    await AppScreen.formsTab.click();
    await expect(AppScreen.formsTitle).toBeDisplayed();

    // Navegar para a aba Swipe e verificar o título da tela
    await AppScreen.swipeTab.click();
    await expect(AppScreen.swipeTitle).toBeDisplayed();

    // Navegar para a aba Drag e verificar o título da tela
    await AppScreen.dragTab.click();
    await expect(AppScreen.dragTitle).toBeDisplayed();

    // Voltar para a Home para finalizar
    await AppScreen.homeTab.click();
    await $('~Home-screen').waitForDisplayed({ timeout: 5000 });
  });
});