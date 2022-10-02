"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uncheckElement = exports.selectValue = exports.inputValue = exports.getValue = exports.clickElement = exports.checkElement = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var clickElement = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(page, elementIdentifier) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return page.click(elementIdentifier);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function clickElement(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.clickElement = clickElement;

var inputValue = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(page, elementIdentifier, input) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return page.focus(elementIdentifier);

          case 2:
            _context2.next = 4;
            return page.fill(elementIdentifier, input);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function inputValue(_x3, _x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();

exports.inputValue = inputValue;

var selectValue = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(page, elementIdentifier, option) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return page.focus(elementIdentifier);

          case 2:
            _context3.next = 4;
            return page.selectOption(elementIdentifier, option);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function selectValue(_x6, _x7, _x8) {
    return _ref3.apply(this, arguments);
  };
}();

exports.selectValue = selectValue;

var checkElement = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(page, elementIdentifier) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return page.check(elementIdentifier);

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function checkElement(_x9, _x10) {
    return _ref4.apply(this, arguments);
  };
}();

exports.checkElement = checkElement;

var uncheckElement = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(page, elementIdentifier) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return page.uncheck(elementIdentifier);

          case 2:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function uncheckElement(_x11, _x12) {
    return _ref5.apply(this, arguments);
  };
}();

exports.uncheckElement = uncheckElement;

var getValue = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(page, elementIdentifier) {
    var value;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return page.$eval(elementIdentifier, function (el) {
              return el.value;
            });

          case 2:
            value = _context6.sent;
            return _context6.abrupt("return", value);

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function getValue(_x13, _x14) {
    return _ref6.apply(this, arguments);
  };
}();

exports.getValue = getValue;