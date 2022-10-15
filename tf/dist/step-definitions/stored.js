"use strict";

var _cucumber = require("@cucumber/cucumber");

var _webElementHelper = require("../support/web-element-helper");

var _waitForBehavior = require("../support/wait-for-behavior");

(0, _cucumber.Then)(/^I retrieve the "([^"]*)" text and store it as "([^"]*)" in global variables$/, async function (elementKey, variableKey) {
  const {
    screen: {
      page
    },
    globalConfig,
    globalVariables
  } = this;
  console.log(`I retrieve the ${elementKey} text and store it as ${variableKey} in global variables`);
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    const result = await page.waitForSelector(elementIdentifier, {
      state: 'visible'
    });

    if (result) {
      const elementText = await page.textContent(elementIdentifier);

      if (elementText != null) {
        globalVariables[variableKey] = elementText;
      }
    }

    return result;
  });
});