import { Then } from '@cucumber/cucumber';
import { ElementKey } from '../../env/global';
import { logger } from '../../logger';
import {
    elementEnabled,
    getAttributeText,
    getElementText,
    getElementTextAtIndex,
    getElementValue,
} from '../../support/html-behavior';
import {
    waitFor,
    waitForResult,
    waitForSelector,
} from '../../support/wait-for-behavior';
import { getElementLocator } from '../../support/web-element-helper';
import { ScenarioWorld } from '../setup/world';

Then(
    /^the "([^"]*)" should( not)? contain the text "(.*)"$/,
    async function (
        this: ScenarioWorld,
        elementKey: ElementKey,
        negate: boolean,
        expectedElementText: string,
    ) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        logger.log(
            `🐲 ${elementKey} should${
                negate ? ' not' : ''
            } contain text: ${expectedElementText}`,
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
                    const elementText = await getElementText(
                        page,
                        elementIdentifier,
                    );

                    logger.debug('🤖 elementText:', elementText);
                    logger.debug(
                        '🤖 expectedElementText:',
                        expectedElementText,
                    );

                    if (
                        elementText?.includes(expectedElementText) === !negate
                    ) {
                        return waitForResult.PASS;
                    } else {
                        return waitForResult.FAIL;
                    }
                } else {
                    return waitForResult.ELEMENT_NOT_AVAILABLE;
                }
            },
            globalConfig,
            {
                target: elementKey,
                failureMessage: `🤖 Expected ${elementKey} to${
                    negate ? ' not' : ''
                } contain the text ${expectedElementText}`,
            },
        );
    },
);

Then(
    /^the "([^"]*)" should( not)? equal the text "(.*)"$/,
    async function (
        this: ScenarioWorld,
        elementKey: ElementKey,
        negate: boolean,
        expectedElementText: string,
    ) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        logger.log(
            `🐲 ${elementKey} should${
                negate ? ' not' : ''
            } equal text: ${expectedElementText}`,
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
                    const elementText = await getElementText(
                        page,
                        elementIdentifier,
                    );
                    if ((elementText === expectedElementText) === !negate) {
                        return waitForResult.PASS;
                    } else {
                        return waitForResult.FAIL;
                    }
                } else {
                    return waitForResult.ELEMENT_NOT_AVAILABLE;
                }
            },
            globalConfig,
            {
                target: elementKey,
                failureMessage: `🤖 Expected ${elementKey} to${
                    negate ? ' not' : ''
                } equal the text ${expectedElementText}`,
            },
        );
    },
);

Then(
    /^the "([^"]*)" should( not)? contain the value "(.*)"$/,
    async function (
        this: ScenarioWorld,
        elementKey: ElementKey,
        negate: boolean,
        expectedElementValue: string,
    ) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        logger.log(
            `🐲 ${elementKey} should${
                negate ? ' not' : ''
            } contain value: ${expectedElementValue}`,
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
                    const elementAttribute = await getElementValue(
                        page,
                        elementIdentifier,
                    );
                    if (
                        elementAttribute?.includes(expectedElementValue) ===
                        !negate
                    ) {
                        return waitForResult.PASS;
                    } else {
                        return waitForResult.FAIL;
                    }
                } else {
                    return waitForResult.ELEMENT_NOT_AVAILABLE;
                }
            },
            globalConfig,
            {
                target: elementKey,
                failureMessage: `🤖 Expected ${elementKey} to${
                    negate ? ' not' : ''
                } contain the value ${expectedElementValue}`,
            },
        );
    },
);

