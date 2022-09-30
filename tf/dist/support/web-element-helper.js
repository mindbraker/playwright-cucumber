"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getElementLocator = void 0;

var getElementLocator = function getElementLocator(page, elementKey, globalVariables, globalConfig) {
  var _pageElementMappings$, _pageElementMappings$2;

  var pageElementMappings = globalConfig.pageElementMappings;
  var currentPage = globalVariables.currentScreen;
  return ((_pageElementMappings$ = pageElementMappings[currentPage]) === null || _pageElementMappings$ === void 0 ? void 0 : _pageElementMappings$[elementKey]) || ((_pageElementMappings$2 = pageElementMappings.common) === null || _pageElementMappings$2 === void 0 ? void 0 : _pageElementMappings$2[elementKey]);
};

exports.getElementLocator = getElementLocator;