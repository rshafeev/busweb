<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<%@ taglib prefix="ui" tagdir="/WEB-INF/tags/ui"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<ui:base>
	<jsp:attribute name="page_head">		
<script type="text/javascript">
		includeCSSFile("media/css/pages", "routes", []);
		$(document).ready(function() {
			initialize();	
		}
		
		</script>
	<script src="media/js/routes/RSchems.js"></script>
	<script src="media/js/routes/routes.js"></script>
	</jsp:attribute>

	<jsp:attribute name="content">
	<div id="routes_map">
		<div id="routes_wrapper">
			<div id="map_canvas"></div>
		</div>
		<div id="routes_extra">
			 <div id="routes_arrow_div" onmousedown="return false" onclick="on_right_panel_show();">
			<a href="#" ><img  name='img'
				src='media/css/images/arrow_left.png' /></a>
			
			</div> 
			<div id="routes_panel"> 
			
			Info 
			
			</div>
		</div>
	
	</div>
		
	</jsp:attribute>
	<jsp:attribute name="foot">
	</jsp:attribute>
</ui:base>
