"use strict";

var _cucumber = require("@cucumber/cucumber");

var _webElementHelper = require("../../support/web-element-helper");

var _waitForBehavior = require("../../support/wait-for-behavior");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(0, _cucumber.Then)(/^the "([^"]*)" should( not)? be displayed$/, /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(elementKey, negate) {
    var page, globalConfig, elementIdentifier;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            page = this.screen.page, globalConfig = this.globalConfig;
            console.log("\uD83D\uDD0E ".concat(elementKey, " should").concat(negate ? ' not' : '', " be displayed \u2728"));
            elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
            _context2.next = 5;
            return (0, _waitForBehavior.waitFor)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var isElementVisible;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return page.$(elementIdentifier);

                    case 2:
                      _context.t0 = _context.sent;
                      isElementVisible = _context.t0 != null;
                      return _context.abrupt("return", isElementVisible === !negate);

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })));

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());
(0, _cucumber.Then)(/^the "([0-9]+th|[0-9]+st|[0-9]+nd|[0-9]+rd)" "([^"]*)" should( not)? be displayed$/, /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(elementPosition, elementKey, negate) {
    var _elementPosition$matc;

    var page, globalConfig, elementIdentifier, index;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            page = this.screen.page, globalConfig = this.globalConfig;
            console.log("\uD83D\uDD0E ".concat(elementPosition, " ").concat(elementKey, " should").concat(negate ? ' not' : '', " be displayed \u2728"));
            elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
            index = Number((_elementPosition$matc = elementPosition.match(/\d/g)) === null || _elementPosition$matc === void 0 ? void 0 : _elementPosition$matc.join('')) - 1;
            _context4.next = 6;
            return (0, _waitForBehavior.waitFor)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var isElementVisible;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return page.$("".concat(elementIdentifier, ">>nth=").concat(index));

                    case 2:
                      _context3.t0 = _context3.sent;
                      isElementVisible = _context3.t0 != null;
                      return _context3.abrupt("return", isElementVisible === !negate);

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            })));

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function (_x4, _x5, _x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}());
(0, _cucumber.Then)(/^I should( not)? see "(\d*)" "([^"]*)" displayed$/, /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(negate, count, elementKey) {
    var page, globalConfig, elementIdentifier;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            page = this.screen.page, globalConfig = this.globalConfig;
            console.log("I should".concat(negate ? ' not' : '', " see ").concat(count, " ").concat(elementKey, " displayed"));
            elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
            _context6.next = 5;
            return (0, _waitForBehavior.waitFor)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var element;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return page.$$(elementIdentifier);

                    case 2:
                      element = _context5.sent;
                      return _context5.abrupt("return", Number(count) === element.length === !negate);

                    case 4:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5);
            })));

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function (_x8, _x9, _x10, _x11) {
    return _ref5.apply(this, arguments);
  };
}());