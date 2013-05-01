package com.pgis.bus.server.models.page;

import java.util.Collection;

import com.google.gson.Gson;
import com.pgis.bus.net.models.city.CitiesModel;
import com.pgis.bus.server.models.NavigationModel;
import com.pgis.bus.server.models.data.RoutesListExtModel;

public class RoutesPageModel extends PageModel {
	private CitiesModel citiesModel;
	private Collection<RoutesListExtModel> routesLists;

	public RoutesPageModel(NavigationModel navigationModel) {
		super(navigationModel);
	}

	public void setCitiesModel(CitiesModel citiesModel) {
		this.citiesModel = citiesModel;
	}

	public CitiesModel getCitiesModel() {
		return citiesModel;
	}

	public String JsonCitiesModel() {
		return (new Gson()).toJson(citiesModel);
	}

	public String JsonSelectedCity() {
		return (new Gson()).toJson(citiesModel.getSelectedCity());
	}

	public Collection<RoutesListExtModel> getRoutesLists() {
		return routesLists;
	}

	public void setRoutesLists(Collection<RoutesListExtModel> routesLists) {
		this.routesLists = routesLists;
	}

}