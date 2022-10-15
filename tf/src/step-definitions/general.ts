import { Then } from '@cucumber/cucumber';
import { ScenarioWorld } from './setup/world';

Then(
    /^I wait "([^"]*)" seconds?$/,
    async function (this: ScenarioWorld, waitSeconds: string) {
        const {
            screen: { page },
        } = this;

        console.log(`🕒🕑🕐 Waiting ${waitSeconds} seconds`);

        await page.waitForTimeout(parseInt(waitSeconds, 10) * 1_000);
    },
);
