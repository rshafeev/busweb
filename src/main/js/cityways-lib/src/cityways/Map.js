/**
 * @overview abstract class cityways.Map
 * @copyright 
 * 2012,PremiumGIS Inc. All Rights Reserved. <a href="http://premiumgis.com">PremiumGIS</a>
 * Project url: <a href="http://ways.in.ua">cityways</a>
 * 
 * @author <a href="mailto:rs@premiumgis.com">Roman Shafeyev</a>
 * 
 * @requires cityways/Class.js
 * @requires cityways/page.js
 */

/**
 * [Map description]
 * @interface cityways.Map 
 * @example
 * <html>
 * 	<head>
 * 		<script>.../cityways.js</script>
 *		<script>
 * 				function initialize(){
 * 				var options = {
 * 					mapProvider : "google"
 * 				};
 * 				var map = new cityways.Map('map',options);
 * 				}
 * 		</script>
 *  </head>
 * <body onload="initialize()">
 * 		<div id="map"></div>
 * </body>
 * </html>
  */
cityways.Map = cityways.Class({

    /**
     * @event Событие вызывается, когда произошло нажатие клавишей мыши на карте 
     * @example Описание аргументов:
     * {
     * 		lat : {Number},
     * 		lng : {Number}
     * };
     */
    "click" : true,

    mapObj : null,
 
 	/**
 	 * @constructor
	 * @param  {String} div     ID dom элемента, в который будет помещена карта
	 * @param  {Object} options Начальные опции карты
	 * @example Структура объекта options:
	 * options = {
	 * 			  mapProvider : {String}, 			  // Провайдер карты, значения: "google", "yandex"
	 *    		  providerKey : {String},             // Key провайдера(только для yandex карт)
	 *      	  zoom        : {Number},             // Масштаб карты
	 *      	  minZoom     : {Number},             // Минимальный масштаб
	 *      	  center : {						  // Координаты центральной точки карты 
	 * 			     lat : {Number},	              // Широта
	 * 			     lng : {Number}	                  // Долгота
	 * 			  }
	 * };
 	 */
	initialize : function(div, options) {
		this.div = div;
	    var mapObj = null;
	    if(options.mapProvider == "google")
	    	mapObj = new cityways.map.GoogleMap(div,options);
	    this.mapObj = mapObj;
	    cityways.extend(this,this.mapObj);
	},

	/**
	 * [getNativeMapObj description]
	 * @return {[type]} [description]
	 * 
	 */
	getNativeMapObj : function(){}


});