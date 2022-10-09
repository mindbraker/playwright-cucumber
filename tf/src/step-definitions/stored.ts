import { Then } from '@cucumber/cucumber'
import { ScenarioWorld } from './setup/world'
import { getElementLocator } from '../support/web-element-helper'
import { waitFor } from '../support/wait-for-behavior'
import { ElementKey } from '../env/global'

Then(
    /^I retrieve the "([^"]*)" text and store it as "([^"]*)" in global variables$/,
    async function (this: ScenarioWorld, elementKey: ElementKey, variableKey: string) {
        const {
            screen: { page },
            globalConfig,
            globalVariables
        } = this;

        console.log(`I retrieve the ${elementKey} text and store it as ${variableKey} in global variables`);

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor(async () => {
            const result = await page.waitForSelector(elementIdentifier, { state: 'visible' });

            if (result) {
                const elementText = await page.textContent(elementIdentifier)
                if (elementText != null) {
                    globalVariables[variableKey] = elementText;
                }
            }
            return result;
        })
    }
)