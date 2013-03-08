package com.pgis.bus.server.models.response;

import java.util.Collection;

import com.pgis.bus.data.orm.Route;
import com.pgis.bus.server.models.data.RouteSchemeModel;
import com.pgis.bus.server.models.data.RouteTypeModel;

public class RoutesModel {
	private Collection<RouteSchemeModel> routes;
	private RouteTypeModel routeType;

	public RouteTypeModel getRouteType() {
		return routeType;
	}
	public void setRouteType(RouteTypeModel routeType) {
		this.routeType = routeType;
	}
	public Collection<RouteSchemeModel> getRoutes() {
		return routes;
	}
	public void setRoutes(Collection<RouteSchemeModel> routes) {
		this.routes = routes;
	}
	
}
