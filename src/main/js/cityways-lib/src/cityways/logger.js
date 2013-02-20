/**
 * @overview Namespace {@link cityways.logger}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 * 
 * @requires cityways.js
 */

 /**
 * @private
 * @namespace
 * @description Содержит функции логгирования
 */
 cityways.logger = {

 	DEBUG_LEVEL : false,

 	INFO_LEVEL  : false,  

 	WARN_LEVEL  : false,

 	ERROR_LEVEL : false,
 	
 	/**
 	 * [info description]
 	 */
 	 info  : function(){},

 	/**
 	 * [debug description]
 	 */
 	 debug : function(){},

 	/**
 	 * [warn description]
 	 */
 	 warn  : function(){},


 	 error : function(){},

 	 setLevelMode : function(level, val){
 	 	if(level == "INFO_LEVEL"){
 	 		if(val == true)
 	 			cityways.logger.info  = console.log.bind(console);
 	 		else
 	 			cityways.logger.info = function(){};
 	 	}
 	 	if(level == "DEBUG_LEVEL"){
 	 		if(val == true)
 	 			cityways.logger.debug  = console.info.bind(console);
 	 		else
 	 			cityways.logger.debug = function(){};
 	 	}
 	 	if(level == "WARN_LEVEL"){
 	 		if(val == true)
 	 			cityways.logger.warn  = console.warn.bind(console);
 	 		else
 	 			cityways.logger.warn = function(){};
 	 	}
 	 	if(level == "ERROR_LEVEL"){
 	 		if(val == true)
 	 			cityways.logger.error  = console.error.bind(console);
 	 		else
 	 			cityways.logger.error = function(){};
 	 	}
 	 	cityways.logger[level] = val;
 	 }

 };