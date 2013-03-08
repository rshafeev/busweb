<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<%@ taglib prefix="ui" tagdir="/WEB-INF/tags/ui"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="myContext" value="${pageContext.request.contextPath}" />

<ui:base>
	<jsp:attribute name="page_head">	
	<script type="text/javascript"
			src="http://maps.google.com/maps/api/js?sensor=false&libraries=drawing"></script>
	
	<script src="${myContext}/media/js/libs/selectbox.js"></script>
	<script src="${myContext}/media/js/libs/jquery.poshytip.js"></script>
	<script type="text/javascript"
			src="http://underscorejs.ru/underscore.js"></script>
	<script src="${myContext}/media/cityways/main_page.js"></script>
	<script type="text/javascript">
		var options = {
			currentCity : $.parseJSON('${model.getCitiesModel().getJSONSelectedCity()}'),
			serverHost : "${myContext}",
			resourceURI : "${myContext}/media/cityways/",
			lang  : "${model.getLanguage()}"
		};
		
		cityways.page.setCurrent( new cityways.page.RoutesPage(options));

		/*
		$(document).ready(function() {
			$('.view-source .hide').hide();
			$('.view-source .link_name').toggle(function() {
				$(this).siblings('.hide').stop(false, true).slideDown(100);
			}, function() {
				$(this).siblings('.hide').stop(false, true).slideUp(100);
			});
			initialize();
			var map = new CityWays.WidgetMap('map');
		});
		$(function() {
			$('.demo-tip-darkgray').poshytip({
				className : 'tip-darkgray',
				showTimeout : 300,
				bgImageFrameSize : 11,
				offsetX : -25
			});
		});
		$(document).ready(function() {
			$('#right_routes_column_scrollbar').tinyscrollbar();
			$('#right_routes_column_scrollbar').tinyscrollbar_update();
			$(window).bind("resize", function(e) {
				$('#right_routes_column_scrollbar').tinyscrollbar_update();
			});
		});
		*/
	</script>
	</jsp:attribute>

	<jsp:attribute name="content">
	<div id="routes_map">
		<div id="routes_wrapper">
			<div id="map_canvas"></div>
		</div>
		<div id="routes_extra">
			 <div id="routes_arrow_div" onmousedown="return false"
					onclick="on_right_panel_show(this);">
			<a href="#"><img name='img_panel'
						src='${myContext}/media/css/images/arrow_left.png' /></a>
			
			</div> 
			<div id="routes_panel"> 
			<div class="city_tab" style="display: inline-block;">
						<h3><spring:message code="routespanel.choosecity" text="default text" />:</h3>
						<jsp:directive.include file="widgets/city_table.jsp" />
</div>
<div class="routes_inform">
<div id="cityways_routes_panel_scroll" class="scrollbar_body_routes">
			 <div class="scrollbar">
					<div class="track">
						<div class="thumb">
							<div class="end"></div>
						</div>
					</div>				
				</div>
								<div class="viewport">
					<div class="overview">
					
					<jsp:directive.include file="widgets/routes/container.jsp" />
	</div>

				</div>
				</div> 
		</div>	
		</div>
	
	</div>
		
	</div>
	
	</jsp:attribute>
	<jsp:attribute name="foot">
	</jsp:attribute>
</ui:base>
