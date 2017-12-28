/* eslint class-methods-use-this: "off" */

/**
 * Returns the appropriate instance to the environment in which the site is being rendered.

 * If we are in backend, we return a service mock.
 * If we are in browser we return the reference to the library.
 */
class KeymasterMock {
    constructor() {} // eslint-disable-line

    shift = false;
    alt = false;
    option = false;
    ctrl = false;
    control = false;
    command = false;

    setScope() {}
    getScope() {}
    deleteScope() {}

    noConflict() {}

    unbind() {}

    isPressed() {}
    getPressedKeyCodes() {}

    filter() {}
}

const isBrowser = typeof window !== 'undefined';
const key = isBrowser ? require('keymaster') : new KeymasterMock();

export default key;
