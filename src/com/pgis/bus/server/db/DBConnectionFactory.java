package com.pgis.bus.server.db;

import java.sql.Connection;
import java.sql.SQLException;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;

import org.apache.tomcat.jdbc.pool.DataSource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class DBConnectionFactory {
	private static DataSource source = null;
	private static final Logger log = LoggerFactory
			.getLogger(DBConnectionFactory.class);
	private static String dataSourceName = "";
    
	public synchronized static void init(String dataSourceName) {
		try {
			DBConnectionFactory.dataSourceName = dataSourceName;
			String prefix = "java:/comp/env";
			Context ctx = new InitialContext();
			Context envContext = (Context) ctx.lookup(prefix);
			source = (DataSource) envContext.lookup(dataSourceName);
			log.debug("created DB-pool: ok");
		} catch (NamingException e) {
			log.debug("created DB-pool: false");
			log.debug(e.toString(true));
		}
	}

	public synchronized static Connection getConnection() {

		if (source == null)
		{
			init(DBConnectionFactory.dataSourceName);
			if(source==null)
				return null;
		}
		int iter = 0;
		do {
			try {
				Connection c = DBConnectionFactory.source.getConnection();
				if (c != null)
					return c;

			} catch (SQLException e) {
				log.debug(e.toString());
			}
		} while (iter < 3);
		return null;

	}
    public static void closeConnection(Connection c)
    {
    	try
    	{
    	if(c!=null)
    		c.close();
    	}
    	catch(SQLException e)
    	{
    		log.debug(e.toString());
    	}
    }
	public synchronized static void close() {
		if (DBConnectionFactory.source != null) {
			DBConnectionFactory.source.close();
			DBConnectionFactory.source = null;
			log.debug("destroy DB-pool: ok");
		}
	}
}
