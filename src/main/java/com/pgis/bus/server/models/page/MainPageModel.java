package com.pgis.bus.server.models.page;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Locale;

import com.google.gson.Gson;
import com.pgis.bus.server.models.NavigationModel;
import com.pgis.bus.server.models.data.CitiesModel;
import com.pgis.bus.server.models.data.RouteTypeModel;

public class MainPageModel extends PageModel {
	private CitiesModel citiesModel;
	private Collection<RouteTypeModel> routeTypes;

	
	public MainPageModel(NavigationModel navigationModel) {
		super(navigationModel);
	}

	public void setCitiesModel(CitiesModel citiesModel) {
		this.citiesModel = citiesModel;
	}

	public CitiesModel getCitiesModel() {
		return citiesModel;
	}

	public String getJsonCitiesModel() {
		return (new Gson()).toJson(citiesModel);
	}

	public Collection<RouteTypeModel> getRouteTypes() {
		return routeTypes;
	}

	public String getJsonRouteTypes() {
		Collection<String> arr = new ArrayList<String>();
		for (RouteTypeModel rType : routeTypes) {
			arr.add(rType.getName());
		}
		return (new Gson()).toJson(arr);
	}

	public void setRouteTypes(Collection<RouteTypeModel> routeTypes) {
		this.routeTypes = routeTypes;
	}

}
