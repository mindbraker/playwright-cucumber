"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.smoke = exports.regression = exports.dev = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _parseEnvs = require("./env/parseEnvs");

var fs = _interopRequireWildcard(require("fs"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_dotenv.default.config({
  path: (0, _parseEnvs.env)('COMMON_CONFIG_FILE')
});

var hostsConfig = (0, _parseEnvs.getJsonFromFile)((0, _parseEnvs.env)('HOSTS_URLS_PATH'));
var pagesConfig = (0, _parseEnvs.getJsonFromFile)((0, _parseEnvs.env)('PAGE_URLS_PATH'));
var mappingFiles = fs.readdirSync("".concat(process.cwd()).concat((0, _parseEnvs.env)('PAGE_ELEMENTS_PATH')));
var pageElementMappings = mappingFiles.reduce(function (pageElementConfigAcc, file) {
  var key = file.replace('.json', '');
  var elementMappings = (0, _parseEnvs.getJsonFromFile)("".concat((0, _parseEnvs.env)('PAGE_ELEMENTS_PATH')).concat(file));
  return _objectSpread(_objectSpread({}, pageElementConfigAcc), {}, _defineProperty({}, key, elementMappings));
}, {});
var worldParameters = {
  hostsConfig: hostsConfig,
  pagesConfig: pagesConfig,
  pageElementMappings: pageElementMappings
};
var common = "./src/features/**/*.feature                 --require-module ts-node/register                 --require ./src/step-definitions/**/**/*.ts                 --world-parameters ".concat(JSON.stringify(worldParameters), "                 -f json:./reports/report.json                 --format progress-bar");
var dev = "".concat(common, " --tags '@dev'");
exports.dev = dev;
var smoke = "".concat(common, " --tags '@smoke'");
exports.smoke = smoke;
var regression = "".concat(common, " --tags '@regression'");
exports.regression = regression;