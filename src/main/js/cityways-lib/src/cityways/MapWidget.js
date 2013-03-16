/**
 * @overview Class {@link cityways.MapWidget}.
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
 * @class cityways.MapWidget
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
 cityways.MapWidget  =  cityways.Class({

 	constructor :  function(div,options){
 		this._options = options;
 		this._options.minZoom = options.zoom - 2;
 		this._map = new cityways.Map(div,options);
 		var self = this;
 		cityways.event.addListener(this._map,cityways.event.ON_CLICK,function(e){
 			self._onClickMap(e);
 		});
 		this._paths = [];
 	},

 	members: {

  	/**
 	 * [_paths description]
 	 * @private
 	 * @memberOf cityways.MapWidget.prototype
 	 * @type {cityways.type.ObjectDictionary<Object,Object>}
 	 */   
 	 _paths : null,

 	/**
 	 * [map description]
 	 * @private
 	 * @memberOf cityways.MapWidget.prototype
 	 * @type {cityways.Map}
 	 */
 	 _map : null, 

 	/**
 	 * [options description]
 	 * @private
 	 * @memberOf cityways.MapWidget.prototype
 	 * @type {[Object}
 	 */
 	 _options : null,

	/**
	 * [startMarker description]
	 * @private
	 * @memberOf cityways.MapWidget.prototype
	 * @type {cityways.maps.Marker}
	 */
	 _startMarker  : null,

	/**
	 * [finishMarker description]
	 * @private
	 * @memberOf cityways.MapWidget.prototype
	 * @type {cityways.maps.Marker}
	 */
	 _finishMarker : null,


	 _onClickMap : function(e){
	 	var self = this;
	 	if(this._startMarker == null){
	 		self._startMarker  = new cityways.maps.Marker({
	 			iconFileName : cityways.options.getResourcePath() + "images/marker_a.png"
	 		});
	 		cityways.event.addListener(this._startMarker,cityways.event.ON_CHANGED_LOCATION,function(e){

	 			self._onChangedDestMarkersLocation(e);
	 		});
	 		this._startMarker.setLocation(e.lat,e.lon);
	 		this._map.addMarker(this._startMarker);
	 		return;
	 	}
	 	if(this._finishMarker == null){
	 		var resourcePath = cityways.options.getResourcePath();
	 		this._finishMarker = new cityways.maps.Marker({
	 			iconFileName : cityways.options.getResourcePath() + "images/marker_b.png"
	 		});
	 		cityways.event.addListener(this._finishMarker,cityways.event.ON_CHANGED_LOCATION,function(e){
	 			self._onChangedDestMarkersLocation(e);
	 		});
	 		this._finishMarker.setLocation(e.lat,e.lon);
	 		this._map.addMarker(this._finishMarker);
	 		return;
	 	}
	 	cityways.logger.info('Click on the map.',e);
	 },

	 _onChangedDestMarkersLocation : function (e){
	 	var self = this;
	 	var geocoder = new cityways.loader.Geocoder();
	 	geocoder.getAddress(e.location.lat, e.location.lon,function(addr){
	 		addr = addr == null ? "" : addr;

	 		e.marker.setAddress(addr);
	 		var args = {
	 			addr : addr,
	 			dest : e.marker == self._startMarker ? "start" : "finish",
	 			marker : e.marker
	 		};
	 		cityways.event.triggerEvent(self,cityways.event.ON_CHANGED_DESTINATION_ADDR, args);
	 	});
	 },


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


	 getStartMarker : function(){
	 	return this._startMarker;
	 },

	 getFinishMarker : function(){
	 	return this._finishMarker;
	 },


	 removeAllPaths : function(){
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
	  * @param {cityways.widget.map.Path} path [description]
	  */
	  addPath : function(path){
	  	var self = this;
	  	var polylines = path.getAllPolylines();
	  	var stations = path.getAllStations();
	  	for(var j=0;j < polylines.length; j++){
	  		self._map.addPolyline(polylines[j]);
	  	} 
	  	for(var j=0;j < stations.length; j++){
	  		self._map.addMarker(stations[j]);
	  	} 
	  	self._paths.push(path);
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