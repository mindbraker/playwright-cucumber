import { Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'

Then(
    /^the "([^"]*)" should contain the text "([^"]*)"$/,
    async function(elementKey: string, expectedElementText: string) {
        const {
            screen: { page }
        } = this;
        
        console.log(`the ${elementKey} should contain the text ${expectedElementText}`);

        const content = await page.textContent('[data-id="contacts"]');
        expect(content).toBe(expectedElementText);
    }
)

Then(
    /^the "([^"]*)" should be displayed$/,
    async function(elementKey: string) {
        const {
            screen: { page }
        } = this;

        console.log(`the ${elementKey} should be displayed`);

        const locator = page.locator('[data-id="logo-image"]');

        await expect(locator).toBeVisible();
    }
)