'use strict';
var Watch = require('./Watch.js');
var Tablet = require('./Tablet.js');

function SmartWatch () {
	Watch.call(this);
};

SmartWatch.prototype = Object.create(Watch.prototype, {
	constructor : SmartWatch
});

function extend(destination, source) {
  for (var k in source) {
    destination[k] = source[k];
  }
  return destination; 
};


extend(SmartWatch.prototype, Tablet.prototype);


module.exports = SmartWatch;
