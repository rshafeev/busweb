<%@ tag body-content="empty"%>
<%@ attribute name="head" required="true" fragment="true"%>
<%@ attribute name="content" required="true" fragment="true"%>
<%@ attribute name="foot" required="true" fragment="true"%>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" type="text/css" href="css/mail_head1.css">
<link rel="stylesheet" type="text/css" href="css/mail_main.css">
<link rel="stylesheet" type="text/css" href="css/new.css">
<link rel="stylesheet" type="text/css" href="css/bus_styles.css">
<link rel="stylesheet" type="text/css" href="css/box.css">
<link rel="stylesheet" type="text/css" href="css/selectbox.css">
<link rel="stylesheet" type="text/css" href="css/all.css">

<!-- <script  src="css/jquery-1.3.2.min.js"></script>
<script  src="css/jquery.dynamicBlocks.js"></script> -->

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script> 
<script src="css/js/selectbox.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.min.js" type="text/javascript"></script>
<script src="jquery.js" type="text/javascript"></script> 


<script type="text/javascript" src="css/js/prototype.js"></script>
<script type="text/javascript" src="css/js/scriptaculous.js?load=effects"></script>
<script type="text/javascript" src="css/js/testScale.js"></script> 


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
			event:'click',
			duration:600
		});
	});
</script>

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
#textBlock {
	font-size: 100%;
	font-family: Verdana, sans-serif;
	color: #eff5ff;
	background-color: #484e58;
	width: 30%;
	margin: auto;
	position: absolute;
}

</style>

</head>

