<%@ page contentType="text/html;charset=UTF-8" language="java"
	import="com.pgis.bus.data.models.*,
	        com.pgis.bus.data.models.route.*,
	        java.util.ArrayList,
	        com.google.gson.*"%>
<%@ taglib prefix="ui" tagdir="/WEB-INF/tags/ui"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>


<script type="text/javascript">
	
</script>

<div>
	<%
		WaysModel model = (WaysModel) request.getAttribute("model");
		int i = 0;
		for (WayModel wayModel : model.getWays()) {
			String jsonWay = (new Gson()).toJson(wayModel
					.createRoutePartArr());
	%>
	<div>

		<p id="way_ref_<%=i%>" onclick="busApp().loadWay($.parseJSON(<%=jsonWay%>))">
			Way[<%=i%>]
		</p>
		<%
			ArrayList<RouteModel> routes = wayModel.getRoutes();
				for (int j = 0; j < routes.size(); j++) {
					RouteModel routeModel = routes.get(j);
					// $.parseJSON('${model.getJsonBasicModel()}')
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
				==>
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
				<%=(new Double(r.getDistance())).intValue() %>
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
