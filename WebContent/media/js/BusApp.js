
 
function BusApp(){

		
	this.map  = new BusMap(); 
	this.main = function(){
		this.map.init();
		this.loadCitiesToComboBox();
    };
	this.loadCitiesToComboBox = function(){
		for ( var i=0; i< citiesModel.cities.length; i++)
		{ 
			 $('<option  value='+citiesModel.cities[i].id+'>'+citiesModel.cities[i].name + '</option>').appendTo(".styled");
			 
		}
	};
};

function change_city(){
	var nameFromCombo =$(".styled").val();
	var city = null;
		for (var i=0; i< citiesModel.cities.length; i++){
			
			if (citiesModel.cities[i].id==nameFromCombo){
				city = citiesModel.cities[i];
				break;
			}
		}
		var latlon = new google.maps.LatLng (city.location.lat, city.location.lon);
		var myOptions = {
		    zoom:city.scale,
		    center: latlon,
		    mapTypeId: google.maps.MapTypeId.ROADMAP
		};

		map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
		
};

var geocoder;
var map;
var infowindow = new google.maps.InfoWindow()

function codeLatLng() {
	var lat = 50.031549;
	var lng = 36.206557;
  var latlng = new google.maps.LatLng(lat, lng);
  geocoder.geocode({'latLng': latlng}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      if (results[1]) {
        /*map.setZoom(city.scale);
        marker = new google.maps.Marker({
            position: latlng,
            map: map
        });
        infowindow.setContent(results[1].formatted_address);
        infowindow.open(map, marker);*/
    	  alert(results[0].formatted_address);
    	 /* alert(Status.code);*/
      } else {
        alert('No results found');
      }
    } else {
      alert('Geocoder failed due to: ' + status);
    }
  });
};

function wright_text_to ()
{
	$('.a-form-input__input').val($('.a-form-input__input').val() + 'insert address A');
	}

function wright_text_from ()
{
	$('.b-form-input__input').val($('.b-form-input__input').val() + 'insert address B');
	}
