import { Given } from '@cucumber/cucumber';
import { PageId } from '../env/global';
import { logger } from '../logger';
import {
    currentPathMatchesPageId,
    navigateToPage,
    reloadPage,
} from '../support/navigation-behavior';
import { waitFor } from '../support/wait-for-behavior';
import { ScenarioWorld } from './setup/world';

Given(
    /^I am on the "([^"]*)" page$/,
    async function (this: ScenarioWorld, pageId: PageId) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        logger.log(`📜 Current page: ${pageId}`);

        await navigateToPage(page, pageId, globalConfig);

        await waitFor(
            () => currentPathMatchesPageId(page, pageId, globalConfig),
            globalConfig,
            { target: pageId, type: 'page' },
        );
    },
);

Given(
    /^I am directed to the "([^"]*)" page$/,
    async function (this: ScenarioWorld, pageId: PageId) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        logger.log(`🔨 Navigating to the ${pageId} page`);

        await waitFor(
            () => currentPathMatchesPageId(page, pageId, globalConfig),
            globalConfig,
            { target: pageId, type: 'page' },
        );
    },
);

Given(
    /^I refresh the "([^"]*)" page$/,
    async function (this: ScenarioWorld, pageId: PageId) {
        const {
            screen: { page },
            globalConfig,
        } = this;
        logger.log(`🌐 Refreshing ${pageId}`);

        await reloadPage(page);

        await waitFor(
            () => currentPathMatchesPageId(page, pageId, globalConfig),
            globalConfig,
            {
                target: pageId,
                type: 'page',
                timeout: 30_000,
            },
        );
    },
);
