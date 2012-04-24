package com.pgis.bus.server.db;
import com.pgis.bus.server.db.orm.*;
public interface IDataBaseService {

	Station getStation(int id);
	Station getStationByName(String name,Language lang);
	
}
