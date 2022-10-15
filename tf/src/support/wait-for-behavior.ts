import { logger } from '../logger';

export const waitFor = async <T>(
    predicate: () => T | Promise<T>,
    options?: { timeout?: number; wait?: number },
): Promise<T> => {
    const { timeout = 20_000, wait = 2_000 } = options || {};

    const sleep = (ms: number) =>
        new Promise((resolve) => setTimeout(resolve, ms));
    const startDate = new Date();

    while (new Date().getTime() - startDate.getTime() < timeout) {
        const result = await predicate();
        if (result) return result;

        await sleep(wait);
        logger.log(`🕐🕑🕒 Waiting ${wait}ms`);
    }

    throw new Error(`🔔 Wait time of ${timeout}ms exceeded 🙁`);
};
