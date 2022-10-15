import { Then } from '@cucumber/cucumber';
import { waitFor } from '../../support/wait-for-behavior';
import { ScenarioWorld } from '../setup/world';
import { getElementLocator } from '../../support/web-element-helper';
import { ElementKey } from '../../env/global';
import { logger } from '../../logger';

Then(
    /^the "([0-9]+th|[0-9]+st|[0-9]+nd|[0-9]+rd)" (?:tab|window) should( not)? contain the title "(.*)"$/,
    async function (
        this: ScenarioWorld,
        elementPosition: string,
        negate: boolean,
        expectedTitle: string,
    ) {
        const {
            screen: { page, context },
        } = this;

        logger.log(
            `🔎 ${elementPosition} tab | window should${
                negate ? ' not' : ''
            } contain the title: ${expectedTitle} ✨`,
        );

        const pageIndex = Number(elementPosition.match(/\d/g)?.join('')) - 1;

        await page.waitForTimeout(2_000);

        await waitFor(async () => {
            let pages = context.pages();
            const pageTitle = await pages[pageIndex].title();
            return pageTitle?.includes(expectedTitle) === !negate;
        });
    },
);

Then(
    /^the "([^"]*)" on the "([0-9]+th|[0-9]+st|[0-9]+nd|[0-9]+rd)" (?:tab|window) should( not)? be displayed$/,
    async function (
        this: ScenarioWorld,
        elementKey: ElementKey,
        elementPosition: string,
        negate: boolean,
    ) {
        const {
            screen: { page, context },
            globalConfig,
        } = this;

        logger.log(
            `🔎 ${elementKey} on the ${elementPosition} tab | window should${
                negate ? ' not' : ''
            } be displayed ✨`,
        );

        const pageIndex = Number(elementPosition.match(/\d/g)?.join('')) - 1;

        const elementIdentifier = getElementLocator(
            page,
            elementKey,
            globalConfig,
        );

        await waitFor(async () => {
            let pages = context.pages();
            const isElementVisible =
                (await pages[pageIndex].$(elementIdentifier)) != null;
            return isElementVisible === !negate;
        });
    },
);

Then(
    /^the "([^"]*)" on the "([0-9]+th|[0-9]+st|[0-9]+nd|[0-9]+rd)" (?:tab|window) should( not)? contain the text "(.*)"$/,
    async function (
        this: ScenarioWorld,
        elementKey: ElementKey,
        elementPosition: string,
        negate: boolean,
        expectedElementText: string,
    ) {
        const {
            screen: { page, context },
            globalConfig,
        } = this;

        logger.log(
            `🔎 ${elementKey} on the ${elementPosition} tab | window should${
                negate ? ' not' : ''
            } contain the text: ${expectedElementText} ✨`,
        );

        const pageIndex = Number(elementPosition.match(/\d/g)?.join('')) - 1;

        const elementIdentifier = getElementLocator(
            page,
            elementKey,
            globalConfig,
        );

        await waitFor(async () => {
            let pages = context.pages();
            const elementText = await pages[pageIndex].textContent(
                elementIdentifier,
            );
            return elementText?.includes(expectedElementText) === !negate;
        });
    },
);

Then(
    /^the "([^"]*)" on the "([0-9]+th|[0-9]+st|[0-9]+nd|[0-9]+rd)" (?:tab|window) should( not)? equal the text "(.*)"$/,
    async function (
        this: ScenarioWorld,
        elementKey: ElementKey,
        elementPosition: string,
        negate: boolean,
        expectedElementText: string,
    ) {
        const {
            screen: { page, context },
            globalConfig,
        } = this;

        logger.log(
            `🔎 ${elementKey} on the ${elementPosition} tab | window should${
                negate ? ' not' : ''
            } equal the text: ${expectedElementText} ✨`,
        );

        const pageIndex = Number(elementPosition.match(/\d/g)?.join('')) - 1;

        const elementIdentifier = getElementLocator(
            page,
            elementKey,
            globalConfig,
        );

        await waitFor(async () => {
            let pages = context.pages();
            const elementText = await pages[pageIndex].textContent(
                elementIdentifier,
            );
            return (elementText === expectedElementText) === !negate;
        });
    },
);
