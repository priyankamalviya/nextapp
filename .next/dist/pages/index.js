'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('/Users/priyankamalviya/Desktop/nextApp/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _link = require('/Users/priyankamalviya/Desktop/nextApp/node_modules/next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

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
    _react2.default.createElement(
      _link2.default,
      { href: '/contact' },
      'Contact Page'
    )
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
  