"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseInput = void 0;

var isLookupVariable = function isLookupVariable(input, lookupTrigger) {
  return !!(lookupTrigger && input.startsWith(lookupTrigger));
};

var getLookupVariable = function getLookupVariable(input, lookupTrigger, config) {
  var _config$usernamesConf;

  var key = input.slice(lookupTrigger.length); // const lookupValue = config.emailsConfig[key] ?? process.env[key];

  var lookupValue = (_config$usernamesConf = config.usernamesConfig[key]) !== null && _config$usernamesConf !== void 0 ? _config$usernamesConf : process.env[key];

  if (!lookupValue) {
    throw Error("\uD83D\uDED1 Could not get ".concat(input, " lookup trigger \uD83D\uDE25"));
  }

  return lookupValue;
};

var parseInput = function parseInput(input, config) {
  var _process$env$VAR_LOOK;

  var lookupTrigger = (_process$env$VAR_LOOK = process.env.VAR_LOOKUP_TRIGGER) !== null && _process$env$VAR_LOOK !== void 0 ? _process$env$VAR_LOOK : '$.';
  return isLookupVariable(input, lookupTrigger) ? getLookupVariable(input, lookupTrigger, config) : input;
};

exports.parseInput = parseInput;