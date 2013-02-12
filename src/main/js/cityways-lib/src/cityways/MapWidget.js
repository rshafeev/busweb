/**
 * @overview class cityways.MapWidget
 * @copyright 
 * 2012,PremiumGIS Inc. All Rights Reserved. <a href="http://premiumgis.com">PremiumGIS</a>
 * Project url: <a href="http://ways.in.ua">cityways</a>
 * 
 * @author <a href="mailto:rs@premiumgis.com">Roman Shafeyev</a>
 * 
 * @requires cityways/Class.js
 */

/**
 * [MapWidget description]
 * @class cityways.MapWidget
 */
cityways.MapWidget  =  cityways.Class({

	map : null,

	options : null,

	/**
	 * @constructor 
	 * @param  {String} div     ID dom элемента, в который будет помещена карта
	 * @param  {Object} options Начальные опции карты
	 * @example Структура объекта options:
	 * options = {
	 * 			  mapProvider : {String}, 			// Провайдер карты, значения: "google", "yandex"
	 *    		  providerKey : {String},           // Key провайдера(только для yandex карт)
	 *      	  zoom        : {Number},           // Масштаб карты
	 *      	  center : {						// Координаты центральной точки карты 
	 * 			     lat : {Number},	            // Широта
	 * 			     lng : {Number}	                // Долгота
	 * 			  }
	 * };
	 */
	initialize : function(div,options){
		this.options = options;
		this.options.minZoom = options.zoom - 2;
		this.map = new cityways.Map(div,options);
	},


	getMap : function(){
		return this.map;
	}


});