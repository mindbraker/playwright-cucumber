"use strict";

var _cucumber = require("@cucumber/cucumber");

var _parseEnvs = require("../../env/parseEnvs");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(0, _cucumber.setDefaultTimeout)((0, _parseEnvs.envNumber)("SCRIPT_TIMEOUT"));
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
                dir: "".concat((0, _parseEnvs.env)('VIDEO_PATH')).concat(scenario.pickle.name)
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
}()); // After(async function (this: ScenarioWorld, scenario) {
//     const {
//       screen: { page, browser, context },
//     } = this;
//   ...
//     await context.tracing.stop({ path: 'trace.zip' });
//     await browser.close();
//     return browser;
//   });

(0, _cucumber.After)( /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(scenario) {
    var _scenario$result;

    var _this$screen, page, browser, context, scenarioStatus, screenshot;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _this$screen = this.screen, page = _this$screen.page, browser = _this$screen.browser, context = _this$screen.context;
            scenarioStatus = (_scenario$result = scenario.result) === null || _scenario$result === void 0 ? void 0 : _scenario$result.status;

            if (!(scenarioStatus === 'FAILED')) {
              _context2.next = 8;
              break;
            }

            _context2.next = 5;
            return page.screenshot({
              path: "".concat((0, _parseEnvs.env)('SCREENSHOT_PATH')).concat(scenario.pickle.name, ".png")
            });

          case 5:
            screenshot = _context2.sent;
            _context2.next = 8;
            return this.attach(screenshot, 'image/png');

          case 8:
            _context2.next = 10;
            return context.tracing.stop({
              path: 'trace.zip'
            });

          case 10:
            _context2.next = 12;
            return browser.close();

          case 12:
            return _context2.abrupt("return", browser);

          case 13:
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