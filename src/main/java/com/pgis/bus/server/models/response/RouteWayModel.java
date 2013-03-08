package com.pgis.bus.server.models.response;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Locale;

import org.postgis.Point;

import com.pgis.bus.data.models.GsonPoint;
import com.pgis.bus.data.orm.DirectRoute;
import com.pgis.bus.data.orm.RouteRelation;
import com.pgis.bus.net.models.Location;
import com.pgis.bus.net.models.StationModel;
import com.pgis.bus.server.helpers.LanguageHelper;

public class RouteWayModel {

	private int ID;

	private double distance;

	private Collection<StationModel> stations;

	private Collection<Collection<Double[]>> roads;

	public int getID() {
		return ID;
	}

	public void setID(int iD) {
		ID = iD;
	}

	public double getDistance() {
		return distance;
	}

	public void setDistance(double distance) {
		this.distance = distance;
	}

	public Collection<StationModel> getStations() {
		return stations;
	}

	public void setStations(Collection<StationModel> stations) {
		this.stations = stations;
	}

	public Collection<Collection<Double[]>> getRoads() {
		return roads;
	}

	public void setRoads(Collection<Collection<Double[]>> roads) {
		this.roads = roads;
	}

	public RouteWayModel(DirectRoute droute, Locale locale) {
		String langID = LanguageHelper.getDataBaseLanguage(locale);
		this.ID = droute.getId();
		this.stations = new ArrayList<StationModel>();
		double distance = 0.0;
		this.roads = new ArrayList<Collection<Double[]>>();
		for (RouteRelation relation : droute.getRoute_relations()) {
			distance += relation.getDistance();
			if (relation.getStationB() != null) {
				Point location = relation.getStationB().getLocation();
				StationModel st = new StationModel();
				st.setName(relation.getStationB().getNameByLanguage(langID).value);
				st.setLocation(new Location(location.x, location.y));
				st.setId(relation.getStationB().getId());
				this.stations.add(st);
			}
			if(relation.getStation_a_id()>0){
				Collection<Double[]> points = new  ArrayList<Double[]>();
				for(int i=0;i < relation.getGeom().getPoints().length; i++){
					GsonPoint p = relation.getGeom().getPoints()[i];
					 points.add(new Double[]{p.x,p.y});
				}
				this.roads.add(points);
			}
		}
		
		this.distance = distance;
	}

}
