/**
 * @overview Class {@link cityways.maps.Marker}.
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
 * [Marker description]
 * @class cityways.maps.Marker
 * @param {Object} options Опции маркера
 * @param {String} options.iconFileName [dest]
 * @param {Number} options.lat desc1 [dest]
 * @param {Number} options.lon desc2 [dest]
 * @param {Number} options.minZoom 
 * @param {String} options.title 
 */
 cityways.maps.Marker = cityways.Class({
 	constructor : function(options) {
 		this._maps = new cityways.type.Dictionary(cityways.type.DICTIONARY_OBJECT_KEY); 

 		this._draggable = true;
 		this._location = {
 			lat : 0.0,
 			lon : 0.0
 		};
 		this._registryListeners();

 		if(options && options.lat!= undefined &&  options.lon != undefined){
 			this.setLocation(options.lat,options.lon);
 		}
 		if(options && options.iconFileName != undefined){
 			this.setIcon(options.iconFileName);
 		}
 		if(options && options.minZoom != undefined){
 			this.setMinZoom(options.minZoom);
 		}else
 		{
 			this.setMinZoom(0);
 		}
 	},

 	members :  {

 		_title : null,


	/**
	 * [draggable description]
	 * @private
	 * @memberOf cityways.maps.Marker.prototype
	 * @type {boolean}
	 */
	 _draggable : null,


	/**
	 * [location description]
	 * @private
	 * @memberOf cityways.maps.Marker.prototype
	 * @type {Object}
	 */
	 _location : null,

	/**
	 * [address description]
	 * @private
	 * @memberOf cityways.maps.Marker.prototype
	 * @type {String}
	 */
	 _address : null,

	/**
	 * [img description]
	 * @private
	 * @memberOf cityways.maps.Marker.prototype
	 * @type {String}
	 */
	 _iconFileName    : null,

	 _registryListeners : function(){
	 	var self = this;
	 	cityways.event.addListener(this,cityways.event.ON_CHANGED_LOCATION,function(e){
	 		// Свойство __fire__ хранит ссылку на объект, который вызвал  триггер на текущее событие. 
	 		// Если триггер вызвал текущий маркер, тогда выходим с обработчика события.
	 		if(e.__fire__ == self){
	 			return;
	 		}
	 		//self.setLocation(e.location.lat,e.location.lon);
	 		self._location = e.location;	
	 		cityways.logger.info(e,self);
	 	});
	 	cityways.event.addListener(self,cityways.event.ON_CHANGED_OPTIONS,function(e){
	 		// Свойство __fire__ хранит ссылку на объект, который вызвал  триггер на текущее событие. 
	 		// Если триггер вызвал текущий маркер, тогда выходим с обработчика события.
	 		if(e.__fire__ == self){
	 			return;
	 		}
	 		if(e.options.draggable){
	 			self._draggable = e.options.draggable;
	 		}
	 		if(e.options.iconFileName){
	 			self._iconFileName = e.options.iconFileName;
	 		}

	 	});
	 },

	/**
	 * [setImage description]
	 * @memberOf cityways.maps.Marker.prototype
	 * @param {[type]} iconFileName [description]
	 */
	 setIcon : function(iconFileName){
	 	if(iconFileName != undefined){
	 		this._iconFileName = iconFileName;
	 		var args = {
	 			marker : this,
	 			options : {
	 				iconFileName : iconFileName
	 			},
	 			__fire__ : this
	 		};
	 		cityways.event.triggerEvent(this,cityways.event.ON_CHANGED_OPTIONS,args);
	 	}
	 },

	/**
	 * [getIcon description]
	 * @memberOf cityways.maps.Marker.prototype
	 * @return {String} [description]
	 */
	 getIcon : function(){
	 	return this._iconFileName;
	 },

	/**
	 * [getLocation description]
	 * @memberOf cityways.maps.Marker.prototype
	 * @return {Object} [description]
	 */
	 getLocation : function(){
	 	return this._location;
	 },

	/**
	 * [setLocation description]
	 * @memberOf cityways.maps.Marker.prototype
	 * @param {[type]} lat [description]
	 * @param {[type]} lon [description]
	 */
	 setLocation : function(lat,lon){
	 	this._location = {
	 		lat : lat,
	 		lon : lon
	 	};
	 	var args = {
	 		marker : this,
	 		location : this._location,
	 		__fire__ : this
	 	};
	 	cityways.event.triggerEvent(this,cityways.event.ON_CHANGED_LOCATION,args);
	 },

	 setAddress : function(address){
	 	if(address != undefined){
	 		var args = {
	 			marker : this,
	 			addr : address,
	 			oldAddr : this._address,
	 			__fire__ : this
	 		};
	 		this._address = address;
	 		cityways.event.triggerEvent(this,cityways.event.ON_CHANGED_ADDRESS,args);
	 	}
	 },
	 
	 setDraggable : function(val){
	 	this._draggable = val;

	 	var args = {
	 		options : {
	 			draggable : this._draggable
	 		},
	 		__fire__ : this
	 	};
	 	cityways.event.triggerEvent(this,cityways.event.ON_CHANGED_OPTIONS,args);
	 },

	 destroy : function(){
	 	cityways.event.removeListeners(this);
	 },

	 isDraggable : function(){
	 	return this._draggable;
	 },


	 setTitle : function(title){
	 	var self = this;
	 	self._title = title;

	 	var args = {
	 		options : {
	 			title : title
	 		},
	 		__fire__ : self
	 	};
	 	cityways.event.triggerEvent(self,cityways.event.ON_CHANGED_OPTIONS,args);
	 },

	 getTitle : function(){
	 	return this._title;
	 },

	 setMinZoom : function(minZoom){
	 	this._minZoom = minZoom;
	 },

	 getMinZoom : function(){
	 	return this._minZoom;
	 }


	}

	/*  EVENTS */

	/**
	 * Вызывается при изменении местоположения маркера
	 * @event cityways.maps.Marker#ON_CLICK
	 * @property {cityways.maps.Marker} marker Маркер, у которго было вызвано данное событие
	 */

	/**
	 * Вызывается при изменении местоположения маркера
	 * @event cityways.maps.Marker#ON_CHANGED_LOCATION
	 * @property {cityways.maps.Marker} marker Маркер, у которго было вызвано данное событие
	 * @property {Object} location Новое местоположение маркера.
	 * @property {Number} location.lat
	 * @property {Number} location.lon
	 * 
	 */
	 

	/**
	 * Вызывается при изменении адреса маркера
	 * @event cityways.maps.Marker#ON_CHANGED_ADDRESS
	 * @property {cityways.maps.Marker} marker Маркер, у которго было вызвано данное событие
	 * @property {String} addr Новый адрес
	 * @property {String} oldAddr Старый адрес
	 */
	 
	 /**
	  * Вызваается при изменении изображения маркера
	  * @event cityways.maps.Marker#ON_CHANGED_OPTIONS
	  * @property {cityways.maps.Marker} marker Маркер, у которго было вызвано данное событие
	  * @property {Object} options Название файла нового изображения маркера.
	  */

	});

