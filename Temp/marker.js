	var marker_image_A;
	var marker_image_B;
function init()
{
	var marker_image_A='http://www.eway.in.ua/images/from_ru.png';
	var marker_image_B='http://www.eway.in.ua/images/to_ru.png';
}

var geocoder;
var map;
function initialize() {
	geocoder = new google.maps.Geocoder();
	var latlng = new google.maps.LatLng(56.8848, 14.7730);
	var myOptions = {
		zoom : 8,
		center : latlng,
		mapTypeId : google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById("map_canvas"),
			myOptions);
	var drawingManager = new google.maps.drawing.DrawingManager/*тут задаются параметры для вывода маркеров*/
	({
	      drawingControl: true,
	      drawingControlOptions: {
	      position: google.maps.ControlPosition.TOP_CENTER,
	      drawingModes: [google.maps.drawing.OverlayType.MARKER]
	      },
	      drawingMode: google.maps.drawing.OverlayType.MARKER,
	      markerOptions: {
	      	  icon: image =  new google.maps.MarkerImage('http://www.eway.in.ua/images/from_ru.png') /*тут вид иконки, какой хочешь рисуночек, вот сюда надо как-то передать функцией нужную картинку, а как это сделать я не знаю :(*/
	      },
	      
	});
	drawingManager.setMap(map);
	google.maps.event.addListener(drawingManager, 'markercomplete', function(marker) {
	      console.log(marker.getPosition().toString())
	});

	google.maps.event.addListener(drawingManager, 'overlaycomplete', function(event) {
	      if (event.type == google.maps.drawing.OverlayType.MARKER) {
	      	  console.log('Установлен маркер')
	      }
	});
	  google.maps.event.addListener(map, 'click', function(event) {
	    placeMarker(event.latLng);moremaker(event.latLng);
	  });

	/*function codeAddress() {
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
};*/

}

