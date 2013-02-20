/**
 * @overview Class {@link cityways.type.Dictionary}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 * 
 * @requires cityways/type.js
 * @requires cityways/Class.js
 */

/**
 * @param {String} keyType {@link cityways.type.DICTIONARY_OBJECT_KEY} или {@link cityways.type.DICTIONARY_STRING_KEY}
 * @class cityways.type.Dictionary
 * @extends {cityways.type.IDictionary}
 * @classdesc Класс Dictionary является словарем, ключами которого могут выступать как строковые значения, так и объекты любого типа.
 * Так как данный класс является абстрактным, в зависимости от типа ключа, класс Dictionary расширяет в конструкторе свою функциональность 
 * за счет наследников ( {@link cityways.type.ObjectDictionary} или {@link cityways.type.StringDictionary}).
 */
cityways.type.Dictionary = cityways.Class({
 	
 	constructor :  function(keyType) {
		if(keyType == undefined)
			keyType =  cityways.type.DICTIONARY_OBJECT_KEY;
		this.setKeyType(keyType);
	},

 	members : {	
 		_keyType : null,

 		setKeyType : function(keyType){
 			if(this._keyType == keyType){
 				return;
 			}
 			this._keyType = keyType;
 			var dict = null;
 			if(keyType == cityways.type.DICTIONARY_STRING_KEY){
 				dict = new cityways.type.StringDictionary();
 			}else{
 				dict = new cityways.type.ObjectDictionary();
 			}
 			cityways.extend(this, dict );
 			
 		}
	}
});
