"use strict";

var _cucumber = require("@cucumber/cucumber");

var _logger = require("../logger");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(0, _cucumber.When)(/^I click (accept)?(dismiss)? on the alert dialog$/, /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(acceptDialog, dismissDialog) {
    var page;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            page = this.screen.page;

            _logger.logger.log("\uD83D\uDDB1 Clicking ".concat(dismissDialog ? 'dismiss ' : 'accept ', "on the alert dialog"));

            if (!!dismissDialog) {
              page.on('dialog', function (dialog) {
                return dialog.dismiss();
              });
            } else {
              page.on('dialog', function (dialog) {
                return dialog.accept();
              });
            }

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());