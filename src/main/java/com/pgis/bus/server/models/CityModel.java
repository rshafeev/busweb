package com.pgis.bus.server.models;

import java.util.Locale;

import com.pgis.bus.data.geo.Location;
import com.pgis.bus.data.orm.City;
import com.pgis.bus.data.orm.StringValue;
import com.pgis.bus.server.helpers.LanguageHelper;

public class CityModel {
	int id;
	String name;
	Location location;
	public int scale;

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

	public CityModel(City city, Locale locale) {
		StringValue name_value = city.name.get(LanguageHelper
				.getDataBaseLanguage(locale));

		if (name_value != null) {
			this.name = name_value.value;
		} else
			this.name = city.name.get("c_ru").value;

		this.id = city.id;
		this.location = new Location();
		this.location.lat = city.lat;
		this.location.lon = city.lon;
		this.scale = city.scale;

	}

	public int getScale() {
		return scale;
	}

	public void setScale(int scale) {
		this.scale = scale;
	}
}