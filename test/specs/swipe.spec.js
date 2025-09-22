import SwipeScreen from '../../screen-objects/SwipeScreen';
import AppScreen from '../../screen-objects/AppScreen';
import { addEpic, addFeature, addStory } from '@wdio/allure-reporter';

describe('Cenário de Swipe', () => {
    addEpic('Navegação');
    addFeature('Gestos');
    beforeEach(async () => {
        await AppScreen.swipeTab.click();
        await SwipeScreen.waitForIsShown();
    });

    it('deve navegar pelos cards com swipes horizontais', async () => {
        addStory('Cenário de Interação');
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