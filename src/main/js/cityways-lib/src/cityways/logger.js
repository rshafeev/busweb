/**
 * @overview namespace cityways.logger
 * @copyright 
 * 2012,PremiumGIS Inc. All Rights Reserved. <a href="http://premiumgis.com">PremiumGIS</a>
 * Project url: <a href="http://ways.in.ua">cityways</a>
 * 
 * @author <a href="mailto:rs@premiumgis.com">Roman Shafeyev</a>
 * 
 * @requires cityways/cityways.js
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
 	
 	info  : function(){},

 	debug : function(){},

 	warn  : function(){},

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
		cityways.logger[level] = val;
 		
 	}

 };