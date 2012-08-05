package com.pgis.bus.server.models;

import java.util.Locale;

import com.pgis.bus.data.geo.Location;
import com.pgis.bus.data.orm.City;
import com.pgis.bus.server.helpers.LanguageHelper;

public class CityModel {
	int id;
	String name;
	Location location;
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
	public Location getLocation() {
		return location;
	}
	public void setLocation(Location location) {
		this.location = location;
	}
	public CityModel(int id, String name, Location location) {
		super();
		this.id = id;
		this.name = name;
		this.location = location;
	}
	public CityModel(City city, Locale locale){
		if(city.name.get(LanguageHelper.getDataBaseLanguage(locale))!=null){
			this.name = city.name.get(LanguageHelper.getDataBaseLanguage(locale));
		}
		else
			this.name = city.name.get("c_ru");
		
		this.id = city.id;
		this.location = new Location();
		this.location.lat = city.lat;
		this.location.lon = city.lon;
		
		
	}
}
