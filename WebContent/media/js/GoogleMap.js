function GoogleMap() {
	this.markers = null;
	this.map = null;
	this.infowindow = new google.maps.InfoWindow();
	this.marker = null;

	this.init = function() {
		var latlng = new google.maps.LatLng(50, 36);
		var myOptions = {
			zoom : 8,
			center : latlng,
			mapTypeId : google.maps.MapTypeId.ROADMAP
		};
		this.map = new google.maps.Map(document.getElementById("map_canvas"),
				myOptions);

		google.maps.event.addListener(this.map, 'click', function(event) {
					console.log('clicked on the map');
				});

		this.markers = new Markers(this);
	};

	this.setCenter = function(scale, lat, lon) {
		this.map.center(new google.maps.LatLng(lat, lon));

	};

};
