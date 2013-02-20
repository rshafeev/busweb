/**
 * @overview Class {@link cityways.type.StringDictionary}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 * 
 * @requires cityways/type/Dictionary.js
 */


/**
 * 
 * @classdesc Класс Dictionary является словарем, ключами которого выступают строковые значения.
 * @class cityways.type.StringDictionary
 * @extends {cityways.type.IDictionary}
 */
 cityways.type.StringDictionary = cityways.Class({
 	
 	constructor :  function() {
 		this.keys = {};
 		this._size = 0;
 	},

 	members : {	

 	/**
	 * Хранит пары ключ-значение
	 * @protected
	 * @memberOf cityways.type.Dictionary.prototype
	 * @type {Object} 
	 */
	 keys : null,

	/**
	 * Количество элементов в словаре
	 * @protected
	 * @memberOf cityways.type.Dictionary.prototype
	 * @type {Number}
	 */
	 _size : null,


	 put : function(key, value){
	 	if(key != undefined){
	 		if(this.keys[key] != undefined){
	 			return false;
	 		}
	 	}
	 	this.keys[key] = value;
	 	this._size++;
	 	return true;
	 },

	 pull : function(key){
	 	if(key != undefined){
	 		delete this.keys[key];
	 		this._size--;
	 	}
	 },

	 get : function(key){
	 	if(key == undefined || this.keys[key] == undefined ){
	 		return null;
	 	}
	 	return this.keys[key];
	 },

	 size : function(){
	 	return this._size;
	 }
	}
});