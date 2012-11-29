package com.pgis.bus.server.models.data;

import java.util.ArrayList;

import com.google.gson.Gson;

public class CitiesModel {

	ArrayList<CityModel> cities;
	CityModel selectedCity;
	public CitiesModel(){
		cities=new ArrayList<CityModel>();
	}
	public void addCity(CityModel city) {
		this.cities.add(city);
	}


	public ArrayList<CityModel> getCities() {
		return cities;
	}
	public void setCities(ArrayList<CityModel> cities) {
		this.cities = cities;
	}
	public CityModel getSelectedCity() {
		return selectedCity;
	}
	public void setSelectedCity(CityModel selectedCity) {
		this.selectedCity = selectedCity;
	}
	
	public CityModel getCity(int city_id) {
		for (CityModel city : cities) {
			if (city.getId() == city_id)
				return city;
		}
		return null;
	}
	public String getJSONSelectedCity(){
		return (new Gson()).toJson(this.selectedCity);
		
	}
}
