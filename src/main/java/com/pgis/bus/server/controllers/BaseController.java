package com.pgis.bus.server.controllers;

import com.pgis.bus.data.IDBConnectionManager;
import com.pgis.bus.data.IDataBaseService;
import com.pgis.bus.data.impl.DataBaseService;
import com.pgis.bus.server.data.DBConnectionFactory;

public abstract class BaseController {

	protected IDataBaseService db;

	public BaseController() {
		super();
		db = new DataBaseService(DBConnectionFactory.getConnectionManager());
	}

	public BaseController(IDataBaseService db) {
		super();
		this.db = db;
	}

}
