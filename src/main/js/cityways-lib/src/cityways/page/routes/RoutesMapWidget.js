/**
 * @overview Class {@link cityways.page.routes.RoutesMapWidget}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 * 
 * @requires cityways/Class.js
 */

/**
 * [MapWidget description]
 * @class cityways.page.routes.RoutesMapWidget
 * @constructor 
 * @param  {String} div     ID dom элемента, в который будет помещена карта
 * @param  {Object} options Начальные опции карты
 * @example // Структура объекта options:
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
 cityways.page.routes.RoutesMapWidget  =  cityways.Class({

 	constructor :  function(div,options){
 		var self = this;
 		self._options = options;
 		self._options.minZoom = options.zoom - 2;
 		self._map = new cityways.Map(div,options);
 		self._routes = [];
 	},

 	members: {

  	/**
 	 * [_routes description]
 	 * @private
 	 * @memberOf cityways.maps.MapWidget.prototype
 	 * @type Array<{cityways.widget.map.Route}>
 	 */   
 	 _routes : null,

 	/**
 	 * [map description]
 	 * @private
 	 * @memberOf cityways.maps.MapWidget.prototype
 	 * @type {cityways.Map}
 	 */
 	 _map : null, 

 	/**
 	 * [options description]
 	 * @private
 	 * @memberOf cityways.maps.MapWidget.prototype
 	 * @type {[Object}
 	 */
 	 _options : null,


 	 getMap : function(){
 	 	return this._map;
 	 },

 	 resizeMap : function(w,h){
 	 	if(this._map != undefined){
 	 		this._map.resize(w,h);
 	 	}
 	 },

 	 setHeight : function(h){
 	 	if(this._map != undefined){
 	 		this._map.setHeight(h);
 	 	}
 	 	cityways.logger.info("widget setHeight()",h);
 	 },

 	 setWidth : function(w){
 	 	if(this._map != undefined){
 	 		this._map.setWidth(w);
 	 	}		
 	 },



 	 removeAllRoutes : function(){
 	 	var self = this;
 	 	for (var i = 0; i < self._paths.length; i++) {
 	 		var polylines = self._paths[i].getAllPolylines();
 	 		var stations = self._paths[i].getAllStations();
 	 		for(var j=0;j < polylines.length; j++){
 	 			this._map.removePolyline(polylines[j]);
 	 		} 
 	 		for(var j=0;j < stations.length; j++){
 	 			this._map.removeMarker(stations[j]);
 	 		} 

 	 	};
 	 },

	 /**
	  * [addPath description]
	  * @param {cityways.widget.map.Route} path [description]
	  */
	  addRoute : function(route,isCentroid){
	  	var self = this;
	  	var polylines = route.getAllPolylines();
	  	var stations = route.getAllStations();
	  	var alignmentPoints = [];
	  	for(var j=0;j < polylines.length; j++){
	  		self._map.addPolyline(polylines[j]);
	  	} 
	  	for(var j=0;j < stations.length; j++){
	  		self._map.addMarker(stations[j]);
	  		alignmentPoints.push({
	  			lat : stations[j].getLocation().lat,
	  			lon : stations[j].getLocation().lon
	  		});
	  	} 
	  	if(isCentroid == true){
	  		self._map.alignment(alignmentPoints);
	  	}
	  	self._routes.push(route);
	  },

	  removeRoute : function(route){
	  	var self = this;
	  	var polylines = route.getAllPolylines();
	  	var stations = route.getAllStations();
	  	for(var j=0;j < polylines.length; j++){
	  		self._map.removePolyline(polylines[j]);
	  	} 
	  	for(var j=0;j < stations.length; j++){
	  		self._map.removeMarker(stations[j]);
	  	} 
	  	for(var i=0;i < self._routes.length; i++){
	  		if(self._routes[i] == route){
	  			self._routes.splice(i,1);
	  			break;
	  		}
	  	}
	  }




	}
	
	/* EVENTS */

	 /**
	 * Вызывается при изменении адреса начальной или конечной точки назначения.
	 * @event cityways.MapWidget#ON_CHANGED_DESTINATION_ADDR.
	 * @property {String} addr Новый адрес точки назначения.
	 * @property {String} dest "start" : если изменился адрес начальной точки, "finish" : конечной.
	 * @property {cityways.maps.Marker} marker Маркер, у которго был изменен адрес.
	 */


	});