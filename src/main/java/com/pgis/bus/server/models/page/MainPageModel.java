package com.pgis.bus.server.models.page;

import java.util.Collection;

import com.pgis.bus.net.models.city.CitiesModel;
import com.pgis.bus.server.helpers.JSONHelper;
import com.pgis.bus.server.models.NavigationModel;

public class MainPageModel extends PageModel {
	private CitiesModel citiesModel;
	private Collection<String> routeTypeIds;

	public MainPageModel(NavigationModel navigationModel) {
		super(navigationModel);
	}

	public void setCitiesModel(CitiesModel citiesModel) {
		this.citiesModel = citiesModel;
	}

	public CitiesModel getCitiesModel() {
		return citiesModel;
	}

	public Collection<String> getRouteTypesIds() {
		return routeTypeIds;
	}

	public void setRouteTypes(Collection<String> routeTypeIds) {
		this.routeTypeIds = routeTypeIds;
	}

	public String JsonSelectedCity() {
		return JSONHelper.toJson(this.getCitiesModel().getSelectedCity());
	}

	public String JsonRouteTypes() {
		return JSONHelper.toJson(this.routeTypeIds);
	}
}
