"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScenarioWorld = void 0;

var _playwright = _interopRequireDefault(require("playwright"));

var _parseEnvs = require("../../env/parseEnvs");

var _cucumber = require("@cucumber/cucumber");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ScenarioWorld extends _cucumber.World {
  constructor(options) {
    super(options);
    this.globalConfig = options.parameters;
    this.globalVariables = {};
  }

  async init(contextOptions) {
    await this.screen?.page?.close();
    await this.screen?.context?.close();
    await this.screen?.browser?.close();
    const browser = await this.newBrowser();
    const context = await browser.newContext(contextOptions);
    await context.tracing.start({
      snapshots: true,
      screenshots: true
    });
    const page = await context.newPage();
    this.screen = {
      browser,
      context,
      page
    };
    return this.screen;
  }

  newBrowser = async () => {
    const automationBrowsers = ['chromium', 'firefox', 'webkit'];
    const automationBrowser = (0, _parseEnvs.env)('UI_AUTOMATION_BROWSER');
    const browserType = _playwright.default[automationBrowser];
    const browser = await browserType.launch({
      devtools: process.env.DEVTOOLS !== 'false',
      headless: process.env.HEADLESS !== 'false',
      args: ['--disable-web-security', '--disable-features=IsolateOrigins, site-per-process']
    });
    return browser;
  };
}

exports.ScenarioWorld = ScenarioWorld;
(0, _cucumber.setWorldConstructor)(ScenarioWorld);