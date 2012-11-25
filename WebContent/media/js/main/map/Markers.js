function Markers(busMap) {
	var T = this;
	this.busMap = busMap;
	this.marker_A = null;
	this.marker_B = null;
	this.marker_image_A = null, this.marker_image_B = null,

	/**
	 * Methods
	 */
	this.getMarkerA = function() {
		return this.marker_A;
	};
	this.getMarkerB = function() {
		return this.marker_B;
	};
	this.setMarkerA = function(lat, lon) {
		var pos = new google.maps.LatLng(lat, lon);
		if (this.marker_A == null) {
			this.marker_A = new google.maps.Marker({
						map : this.busMap.getMapObj()
					});
			this.marker_A.setDraggable(true);
			this.marker_A.setOptions({
						icon : this.marker_image_A
					});
			google.maps.event.addListener(this.marker_A, 'dragend',
					T.on_change_markerA);
		}
		this.marker_A.setPosition(pos);

		this.on_change_markerA({
					latLng : pos
				});

	};

	this.setMarkerB = function(lat, lon) {
		var pos = new google.maps.LatLng(lat, lon);
		if (this.marker_B == null) {
			this.marker_B = new google.maps.Marker({
						map : this.busMap.getMapObj()
					});
			this.marker_B.setDraggable(true);
			this.marker_B.setOptions({
						icon : this.marker_image_B
					});
			google.maps.event.addListener(this.marker_B, 'dragend',
					T.on_change_markerB);
		}
		this.marker_B.setPosition(pos);
		this.on_change_markerB({
					latLng : pos
				});
	};

	this.initialize = function() {
		var map = this.busMap.getMapObj();
		this.marker_image_A = new google.maps.MarkerImage('media/css/images/from_ru.png');
		this.marker_image_B = new google.maps.MarkerImage('media/css/images/to_ru.png');

		google.maps.event.addListener(map, 'click', function(e) {
					//console.log('clicked on the map');
					var lat = e.latLng.lat();
					var lon = e.latLng.lng();

					if (T.marker_A == null)
						T.setMarkerA(lat, lon);
					else if (T.marker_B == null)
						T.setMarkerB(lat, lon);
				});
	};

	/**
	 * Events
	 */

	this.on_change_markerA = function(e) {
		getApp().getCodeAddress(e.latLng.lat(), e.latLng.lng(), function(text) {
					if (text == null)
						return null;
					//console.log(text);
					$('#editboxA').val(text);

				});

	};
	this.on_change_markerB = function(e) {
		getApp().getCodeAddress(e.latLng.lat(), e.latLng.lng(), function(text) {
					if (text == null)
						return null;
					//console.log(text);
					$('#editboxB').val(text);
				});

	};

	this.deleteMarkers = function(e) {
		if (this.marker_A != null) {
			this.marker_A.setMap(null);
			this.marker_A = null;
		}
		if (this.marker_B != null) {
			this.marker_B.setMap(null);
			this.marker_B = null;
		}

	};

};
