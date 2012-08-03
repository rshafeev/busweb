<%@ tag body-content="empty"%>
<%@ attribute name="menu" required="true" fragment="true"%>
<%@ attribute name="head" required="true" fragment="true"%>
<%@ attribute name="content" required="true" fragment="true"%>
<%@ attribute name="foot" required="true" fragment="true"%>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" type="text/css" href="media/head.css">
<link rel="stylesheet" type="text/css" href="media/body.css">
<link rel="stylesheet" type="text/css" href="media/foot.css">

<script
	src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
<script type="text/javascript"
	src="http://maps.google.com/maps/api/js?sensor=false&libraries=drawing"></script>
<script src="media/js/busWeb.js"></script>

<script src="media/js/selectbox.js"></script>
<script src="media/js/marker.js"></script>
<script src="media/js/testScale.js"></script>

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
</head>

<body onload="initialize()" onunload="GUnload()">
	<div class="main-wrap clearfix">
		<div class="portal-headline">
		
			<div class="header">
				<div class="block_header">
					<jsp:invoke fragment="menu" />
					<div class="logotip"></div>
				</div>
			</div>
			
			<div class="slider2">
				<jsp:invoke fragment="head" />
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