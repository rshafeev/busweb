<%@ page contentType="text/html;charset=UTF-8" language="java"
	import="com.pgis.bus.data.models.*,
	        com.pgis.bus.data.models.route.*,
	        java.util.ArrayList,
	        com.google.gson.*"%>
<%
	WaysModel model = (WaysModel) request.getAttribute("model");
%>
<script type="text/javascript">
getApp().getAppData().clearWaysData();
</script>
<div id="routes_info">
<div id="head_ways"></div>
<div id="ways" >
	<%
		int i = 0;
		for (WayModel wayModel : model.getWays()) {
	%>

	
	<div id="result_numb_<%=i%>" onclick="showRouteInfo('result_numb_<%=i%>')" style="	height:70px;
	width:340px;
background-image: -webkit-gradient(
	linear,
	left bottom,
	left top,
	color-stop(0.3, rgb(28,168,255)),
	color-stop(0.65, rgb(95,205,245)),
	color-stop(0.83, rgb(120,209,250))
);
border-radius: 5px;
margin-left:2px;
margin-top:2px;
margin-bottom:10px;
cursor:pointer;">
		<div id="rout_numb">
<div id="numb">
			<a id="way_ref_<%=i%>"
				onclick="on_selectWay(<%=i%>,<%=wayModel.createRoutePartArrStr()%>)">
				<%=i%>
				
			</a>
			</div>
			</div>
			<div id="rout_info">				
			<p>Стоимость : <%=wayModel.getCost()%></p>
			<p>В пути : <%=wayModel.getTime()%> мин. </p>
			</div>
				</div>
				<%if(i==0){ %>
	<div id="res_text">
	<%}else{ %>
	<div id="res_text">
	<%} %>
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
			<div>
				<p>
					Пешком до станции
					<b><%=nextRoute.getStationStart()%></b></p>
				<p>
					Время(пешком):
					<%=r.getMoveTime().getMinutes()%>
					минут
				</p>
				<p>
					Расстояние(пешком):
					<%=(new Double(r.getDistance())).intValue()%>
					м.
				</p>
			</div>
			<%
				} else if (routeModel instanceof TransportRouteModel) {

							TransportRouteModel r = (TransportRouteModel) routeModel;
							
			%>
			<script type="text/javascript">
		getApp().getAppData().addRouteToWay(
		        <%=i%>,
		        "<%=Integer.toString(r.getDirectRouteID())%>",
				"<%=r.getRouteType()%>",
				"<%=r.getRouteName()%>");
		</script>

			<div>	
			<span class="result_transp"><img src="media/css/images/<%=r.getRouteType()%>.png"/>   <%=r.getRouteName()%></span>
				<p>
					Стоимость :
					<%=r.getCost()%>
				</p>
				<p>
					Интервал движения:
					<%=r.getInterval().getMinutes()%>
					минут
				</p>
				<p>
					Время в пути :
					<%=r.getMoveTime().getMinutes()%>
					минут
				</p>
				<p>
					Расстояние:
					<%=(new Double(r.getDistance() / 100.0))
								.intValue() / 10.0%>
					км.
				</p>
				<p>
					Садиться:
					<b><%=r.getStationStart()%></b></p>
				<p>
					Выходить:
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
			<div>
				<p>
					Пересадка :</p>
					
					<span class="result_transp"><img src="media/css/images/<%=prevRoute.getRouteType()%>.png"/>  <%=prevRoute.getRouteName()%></span>
					<span class="result_transp_img"><img  src="media/css/images/arrow_refresh.png"/></span>
					<span class="result_transp"><img src="media/css/images/<%=nextRoute.getRouteType()%>.png"/>
					<%=nextRoute.getRouteName()%>
					</span>
					
				<p>
					С остановки:
					<b><%=prevRoute.getStationFinish()%></b></p>
				<p>
					На остановку:
					<b><%=nextRoute.getStationStart()%></b></p>
				<p>
					Время(пешком):
					<%=r.getMoveTime().getMinutes()%>
					минут
				</p>
				<p>
					Расстояние(пешком):
					<%=(new Double(r.getDistance() / 100.0))
								.intValue() / 10.0%>
					км.
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
			<div>
				<p>
					Пешком от станции
					<b><%=prevRoute.getStationFinish()%></b></p>
				<p>
					Время(пешком):
					<%=r.getMoveTime().getMinutes()%>
					минут
				</p>
				<p>
					Расстояние(пешком):
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

</div>
	<script type="text/javascript">
<%WayModel wayModel = null;
			if (model.getWays().isEmpty() == false) {
				wayModel = model.getWays().iterator().next();%>
	on_selectWay(0,<%=wayModel.createRoutePartArrStr()%>);<%}%>
</script>