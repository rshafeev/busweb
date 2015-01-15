package com.pgis.bus.server.models.page;

import java.util.Collection;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.pgis.bus.net.models.city.CitiesModel;
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

	public String JsonRouteTypes() {
		try {
			return (new ObjectMapper()).writeValueAsString(routeTypeIds);
		} catch (JsonProcessingException e) {
		}
		return null;
	}

	public String JsonSelectedCity() {
		try {
			return (new ObjectMapper()).writeValueAsString(this.citiesModel.getSelectedCity());
		} catch (JsonProcessingException e) {
		}
		return null;
	}
}
