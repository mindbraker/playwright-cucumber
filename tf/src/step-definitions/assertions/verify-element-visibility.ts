import { Then } from '@cucumber/cucumber'
import { getElementLocator } from '../../support/web-element-helper'
import { ScenarioWorld } from '../setup/world'
import { waitFor } from '../../support/wait-for-behavior'

Then(
    /^the "([^"]*)" should be displayed$/,
    async function(this: ScenarioWorld, elementKey: string) {
        const {
            screen: { page },
            globalVariables,
            globalConfig
        } = this;

        console.log(`🔎 ${elementKey} is displayed ✨`);

        const elementIdentifier = getElementLocator(page, elementKey, globalVariables, globalConfig)
       
        await waitFor(async () => {
            const isElementVisible = (await page.$(elementIdentifier)) != null
            return isElementVisible;
        })
    }
)