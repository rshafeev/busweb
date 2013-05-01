package com.pgis.bus.server.models.response;

import java.util.ArrayList;
import java.util.Collection;

public class GeomPathModel {
	Collection<GeomRouteModel> routes;

	public GeomPathModel() {
		routes = new ArrayList<GeomRouteModel>();

	}

	public void addRouteGeoDataModel(GeomRouteModel routeModel) {
		routes.add(routeModel);

	}

	public Collection<GeomRouteModel> getRoutes() {
		return routes;
	}

	public void setRoutes(Collection<GeomRouteModel> routes) {
		this.routes = routes;
	}

}
