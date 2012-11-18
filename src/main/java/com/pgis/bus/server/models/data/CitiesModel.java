package com.pgis.bus.server.models.data;

import java.util.ArrayList;

public class CitiesModel {

	ArrayList<CityModel> cities;
	CityModel defaultCity;
	public CitiesModel(){
		cities=new ArrayList<CityModel>();
	}
	public void addCity(CityModel city) {
		this.cities.add(city);
	}

	public CityModel getDefaultCity() {
		return defaultCity;
	}
	public void setDefaultCity(CityModel defaultCity) {
		this.defaultCity = defaultCity;
	}
	public CityModel getCity(int city_id) {
		for (CityModel city : cities) {
			if (city.getId() == city_id)
				return city;
		}
		return null;
	}
}
