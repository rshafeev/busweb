package com.pgis.bus.server.models.response;

import java.util.ArrayList;
import java.util.Collection;

import org.postgis.LineString;
import org.postgis.Point;

import com.pgis.bus.data.models.RouteGeoData;
import com.pgis.bus.data.models.RoutePart;
import com.pgis.bus.net.models.Location;
import com.pgis.bus.net.models.StationModel;

public class GeomRouteModel {
	/**
	 * id маршрута(точнее направления маршрута: у каждого маршрута есть два
	 * направления: прямой и обратный. Поэтому дуги маршрута зависят также от
	 * направления)
	 */
	private int ID;

	private Collection<StationModel> stations;
	private Collection<Collection<Double[]>> roads;

	public GeomRouteModel(RoutePart routePart,
			Collection<RouteGeoData> routeData) {
		stations = new ArrayList<StationModel>();
		if(routeData.size()>0){
			routeData.iterator().next().setRelationGeom(null);
		}
		roads = new ArrayList<Collection<Double[]>>();
		this.ID = routePart.getDirectRouteID();
		for (RouteGeoData data : routeData) {
			if (data.getStationName() != null) {
				Location loc = new Location(data.getStationLocation().x,
						data.getStationLocation().y);
				stations.add(new StationModel(null, data.getStationName(), loc));
			}
			if (data.getRelationGeom() != null) {
				roads.add(data.relationGeomToArray());
			}
		}
	}

	public int getID() {
		return ID;
	}

	public Collection<StationModel> getStations() {
		return stations;
	}


}