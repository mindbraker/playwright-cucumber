import { Then } from '@cucumber/cucumber'
import { getElementLocator } from '../../support/web-element-helper'
import { ScenarioWorld } from '../setup/world'
import { waitFor } from '../../support/wait-for-behavior'
import { ElementKey } from '../../env/global'

Then(
    /^the "([^"]*)" should( not)? be displayed$/,
    async function(this: ScenarioWorld, elementKey: ElementKey, negate: boolean) {
        const {
            screen: { page },
            globalConfig
        } = this;

        console.log(`🔎 ${elementKey} should${negate?' not':''} be displayed ✨`);

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);
       
        await waitFor(async () => {
            const isElementVisible = (await page.$(elementIdentifier)) != null;
            return isElementVisible === !negate;
        })
    }
)