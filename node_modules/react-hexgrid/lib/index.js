(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './GridGenerator', './HexGrid', './HexUtils', './Layout', './Path', './Pattern', './Hexagon/Hexagon', './Hexagon/Text', './models/Hex'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./GridGenerator'), require('./HexGrid'), require('./HexUtils'), require('./Layout'), require('./Path'), require('./Pattern'), require('./Hexagon/Hexagon'), require('./Hexagon/Text'), require('./models/Hex'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.GridGenerator, global.HexGrid, global.HexUtils, global.Layout, global.Path, global.Pattern, global.Hexagon, global.Text, global.Hex);
    global.index = mod.exports;
  }
})(this, function (exports, _GridGenerator, _HexGrid, _HexUtils, _Layout, _Path, _Pattern, _Hexagon, _Text, _Hex) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Hex = exports.Text = exports.Hexagon = exports.Pattern = exports.Path = exports.Layout = exports.HexUtils = exports.HexGrid = exports.GridGenerator = undefined;

  var _GridGenerator2 = _interopRequireDefault(_GridGenerator);

  var _HexGrid2 = _interopRequireDefault(_HexGrid);

  var _HexUtils2 = _interopRequireDefault(_HexUtils);

  var _Layout2 = _interopRequireDefault(_Layout);

  var _Path2 = _interopRequireDefault(_Path);

  var _Pattern2 = _interopRequireDefault(_Pattern);

  var _Hexagon2 = _interopRequireDefault(_Hexagon);

  var _Text2 = _interopRequireDefault(_Text);

  var _Hex2 = _interopRequireDefault(_Hex);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.GridGenerator = _GridGenerator2.default;
  exports.HexGrid = _HexGrid2.default;
  exports.HexUtils = _HexUtils2.default;
  exports.Layout = _Layout2.default;
  exports.Path = _Path2.default;
  exports.Pattern = _Pattern2.default;
  exports.Hexagon = _Hexagon2.default;
  exports.Text = _Text2.default;
  exports.Hex = _Hex2.default;
});