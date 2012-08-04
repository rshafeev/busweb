var marker_image_A;
var marker_image_B;
var marker_A;
var marker_B;
var curr_image;
var geocoder;
var map;
var drawingManager;
function setMarkerA(new_marker){
     drawingManager.markerOptions = {icon:image=marker_image_B};
     if(marker_A!=null)
	marker_A.setMap(null);
     marker_A = new_marker;
     console.log('MarkerA was setup',marker_A.getPosition());
  }
function setMarkerB(new_marker){
      drawingManager.markerOptions = {icon:image=marker_image_A};
      if(marker_B!=null)
	marker_B.setMap(null);
      marker_B = new_marker;
 console.log('MarkerB was setup',marker_B.getPosition());
}

function init()
{
	marker_image_A=new google.maps.MarkerImage('from_ru.png');
	marker_image_B=new google.maps.MarkerImage('to_ru.png');
	curr_image = marker_image_A;
}

function initialize() {
	geocoder = new google.maps.Geocoder();
	var latlng = new google.maps.LatLng(50, 36);
	var myOptions = {
		zoom : 8,
		center : latlng,
		mapTypeId : google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById("map_canvas"),
			myOptions); 
	drawingManager = new google.maps.drawing.DrawingManager
	({
	      drawingControl: false,
	      drawingControlOptions: {
	      position: google.maps.ControlPosition.TOP_RIGHT,
	      drawingModes: [google.maps.drawing.OverlayType.MARKER]
	      },
	      drawingMode: google.maps.drawing.OverlayType.MARKER,
	      markerOptions: {
	      	  icon: image =  new google.maps.MarkerImage('from_ru.png')
	      },
	      
	});
	drawingManager.setMap(map);
	google.maps.event.addListener(drawingManager, 'markercomplete', function(marker) {
	      //console.log(marker.getPosition().toString())
	});

	google.maps.event.addListener(drawingManager, 'overlaycomplete', function(event) {
	      if (event.type == google.maps.drawing.OverlayType.MARKER) {
	      	    if(curr_image == marker_image_A){
		      setMarkerA(event.overlay);
		      curr_image = marker_image_B;
 		    }
		    else
		    if(curr_image == marker_image_B){
		      setMarkerB(event.overlay);
		      curr_image = marker_image_A;
		  }
		
	      }
	});
	  google.maps.event.addListener(map, 'click', function(event) {
	    	  console.log('clicked on the map')
	    //placeMarker(event.latLng);moremaker(event.latLng);
	  });
	init();
}

