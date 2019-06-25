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