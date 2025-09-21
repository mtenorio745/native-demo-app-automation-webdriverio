class AppScreen {
  get homeTab() {
    return $('~Home');
  }

  get webviewTab() {
    return $('~Webview');
  }

  get loginTab() {
    return $('~Login');
  }

  get formsTab() {
    return $('~Forms');
  }

  get swipeTab() {
    return $('~Swipe');
  }

  get dragTab() {
    return $('~Drag');
  }

  // Seletores para os títulos de cada tela
  get webviewTitle() {
    return $('//android.widget.TextView[@text="Next-gen browser and mobile automation test framework for Node.js"]');
  }

  get loginTitle() {
    return $('//android.widget.TextView[@text="Login / Sign up Form"]');
  }

  get formsTitle() {
    return $('//android.widget.TextView[@text="Form components"]');
  }

  get swipeTitle() {
    return $('//android.widget.TextView[@text="Swipe horizontal"]');
  }

  get dragTitle() {
    return $('//android.widget.TextView[@text="Drag and Drop"]');
  }
}

module.exports = new AppScreen();