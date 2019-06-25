(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', './HexUtils', './models/Point'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('./HexUtils'), require('./models/Point'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.React, global.propTypes, global.HexUtils, global.Point);
    global.Pattern = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _HexUtils, _Point) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _HexUtils2 = _interopRequireDefault(_HexUtils);

  var _Point2 = _interopRequireDefault(_Point);

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

  var Pattern = function (_Component) {
    _inherits(Pattern, _Component);

    function Pattern() {
      _classCallCheck(this, Pattern);

      return _possibleConstructorReturn(this, (Pattern.__proto__ || Object.getPrototypeOf(Pattern)).apply(this, arguments));
    }

    _createClass(Pattern, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            id = _props.id,
            link = _props.link,
            size = _props.size;


        return _react2.default.createElement(
          'defs',
          null,
          _react2.default.createElement(
            'pattern',
            { id: id, patternUnits: 'objectBoundingBox', x: 0, y: 0, width: size.x, height: size.y },
            _react2.default.createElement('image', { xlinkHref: link, x: 0, y: 0, width: size.x * 2, height: size.y * 2 })
          )
        );
      }
    }]);

    return Pattern;
  }(_react.Component);

  Pattern.propTypes = {
    id: _propTypes2.default.string.isRequired,
    link: _propTypes2.default.string.isRequired,
    size: _propTypes2.default.object
  };
  Pattern.defaultProps = {
    size: new _Point2.default(10, 10)
  };
  exports.default = Pattern;
});