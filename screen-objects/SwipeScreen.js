class SwipeScreen {
  // Seletores
  get swipeScreenHeader() {
    return $('~Swipe-screen');
  }

  get carousel() {
    return $('~Carousel');
  }

  // Cards
  get greatCommunityCard() {
    return $('//android.widget.TextView[@text="GREAT COMMUNITY"]');
  }

  get jsFoundationCard() {
    return $('//android.widget.TextView[@text="JS.FOUNDATION"]');
  }
  
    get supportVideosCard() {
    return $('//android.widget.TextView[@text="SUPPORT VIDEOS"]');
  }
  
  get extendableCard() {
    return $('//android.widget.TextView[@text="EXTENDABLE"]');
  }
  
  get compatibleCard() {
    return $('//android.widget.TextView[@text="COMPATIBLE"]');
  }

  // Métodos
  async waitForIsShown(isShown = true) {
    return this.swipeScreenHeader.waitForDisplayed({
      timeout: 30000,
      reverse: !isShown,
    });
  }

async performSwipeLeft() {
  const carousel = await this.carousel;
  await carousel.waitForDisplayed({ timeout: 10000 });

  const { x, y } = await carousel.getLocation();
  const { width, height } = await carousel.getSize();

  // Usa percentuais em vez de valores fixos
  const startX = x + Math.floor(width * 0.8); // 80% da largura
  const endX   = x + Math.floor(width * 0.2); // 20% da largura
  const yCoord = y + Math.floor(height * 0.5); // meio da altura

  await driver.performActions([
    {
      type: 'pointer',
      id: 'finger1',
      parameters: { pointerType: 'touch' },
      actions: [
        { type: 'pointerMove', duration: 0, x: startX, y: yCoord },
        { type: 'pointerDown', button: 0 },
        { type: 'pause', duration: 200 },
        { type: 'pointerMove', duration: 800, x: endX, y: yCoord },
        { type: 'pointerUp', button: 0 },
      ],
    },
  ]);
  await driver.releaseActions();
}


  async performSwipeRight() {
  const carousel = await this.carousel;
  await carousel.waitForDisplayed({ timeout: 10000 });

  const { x, y } = await carousel.getLocation();
  const { width, height } = await carousel.getSize();

  // Usa percentuais em vez de valores fixos
  const startX = x + Math.floor(width * 0.2); // 20% da largura
  const endX   = x + Math.floor(width * 0.8); // 80% da largura
  const yCoord = y + Math.floor(height * 0.5); // meio da altura

  await driver.performActions([
    {
      type: 'pointer',
      id: 'finger1',
      parameters: { pointerType: 'touch' },
      actions: [
        { type: 'pointerMove', duration: 0, x: startX, y: yCoord },
        { type: 'pointerDown', button: 0 },
        { type: 'pause', duration: 200 },
        { type: 'pointerMove', duration: 800, x: endX, y: yCoord },
        { type: 'pointerUp', button: 0 },
      ],
    },
  ]);
  await driver.releaseActions();
}
}

export default new SwipeScreen();
