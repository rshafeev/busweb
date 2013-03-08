/**
 * @overview Class {@link cityways.model.PathModel}.
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
 * @class cityways.model.PathModel
 * @param  {Object} rowPathData Данные пути, полученные от сервера
 */
 cityways.model.PathModel = cityways.Class({
 	
 	constructor : function(rowPathData) {
 		cityways.extend(this, rowPathData);
 		this._isHasGeomData = false;

 	},

 	members : {


 	_isHasGeomData  : null,


 	/**
 	 * [startLocation description]
     * @memberOf cityways.model.Path.prototype
 	 * @type {[type]}
 	 */
 	 startLocation : null,

 	/**
 	 * [finishLocation description]
 	 * @memberOf cityways.model.Path.prototype
 	 * @type {Object}
 	 */
 	 finishLocation : null,


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
 	 * [output description]
 	 * @memberOf cityways.model.Path.prototype
 	 * @type {Object}
 	 */
 	 output : null,

 	/**
 	 * [transitions description]
 	 * @memberOf cityways.model.Path.prototype
 	 * @type {Array<Object>}
 	 */
 	 transitions : [],

 	/**
 	 * [routes description]
 	 * @memberOf cityways.model.Path.prototype
 	 * @property {Number} ID
 	 * @property {Number} startInd
 	 * @property {Number} finishInd
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
	},

	/**
	 * [setGeomData description]
	 * @param {[type]} data [description]
	 */
	 setGeomData : function(data){
	 	cityways.logger.info("setGeomData1()", data);
	 	cityways.logger.info("setGeomData2()", this.routes);
	 	for(var i=0;i < data.routes.length; i++){
	 		var routeData = data.routes[i];
	 		var route = this.getRouteByID(routeData.ID);
	 		if(route!=null){
	 			route.stations = routeData.stations;
	 			route.roads = routeData.roads;
	 			cityways.logger.info("setGeomData3()",route);
	 		}
	 		
	 	}
	 	
	 	this._isHasGeomData = true;
	 },

	 hasGeomData : function(){
	 	return this._isHasGeomData;
	 },

	 getRouteByID : function(id){
	 	if(this.routes == undefined)
	 		return null;
	 	for(var i=0;i < this.routes.length; i++)
	 	{
	 		if(this.routes[i].ID == id)
	 			return this.routes[i];
	 	}

	 	return null;
	 }


	}
});