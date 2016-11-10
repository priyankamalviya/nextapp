'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('/Users/priyankamalviya/Desktop/nextApp/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _Nav = require('../components/Nav');

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      'Its awesome working on next.js'
    ),
    _react2.default.createElement(_Nav2.default, null)
  );
};
    if (module.hot) {
      module.hot.accept()

      var Component = module.exports.default || module.exports
      Component.__route = "/"

      if (module.hot.status() !== 'idle') {
        var components = next.router.components
        for (var r in components) {
          if (!components.hasOwnProperty(r)) continue

          if (components[r].Component.__route === "/") {
            next.router.update(r, Component)
          }
        }
      }
    }
  