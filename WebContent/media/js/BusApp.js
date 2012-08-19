

function BusApp() {

	this.map = new BusMap();
	this.main = function() {
		this.map.init();
		this.loadCitiesToComboBox();
	};
	this.loadCitiesToComboBox = function() {
		for (var i = 0; i < citiesModel.cities.length; i++) {
			$('<option  value=' + citiesModel.cities[i].id + '>'
					+ citiesModel.cities[i].name + '</option>')
					.appendTo("#comb");
		}
	};
};

function change_city() {

	/*console.log( $("#comb").val());*/
	var nameFromCombo = $("#comb").val();
	var city = null;
	for (var i = 0; i < citiesModel.cities.length; i++) {

		if (citiesModel.cities[i].id == nameFromCombo) {
			city = citiesModel.cities[i];
			break;
		}
	}
	/*alert(city.location.lon);*/
	var latlon = new google.maps.LatLng(city.location.lat, city.location.lon);

	var myOptions = {
		zoom : 8,
		center : latlon,
		mapTypeId : google.maps.MapTypeId.ROADMAP
	};

	map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

};
