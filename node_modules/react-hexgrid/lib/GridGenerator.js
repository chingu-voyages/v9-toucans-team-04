(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './models/Hex', './HexUtils'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./models/Hex'), require('./HexUtils'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Hex, global.HexUtils);
    global.GridGenerator = mod.exports;
  }
})(this, function (exports, _Hex, _HexUtils) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

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
      key: 'ring',
      value: function ring(center, mapRadius) {
        var hexas = [];
        var hex = _HexUtils2.default.add(center, _HexUtils2.default.multiply(_HexUtils2.default.direction(4), mapRadius));
        for (var i = 0; i < 6; i++) {
          for (var j = 0; j < mapRadius; j++) {
            hexas.push(hex);
            hex = _HexUtils2.default.neighbour(hex, i);
          }
        }
        return hexas;
      }
    }, {
      key: 'spiral',
      value: function spiral(center, mapRadius) {
        var results = [center];
        for (var k = 1; k <= mapRadius; k++) {
          var temp = this.ring(center, k);
          results = results.concat(temp);
        }
        return results;
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