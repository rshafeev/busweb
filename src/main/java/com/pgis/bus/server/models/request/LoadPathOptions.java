package com.pgis.bus.server.models.request;

import com.pgis.bus.data.models.RoutePart;
import com.pgis.bus.net.models.geom.PointModel;

public class LoadPathOptions {
    private RoutePart[] routeParts;
    private PointModel p1;
    private PointModel p2;


    public RoutePart[] getRouteParts() {
        return routeParts;
    }

    public void setRouteParts(RoutePart[] routeParts) {
        this.routeParts = routeParts;
    }

    public PointModel getP1() {
        return p1;
    }

    public void setP1(PointModel p1) {
        this.p1 = p1;
    }

    public PointModel getP2() {
        return p2;
    }

    public void setP2(PointModel p2) {
        this.p2 = p2;
    }
}
