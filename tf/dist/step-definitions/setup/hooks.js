"use strict";

var _cucumber = require("@cucumber/cucumber");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(0, _cucumber.Before)( /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(scenario) {
    var contextOptions, ready;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("Running cucumber scenario ".concat(scenario.pickle.name));
            contextOptions = {
              recordVideo: {
                dir: './reports/videos/' + scenario.pickle.name
              }
            };
            _context.next = 4;
            return this.init(contextOptions);

          case 4:
            ready = _context.sent;
            return _context.abrupt("return", ready);

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
(0, _cucumber.After)( /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(scenario) {
    var _scenario$result;

    var _this$screen, page, browser, scenarioStatus;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _this$screen = this.screen, page = _this$screen.page, browser = _this$screen.browser;
            scenarioStatus = (_scenario$result = scenario.result) === null || _scenario$result === void 0 ? void 0 : _scenario$result.status;

            if (!(scenarioStatus === 'FAILED')) {
              _context2.next = 5;
              break;
            }

            _context2.next = 5;
            return page.screenshot({
              path: "./reports/screenshots/".concat(scenario.pickle.name, ".png")
            });

          case 5:
            _context2.next = 7;
            return browser.close();

          case 7:
            return _context2.abrupt("return", browser);

          case 8:
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