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
	<div class="slider2">
	 <div class="transparent">
				<div class="block-round-content">
					<table class="menu_table">
						<tbody>
							<tr>
								<td style="width: 171px;">
								
  									<jsp:directive.include file="widgets/city_table.jsp" />
								</td>
								<td style="width: 250px;">
  									<jsp:directive.include file="widgets/route_table.jsp" />
								</td>
								<td style="width: 145px;">	
  									<jsp:directive.include file="widgets/transp_table.jsp" />
								</td>
								<td style="width: 330px;">
									<div class="mini_table_transp_new">
										<div class="selectTabs_second">

										 <div class="content">
										 	<ul class="lineTabs">
										 		<li class="first"><a class="active" href="#">Маршрут</a></li>
												<li class="second"><a href="#">Выезд</a></li>
												<li class="third"><a href="#">Проездной</a></li>				
											</ul> 
											<div class="tab1">
												<jsp:directive.include file="widgets/settings_panel.jsp" />
											</div>
											<div class="tab2">
  		 										<jsp:directive.include file="widgets/time_panel.jsp" />				
											</div>
											<div class="tab3">								
  												<jsp:directive.include file="widgets/ticket_type.jsp" />
											</div>

										</div>
									</div>
								</div> 
							</td>
						 <td style="width: 180px;">
								<button type="submit" class="button"
										onclick="on_btn_calculate_click();">
									<spring:message code="welcome.btn_calc" text="default text" />
								</button>
						</td>   
					</tr>
				</tbody>
			</table>				
		</div>
	</div>
	</div>
		<jsp:directive.include file="widgets/container.jsp" />
	</jsp:attribute>
	<jsp:attribute name="foot">
	</jsp:attribute>
</ui:base>