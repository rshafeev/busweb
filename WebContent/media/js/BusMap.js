function BusMap() {
	this.markers = null;
	this.map = null;
	
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
	
		google.maps.event.addListener(this.map, 'click', function(event) {
			console.log('clicked on the map');
			});
			
		this.markers = new MArkers(this);
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

