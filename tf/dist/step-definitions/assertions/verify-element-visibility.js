"use strict";

var _cucumber = require("@cucumber/cucumber");

var _webElementHelper = require("../../support/web-element-helper");

var _waitForBehavior = require("../../support/wait-for-behavior");

(0, _cucumber.Then)(/^the "([^"]*)" should( not)? be displayed$/, async function (elementKey, negate) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  console.log(`🔎 ${elementKey} should${negate ? ' not' : ''} be displayed ✨`);
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    const isElementVisible = (await page.$(elementIdentifier)) != null;
    return isElementVisible === !negate;
  });
});
(0, _cucumber.Then)(/^the "([0-9]+th|[0-9]+st|[0-9]+nd|[0-9]+rd)" "([^"]*)" should( not)? be displayed$/, async function (elementPosition, elementKey, negate) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  console.log(`🔎 ${elementPosition} ${elementKey} should${negate ? ' not' : ''} be displayed ✨`);
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  const index = Number(elementPosition.match(/\d/g)?.join('')) - 1;
  await (0, _waitForBehavior.waitFor)(async () => {
    const isElementVisible = (await page.$(`${elementIdentifier}>>nth=${index}`)) != null;
    return isElementVisible === !negate;
  });
});
(0, _cucumber.Then)(/^I should( not)? see "(\d*)" "([^"]*)" displayed$/, async function (negate, count, elementKey) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  console.log(`I should${negate ? ' not' : ''} see ${count} ${elementKey} displayed`);
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    const element = await page.$$(elementIdentifier);
    return Number(count) === element.length === !negate;
  });
});