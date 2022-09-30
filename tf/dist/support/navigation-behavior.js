"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.navigateToPage = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var navigateToPage = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(page, pageId, _ref) {
    var pagesConfig, hostsConfig, _process$env$UI_AUTOM, hostName, hostPath, url, pagesConfigItem;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            pagesConfig = _ref.pagesConfig, hostsConfig = _ref.hostsConfig;
            _process$env$UI_AUTOM = process.env.UI_AUTOMATION_HOST, hostName = _process$env$UI_AUTOM === void 0 ? 'localhost' : _process$env$UI_AUTOM;
            hostPath = hostsConfig["".concat(hostName)];
            console.log('Hostpath ', hostPath);
            url = new URL(hostPath);
            console.log('URL ', url);
            pagesConfigItem = pagesConfig[pageId];
            url.pathname = pagesConfigItem.route;
            console.log('Pages route ', url.pathname);
            _context.next = 11;
            return page.goto(url.href);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function navigateToPage(_x, _x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

exports.navigateToPage = navigateToPage;