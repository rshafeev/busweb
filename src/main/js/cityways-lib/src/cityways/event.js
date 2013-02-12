/**
 * @overview namespace cityways.event
 * @copyright 
 * 2012,PremiumGIS Inc. All Rights Reserved. <a href="http://premiumgis.com">PremiumGIS</a>
 * Project url: <a href="http://ways.in.ua">cityways</a>
 * 
 * @author <a href="mailto:rs@premiumgis.com">Roman Shafeyev</a>
 * 
 * @requires cityways/cityways.js
 */

/**
 * @namespace cityways.event
 */
 cityways.event = {

	/**
	 * [listeners description]
	 * @type {Dictionary<Object,Dictionary<String, Array<cityways.map.EventListener > > >}
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
	 listeners : {},

	 /**
	  * [addListener description]
	  * @param {Object}   object   				[description]
	  * @param {String}   evt      				[description]
	  * @param {Function} callback 				[description]
	  * @return {cityways.map.EventListener}    [description]
	  */
	 addListener : function(object, evt, callback) {
	 	var listeners = cityways.event.listeners;
	 	if(object[evt]){
	 		var listener = new cityways.EventListener(object, evt, callback);
	 		if(cityways.event.listeners[object] == undefined){
	 			cityways.event.listeners[object] = {};
	 			cityways.event.listeners[object][evt] = [];
	 		}
	 		cityways.event.listeners[object][evt].push(listener);
	 		return listener;
	 	}
	 	return null;

	 },

	 /**
	  * [removeListener description]
	  * @param  {cityways.map.EventListener} listener [description]
	  */
	 removeListener : function(listener) {
	 	var listeners = cityways.event.listeners;
	 	if ( listeners[listener.object] && listeners[listener.object][listener.evt]) {
	 		var objListeners = listeners[listener.object][listener.evt];
	 		for(var i=0; i < objListeners.length; i++){
	 			if(objListeners[i] == listener){
	 				objListeners.remove(i);
	 				return;
	 			}
	 		}
	 	}
	 },

	 /**
	  * [triggerEvent description]
	  * @param  {Object} object [description]
	  * @param  {[type]} evt    [description]
	  * @param  {[type]} args   [description]
	  * @return {[type]}        [description]
	  */
	 triggerEvent : function(object, evt, args) {
	 	var listeners = cityways.event.listeners;
	 	if(listeners[object] && listeners[object][evt]){
	 		var objListeners = listeners[object][evt];
	 		for(var i = 0; i < objListeners.length; i++){
	 			objListeners[i].callback(args);
	 		}
	 	}
	 } 


};