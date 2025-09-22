import LoginScreen from '../../screen-objects/LoginScreen';
import users from '../../data/users.json';
import { addEpic, addFeature, addStory } from '@wdio/allure-reporter';

describe('Cenário de Cadastro', () => {
    addEpic('Autenticação');
    addFeature('Cadastro');
  beforeEach(async () => {
    const loginTabButton = $('~Login');
    await loginTabButton.click();
    await LoginScreen.waitForIsShown();
    const signUpTabButton = await $('//android.widget.TextView[@text="Sign up"]');
    await signUpTabButton.click();
  });

  it('deve realizar cadastro com sucesso', async () => {
     addStory('Cenário de Sucesso');
    const user = users.cadastro.sucesso;
    await LoginScreen.performSignUp(user.username, user.password, user.password);
    const successTitle = await $('//android.widget.TextView[@resource-id="android:id/alertTitle"]');
    await expect(successTitle).toBeDisplayed();
    await expect(successTitle).toHaveText('Signed Up!');
    const okButton = await $('//android.widget.Button[@text="OK"]');
    await okButton.click();
  });
  
  it('deve falhar com e-mail inválido', async () => {
    addStory('Cenário Negativo');
    const user = users.cadastro.email_invalido;
    await LoginScreen.performSignUp(user.username, user.password, user.password);
    const errorMessage = await $('//android.widget.TextView[@text="Please enter a valid email address"]');
    await expect(errorMessage).toBeDisplayed();
  });
  
  it('deve falhar com senha menor que 8 caracteres', async () => {
    addStory('Cenário Negativo');
    const user = users.cadastro.senha_curta;
    await LoginScreen.performSignUp(user.username, user.password, user.password);
    const errorMessage = await $('//android.widget.TextView[@text="Please enter at least 8 characters"]');
    await expect(errorMessage).toBeDisplayed();
  });
  
  it('deve falhar com confirmação de senha diferente', async () => {
    addStory('Cenário Negativo');
    const user = users.cadastro.senhas_nao_combinam;
    await LoginScreen.performSignUp(user.username, user.password, user.confirmPassword);
    const errorMessage = await $('//android.widget.TextView[@text="Please enter the same password"]');
    await expect(errorMessage).toBeDisplayed();
  });
});