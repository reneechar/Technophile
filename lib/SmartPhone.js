'use strict';
var Phone = require('./Phone.js');
var Tablet = require('./Tablet.js');
var WebBrowser = require('./WebBrowser.js');
var GameConsole = require('./GameConsole.js');

function SmartPhone (phoneNumber) {
	Phone.call(this, phoneNumber);
	GameConsole.call(this, 'Smart Phone');
};

function extend(destination, source) {
  for (var k in source) {
    destination[k] = source[k];
  }
  return destination; 
};

extend(SmartPhone.prototype, Phone.prototype);
extend(SmartPhone.prototype, Tablet.prototype);
extend(SmartPhone.prototype, WebBrowser.prototype);
extend(SmartPhone.prototype, GameConsole.prototype);

module.exports = SmartPhone;
