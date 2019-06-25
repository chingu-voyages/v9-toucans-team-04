(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.React, global.propTypes);
    global.HexGrid = mod.exports;
  }
})(this, function (exports, _react, _propTypes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

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

  var HexGrid = function (_Component) {
    _inherits(HexGrid, _Component);

    function HexGrid() {
      _classCallCheck(this, HexGrid);

      return _possibleConstructorReturn(this, (HexGrid.__proto__ || Object.getPrototypeOf(HexGrid)).apply(this, arguments));
    }

    _createClass(HexGrid, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            width = _props.width,
            height = _props.height,
            viewBox = _props.viewBox;

        return _react2.default.createElement(
          'svg',
          { className: 'grid', width: width, height: height, viewBox: viewBox, version: '1.1', xmlns: 'http://www.w3.org/2000/svg' },
          this.props.children
        );
      }
    }]);

    return HexGrid;
  }(_react.Component);

  HexGrid.propTypes = {
    width: _propTypes2.default.oneOfType([_propTypes2.default.string.isRequired, _propTypes2.default.number.isRequired]),
    height: _propTypes2.default.oneOfType([_propTypes2.default.string.isRequired, _propTypes2.default.number.isRequired]),
    viewBox: _propTypes2.default.string,
    children: _propTypes2.default.node.isRequired
  };
  HexGrid.defaultProps = {
    width: 800,
    height: 600,
    viewBox: "-50 -50 100 100"
  };
  exports.default = HexGrid;
});