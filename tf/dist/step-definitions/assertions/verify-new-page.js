"use strict";

var _cucumber = require("@cucumber/cucumber");

var _waitForBehavior = require("../../support/wait-for-behavior");

var _webElementHelper = require("../../support/web-element-helper");

(0, _cucumber.Then)(/^the "([0-9]+th|[0-9]+st|[0-9]+nd|[0-9]+rd)" (?:tab|window) should( not)? contain the title "(.*)"$/, async function (elementPosition, negate, expectedTitle) {
  const {
    screen: {
      page,
      context
    }
  } = this;
  console.log(`${elementPosition} (?:tab|window) should${negate ? ' not' : ''} contain the title ${expectedTitle}`);
  const pageIndex = Number(elementPosition.match(/\d/g)?.join('')) - 1;
  await page.waitForTimeout(2_000);
  await (0, _waitForBehavior.waitFor)(async () => {
    let pages = context.pages();
    const pageTitle = await pages[pageIndex].title();
    return pageTitle?.includes(expectedTitle) === !negate;
  });
});
(0, _cucumber.Then)(/^the "([^"]*)" on the "([0-9]+th|[0-9]+st|[0-9]+nd|[0-9]+rd)" (?:tab|window) should( not)? be displayed$/, async function (elementKey, elementPosition, negate) {
  const {
    screen: {
      page,
      context
    },
    globalConfig
  } = this;
  console.log(`🔎 ${elementKey} on the ${elementPosition} (?:tab|window) should${negate ? ' not' : ''} be displayed`);
  const pageIndex = Number(elementPosition.match(/\d/g)?.join('')) - 1;
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    let pages = context.pages();
    const isElementVisible = (await pages[pageIndex].$(elementIdentifier)) != null;
    return isElementVisible === !negate;
  });
});
(0, _cucumber.Then)(/^the "([^"]*)" on the "([0-9]+th|[0-9]+st|[0-9]+nd|[0-9]+rd)" (?:tab|window) should( not)? contain the text "(.*)"$/, async function (elementKey, elementPosition, negate, expectedElementText) {
  const {
    screen: {
      page,
      context
    },
    globalConfig
  } = this;
  console.log(`🔎 ${elementKey} on the ${elementPosition} (?:tab|window) should${negate ? ' not' : ''} contain the text ${expectedElementText}`);
  const pageIndex = Number(elementPosition.match(/\d/g)?.join('')) - 1;
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    let pages = context.pages();
    const elementText = await pages[pageIndex].textContent(elementIdentifier);
    return elementText?.includes(expectedElementText) === !negate;
  });
});
(0, _cucumber.Then)(/^the "([^"]*)" on the "([0-9]+th|[0-9]+st|[0-9]+nd|[0-9]+rd)" (?:tab|window) should( not)? equal the text "(.*)"$/, async function (elementKey, elementPosition, negate, expectedElementText) {
  const {
    screen: {
      page,
      context
    },
    globalConfig
  } = this;
  console.log(`🔎 ${elementKey} on the ${elementPosition} (?:tab|window) should${negate ? ' not' : ''} equal the text ${expectedElementText}`);
  const pageIndex = Number(elementPosition.match(/\d/g)?.join('')) - 1;
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    let pages = context.pages();
    const elementText = await pages[pageIndex].textContent(elementIdentifier);
    return elementText === expectedElementText === !negate;
  });
});