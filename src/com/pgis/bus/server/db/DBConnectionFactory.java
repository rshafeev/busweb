package com.pgis.bus.server.db;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;

import org.apache.tomcat.jdbc.pool.DataSource;
import org.apache.tomcat.jdbc.pool.PoolProperties;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.pgis.bus.server.listeners.BasicServiceListener;

public class DBConnectionFactory {
   private static DataSource source=null;
   private  static final Logger log = LoggerFactory.getLogger( BasicServiceListener.class );
	
   public static  void init(String dataSourceName) throws NamingException
   {
	   String prefix = "java:/comp/env";
	   Context ctx = new InitialContext();
       Context envContext  = (Context)ctx.lookup(prefix);
       source = (DataSource)envContext.lookup(dataSourceName);  
	   log.debug("created DB-pool: ok");
   }
	public static Connection  getConnectionFactory() throws NamingException, SQLException
	{
		if(source==null)
			return null;
		try {
			return DBConnectionFactory.source.getConnection();
		} catch (Exception e) {
			return null;
		}
		
		
	}
	public static void close()
	{
		if(DBConnectionFactory.source!=null)
		{
			DBConnectionFactory.source.close();
			DBConnectionFactory.source = null;
			log.debug("destroy DB-pool: ok");
		}
	}
}
