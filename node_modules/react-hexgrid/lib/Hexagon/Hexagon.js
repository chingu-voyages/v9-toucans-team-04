(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'classnames', '../models/Hex', '../HexUtils'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('classnames'), require('../models/Hex'), require('../HexUtils'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.React, global.propTypes, global.classnames, global.Hex, global.HexUtils);
    global.Hexagon = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _classnames, _Hex, _HexUtils) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _Hex2 = _interopRequireDefault(_Hex);

  var _HexUtils2 = _interopRequireDefault(_HexUtils);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

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

    function Hexagon(props, context) {
      _classCallCheck(this, Hexagon);

      var _this = _possibleConstructorReturn(this, (Hexagon.__proto__ || Object.getPrototypeOf(Hexagon)).call(this, props, context));

      var q = props.q,
          r = props.r,
          s = props.s;
      var layout = context.layout;

      var hex = new _Hex2.default(q, r, s);
      var pixel = _HexUtils2.default.hexToPixel(hex, layout);
      _this.state = { hex: hex, pixel: pixel };
      return _this;
    }

    // TODO Refactor to reduce duplicate


    _createClass(Hexagon, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var q = nextProps.q,
            r = nextProps.r,
            s = nextProps.s;
        var layout = this.context.layout;

        var hex = new _Hex2.default(q, r, s);
        var pixel = _HexUtils2.default.hexToPixel(hex, layout);
        this.setState({ hex: hex, pixel: pixel });
      }
    }, {
      key: 'onMouseEnter',
      value: function onMouseEnter(e) {
        if (this.props.onMouseEnter) {
          this.props.onMouseEnter(e, this);
        }
      }
    }, {
      key: 'onMouseOver',
      value: function onMouseOver(e) {
        if (this.props.onMouseOver) {
          this.props.onMouseOver(e, this);
        }
      }
    }, {
      key: 'onMouseLeave',
      value: function onMouseLeave(e) {
        if (this.props.onMouseLeave) {
          this.props.onMouseLeave(e, this);
        }
      }
    }, {
      key: 'onClick',
      value: function onClick(e) {
        if (this.props.onClick) {
          this.props.onClick(e, this);
        }
      }
    }, {
      key: 'onDragStart',
      value: function onDragStart(e) {
        if (this.props.onDragStart) {
          var targetProps = _extends({}, this.state, {
            data: this.props.data,
            fill: this.props.fill,
            className: this.props.className
          });
          e.dataTransfer.setData('hexagon', JSON.stringify(targetProps));
          this.props.onDragStart(e, this);
        }
      }
    }, {
      key: 'onDragEnd',
      value: function onDragEnd(e) {
        if (this.props.onDragEnd) {
          e.preventDefault();
          var success = e.dataTransfer.dropEffect !== 'none';
          this.props.onDragEnd(e, this, success);
        }
      }
    }, {
      key: 'onDragOver',
      value: function onDragOver(e) {
        if (this.props.onDragOver) {
          this.props.onDragOver(e, this);
        }
      }
    }, {
      key: 'onDrop',
      value: function onDrop(e) {
        if (this.props.onDrop) {
          e.preventDefault();
          var target = JSON.parse(e.dataTransfer.getData('hexagon'));
          this.props.onDrop(e, this, target);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            fill = _props.fill,
            cellStyle = _props.cellStyle,
            className = _props.className;
        var points = this.context.points;
        var _state = this.state,
            hex = _state.hex,
            pixel = _state.pixel;

        var fillId = fill ? 'url(#' + fill + ')' : null;
        return _react2.default.createElement(
          'g',
          {
            className: (0, _classnames2.default)('hexagon-group', className),
            transform: 'translate(' + pixel.x + ', ' + pixel.y + ')',
            draggable: 'true',
            onMouseEnter: function onMouseEnter(e) {
              return _this2.onMouseEnter(e);
            },
            onMouseOver: function onMouseOver(e) {
              return _this2.onMouseOver(e);
            },
            onMouseLeave: function onMouseLeave(e) {
              return _this2.onMouseLeave(e);
            },
            onClick: function onClick(e) {
              return _this2.onClick(e);
            },
            onDragStart: function onDragStart(e) {
              return _this2.onDragStart(e);
            },
            onDragEnd: function onDragEnd(e) {
              return _this2.onDragEnd(e);
            },
            onDragOver: function onDragOver(e) {
              return _this2.onDragOver(e);
            },
            onDrop: function onDrop(e) {
              return _this2.onDrop(e);
            }
          },
          _react2.default.createElement(
            'g',
            { className: 'hexagon' },
            _react2.default.createElement('polygon', { points: points, fill: fillId, style: cellStyle }),
            this.props.children
          )
        );
      }
    }]);

    return Hexagon;
  }(_react.Component);

  Hexagon.propTypes = {
    q: _propTypes2.default.number.isRequired,
    r: _propTypes2.default.number.isRequired,
    s: _propTypes2.default.number.isRequired,
    fill: _propTypes2.default.string,
    cellStyle: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
    className: _propTypes2.default.string,
    data: _propTypes2.default.object,
    onMouseEnter: _propTypes2.default.func,
    onMouseOver: _propTypes2.default.func,
    onMouseLeave: _propTypes2.default.func,
    onClick: _propTypes2.default.func,
    onDragStart: _propTypes2.default.func,
    onDragEnd: _propTypes2.default.func,
    onDragOver: _propTypes2.default.func,
    onDrop: _propTypes2.default.func,
    children: _propTypes2.default.node
  };
  Hexagon.contextTypes = {
    layout: _propTypes2.default.object, // TODO Shape
    points: _propTypes2.default.string
  };
  exports.default = Hexagon;
});