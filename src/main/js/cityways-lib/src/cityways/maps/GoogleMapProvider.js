/**
 * @overview Class {@link cityways.maps.GoogleMapProvider}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 * 
 * @requires cityways/maps.js
 * @requires cityways/Class.js
 */

/**
 * @class cityways.maps.GoogleMapProvider
 * @extends {cityways.maps.IMap}
 * @classdesc Размещает  карту Google Maps(v3) внутри заданного HTML контейнера, которым обычно является div элемент.
 * @param  {String} div     ID dom элемента, в который будет помещена карта
 * @param  {cityways.Map} map
 * @param  {Object} options Начальные опции карты
 * @param  {Number} options.zoom 
 * @param  {Number} options.minZoom
 * @param  {Object} options.center
 * @param  {Number} options.center.lat
 * @param  {Number} options.center.lon
 * 
 * @example
 * <html>
 * <head>
 * 		<script>.../cityways.js</script>
 *		<script>
 * 				function initialize(){
 * 				var map = new cityways.maps.GoogleMapProvider('map');
 * 				}
 * 		</script>
 * </head>
 * <body onload="initialize()">
 * 		<div id="map"></div>
 * </body>
 * </html>
 * @example // Структура объекта options:
 * var options = {
 *      	  zoom        : {Number},             // Масштаб карты
 *      	  minZoom     : {Number},             // Минимальный масштаб
 *      	  center : {						  // Координаты центральной точки карты 
 * 			     lat : {Number},	              // Широта
 * 			     lng : {Number}	                  // Долгота
 * 			  }
 * 			  
 * };
 */
 cityways.maps.GoogleMapProvider = cityways.Class(
 {
 	constructor :  	function( div, options) {
 		this._div = div;
 		this._options = options;
 		this._markers = new cityways.type.ObjectDictionary();
 		this._polylines = new cityways.type.ObjectDictionary();

 		var self = this;
 		$(document).ready(function() {
 			var googleMapOptions = {
 				zoom : self._options.zoom,
 				center : new google.maps.LatLng(self._options.center.lat, self._options.center.lon),
 				mapTypeId : google.maps.MapTypeId.ROADMAP,
 				minZoom : self._options.minZoom
 			};
 			self._googleMap= new google.maps.Map(document.getElementById(self._div),googleMapOptions);
 			self._googleMap.setOptions({
 				draggableCursor : 'crosshair'
 			});
 			self._registerListeners();
 			self.resize(self._width,self._height);
 			self.refresh(self);
 			cityways.event.triggerEvent(self, cityways.event.ON_LOADED, self);
 		});		

 	},

 	members : {

     /**
      * [markers description]
      * @private
      * @memberOf cityways.Map.prototype
      * @type {cityways.type.ObjectDictionary<cityways.maps.Marker, Object>}
      */
      _markers : null,

      _polylines : null,


	/**
	 * @private
     * @memberOf cityways.map.GoogleMap.prototype
     * @type {String}
     */
     _width : null,

	/**
	 * @private
     * @memberOf cityways.map.GoogleMap.prototype
     * @type {String}
     */
     _height : null,

    /**
     * ID dom элемента, в который нужно поместить карту
     * @private
     * @memberOf cityways.map.GoogleMap.prototype
     * @type {String}
     */
     _div  : null,

    /**
     * Объект google.maps.Map
     * @private
     * @memberOf cityways.map.GoogleMap.prototype
     * @type {google.maps.Map}
     */
     _googleMap : null,

    /**
     * [options description]
     * @private
     * @memberOf cityways.map.GoogleMap.prototype
     * @type {Object}
     */
     _options : null,

	/**
	 * [_refresh description]
	 * @private
	 * @memberOf cityways.map.GoogleMap.prototype
	 * @return {[type]}        [description]
	 */
	 refresh : function(){
	 	if(this._googleMap == undefined)
	 		return;
	 	var markers = this._markers.getAsAssociativeArray();
	 	for(var  m in markers){
	 		markers[m].setMap(this._googleMap);
	 	}
	 	google.maps.event.trigger(this._googleMap, 'resize');
	 },

	/**
	 * Обработчик события {@link cityways.Map#event:ON_MAP_RESIZE}
	 * @private 
	 * @memberOf cityways.map.GoogleMap.prototype
	 */
	 _on_resize : function(e){
	 	if(this._googleMap != undefined)
	 		google.maps.event.trigger(this._googleMap, 'resize');
	 },

	/**
	 * Регистрирует слушателей карты и ее объектов
	 * @private 
	 * @memberOf cityways.map.GoogleMap.prototype
	 */
	 _registerListeners : function() {
	 	cityways.logger.info("_registerListeners");
	 	var self = this;
	 	google.maps.event.addListener(self._googleMap, 'click', function(e) {
	 		var args = {
	 			lat : e.latLng.lat(),
	 			lon : e.latLng.lng()
	 		};
	 		cityways.logger.info("click!",args);
	 		cityways.event.triggerEvent(self, cityways.event.ON_CLICK, args);
	 	});

	 	google.maps.event.addListener(self._googleMap, 'zoom_changed',function(e){
	 		var zoom = self._googleMap.getZoom();
	 		cityways.logger.debug("map_zoom: ", zoom);
	 		// Пробежимся по всем маркерам
	 		var keys = self._markers.getKeys();
	 		for(var k in keys){
	 			var marker = keys[k];
	 			var nativeMarker = self._markers.get(marker).native;
	 			
	 			cityways.logger.debug(marker.getMinZoom());
	 			if(zoom > marker.getMinZoom()){
	 				if(nativeMarker.getMap() == null){
	 					nativeMarker.setMap(self._googleMap);
	 				}
	 			}else
	 			{
	 				if(nativeMarker.getMap() != null){
	 					nativeMarker.setMap(null);
	 				}
	 			}
	 		}
	 	});

	 },

	 /*override*/
	 resize : function(w,h){
	 	if(w != undefined){
	 		$("#" + this._div).css('width', w);
	 		this._width = w;
	 	}
	 	if(h != undefined){
	 		$("#" + this._div).css('height', h);
	 		this._height = h;
	 	}
	 	if(this._googleMap != undefined){
	 		google.maps.event.trigger(this._googleMap, 'resize');
	 	}
	 },

	 /*override*/
	 getNativeMapObj : function(){
	 	return this._googleMap;
	 },


	 /*override*/
	 setHeight : function(h){
	 	$("#" + this._div).css('height', h);
	 	if(this._googleMap != undefined){
	 		google.maps.event.trigger(this._googleMap, 'resize');
	 	}
	 	this._height = h;
	 },

	 /*override*/
	 getHeight : function(){
	 	if(this._height == null){
	 		this._height  = $("#" + this._div).css('height');
	 	}
	 	return this._height;
	 },

	 /*override*/
	 setWidth : function(w){
	 	$("#" + this._div).css('width', w);
	 	if(this._googleMap != undefined){
	 		google.maps.event.trigger(this._googleMap, 'resize');
	 	}
	 	this._width = w;
	 },

	 /*override*/
	 getWidth : function(){
	 	if(this._width == null){
	 		this._width  = $("#" + this._div).css('width');
	 	}

	 	return this._width;
	 },

	 /*override*/
	 addMarker : function(marker){

	 	var nativeMarker = this._markers.get(marker);
	 	if(nativeMarker != undefined){
	 		if(this._googleMap != undefined) {
	 			nativeMarker.setMap(this._googleMap);
	 		}
	 		return;
	 	}

	 	nativeMarker = new google.maps.Marker();
	 	nativeMarker.setDraggable(marker.isDraggable());
	 	if(marker.getIcon() != null)
	 		nativeMarker.setIcon(new google.maps.MarkerImage(marker.getIcon()));
	 	nativeMarker.setPosition(new google.maps.LatLng(marker.getLocation().lat,
	 		marker.getLocation().lon));
	 	if(marker.getTitle() != null){
	 		nativeMarker.setTitle(marker.getTitle());
	 	}
	 	this._markers.put(marker, {
	 		native : nativeMarker,
	 		lesteners : []
	 	});
	 	var self = this;
	 	cityways.event.triggerEvent(marker,cityways.event.ON_CHANGED_LOCATION, {
	 		marker : marker,
	 		location : marker.getLocation(),
	 		__fire__ : self
	 	});

	 	google.maps.event.addListener(nativeMarker, 'dragend',function(e){
	 		var args = {
	 			marker : marker,
	 			location : {
	 				lat : e.latLng.lat(),
	 				lon : e.latLng.lng()
	 			},
	 			__fire__ : self
	 		};
	 		cityways.logger.info("google dragend", marker);
	 		cityways.event.triggerEvent(marker,cityways.event.ON_CHANGED_LOCATION,args);
	 	});

	 	google.maps.event.addListener(nativeMarker, 'click',function(e){
	 		var args = {
	 			marker : marker,
	 			__fire__ : self
	 		};
	 		cityways.event.triggerEvent(marker,cityways.event.ON_CLICK,args);
	 	});


	 	var listener1 = cityways.event.addListener(marker,cityways.event.ON_CHANGED_LOCATION,function(e){
	 		if(e.__fire__ == self)
	 			return;
	 		nativeMarker.setPosition(new google.maps.LatLng(e.location.lat,e.location.lon));
	 	});


	 	var listener1 = cityways.event.addListener(marker,cityways.event.ON_CHANGED_LOCATION,function(e){
	 		if(e.__fire__ == self)
	 			return;
	 		nativeMarker.setPosition(new google.maps.LatLng(e.location.lat,e.location.lon));
	 	});

	 	var listener2 = cityways.event.addListener(marker,cityways.event.ON_CHANGED_OPTIONS,function(e){
	 		if(e.__fire__ == self)
	 			return;
	 		if(e.options != undefined){
	 			if(e.options.title != undefined)
	 				nativeMarker.setTitle(e.options.title);
	 		}
	 	});

	 	this._markers.get(marker).lesteners = [listener1, listener2];

	 	if(this._googleMap != undefined) {
	 		nativeMarker.setMap(this._googleMap);
	 	}

	 },

	 /*override*/
	 removeMarker : function(marker){
	 	var val = this._markers.get(marker);
	 	if(val == undefined || val.native == undefined)
	 		return;
	 	var listeners = val.lesteners;
	 	var native = val.native;
	 	google.maps.event.clearInstanceListeners(native);
	 	native.setMap(null);
	 	for(var i=0; i < listeners.length; i++){
	 		cityways.event.removeListener(listeners[i]);
	 	}
	 	this._markers.pull(marker);
	 },


	 /*override*/
	 addPolyline : function(polyline){
	 	var points = polyline.getPoints();
	 	var path = [];
	 	for(var i=0; i < points.length; i++){
	 		path.push(new google.maps.LatLng(points[i][0],points[i][1]));
	 	}
	 	var nativePLine = new google.maps.Polyline();
	 	nativePLine.setOptions({
	 		strokeColor : polyline.getColor(),
	 		strokeOpacity : polyline.getOpacity(),
	 		strokeWeight : polyline.getWeight(),
	 		map : this._googleMap,
	 		path : new google.maps.MVCArray(path)
	 	});
	 	this._polylines.put(polyline,{
	 		native : nativePLine,
	 		listeners : []
	 	});
	 	
	 },

	 /*override*/
	 removePolyline : function(polyline){
	 	var val = this._polylines.get(polyline);
	 	if(val == undefined || val.native == undefined)
	 		return;
	 	var nativePLine = val.native;
	 	nativePLine.setMap(null);
	 	this._polylines.pull(polyline);
	 },

	 /* override */
	 alignment : function(points){
	 	var map = this._googleMap;
		//Определяем область показа маркеров
		var latlngbounds = new google.maps.LatLngBounds();  
		for(var i=0;i < points.length; i++){
			var myLatLng = new google.maps.LatLng(points[i].lat, points[i].lon);
			latlngbounds.extend(myLatLng);
		}
		

        //Центрируем и масштабируем карту
        map.setCenter( latlngbounds.getCenter(), map.fitBounds(latlngbounds));   


    },



    /*override*/
    destroy : function(marker){

    }

}
}

);
