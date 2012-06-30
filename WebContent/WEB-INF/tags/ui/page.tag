<%@ tag body-content="empty"%>
<%@ attribute name="head" required="true" fragment="true"%>
<%@ attribute name="content" required="true" fragment="true"%>
<%@ attribute name="foot" required="true" fragment="true"%>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" type="text/css" href="css/head.css">
<link rel="stylesheet" type="text/css" href="css/body.css">
<link rel="stylesheet" type="text/css" href="css/foot.css">


<script
	src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script src="css/js/selectbox.js"></script>
<script
	src="http://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.min.js"
	type="text/javascript"></script>
<script src="jquery.js" type="text/javascript"></script>


<script type="text/javascript" src="css/js/prototype.js"></script>
<script type="text/javascript"
	src="css/js/scriptaculous.js?load=effects"></script>
<script type="text/javascript" src="css/js/testScale.js"></script>


<script type="text/javascript">
	$(document).ready(function() {
		$(document).mousedown(function() {
			$('.txt').hide()
		});

		$('#leftBlock').dynamicBlocks({
			opener : 'a.opener',
			event : 'click',
			duration : 600
		});
		$('#topBlock').dynamicBlocks({
			opener : 'a.opener',
			changeStyle : 'top',
			setParam : '0',
			event : 'click',
			duration : 300
		});
		$('#rightBlock').dynamicBlocks({
			opener : 'a.opener',
			changeStyle : 'marginRight',
			event : 'click',
			duration : 600
		});
	});
</script>

<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
<script type="text/javascript"
	src="http://maps.google.com/maps/api/js?sensor=false"></script>
<script type="text/javascript"
	src="https://maps.google.com/maps/api/js?sensor=false"></script>
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

<style>
* {
	margin: 0;
	padding: 0;
}

html {
	height: 100%;
	overflow: hidden;
}
</style>

<script>
	function click_ot() {
		document.images["img"].src = 'css/images/metro.png';
	}
</script>

<script>
	function click_out() {
		document.images["img"].src = 'css/images/metro_selected.png';
	}
</script>


</head>

<body onload="initialize()" onunload="GUnload()">
	<div class="main-wrap clearfix">
		<div class="portal-headline">
			<div class="header">
				<div class="block_header">
					<jsp:invoke fragment="head" />
					<div class="logotip"></div>
				</div>
			</div>
			<div class="slider2">
				<div class="transparent">
					<div class="block-round-content">
						<table class="menu_table" style="margin-top: 5px;"
							cellpadding="10" cellspacing="10">
							<tbody>
								<tr>
									<td style="width: 171px;">
										<div class="mini_table_town">
											<div class="mini_table_town_center">
												<div class="mini_table-town_top"
													style="margin-top: -3px; position: absolute; margin-left: 65px; height: 18px;">
													<p style="font: normal normal 400 11px/21px Arial;">
														<b>C I T Y :</b>
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
													style="margin-top: -3px; position: absolute; margin-left: 50px; height: 18px;">
													<p style="font: normal normal 400 11px/21px Arial;">
														<b>T R A V E L </b> <b style="margin-left: 10px;">L I
															N E :</b>
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
													style="margin-top: -3px; position: absolute; margin-left: 12px;">
													<p
														style="font: normal normal 400 11px/21px Arial; height: 18px;">
														<b>T R A N S P O R T </b> <b style="margin-left: 10px;">T
															Y P E :</b>
													</p>
												</div>
												<div class="mini_table_transp_temp" style="height: 20px;"></div>
												<div class="mini_table_transp_list"
													style="width: 150px; margin-left: 15px;">
													<table align="center"
														style="margin-top: 5px; margin-left: 3px; margin-right: 3px;">
														<tr>
															<a href="#"
																onclick="var g = this.getElementsByTagName('img');if(g[0].src.indexOf('css/images/metro_selected.png') != -1) g[0].src='css/images/metro.png'; else g[0].src='css/images/metro_selected.png';">
																<span><img src="css/images/metro_selected.png"></img></span>
															</a>
														</tr>
														<tr>
															<a href="#"
																onclick="var g = this.getElementsByTagName('img');if(g[0].src.indexOf('css/images/bus_selected.png') != -1) g[0].src='css/images/bus.png'; else g[0].src='css/images/bus_selected.png';">
																<img src="css/images/bus_selected.png" />
															</a>
														</tr>
														<tr>
															<a href="#"
																onclick="var g = this.getElementsByTagName('img');if(g[0].src.indexOf('css/images/trol_selected.png') != -1) g[0].src='css/images/trol.png'; else g[0].src='css/images/trol_selected.png';">
																<img src="css/images/trol_selected.png" />
															</a>
														</tr>
														<tr>
															<a href="#"
																onclick="var g = this.getElementsByTagName('img');if(g[0].src.indexOf('css/images/tram_selected.png') != -1) g[0].src='css/images/tram.png'; else g[0].src='css/images/tram_selected.png';">
																<img src="css/images/tram_selected.png" />
															</a>
														</tr>
													</table>
												</div>
											</div>
										</div>

									</td>

									<td style="width: 170px;">
										<div class="mini_table_marsh">
											<div class="mini_table_marsh_center">
												<div class="mini_table_marsh_top"
													style="margin-top: -3px; position: absolute; margin-left: 662px; width: 80px; height: 18px;">
													<p style="font: normal normal 400 11px/21px Arial;">
														<b>O P T I O N S :</b>
													</p>
												</div>
												<div class="mini_table_transp_temp" style="height: 5px;"></div>
												<div class="mini_table_transp_list"
													style="width: 120px; height: 30px;">
													<div class="mini_temp" style="height: 8px;"></div>
													<p style="font-size: 12px; font-family:"Verdana", "Arial", "Tahoma";">
														<input type="radio" name="labeled" value="1"
															id="labeled_1" /><label for="labeled_1"
															style="margin-left: 5 px;">Optimal2</label>
													</p>
													<p style="font-size: 12px; font-family:"Verdana", "Arial", "Tahoma"; ">
														<input type="radio" name="labeled" value="2"
															id="labeled_2" /><label for="labeled_2"
															style="margin-left: 5 px;">Fast</label>
													</p>
													<p style="font-size: 12px; font-family:"Verdana", "Arial", "Tahoma";">
														<input type="radio" name="labeled" value="3"
															id="labeled_3" /><label for="labeled_3"
															style="margin-left: 5 px;">Cheep</label>
													</p>
												</div>
											</div>
									</td>
									<td>
										<button style="width: 120px; height: 40px; margin-left: 50px;"
											type="submit" class="button" id="zoomOutX"
											onclick="zoomOutX('map_canvas'); var el = document.getElementById('test'); el.style.display = (el.style.display == 'block') ? 'none' : 'block';">Calculate</button>
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
		<div class="footer">

			<jsp:invoke fragment="foot" />
		</div>

	</div>
</body>
</html>