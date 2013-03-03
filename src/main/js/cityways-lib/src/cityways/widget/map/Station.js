/**
 * @overview Class {@link cityways.widget.map.StationMarke}.
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
 * @class cityways.maps.Station
 * @extends {cityways.maps.Marker}
 * @param {Object} options Опции маркера
 * @param {String} options.iconFileName [dest]
 * @param {Number} options.lat desc1 [dest]
 * @param {Number} options.lon desc2 [dest]
 * 
 */
 cityways.widget.map.Station = cityways.Class({
 	extends : [cityways.maps.Marker],
 	constructor : function(options) {
 		//  Вызовем конструктор родителя
 		cityways.maps.Marker.call(this, options);
 		this._draggable = false;
 	},

 	members :  {
 		_stationID : null,

 		setID : function(id){
 			this._stationID = id;
 		}
	}
});

