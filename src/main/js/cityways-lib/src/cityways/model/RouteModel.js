/**
 * @overview Class {@link cityways.model.RouteModel}.
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
 * @class cityways.model.RouteModel
 * @param  {Object} rowPathData Данные пути, полученные от сервера
 */
 cityways.model.RouteModel = cityways.Class({
 	
 	constructor : function(data) {
 		cityways.extend(this, data);
 		

 	},

 	members : {

	/**
 	 * [startLocation description]
     * @memberOf cityways.model.RouteModel.prototype
 	 * @type {Number}
 	 */
 	 ID: null,

	/**
 	 * [startLocation description]
     * @memberOf cityways.model.RouteModel.prototype
 	 * @type {Number}
 	 */ 	 
 	 cost: null,

	/**
 	 * [startLocation description]
     * @memberOf cityways.model.RouteModel.prototype
 	 * @type {String}
 	 */ 
 	 name: null,

	/**
 	 * [startLocation description]
     * @memberOf cityways.model.RouteModel.prototype
 	 * @type {String}
 	 */ 
 	 type: null,

	/**
 	 * [startLocation description]
     * @memberOf cityways.model.RouteModel.prototype
 	 * @type {cityways.model.RouteWayModel}
 	 */ 
 	 directWay : null,

	/**
 	 * [startLocation description]
     * @memberOf cityways.model.RouteModel.prototype
 	 * @type {cityways.model.RouteWayModel}
 	 */ 
 	 reverseWay : null,

	/**
 	 * [startLocation description]
     * @memberOf cityways.model.RouteModel.prototype
 	 * @type {Object}
 	 */ 
 	 timetable : null


	}
});