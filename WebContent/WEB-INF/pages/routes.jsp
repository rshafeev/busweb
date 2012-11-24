<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<%@ taglib prefix="ui" tagdir="/WEB-INF/tags/ui"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<ui:base>
	<jsp:attribute name="page_head">
	
	<script src="media/js/jquery.tinyscrollbar.min.js"></script>
	<script type="text/javascript"
			src="http://maps.google.com/maps/api/js?sensor=false&libraries=drawing"></script>
	
	<script type="text/javascript">
		includeCSSFile("media/css/busWeb", "busWeb", []);
		var basicModel = $.parseJSON('${model.getJsonCitiesModel()}');
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
			
			initialize();
		});
	</script>
	<script src="media/js/selectbox.js"></script>
	<script src="media/js/WidgetEvents.js"></script>
	<script src="media/js/map/Markers.js"></script>
	<script src="media/js/GoogleMap.js"></script>
	<script src="media/js/BusAppData.js"></script>
	<script src="media/js/BusApp.js"></script>
	<script src="media/js/main.js"></script>
<script  src="media/js/jquery.poshytip.js"></script>
	<script type="text/javascript">
		$(function(){
			$('.demo-tip-darkgray').poshytip({
				className: 'tip-darkgray',
				showTimeout: 1,
				bgImageFrameSize: 11,
				offsetX: -25
			});
		});
	</script>
		

	</jsp:attribute>
	
	<jsp:attribute name="content">
			<jsp:directive.include file="widgets/routes_cont.jsp" />
	</jsp:attribute>
		<jsp:attribute name="foot">
	</jsp:attribute>
</ui:base>
	