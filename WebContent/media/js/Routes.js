function on_right_panel_show() {
	
	if (getApp().rightPanelVisible == false) {
		$("#map_canvas").width('68%').css({
					cursor : "auto",
					backgroundColor : "rgb(226, 226, 226)"
				});
		document.img.src = 'media/css/images/arrow_right.png';
		getApp().rightPanelVisible = true;
	} else {
		$("#map_canvas").width('98.5%').css({
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