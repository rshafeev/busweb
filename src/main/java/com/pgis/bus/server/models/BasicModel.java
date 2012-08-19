package com.pgis.bus.server.models;

import java.util.ArrayList;

public class BasicModel {

	ArrayList<CityModel> cities;

	public BasicModel(){
		cities=new ArrayList<CityModel>();
	}
	public void addCity(CityModel city) {
		this.cities.add(city);
	}

	public CityModel getCity(int city_id) {
		for (CityModel city : cities) {
			if (city.getId() == city_id)
				return city;
		}
		return null;
	}
}
