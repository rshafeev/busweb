package com.pgis.bus.server.models.data;


public class RouteTypeModel {

	private String name;

	public RouteTypeModel( String name) {
		super();
		this.name = name.substring(8);
		
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}

	
}
