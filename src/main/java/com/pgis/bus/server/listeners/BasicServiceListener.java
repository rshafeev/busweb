package com.pgis.bus.server.listeners;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.pgis.bus.data.DBConnectionFactory;
import com.pgis.bus.data.DBConnectionManager;

/**
 * навешивает логику на момент создания/удаления сервлета
 * 
 * @author marianna
 * 
 */

public class BasicServiceListener implements ServletContextListener {
	private static final Logger log = LoggerFactory
			.getLogger(BasicServiceListener.class);

	public BasicServiceListener() {

	}

	@Override
	public void contextDestroyed(ServletContextEvent sce) {
		DBConnectionFactory.free();
	}

	@Override
    public void contextInitialized(ServletContextEvent sce)
    {
    	//dbc/busPoolDB
    	//DataSource source = initDataSource("jdbc/busPoolDB");
    	
		DBConnectionFactory.init(new DBConnectionManager("jdbc/busPoolDB"));
    	log.debug("contextInitialized");
    	
    }
}
