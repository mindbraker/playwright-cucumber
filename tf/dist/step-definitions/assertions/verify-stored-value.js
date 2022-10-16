"use strict";

var _cucumber = require("@cucumber/cucumber");

var _webElementHelper = require("../../support/web-element-helper");

var _waitForBehavior = require("../../support/wait-for-behavior");

var _logger = require("../../logger");

(0, _cucumber.Then)(/^the "([^"]*)" should( not)? equal the "([^"]*)" stored in global variables$/, async function (elementKey, negate, variableKey) {
  const {
    screen: {
      page
    },
    globalConfig,
    globalVariables
  } = this;

  _logger.logger.log(`🔎 ${elementKey} should${negate ? ' not' : ''} equal the ${globalVariables[variableKey]} stored in global variables ✨`);

  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    const elementText = await page.textContent(elementIdentifier);
    const variableValue = globalVariables[variableKey];
    return elementText === variableValue === !negate;
  });
});
(0, _cucumber.Then)(/^the "([^"]*)" should( not)? contain the "([^"]*)" stored in global variables$/, async function (elementKey, negate, variableKey) {
  const {
    screen: {
      page
    },
    globalConfig,
    globalVariables
  } = this;

  _logger.logger.log(`🔎 ${elementKey} should${negate ? ' not' : ''} contain the ${globalVariables[variableKey]} stored in global variables ✨`);

  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    const elementText = await page.textContent(elementIdentifier);
    const variableValue = globalVariables[variableKey];
    return elementText?.includes(variableValue) === !negate;
  });
});