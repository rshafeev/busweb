<%@ tag body-content="empty"%>

<%@ attribute name="page_head" required="true" fragment="true"%>
<%@ attribute name="navigation" required="true" fragment="true"%>
<%@ attribute name="menu" required="true" fragment="true"%>
<%@ attribute name="content" required="true" fragment="true"%>
<%@ attribute name="foot" required="true" fragment="true"%>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" type="text/css" href="media/head.css">
<link rel="stylesheet" type="text/css" href="media/body.css">
<link rel="stylesheet" type="text/css" href="media/foot.css">
<link rel="stylesheet" type="text/css" href="media/new_tab.css">




<script
	src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script type="text/javascript"
	src="http://maps.google.com/maps/api/js?sensor=false&libraries=drawing"></script>

<jsp:invoke fragment="page_head" />

<script src="media/js/selectbox.js"></script>
<script src="media/js/WidgetHelpers.js"></script>
<script src="media/js/WidgetEvents.js"></script>
<script src="media/js/Network.js"></script>
<script src="media/js/map/Markers.js"></script>
<script src="media/js/GoogleMap.js"></script>
<script src="media/js/BusApp.js"></script>
<script src="media/js/main.js"></script>


<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
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
<script type="text/javascript">
$(document).ready(function(){
	$("div.selectTabs_first, div.selectTabs_second").each(function () {
		var tmp = $(this);
		console.log($(tmp).find(" .lineTabs li"));
		$(tmp).find(".lineTabs li").each(function (i) {
			$(tmp).find(".lineTabs li:eq("+i+") a").click(function(){
				var tab_id=i+1;
				$(tmp).find(".lineTabs li a").removeClass("active");
				$(this).addClass("active");
				$(tmp).find(".content div").stop(false,false).hide();
				$(tmp).find(".tab"+tab_id).stop(false,false).show();
				return false;
			});
		});
	});
});
</script>
</head>

<body onload="initialize()">
	<div class="main-wrap clearfix">
		<div class="portal-headline">

			<div class="header">
				<div class="block_header">
					<jsp:invoke fragment="navigation" />
					<div class="logotip"></div>
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
</body>
</html>