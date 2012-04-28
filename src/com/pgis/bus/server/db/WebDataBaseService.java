package com.pgis.bus.server.db;

import java.sql.Connection;

import com.pgis.bus.server.db.orm.Language;
import com.pgis.bus.server.db.orm.Station;

public class WebDataBaseService implements IDataBaseService{

	private Connection conn = null;
	public WebDataBaseService() throws WebDataBaseServiceException
	{
		conn = DBConnectionFactory.getConnection();
		if(conn==null)
			throw new WebDataBaseServiceException(null);
	}
	
	public WebDataBaseService(Connection conn) 
	{
		this.conn = conn;
	}
	@Override
	public Station getStation(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Station getStationByName(String name, Language lang) {
		// TODO Auto-generated method stub
		return null;
	}

	public void Close(){
		if(conn!=null)
			DBConnectionFactory.closeConnection(conn);		
	}
	
	
}