Then(
    /^the "([^"]*)" should( not)? equal the value "(.*)"$/,
    async function (
        this: ScenarioWorld,
        elementKey: ElementKey,
        negate: boolean,
        expectedElementValue: string,
    ) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        logger.log(
            `🐲 ${elementKey} should${
                negate ? ' not' : ''
            } equal value: ${expectedElementValue}`,
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
                    const elementAttribute = await getElementValue(
                        page,
                        elementIdentifier,
                    );
                    if (
                        (elementAttribute === expectedElementValue) ===
                        !negate
                    ) {
                        return waitForResult.PASS;
                    } else {
                        return waitForResult.FAIL;
                    }
                } else {
                    return waitForResult.ELEMENT_NOT_AVAILABLE;
                }
            },
            globalConfig,
            {
                target: elementKey,
                failureMessage: `🤖 Expected ${elementKey} to${
                    negate ? ' not' : ''
                } equal value ${expectedElementValue}`,
            },
        );
    },
);

Then(
    /^the "([^"]*)" should( not)? be enabled$/,
    async function (
        this: ScenarioWorld,
        elementKey: ElementKey,
        negate: boolean,
    ) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        logger.log(`🐲 ${elementKey} should${negate ? ' not' : ''} be enabled`);

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
                    const isElementEnabled = await elementEnabled(
                        page,
                        elementIdentifier,
                    );
                    if (isElementEnabled === !negate) {
                        return waitForResult.PASS;
                    } else {
                        return waitForResult.FAIL;
                    }
                } else {
                    return waitForResult.ELEMENT_NOT_AVAILABLE;
                }
            },
            globalConfig,
            {
                target: elementKey,
                failureMessage: `🤖 Expected ${elementKey} to${
                    negate ? ' not' : ''
                } be enabled`,
            },
        );
    },
);

Then(
    /^the "([0-9]+th|[0-9]+st|[0-9]+nd|[0-9]+rd)" "([^"]*)" should( not)? contain the text "(.*)"$/,
    async function (
        this: ScenarioWorld,
        elementPosition: string,
        elementKey: ElementKey,
        negate: boolean,
        expectedElementText: string,
    ) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        logger.log(
            `🐲 ${elementPosition} ${elementKey} should${
                negate ? ' not' : ''
            } contain the text: ${expectedElementText}`,
        );

        const elementIdentifier = getElementLocator(
            page,
            elementKey,
            globalConfig,
        );

        const index = Number(elementPosition.match(/\d/g)?.join('')) - 1;

        await waitFor(
            async () => {
                const elementStable = await waitForSelector(
                    page,
                    elementIdentifier,
                );

                if (elementStable) {
                    const elementText = await getElementTextAtIndex(
                        page,
                        elementIdentifier,
                        index,
                    );
                    if (
                        elementText?.includes(expectedElementText) === !negate
                    ) {
                        waitForResult.PASS;
                    } else {
                        waitForResult.FAIL;
                    }
                } else {
                    return waitForResult.ELEMENT_NOT_AVAILABLE;
                }
            },
            globalConfig,
            {
                target: elementKey,
                failureMessage: `🤖 Expected ${elementPosition} ${elementKey} to${
                    negate ? ' not' : ''
                } contain the text ${expectedElementText}`,
            },
        );
    },
);

Then(
    /^the "([^"]*)" "([^"]*)" attribute should( not)? contain the text "(.*)"$/,
    async function (
        this: ScenarioWorld,
        elementKey: ElementKey,
        attribute: string,
        negate: boolean,
        expectedElementText: string,
    ) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        logger.log(
            `🐲 Expected ${elementKey} ${attribute} attribute to${
                negate ? ' not' : ''
            } contain text: ${expectedElementText}`,
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
                    const attributeText = await getAttributeText(
                        page,
                        elementIdentifier,
                        attribute,
                    );
                    if (
                        attributeText?.includes(expectedElementText) === !negate
                    ) {
                        return waitForResult.PASS;
                    } else {
                        return waitForResult.FAIL;
                    }
                } else {
                    return waitForResult.ELEMENT_NOT_AVAILABLE;
                }
            },
            globalConfig,
            {
                target: elementKey,
                failureMessage: `🤖 Expected ${elementKey} ${attribute} to${
                    negate ? ' not' : ''
                } contain the text ${expectedElementText}`,
            },
        );
    },
);
