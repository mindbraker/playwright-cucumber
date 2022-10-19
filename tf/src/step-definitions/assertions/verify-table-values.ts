import { DataTable, Then } from '@cucumber/cucumber';
import { ElementKey } from '../../env/global';
import { logger } from '../../logger';
import { getTableData } from '../../support/html-behavior';
import {
    waitFor,
    waitForResult,
    waitForSelector,
} from '../../support/wait-for-behavior';
import { getElementLocator } from '../../support/web-element-helper';
import { ScenarioWorld } from '../setup/world';

Then(
    /^the "([^"]*)" table should( not)? equal the following:$/,
    async function (
        this: ScenarioWorld,
        elementKey: ElementKey,
        negate: boolean,
        dataTable: DataTable,
    ) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        logger.log(
            `🐲 ${elementKey} table should${
                negate ? ' not' : ''
            } equal the following:`,
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
                    const tableData = await getTableData(
                        page,
                        elementIdentifier,
                    );
                    if (
                        (tableData === JSON.stringify(dataTable.raw())) ===
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
                } equal ${dataTable.raw()}`,
            },
        );
    },
);
