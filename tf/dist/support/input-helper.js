"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseInput = void 0;

const isLookupVariable = (input, lookupTrigger) => {
  return !!(lookupTrigger && input.startsWith(lookupTrigger));
};

const getLookupVariable = (input, lookupTrigger, config) => {
  const key = input.slice(lookupTrigger.length);
  const lookupValue = config.usernamesConfig[key] ?? process.env[key];

  if (!lookupValue) {
    throw Error(`🛑 Could not get ${input} lookup trigger 😥`);
  }

  return lookupValue;
};

const parseInput = (input, config) => {
  const lookupTrigger = process.env.VAR_LOOKUP_TRIGGER ?? '$.';
  return isLookupVariable(input, lookupTrigger) ? getLookupVariable(input, lookupTrigger, config) : input;
};

exports.parseInput = parseInput;