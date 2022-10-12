import { DataTable, Then } from '@cucumber/cucumber'
import { getElementLocator } from '../../support/web-element-helper'
import { ScenarioWorld } from '../setup/world'
import { waitFor } from '../../support/wait-for-behavior'
import { ElementKey } from '../../env/global'

Then(
    /^the "([^"]*)" table should( not)? equal the following:$/,
    async function(this: ScenarioWorld, elementKey: ElementKey, negate: boolean, dataTable: DataTable) {
        const {
            screen: { page },
            globalConfig
        } = this;

        console.log(`${elementKey} table should${negate?' not':''} equal the following:`);

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);


        await waitFor(async () => {

            const dataBefore = await page.$$eval(elementIdentifier + " " + "tbody tr", (rows) => {
                return rows.map(row => {
                    const cells = row.querySelectorAll('td');
                    return Array.from(cells).map(cell => cell.textContent);
                })
            })
            
            return JSON.stringify(dataBefore) === JSON.stringify(dataTable.raw()) === !negate
            
        })
    }
)