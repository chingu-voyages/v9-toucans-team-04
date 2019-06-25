(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', './HexUtils'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('./HexUtils'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.React, global.propTypes, global.HexUtils);
    global.Path = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _HexUtils) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

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

  var Path = function (_Component) {
    _inherits(Path, _Component);

    function Path() {
      _classCallCheck(this, Path);

      return _possibleConstructorReturn(this, (Path.__proto__ || Object.getPrototypeOf(Path)).apply(this, arguments));
    }

    _createClass(Path, [{
      key: 'getPoints',
      value: function getPoints() {
        var _props = this.props,
            start = _props.start,
            end = _props.end;
        var layout = this.context.layout;

        if (!start || !end) {
          return '';
        }

        // Get all the intersecting hexes between start and end points
        var distance = _HexUtils2.default.distance(start, end);
        var intersects = [];
        var step = 1.0 / Math.max(distance, 1);
        for (var i = 0; i <= distance; i++) {
          intersects.push(_HexUtils2.default.round(_HexUtils2.default.hexLerp(start, end, step * i)));
        }

        // Construct Path points out of all the intersecting hexes (e.g. M 0,0 L 10,20, L 30,20)
        var points = 'M';
        points += intersects.map(function (hex) {
          var p = _HexUtils2.default.hexToPixel(hex, layout);
          return ' ' + p.x + ',' + p.y + ' ';
        }).join('L');

        return points;
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement('path', { d: this.getPoints() });
      }
    }]);

    return Path;
  }(_react.Component);

  Path.propTypes = {
    start: _propTypes2.default.object,
    end: _propTypes2.default.object,
    layout: _propTypes2.default.object
  };
  Path.contextTypes = {
    layout: _propTypes2.default.object // TODO Shape
  };
  exports.default = Path;
});