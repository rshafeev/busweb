package com.pgis.bus.server.listeners;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.sql.DataSource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.pgis.bus.server.db.DBConnectionFactory;

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
   		 String poolNameJndi = "jdbc/busPoolDB";
         String prefix = "java:/comp/env";
    	
    	ServletContext servletContext = sce.getServletContext();   
    	String dataSourceJndiName = servletContext.getInitParameter(prefix); 
    	try
    	{
    		   DBConnectionFactory.init(poolNameJndi);
    	}
    	catch(Exception e)
    	{
    		log.error(e.getMessage());
    	}
    	
    	log.debug("contextInitialized");

    }
    
}
