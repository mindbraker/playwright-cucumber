import { Page } from 'playwright'
import { GlobalConfig, PageId } from '../env/global'

export const navigateToPage = async (
    page: Page,
    pageId: PageId,
    { pagesConfig, hostsConfig }: GlobalConfig
): Promise<void> => {
    const {
        UI_AUTOMATION_HOST: hostname = 'localhost'
    } = process.env

    const hostpath = hostsConfig[`${hostname}`];
    console.log('🌐 Hostpath:', hostpath);

    const url = new URL(hostpath);
    // console.log('🌐 URL:', url);

    const pagesConfigItem = pagesConfig[pageId];
    url.pathname = pagesConfigItem.route;
    console.log('🌐 Pages route:', url.pathname);

    await page.goto(url.href)
}