"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getElementLocator = void 0;

var _navigationBehavior = require("./navigation-behavior");

const getElementLocator = (page, elementKey, globalConfig) => {
  const currentPage = (0, _navigationBehavior.getCurrentPageId)(page, globalConfig);
  const {
    pageElementMappings
  } = globalConfig;
  return pageElementMappings[currentPage]?.[elementKey] || pageElementMappings.common?.[elementKey];
};

exports.getElementLocator = getElementLocator;