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
      _link2.default,
      { href: '/' },
      'Home'
    ),
    _react2.default.createElement(
      _link2.default,
      { href: '/contact' },
      'Contact Page'
    )
  );
};