var rschems = null;

function initialize() {
	rschems = new RSchems();
	rschems.main();
	on_right_panel_show();
};

function getRSchems() {
	return rschems;
};

/**
 * Events
 */

function on_right_panel_show() {
	if (getRSchems().rightPanelVisible == false) {
		$("#map_canvas").width('68%').css({
					cursor : "auto",
					backgroundColor : "rgb(226, 226, 226)"
				});
		document.img.src = contextPath + 'media/css/images/arrow_right.png';
		getRSchems().rightPanelVisible = true;
	} else {
		$("#map_canvas").width('98.5%').css({
					cursor : "auto",
					backgroundColor : "rgb(226, 226, 226)"
				});
		document.img.src = contextPath + 'media/css/images/arrow_left.png';
		getRSchems().rightPanelVisible = false;
		/*
		var map = getRSchems().getMap();
		if (map != null) {
			google.maps.event.trigger(map, 'resize');
		}
		 */

	}
}
