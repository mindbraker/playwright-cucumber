"use strict";

var _cucumber = require("@cucumber/cucumber");

var _webElementHelper = require("../support/web-element-helper");

var _waitForBehavior = require("../support/wait-for-behavior");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(0, _cucumber.Then)(/^I retrieve the "([^"]*)" text and store it as "([^"]*)" in global variables$/, /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(elementKey, variableKey) {
    var page, globalConfig, globalVariables, elementIdentifier;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            page = this.screen.page, globalConfig = this.globalConfig, globalVariables = this.globalVariables;
            console.log("I retrieve the ".concat(elementKey, " text and store it as ").concat(variableKey, " in global variables"));
            elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
            _context2.next = 5;
            return (0, _waitForBehavior.waitFor)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var result, elementText;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return page.waitForSelector(elementIdentifier, {
                        state: 'visible'
                      });

                    case 2:
                      result = _context.sent;

                      if (!result) {
                        _context.next = 8;
                        break;
                      }

                      _context.next = 6;
                      return page.textContent(elementIdentifier);

                    case 6:
                      elementText = _context.sent;

                      if (elementText != null) {
                        globalVariables[variableKey] = elementText;
                      }

                    case 8:
                      return _context.abrupt("return", result);

                    case 9:
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