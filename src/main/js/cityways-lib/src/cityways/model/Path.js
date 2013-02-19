/**
 * @overview Class {@link cityways.model.Path}.
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
 * @class cityways.model.Path
 * @param  {Object} rowPath Данные пути, полученные от сервера
 */
 cityways.model.Path = cityways.Class({
 	
 	constructor : function(rowPath) {
 		cityways.extend(this, rowPath);

 	},

 	members : {

 	/**
 	 * [pathID description]
 	 * @memberOf cityways.model.Path.prototype
 	 * @type {Number}
 	 */
 	 pathID : null,

 	/**
 	 * [input description]
 	 * @memberOf cityways.model.Path.prototype
 	 * @type {Object}
 	 */
 	 input : null,

 	/**
 	 * [out description]
 	 * @memberOf cityways.model.Path.prototype
 	 * @type {Object}
 	 */
 	 out : null,

 	/**
 	 * [transitions description]
 	 * @memberOf cityways.model.Path.prototype
 	 * @type {Array<Object>}
 	 */
 	 transitions : [],

 	/**
 	 * [routes description]
 	 * @memberOf cityways.model.Path.prototype
 	 * @type {Array<Object>}
 	 */
 	 routes : [],

	/**
	* Возвращает стоимть пути
	* @memberOf cityways.model.Path.prototype
	* @return {Number} [description]
	*/
	getFullCost : function() {
		if (this.routes == null)
			return 0.0;
		var cost = 0.0;
		for (var i = 0; i < this.routes.length; i++) {
			cost += this.routes[i].cost;
		}
		/*Отформатируем строку*/
		return cost;
	},

	/**
	* Возвращает время передвижения пешком
	* @memberOf cityways.model.Path.prototype
	* @return {String} [description]
	*/
	getWalkingTime : function(){
		var time = 0.0;
		for(var i=0;i < this.transitions.length; i++)
		{
			time += this.transitions[i].moveTimeSecs;
		}
		time += this.input.moveTimeSecs;
		time += this.output.moveTimeSecs;			 
		return cityways.helper.time.secsToLocaleString(time);
	}
}
});