
var rschems = null;

function initialize() {		
	rschems = new RSchems();
	rschems.main();
	selectbox_initialize();
	on_right_panel_show();
};

function getRSchems() {
	return rschems;
};

/**
 * Events
 */

function on_right_panel_show ()
{
	if (getRSchems().rightPanelVisible == false) {
		$("#map_canvas").width('68%').css({
					cursor : "auto",
					backgroundColor : "rgb(226, 226, 226)"
				});
		document.img.src = 'media/css/images/arrow_right.png';
		getRSchems().rightPanelVisible = true;
	} else {
		$("#map_canvas").width('98.5%').css({
					cursor : "auto",
					backgroundColor : "rgb(226, 226, 226)"
				});
		document.img.src = 'media/css/images/arrow_left.png';
		getRSchems().rightPanelVisible = false;
		
		var map = getRSchems().getMap();
		if (map != null) {
			google.maps.event.trigger(map, 'resize');
		}
		
	}
}



function on_change_selectbox_city() {
	//console.log("on_change_selectbox_city()");
	/*var city = getApp().getCurrentCity();
	if (city == null) {
		return;
	}
	var googleMap = getApp().getGoogleMap();
	googleMap.clearMap();
	googleMap.getMapObj().setOptions({
				draggableCursor : 'crosshair',
				minZoom : city.scale
			});*/
	//console.log(city);
	//googleMap.setCenter(city.scale, city.location.lat, city.location.lon);
	$('#editboxA').val('A');
	$('#editboxB').val('B');
}

function on_btn_arrow_click(e) {
	var g = e.getElementsByTagName('img');
	if (g[0].src.indexOf('media/css/images/arrow_down.png') != -1)
		//alert("gfhf");
		g[0].src = 'media/css/images/arrow_up.png';
	else
		//alert("no");
		g[0].src = 'media/css/images/arrow_down.png';
}