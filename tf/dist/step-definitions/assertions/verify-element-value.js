"use strict";

var _cucumber = require("@cucumber/cucumber");

var _htmlBehavior = require("../../support/html-behavior");

var _webElementHelper = require("../../support/web-element-helper");

var _waitForBehavior = require("../../support/wait-for-behavior");

(0, _cucumber.Then)(/^the "([^"]*)" should( not)? contain the text "(.*)"$/, async function (elementKey, negate, expectedElementText) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  console.log(`🔎 ${elementKey} should${negate ? ' not' : ''} contain text: ${expectedElementText} 💬`);
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    const elementText = await page.textContent(elementIdentifier);
    return elementText?.includes(expectedElementText) === !negate;
  });
});
(0, _cucumber.Then)(/^the "([^"]*)" should( not)? equal the text "(.*)"$/, async function (elementKey, negate, expectedElementText) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  console.log(`🔎 ${elementKey} should${negate ? ' not' : ''} equal text: ${expectedElementText} 💬`);
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    const elementText = await page.textContent(elementIdentifier);
    return elementText === expectedElementText === !negate;
  });
});
(0, _cucumber.Then)(/^the "([^"]*)" should( not)? contain the value "(.*)"$/, async function (elementKey, negate, elementValue) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  console.log(`🔎 ${elementKey} should${negate ? ' not' : ''} contain value: ${elementValue} 💬`);
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    const elementAttribute = await (0, _htmlBehavior.getValue)(page, elementIdentifier);
    return elementAttribute?.includes(elementValue) === !negate;
  });
});
(0, _cucumber.Then)(/^the "([^"]*)" should( not)? equal the value "(.*)"$/, async function (elementKey, negate, elementValue) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  console.log(`🔎 ${elementKey} should${negate ? ' not' : ''} equal value: ${elementValue} 💬`);
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    const elementAttribute = await (0, _htmlBehavior.getValue)(page, elementIdentifier);
    return elementAttribute === elementValue === !negate;
  });
});
(0, _cucumber.Then)(/^the "([^"]*)" should( not)? be enabled$/, async function (elementKey, negate) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  console.log(`🔎 ${elementKey} should${negate ? ' not' : ''} be enabled 💬`);
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    const isElementEnabled = await page.isEnabled(elementIdentifier);
    return isElementEnabled === !negate;
  });
});
(0, _cucumber.Then)(/^the "([0-9]+th|[0-9]+st|[0-9]+nd|[0-9]+rd)" "([^"]*)" should( not)? contain the text "(.*)"$/, async function (elementPosition, elementKey, negate, expectedElementText) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  console.log(`🔎 ${elementPosition} ${elementKey} should${negate ? ' not' : ''} contain the text ${expectedElementText}`);
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  const pageIndex = Number(elementPosition.match(/\d/g)?.join('')) - 1;
  await (0, _waitForBehavior.waitFor)(async () => {
    const elementText = await page.textContent(`${elementIdentifier}>>nth=${pageIndex}`);
    return elementText?.includes(expectedElementText) === !negate;
  });
});
(0, _cucumber.Then)(/^the "([^"]*)" "([^"]*)" attribute should( not)? contain the text "(.*)"$/, async function (elementKey, attribute, negate, expectedElementText) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  console.log(`${elementKey} ${attribute} attribute should${negate ? ' not' : ''} contain the text ${expectedElementText}`);
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    const attributeText = await (0, _htmlBehavior.getAttributeText)(page, elementIdentifier, attribute);
    return attributeText?.includes(expectedElementText) === !negate;
  });
});