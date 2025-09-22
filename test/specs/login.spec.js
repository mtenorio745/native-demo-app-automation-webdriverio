import LoginScreen from '../../screen-objects/LoginScreen';
import users from '../../data/users.json';
import { addEpic, addFeature, addStory } from '@wdio/allure-reporter';

describe('Cenário de Login', () => {
    addEpic('Autenticação');
    addFeature('Login');
  beforeEach(async () => {
    const loginTabButton = $('~Login');
    await loginTabButton.click();
    await LoginScreen.waitForIsShown();
  });

  it('deve realizar login com sucesso', async () => {
    addStory('Cenário de Sucesso');
    const user = users.login.sucesso;
    await LoginScreen.performLogin(user.username, user.password);
    const successTitle = await $('//android.widget.TextView[@resource-id="android:id/alertTitle"]');
    await expect(successTitle).toBeDisplayed();
    await expect(successTitle).toHaveText('Success');
    const okButton = await $('//android.widget.Button[@text="OK"]');
    await okButton.click();
  });
  
  it('deve falhar ao tentar logar com credenciais inválidas', async () => {
    addStory('Cenário Negativo');
    const user = users.login.invalido;
    await LoginScreen.performLogin(user.username, user.password);
    const errorMessage = await $('//android.widget.TextView[@text="Please enter a valid email address"]');
    await expect(errorMessage).toBeDisplayed();
  });
});