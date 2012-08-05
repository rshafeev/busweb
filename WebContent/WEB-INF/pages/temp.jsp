<html> 
    <head> 
        <title>Example :: Spring Application</title> 
<link rel="stylesheet" type="text/css" href="css/mail_head1.css">
<link rel="stylesheet" type="text/css" href="css/mail_main.css">
<link rel="stylesheet" type="text/css" href="css/new.css">
<link rel="stylesheet" type="text/css" href="css/bus_styles.css">
<link rel="stylesheet" type="text/css" href="css/box.css">
<link rel="stylesheet" type="text/css" href="css/selectbox.css">
<link rel="stylesheet" type="text/css" href="css/all.css">

<script  src="css/jquery-1.3.2.min.js"></script>
<script  src="css/jquery.dynamicBlocks.js"></script>

<script type="text/javascript">
	$(document).ready(function(){
		$(document).mousedown(function(){$('.txt').hide()});
		
		$('#leftBlock').dynamicBlocks({
			opener:'a.opener',
			event:'click',
			duration:600
		});
		$('#topBlock').dynamicBlocks({
			opener:'a.opener',
			changeStyle:'top',
			setParam:'0',
			event:'click',
			duration:300
		});
		$('#rightBlock').dynamicBlocks({
			opener:'a.opener',
			changeStyle:'marginRight', 
			event:'move'
		});
	});
</script>
<!-- <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script src="css/selectbox.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.min.js" type="text/javascript"></script>
<script src="jquery.js" type="text/javascript"></script> -->
<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>
<script type="text/javascript" src="https://maps.google.com/maps/api/js?sensor=false"></script>
<script type="text/javascript">
	var geocoder;
	var map;
	function initialize() {
		geocoder = new google.maps.Geocoder();
		var latlng = new google.maps.LatLng(-34.397, 150.644);
		var myOptions = {
			zoom : 8,
			center : latlng,
			mapTypeId : google.maps.MapTypeId.ROADMAP
		}
		map = new google.maps.Map(document.getElementById("map_canvas"),
				myOptions);
	}

	function codeAddress() {
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
	}
</script>


<style type="text/css">
* {
	margin: 0;
	padding: 0;
}

html {
	height: 100%;
	overflow: hidden;
}

body {
	background: rgb(226, 226, 226); /* Old browsers */
	background: -moz-linear-gradient(top, rgba(226, 226, 226, 1) 0%,
		rgba(219, 219, 219, 1) 50%, rgba(209, 209, 209, 1) 51%,
		rgba(254, 254, 254, 1) 100% ); /* FF3.6+ */
	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(226,
		226, 226, 1) ), color-stop(50%, rgba(219, 219, 219, 1) ),
		color-stop(51%, rgba(209, 209, 209, 1) ),
		color-stop(100%, rgba(254, 254, 254, 1) ) ); /* Chrome,Safari4+ */
	background: -webkit-linear-gradient(top, rgba(226, 226, 226, 1) 0%,
		rgba(219, 219, 219, 1) 50%, rgba(209, 209, 209, 1) 51%,
		rgba(254, 254, 254, 1) 100% ); /* Chrome10+,Safari5.1+ */
	background: -o-linear-gradient(top, rgba(226, 226, 226, 1) 0%,
		rgba(219, 219, 219, 1) 50%, rgba(209, 209, 209, 1) 51%,
		rgba(254, 254, 254, 1) 100% ); /* Opera 11.10+ */
	background: -ms-linear-gradient(top, rgba(226, 226, 226, 1) 0%,
		rgba(219, 219, 219, 1) 50%, rgba(209, 209, 209, 1) 51%,
		rgba(254, 254, 254, 1) 100% ); /* IE10+ */
	background: linear-gradient(top, rgba(226, 226, 226, 1) 0%,
		rgba(219, 219, 219, 1) 50%, rgba(209, 209, 209, 1) 51%,
		rgba(254, 254, 254, 1) 100% ); /* W3C */
	filter: progid:DXImageTransform.Microsoft.gradient(       startColorstr='#e2e2e2',
		endColorstr='#fefefe', GradientType=0 ); /* IE6-9 */
	height: auto !important;
	height: 100%;
	min-height: 100%;
	position: relative;
}
.panel {
	padding: 20px;
	width: 250px;
	background: #eeeeee;
	border: #282828 2px solid;
	font-family: Georgia;
}
</style>
    </head> 
    <body> 
        <h1>Example - Spring Application</h1> 
        <p>This is my test.</p> 
        <div class="mytemp" style="background:green; height:500px; width:1200px; margin-left:50px;">
	<div id="main">
<div id="leftBlock" class="block">
	<div class="content">

	</div>
	<a href="#" class="opener">op</a>
</div>
</div>
</div>
    </body> 
</html>