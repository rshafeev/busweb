package com.pgis.bus.server.models.data;

import java.util.Locale;

public class RouteTypeModel {
	private String id;
	private String name;

	
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public RouteTypeModel(String id, String name) {
		super();
		this.id = id;
		this.name = name;
	}

	public RouteTypeModel() {
		
	}

	public RouteTypeModel(String routeTypeID, Locale locale) {
		// TODO Auto-generated constructor stub
	}
}
