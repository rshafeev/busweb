
/**
 * Glocal variables:
 */

var busApp = null;

/**
 * Global functions
 */
function initialize(data) {
	busApp = new BusApp();
	busApp.main(data);
	selectbox_initialize();
};

function getApp() {
	return busApp;
};

$(document).ready(function() {
		});
