"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.smoke = exports.regression = exports.dev = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _parseEnvs = require("./env/parseEnvs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config({
  path: (0, _parseEnvs.env)('COMMON_CONFIG_FILE')
});

var hostsConfig = (0, _parseEnvs.getJsonFromFile)((0, _parseEnvs.env)('HOSTS_URLS_PATH'));
console.log('hostsConfig ', hostsConfig);
var pagesConfig = (0, _parseEnvs.getJsonFromFile)((0, _parseEnvs.env)('PAGE_URLS_PATH'));
console.log('pagesConfig ', pagesConfig);
var worldParameters = {
  hostsConfig: hostsConfig,
  pagesConfig: pagesConfig
};
var common = "./src/features/**/*.feature                 --require-module ts-node/register                 --require ./src/step-definitions/**/**/*.ts                 --world-parameters ".concat(JSON.stringify(worldParameters), "                 -f json:./reports/report.json                 --format progress-bar");
var dev = "".concat(common, " --tags '@dev'");
exports.dev = dev;
var smoke = "".concat(common, " --tags '@smoke'");
exports.smoke = smoke;
var regression = "".concat(common, " --tags '@regression'");
exports.regression = regression;