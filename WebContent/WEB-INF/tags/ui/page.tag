<%@ tag body-content="empty"%>

<%@ attribute name="page_head" required="true" fragment="true"%>
<%@ attribute name="navigation" required="true" fragment="true"%>
<%@ attribute name="menu" required="true" fragment="true"%>
<%@ attribute name="content" required="true" fragment="true"%>
<%@ attribute name="foot" required="true" fragment="true"%>


<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf8" />
<meta http-equiv="Cache-control" content="no-cache">

<script
	src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script> 
<script type="text/javascript"
	src="http://maps.google.com/maps/api/js?sensor=false&libraries=drawing"></script>

<script src="media/js/jquery.tinyscrollbar.min.js"></script>

<jsp:invoke fragment="page_head" />
<script src="media/js/jquery.json-2.3.js"></script>	

<script src="media/js/selectbox.js"></script>
<script src="media/js/WidgetHelpers.js"></script>
<script src="media/js/WidgetEvents.js"></script>
<script src="media/js/map/Markers.js"></script>
<script src="media/js/GoogleMap.js"></script>
<script src="media/js/BusAppData.js"></script>
<script src="media/js/BusApp.js"></script>
<script src="media/js/main.js"></script>

<style>
* {
	margin: 0;
	padding: 0;
}
html , body
{
height:100%;
overflow-y: hidden;
}
</style>

<script type="text/javascript">
	$(document).ready(function() {
		$("div.selectTabs_first, div.selectTabs_second").each(function() {
			var tmp = $(this);
			//console.log($(tmp).find(" .lineTabs li"));
			$(tmp).find(".lineTabs li").each(function(i) {
				$(tmp).find(".lineTabs li:eq(" + i + ") a").click(function() {
					var tab_id = i + 1;
					$(tmp).find(".lineTabs li a").removeClass("active");
					$(this).addClass("active");
					$(tmp).find(".content div").stop(false, false).hide();
					$(tmp).find(".tab" + tab_id).stop(false, false).show();
					return false;
				});
			});
		});
	});
</script>

<script type="text/javascript">
var agent = navigator.userAgent.toLowerCase();
var b = $.browser, v = parseFloat(b.version); 
var c = $.browser, ver = parseFloat(c.version); 
oldBrowser = ( b.mozilla && v < "10" ); 
oldMSIEBrowser9 = ( c.msie && ver == "9" ); 
oldMSIEBrowser8 = ( c.msie && ver == "8" ); 
oldMSIEBrowser6 = ( c.msie && ver == "6" ); 
oldMSIEBrowser7 = ( c.msie && ver == "7" ); 
var vers = $.browser.version;
if( $.browser.opera && vers <=10.0  ){
	document.write('<link rel="stylesheet" href="media/css/busWeb_op.css" type="text/css">');
	}
else if ( oldMSIEBrowser9 ) 
{
document.write('<link rel="stylesheet" href="media/css/busWeb_ie9.css" type="text/css">');
}
else if ( oldMSIEBrowser8 ) 
{
document.write('<link rel="stylesheet" href="media/css/busWeb_ie8.css" type="text/css">');
}
else if ( oldMSIEBrowser6 ) 
{
document.write('<link rel="stylesheet" href="media/css/busWeb_ie6.css" type="text/css">');
}
else if ( oldMSIEBrowser7 ) 
{
document.write('<link rel="stylesheet" href="media/css/busWeb_ie7.css" type="text/css">');
}
else if ( oldBrowser ) 
	{
	document.write('<link rel="stylesheet" href="media/css/busWeb_ff.css" type="text/css">');
	}
else 
{
	document.write('<link rel="stylesheet" href="media/css/busWeb.css" type="text/css">');

}
</script>

</head>

<body onload="initialize()">
	<div id="ajax_js"></div>
	<div class="main-wrap clearfix">
		 <div class="page_layout">
			<div class="portal-headline">

				<div class="header">
					<div class="block_header">
						<jsp:invoke fragment="navigation" />
					</div>
				</div>

				<div class="slider2">
					<jsp:invoke fragment="menu" />
				</div>
			</div>
 
			<div class="main_content">
				<jsp:invoke fragment="content" />
			</div>

			<div class="footer">
				<jsp:invoke fragment="foot" />
			</div>
		</div>
	</div>
</body>
</html>