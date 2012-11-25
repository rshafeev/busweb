
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
	selectbox_initialize();
};

function getApp() {
	return busApp;
};

$(document).ready(function() {
		});
