import { Then } from '@cucumber/cucumber'
import { ElementKey } from '../../env/global'
import { getValue } from '../../support/html-behavior'
import { getElementLocator } from '../../support/web-element-helper'
import { ScenarioWorld } from '../setup/world'
import { waitFor } from '../../support/wait-for-behavior'

Then(
    /^the "([^"]*)" should( not)? contain the text "(.*)"$/,
    async function (this: ScenarioWorld, elementKey: ElementKey, negate: boolean, expectedElementText: string) {
        const {
            screen: { page },
            globalConfig,
        } = this;
        
        console.log(`🔎 ${elementKey} should${negate?' not':''} contain text: ${expectedElementText} 💬`);

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor(async () => {
            const elementText = await page.textContent(elementIdentifier);
            return elementText?.includes(expectedElementText) === !negate;
        })
    }
)

Then(
    /^the "([^"]*)" should( not)? equal the text "(.*)"$/,
    async function (this: ScenarioWorld, elementKey: ElementKey, negate: boolean, expectedElementText: string) {
        const {
            screen: { page },
            globalConfig
        } = this;

        console.log(`🔎 ${elementKey} should${negate?' not':''} equal text: ${expectedElementText} 💬`);

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor(async () => {
            const elementText = await page.textContent(elementIdentifier);
            return (elementText === expectedElementText) === !negate;
        })
    }
)

Then(
    /^the "([^"]*)" should( not)? contain the value "(.*)"$/,
    async function (this: ScenarioWorld, elementKey: ElementKey, negate: boolean, elementValue: string) {
        const {
            screen: { page },
            globalConfig
        } = this;

        console.log(`🔎 ${elementKey} should${negate?' not':''} contain value: ${elementValue} 💬`);

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor(async () => {
            const elementAttribute = await getValue(page, elementIdentifier);
            return elementAttribute?.includes(elementValue) === !negate;
        })

    }
)

Then(
    /^the "([^"]*)" should( not)? equal the value "(.*)"$/,
    async function (this: ScenarioWorld, elementKey: ElementKey, negate: boolean, elementValue: string) {
        const {
            screen: { page },
            globalConfig
        } = this;

        console.log(`🔎 ${elementKey} should${negate?' not':''} equal value: ${elementValue} 💬`);

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor(async () => {
            const elementAttribute = await getValue(page, elementIdentifier);
            return (elementAttribute === elementValue) === !negate; 
        })

    }
)

Then(
    /^the "([^"]*)" should( not)? be enabled$/,
    async function (this: ScenarioWorld, elementKey: ElementKey, negate: boolean) {
        const {
            screen: { page },
            globalConfig
        } = this;

        console.log(`🔎 ${elementKey} should${negate?' not':''} be enabled 💬`);

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor(async () => {
            const isElementEnabled = await page.isEnabled(elementIdentifier);
            return isElementEnabled === !negate;
        })

    }
)