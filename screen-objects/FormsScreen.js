class FormsScreen {
  get formsTab() {
    return $('~Forms');
  }

  get formsScreenHeader() {
    return $('~Forms-screen');
  }

  get textInput() {
    return $('~text-input');
  }

  get inputTextResult() {
    return $('~input-text-result');
  }

  get switch() {
    return $('~switch');
  }

  get switchText() {
    return $('~switch-text');
  }
  
  // Dropdown (abre e mostra o valor selecionado)
  get dropdown() {
    return $('~Dropdown');
  }
  
  get activeBtn() {
    return $('//android.widget.TextView[@text="Active"]');
  }

  async waitForIsShown(isShown = true) {
    return this.formsScreenHeader.waitForDisplayed({
      timeout: 30000,
      reverse: !isShown,
    });
  }

  async selectDropdownOption(optionText) {
    await this.dropdown.click();
    await $(`//android.widget.CheckedTextView[@text="${optionText}"]`).click();
  }
}

export default new FormsScreen();
