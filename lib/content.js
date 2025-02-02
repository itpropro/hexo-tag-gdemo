"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _prism = _interopRequireDefault(require("prismjs/prism"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Content =
/*#__PURE__*/
function () {
  function Content() {
    _classCallCheck(this, Content);
  }

  _createClass(Content, null, [{
    key: "default",
    value: function _default(value) {
      return new DefaultContentDecorator(value).decorate();
    }
  }, {
    key: "simple",
    value: function simple(value) {
      return new SimpleContentDecorator(new DefaultContentDecorator(value)).decorate();
    }
  }, {
    key: "highlight",
    value: function highlight(value, language) {
      return new HighlightContentDecorator(new SimpleContentDecorator(new DefaultContentDecorator(value)), language).decorate();
    }
  }]);

  return Content;
}();

exports.default = Content;

var ContentDecorator =
/*#__PURE__*/
function () {
  function ContentDecorator() {
    _classCallCheck(this, ContentDecorator);
  }

  _createClass(ContentDecorator, [{
    key: "decorate",
    value: function decorate() {}
  }]);

  return ContentDecorator;
}();

var DefaultContentDecorator =
/*#__PURE__*/
function (_ContentDecorator) {
  _inherits(DefaultContentDecorator, _ContentDecorator);

  function DefaultContentDecorator(value) {
    var _this;

    _classCallCheck(this, DefaultContentDecorator);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DefaultContentDecorator).call(this));
    _this._value = value;
    return _this;
  }

  _createClass(DefaultContentDecorator, [{
    key: "decorate",
    value: function decorate() {
      return this._value;
    }
  }]);

  return DefaultContentDecorator;
}(ContentDecorator);

var SimpleContentDecorator =
/*#__PURE__*/
function (_ContentDecorator2) {
  _inherits(SimpleContentDecorator, _ContentDecorator2);

  function SimpleContentDecorator(contentDecorator) {
    var _this2;

    _classCallCheck(this, SimpleContentDecorator);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(SimpleContentDecorator).call(this));
    _this2._contentDecorator = contentDecorator;
    return _this2;
  }

  _createClass(SimpleContentDecorator, [{
    key: "decorate",
    value: function decorate() {
      var tempValue = this._contentDecorator.decorate();

      tempValue = tempValue.replaceAll('\\', '\\\\');
      tempValue = tempValue.replaceAll('\`', '\\`');
      return tempValue;
    }
  }]);

  return SimpleContentDecorator;
}(ContentDecorator);

var HighlightContentDecorator =
/*#__PURE__*/
function (_ContentDecorator3) {
  _inherits(HighlightContentDecorator, _ContentDecorator3);

  function HighlightContentDecorator(contentDecorator, language) {
    var _this3;

    _classCallCheck(this, HighlightContentDecorator);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(HighlightContentDecorator).call(this));
    _this3._contentDecorator = contentDecorator;
    _this3._language = language;
    return _this3;
  }

  _createClass(HighlightContentDecorator, [{
    key: "decorate",
    value: function decorate() {
      var _this4 = this;

      var tempValue = this._contentDecorator.decorate();

      Promise.resolve().then(function () {
        return _interopRequireWildcard(require("prismjs/components/prism-".concat(_this4._language)));
      });
      return _prism.default.highlight(tempValue, _prism.default.languages[this._language], this._language);
    }
  }]);

  return HighlightContentDecorator;
}(ContentDecorator);

String.prototype.replaceAll = function (target, replace) {
  return this.split(target).join(replace);
};