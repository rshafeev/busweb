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
<style type="text/css">
  html { height: 100% ;overflow-y:  hidden;}
  body { height: 100%; margin: 0px; padding: 0px;overflow-y:  hidden; }
  #map_canvas { height: 100% ;overflow-y:  hidden;}
</style>
<script type="text/javascript"
    src="https://maps.google.com/maps/api/js?sensor=true">
</script>
<script type="text/javascript">
  function initialize() {
    var latlng = new google.maps.LatLng(50, 36);
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
        <!--   <div class="head">
    <div class="head_block">
      <div class="logotip"><a href="#"><img border="0" alt="logotip" src="css/images/Logo.png" width="250" height="100"></a></div>
 		<jsp:invoke fragment="head"/>
      <div class="clr"></div>
    </div>
  </div>--> 

<div class="main-wrap clearfix">
	<div class="portal-headline">
	<div class="header">
	<div class="block_header">
<jsp:invoke fragment="head"/>
<div class="logotip"><a href="#"><img border="0" alt="logotip" src="css/images/logotip1.png" width="250" height="50px"></a></div> 


      </div></div>
  <div class="clr"></div>
	   <div class="slider2">
	   Slider
	   </div>
 </div> 
 
 <body>
   		<jsp:invoke fragment="body"/>

</body>

 <!-- <div class="transparent">
<span class="r1"></span><span class="r2"></span><span class="r3"></span><span class="r4"></span>
  <div class="block-round-content">
  <table class="menu_table" cellpadding="10" cellspacing="10">
  <tbody>
  <tr>
  <td>
  <div class="mini_table_town" >
  <div class="zagolovok_town">
<p style="text-align: center; margin-bottom: 0em;margin-top: 0em;">Town:</p>
</div>
<p style="text-align: center;margin-bottom: 1em;margin-top: 1em;">Kharkov</p></br>
</div>
</td>

<td>
   <div class="mini_table_route" >
  <div class="zagolovok_route">
<p style="text-align: center; margin-bottom: 0em;margin-top: 0em;">Path:</p>
</div>
<table class="b-search__points">
<tbody>
<tr>
	<td class="b-search__point-name">
		<div class="b-search__name b-search__name_type_start">A</div>
	<td class="b-search__point-input">
		<span class="b-form-input b-form-input_autocomplete_yes b-form-input_has-clear_yes b-form-input_size_m i-bem b-form-input_js_inited" onclick="return {'b-form-input':{'popupMods':{'gradient':'yes'},'dataprovider':{'name':'b-search__dataprovider','search_type':'tp'}}}">
		<span class="b-form-input__box">
			<input class="b-form-input__input" id="uniq161" autocomplete="off" style="margin-bottom:10px; margin-top:5px;width:200px;"></input>
			<span class="b-form-input__clear b-form-input__clear_visibility_visible"/>
			</span>
</span>
	</td>
</tr>
<tr class="b-search__point">
	<td class="b-search__point-name">
		<div class="b-search__name b-search__name_type_finish">B</div>
		</td>
	<td class="b-search__point-input">
	<span class="b-form-input b-form-input_autocomplete_yes b-form-input_has-clear_yes b-form-input_size_m i-bem b-form-input_js_inited b-form-input_focused_yes" onclick="return {'b-form-input':{'popupMods':{'gradient':'yes'},'dataprovider':{'name':'b-search__dataprovider','search_type':'tp'}}}">
	<span class="b-form-input__box">
	<input class="b-form-input__input" id="uniq162" autocomplete="off" style="margin-bottom:10px; width:200px;"></input>
<span class="b-form-input__clear b-form-input__clear_visibility_visible"/>
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
<p style="text-align: center; margin-bottom: 0em;margin-top: 0em;">Transport type:</p>
</div>
<button style="margin-bottom:10px;margin-top:10px; margin-left:10px;">Metro</button>
<button style="margin-bottom:10px; margin-left:36px;">Tram</button>
<button style="margin-bottom:10px; margin-left:10px;">Trolleybus</button>
<button style="margin-bottom:10px; margin-left:10px;">Bus</button>
</div>
</td>

<td>
  <div class="mini_table_marsh" >
  <div class="zagolovok_marsh">
<p style="text-align: center; margin-bottom: 0em;margin-top: 0em;">Marshryt:</p>
</div>
<table >
<tbody>
<tr>
<td class="padding_right" style="width:100px;">
	<label for="optimal" id="optimal_tip_label" title="" style="word-wrap: break-word;">optimal</label>
	<input type="radio" name="way_options" id="optimal" value="optimal" checked="checked" style="cursor: pointer;"></input><br>
</td>
 <td class="padding_right">
	<label for="fast" id="fast_tip_label" title="">fast</label>	
	<input type="radio" name="way_options" id="fast" value="fast" style="margin-left: 35px; cursor: pointer;"></input>
</td>
</tr>
<tr>
<td>
	<label for="cheap" id="cheap_tip_label" title="">cheep</label>
	<input type="radio" name="way_options" id="cheap" value="cheap" style="margin-left: 18px; cursor: pointer;"></input>
</td>
</tr>
<tr>
<td colspan="3">
	<label for="direct" id="direct_tip_label" title="">bez peresadok</label>
	<input type="checkbox" id="direct"style="cursor: pointer;"></input>
</td>
</tr>
</tbody>
</table>
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
  </div>-->
 
  <!-- <div class="top_sup">
    <div class="clr"></div>
  </div> -->


<body>
	<jsp:invoke fragment="foot"/>

	 
</body>
  </div>
  </body>
</html>