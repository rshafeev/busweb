/**
 * @overview Interface {@link cityways.maps.IMap}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 * 
 */

/**
 *  Данный код не является исполнимым и после компиляции будет удален. 
 */

/**
 * @class cityways.maps.IMap
 * @classdesc Абстрактный класс 
 */
 function (){
 	
 	var InterfaceDescription =  {

      /* MEMBERS */

	/**
	 * Добавляет пару ключ-значение в словарь
	 * @abstract
	 * @memberOf cityways.type.Dictionary.prototype
	 * @param  {Object|String} key   Ключ
	 * @param  {Object} value        Значени
	 * @return {bool}       Возвращает true, если добавление пары ключ-значение прошло успешно.
	 */
	put : function(key, value){},

	/**
	 * Удаляет пару ключ-значение из словаря
	 * @abstract
	 * @memberOf cityways.type.Dictionary.prototype
	 * @param  {Object|String} key Ключ
	 */
	pull : function(key){},

	/**
	 * Возвращает значение по ключ. В случае, если нет значения, соотв. данному ключу, будет возвращен null.
	 * @abstract
	 * @memberOf cityways.type.Dictionary.prototype
	 * @param  {Object|String} key Ключ
	 * @return {Object}     Значение
	 */
	get : function(key){},

	/**
	 * Количество пар ключ-значение в словаре
	 * @abstract
	 * @memberOf cityways.type.Dictionary.prototype
	 * @return {Number} Возвращает Количество пар ключ-значение в словаре
	 */
	size : function(){},



	getAsAssociativeArray : function(){}

 };

};
