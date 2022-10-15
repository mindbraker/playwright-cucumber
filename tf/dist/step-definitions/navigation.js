"use strict";

var _cucumber = require("@cucumber/cucumber");

var _navigationBehavior = require("../support/navigation-behavior");

var _waitForBehavior = require("../support/wait-for-behavior");

(0, _cucumber.Given)(/^I am on the "([^"]*)" page$/, async function (pageId) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  console.log(`📜 Current page should be: ${pageId}`);
  await (0, _navigationBehavior.navigateToPage)(page, pageId, globalConfig);
  await (0, _waitForBehavior.waitFor)(() => (0, _navigationBehavior.currentPathMatchesPageId)(page, pageId, globalConfig));
});
(0, _cucumber.Given)(/^I am directed to the "([^"]*)" page$/, async function (pageId) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  console.log(`🔨 Navigating to the ${pageId} page`);
  await (0, _waitForBehavior.waitFor)(() => (0, _navigationBehavior.currentPathMatchesPageId)(page, pageId, globalConfig));
});
(0, _cucumber.Given)(/^I refresh the "([^"]*)" page$/, async function (pageId) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  console.log(`🌐 I refresh the ${pageId}`);
  await (0, _navigationBehavior.reloadPage)(page);
  await (0, _waitForBehavior.waitFor)(() => (0, _navigationBehavior.currentPathMatchesPageId)(page, pageId, globalConfig), {
    timeout: 30_000
  });
});