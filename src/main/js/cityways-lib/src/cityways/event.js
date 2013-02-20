/**
 * @overview Namespace {@link cityways.event}.
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
 * @namespace cityways.event
 */
 cityways.event = {

	/**
	 * [listeners description]
	 * @type { {@link cityways.type.Dictionary}<Object,Dictionary<String, Array<cityways.map.EventListener > > >}
	 * @private
	 * @example
	 * var listeners = {
	 * 			"obj1" : {
	 * 				"click" : [
	 * 					{cityways.map.EventListener} object,
	 * 				    {cityways.map.EventListener} object
	 * 				    ],
	 *
	 * 				"drag_end" : [
	 * 					{cityways.map.EventListener} object
	 * 				 	]
	 * 			},
	 * 			"obj2" : {
	 * 				"move" : [
	 * 					{cityways.map.EventListener} object,
	 * 				    {cityways.map.EventListener} object,
	 * 					{cityways.map.EventListener} object
	 * 					]
	 *     		}
	 * };
	 */
	 listeners : null,

	 /**
	  * [addListener description]
	  * @param {Object}   object   				[description]
	  * @param {String}   evt      				[description]
	  * @param {Function} callback 				[description]
	  * @return {cityways.map.EventListener}    [description]
	  */
	  addListener : function(object, evt, callback) {
	  	if(cityways.event.listeners == undefined)
	  	{
	  		cityways.event.listeners = new cityways.type.Dictionary();
	  	}
	 	//var listeners = cityways.event.listeners;
	 	var listener = new cityways.EventListener(object, evt, callback);

	 	 cityways.logger.info(object);
	 	
	 	if(cityways.event.listeners.get(object) == null){
	 		var val = {};
	 		val[evt] = [];
	 		cityways.event.listeners.put(object,val);
	 	}
	 	else 
	 		if(cityways.event.listeners.get(object)[evt] == undefined){
	 			cityways.event.listeners.get(object)[evt] = [];
	 		}
	 	cityways.logger.info(cityways.event.listeners);
	 	
	 	cityways.event.listeners.get(object)[evt].push(listener);
	 	
	 	return listener;

	 	},

	 /**
	  * [removeListener description]
	  * @param  {cityways.map.EventListener} listener [description]
	  */
	  removeListener : function(listener) {
	  	var listeners = cityways.event.listeners;
	  	if ( listeners.get(listener.object) && listeners.get(listener.object)[listener.evt]) {
	  		var evtListeners = listeners.get(listener.object)[listener.evt];
	  		for(var i=0; i < evtListeners.length; i++){
	  			if(evtListeners[i] == listener){
	  				evtListeners.remove(i);
	  				return true;
	  			}
	  		}
	  	}
	  	return false;
	  },

	  removeListeners : function(object, evt){
	  	var listeners = cityways.event.listeners;
	  	if(listeners.get(object) == null)
	  		return;
	  	if(evt == undefined ){
	  		listeners.pull(object);
	  		return;
	  	}
	  	if(listeners.get(object)[evt] != undefined)
	  		delete listeners.get(object)[evt];

	  },

	 /**
	  * [triggerEvent description]
	  * @param  {Object} object [description]
	  * @param  {[type]} evt    [description]
	  * @param  {[type]} args   [description]
	  * @return {[type]}        [description]
	  */
	  triggerEvent : function(object, evt, args) {
	  	cityways.logger.info(cityways.event.listeners);
	  	var listeners = cityways.event.listeners;
	  	if(listeners == undefined)
	  		return;
	  	if( listeners.get(object) && listeners.get(object)[evt]){
	  		var objListeners = listeners.get(object)[evt];
	  		for(var i = 0; i < objListeners.length; i++){
	  			objListeners[i].callback(args);
	  		}
	  	}
	  },


	 /**
 	 * @constant
 	 * @type {String}
 	 */
 	 ON_CLICK : 1,

 	/**
 	 * @constant
 	 * @type {String}
 	 */
 	 ON_LOADED : 2,

 	/**
 	 * @constant
 	 * @type {String}
 	 */
 	 ON_RESIZE : 3,

 	/**
 	 * @constant
 	 * @type {String}
 	 */
 	 ON_CHANGED_LOCATION : 4,

 	/**
 	 * @constant
 	 * @type {String}
 	 */
 	 ON_CHANGED_ADDRESS  : 5,

 	/**
 	 * @constant
 	 * @type {String}
 	 */
 	 ON_CHANGED_DESTINATION_ADDR    : 7,


 	/**
 	 * @constant
 	 * @type {String}
 	 */
 	 ON_CHANGED_OPTIONS : 8




 	};