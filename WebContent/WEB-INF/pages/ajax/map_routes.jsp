<%@ page contentType="text/html;charset=UTF-8" language="java"
	import="com.pgis.bus.data.models.*,
	        com.pgis.bus.data.models.route.*,
	        com.pgis.bus.server.models.*,
	        java.util.ArrayList,
	        com.google.gson.*"%>

<%
	WayGeoDataModel model = (WayGeoDataModel) request.getAttribute("model");

int i = 0;
%>
<script type="text/javascript">
function loadWay(){
var googleMap = getApp().getGoogleMap();
googleMap.deleteAllStations();

<%for(RouteGeoDataModel route : model.getRoutes()){
    		for(RouteGeoData data : route.getRouteData()){%>
	googleMap.addStationMarker(
			<%=route.getRoutePart().getDirectRouteID()%>,
			'<%=data.getStationName()%>',
			<%=data.getStationLocation().x%>,
			<%=data.getStationLocation().y%>);
	googleMap.addPolyline();
<%}}%>

	
}
loadWay();
console.log("way was loaded");
</script>