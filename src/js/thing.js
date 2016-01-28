var fm = require('./fm');
var throttle = require('./throttle');

function resize() {
	fm.resize();
}

var throttleResize = throttle(resize, 1000);

$(document).ready(function () {
	resize()
	$(window).resize(throttleResize);
	window.setInterval(throttleResize, 1000);
});
