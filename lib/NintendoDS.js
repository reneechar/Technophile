'use strict';
var GameConsole = require('./GameConsole.js');
var WebBrowser = require('./WebBrowser.js');

function NintendoDS () {
	GameConsole.call(this, 'Nintendo DS');
};

function extend(destination, source) {
  for (var k in source) {
    destination[k] = source[k];
  }
  return destination; 
};

extend(NintendoDS.prototype, GameConsole.prototype);
extend(NintendoDS.prototype, WebBrowser.prototype);


module.exports = NintendoDS;

