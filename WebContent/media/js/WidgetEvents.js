/*
 * WidgetEvents.js : event functions of the widgets
 */

function on_btn_calculate_click() {
	if (getApp().rightPanelVisible == false)
		on_right_panel_show();
	$('#ways_panel').html("<div class='loader_div'><div class='loader_text'>Загрузка...</div></div>");
	$('#ways_panel').load("ways/find.json",{});
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
	if (g[0].src.indexOf('media/css/images/metro_selected.png') != -1)
		g[0].src = 'media/css/images/metro.png';
	else
		g[0].src = 'media/css/images/metro_selected.png';
};

function on_btn_bus_click(e) {
	var g = e.getElementsByTagName('img');
	if (g[0].src.indexOf('media/css/images/bus_selected.png') != -1)
		g[0].src = 'media/css/images/bus.png';
	else
		g[0].src = 'media/css/images/bus_selected.png';
};

function on_btn_troll_click(e) {
	var g = e.getElementsByTagName('img');
	if (g[0].src.indexOf('media/css/images/trol_selected.png') != -1)
		g[0].src = 'media/css/images/trol.png';
	else
		g[0].src = 'media/css/images/trol_selected.png';
};

function on_btn_tram_click(e) {
	var g = e.getElementsByTagName('img');
	if (g[0].src.indexOf('media/css/images/tram_selected.png') != -1)
		g[0].src = 'media/css/images/tram.png';
	else
		g[0].src = 'media/css/images/tram_selected.png';
};

function on_btn_auto_click(e) {
	var g = e.getElementsByTagName('img');
	if (g[0].src.indexOf('media/css/images/auto.png') != -1)
		g[0].src = 'media/css/images/auto_selected.png';
	else
		g[0].src = 'media/css/images/auto.png';
};
function on_right_panel_show() {
	if (getApp().rightPanelVisible == false) {
		$("#map_canvas").width('75%').css({
					cursor : "auto",
					backgroundColor : "rgb(226, 226, 226)"
				});
		document.img.src = 'media/css/images/arrow_right.png';
		getApp().rightPanelVisible = true;
	} else {
		$("#map_canvas").width('98%').css({
					cursor : "auto",
					backgroundColor : "rgb(226, 226, 226)"
				});
		document.img.src = 'media/css/images/arrow_left.png';

		var map = getApp().getGoogleMap();
		if (map != null) {
			google.maps.event.trigger(map.getMapObj(), 'resize');
		}

		getApp().rightPanelVisible = false;
	}
}




