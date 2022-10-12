"use strict";

var _cucumber = require("@cucumber/cucumber");

var _waitForBehavior = require("../../support/wait-for-behavior");

var _webElementHelper = require("../../support/web-element-helper");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(0, _cucumber.Then)(/^the "([0-9]+th|[0-9]+st|[0-9]+nd|[0-9]+rd)" (?:tab|window) should( not)? contain the title "(.*)"$/, /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(elementPosition, negate, expectedTitle) {
    var _elementPosition$matc;

    var _this$screen, page, context, pageIndex;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _this$screen = this.screen, page = _this$screen.page, context = _this$screen.context;
            console.log("".concat(elementPosition, " (?:tab|window) should").concat(negate ? ' not' : '', " contain the title ").concat(expectedTitle));
            pageIndex = Number((_elementPosition$matc = elementPosition.match(/\d/g)) === null || _elementPosition$matc === void 0 ? void 0 : _elementPosition$matc.join('')) - 1;
            _context2.next = 5;
            return page.waitForTimeout(2000);

          case 5:
            _context2.next = 7;
            return (0, _waitForBehavior.waitFor)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var pages, pageTitle;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      pages = context.pages();
                      _context.next = 3;
                      return pages[pageIndex].title();

                    case 3:
                      pageTitle = _context.sent;
                      return _context.abrupt("return", (pageTitle === null || pageTitle === void 0 ? void 0 : pageTitle.includes(expectedTitle)) === !negate);

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })));

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}());
(0, _cucumber.Then)(/^the "([^"]*)" on the "([0-9]+th|[0-9]+st|[0-9]+nd|[0-9]+rd)" (?:tab|window) should( not)? be displayed$/, /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(elementKey, elementPosition, negate) {
    var _elementPosition$matc2;

    var _this$screen2, page, context, globalConfig, pageIndex, elementIdentifier;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _this$screen2 = this.screen, page = _this$screen2.page, context = _this$screen2.context, globalConfig = this.globalConfig;
            console.log("\uD83D\uDD0E ".concat(elementKey, " on the ").concat(elementPosition, " (?:tab|window) should").concat(negate ? ' not' : '', " be displayed"));
            pageIndex = Number((_elementPosition$matc2 = elementPosition.match(/\d/g)) === null || _elementPosition$matc2 === void 0 ? void 0 : _elementPosition$matc2.join('')) - 1;
            elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
            _context4.next = 6;
            return (0, _waitForBehavior.waitFor)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var pages, isElementVisible;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      pages = context.pages();
                      _context3.next = 3;
                      return pages[pageIndex].$(elementIdentifier);

                    case 3:
                      _context3.t0 = _context3.sent;
                      isElementVisible = _context3.t0 != null;
                      return _context3.abrupt("return", isElementVisible === !negate);

                    case 6:
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

  return function (_x5, _x6, _x7, _x8) {
    return _ref3.apply(this, arguments);
  };
}());
(0, _cucumber.Then)(/^the "([^"]*)" on the "([0-9]+th|[0-9]+st|[0-9]+nd|[0-9]+rd)" (?:tab|window) should( not)? contain the text "(.*)"$/, /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(elementKey, elementPosition, negate, expectedElementText) {
    var _elementPosition$matc3;

    var _this$screen3, page, context, globalConfig, pageIndex, elementIdentifier;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _this$screen3 = this.screen, page = _this$screen3.page, context = _this$screen3.context, globalConfig = this.globalConfig;
            console.log("\uD83D\uDD0E ".concat(elementKey, " on the ").concat(elementPosition, " (?:tab|window) should").concat(negate ? ' not' : '', " contain the text ").concat(expectedElementText));
            pageIndex = Number((_elementPosition$matc3 = elementPosition.match(/\d/g)) === null || _elementPosition$matc3 === void 0 ? void 0 : _elementPosition$matc3.join('')) - 1;
            elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
            _context6.next = 6;
            return (0, _waitForBehavior.waitFor)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var pages, elementText;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      pages = context.pages();
                      _context5.next = 3;
                      return pages[pageIndex].textContent(elementIdentifier);

                    case 3:
                      elementText = _context5.sent;
                      return _context5.abrupt("return", (elementText === null || elementText === void 0 ? void 0 : elementText.includes(expectedElementText)) === !negate);

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5);
            })));

          case 6:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, this);
  }));

  return function (_x9, _x10, _x11, _x12, _x13) {
    return _ref5.apply(this, arguments);
  };
}());
(0, _cucumber.Then)(/^the "([^"]*)" on the "([0-9]+th|[0-9]+st|[0-9]+nd|[0-9]+rd)" (?:tab|window) should( not)? equal the text "(.*)"$/, /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(elementKey, elementPosition, negate, expectedElementText) {
    var _elementPosition$matc4;

    var _this$screen4, page, context, globalConfig, pageIndex, elementIdentifier;

    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _this$screen4 = this.screen, page = _this$screen4.page, context = _this$screen4.context, globalConfig = this.globalConfig;
            console.log("\uD83D\uDD0E ".concat(elementKey, " on the ").concat(elementPosition, " (?:tab|window) should").concat(negate ? ' not' : '', " equal the text ").concat(expectedElementText));
            pageIndex = Number((_elementPosition$matc4 = elementPosition.match(/\d/g)) === null || _elementPosition$matc4 === void 0 ? void 0 : _elementPosition$matc4.join('')) - 1;
            elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
            _context8.next = 6;
            return (0, _waitForBehavior.waitFor)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var pages, elementText;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      pages = context.pages();
                      _context7.next = 3;
                      return pages[pageIndex].textContent(elementIdentifier);

                    case 3:
                      elementText = _context7.sent;
                      return _context7.abrupt("return", elementText === expectedElementText === !negate);

                    case 5:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7);
            })));

          case 6:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, this);
  }));

  return function (_x14, _x15, _x16, _x17, _x18) {
    return _ref7.apply(this, arguments);
  };
}());