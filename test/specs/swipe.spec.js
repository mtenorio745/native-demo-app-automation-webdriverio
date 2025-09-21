const SwipeScreen = require('../../screen-objects/SwipeScreen');
const AppScreen = require('../../screen-objects/AppScreen');

describe('Cenário de Swipe', () => {
    beforeEach(async () => {
        await AppScreen.swipeTab.click();
        await SwipeScreen.waitForIsShown();
    });

    it('deve navegar pelos cards com swipes horizontais', async () => {
        const swipeTitle = await $('//android.widget.TextView[@text="Swipe horizontal"]');
        await expect(swipeTitle).toBeDisplayed();

        await SwipeScreen.performSwipeLeft();
        await expect(SwipeScreen.greatCommunityCard).toBeDisplayed();

        await SwipeScreen.performSwipeLeft();
        await expect(SwipeScreen.jsFoundationCard).toBeDisplayed();

        await SwipeScreen.performSwipeLeft();
        await expect(SwipeScreen.supportVideosCard).toBeDisplayed();

        await SwipeScreen.performSwipeLeft();
        await expect(SwipeScreen.extendableCard).toBeDisplayed();

        await SwipeScreen.performSwipeLeft();
        await expect(SwipeScreen.compatibleCard).toBeDisplayed();

        await SwipeScreen.performSwipeRight();
        await expect(SwipeScreen.extendableCard).toBeDisplayed();
    });
});