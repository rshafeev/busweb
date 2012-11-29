/*
 * WidgetEvents.js : event functions of the widgets
 */
function on_selectWay(way_ind, routeParts_arr) {
	getApp().getAppData().setCurrentWay(way_ind);
	var markerA = getApp().getGoogleMap().getMarkers().getMarkerA();
	var markerB = getApp().getGoogleMap().getMarkers().getMarkerB();

	var routeParts = [];
	for (var i = 0; i < routeParts_arr.length; i++) {
		routeParts.push({
					directRouteID : routeParts_arr[i][0],
					indexStart : routeParts_arr[i][1],
					indexFinish : routeParts_arr[i][2]
				});
	}
	var options = {
		routeParts : routeParts,
		pointA : {
			x : markerA.getPosition().lat(),
			y : markerA.getPosition().lng()
		},
		pointB : {
			x : markerB.getPosition().lat(),
			y : markerB.getPosition().lng()
		}
	};
	//console.log(options);
	$('#ajax_js').load( contextPath + "ways/load_way.json", {
				data : $.toJSON(options)
			});

	for (var i = 0; i < getApp().getAppData().getWaysCount(); i++) {
		var name = "#" + "res_text_" + i;
		var head = "#" + "result_numb_" + i;
		if (i == way_ind) {
			$(head).css('background', '#98CED8');
			$(name).show();

		} else {

			$(name).hide();
			$(head).css('background', '#00c3d1');
		}
	}
	$('#panel_scrollbar').tinyscrollbar_update();

};
function on_btn_calculate_click() {
	if (getApp().rightPanelVisible == false)
		on_right_panel_show();
	var el = document.getElementById('ways_panel');
	var findWaysOptions = getApp().createFindWaysOptionsModel();
	if (findWaysOptions == null)
		return;
	el.style.display = 'block';
	var loadGif = contextPath + "media/css/images/load.gif";
	$('#panel_data').html("<div class='loader_text'><img src='" + loadGif
			+ "'/></div>");
	$('#panel_scrollbar').tinyscrollbar_update();
	$('#panel_data').load(getApp().getContextPath() +"ways/find.json", {
				data : $.toJSON(findWaysOptions)
			});

}

function on_change_selectbox_city() {
	var nameFromCombo = $("#selectbox_city").val();
	document.location.href =  getApp().getContextPath() + 'home/' + nameFromCombo;
}

function on_btn_metro_click(e) {
	var g = e.getElementsByTagName('img');
	if (g[0].src.indexOf(contextPath + 'media/css/images/metro_selected.png') != -1)
		g[0].src = contextPath + 'media/css/images/metro.png';
	else
		g[0].src = contextPath + 'media/css/images/metro_selected.png';
};

function on_btn_bus_click(e) {
	var g = e.getElementsByTagName('img');
	if (g[0].src.indexOf(contextPath + 'media/css/images/bus_selected.png') != -1)
		g[0].src = contextPath + 'media/css/images/bus.png';
	else
		g[0].src = contextPath + 'media/css/images/bus_selected.png';
};

function on_btn_troll_click(e) {
	var g = e.getElementsByTagName('img');
	if (g[0].src.indexOf(contextPath + 'media/css/images/trol_selected.png') != -1)
		g[0].src = contextPath + 'media/css/images/trol.png';
	else
		g[0].src = contextPath + 'media/css/images/trol_selected.png';
};

function on_btn_tram_click(e) {
	var g = e.getElementsByTagName('img');
	if (g[0].src.indexOf('media/css/images/tram_selected.png') != -1)
		g[0].src = contextPath + 'media/css/images/tram.png';
	else
		g[0].src = contextPath + 'media/css/images/tram_selected.png';
};

function on_btn_auto_click(e) {
	var g = e.getElementsByTagName('img');
	if (g[0].src.indexOf(contextPath + 'media/css/images/auto.png') != -1)
		g[0].src = contextPath + 'media/css/images/auto_selected.png';
	else
		g[0].src = contextPath + 'media/css/images/auto.png';
};


function on_right_panel_show() {

	if (getApp().rightPanelVisible == false) {
		$("#map_canvas").width('68%').css({
					cursor : "auto",
					backgroundColor : "rgb(226, 226, 226)"
				});
		document.img.src = contextPath + 'media/css/images/arrow_right.png';
		getApp().rightPanelVisible = true;
	} else {
		$("#map_canvas").width('98.5%').css({
					cursor : "auto",
					backgroundColor : "rgb(226, 226, 226)"
				});
		document.img.src = contextPath + 'media/css/images/arrow_left.png';

		var map = getApp().getGoogleMap();
		if (map != null) {
			google.maps.event.trigger(map.getMapObj(), 'resize');
		}

		getApp().rightPanelVisible = false;
	}
}
