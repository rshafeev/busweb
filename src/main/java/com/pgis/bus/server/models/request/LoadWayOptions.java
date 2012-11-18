package com.pgis.bus.server.models.request;

import com.pgis.bus.data.models.RoutePart;
import com.pgis.bus.server.models.data.LocationModel;

public class LoadWayOptions {
	private RoutePart[] routeParts;
	private LocationModel pointA;
	private LocationModel pointB;

	public RoutePart[] getRouteParts() {
		return routeParts;
	}

	public void setRouteParts(RoutePart[] routeParts) {
		this.routeParts = routeParts;
	}

	public LocationModel getPointA() {
		return pointA;
	}

	public void setPointA(LocationModel pointA) {
		this.pointA = pointA;
	}

	public LocationModel getPointB() {
		return pointB;
	}

	public void setPointB(LocationModel pointB) {
		this.pointB = pointB;
	}
}
