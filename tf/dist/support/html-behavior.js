"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uncheckElement = exports.selectValue = exports.inputValueOnPage = exports.inputValueOnIframe = exports.inputValue = exports.getValue = exports.getIframeElement = exports.clickElementAtIndex = exports.clickElement = exports.checkElement = void 0;

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

var clickElementAtIndex = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(page, elementIdentifier, elementPosition) {
    var element;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return page.$("".concat(elementIdentifier, ">>nth=").concat(elementPosition));

          case 2:
            element = _context2.sent;
            _context2.next = 5;
            return element === null || element === void 0 ? void 0 : element.click();

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function clickElementAtIndex(_x3, _x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();

exports.clickElementAtIndex = clickElementAtIndex;

var inputValue = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(page, elementIdentifier, input) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return page.focus(elementIdentifier);

          case 2:
            _context3.next = 4;
            return page.fill(elementIdentifier, input);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function inputValue(_x6, _x7, _x8) {
    return _ref3.apply(this, arguments);
  };
}();

exports.inputValue = inputValue;

var selectValue = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(page, elementIdentifier, option) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return page.focus(elementIdentifier);

          case 2:
            _context4.next = 4;
            return page.selectOption(elementIdentifier, option);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function selectValue(_x9, _x10, _x11) {
    return _ref4.apply(this, arguments);
  };
}();

exports.selectValue = selectValue;

var checkElement = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(page, elementIdentifier) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return page.check(elementIdentifier);

          case 2:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function checkElement(_x12, _x13) {
    return _ref5.apply(this, arguments);
  };
}();

exports.checkElement = checkElement;

var uncheckElement = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(page, elementIdentifier) {
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return page.uncheck(elementIdentifier);

          case 2:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function uncheckElement(_x14, _x15) {
    return _ref6.apply(this, arguments);
  };
}();

exports.uncheckElement = uncheckElement;

var getValue = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(page, elementIdentifier) {
    var value;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return page.$eval(elementIdentifier, function (el) {
              return el.value;
            });

          case 2:
            value = _context7.sent;
            return _context7.abrupt("return", value);

          case 4:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function getValue(_x16, _x17) {
    return _ref7.apply(this, arguments);
  };
}();

exports.getValue = getValue;

var getIframeElement = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(page, iframeIdentifier) {
    var elementHandle, elementIframe;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return page.waitForSelector(iframeIdentifier);

          case 2:
            _context8.next = 4;
            return page.$(iframeIdentifier);

          case 4:
            elementHandle = _context8.sent;
            _context8.next = 7;
            return elementHandle === null || elementHandle === void 0 ? void 0 : elementHandle.contentFrame();

          case 7:
            elementIframe = _context8.sent;
            return _context8.abrupt("return", elementIframe);

          case 9:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function getIframeElement(_x18, _x19) {
    return _ref8.apply(this, arguments);
  };
}();

exports.getIframeElement = getIframeElement;

var inputValueOnIframe = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(elementIframe, elementIdentifier, inputValue) {
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return elementIframe.fill(elementIdentifier, inputValue);

          case 2:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function inputValueOnIframe(_x20, _x21, _x22) {
    return _ref9.apply(this, arguments);
  };
}();

exports.inputValueOnIframe = inputValueOnIframe;

var inputValueOnPage = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(pages, pageIndex, elementIdentifier, inputValue) {
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return pages[pageIndex].focus(elementIdentifier);

          case 2:
            _context10.next = 4;
            return pages[pageIndex].fill(elementIdentifier, inputValue);

          case 4:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));

  return function inputValueOnPage(_x23, _x24, _x25, _x26) {
    return _ref10.apply(this, arguments);
  };
}();

exports.inputValueOnPage = inputValueOnPage;