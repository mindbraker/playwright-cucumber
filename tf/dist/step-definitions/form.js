"use strict";

var _cucumber = require("@cucumber/cucumber");

var _waitForBehavior = require("../support/wait-for-behavior");

var _webElementHelper = require("../support/web-element-helper");

var _htmlBehavior = require("../support/html-behavior");

var _inputHelper = require("../support/input-helper");

var _logger = require("../logger");

(0, _cucumber.Then)(/^I fill in the "([^"]*)" input with "([^"]*)"$/, async function (elementKey, input) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;

  _logger.logger.log(`📝 Filling ${elementKey} input with ${input}`);

  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    const elementStable = await (0, _waitForBehavior.waitForSelector)(page, elementIdentifier);

    if (elementStable) {
      const parsedInput = (0, _inputHelper.parseInput)(input, globalConfig);
      await (0, _htmlBehavior.inputValue)(page, elementIdentifier, parsedInput);
    }

    return elementStable;
  });
});
(0, _cucumber.Then)(/^I select the "([^"]*)" option from "([^"]*)"$/, async function (option, elementKey) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;

  _logger.logger.log(`🖱 Selecting ${option} option from ${elementKey}`);

  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    const elementStable = await (0, _waitForBehavior.waitForSelector)(page, elementIdentifier);

    if (elementStable) {
      await (0, _htmlBehavior.selectValue)(page, elementIdentifier, option);
    }

    return elementStable;
  });
});