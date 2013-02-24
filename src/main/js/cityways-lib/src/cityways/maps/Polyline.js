/**
 * @overview Class {@link cityways.maps.Polyline}.
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
 * @class cityways.maps.Polyline
 * @param {Object} options Опции
 * @param {Array<Object>} options.points The stroke width in pixels.
 * @param {Number} options.weight The stroke width in pixels.
 * @param {Number} options.opacity The stroke opacity between 0.0 and 1.0.
 * @param {String} options.color The stroke color. All CSS3 colors are supported except for extended named colors.
 * @param {Boolean} options.visible Whether this polyline is visible on the map. Defaults to true.
 */
 cityways.maps.Polyline = cityways.Class({
 	constructor : function(options) {
 		this._points = options.points;
 		if(options != undefined && options.strokeWeight != undefined){

 		}else{

 		}

 		this._options = options;
 	},

 	members :  {
 		_options : null,

 		_points : null,

 		getPoints : function(){
 			return this._points;
 		},

 		getColor : function(){
 			return this._options.color;
 		},

 		getWeight : function(){
 			return this._options.weight;
 		},

 		getOpacity : function(){
 			return this._options.opacity;
 		},

 		setColor : function(color){
 			this._options.color = color;
 		},

 		setWeight : function(weight){
 			this._options.weight = weight;
 		},	   

 		setOpacity : function(opacity){
 			var self = this;
 			self._options.opacity = opacity;
 			var args = {
 				options : {
 					opacity : opacity
 				},
 				__fire__ : self
 			};
 			cityways.event.triggerEvent(self,cityways.event.ON_CHANGED_OPTIONS,args);
 		}



 	}
 });

