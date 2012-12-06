package com.pgis.bus.server.models.page;
import java.util.Collection;

import com.google.gson.Gson;
import com.pgis.bus.server.models.NavigationModel;
import com.pgis.bus.server.models.data.CitiesModel;
import com.pgis.bus.server.models.data.RoutesModel;

public class RoutesPageModel extends PageModel {
	private CitiesModel citiesModel;
	
	private Collection<RoutesModel> routes;
	
	public Collection<RoutesModel> getRoutes() {
		return routes;
	}

	public void setRoutes(Collection<RoutesModel> routes) {
		this.routes = routes;
	}

	public RoutesPageModel(NavigationModel navigationModel) {
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