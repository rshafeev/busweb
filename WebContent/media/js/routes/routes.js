var rschems = null;

function initialize() {

	rschems = new RSchems();
	rschems.main();
	selectbox_initialize();
	on_right_panel_show(this.document);

};

function getRSchems() {
	return rschems;
};

/**
 * Events
 */

function on_right_panel_show(e) {
	var img = null;
	if (e != undefined)
		img = document.getElementsByName('img_panel');
	if (getRSchems().rightPanelVisible == false) {
		getRSchems().rightPanelVisible = true;
		$("#map_canvas").width('68%').css({
			cursor : "auto",
			backgroundColor : "rgb(226, 226, 226)"
		});
		img[0].src = getContextPath() + "media/css/images/arrow_right.png";

	} else {
		getRSchems().rightPanelVisible = false;
		$("#map_canvas").width('98.5%').css({
			cursor : "auto",
			backgroundColor : "rgb(226, 226, 226)"
		});
		console.log(getContextPath() + "media/css/images/arrow_left.png");
		img[0].src = (getContextPath() + "media/css/images/arrow_left.png");

		var map = getRSchems().getMap();
		if (map != null) {
			google.maps.event.trigger(map, 'resize');
		}

	}
}

function on_change_selectbox_city() {
	var nameFromCombo = $("#selectbox_city").val();
	document.location.href = getContextPath() + 'routes/' + nameFromCombo;
}

function on_btn_arrow_click(e) {
	var g = e.getElementsByTagName('img');
	if (g[0].src.indexOf(contextPath + 'media/css/images/arrow_down.png') != -1)
		// alert("gfhf");
		g[0].src = contextPath + 'media/css/images/arrow_up.png';
	else
		// alert("no");
		g[0].src = contextPath + 'media/css/images/arrow_down.png';
}