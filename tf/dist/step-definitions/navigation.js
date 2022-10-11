"use strict";

var _cucumber = require("@cucumber/cucumber");

var _navigationBehavior = require("../support/navigation-behavior");

var _waitForBehavior = require("../support/wait-for-behavior");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(0, _cucumber.Given)(/^I am on the "([^"]*)" page$/, /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(pageId) {
    var page, globalConfig;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            page = this.screen.page, globalConfig = this.globalConfig;
            console.log("\uD83D\uDCDC Current page should be: ".concat(pageId));
            _context.next = 4;
            return (0, _navigationBehavior.navigateToPage)(page, pageId, globalConfig);

          case 4:
            _context.next = 6;
            return (0, _waitForBehavior.waitFor)(function () {
              return (0, _navigationBehavior.currentPathMatchesPageId)(page, pageId, globalConfig);
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
(0, _cucumber.Given)(/^I am directed to the "([^"]*)" page$/, /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(pageId) {
    var page, globalConfig;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            page = this.screen.page, globalConfig = this.globalConfig;
            console.log("\uD83D\uDD28 Navigating to the ".concat(pageId, " page"));
            _context2.next = 4;
            return (0, _waitForBehavior.waitFor)(function () {
              return (0, _navigationBehavior.currentPathMatchesPageId)(page, pageId, globalConfig);
            });

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
(0, _cucumber.Given)(/^I refresh the "([^"]*)" page$/, /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(pageId) {
    var page, globalConfig;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            page = this.screen.page, globalConfig = this.globalConfig;
            console.log("\uD83C\uDF10 I refresh the ".concat(pageId));
            _context3.next = 4;
            return (0, _navigationBehavior.reloadPage)(page);

          case 4:
            _context3.next = 6;
            return (0, _waitForBehavior.waitFor)(function () {
              return (0, _navigationBehavior.currentPathMatchesPageId)(page, pageId, globalConfig);
            }, {
              timeout: 30000
            });

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());