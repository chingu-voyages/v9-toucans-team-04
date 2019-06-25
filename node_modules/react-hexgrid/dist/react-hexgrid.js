(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './Hex'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./Hex'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Hex);
    global.GridGenerator = mod.exports;
  }
})(this, function (exports, _Hex) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Hex2 = _interopRequireDefault(_Hex);

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

  var GridGenerator = function () {
    function GridGenerator() {
      _classCallCheck(this, GridGenerator);
    }

    _createClass(GridGenerator, null, [{
      key: 'getGenerator',
      value: function getGenerator(name) {
        if (GridGenerator.hasOwnProperty(name)) return GridGenerator[name];

        return null;
      }
    }, {
      key: 'parallelogram',
      value: function parallelogram(q1, q2, r1, r2) {
        var hexas = [];
        for (var q = q1; q <= q2; q++) {
          for (var r = r1; r <= r2; r++) {
            hexas.push(new _Hex2.default(q, r, -q - r));
          }
        }

        return hexas;
      }
    }, {
      key: 'triangle',
      value: function triangle(mapSize) {
        var hexas = [];
        for (var q = 0; q <= mapSize; q++) {
          for (var r = 0; r <= mapSize - q; r++) {
            hexas.push(new _Hex2.default(q, r, -q - r));
          }
        }

        return hexas;
      }
    }, {
      key: 'hexagon',
      value: function hexagon(mapRadius) {
        var hexas = [];
        for (var q = -mapRadius; q <= mapRadius; q++) {
          var r1 = Math.max(-mapRadius, -q - mapRadius);
          var r2 = Math.min(mapRadius, -q + mapRadius);
          for (var r = r1; r <= r2; r++) {
            hexas.push(new _Hex2.default(q, r, -q - r));
          }
        }

        return hexas;
      }
    }, {
      key: 'rectangle',
      value: function rectangle(mapWidth, mapHeight) {
        var hexas = [];
        for (var r = 0; r < mapHeight; r++) {
          var offset = Math.floor(r / 2); // or r>>1
          for (var q = -offset; q < mapWidth - offset; q++) {
            hexas.push(new _Hex2.default(q, r, -q - r));
          }
        }

        return hexas;
      }
    }, {
      key: 'orientedRectangle',
      value: function orientedRectangle(mapWidth, mapHeight) {
        var hexas = [];
        for (var q = 0; q < mapWidth; q++) {
          var offset = Math.floor(q / 2); // or q>>1
          for (var r = -offset; r < mapHeight - offset; r++) {
            hexas.push(new _Hex2.default(q, r, -q - r));
          }
        }

        return hexas;
      }
    }]);

    return GridGenerator;
  }();

  exports.default = GridGenerator;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.Hex = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Hex = function Hex(q, r, s) {
    var props = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, Hex);

    this.q = q;
    this.r = r;
    this.s = s;
    this.props = props;
  };

  exports.default = Hex;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', './Hex', './HexShape', './Path', './Layout', './GridGenerator'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('./Hex'), require('./HexShape'), require('./Path'), require('./Layout'), require('./GridGenerator'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.React, global.Hex, global.HexShape, global.Path, global.Layout, global.GridGenerator);
    global.HexGrid = mod.exports;
  }
})(this, function (exports, _react, _Hex, _HexShape, _Path, _Layout, _GridGenerator) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _Hex2 = _interopRequireDefault(_Hex);

  var _HexShape2 = _interopRequireDefault(_HexShape);

  var _Path2 = _interopRequireDefault(_Path);

  var _Layout2 = _interopRequireDefault(_Layout);

  var _GridGenerator2 = _interopRequireDefault(_GridGenerator);

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

  var _React$PropTypes = _react2.default.PropTypes,
      number = _React$PropTypes.number,
      object = _React$PropTypes.object,
      bool = _React$PropTypes.bool,
      string = _React$PropTypes.string,
      array = _React$PropTypes.array;

  var HexGrid = function (_React$Component) {
    _inherits(HexGrid, _React$Component);

    function HexGrid() {
      _classCallCheck(this, HexGrid);

      return _possibleConstructorReturn(this, (HexGrid.__proto__ || Object.getPrototypeOf(HexGrid)).apply(this, arguments));
    }

    _createClass(HexGrid, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        return _react2.default.createElement(
          'svg',
          { className: 'grid', width: this.props.width, height: this.props.height, viewBox: '-50 -50 100 100', version: '1.1', xmlns: 'http://www.w3.org/2000/svg' },
          this.props.hexagons.map(function (hex, index) {
            return _react2.default.createElement(_HexShape2.default, { key: index, hex: hex, layout: _this2.props.layout, actions: _this2.props.actions });
          }),
          _react2.default.createElement(_Path2.default, _extends({}, this.props.path, { layout: this.props.layout }))
        );
      }
    }]);

    return HexGrid;
  }(_react2.default.Component);

  HexGrid.generate = function (config, content) {
    var layout = new _Layout2.default(config.layout, config.origin);
    var generator = _GridGenerator2.default.getGenerator(config.map);
    var hexagons = generator.apply(undefined, config.mapProps);

    return { hexagons: hexagons, layout: layout };
  };

  HexGrid.propTypes = {
    width: number.isRequired,
    height: number.isRequired,
    actions: object.isRequired,
    layout: object.isRequired,
    hexagons: array.isRequired,
    path: object
  };

  HexGrid.defaultProps = {
    width: 800,
    height: 600,
    path: { start: null, end: null },
    actions: {},
    draggable: false,
    droppable: false
  };

  exports.default = HexGrid;
});
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
    global.HexPointers = mod.exports;
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

  var HexPointers = function (_React$Component) {
    _inherits(HexPointers, _React$Component);

    function HexPointers() {
      _classCallCheck(this, HexPointers);

      return _possibleConstructorReturn(this, (HexPointers.__proto__ || Object.getPrototypeOf(HexPointers)).apply(this, arguments));
    }

    _createClass(HexPointers, [{
      key: 'createPointerPolygon',
      value: function createPointerPolygon(corner1, corner2) {
        var p1 = corner1.split(',');
        var p2 = corner2.split(',');
        var a = { x: parseFloat(p1[0]), y: parseFloat(p1[1]) };
        var b = { x: parseFloat(p2[0]), y: parseFloat(p2[1]) };
        var c = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };

        var x = { x: (b.x + c.x) * 0.7, y: (b.y + c.y) * 0.7 };

        // Construct the points to polygon string
        return [b, c, x].map(function (p) {
          return p.x + ',' + p.y;
        }).join(' ');
      }
    }, {
      key: 'createPointerArc',
      value: function createPointerArc(corner1, corner2) {
        var c1 = corner1.split(',');
        var c2 = corner2.split(',');
        var p1 = { x: parseFloat(c1[0]), y: parseFloat(c1[1]) };
        var p2 = { x: parseFloat(c2[0]), y: parseFloat(c2[1]) };

        var a = { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 };
        var b = p2;

        var size = 1.2;
        var ax = { x: a.x * size, y: a.y * size };
        var bx = { x: b.x * size, y: b.y * size };

        return 'M' + a.x + ',' + a.y + ' C' + ax.x + ',' + ax.y + ' ' + bx.x + ',' + bx.y + ' ' + b.x + ',' + b.y;
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var hex = this.props.hex;
        if (hex.props == {} || typeof hex.props.arrows === "undefined") return null;

        var arrows = hex.props.arrows;
        var points = this.props.points.split(' ');

        var polygons = points.map(function (point, index) {
          if (arrows[index]) {
            var nextPoint = index == points.length - 1 ? points[0] : points[index + 1];
            // return this.createPointerPolygon(point, nextPoint);
            return _this2.createPointerArc(point, nextPoint);
          }
        });

        return _react2.default.createElement(
          'g',
          null,
          polygons.map(function (points, index) {
            // return <polygon key={index} points={points} />
            return _react2.default.createElement('path', { d: points });
          })
        );
      }
    }]);

    return HexPointers;
  }(_react2.default.Component);

  HexPointers.propTypes = {
    hex: object.isRequired,
    points: string.isRequired
  };

  exports.default = HexPointers;
});
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
      string = _React$PropTypes.string;

  var HexPolygon = function (_React$Component) {
    _inherits(HexPolygon, _React$Component);

    function HexPolygon() {
      _classCallCheck(this, HexPolygon);

      return _possibleConstructorReturn(this, (HexPolygon.__proto__ || Object.getPrototypeOf(HexPolygon)).apply(this, arguments));
    }

    _createClass(HexPolygon, [{
      key: 'getStyles',
      value: function getStyles(hex, id) {
        return hex.props == {} || typeof hex.props.image === "undefined" ? {} : { fill: 'url(#' + id + ')' };
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            hex = _props.hex,
            id = _props.id,
            points = _props.points;

        var styles = this.getStyles(hex, id);

        return _react2.default.createElement('polygon', { points: points, style: styles });
      }
    }]);

    return HexPolygon;
  }(_react2.default.Component);

  HexPolygon.propTypes = {
    hex: object.isRequired,
    id: string.isRequired,
    points: string.isRequired
  };

  exports.default = HexPolygon;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', './HexPattern', './HexPolygon', './HexPointers', './HexText', './HexUtils'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('./HexPattern'), require('./HexPolygon'), require('./HexPointers'), require('./HexText'), require('./HexUtils'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.React, global.HexPattern, global.HexPolygon, global.HexPointers, global.HexText, global.HexUtils);
    global.HexShape = mod.exports;
  }
})(this, function (exports, _react, _HexPattern, _HexPolygon, _HexPointers, _HexText, _HexUtils) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

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
        var hex = this.props.hex;
        var pixel = _HexUtils2.default.hexToPixel(hex, this.props.layout);
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

        var _props = this.props,
            hex = _props.hex,
            layout = _props.layout;

        var actions = this.getActions();
        var hexId = layout.name + _HexUtils2.default.getID(hex);
        var text = hex.props.text ? hex.props.text : _HexUtils2.default.getID(hex);
        var points = this.getPoints(hex);
        return _react2.default.createElement(
          'g',
          { className: 'shape-group', transform: this.translate(), draggable: 'true',
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
          _react2.default.createElement(_HexPolygon2.default, { id: hexId, hex: hex, points: points }),
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
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.React);
    global.HexText = mod.exports;
  }
})(this, function (exports, _react) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

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

  var string = _react2.default.PropTypes.string;

  var HexText = function (_React$Component) {
    _inherits(HexText, _React$Component);

    function HexText() {
      _classCallCheck(this, HexText);

      return _possibleConstructorReturn(this, (HexText.__proto__ || Object.getPrototypeOf(HexText)).apply(this, arguments));
    }

    _createClass(HexText, [{
      key: "render",
      value: function render() {
        var text = this.props.text;

        return _react2.default.createElement(
          "text",
          { x: "0", y: "0.3em", textAnchor: "middle" },
          text
        );
      }
    }]);

    return HexText;
  }(_react2.default.Component);

  HexText.propTypes = {
    text: string
  };

  exports.default = HexText;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './Hex', './Point'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./Hex'), require('./Point'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Hex, global.Point);
    global.HexUtils = mod.exports;
  }
})(this, function (exports, _Hex, _Point) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Hex2 = _interopRequireDefault(_Hex);

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

  var HexUtils = function () {
    function HexUtils() {
      _classCallCheck(this, HexUtils);
    }

    _createClass(HexUtils, null, [{
      key: 'equals',
      value: function equals(a, b) {
        return a.q == b.q && a.r == b.r && a.s == b.s;
      }
    }, {
      key: 'add',
      value: function add(a, b) {
        return new _Hex2.default(a.q + b.q, a.r + b.r, a.s + b.s);
      }
    }, {
      key: 'subtract',
      value: function subtract(a, b) {
        return new _Hex2.default(a.q - b.q, a.r - b.r, a.s - b.s);
      }
    }, {
      key: 'multiply',
      value: function multiply(a, k) {
        return new _Hex2.default(a.q * k, a.r * k, a.s * k);
      }
    }, {
      key: 'lengths',
      value: function lengths(hex) {
        return parseInt((Math.abs(hex.q) + Math.abs(hex.r) + Math.abs(hex.s)) / 2);
      }
    }, {
      key: 'distance',
      value: function distance(a, b) {
        return HexUtils.lengths(HexUtils.subtract(a, b));
      }
    }, {
      key: 'direction',
      value: function direction(_direction) {
        return HexUtils.DIRECTIONS[(6 + _direction % 6) % 6];
      }
    }, {
      key: 'neighbour',
      value: function neighbour(hex, direction) {
        return HexUtils.add(hex, HexUtils.direction(direction));
      }
    }, {
      key: 'round',
      value: function round(hex) {
        var rq = Math.round(hex.q);
        var rr = Math.round(hex.r);
        var rs = Math.round(hex.s);

        var qDiff = Math.abs(rq - hex.q);
        var rDiff = Math.abs(rr - hex.r);
        var sDiff = Math.abs(rs - hex.s);

        if (qDiff > rDiff && qDiff > rDiff) rq = -rr - rs;else if (rDiff > sDiff) rr = -rq - rs;else rs = -rq - rr;

        return new _Hex2.default(rq, rr, rs);
      }
    }, {
      key: 'hexToPixel',
      value: function hexToPixel(hex, layout) {
        var s = layout.spacing;
        var M = layout.orientation;
        var x = (M.f0 * hex.q + M.f1 * hex.r) * layout.size.x;
        var y = (M.f2 * hex.q + M.f3 * hex.r) * layout.size.y;
        // Apply spacing
        x = x * s;
        y = y * s;
        return new _Point2.default(x + layout.origin.x, y + layout.origin.y);
      }
    }, {
      key: 'pixelToHex',
      value: function pixelToHex(point, layout) {
        var M = layout.orientation;
        var pt = new _Point2.default((point.x - layout.origin.x) / layout.size.x, (point.y - layout.origin.y) / layout.size.y);
        var q = M.b0 * pt.x + M.b1 * pt.y;
        var r = M.b2 * pt.x + M.b3 * pt.y;
        return new _Hex2.default(q, r, -q - r);
      }
    }, {
      key: 'lerp',
      value: function lerp(a, b, t) {
        return new _Hex2.default(a.q + (b.q - a.q) * t, a.r + (b.r - a.r) * t, a.s + (b.s - a.s) * t);
      }
    }, {
      key: 'getID',
      value: function getID(hex) {
        return hex.q + ',' + hex.r + ',' + hex.s;
      }
    }]);

    return HexUtils;
  }();

  HexUtils.DIRECTIONS = [new _Hex2.default(1, 0, -1), new _Hex2.default(1, -1, 0), new _Hex2.default(0, -1, 1), new _Hex2.default(-1, 0, 1), new _Hex2.default(-1, 1, 0), new _Hex2.default(0, 1, -1)];
  exports.default = HexUtils;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './Point'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./Point'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Point);
    global.Layout = mod.exports;
  }
})(this, function (exports, _Point) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Point2 = _interopRequireDefault(_Point);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
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

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Orientation = function Orientation(f0, f1, f2, f3, b0, b1, b2, b3, startAngle) {
    _classCallCheck(this, Orientation);

    this.f0 = f0;
    this.f1 = f1;
    this.f2 = f2;
    this.f3 = f3;
    this.b0 = b0;
    this.b1 = b1;
    this.b2 = b2;
    this.b3 = b3;
    this.startAngle = startAngle;
  };

  var Layout = function () {
    function Layout(layout, origin) {
      _classCallCheck(this, Layout);

      this.name = layout.name || '';
      this.orientation = layout.flat ? Layout.LAYOUT_FLAT : Layout.LAYOUT_POINTY;
      this.size = new _Point2.default(layout.width, layout.height);
      this.origin = origin || new _Point2.default(0, 0);
      this.spacing = layout.spacing || 1;
    }

    _createClass(Layout, [{
      key: 'getPointOffset',
      value: function getPointOffset(corner) {
        var angle = 2.0 * Math.PI * (corner + this.orientation.startAngle) / 6;
        return new _Point2.default(this.size.x * Math.cos(angle), this.size.y * Math.sin(angle));
      }
    }, {
      key: 'getPolygonPoints',
      value: function getPolygonPoints(hex) {
        var _this = this;

        var corners = [];
        var center = new _Point2.default(0, 0);

        Array.from(new Array(6), function (x, i) {
          var offset = _this.getPointOffset(i);
          var point = new _Point2.default(center.x + offset.x, center.y + offset.y);
          corners.push(point);
        });

        return corners;
      }
    }]);

    return Layout;
  }();

  Layout.LAYOUT_FLAT = new Orientation(3.0 / 2.0, 0.0, Math.sqrt(3.0) / 2.0, Math.sqrt(3.0), 2.0 / 3.0, 0.0, -1.0 / 3.0, Math.sqrt(3.0) / 3.0, 0.0);
  Layout.LAYOUT_POINTY = new Orientation(Math.sqrt(3.0), Math.sqrt(3.0) / 2.0, 0.0, 3.0 / 2.0, Math.sqrt(3.0) / 3.0, -1.0 / 3.0, 0.0, 2.0 / 3.0, 0.5);
  exports.default = Layout;
});
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
    global.Path = mod.exports;
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

  var object = _react2.default.PropTypes.object;

  var Path = function (_React$Component) {
    _inherits(Path, _React$Component);

    function Path() {
      _classCallCheck(this, Path);

      return _possibleConstructorReturn(this, (Path.__proto__ || Object.getPrototypeOf(Path)).apply(this, arguments));
    }

    _createClass(Path, [{
      key: 'getPoints',
      value: function getPoints() {
        var _this2 = this;

        if (!this.props.start || !this.props.end) {
          return '';
        }

        // Get all the intersecting hexes between start and end points
        var distance = _HexUtils2.default.distance(this.props.start, this.props.end);
        var intersects = [];
        var step = 1.0 / Math.max(distance, 1);
        for (var i = 0; i <= distance; i++) {
          intersects.push(_HexUtils2.default.round(_HexUtils2.default.lerp(this.props.start, this.props.end, step * i)));
        }

        // Construct Path points out of all the intersecting hexes (e.g. M 0,0 L 10,20, L 30,20)
        var points = 'M';
        points += intersects.map(function (hex) {
          var p = _HexUtils2.default.hexToPixel(hex, _this2.props.layout);
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
  }(_react2.default.Component);

  Path.propTypes = {
    start: object,
    end: object,
    layout: object.isRequired
  };

  exports.default = Path;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.Point = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Point = function Point(x, y) {
    _classCallCheck(this, Point);

    this.x = x;
    this.y = y;
  };

  exports.default = Point;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './Hex', './HexGrid', './Layout', './HexUtils'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./Hex'), require('./HexGrid'), require('./Layout'), require('./HexUtils'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Hex, global.HexGrid, global.Layout, global.HexUtils);
    global.index = mod.exports;
  }
})(this, function (exports, _Hex, _HexGrid, _Layout, _HexUtils) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.HexUtils = exports.Layout = exports.Hex = exports.HexGrid = undefined;

  var _Hex2 = _interopRequireDefault(_Hex);

  var _HexGrid2 = _interopRequireDefault(_HexGrid);

  var _Layout2 = _interopRequireDefault(_Layout);

  var _HexUtils2 = _interopRequireDefault(_HexUtils);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.HexGrid = _HexGrid2.default;
  exports.Hex = _Hex2.default;
  exports.Layout = _Layout2.default;
  exports.HexUtils = _HexUtils2.default;
});
