function Markers(busMap) {
	this.busMap = busMap;
	this.marker_image_A = null;
	this.marker_image_B = null;
	this.marker_A = null;
	this.marker_B = null;
	this.curr_image = null;
	this.geocoder = null;
	this.setMarkerA = function(new_marker) {
		this.drawingManager.markerOptions = {
			icon : image = this.marker_image_B
		};
		if (this.marker_A != null)
			this.marker_A.setMap(null);
		this.marker_A = new_marker;
		console.log('MarkerA was setup', this.marker_A.getPosition());
	};
	this.setMarkerB = function(new_marker) {
		this.drawingManager.markerOptions = {
			icon : image = this.marker_image_A
		};
		if (this.marker_B != null)
			this.marker_B.setMap(null);
		this.marker_B = new_marker;
		console.log('MarkerB was setup', this.marker_B.getPosition());
	};

	this.markers_init = function() {
		this.marker_image_A = new google.maps.MarkerImage('http://www.eway.in.ua/images/from_ru.png');
		this.marker_image_B = new google.maps.MarkerImage('http://www.eway.in.ua/images/to_ru.png');
		this.curr_image = this.marker_image_A;
	};

	this.init = function() {
		geocoder = new google.maps.Geocoder();
		var latlng = new google.maps.LatLng(50, 36);
		var myOptions = {
			zoom : 8,
			center : latlng,
			mapTypeId : google.maps.MapTypeId.ROADMAP
		};
		this.map = new google.maps.Map(document.getElementById("map_canvas"),
				myOptions);
		this.drawingManager = new google.maps.drawing.DrawingManager({
			drawingControl : false,
			drawingControlOptions : {
				position : google.maps.ControlPosition.TOP_RIGHT,
				drawingModes : [google.maps.drawing.OverlayType.MARKER]
			},
			drawingMode : google.maps.drawing.OverlayType.MARKER,
			markerOptions : {
				icon : image = new google.maps.MarkerImage('http://www.eway.in.ua/images/from_ru.png')
			}

		});
		this.drawingManager.setMap(this.map);
		google.maps.event.addListener(this.drawingManager, 'markercomplete',
				function(marker) {
					// console.log(marker.getPosition().toString())
				});

		google.maps.event.addListener(this.drawingManager, 'overlaycomplete',
				function(event) {
					if (event.type == google.maps.drawing.OverlayType.MARKER) {
						if (T.curr_image == T.marker_image_A) {
							T.setMarkerA(event.overlay);
							T.curr_image = T.marker_image_B;
						} else if (T.curr_image == T.marker_image_B) {
							T.setMarkerB(event.overlay);
							T.curr_image = T.marker_image_A;
						}

					}
				});

		google.maps.event.addListener(this.map, 'click', function(event) {
			console.log('clicked on the map');
				// placeMarker(event.latLng);moremaker(event.latLng);
			});
		this.markers_init();
	};

	this.codeAddress = function() {
		var address = document.getElementById("address").value;
		geocoder.geocode({
					'address' : address
				}, function(results, status) {
					if (status == google.maps.GeocoderStatus.OK) {
						map.setCenter(results[0].geometry.location);
					} else {
						alert("Geocode was not successful for the following reason: "
								+ status);
					}
				});
	};

};

