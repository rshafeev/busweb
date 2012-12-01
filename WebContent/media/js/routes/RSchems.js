function RSchems() {
	this.rightPanelVisible = false;
	this.map = null;

	this.getMap = function() {
		return this.map;
	};

	this.main = function() {
		var T = this;
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

		/* $('#panel_scrollbar').tinyscrollbar_update(); */

	};

	
	/* this.getCurrentCity = function() { return this.data.currentCity; };*/
	 
	this.getCurrentCity = function() {
		var nameFromCombo = $("#selectbox_city").val();
		var cities = this.getDataModel().cities;
		var city = null;
		// console.log(cities);
		for ( var i = 0; i < cities.length; i++) {

			if (cities[i].id == nameFromCombo) {
				city = cities[i];
				break;
			}
		}
		return city;
	};

	/*this.loadCitiesToComboBox = function() {
		var defaultCity = getApp().getDataModel().defaultCity;
		for ( var i = 0; i < this.getDataModel().cities.length; i++) {
			if (defaultCity.id == this.getDataModel().cities[i].id) {
				$(
						'<option  selected="selected" value='
								+ this.getDataModel().cities[i].id + '>'
								+ this.getDataModel().cities[i].name
								+ '</option>').appendTo("#selectbox_city");
			} else {
				$(
						'<option  value=' + this.getDataModel().cities[i].id
								+ '>' + this.getDataModel().cities[i].name
								+ '</option>').appendTo("#selectbox_city");
			}
		}

	};*/

}