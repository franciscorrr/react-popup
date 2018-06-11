"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint class-methods-use-this: "off" */

/**
 * Returns the appropriate instance to the environment in which the site is being rendered.

 * If we are in backend, we return a service mock.
 * If we are in browser we return the reference to the library.
 */
var KeymasterMock =
/*#__PURE__*/
function () {
  function KeymasterMock() {
    _classCallCheck(this, KeymasterMock);

    _defineProperty(this, "shift", false);

    _defineProperty(this, "alt", false);

    _defineProperty(this, "option", false);

    _defineProperty(this, "ctrl", false);

    _defineProperty(this, "control", false);

    _defineProperty(this, "command", false);
  } // eslint-disable-line


  _createClass(KeymasterMock, [{
    key: "setScope",
    value: function setScope() {}
  }, {
    key: "getScope",
    value: function getScope() {}
  }, {
    key: "deleteScope",
    value: function deleteScope() {}
  }, {
    key: "noConflict",
    value: function noConflict() {}
  }, {
    key: "unbind",
    value: function unbind() {}
  }, {
    key: "isPressed",
    value: function isPressed() {}
  }, {
    key: "getPressedKeyCodes",
    value: function getPressedKeyCodes() {}
  }, {
    key: "filter",
    value: function filter() {}
  }]);

  return KeymasterMock;
}();

var isBrowser = typeof window !== 'undefined';
var key = isBrowser ? require('keymaster') : new KeymasterMock();
var _default = key;
exports.default = _default;