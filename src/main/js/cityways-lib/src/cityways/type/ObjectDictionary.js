/**
 * @overview Class {@link cityways.type.Dictionary}.
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
 * @class cityways.type.ObjectDictionary
 * @classdesc Класс Dictionary является словарем, ключами которого могут выступать как строковые значения, так и объекты любого типа.
 * @extends {cityways.type.IDictionary}
 */
 cityways.type.ObjectDictionary = cityways.Class({
 	
 	constructor :  function() {
 		this._keys = {};
 		this._size = 0;
 		if(cityways.type.__dictionary__id__ == undefined)
 			cityways.type.__dictionary__id__ = 0;
 	},

 	members : {	
 		/**
	 * Хранит пары ключ-значение
	 * @protected
	 * @memberOf cityways.type.Dictionary.prototype
	 * @type {Object} 
	 */
	 _keys : null,

	/**
	 * Количество элементов в словаре
	 * @protected
	 * @memberOf cityways.type.Dictionary.prototype
	 * @type {Number}
	 */
	 _size : null,


	 _nextID : function(){
	 	cityways.type.__dictionary__id__ = cityways.type.__dictionary__id__ + 1;
	 	return cityways.type.__dictionary__id__;
	 },

	 /* override */
	 put : function(key, value){
	 	if(key.__dictionary__id__ != undefined){
	 		if(this._keys[key.__dictionary__id__] != undefined){
	 			return false;
	 		}
	 	}
	 	else{
	 		key.__dictionary__id__ = this._nextID();
	 	}
	 	this._keys[key.__dictionary__id__] = value;
	 	this._size++;
	 	return true;
	 },

	 /* override */
	 pull : function(key){
	 	if(key.__dictionary__id__ != undefined && this._keys[key.__dictionary__id__]){
	 		delete this._keys[key.__dictionary__id__];
	 		this._size--;
	 	}
	 },

	 /* override */
	 get : function(key){
	 	if(key.__dictionary__id__ == undefined || this._keys[key.__dictionary__id__] == undefined ){
	 		return null;
	 	}
	 	return this._keys[key.__dictionary__id__];
	 },

	 /* override */
	 size : function(){
	 	return this._size;
	 },

	 /* override */
	 getAsAssociativeArray: function(){
	 	return this._keys;
	 }
	}
});