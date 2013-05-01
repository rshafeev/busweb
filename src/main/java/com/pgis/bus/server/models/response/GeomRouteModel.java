package com.pgis.bus.server.models.response;

import java.util.Collection;

import com.pgis.bus.net.models.station.StationModel;

public class GeomRouteModel {
	/**
	 * id маршрута(точнее направления маршрута: у каждого маршрута есть два направления: прямой и обратный. Поэтому дуги
	 * маршрута зависят также от направления)
	 */
	private int ID;

	private Collection<StationModel> stations;
	private Collection<Collection<Double[]>> roads;

	public int getID() {
		return ID;
	}

	public Collection<StationModel> getStations() {
		return stations;
	}

}
