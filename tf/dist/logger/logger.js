"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringIsOfOptions = exports.getLogger = void 0;

var _parseEnvs = require("../env/parseEnvs");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DEBUG = 'debug';
var LOG = 'log';
var OFF = 'off';
var LOG_LEVELS = [DEBUG, LOG, OFF];

var logFuncAtLevels = function logFuncAtLevels(logLevels) {
  var logFunction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : console;
  return function (logLevel) {
    for (var _len = arguments.length, msg = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      msg[_key - 1] = arguments[_key];
    }

    if (logLevel !== OFF && logLevels.indexOf(logLevel) !== -1 && msg.length > 0) {
      logFunction[logLevel].apply(logFunction, msg);
    }
  };
};

var getLogLevel = function getLogLevel(logLevel) {
  var dynamicLogLevelIndex = LOG_LEVELS.indexOf(logLevel);
  return LOG_LEVELS.slice(dynamicLogLevelIndex);
};

var createLogger = function createLogger(logLevel) {
  var activeLogLevels = getLogLevel(logLevel);
  var logger = logFuncAtLevels(activeLogLevels);
  return LOG_LEVELS.reduce(function (accumulator, level) {
    return _objectSpread(_objectSpread({}, accumulator), {}, _defineProperty({}, level, function () {
      for (var _len2 = arguments.length, msg = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        msg[_key2] = arguments[_key2];
      }

      return logger.apply(void 0, [level].concat(msg));
    }));
  }, {});
};

var loglLevelIsT = function loglLevelIsT(logLevel, options) {
  return options.includes(logLevel);
};

var stringIsOfOptions = function stringIsOfOptions(loglLevel, options) {
  if (loglLevelIsT(loglLevel, options)) {
    return loglLevel;
  }

  throw Error("\uD83E\uDDE8 Logger '".concat(loglLevel, " needs to be one of: ").concat(options, " \uD83D\uDCA5"));
};

exports.stringIsOfOptions = stringIsOfOptions;
var loggerSingleton = null;

var getLogger = function getLogger() {
  if (!loggerSingleton) {
    var logLevel = (0, _parseEnvs.env)('LOG_LEVEL');
    var validLogLevel = stringIsOfOptions(logLevel, LOG_LEVELS);
    loggerSingleton = createLogger(validLogLevel);
  }

  return loggerSingleton;
};

exports.getLogger = getLogger;