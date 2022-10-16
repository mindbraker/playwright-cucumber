"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.waitFor = void 0;

var _logger = require("../logger");

const waitFor = async (predicate, options) => {
  const {
    timeout = 20_000,
    wait = 2_000
  } = options || {};

  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  const startDate = new Date();

  while (new Date().getTime() - startDate.getTime() < timeout) {
    const result = await predicate();
    if (result) return result;
    await sleep(wait);

    _logger.logger.log(`🕐🕑🕒 Waiting ${wait}ms`);
  }

  throw new Error(`🔔 Wait time of ${timeout}ms exceeded 🙁`);
};

exports.waitFor = waitFor;