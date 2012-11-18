package com.pgis.bus.server.models.page;

import com.google.gson.Gson;
import com.pgis.bus.server.models.NavigationModel;
import com.pgis.bus.server.models.data.CitiesModel;

public class MainPageModel extends PageModel {
	private CitiesModel citiesModel;
	
	public MainPageModel(NavigationModel navigationModel) {
		super(navigationModel);
	}	

	public void setCitiesModel(CitiesModel citiesModel) {
		this.citiesModel = citiesModel;
	}
	public CitiesModel getCitiesModel() {
		return citiesModel;
	}
	public String getJsonCitiesModel(){
		return  (new Gson()).toJson(citiesModel);
	}

}
