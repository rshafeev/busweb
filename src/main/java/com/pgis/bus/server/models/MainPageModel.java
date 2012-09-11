package com.pgis.bus.server.models;

import com.google.gson.Gson;

public class MainPageModel {
	public BasicModel basicModel;
	
	public String getJsonBasicModel(){
		return  (new Gson()).toJson(basicModel);
	}

	public BasicModel getBasicModel() {
		return basicModel;
	}

	public void setBasicModel(BasicModel basicModel) {
		this.basicModel = basicModel;
	}
}
