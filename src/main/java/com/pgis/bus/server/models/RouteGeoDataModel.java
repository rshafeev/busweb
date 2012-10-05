package com.pgis.bus.server.models;

import java.util.Collection;

import com.pgis.bus.data.models.RouteGeoData;
import com.pgis.bus.data.models.RoutePart;

public class RouteGeoDataModel {
	RouteGeoData[] routeData;
	RoutePart routePart;

	public RouteGeoDataModel(RoutePart routePart,
			Collection<RouteGeoData> routeData) {
		this.routePart = routePart;
		this.routeData = routeData.toArray(new RouteGeoData[routeData.size()]);
	}

	public RouteGeoData[] getRouteData() {
		return routeData;
	}

	public void setRouteData(RouteGeoData[] routeData) {
		this.routeData = routeData;
	}

	public RoutePart getRoutePart() {
		return routePart;
	}

	public void setRoutePart(RoutePart routePart) {
		this.routePart = routePart;
	}

}
