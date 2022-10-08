"use strict";

var _cucumber = require("@cucumber/cucumber");

var _webElementHelper = require("../../support/web-element-helper");

var _waitForBehavior = require("../../support/wait-for-behavior");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(0, _cucumber.Then)(/^the "([^"]*)" table should( not)? equal the following:$/, /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(elementKey, negate, dataTable) {
    var page, globalConfig, elementIdentifier, dataBefore;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            page = this.screen.page, globalConfig = this.globalConfig;
            console.log("".concat(elementKey, " table should").concat(negate ? ' not' : '', " equal the following:"));
            elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
            _context2.next = 5;
            return page.$$eval(elementIdentifier + " " + "tbody tr", function (rows) {
              return rows.map(function (row) {
                var cells = row.querySelectorAll('td');
                return Array.from(cells).map(function (cell) {
                  return cell.textContent;
                });
              });
            });

          case 5:
            dataBefore = _context2.sent;
            console.log("HTML table: ", JSON.stringify(dataBefore));
            console.log("Cucumber table: ", JSON.stringify(dataTable.raw()));
            _context2.next = 10;
            return (0, _waitForBehavior.waitFor)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      return _context.abrupt("return", JSON.stringify(dataBefore) === JSON.stringify(dataTable.raw()) === !negate);

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            })));

          case 10:
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