<body onload="initialize()" onunload="GUnload()">
	<div class="main-wrap clearfix">
		<div class="portal-headline">
			<div class="header">
				<div class="block_header">
					<jsp:invoke fragment="head" />
					<div class="logotip">
						
					</div>
				</div>
			</div>
			<div class="slider2">
				<div class="transparent">
					<div class="block-round-content">
						<table class="menu_table" cellpadding="10" cellspacing="10">
							<tbody>
								<tr>
									<td style="width: 171px;">
										<div class="mini_table_town">
											<div class="mini_table_town_center">
												<div class="mini_table-town_top"
													style="margin-top: -5px; position: absolute; margin-left: 20px; height: 18px; border-bottom: 1px dotted grey;">
													<p style="font: normal normal 400 11px/21px Arial;">
														<b>CITY:</b>
												</p>
												</div>
												<form name="testform">
													<select class="styled" name="websites" size="1"
														id="address" onChange="codeAddress()">
														<option selected value="Kharkov">Kharkov</option>
														<option value="Kiev">Kiev</option>
														<option value="Doneck">Doneck</option>
													</select>
												</form>
											</div>
										</div>
									</td>

									<td style="width: 215px;">
										<div class="mini_table_route">
											<div class="mini_table_route_center">
												<div class="mini_table-route_top"
													style="margin-top: -5px; position: absolute; margin-left: 20px; height: 18px; border-bottom: 1px dotted grey;">
													<p style="font: normal normal 400 11px/21px Arial;">
														<b>TRAVEL LINE:</b>
													</p>
												</div>
												<table class="b-search__points">
													<tbody>
														<tr>
															<td class="b-search__point-name">
																<div class="A_search"
																	style="width: 15px; height: 15px; background-color: #96C93F; border-radius: 20px; margin-top: 10px;">
																	<p style="margin-left: 3px; font-size: 11px;">A</p>

																	
																</div>
																</td>
															<td class="b-search__point-input"><span
																class="b-form-input__box"> <input
																	style="margin-bottom: 2px; margin-top: 15px; width: 200px;"></input>

															</span></td>
														</tr>
														<tr class="b-search__point">
															<td class="b-search__point-name">
																<div class="B_search"
																	style="width: 15px; height: 15px; background-color: #2A98D5; border-radius: 20px;">
																	<p style="margin-left: 3px; font-size: 11px;">B</p>

																	
																</div>
															</td>
															<td class="b-search__point-input"><span
																class="b-form-input__box"> <input
																	class="b-form-input__input" id="uniq162"
																	autocomplete="off"
																	style="margin-bottom: 5px; width: 200px;"></input></span></td>
														</tr>
													</tbody>
												</table>
											</div>

										</div>
									</td>

									<td style="width: 145px;">
										<div class="mini_table_transp">
											<div class="mini_table_transp_center">
												<div class="mini_table-transp_top"
													style="margin-top: -5px; position: absolute; margin-left: 15px;">
													<p
														style="font: normal normal 400 11px/21px Arial; height: 18px; border-bottom: 1px dotted grey;">
														<b>TRANSPORT TYPE:</b>
													</p>
												</div>
												<div class="mini_table_transp_temp" style="height: 20px;"></div>
												<table align="center"
													style="margin-top: 5px; margin-left: 3px; margin-right: 3px;">

													<tr>
														<a href="#"
															onClick="document.myImage1.src='css/images/metro.png'"
															onMouseDown="document.myImage1.src='css/images/metro_selected.png'">
															<img src="css/images/metro_selected.png" name="myImage1"
															width=30 height=30 border=0>
														</a>

														<a href="#"
															onClick="document.myImage2.src='css/images/bus.png'"
															onMouseDown="document.myImage2.src='css/images/bus_selected.png'">
															<img src="css/images/bus_selected.png" name="myImage2"
															width=30 height=30 border=0>
														</a>

														<a href="#"
															onClick="document.myImage3.src='css/images/tram.png'"
															onMouseDown="document.myImage3.src='css/images/tram_selected.png'">
															<img src="css/images/tram_selected.png" name="myImage3"
															width=30 height=30 border=0>
														</a>

														<a href="#"
															onClick="document.myImage4.src='css/images/trol.png'"
															onMouseDown="document.myImage4.src='css/images/trol_selected.png'">
															<img src="css/images/trol_selected.png" name="myImage4"
															width=30 height=30 border=0>
														</a>
													</tr>
												</table>
											</div>
										</div>

									</td>

									<td style="width: 170px;">
										<div class="mini_table_marsh">
											<div class="mini_table_marsh_center">
												<div class="mini_table_marsh_top"
													style="margin-top: -5px; position: absolute; margin-left: 610px; height: 18px; border-bottom: 1px dotted grey;">
													<p style="font: normal normal 400 11px/21px Arial;">
														<b>OPTIONS:</b>
													</p>
												</div>
												<div class="mini_table_transp_temp" style="height: 5px;"></div>
												<div class="mini_temp" style="height:8px;"></div>
												<input type="radio" name="labeled" value="1" id="labeled_1" style="margin-left:5px;"></input>
												<label for="labeled_1" style="font-size: 12px; ">Optimal</label>
	
												<div class="mini_temp" style="height:1px;"></div>
												<input type="radio" name="labeled" value="2" id="labeled_2"
													style="margin-left:5px;"></input>
													<label for="labeled_2" style="font-size: 12px; ">Fast</label>
													
													<div class="mini_temp" style="height:1px;"></div>
													<input type="radio" name="labeled" value="3" id="labeled_3" style="margin-left:5px;"></input>
													<label for="labeled_3" id="labeled_3" style="font-size: 12px; ">Cheep</label><br>
											</div>
										</div>
									</td>
									<td>
										<button style="width: 120px; height: 40px; margin-left: 50px;"
											type="submit" class="button" id="zoomOutX" onclick="zoomOutX('map_canvas'); var el = document.getElementById('test'); el.style.display = (el.style.display == 'block') ? 'none' : 'block';" >Calculate</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<span class="r4"></span><span class="r3"></span><span class="r2"></span><span
						class="r1"></span>
				</div>
			</div>
		</div>
		
		<div class="temp">				
		<jsp:invoke fragment="content" />
		</div>
<div class="footer" >

<jsp:invoke fragment="foot" />
</div>

</div>
</body>
</html>