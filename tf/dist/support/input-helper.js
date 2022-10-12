"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseInput = void 0;

var isLookupVariable = function isLookupVariable(input, lookupTrigger) {
  return !!(lookupTrigger && input.startsWith(lookupTrigger));
};

var getLookupVariable = function getLookupVariable(input, lookupTrigger, config) {
  var _config$emailsConfig$;

  var key = input.slice(lookupTrigger.length);
  var lookupValue = (_config$emailsConfig$ = config.emailsConfig[key]) !== null && _config$emailsConfig$ !== void 0 ? _config$emailsConfig$ : process.env[key];

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