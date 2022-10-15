"use strict";

var _cucumber = require("@cucumber/cucumber");

var _waitForBehavior = require("../../support/wait-for-behavior");

var _webElementHelper = require("../../support/web-element-helper");

var _htmlBehavior = require("../../support/html-behavior");

(0, _cucumber.Then)(/^the "([^"]*)" on the "([^"]*)" iframe should( not)? be displayed$/, async function (elementKey, iframeName, negate) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  console.log(`🔎 ${elementKey} on the ${iframeName} iframe should${negate ? ' not' : ''} be displayed`);
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  const iframeIdentifier = (0, _webElementHelper.getElementLocator)(page, iframeName, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    const elementIframe = await (0, _htmlBehavior.getIframeElement)(page, iframeIdentifier);
    const isElementVisible = (await elementIframe?.$(elementIdentifier)) != null;
    return isElementVisible === !negate;
  });
});
(0, _cucumber.Then)(/^the "([^"]*)" on the "([^"]*)" iframe should( not)? contain the text "(.*)"$/, async function (elementKey, iframeName, negate, expectedElementText) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  console.log(`🔎 ${elementKey} should${negate ? ' not' : ''} contain the text ${expectedElementText}`);
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  const iframeIdentifier = (0, _webElementHelper.getElementLocator)(page, iframeName, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    const elementIframe = await (0, _htmlBehavior.getIframeElement)(page, iframeIdentifier);
    const elementText = await elementIframe?.textContent(elementIdentifier);
    return elementText?.includes(expectedElementText) === !negate;
  });
});
(0, _cucumber.Then)(/^the "([^"]*)" on the "([^"]*)" iframe should( not)? equal the text "(.*)"$/, async function (elementKey, iframeName, negate, expectedElementText) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  console.log(`🔎 ${elementKey} should${negate ? ' not' : ''} equal the text ${expectedElementText}`);
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  const iframeIdentifier = (0, _webElementHelper.getElementLocator)(page, iframeName, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    const elementIframe = await (0, _htmlBehavior.getIframeElement)(page, iframeIdentifier);
    const elementText = await elementIframe?.textContent(elementIdentifier);
    return elementText === expectedElementText === !negate;
  });
});