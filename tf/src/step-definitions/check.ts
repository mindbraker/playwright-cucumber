import { Then } from '@cucumber/cucumber';
import { ElementKey } from '../env/global';
import { logger } from '../logger';
import { checkElement, uncheckElement } from '../support/html-behavior';
import {
    waitFor,
    waitForResult,
    waitForSelector,
} from '../support/wait-for-behavior';
import { getElementLocator } from '../support/web-element-helper';
import { ScenarioWorld } from './setup/world';

Then(
    /^I (check)?(uncheck)? the "([^"]*)" (?:check box|radio button|switch)$/,
    async function (
        this: ScenarioWorld,
        checked: boolean,
        unchecked: boolean,
        elementKey: ElementKey,
    ) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        logger.log(
            `🐲 ${elementKey} check box | radio | switch button will be ${
                unchecked ? 'unchecked' : 'checked'
            }`,
        );

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
                    if (!!unchecked) {
                        await uncheckElement(page, elementIdentifier);
                        return waitForResult.PASS;
                    } else {
                        await checkElement(page, elementIdentifier);
                        return waitForResult.PASS;
                    }
                }
                return waitForResult.ELEMENT_NOT_AVAILABLE;
            },
            globalConfig,
            { target: elementKey },
        );
    },
);
