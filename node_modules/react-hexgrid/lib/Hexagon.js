(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'classnames', './models/Hex', './HexUtils'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('classnames'), require('./models/Hex'), require('./HexUtils'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.React, global.classnames, global.Hex, global.HexUtils);
    global.Hexagon = mod.exports;
  }
})(this, function (exports, _react, _classnames, _Hex, _HexUtils) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _Hex2 = _interopRequireDefault(_Hex);

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

  var Hexagon = function (_Component) {
    _inherits(Hexagon, _Component);

    function Hexagon() {
      _classCallCheck(this, Hexagon);

      return _possibleConstructorReturn(this, (Hexagon.__proto__ || Object.getPrototypeOf(Hexagon)).apply(this, arguments));
    }

    _createClass(Hexagon, [{
      key: 'translate',
      value: function translate() {
        var _props = this.props,
            q = _props.q,
            r = _props.r,
            s = _props.s,
            layout = _props.layout;

        var hex = new _Hex2.default(q, r, s);
        var pixel = _HexUtils2.default.hexToPixel(hex, layout);
        return 'translate(' + pixel.x + ', ' + pixel.y + ')';
      }
    }, {
      key: 'render',
      value: function render() {
        var points = this.props.points;

        return _react2.default.createElement(
          'g',
          { className: 'shape-group', transform: this.translate() },
          _react2.default.createElement('polygon', { points: points }),
          this.props.children
        );
      }
    }]);

    return Hexagon;
  }(_react.Component);

  Hexagon.propTypes = {
    q: _react.PropTypes.number.isRequired,
    r: _react.PropTypes.number.isRequired,
    s: _react.PropTypes.number.isRequired,
    points: _react.PropTypes.string,
    layout: _react.PropTypes.object,
    children: _react.PropTypes.node
  };
  exports.default = Hexagon;
});