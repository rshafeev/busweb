package com.pgis.bus.server.models;

import com.google.gson.Gson;

public class MainPageModel {
	public CitiesModel citiesModel;
	
	public String getJsonCitiesModel(){
		return  (new Gson()).toJson(citiesModel);
	}
}
