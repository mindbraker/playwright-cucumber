import { When } from '@cucumber/cucumber';
import { ElementKey } from '../env/global';
import { logger } from '../logger';
import { clickElement, clickElementAtIndex } from '../support/html-behavior';
import {
    waitFor,
    waitForResult,
    waitForSelector,
} from '../support/wait-for-behavior';
import { getElementLocator } from '../support/web-element-helper';
import { ScenarioWorld } from './setup/world';

When(
    /^I click the "([^"]*)" (?:button|link|icon|element)$/,
    async function (this: ScenarioWorld, elementKey: ElementKey) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        logger.log(`🐲 Clicking ${elementKey} button | link | icon | element`);

        const elementIdentifier = getElementLocator(
            page,
            elementKey,
            globalConfig,
        );

        await waitFor(
            async () => {
                const elementStable = await waitForSelector(
                    page,
                    elementIdentifier,
                );

                if (elementStable) {
                    await clickElement(page, elementIdentifier);
                    return waitForResult.PASS;
                }
                return waitForResult.ELEMENT_NOT_AVAILABLE;
            },
            globalConfig,
            { target: elementKey },
        );
    },
);

When(
    /^I click the "([0-9]+th|[0-9]+st|[0-9]+nd|[0-9]+rd)" "([^"]*)" (?:button|link|icon|element)$/,
    async function (
        this: ScenarioWorld,
        elementPosition: string,
        elementKey: ElementKey,
    ) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        logger.log(
            `🐲 Clicking ${elementPosition} ${elementKey} button | link | icon | element`,
        );

        const elementIdentifier = getElementLocator(
            page,
            elementKey,
            globalConfig,
        );

        const pageIndex = Number(elementPosition.match(/\d/g)?.join('')) - 1;

        await waitFor(
            async () => {
                const elementStable = await waitForSelector(
                    page,
                    elementIdentifier,
                );

                if (elementStable) {
                    await clickElementAtIndex(
                        page,
                        elementIdentifier,
                        pageIndex,
                    );
                    return waitForResult.PASS;
                }
                return waitForResult.ELEMENT_NOT_AVAILABLE;
            },
            globalConfig,
            { target: elementKey },
        );
    },
);
