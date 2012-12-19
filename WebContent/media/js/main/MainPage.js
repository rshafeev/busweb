/*
 * #use(GoogleMap.js)
 * 
 */

function MainPage() {
	this.data = null;
	this.mainPageData = null;
	this.googleMap = null;
	this.rightPanelVisible = false;
	this.main = function(data) {
		this.data = data;
		this.mainPageData = new MainPageData();

		$('#panel_scrollbar').tinyscrollbar();
		this.on_resize_window('#map_container', 134, 0);
		var T = this;
		$(window).bind("resize", function(e) {
			T.on_resize_window('#map_container', 134, 0);
		});
		this.googleMap = new GoogleMap();

		this.googleMap.init(data.currentCity);

		//this.loadCitiesToComboBox();

	};

	this.createFindWaysOptionsModel = function() {
		var city = this.getCurrentCity();
		if (city == null)
			return null;
		var markerA = this.googleMap.getMarkers().getMarkerA();
		var markerB = this.googleMap.getMarkers().getMarkerB();
		if (markerA == null || markerB == null) {
			alert('Пожалуйста, задайте начальную и конечную точку');
			return null;
		}
		var alg_type = 'c_cost';
		//console.log(city);
		var opts = {
			city_id : city.id,
			p1 : {
				x : markerA.getPosition().lat(),
				y : markerA.getPosition().lng()
			},
			p2 : {
				x : markerB.getPosition().lat(),
				y : markerB.getPosition().lng()
			},
			day_id : 'c_Sunday',
			time_start_hours : 10,
			time_start_minutes : 0,
			alg_strategy : alg_type,
			usage_routeTypes : [ {
				discount : 1.0,
				route_type_id : "c_route_station_input"
			}, {
				discount : 1.0,
				route_type_id : "c_route_station_output"
			}, {
				discount : 1.0,
				route_type_id : "c_route_transition"
			}, {
				discount : 0.5,
				route_type_id : "c_route_metro"
			}, {
				discount : 1.0,
				route_type_id : "c_route_bus"
			}, {
				discount : 1.0,
				route_type_id : "c_route_trolley"
			} ]

		};
		return opts;

	};
	this.getCurrentCity = function() {
		return this.data.currentCity;
	};

	this.getMainPageData = function() {
		return this.mainPageData;
	};

	this.getGoogleMap = function() {
		return this.googleMap;
	};
	this.loadCitiesToComboBox = function() {
		var defaultCity = getApp().getDataModel().defaultCity;
		for ( var i = 0; i < this.getDataModel().cities.length; i++) {
			if (defaultCity.id == this.getDataModel().cities[i].id) {
				$('<option  selected="selected" value=' + this.getDataModel().cities[i].id + '>' + this.getDataModel().cities[i].name + '</option>')
						.appendTo("#selectbox_city");
			} else {
				$('<option  value=' + this.getDataModel().cities[i].id + '>' + this.getDataModel().cities[i].name + '</option>').appendTo(
						"#selectbox_city");
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
					//console.log('No results found');
					respone_call_func(null);
				}
			} else {
				respone_call_func(null);
				//console.log('Geocoder failed due to: ' + status);
			}
		});
	};

	this.on_resize_window = function(block, headerHeight, footerHeight) {
		$(block).css('height', getWindowSize().height - headerHeight - footerHeight);

		var map = this.getGoogleMap();
		if (map != null) {

			google.maps.event.trigger(map.getMapObj(), 'resize');
		}

		$('#panel_scrollbar').tinyscrollbar_update();

	};

};
