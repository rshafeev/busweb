<%@ tag body-content="empty" %>
<%@ attribute name="head" required="true" fragment="true" %>
<%@ attribute name="body" required="true" fragment="true" %>
<%@ attribute name="foot" required="true" fragment="true" %>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" type="text/css" href="css/mail_head1.css">
<link rel="stylesheet" type="text/css" href="css/mail_main.css">
<link rel="stylesheet" type="text/css" href="css/new.css">
<link rel="stylesheet" type="text/css" href="css/bus_styles.css">

<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>
<style type="text/css">
* {margin: 0; padding: 0;}
 html {height: 100%; overflow: hidden;}
 body {
  background: rgb(226,226,226); /* Old browsers */
background: -moz-linear-gradient(top, rgba(226,226,226,1) 0%, rgba(219,219,219,1) 50%, rgba(209,209,209,1) 51%, rgba(254,254,254,1) 100%); /* FF3.6+ */
background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(226,226,226,1)), color-stop(50%,rgba(219,219,219,1)), color-stop(51%,rgba(209,209,209,1)), color-stop(100%,rgba(254,254,254,1))); /* Chrome,Safari4+ */
background: -webkit-linear-gradient(top, rgba(226,226,226,1) 0%,rgba(219,219,219,1) 50%,rgba(209,209,209,1) 51%,rgba(254,254,254,1) 100%); /* Chrome10+,Safari5.1+ */
background: -o-linear-gradient(top, rgba(226,226,226,1) 0%,rgba(219,219,219,1) 50%,rgba(209,209,209,1) 51%,rgba(254,254,254,1) 100%); /* Opera 11.10+ */
background: -ms-linear-gradient(top, rgba(226,226,226,1) 0%,rgba(219,219,219,1) 50%,rgba(209,209,209,1) 51%,rgba(254,254,254,1) 100%); /* IE10+ */
background: linear-gradient(top, rgba(226,226,226,1) 0%,rgba(219,219,219,1) 50%,rgba(209,209,209,1) 51%,rgba(254,254,254,1) 100%); /* W3C */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e2e2e2', endColorstr='#fefefe',GradientType=0 ); /* IE6-9 */
   height: auto !important;
   height: 100%;
   min-height: 100%;
   position: relative; 
}
</style>

<script type="text/javascript"
src="https://maps.google.com/maps/api/js?sensor=false">
</script>
<script type="text/javascript">
  function initialize() {
    var latlng = new google.maps.LatLng(41, 2);
    var myOptions = {
      zoom: 8,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"),
        myOptions);
  }
</script>
</head>

<body onload="initialize()">
<div class="main-wrap clearfix">
	<div class="portal-headline">
 <div class="header">
	<div class="block_header">
<jsp:invoke fragment="head"/>
 <div class="logotip"><a href="#"><img border="0" alt="logotip" src="css/images/logotip1.png" width="250" height="50px"></a></div>
</div></div>
<div class="slider2"> 
<div class="transparent"> 

  <div class="block-round-content">
  <table class="menu_table" cellpadding="10" cellspacing="10">
  <tbody>
  <tr>
  <td>
  <div class="mini_table_town" >
  <div class="zagolovok_town">
<p style="text-align: center; margin-bottom: 0em;margin-top: 0em; font-size: 11px;">Town:</p>
</div>
<!-- <p style="text-align: center;margin-bottom: 1em;margin-top: 1em;">Kharkov</p></br>-->
</div>
</td>

<td>
   <div class="mini_table_route" >
  <div class="zagolovok_route">
<p style="text-align: center; margin-bottom: 0px;margin-top: 0em; font-size: 11px;">Path:</p>
</div>
<table class="b-search__points">
<tbody>
<tr>
	<td class="b-search__point-name">
		<div class="b-search__name b-search__name_type_start" style="font-size: 11px;">A</div>
	<td class="b-search__point-input">
		<span class="b-form-input b-form-input_autocomplete_yes b-form-input_has-clear_yes b-form-input_size_m i-bem b-form-input_js_inited" onclick="return {'b-form-input':{'popupMods':{'gradient':'yes'},'dataprovider':{'name':'b-search__dataprovider','search_type':'tp'}}}">
		<span class="b-form-input__box">
			<input class="b-form-input__input" id="uniq161" autocomplete="off" style="margin-bottom:2px; margin-top:5px;width:200px;"></input>
			<span class="b-form-input__clear b-form-input__clear_visibility_visible"/>
			</span>
</span>
	</td>
