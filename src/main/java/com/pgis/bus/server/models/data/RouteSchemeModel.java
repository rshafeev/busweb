package com.pgis.bus.server.models.data;

import com.pgis.bus.data.orm.Timetable;

public class RouteSchemeModel {
	private int id;
	private int routeID;
	private String name;
	private String stationA;
	private String stationB;
	private Timetable time;
	private double cost;

	public int getRouteID() {
		return routeID;
	}

	public void setRouteID(int routeID) {
		this.routeID = routeID;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getStationA() {
		return stationA;
	}

	public void setStationA(String stationA) {
		this.stationA = stationA;
	}

	public String getStationB() {
		return stationB;
	}

	public void setStationB(String stationB) {
		this.stationB = stationB;
	}

	public Timetable getTime() {
		return time;
	}

	public void setTime(Timetable time) {
		this.time = time;
	}

	public double getCost() {
		return cost;
	}

	public void setCost(double cost) {
		this.cost = cost;
	}

	@Override
	public String toString() {
		return "RouteSchemeModel [id=" + id + ", routeID=" + routeID
				+ ", name=" + name + ", stationA=" + stationA + ", stationB="
				+ stationB + ", time=" + time + ", cost=" + cost + "]";
	}

}
