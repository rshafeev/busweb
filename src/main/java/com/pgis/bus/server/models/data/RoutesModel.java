package com.pgis.bus.server.models.data;

import java.util.Collection;

import com.pgis.bus.data.orm.Route;

public class RoutesModel {
	private Collection<Route> routes;
	private RouteTypeModel routeType;

	public RouteTypeModel getRouteType() {
		return routeType;
	}
	public void setRouteType(RouteTypeModel routeType) {
		this.routeType = routeType;
	}
	public Collection<Route> getRoutes() {
		return routes;
	}
	public void setRoutes(Collection<Route> routes) {
		this.routes = routes;
	}
	
}
