package com.pgis.bus.server.data;

import java.sql.Connection;

import com.pgis.bus.data.IConnectionManager;

public class DBConnectionFactory {

	static private IConnectionManager dbConnectionManager;

	public synchronized static void init(IConnectionManager dbConnectionManager) {
		DBConnectionFactory.dbConnectionManager = dbConnectionManager;
	}

	/**
	 * Извлечь подключение из пула Обратите внимание! После окончания работы с подключением, нужно обязательно вызвать
	 * функцию DBConnectionFactory::closeConnection(c)
	 * 
	 * @return Connection
	 */
	public synchronized static IConnectionManager getConnectionManager() {
		return dbConnectionManager;
	}

	/**
	 * Положить подключение обратно в пул
	 * 
	 * @param c объект подключения
	 */
	public static void closeConnection(Connection c) {
		dbConnectionManager.closeConnection(c);
	}

	/**
	 * Очистить фабрику
	 */
	public synchronized static void dispose() {
		dbConnectionManager.dispose();
	}
}
