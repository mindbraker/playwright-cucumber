"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reloadPage = exports.navigateToPage = exports.getCurrentPageId = exports.currentPathMatchesPageId = void 0;

const navigateToPage = async (page, pageId, _ref) => {
  let {
    pagesConfig,
    hostsConfig
  } = _ref;
  const {
    UI_AUTOMATION_HOST: hostname = 'development'
  } = process.env;
  const hostpath = hostsConfig[`${hostname}`];
  console.log('🌐 Hostpath:', hostpath);
  const url = new URL(hostpath);
  const pagesConfigItem = pagesConfig[pageId];
  url.pathname = pagesConfigItem.route;
  console.log('🌐 Pages route:', url.pathname);
  await page.goto(url.href);
};

exports.navigateToPage = navigateToPage;

const pathMatchesPageId = (path, pageId, _ref2) => {
  let {
    pagesConfig
  } = _ref2;
  const pageRegexString = pagesConfig[pageId].regex;
  const pageRegex = new RegExp(pageRegexString);
  return pageRegex.test(path);
};

const currentPathMatchesPageId = (page, pageId, globalConfig) => {
  const {
    pathname: currentPath
  } = new URL(page.url());
  return pathMatchesPageId(currentPath, pageId, globalConfig);
};

exports.currentPathMatchesPageId = currentPathMatchesPageId;

const getCurrentPageId = (page, globalConfig) => {
  const {
    pagesConfig
  } = globalConfig;
  const pageConfigPageIds = Object.keys(pagesConfig);
  const {
    pathname: currentPath
  } = new URL(page.url());
  const currentPageId = pageConfigPageIds.find(pageId => pathMatchesPageId(currentPath, pageId, globalConfig));

  if (!currentPageId) {
    throw Error(`Failed to get page name from current route ${currentPath}, \
        Possible pages: ${JSON.stringify(pagesConfig)}`);
  }

  return currentPageId;
};

exports.getCurrentPageId = getCurrentPageId;

const reloadPage = async page => {
  await page.reload();
};

exports.reloadPage = reloadPage;