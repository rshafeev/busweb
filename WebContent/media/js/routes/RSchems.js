function RSchems() {
	this.data = null;
	this.rightPanelVisible = false;
	this.map = null;

	this.getMap = function() {
		return this.map;
	};

	this.main = function(data) {
		this.data = data;
		var T = this;
		$('#right_routes_column_scrollbar').tinyscrollbar();	
		$(window).bind("resize", function(e) {
			T.on_resize_window('#map_container', 134, 0);
		});
		var latlng = new google.maps.LatLng(currentCity.location.lat,
				currentCity.location.lon);
		var myOptions = {
			zoom : currentCity.scale,
			center : latlng,
			mapTypeId : google.maps.MapTypeId.ROADMAP
		};
		this.map = new google.maps.Map(document.getElementById("map_canvas"),
				myOptions);
		this.map.setOptions({
					draggableCursor : 'crosshair',
					minZoom : currentCity.scale
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

		 $('#right_routes_column_scrollbar').tinyscrollbar_update();

	};

	
	this.getCurrentCity = function() {
		return this.data.currentCity;
	};


}