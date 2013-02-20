package com.pgis.bus.server.listeners;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;



import com.pgis.bus.data.DBConnectionManager;
import com.pgis.bus.server.AppProperties;
import com.pgis.bus.server.data.DBConnectionFactory;
import com.pgis.bus.server.data.test.TestDBConnectionManager;
import com.pgis.bus.server.data.test.TestDataSource;

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
	public void contextInitialized(ServletContextEvent event) {
		ServletContext context = event.getServletContext();
		AppProperties.DefaultCity = context.getInitParameter("defaultCity");

		DBConnectionFactory.init(new DBConnectionManager("jdbc/busPoolDB"));
		//TestDataSource source = new TestDataSource();
		//DBConnectionFactory.init(new TestDBConnectionManager(source.getDataSource()));
		log.debug("contextInitialized");

	}
}
