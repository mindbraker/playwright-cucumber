import { Page } from 'playwright';
import { GlobalConfig, PageId } from '../env/global';
import { logger } from '../logger';
import { waitForResult } from './wait-for-behavior';

export const navigateToPage = async (
    page: Page,
    pageId: PageId,
    { pagesConfig, hostsConfig }: GlobalConfig,
): Promise<void> => {
    const { UI_AUTOMATION_HOST: hostname = 'development' } = process.env;

    const hostpath = hostsConfig[`${hostname}`];
    logger.log('🌐 URL:', hostpath);

    const url = new URL(hostpath);

    const pagesConfigItem = pagesConfig[pageId];
    url.pathname = pagesConfigItem.route;
    logger.log('🌐 Page path:', url.pathname);

    await page.goto(url.href);
};

const pathMatchesPageId = (
    path: string,
    pageId: PageId,
    { pagesConfig }: GlobalConfig,
): boolean => {
    const pageRegexString = pagesConfig[pageId].regex;
    const pageRegex = new RegExp(pageRegexString);
    return pageRegex.test(path);
};

export const currentPathMatchesPageId = (
    page: Page,
    pageId: PageId,
    globalConfig: GlobalConfig,
): waitForResult => {
    const { pathname: currentPath } = new URL(page.url());
    if (pathMatchesPageId(currentPath, pageId, globalConfig)) {
        return waitForResult.PASS;
    }
    return waitForResult.ELEMENT_NOT_AVAILABLE;
};

export const getCurrentPageId = (
    page: Page,
    globalConfig: GlobalConfig,
): PageId => {
    const { pagesConfig } = globalConfig;
    const pageConfigPageIds = Object.keys(pagesConfig);
    const { pathname: currentPath } = new URL(page.url());
    const currentPageId = pageConfigPageIds.find((pageId) =>
        pathMatchesPageId(currentPath, pageId, globalConfig),
    );

    if (!currentPageId) {
        throw Error(
            `Failed to get page name from current route ${currentPath}, \
        Possible pages: ${JSON.stringify(pagesConfig)}`,
        );
    }
    return currentPageId;
};

export const reloadPage = async (page: Page): Promise<void> => {
    await page.reload();
};
