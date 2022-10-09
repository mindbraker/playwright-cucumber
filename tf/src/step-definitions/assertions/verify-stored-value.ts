import { Then } from '@cucumber/cucumber'
import { getElementLocator } from '../../support/web-element-helper'
import { ScenarioWorld } from '../setup/world'
import { waitFor } from '../../support/wait-for-behavior'
import { ElementKey } from '../../env/global'

Then(
    /^the "([^"]*)" should( not)? equal the "([^"]*)" stored in global variables$/,
    async function (this: ScenarioWorld, elementKey: ElementKey, negate: boolean, variableKey: string) {
        const {
            screen: { page },
            globalConfig,
            globalVariables
        } = this;

        console.log(`The ${elementKey} should${negate?' not':''} equal the ${globalVariables[variableKey]} stored in global variables`);

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor(async () => {
            const elementText = await page.textContent(elementIdentifier);
            const variableValue = globalVariables[variableKey];
            return (elementText === variableValue) === !negate;
        })
    }
)

Then(
    /^the "([^"]*)" should( not)? contain the "([^"]*)" stored in global variables$/,
    async function(this: ScenarioWorld, elementKey: ElementKey, negate: boolean, variableKey: string) {
        const {
            screen: { page },
            globalConfig,
            globalVariables
        } = this;

        console.log(`The ${elementKey} should${negate?' not':''} contain the ${globalVariables[variableKey]} stored in global variables`);

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor(async () => {
            const elementText = await page.textContent(elementIdentifier);
            const variableValue = globalVariables[variableKey];
            return elementText?.includes(variableValue) === !negate;
        })        
    }
)