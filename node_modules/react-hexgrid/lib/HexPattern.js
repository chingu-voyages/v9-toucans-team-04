(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', './HexUtils'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('./HexUtils'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.React, global.HexUtils);
    global.HexPattern = mod.exports;
  }
})(this, function (exports, _react, _HexUtils) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _HexUtils2 = _interopRequireDefault(_HexUtils);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var _React$PropTypes = _react2.default.PropTypes,
      object = _React$PropTypes.object,
      string = _React$PropTypes.string;

  var HexPattern = function (_React$Component) {
    _inherits(HexPattern, _React$Component);

    function HexPattern() {
      _classCallCheck(this, HexPattern);

      return _possibleConstructorReturn(this, (HexPattern.__proto__ || Object.getPrototypeOf(HexPattern)).apply(this, arguments));
    }

    _createClass(HexPattern, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            hex = _props.hex,
            id = _props.id,
            layout = _props.layout;

        if (hex.props == {} || typeof hex.props.image === "undefined") {
          return null;
        }
        var _layout$size = layout.size,
            x = _layout$size.x,
            y = _layout$size.y;


        return _react2.default.createElement(
          'defs',
          null,
          _react2.default.createElement(
            'pattern',
            { id: id, patternUnits: 'objectBoundingBox', x: 0, y: 0, width: x, height: y },
            _react2.default.createElement('image', { xlinkHref: hex.props.image, x: 0, y: 0, width: x * 2, height: y * 2 })
          )
        );
      }
    }]);

    return HexPattern;
  }(_react2.default.Component);

  HexPattern.propTypes = {
    hex: object.isRequired,
    id: string.isRequired,
    layout: object
  };

  exports.default = HexPattern;
});