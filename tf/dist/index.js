"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.smoke = exports.regression = exports.dev = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _parseEnv = require("./env/parseEnv");

var _fs = _interopRequireDefault(require("fs"));

var _tagHelper = require("./support/tag-helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const environment = (0, _parseEnv.env)('NODE_ENV');

_dotenv.default.config({
  path: (0, _parseEnv.env)('COMMON_CONFIG_FILE')
});

_dotenv.default.config({
  path: `${(0, _parseEnv.env)('ENV_PATH')}${environment}.env`
});

const hostsConfig = (0, _parseEnv.getJsonFromFile)((0, _parseEnv.env)('HOSTS_URLS_PATH'));
const pagesConfig = (0, _parseEnv.getJsonFromFile)((0, _parseEnv.env)('PAGE_URLS_PATH'));
const usernamesConfig = (0, _parseEnv.getJsonFromFile)((0, _parseEnv.env)('USERNAMES_URL_PATH'));

const mappingFiles = _fs.default.readdirSync(`${process.cwd()}${(0, _parseEnv.env)('PAGE_ELEMENTS_PATH')}`);

const getEnvList = () => {
  const envList = Object.keys(hostsConfig);

  if (envList.length === 0) {
    throw Error(`🧨 No environments mapped in ${(0, _parseEnv.env)('HOSTS_URLS_PATH')}`);
  }

  return envList;
};

const pageElementMappings = mappingFiles.reduce((pageElementConfigAcc, file) => {
  const key = file.replace('.json', '');
  const elementMappings = (0, _parseEnv.getJsonFromFile)(`${(0, _parseEnv.env)('PAGE_ELEMENTS_PATH')}${file}`);
  return { ...pageElementConfigAcc,
    [key]: elementMappings
  };
}, {});
const worldParameters = {
  hostsConfig,
  pagesConfig,
  pageElementMappings,
  usernamesConfig
};
const common = `./src/features/**/*.feature \
                --require-module ts-node/register \
                --require ./src/step-definitions/**/**/*.ts \
                -f json:./reports/report.json \
                --world-parameters ${JSON.stringify(worldParameters)} \
                --format progress-bar \
                --parallel ${(0, _parseEnv.env)('PARALLEL')} \
                --retry ${(0, _parseEnv.env)('RETRY')}`;
const dev = (0, _tagHelper.generateCucumberRuntimeTag)(common, environment, getEnvList(), 'dev');
exports.dev = dev;
const smoke = (0, _tagHelper.generateCucumberRuntimeTag)(common, environment, getEnvList(), 'smoke');
exports.smoke = smoke;
const regression = (0, _tagHelper.generateCucumberRuntimeTag)(common, environment, getEnvList(), 'regression');
exports.regression = regression;