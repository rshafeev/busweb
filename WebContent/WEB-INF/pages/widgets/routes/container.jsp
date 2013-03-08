<%@ page contentType="text/html;charset=UTF-8" language="java"
import="com.pgis.bus.data.models.*,
com.pgis.bus.server.models.page.*,
com.pgis.bus.server.models.data.*,
java.util.ArrayList,
com.google.gson.*"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<div id="containerv">
	<c:forEach var="routesModel" items="${model.getRoutes()}">
		<div id="block_bus">

			<div id="bus_label">
				<p style="">${routesModel.getRouteType().getName() }</p>
			</div>
			<c:forEach var="route" items="${routesModel.getRoutes()}">
				
				<a id="route_link_${route.getRouteID()}" class="demo-tip-darkgray"
				onclick = "cityways.page.Events.onSelectRoute(${route.getRouteID()});"
				title="${route.getName()} 
<spring:message code="routespanel.routnumber" text="default" />: ${route.getName()}
<spring:message code="routespanel.routcost" text="default" />: ${route.getCost()} <spring:message code="routespanel.uah" text="default" /> 
<spring:message code="routespanel.routinterval" text="default" />: 5 <spring:message code="routespanel.minutes" text="default" />
<spring:message code="routespanel.routworktime" text="default" />: 6:30 - 23:30">${route.getName()}</a>
				
			</c:forEach>
		</div>
</c:forEach>
</div>
