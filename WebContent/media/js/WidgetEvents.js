/*
 * WidgetEvents.js : event functions of the widgets
 */

function on_btn_calculate_click() {
	if (getApp().rightPanelVisible == false)
		on_right_panel_show();

	var network = new Network();
	network.request_calculate();
}

function on_change_selectbox_city() {
	console.log("on_change_selectbox_city()");
	var nameFromCombo = $("#selectbox_city").val();
	var cities = getApp().getDataModel().cities;
	var city = null;

	for (var i = 0; i < cities.length; i++) {

		if (cities[i].id == nameFromCombo) {
			city = cities[i];
			break;
		}
	}
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
function on_right_panel_show() {
	if (getApp().rightPanelVisible == false) {
		$("#map_canvas").width('75%').css({
					cursor : "auto",
					backgroundColor : "rgb(226, 226, 226)"
				});
		document.img.src = 'media/images/arrow_right.png';
		getApp().rightPanelVisible = true;
	} else {
		$("#map_canvas").width('99%').css({
					cursor : "auto",
					backgroundColor : "rgb(226, 226, 226)"
				});
		document.img.src = 'media/images/arrow_left.png';
		getApp().rightPanelVisible = false;
	}
}
