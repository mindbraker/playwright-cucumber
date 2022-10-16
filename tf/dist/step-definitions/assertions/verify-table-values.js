"use strict";

var _cucumber = require("@cucumber/cucumber");

var _webElementHelper = require("../../support/web-element-helper");

var _waitForBehavior = require("../../support/wait-for-behavior");

var _logger = require("../../logger");

(0, _cucumber.Then)(/^the "([^"]*)" table should( not)? equal the following:$/, async function (elementKey, negate, dataTable) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;

  _logger.logger.log(`🔎 ${elementKey} table should${negate ? ' not' : ''} equal the following:`);

  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    const dataBefore = await page.$$eval(elementIdentifier + ' ' + 'tbody tr', rows => {
      return rows.map(row => {
        const cells = row.querySelectorAll('td');
        return Array.from(cells).map(cell => cell.textContent);
      });
    });
    return JSON.stringify(dataBefore) === JSON.stringify(dataTable.raw()) === !negate;
  });
});