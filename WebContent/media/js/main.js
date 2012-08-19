
/**
 * Glocal variables:
 */

var busApp = null;

/**
 * Global functions
 */
function initialize() {
	busApp = new BusApp();
	busApp.main();
};

function getApp() {
	return busApp;
};

$(document).ready(function() {
		});
