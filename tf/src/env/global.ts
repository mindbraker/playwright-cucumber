export type PageId = string;
export type ElementKey = string;
export type ElementLocator = string;
export type WaitForTarget = PageId | ElementKey;
export type WaitForTargetType = string;
export type PageElementMappings = Record<
    PageId,
    Record<ElementKey, ElementLocator>
>;
export type GlobalVariables = { [key: string]: string };
export type PagesConfig = Record<PageId, Record<string, string>>;
export type HostsConfig = Record<string, string>;
export type UsernamesConfig = Record<string, string>;
export type ErrorsConfig = ErrorConfig[];
export type ErrorConfig = {
    originalErrMsgRegexString: string;
    parsedErrMsg: string;
};

export type GlobalConfig = {
    hostsConfig: HostsConfig;
    pagesConfig: PagesConfig;
    pageElementMappings: PageElementMappings;
    errorsConfig: ErrorsConfig;
    usernamesConfig: UsernamesConfig;
};
