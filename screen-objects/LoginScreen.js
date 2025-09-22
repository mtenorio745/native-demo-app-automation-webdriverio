class LoginScreen {
  // Seletores para os elementos da tela de login
  get emailInput() {
    return $('~input-email');
  }

  get passwordInput() {
    return $('~input-password');
  }

  get passwordConfirmationInput() {
    return $('~input-repeat-password');
  }

  get loginButton() {
    return $('~button-LOGIN');
  }

  get signUpButton() {
    return $('~button-SIGN UP');
  }

  get alert() {
    return $('//android.widget.TextView[@resource-id="android:id/alertTitle"]');
  }

  get loginScreenHeader() {
    return $('~Login-screen');
  }

  // Ações para a tela de login
  async waitForIsShown(isShown = true) {
    return this.loginScreenHeader.waitForDisplayed({
      timeout: 30000,
      reverse: !isShown,
    });
  }

  async performLogin(username, password) {
    await this.emailInput.setValue(username);
    await this.passwordInput.setValue(password);
    await this.loginButton.click();
  }

  async performSignUp(username, password, passwordConfirmation) {
    await this.emailInput.setValue(username);
    await this.passwordInput.setValue(password);
    await this.passwordConfirmationInput.setValue(passwordConfirmation);
    await this.signUpButton.click();
  }
}

export default new LoginScreen();