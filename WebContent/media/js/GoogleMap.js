function GoogleMap() {
	this.markers = null;
	this.wayLines = null;
	this.stationMarkers = [];
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
	this.getMarkers = function() {
		return this.markers;
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

	this.deleteAllStations = function() {
		for (var i = 0; i < this.stationMarkers.length; i++) {
			 this.stationMarkers[i].setMap(null);
		}
		this.stationMarkers = [];
	};

	this.addStationMarker = function(direct_route_id,name,lat, lon) {
		var stationMarker = new google.maps.Marker({
					map : this.map
				});
		var pos = new google.maps.LatLng(lat, lon);
		stationMarker.setPosition(pos);
		this.stationMarkers.push(stationMarker);
		
		/*
		 * stationMarker.setOptions({ icon : this.marker_image_B });
		 */

	};
	
	this.addPolyline = function(direct_route_id,name,points){
		
	};
};
