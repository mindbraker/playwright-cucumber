import { Then } from '@cucumber/cucumber';
import { ElementKey } from '../../env/global';
import { logger } from '../../logger';
import {
    getElement,
    getElementAtIndex,
    getElements,
} from '../../support/html-behavior';
import { waitFor, waitForResult } from '../../support/wait-for-behavior';
import { getElementLocator } from '../../support/web-element-helper';
import { ScenarioWorld } from '../setup/world';

Then(
    /^the "([^"]*)" should( not)? be displayed$/,
    async function (
        this: ScenarioWorld,
        elementKey: ElementKey,
        negate: boolean,
    ) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        logger.log(
            `🐲 ${elementKey} should${negate ? ' not' : ''} be displayed`,
        );

        const elementIdentifier = getElementLocator(
            page,
            elementKey,
            globalConfig,
        );

        await waitFor(
            async () => {
                const isElementVisible =
                    (await getElement(page, elementIdentifier)) != null;
                if (isElementVisible === !negate) {
                    return waitForResult.PASS;
                } else {
                    return waitForResult.ELEMENT_NOT_AVAILABLE;
                }
            },
            globalConfig,
            {
                target: elementKey,
                failureMessage: `🤖 Expected ${elementKey} to${
                    negate ? ' not' : ''
                } be displayed`,
            },
        );
    },
);

Then(
    /^the "([0-9]+th|[0-9]+st|[0-9]+nd|[0-9]+rd)" "([^"]*)" should( not)? be displayed$/,
    async function (
        this: ScenarioWorld,
        elementPosition: string,
        elementKey: ElementKey,
        negate: boolean,
    ) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        logger.log(
            `🐲 ${elementPosition} ${elementKey} should${
                negate ? ' not' : ''
            } be displayed`,
        );

        const elementIdentifier = getElementLocator(
            page,
            elementKey,
            globalConfig,
        );

        const index = Number(elementPosition.match(/\d/g)?.join('')) - 1;

        await waitFor(
            async () => {
                const isElementVisible =
                    (await getElementAtIndex(page, elementIdentifier, index)) !=
                    null;
                if (isElementVisible === !negate) {
                    return waitForResult.PASS;
                } else {
                    return waitForResult.ELEMENT_NOT_AVAILABLE;
                }
            },
            globalConfig,
            {
                target: elementKey,
                failureMessage: `🤖 Expected ${elementPosition} ${elementKey} to${
                    negate ? ' not' : ''
                } be displayed`,
            },
        );
    },
);

Then(
    /^I should( not)? see "(\d*)" "([^"]*)" displayed$/,
    async function (
        this: ScenarioWorld,
        negate: boolean,
        count: string,
        elementKey: ElementKey,
    ) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        logger.log(
            `🐲 ${count} ${elementKey} should${negate ? ' not' : ''} displayed`,
        );

        const elementIdentifier = getElementLocator(
            page,
            elementKey,
            globalConfig,
        );

        await waitFor(
            async () => {
                const element = await getElements(page, elementIdentifier);
                if ((Number(count) === element.length) === !negate) {
                    return waitForResult.PASS;
                } else {
                    return waitForResult.ELEMENT_NOT_AVAILABLE;
                }
            },
            globalConfig,
            {
                target: elementKey,
                failureMessage: `🤖 Expected ${count} ${elementKey} to${
                    negate ? ' not' : ''
                } be displayed`,
            },
        );
    },
);
