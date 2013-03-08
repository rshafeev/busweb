/**
 * @overview Class {@link cityways.model.RouteWayModel}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 * 
 * @requires cityways/model.js
 * @requires cityways/Class.js
 */

 /**
 * [Path description]
 * @class cityways.model.RouteWayModel
 * @param  {Object} rowPathData Данные пути, полученные от сервера
 */
 cityways.model.RouteWayModel = cityways.Class({
 	
 	constructor : function(data) {
 		cityways.extend(this, data);
 		this._isHasGeomData = false;

 	},

 	members : {

	/**
 	 * [startLocation description]
     * @memberOf cityways.model.RouteWayModel.prototype
 	 * @type {Number}
 	 */
 	 ID: null,

	/**
 	 * [startLocation description]
     * @memberOf cityways.model.RouteWayModel.prototype
 	 * @type {Number}
 	 */ 	 
 	 distance: null,

  	 /**
 	 * [startLocation description]
     * @memberOf cityways.model.RouteWayModel.prototype
 	 * @type {Array}
 	 */ 	 
 	 roads: null,

  	 /**
 	 * [startLocation description]
     * @memberOf cityways.model.RouteWayModel.prototype
 	 * @type {Array}
 	 */  	 
 	 stations: null
 	 


	}
});