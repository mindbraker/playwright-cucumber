import { Given } from '@cucumber/cucumber'
import { PageId } from '../env/global'
import {
    navigateToPage
} from '../support/navigation-behavior'
import { ScenarioWorld } from './setup/world';

Given(
    /^I am on the "([^"]*)" page$/,
    async function(this: ScenarioWorld, pageId: PageId) {
        const {
            screen: { page },
            globalVariables,
            globalConfig
        } = this;

        console.log(`📜 Current page: ${pageId}`);

        globalVariables.currentScreen = pageId;

        await navigateToPage(page, pageId, globalConfig)
    }
)