<%@ page contentType="text/html;charset=UTF-8" language="java"
	import="com.pgis.bus.data.models.*,
	        com.pgis.bus.data.models.route.*,
	        java.util.ArrayList,
	        com.google.gson.*"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<c:set var="myContext" value="${pageContext.request.contextPath}" />
	        
<%
	WaysModel model = (WaysModel) request.getAttribute("model");
%>

<script type="text/javascript">
getMainPage().getMainPageData().clearWaysData();
</script>




<div id="routes_info">
<div id="head_ways"></div>
<div id="ways" >
    <p><spring:message code="rightpanel.search_time" text="default text" />: <%=model.getFindTimeSecs() %> сек </p>
	<%
		int i = 0;
		for (WayModel wayModel : model.getWays()) {
	%>

	
	<div id="result_numb_<%=i%>" onclick="on_selectWay(<%=i%>,<%=wayModel.createRoutePartArrStr()%>)">
		<div id="rout_numb">
		
<div id="numb_<%=i%>">
			<a id="way_ref_<%=i%>" style="color:white;
	font-size: 24px;
	font-weight: 900;"
				onclick="on_selectWay(<%=i%>,<%=wayModel.createRoutePartArrStr()%>)">
				<%=i+1%>
				
			</a>
			</div>
			
			<div id="icons_menu">
		<% ArrayList<String> routesType = wayModel.getRoutesType(); 
		for (int k=0; k<routesType.size();k++ )
		{
		%>	
		 <img src="${myContext}/media/css/images/<%=routesType.get(k)%>.png"/>
		<%if(k < routesType.size() -1){ %>
			<img src="${myContext}/media/css/images/plus.png"/>
		<%} %>
		<%}%>
		</div>
			</div>
			<div id="cost_info">				
			<p><spring:message code="rightpanel.cost" text="default text" /> : <%=wayModel.getCost()%></p>
			<p><spring:message code="rightpanel.trip_time" text="default text" /> : <%=wayModel.getTime()%> мин. </p>
			</div>
				</div>
	<div id="res_text_<%=i%>" style="width: 322px; margin-left:10px;white-space: normal;">
<div id="print">
	<a href="#"><img src="${myContext}/media/css/images/print.png"  title="Print" ></a> 
	
		</div>
		<div id="clipboard">
		<a href="#"><img src="${myContext}/media/css/images/chain.png"  title="Clipboard" ></a> 
		</div>
			<%
				ArrayList<RouteModel> routes = wayModel.getRoutes();
					for (int j = 0; j < routes.size(); j++) {
						RouteModel routeModel = routes.get(j);
			%>
			<%
				if (routeModel instanceof InputRouteModel) {
							InputRouteModel r = (InputRouteModel) routeModel;
							TransportRouteModel nextRoute = null;
							if (j < routes.size() - 1
									&& routes.get(j + 1) instanceof TransportRouteModel)
								nextRoute = (TransportRouteModel) routes.get(j + 1);
			%>
			<div style="line-height:15px;">
				<p>
					<spring:message code="rightpanel.by_foot_to_station" text="default text" /> :
					<b><%=nextRoute.getStationStart()%></b></p>
				<p>
					<spring:message code="rightpanel.trip_time_foot" text="default text" /> :
					<%=r.getMoveTime().getMinutes()%>
					минут
				</p>
				<p>
					<spring:message code="rightpanel.distance_by_foot" text="default text" /> :
					<%=(new Double(r.getDistance())).intValue()%>
					м.
				</p>
			</div>
			<%
				} else if (routeModel instanceof TransportRouteModel) {
	
							TransportRouteModel r = (TransportRouteModel) routeModel;
							
			%>
			<script type="text/javascript">
			getMainPage().getMainPageData().addRouteToWay(
		        <%=i%>,
		        "<%=Integer.toString(r.getDirectRouteID())%>",
				"<%=r.getRouteType()%>",
				"<%=r.getRouteName()%>");
		</script>

			<div class="line_height">	
			<span class="result_transp"><img src="${myContext}/media/css/images/<%=r.getRouteType()%>.png"/>   <%=r.getRouteName()%></span>
				<p>
					<spring:message code="rightpanel.cost" text="default text" /> :
					<%=r.getCost()%>
				</p>
				<p>
					<spring:message code="rightpanel.service_interval" text="default text" /> :
					<%=r.getInterval().getMinutes()%>
					минут
				</p>
				<p>
					<spring:message code="rightpanel.trip_time" text="default text" /> :
					<%=r.getMoveTime().getMinutes()%>
					минут
				</p>
				<p>
					<spring:message code="rightpanel.distance" text="default text" />:
					<%=(new Double(r.getDistance() / 100.0))
								.intValue() / 10.0%>
					<spring:message code="rightpanel.km" text="default text" />
				</p>
				<p>
					<spring:message code="rightpanel.get_on" text="default text" />:
					<b><%=r.getStationStart()%></b></p>
				<p>
					<spring:message code="rightpanel.alight_at" text="default text" />:
					<b><%=r.getStationFinish()%></b></p>

			</div>

			<%
				} else if (routeModel instanceof TransitionRouteModel) {
							TransitionRouteModel r = (TransitionRouteModel) routeModel;
							TransportRouteModel prevRoute = null;
							if (j > 0
									&& routes.get(j - 1) instanceof TransportRouteModel)
								prevRoute = (TransportRouteModel) routes.get(j - 1);
							TransportRouteModel nextRoute = null;
							if (j < routes.size() - 1
									&& routes.get(j + 1) instanceof TransportRouteModel)
								nextRoute = (TransportRouteModel) routes.get(j + 1);
			%>
			<div style="height:auto; line-height:15px;">
				<p>
					<spring:message code="rightpanel.transfer" text="default text" /> :</p>					
					<span class="result_transp"><img src="${myContext}/media/css/images/<%=prevRoute.getRouteType()%>.png"/>  <%=prevRoute.getRouteName()%></span>
					<span class="result_transp_img"><img  src="${myContext}/media/css/images/arrow_refresh.png"/></span>
					<span class="result_transp"><img src="${myContext}/media/css/images/<%=nextRoute.getRouteType()%>.png"/>
					<%=nextRoute.getRouteName()%>
					</span>
					
				<p>
					<spring:message code="rightpanel.from_station" text="default text" />:
					<b><%=prevRoute.getStationFinish()%></b></p>
				<p>
					<spring:message code="rightpanel.to_station" text="default text" />:
					<b><%=nextRoute.getStationStart()%></b></p>
				<p>
					<spring:message code="rightpanel.trip_time_foot" text="default text" />:
					<%=r.getMoveTime().getMinutes()%>
					минут
				</p>
				<p>
					<spring:message code="rightpanel.distance_by_foot" text="default text" />:
					<%=(new Double(r.getDistance() / 100.0))
								.intValue() / 10.0%>
					<spring:message code="rightpanel.km" text="default text" />
				</p>
			</div>
			<%
				} else if (routeModel instanceof OutputRouteModel) {
							OutputRouteModel r = (OutputRouteModel) routeModel;
							TransportRouteModel prevRoute = null;
							if (j > 0
									&& routes.get(j - 1) instanceof TransportRouteModel)
								prevRoute = (TransportRouteModel) routes.get(j - 1);
			%>
			<div style="height:auto; line-height:15px; ">
				<p>
					<spring:message code="rightpanel.by_foot_from_station" text="default text" />
					<b><%=prevRoute.getStationFinish()%></b></p>
				<p>
					<spring:message code="rightpanel.trip_time_foot" text="default text" />:
					<%=r.getMoveTime().getMinutes()%>
					минут
				</p>
				<p>
					<spring:message code="rightpanel.distance_by_foot" text="default text" />:
					<%=(new Double(r.getDistance())).intValue()%>
					м.
				</p>
			</div>
			<%
				}
			%>
			<div id="line_res"></div>
			<%
				}
			%>
		</div>
		<%
			i++;
			}
		%>
	</div>
	
<div id="foot-ways"></div>
</div>  




	<script type="text/javascript">
<%WayModel wayModel = null;
			if (model.getWays().isEmpty() == false) {
				wayModel = model.getWays().iterator().next();%>
	on_selectWay(0,<%=wayModel.createRoutePartArrStr()%>);<%}%>
</script>