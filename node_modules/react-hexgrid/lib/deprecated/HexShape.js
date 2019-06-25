(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'classnames', './HexPattern', './HexPolygon', './HexPointers', './HexText', './HexUtils'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('classnames'), require('./HexPattern'), require('./HexPolygon'), require('./HexPointers'), require('./HexText'), require('./HexUtils'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.React, global.classnames, global.HexPattern, global.HexPolygon, global.HexPointers, global.HexText, global.HexUtils);
    global.HexShape = mod.exports;
  }
})(this, function (exports, _react, _classnames, _HexPattern, _HexPolygon, _HexPointers, _HexText, _HexUtils) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _HexPattern2 = _interopRequireDefault(_HexPattern);

  var _HexPolygon2 = _interopRequireDefault(_HexPolygon);

  var _HexPointers2 = _interopRequireDefault(_HexPointers);

  var _HexText2 = _interopRequireDefault(_HexText);

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

  var object = _react2.default.PropTypes.object;

  var HexShape = function (_React$Component) {
    _inherits(HexShape, _React$Component);

    function HexShape() {
      _classCallCheck(this, HexShape);

      return _possibleConstructorReturn(this, (HexShape.__proto__ || Object.getPrototypeOf(HexShape)).apply(this, arguments));
    }

    _createClass(HexShape, [{
      key: 'getPoints',
      value: function getPoints(hex) {
        var points = this.props.layout.getPolygonPoints(hex);
        return points.map(function (point) {
          return point.x + ',' + point.y;
        }).join(' ');
      }
    }, {
      key: 'translate',
      value: function translate() {
        var _props = this.props,
            hex = _props.hex,
            layout = _props.layout;

        var pixel = _HexUtils2.default.hexToPixel(hex, layout);
        return 'translate(' + pixel.x + ', ' + pixel.y + ')';
      }
    }, {
      key: 'getActions',
      value: function getActions() {
        var DEFAULT_ACTIONS = {
          onMouseEnter: function onMouseEnter() {},
          onMouseLeave: function onMouseLeave() {},
          onDragStart: function onDragStart() {},
          onDragEnd: function onDragEnd() {},
          onDragOver: function onDragOver() {},
          onDrop: function onDrop() {},
          onClick: function onClick() {}
        };
        return Object.assign({}, DEFAULT_ACTIONS, this.props.actions);
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props2 = this.props,
            hex = _props2.hex,
            layout = _props2.layout;

        var actions = this.getActions();
        var hexId = layout.name + _HexUtils2.default.getID(hex);
        var text = hex.props.text ? hex.props.text : _HexUtils2.default.getID(hex);
        var points = this.getPoints(hex);
        var _hex$props = hex.props,
            className = _hex$props.className,
            image = _hex$props.image;


        return _react2.default.createElement(
          'g',
          {
            className: (0, _classnames2.default)('shape-group', className),
            transform: this.translate(),
            draggable: 'true',
            onMouseEnter: function onMouseEnter(e) {
              return actions.onMouseEnter(_this2.props.hex, e);
            },
            onMouseLeave: function onMouseLeave(e) {
              return actions.onMouseLeave(_this2.props.hex, e);
            },
            onDragStart: function onDragStart(e) {
              return actions.onDragStart(_this2.props.hex, e);
            },
            onDragEnd: function onDragEnd(e) {
              return actions.onDragEnd(_this2.props.hex, e);
            },
            onDragOver: function onDragOver(e) {
              return actions.onDragOver(_this2.props.hex, e);
            },
            onDrop: function onDrop(e) {
              return actions.onDrop(_this2.props.hex, e);
            },
            onClick: function onClick(e) {
              return actions.onClick(_this2.props.hex, e);
            }
          },
          _react2.default.createElement(_HexPattern2.default, { id: hexId, hex: hex, layout: layout }),
          _react2.default.createElement(_HexPolygon2.default, { id: hexId, hex: hex, points: points, useFill: !!image }),
          _react2.default.createElement(_HexPointers2.default, { hex: hex, points: points }),
          _react2.default.createElement(_HexText2.default, { text: text })
        );
      }
    }]);

    return HexShape;
  }(_react2.default.Component);

  HexShape.propTypes = {
    hex: object.isRequired,
    layout: object.isRequired,
    actions: object.isRequired
  };

  exports.default = HexShape;
});