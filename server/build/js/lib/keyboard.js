'use strict';

window.addEventListener('keyup', function (event) {
  Key.onKeyup(event);
  window.addEventListener('keydown', function (event) {
    Key.onKeydown(event);
  });
}, false);

var Key = {

  _pressed: {},

  A: 65,
  W: 87,
  D: 68,
  S: 83,
  SPACE: 32,

  isDown: function isDown(keyCode) {

    return this._pressed[keyCode];
  },

  onKeydown: function onKeydown(event) {

    this._pressed[event.keyCode] = true;
  },

  onKeyup: function onKeyup(event) {

    delete this._pressed[event.keyCode];
  }

};