"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScenarioWorld = void 0;

var _playwright = _interopRequireDefault(require("playwright"));

var _parseEnvs = require("../../env/parseEnvs");

var _cucumber = require("@cucumber/cucumber");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ScenarioWorld = /*#__PURE__*/function (_World) {
  _inherits(ScenarioWorld, _World);

  var _super = _createSuper(ScenarioWorld);

  function ScenarioWorld(options) {
    var _this;

    _classCallCheck(this, ScenarioWorld);

    _this = _super.call(this, options);

    _defineProperty(_assertThisInitialized(_this), "globalConfig", void 0);

    _defineProperty(_assertThisInitialized(_this), "globalVariables", void 0);

    _defineProperty(_assertThisInitialized(_this), "screen", void 0);

    _defineProperty(_assertThisInitialized(_this), "newBrowser", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var automationBrowsers, automationBrowser, browserType, browser;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              automationBrowsers = ['chromium', 'firefox', 'webkit'];
              automationBrowser = (0, _parseEnvs.env)('UI_AUTOMATION_BROWSER');
              browserType = _playwright["default"][automationBrowser];
              _context.next = 5;
              return browserType.launch({
                devtools: process.env.DEVTOOLS !== 'false',
                headless: process.env.HEADLESS !== 'false',
                args: ['--disable-web-security', '--disable-features=IsolateOrigins, site-per-process']
              });

            case 5:
              browser = _context.sent;
              return _context.abrupt("return", browser);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _this.globalConfig = options.parameters;
    _this.globalVariables = {};
    return _this;
  }

  _createClass(ScenarioWorld, [{
    key: "init",
    value: function () {
      var _init = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(contextOptions) {
        var _this$screen, _this$screen$page, _this$screen2, _this$screen2$context, _this$screen3, _this$screen3$browser;

        var browser, context, page;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (_this$screen = this.screen) === null || _this$screen === void 0 ? void 0 : (_this$screen$page = _this$screen.page) === null || _this$screen$page === void 0 ? void 0 : _this$screen$page.close();

              case 2:
                _context2.next = 4;
                return (_this$screen2 = this.screen) === null || _this$screen2 === void 0 ? void 0 : (_this$screen2$context = _this$screen2.context) === null || _this$screen2$context === void 0 ? void 0 : _this$screen2$context.close();

              case 4:
                _context2.next = 6;
                return (_this$screen3 = this.screen) === null || _this$screen3 === void 0 ? void 0 : (_this$screen3$browser = _this$screen3.browser) === null || _this$screen3$browser === void 0 ? void 0 : _this$screen3$browser.close();

              case 6:
                _context2.next = 8;
                return this.newBrowser();

              case 8:
                browser = _context2.sent;
                _context2.next = 11;
                return browser.newContext(contextOptions);

              case 11:
                context = _context2.sent;
                _context2.next = 14;
                return context.tracing.start({
                  snapshots: true,
                  screenshots: true
                });

              case 14:
                _context2.next = 16;
                return context.newPage();

              case 16:
                page = _context2.sent;
                this.screen = {
                  browser: browser,
                  context: context,
                  page: page
                };
                return _context2.abrupt("return", this.screen);

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function init(_x) {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }]);

  return ScenarioWorld;
}(_cucumber.World);

exports.ScenarioWorld = ScenarioWorld;
(0, _cucumber.setWorldConstructor)(ScenarioWorld);