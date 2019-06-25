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
    global.HexPolygon = mod.exports;
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
      string = _React$PropTypes.string,
      bool = _React$PropTypes.bool;

  var HexPolygon = function (_React$Component) {
    _inherits(HexPolygon, _React$Component);

    function HexPolygon() {
      _classCallCheck(this, HexPolygon);

      return _possibleConstructorReturn(this, (HexPolygon.__proto__ || Object.getPrototypeOf(HexPolygon)).apply(this, arguments));
    }

    _createClass(HexPolygon, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            id = _props.id,
            points = _props.points,
            useFill = _props.useFill;

        var fill = useFill ? 'url(#' + id + ')' : null;

        return _react2.default.createElement('polygon', { points: points, fill: fill });
      }
    }]);

    return HexPolygon;
  }(_react2.default.Component);

  HexPolygon.propTypes = {
    hex: object.isRequired,
    id: string.isRequired,
    points: string.isRequired,
    useFill: bool
  };

  exports.default = HexPolygon;
});