"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.smoke = exports.regression = exports.dev = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _parseEnvs = require("./env/parseEnvs");

var fs = _interopRequireWildcard(require("fs"));

var _tagHelper = require("./support/tag-helper");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const environment = (0, _parseEnvs.env)('NODE_ENV');

_dotenv.default.config({
  path: (0, _parseEnvs.env)('COMMON_CONFIG_FILE')
});

_dotenv.default.config({
  path: `${(0, _parseEnvs.env)('ENV_PATH')}${environment}.env`
});

const hostsConfig = (0, _parseEnvs.getJsonFromFile)((0, _parseEnvs.env)('HOSTS_URLS_PATH'));
const pagesConfig = (0, _parseEnvs.getJsonFromFile)((0, _parseEnvs.env)('PAGE_URLS_PATH'));
const usernamesConfig = (0, _parseEnvs.getJsonFromFile)((0, _parseEnvs.env)('USERNAMES_URL_PATH'));
const mappingFiles = fs.readdirSync(`${process.cwd()}${(0, _parseEnvs.env)('PAGE_ELEMENTS_PATH')}`);

const getEnvList = () => {
  const envList = Object.keys(hostsConfig);

  if (envList.length === 0) {
    throw Error(`🧨 No environments mapped in ${(0, _parseEnvs.env)('HOSTS_URLS_PATH')}`);
  }

  return envList;
};

const pageElementMappings = mappingFiles.reduce((pageElementConfigAcc, file) => {
  const key = file.replace('.json', '');
  const elementMappings = (0, _parseEnvs.getJsonFromFile)(`${(0, _parseEnvs.env)('PAGE_ELEMENTS_PATH')}${file}`);
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
                --world-parameters ${JSON.stringify(worldParameters)} \
                -f json:./reports/report.json \
                --format progress-bar \
                --parallel ${(0, _parseEnvs.env)('PARALLEL')} \
                --retry ${(0, _parseEnvs.env)('RETRY')}`;
const dev = (0, _tagHelper.generateCucumberRuntimeTag)(common, environment, getEnvList(), 'dev');
exports.dev = dev;
const smoke = (0, _tagHelper.generateCucumberRuntimeTag)(common, environment, getEnvList(), 'smoke');
exports.smoke = smoke;
const regression = (0, _tagHelper.generateCucumberRuntimeTag)(common, environment, getEnvList(), 'regression');
exports.regression = regression;