function RSchems() {
	this.rightPanelVisible = false;
	this.map = null;
	
	this.getMap = function() {
		return this.map;
	};
	
	this.main = function() {
		var T = this;
		$(window).bind("resize", function(e) {
					T.on_resize_window('#map_container', 134, 0);
				});
		var latlng = new google.maps.LatLng(-34.397, 150.644);
		var myOptions = {
			zoom : 5,
			center : latlng,
			mapTypeId : google.maps.MapTypeId.ROADMAP
		};
		this.map = new google.maps.Map(document.getElementById("map_canvas"),
				myOptions);
		this.map.setOptions({
					draggableCursor : 'crosshair',
					minZoom : 4
				});

		/*
		 * this.markers = new Markers(this); this.markers.initialize();
		 */
	};

	this.on_resize_window = function(block, headerHeight, footerHeight) {
		$(block).css('height',
				getWindowSize().height - headerHeight - footerHeight);
		if (this.map != null) {

			google.maps.event.trigger(this.map, 'resize');
		}

		/* $('#panel_scrollbar').tinyscrollbar_update(); */

	};
}