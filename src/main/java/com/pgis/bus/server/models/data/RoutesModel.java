package com.pgis.bus.server.models.data;

import java.util.Collection;

import com.pgis.bus.data.orm.Route;

public class RoutesModel {

private String routesTypeID;
private String routeType;
private Collection<Route> routes;


public String getRoutesTypeID() {
return routesTypeID;
}
public void setRoutesTypeID(String routesTypeID) {
this.routesTypeID = routesTypeID;
}
public String getRouteType() {
return routeType;
}
public void setRouteType(String routeType) {
this.routeType = routeType;
}
public Collection<Route> getRoutes() {
return routes;
}
public void setRoutes(Collection<Route> routes) {
this.routes = routes;
}
}