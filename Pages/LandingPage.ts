import { type Locator, type Page } from '@playwright/test';

export class LandingPage {
    //variables
    readonly page: Page;
    readonly getStartedButton: Locator;

    //constructor
    constructor(page: Page) {
        this.page = page;
        this.getStartedButton = page.getByRole('banner').getByRole('button', { name: 'Get Started' })


    }

    //methods
    async clickGetStarted() {
        await this.getStartedButton.click();
    }
}

export default LandingPage;