function GoogleMap() {
	this.markers = null;
	this.map = null;

	this.init = function() {
		var defaultCity = getApp().getDataModel().defaultCity;
		var latlng = new google.maps.LatLng(defaultCity.location.lat,
				defaultCity.location.lon);
		var myOptions = {
			zoom : defaultCity.scale,
			center : latlng,
			mapTypeId : google.maps.MapTypeId.ROADMAP
		};
		this.map = new google.maps.Map(document.getElementById("map_canvas"),
				myOptions);
		this.map.setOptions({
					draggableCursor : 'crosshair',
					minZoom : defaultCity.scale
				});

		this.markers = new Markers(this);
		this.markers.initialize();

	};

	this.setCenter = function(scale, lat, lon) {
		if (this.map != null) {
			this.map.setCenter(new google.maps.LatLng(lat, lon));
			this.map.setZoom(scale);
		}
	};

	this.getMapObj = function() {
		return this.map;
	};

	this.clearMap = function() {
		this.markers.deleteMarkers();
	};
};
