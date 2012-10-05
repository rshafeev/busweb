/*
 * WidgetEvents.js : event functions of the widgets
 */

function on_btn_calculate_click() {
	if (getApp().rightPanelVisible == false)
		on_right_panel_show();
	var el = document.getElementById('ways_panel');
	var findWaysOptions = getApp().createFindWaysOptionsModel();
	if (findWaysOptions == null)
		return;
	el.style.display = 'block';

	$('#ways_panel')
			.html("<div class='loader_div'><div class='loader_text'>Загрузка...</div></div>");
	$('#ways_panel').load("ways/find.json", {
				data : JSON.stringify(findWaysOptions)
			});
}

function on_change_selectbox_city() {
	console.log("on_change_selectbox_city()");
	var city = getApp().getCurrentCity();
	if (city == null) {
		return;
	}
	var googleMap = getApp().getGoogleMap();
	googleMap.clearMap();
	googleMap.getMapObj().setOptions({
				draggableCursor : 'crosshair',
				minZoom : city.scale
			});
	googleMap.setCenter(city.scale, city.location.lat, city.location.lon);
	$('#editboxA').val('');
	$('#editboxB').val('');
}

function on_btn_metro_click(e) {
	var g = e.getElementsByTagName('img');
	if (g[0].src.indexOf('media/images/metro_selected.png') != -1)
		g[0].src = 'media/images/metro.png';
	else
		g[0].src = 'media/images/metro_selected.png';
};

function on_btn_bus_click(e) {
	var g = e.getElementsByTagName('img');
	if (g[0].src.indexOf('media/images/bus_selected.png') != -1)
		g[0].src = 'media/images/bus.png';
	else
		g[0].src = 'media/images/bus_selected.png';
};

function on_btn_troll_click(e) {
	var g = e.getElementsByTagName('img');
	if (g[0].src.indexOf('media/images/trol_selected.png') != -1)
		g[0].src = 'media/images/trol.png';
	else
		g[0].src = 'media/images/trol_selected.png';
};

function on_btn_tram_click(e) {
	var g = e.getElementsByTagName('img');
	if (g[0].src.indexOf('media/images/tram_selected.png') != -1)
		g[0].src = 'media/images/tram.png';
	else
		g[0].src = 'media/images/tram_selected.png';
};

function on_btn_auto_click(e) {
	var g = e.getElementsByTagName('img');
	if (g[0].src.indexOf('media/images/auto.png') != -1)
		g[0].src = 'media/images/auto_selected.png';
	else
		g[0].src = 'media/images/auto.png';
};
function on_right_panel_show() {
	if (getApp().rightPanelVisible == false) {
		$("#map_canvas").width('75%').css({
					cursor : "auto",
					backgroundColor : "rgb(226, 226, 226)"
				});
		document.img.src = 'media/images/arrow_right.png';
		getApp().rightPanelVisible = true;
	} else {
		$("#map_canvas").width('98%').css({
					cursor : "auto",
					backgroundColor : "rgb(226, 226, 226)"
				});
		document.img.src = 'media/images/arrow_left.png';

		var map = getApp().getGoogleMap();
		if (map != null) {
			google.maps.event.trigger(map.getMapObj(), 'resize');
		}

		getApp().rightPanelVisible = false;
	}
}
