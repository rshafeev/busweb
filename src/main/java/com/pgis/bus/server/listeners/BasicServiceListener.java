package com.pgis.bus.server.listeners;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;


import org.apache.tomcat.jdbc.pool.DataSource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.pgis.bus.data.DBConnectionFactory;

/**
 * навешивает логику на момент создания/удаления сервлета
 * @author marianna
 *
 */


public class BasicServiceListener implements ServletContextListener {
	private  static final Logger log = LoggerFactory.getLogger( BasicServiceListener.class );

    
    public BasicServiceListener()
    {
    	
    }
    @Override
    public void contextDestroyed(ServletContextEvent sce)
    {
    	DBConnectionFactory.close();
    }
    @Override
    public void contextInitialized(ServletContextEvent sce)
    {
    	//dbc/busPoolDB
    	//DataSource source = initDataSource("jdbc/busPoolDB");
    	DBConnectionFactory.init("jdbc/busPoolDB");
    	log.debug("contextInitialized");

    }
    
}
