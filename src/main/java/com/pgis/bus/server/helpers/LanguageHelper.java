package com.pgis.bus.server.helpers;

import java.util.Locale;

public class LanguageHelper {

	/**
	 * Коды языков, хранящ. в БД отличаются в написании от кода языка, хран. в классе Locale,
	 * поэтому данный метод задает соответствие между этими различиями
	 * @param локаль
	 * @return код языка в соответствии с БД
	 */
	public static String getDataBaseLanguage(Locale locale){
		
		return "c_" + locale.getLanguage();
	}
}
