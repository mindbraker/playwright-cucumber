import { GlobalConfig } from '../env/global';

const isLookupVariable = (input: string, lookupTrigger: string): boolean => {
    return !!(lookupTrigger && input.startsWith(lookupTrigger));
}

const getLookupVariable = (input: string, lookupTrigger: string, config: GlobalConfig): string => {
    const key = input.slice(lookupTrigger.length)
    const lookupValue = config.emailsConfig[key] ?? process.env[key]

    if (!lookupValue) {
        throw Error(`🛑 Could not get ${input} lookup trigger 😥`)
    }

    return lookupValue
}

export const parseInput = (input: string, config: GlobalConfig): string => {
    const lookupTrigger = process.env.VAR_LOOKUP_TRIGGER ?? '$.'
    return isLookupVariable(input, lookupTrigger) ? getLookupVariable(input, lookupTrigger, config): input
}