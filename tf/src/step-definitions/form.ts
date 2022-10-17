import { Then } from '@cucumber/cucumber';
import { waitFor, waitForSelector } from '../support/wait-for-behavior';
import { getElementLocator } from '../support/web-element-helper';
import { ScenarioWorld } from './setup/world';
import { ElementKey } from '../env/global';
import {
    inputElementValue,
    selectElementValue,
} from '../support/html-behavior';
import { parseInput } from '../support/input-helper';
import { logger } from '../logger';

Then(
    /^I fill in the "([^"]*)" input with "([^"]*)"$/,
    async function (
        this: ScenarioWorld,
        elementKey: ElementKey,
        input: string,
    ) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        logger.log(`📝 Filling ${elementKey} input with ${input}`);

        const elementIdentifier = getElementLocator(
            page,
            elementKey,
            globalConfig,
        );

        await waitFor(async () => {
            const elementStable = await waitForSelector(
                page,
                elementIdentifier,
            );

            if (elementStable) {
                const parsedInput = parseInput(input, globalConfig);
                await inputElementValue(page, elementIdentifier, parsedInput);
            }
            return elementStable;
        });
    },
);

Then(
    /^I select the "([^"]*)" option from "([^"]*)"$/,
    async function (
        this: ScenarioWorld,
        option: string,
        elementKey: ElementKey,
    ) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        logger.log(`🖱 Selecting ${option} option from ${elementKey}`);

        const elementIdentifier = getElementLocator(
            page,
            elementKey,
            globalConfig,
        );

        await waitFor(async () => {
            const elementStable = await waitForSelector(
                page,
                elementIdentifier,
            );

            if (elementStable) {
                await selectElementValue(page, elementIdentifier, option);
            }
            return elementStable;
        });
    },
);
