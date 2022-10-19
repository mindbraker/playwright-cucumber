import { Then } from '@cucumber/cucumber';
import { ElementKey } from '../env/global';
import { logger } from '../logger';
import { scrollElementIntoView } from '../support/html-behavior';
import {
    waitFor,
    waitForResult,
    waitForSelector,
} from '../support/wait-for-behavior';
import { getElementLocator } from '../support/web-element-helper';
import { ScenarioWorld } from './setup/world';

Then(
    /^I scroll to the "([^"]*)"$/,
    async function (this: ScenarioWorld, elementKey: ElementKey) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        logger.log(`🐲 Scrolling to the ${elementKey} ✨`);

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
                    await scrollElementIntoView(page, elementIdentifier);
                    return waitForResult.PASS;
                }

                return waitForResult.ELEMENT_NOT_AVAILABLE;
            },
            globalConfig,
            { target: elementKey },
        );
    },
);
