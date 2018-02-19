"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _HeadText = _interopRequireDefault(require("./components/HeadText"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var Accordian =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Accordian, _React$Component);

  function Accordian() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Accordian);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Accordian.__proto__ || Object.getPrototypeOf(Accordian)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        expanded: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "toggle", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(expand) {
        _this.setState(function (prevState, props) {
          var result = {
            expanded: expand || !prevState.expanded
          };
          props.onToggle(result);
          return result;
        });
      }
    }), _temp));
  }

  _createClass(Accordian, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          headText = _props.headText,
          headComponent = _props.headComponent,
          children = _props.children,
          extraProps = _objectWithoutProperties(_props, ["headText", "headComponent", "children"]);

      var Head = headComponent;
      return [Head ? _react.default.createElement(Head, _extends({
        key: "head",
        toggle: this.toggle,
        expanded: this.state.expanded
      }, extraProps)) : _react.default.createElement(_HeadText.default, _extends({
        key: "headText",
        toggle: this.toggle,
        expanded: this.state.expanded,
        text: headText
      }, extraProps)), this.state.expanded ? children : null];
    }
  }]);

  return Accordian;
}(_react.default.Component);

Accordian.defaultProps = {
  headText: '',
  headComponent: null,
  onToggle: function onToggle() {},
  children: null
};
Accordian.propTypes = {
  headText: _propTypes.default.string,
  headComponent: _propTypes.default.func,
  onToggle: _propTypes.default.func,
  children: _propTypes.default.node
};
var _default = Accordian;
exports.default = _default;