package com.pgis.bus.server.controllers;

import java.sql.SQLException;
import java.util.Locale;

import org.springframework.context.i18n.LocaleContextHolder;

import com.pgis.bus.data.DBConnectionFactory;
import com.pgis.bus.data.service.IDataBaseService;
import com.pgis.bus.data.service.IDataModelsService;
import com.pgis.bus.data.service.impl.DataBaseService;
import com.pgis.bus.data.service.impl.DataModelsService;

public abstract class BaseController {

	private IDataBaseService dbService;
	private IDataModelsService modelsService;

	public BaseController() {
		super();
	}

	public BaseController(IDataBaseService dbService, IDataModelsService modelsService) {
		super();
		this.dbService = dbService;
		this.modelsService = modelsService;
	}

	public IDataBaseService getDbService() throws SQLException {
		if (dbService == null)
			dbService = new DataBaseService(DBConnectionFactory.getConnectionManager());
		return dbService;
	}

	public IDataModelsService getModelsService() throws SQLException {
		if (modelsService == null) {
			Locale locale = LocaleContextHolder.getLocale();
			modelsService = new DataModelsService(locale, DBConnectionFactory.getConnectionManager());
		}
		return modelsService;
	}

}