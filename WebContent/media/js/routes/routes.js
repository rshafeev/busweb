





/**
 * Events
 */

function on_right_panel_show ()
{
	/*this.rightPanelVisible = false;*/
	if (this.rightPanelVisible == false) {
		$("#map_canvas").width('68%').css({
					cursor : "auto",
					backgroundColor : "rgb(226, 226, 226)"
				});
		document.img.src = 'media/css/images/arrow_right.png';
		this.rightPanelVisible = true;
	} else {
		$("#map_canvas").width('98.5%').css({
					cursor : "auto",
					backgroundColor : "rgb(226, 226, 226)"
				});
		document.img.src = 'media/css/images/arrow_left.png';
/*
		var map = getApp().getGoogleMap();
		if (map != null) {
			google.maps.event.trigger(map.getMapObj(), 'resize');
		}*/
	
		this.rightPanelVisible = false;
	}
}