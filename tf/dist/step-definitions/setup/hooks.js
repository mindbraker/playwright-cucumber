"use strict";

var _cucumber = require("@cucumber/cucumber");

var _parseEnvs = require("../../env/parseEnvs");

(0, _cucumber.setDefaultTimeout)((0, _parseEnvs.envNumber)(`SCRIPT_TIMEOUT`));
(0, _cucumber.Before)(async function (scenario) {
  console.log(`Running cucumber scenario ${scenario.pickle.name}`);
  const contextOptions = {
    ignoreHTTPSErrors: true,
    recordVideo: {
      dir: `${(0, _parseEnvs.env)('VIDEO_PATH')}${scenario.pickle.name}`
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
      path: `${(0, _parseEnvs.env)('SCREENSHOT_PATH')}${scenario.pickle.name}.png`
    });
    await this.attach(screenshot, 'image/png');
  }

  await context.tracing.stop({
    path: 'trace.zip'
  });
  await browser.close();
  return browser;
});