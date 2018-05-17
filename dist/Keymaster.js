'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint class-methods-use-this: "off" */

/**
 * Returns the appropriate instance to the environment in which the site is being rendered.

 * If we are in backend, we return a service mock.
 * If we are in browser we return the reference to the library.
 */
var KeymasterMock = function () {
    function KeymasterMock() {
        _classCallCheck(this, KeymasterMock);

        this.shift = false;
        this.alt = false;
        this.option = false;
        this.ctrl = false;
        this.control = false;
        this.command = false;
    } // eslint-disable-line

    _createClass(KeymasterMock, [{
        key: 'setScope',
        value: function setScope() {}
    }, {
        key: 'getScope',
        value: function getScope() {}
    }, {
        key: 'deleteScope',
        value: function deleteScope() {}
    }, {
        key: 'noConflict',
        value: function noConflict() {}
    }, {
        key: 'unbind',
        value: function unbind() {}
    }, {
        key: 'isPressed',
        value: function isPressed() {}
    }, {
        key: 'getPressedKeyCodes',
        value: function getPressedKeyCodes() {}
    }, {
        key: 'filter',
        value: function filter() {}
    }]);

    return KeymasterMock;
}();

var isBrowser = typeof window !== 'undefined';
var key = isBrowser ? require('keymaster') : new KeymasterMock();

exports.default = key;