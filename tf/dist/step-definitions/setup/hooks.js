"use strict";

var _cucumber = require("@cucumber/cucumber");

var _parseEnv = require("../../env/parseEnv");

var _logger = require("../../logger");

(0, _cucumber.setDefaultTimeout)((0, _parseEnv.envNumber)(`SCRIPT_TIMEOUT`));
(0, _cucumber.Before)(async function (scenario) {
  _logger.logger.log(`🤖 Running cucumber scenario: ${scenario.pickle.name} ⚔️`);

  const contextOptions = {
    ignoreHTTPSErrors: true,
    recordVideo: {
      dir: `${(0, _parseEnv.env)('VIDEO_PATH')}${scenario.pickle.name}`
    }
  };
  const ready = await this.init(contextOptions);
  return ready;
});
(0, _cucumber.After)(async function (scenario) {
  const {
    screen: {
      page,
      browser,
      context
    }
  } = this;
  const scenarioStatus = scenario.result?.status;

  if (scenarioStatus === 'FAILED') {
    const screenshot = await page.screenshot({
      path: `${(0, _parseEnv.env)('SCREENSHOT_PATH')}${scenario.pickle.name}.png`
    });
    await this.attach(screenshot, 'image/png');
  }

  await context.tracing.stop({
    path: 'trace.zip'
  });
  await browser.close();
  return browser;
});