package com.pgis.bus.server.models.page;

import com.pgis.bus.server.models.NavigationModel;


public class PageModel {

	NavigationModel navigationModel;

	public NavigationModel getNavigationModel() {
		return navigationModel;
	}

	public void setNavigationModel(NavigationModel navigationModel) {
		this.navigationModel = navigationModel;
	}

	public PageModel(NavigationModel navigationModel) {
		super();
		this.navigationModel = navigationModel;
	}

	
}
