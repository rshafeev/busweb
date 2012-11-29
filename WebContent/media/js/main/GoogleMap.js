function GoogleMap() {
	this.markers = null;
	this.wayLines = null;
	this.stationMarkers = [];
	this.polylines = [];
	this.map = null;

	this.init = function(currentCity) {
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
		stationMarker.set("route_id",direct_route_id);
		this.stationMarkers.push(stationMarker);
		
		/*
		 * stationMarker.setOptions({ icon : this.marker_image_B });
		 */

	};
	
	this.addPolyline = function(direct_route_id,points){
		var path = new google.maps.MVCArray();
		for(var i=0;i < points.length;i++){
			path.push(new google.maps.LatLng(points[i][0], points[i][1]));
		}
		var line = new google.maps.Polyline({
		map : this.map,
		path : path
		
		});
		line.set("route_id",direct_route_id);
		this.polylines.push(line);
	};
	
	this.deleteAllPolilines = function() {
		for (var i = 0; i < this.polylines.length; i++) {
			 this.polylines[i].setMap(null);
		}
		this.polylines = [];
	};
};
