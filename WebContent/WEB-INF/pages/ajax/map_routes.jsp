<%@ page contentType="text/html;charset=UTF-8" language="java"
	import="com.pgis.bus.data.models.*,
	        com.pgis.bus.data.models.route.*,
	        com.pgis.bus.server.models.*,
	        java.util.ArrayList,
	        com.google.gson.*"%>

<%
	WayGeoDataModel model = (WayGeoDataModel) request.getAttribute("model");


%>
<script type="text/javascript">
function loadWay(){
var googleMap = getApp().getGoogleMap();
googleMap.deleteAllStations();
googleMap.deleteAllPolilines();

<%for(RouteGeoDataModel route : model.getRoutes()){
	int i = 0;
    		for(RouteGeoData data : route.getRouteData()){%>
	googleMap.addStationMarker(
			<%=route.getRoutePart().getDirectRouteID()%>,
			'<%=data.getStationName()%>',
			<%=data.getStationLocation().x%>,
			<%=data.getStationLocation().y%>);
	<%if(i>0){%>
		googleMap.addPolyline(
				<%=route.getRoutePart().getDirectRouteID()%>,
				<%=data.getStringGeom()%>);
	
	<%}
	i++;%>
<%}}%>

	
}
loadWay();
//console.log("way was loaded");
</script>