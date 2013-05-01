package com.pgis.bus.server.helpers;

public class JSONHelper {

	public static String toJson(Object obj) {
		return (new com.google.gson.Gson()).toJson(obj);
	}
}
