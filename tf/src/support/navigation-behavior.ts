import { Page } from 'playwright'
import { GlobalConfig, PageId } from '../env/global'

export const navigateToPage = async (
    page: Page,
    pageId: PageId,
    { pagesConfig, hostsConfig }: GlobalConfig
): Promise<void> => {
    const {
        UI_AUTOMATION_HOST: hostName = 'localhost'
    } = process.env

    const hostPath = hostsConfig[`${hostName}`];
    console.log('Hostpath ', hostPath);

    const url = new URL(hostPath);
    console.log('URL ', url);

    const pagesConfigItem = pagesConfig[pageId];
    url.pathname = pagesConfigItem.route;
    console.log('Pages route ', url.pathname);

    await page.goto(url.href)
}