package com.pgis.bus.server.models.response;

import java.util.Locale;

import com.pgis.bus.data.orm.Route;
import com.pgis.bus.server.helpers.LanguageHelper;

public class RouteModel {

	private int ID;

	private double cost;

	private String name;

	private String type;

	private RouteWayModel directWay;

	private RouteWayModel reverseWay;

	private RouteTimetableModel timetable;

	public RouteModel(Route route, Locale locale) {
		this.name = route.getFullName(LanguageHelper
				.getDataBaseLanguage(locale));
		this.type = route.getRoute_type_id();
		this.cost = route.getCost();
		this.ID = route.getId();
		this.directWay = new RouteWayModel(route.getDirectRouteWay(),locale);
		this.reverseWay = new RouteWayModel(route.getReverseRouteWay(),locale);
	}

	public int getID() {
		return ID;
	}

	public void setID(int iD) {
		ID = iD;
	}

	public double getCost() {
		return cost;
	}

	public void setCost(double cost) {
		this.cost = cost;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public RouteWayModel getDirectWay() {
		return directWay;
	}

	public void setDirectWay(RouteWayModel directWay) {
		this.directWay = directWay;
	}

	public RouteWayModel getReverseWay() {
		return reverseWay;
	}

	public void setReverseWay(RouteWayModel reverseWay) {
		this.reverseWay = reverseWay;
	}

	public RouteTimetableModel getTimetable() {
		return timetable;
	}

	public void setTimetable(RouteTimetableModel timetable) {
		this.timetable = timetable;
	}
	
}
