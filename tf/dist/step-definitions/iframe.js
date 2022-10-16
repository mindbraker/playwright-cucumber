"use strict";

var _cucumber = require("@cucumber/cucumber");

var _waitForBehavior = require("../support/wait-for-behavior");

var _webElementHelper = require("../support/web-element-helper");

var _htmlBehavior = require("../support/html-behavior");

var _logger = require("../logger");

(0, _cucumber.Then)(/^I fill in the "([^"]*)" input on the "([^"]*)" iframe with "([^"]*)"$/, async function (elementKey, iframeName, inputValue) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;

  _logger.logger.log(`📝 Filling ${elementKey} input on the ${iframeName} iframe with ${inputValue}`);

  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  const iframeIdentifier = (0, _webElementHelper.getElementLocator)(page, iframeName, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    const elementIframe = await (0, _htmlBehavior.getIframeElement)(page, iframeIdentifier);
    const result = await page.waitForSelector(iframeIdentifier, {
      state: 'visible'
    });

    if (result) {
      if (elementIframe) {
        await (0, _htmlBehavior.inputValueOnIframe)(elementIframe, elementIdentifier, inputValue);
      }
    }

    return result;
  });
});