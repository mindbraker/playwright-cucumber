"use strict";

var _cucumber = require("@cucumber/cucumber");

var _htmlBehavior = require("../support/html-behavior");

var _waitForBehavior = require("../support/wait-for-behavior");

var _webElementHelper = require("../support/web-element-helper");

var _logger = require("../logger");

(0, _cucumber.Then)(/^I (check)?(uncheck)? the "([^"]*)" (?:check box|radio button|switch)$/, async function (checked, unchecked, elementKey) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;

  _logger.logger.log(`📻 ${elementKey} check box | radio | switch button will be ${unchecked ? 'unchecked' : 'checked'} 👌`);

  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    const elementStable = await (0, _waitForBehavior.waitForSelector)(page, elementIdentifier);

    if (elementStable) {
      if (!!unchecked) {
        await (0, _htmlBehavior.uncheckElement)(page, elementIdentifier);
      } else {
        await (0, _htmlBehavior.checkElement)(page, elementIdentifier);
      }
    }

    return elementStable;
  });
});