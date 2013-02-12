<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<%@ taglib prefix="ui" tagdir="/WEB-INF/tags/ui"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<c:set var="myContext" value="${pageContext.request.contextPath}" />

<ui:base>
	<jsp:attribute name="page_head">
	<link rel="stylesheet" type="text/css"
			href="${myContext}/media/cityways/themes/default/css/main.css">
	<script
			src="${myContext}/media/cityways/themes/default/templates/main.xml"
			type="text/template"></script>
	
	<script src="${myContext}/media/js/libs/jquery.tinyscrollbar.min.js"></script>
	<script type="text/javascript"
			src="http://maps.google.com/maps/api/js?sensor=false&libraries=drawing"></script>
	<script type="text/javascript"
			src="http://underscorejs.ru/underscore.js"></script>
	<script src="${myContext}/media/cityways/MainPage.js"></script>
	
		
	<script type="text/javascript">
		(function() {
			// Подключим файлы со стилями
			cityways.helper.styles.includeCSSFile("${myContext}/media/css/busWeb/",
												[{
													name : "busWeb.css"
												},
												{
													name : "busWeb_ff.css",
													browsers : {mozilla : {max : 10}},
												},
												{
													name : "busWeb_ie8",
													browsers : {msie : {max : 8.0}}
												}]);
			var options = {
					currentCity : $.parseJSON('${model.getCitiesModel().getJSONSelectedCity()}'),
					routeTypes : $.parseJSON('${model.getJsonRouteTypes()}')
				};
			cityways.options.ServerHost = "${myContext}";
			cityways.options.ResourceURI = "${myContext}/media/cityways/";
			cityways.language.setCode("${model.getLanguage()}");
			cityways.page.Current = new cityways.page.MainPage(options);
		})();
		
		//includeCSSFile("${myContext}/media/css/busWeb", "busWeb", [ "ff", "ie8" ]);
		
	</script>
	<script src="${myContext}/media/js/libs/selectbox.js"></script>
	<script src="${myContext}/media/js/libs/jquery.poshytip.js"></script>
	
	<!--  
		<script src="${myContext}/media/js/main/WidgetEvents.js"></script>
		<script src="${myContext}/media/js/main/map/Markers.js"></script>
		<script src="${myContext}/media/js/main/GoogleMap.js"></script>
		<script src="${myContext}/media/js/main/MainPageData.js"></script>
		<script src="${myContext}/media/js/main/MainPage.js"></script>
		<script src="${myContext}/media/js/main/main.js"></script>
	-->

	</jsp:attribute>

	<jsp:attribute name="content">
	<div class="slider2">
	 <div class="transparent">
				<div class="block-round-content">
					<table class="menu_table">
						<tbody>
							<tr>
								<td style="width: 171px;">
								<div class="mini_table_town">
								<div class="mini_table_town_center">
										<div class="mini_table-town_top">
			<p>
				<b><spring:message code="basic.city" text="default text" /> </b>
			</p>
		</div>
  									<jsp:directive.include file="widgets/city_table.jsp" />
  									</div>
  									</div>
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
										 		<li class="first"><a class="active" href="#"><spring:message
																code="basic.route" text="default text" /></a></li>
												<li class="second"><a href="#"><spring:message
																code="basic.departure" text="default text" /></a></li>
												<li class="third"><a href="#"><spring:message
																code="basic.travel_doc" text="default text" /></a></li>				
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
										onclick="cityways.Page.Events().onFindBtnClick();">
									<spring:message code="basic.btn_calc" text="default text" />
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
