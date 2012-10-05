package com.pgis.bus.server.models;

import java.util.ArrayList;
import java.util.Collection;

public class WayGeoDataModel {
	Collection<RouteGeoDataModel> routes;
	LoadWayOptions options;

	public WayGeoDataModel(LoadWayOptions options) {
		routes = new ArrayList<RouteGeoDataModel>();
		this.options = options;

	}

	public void addRouteGeoDataModel(RouteGeoDataModel routeModel) {
		routes.add(routeModel);

	}

	public Collection<RouteGeoDataModel> getRoutes() {
		return routes;
	}

	public void setRoutes(Collection<RouteGeoDataModel> routes) {
		this.routes = routes;
	}

}
