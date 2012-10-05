<%@ page contentType="text/html;charset=UTF-8" language="java"
	import="com.pgis.bus.data.models.*,
	        com.pgis.bus.data.models.route.*,
	        java.util.ArrayList,
	        com.google.gson.*"%>
<%
	WaysModel model = (WaysModel) request.getAttribute("model");
%>

<div>
	<%
		int i = 0;
			for (WayModel wayModel : model.getWays()) {
	%>
	<div>

		<a id="way_ref_<%=i%>"
			onclick="on_selectWay(<%=i%>,<%=wayModel.createRoutePartArrStr()%>)">
			Way[<%=i%>]
		</a>
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
				<%=nextRoute.getStationStart()%></p>
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
		        <%=Integer.toString(r.getDirectRouteID())%>,
				<%=r.getRouteType()%>,
				<%=r.getRouteName()%>);
		</script>
		
		<div>
			<p>
				Маршрут :
				<%=r.getRouteName()%>
			</p>
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
				<%=r.getStationStart()%></p>
			<p>
				Выходить:
				<%=r.getStationFinish()%></p>

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
				Пересадка :
				<%=prevRoute.getRouteName()%>
				==--
				<%=nextRoute.getRouteName()%>
			</p>
			<p>
				С остановки:
				<%=prevRoute.getStationFinish()%></p>
			<p>
				На остановку:
				<%=nextRoute.getStationStart()%></p>
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
				<%=prevRoute.getStationFinish()%></p>
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
		<p>=======</p>
		<%
			}
		%>
	</div>
	<%
		i++;
			}
	%>
</div>


<script type="text/javascript">
<%WayModel wayModel = null;
if(model.getWays().isEmpty()==false){
    wayModel = model.getWays().iterator().next();%>
	on_selectWay(0,<%=wayModel.createRoutePartArrStr()%>);
<%}%>
</script>
