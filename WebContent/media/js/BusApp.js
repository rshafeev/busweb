
/*
 * use(GoogleMap.js)
 * 
 */

function BusApp() {

	this.googleMap = null;
	this.rightPanelVisible = false;

	this.main = function() {
		console.log("busApp : main()");
		this.on_resize_window('#container', 163, 3);
		var T = this;
		$(window).bind("resize", function(e) {
					T.on_resize_window('#container', 163, 3);
				});
		this.googleMap = new GoogleMap();
		this.googleMap.init();

		this.loadCitiesToComboBox();
	};
	this.getDataModel = function() {
		return basicModel;
	};
	this.getGoogleMap = function() {
		return this.googleMap;
	};
	this.loadCitiesToComboBox = function() {
		console.log("busApp: loadCitiesToComboBox()");
		console.log(this.getDataModel().cities.length);
		var defaultCity = getApp().getDataModel().defaultCity;
		for (var i = 0; i < this.getDataModel().cities.length; i++) {
			if (defaultCity.id == this.getDataModel().cities[i].id) {
				$('<option  selected="selected" value='
						+ this.getDataModel().cities[i].id + '>'
						+ this.getDataModel().cities[i].name + '</option>')
						.appendTo("#selectbox_city");
			} else {
				$('<option  value=' + this.getDataModel().cities[i].id + '>'
						+ this.getDataModel().cities[i].name + '</option>')
						.appendTo("#selectbox_city");
			}
		}

	};

	this.getCodeAddress = function(lat, lon, respone_call_func) {
		var latlng = new google.maps.LatLng(lat, lon);
		var geocoder = new google.maps.Geocoder();
		geocoder.geocode({
					'latLng' : latlng
				}, function(results, status) {
					if (status == google.maps.GeocoderStatus.OK) {
						if (results[1]) {
							respone_call_func(getShortAddress(results[0].formatted_address));
						} else {
							console.log('No results found');
							respone_call_func(null);
						}
					} else {
						respone_call_func(null);
						//console.log('Geocoder failed due to: ' + status);
					}
				});
	};

	this.on_resize_window = function(block, headerHeight, footerHeight) {
		var windowHeight = $(window).height();
		$(block).css('height', windowHeight - headerHeight - footerHeight);
		var map = getApp().getGoogleMap();
		if (map != null) {
			//qx.html.Element.flush();
			google.maps.event.trigger(map.getMapObj(), 'resize');
		}

	};

};
