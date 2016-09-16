'use strict';

function Tablet () {
};

Tablet.prototype.touch = function(x, y) {
	return {x,y};
};

module.exports = Tablet;