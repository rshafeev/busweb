package com.pgis.bus.server.models.request;

import com.pgis.bus.data.models.RoutePart;
import com.pgis.bus.net.models.Location;

public class LoadPathOptions {
	private RoutePart[] routeParts;
	private Location p1;
	private Location p2;

	public RoutePart[] getRouteParts() {
		return routeParts;
	}

	public void setRouteParts(RoutePart[] routeParts) {
		this.routeParts = routeParts;
	}

	public Location getPointA() {
		return p1;
	}

	public void setPointA(Location pointA) {
		this.p1 = pointA;
	}

	public Location getPointB() {
		return p2;
	}

	public void setPointB(Location pointB) {
		this.p2 = pointB;
	}
}
