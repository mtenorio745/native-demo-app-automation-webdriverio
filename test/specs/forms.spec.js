import AppScreen from '../../screen-objects/AppScreen';
import FormsScreen from '../../screen-objects/FormsScreen';
import formsData from '../../data/forms_data.json';

describe('Cenário de Formulários', () => {
  beforeEach(async () => {
    await AppScreen.formsTab.click();
    await FormsScreen.waitForIsShown();
  });
  
  formsData.forEach((data) => {
    it(`deve preencher o campo de texto com "${data.text}" e verificar o resultado`, async () => {
      await FormsScreen.textInput.setValue(data.text);
      await expect(FormsScreen.inputTextResult).toHaveText(data.expected_result);
    });
  });

  it('deve alternar a chave seletora e verificar o estado', async () => {
    await expect(FormsScreen.switchText).toHaveText('Click to turn the switch ON');
    await FormsScreen.switch.click();
    await expect(FormsScreen.switchText).toHaveText('Click to turn the switch OFF');
  });

  it('deve selecionar uma opção no dropdown', async () => {
    const optionToSelect = 'Appium is awesome';
    await FormsScreen.selectDropdownOption(optionToSelect);
  });
  
  it('deve exibir um pop-up ao clicar no botão "Active"', async () => {
    await FormsScreen.activeBtn.click();
    
    const alertTitle = await $('//android.widget.TextView[@resource-id="android:id/alertTitle"]');
    await expect(alertTitle).toBeDisplayed();
    await expect(alertTitle).toHaveText('This button is');
    
    const okButton = await $('//android.widget.Button[@resource-id="android:id/button1"]');
    await okButton.click();
  });
});