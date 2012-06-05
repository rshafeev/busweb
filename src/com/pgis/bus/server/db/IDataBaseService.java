package com.pgis.bus.server.db;
import java.util.ArrayList;

import com.pgis.bus.server.db.orm.*;
public interface IDataBaseService {

	/**
	 * 
	 * @param id
	 * @return 
	 */
	Station getStation(int id);
	
	/**
	 * 
	 * @param name
	 * @param lang
	 * @return
	 */
	Station getStationByName(String name,Language lang);
	ArrayList<Language> getAllLanguages();
}