</tr>
<tr class="b-search__point">
	<td class="b-search__point-name">
		<div class="b-search__name b-search__name_type_finish" style="font-size: 11px;">B</div>
		</td>
	<td class="b-search__point-input">
	<span class="b-form-input b-form-input_autocomplete_yes b-form-input_has-clear_yes b-form-input_size_m i-bem b-form-input_js_inited b-form-input_focused_yes" onclick="return {'b-form-input':{'popupMods':{'gradient':'yes'},'dataprovider':{'name':'b-search__dataprovider','search_type':'tp'}}}">
	<span class="b-form-input__box">
	<input class="b-form-input__input" id="uniq162" autocomplete="off" style="margin-bottom:5px; width:200px;"></input>
<span class="b-form-input__clear b-form-input__clear_visibility_visible">
</span>
</span>
</td>
</tr>
</tbody>
</table>
</div>
</td>

<td>
  <div class="mini_table_transp" >
  <div class="zagolovok_transp">
<p style="text-align: center; margin-bottom: 0em;margin-top: 0em;font-size: 11px;">Transport type:</p>
</div>
<!-- <button style="margin-bottom:10px;margin-top:10px; margin-left:10px;font-size: 11px;">Metro</button>
<button style="margin-bottom:10px; margin-left:36px;font-size: 11px;">Tram</button>
<button style="margin-bottom:10px; margin-left:10px;font-size: 11px;">Trolleybus</button>
<button style="margin-bottom:10px; margin-left:10px; font-size: 11px;">Bus</button> -->
<div class="menu_transport_buttons_div" id="menu_transport_buttons">
<a id="metro" class="selected" title=""><span class="transport_selected_span"></span></a>
</div>
</div>
</td>

<td>
  <div class="mini_table_marsh" >
  <div class="zagolovok_marsh">
<p style="text-align: center; margin-bottom: 0em;margin-top: 0em; font-size: 11px; ">Marshryt:</p>
</div>
<p style="font-size: 11px; margin-right:50px; margin-bottom:2px;"><input type="radio" name="labeled" value="1" id="labeled_1" style="margin-right:3px; margin-left:3px;"/><label for="labeled_1">Optimal</label></p>
<p style="font-size: 11px; margin-bottom:2px;"><input type="radio" name="labeled" value="2" id="labeled_2" style="margin-right:3px; margin-left:3px;" /><label for="labeled_2">Fast</label></p>
<p style="font-size: 11px; margin-bottom:2px;"><input type="radio" name="labeled" value="3" id="labeled_3" style="margin-right:3px; margin-left:3px;" /><label for="labeled_3">Cheep</label></p>
<p style="font-size: 11px; margin-right:50px; margin-bottom:2px; cursor: pointer;"><input name="rememberme" type="checkbox" "value="1" class = "checkbox style="margin-right:3px; margin-left:3px;""/><label >Bez peresadok</label></p>
<!--  <table >
<tbody>
<tr>
<td class="padding_right" style="width:100px;">
	<label for="optimal" id="optimal_tip_label" title="" style="word-wrap: break-word; font-size: 11px;">optimal</label>
	<input type="radio" name="way_options" id="optimal" value="optimal" checked="checked" style="cursor: pointer;"></input><br>
</td>
 <td class="padding_right">
	<label for="fast" id="fast_tip_label" title="" style="font-size: 11px;">fast</label>	
	<input type="radio" name="way_options" id="fast" value="fast" style="margin-left: 35px; cursor: pointer;"></input>
</td>
</tr>
<tr>
<td>
	<label for="cheap" id="cheap_tip_label" title="" style="font-size: 11px;">cheep</label>
	<input type="radio" name="way_options" id="cheap" value="cheap" style="margin-left: 18px; cursor: pointer;"></input>
</td>
</tr>
<tr>
<td colspan="3">
	<label for="direct" id="direct_tip_label" title="" style="font-size: 11px;">bez peresadok</label>
	<input type="checkbox" id="direct"style="cursor: pointer;"></input>
</td>
</tr>
</tbody>
</table>-->
</div>
</td>
<td>
<p style="text-align: center"><button>Search path</button></p>
</td>
</tr>
</tbody>
</table>
  </div>
  <span class="r4"></span><span class="r3"></span><span class="r2"></span><span class="r1"></span>
 </div> 
</div> 
 </div>
 <body>
   		<jsp:invoke fragment="body"/>
</body>

<body>
	<jsp:invoke fragment="foot"/>
</body>
  </div>
  </body>
</html>