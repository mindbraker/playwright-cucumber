"use strict";

var _cucumber = require("@cucumber/cucumber");

var _waitForBehavior = require("../support/wait-for-behavior");

var _webElementHelper = require("../support/web-element-helper");

var _htmlBehavior = require("../support/html-behavior");

var _logger = require("../logger");

(0, _cucumber.Then)(/^I scroll to the "([^"]*)"$/, async function (elementKey) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;

  _logger.logger.log(`🔎 Scrolling to the ${elementKey} ✨`);

  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    const elementStable = await (0, _waitForBehavior.waitForSelector)(page, elementIdentifier);

    if (elementStable) {
      await (0, _htmlBehavior.scrollIntoView)(page, elementIdentifier);
    }

    return elementStable;
  });
});