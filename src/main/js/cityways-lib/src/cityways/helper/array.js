/**
 * @overview Namespace {@link cityways.helper.array}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 * 
 * @requires cityways/helper.js
 */

/**
 * @namespace cityways.helper.array
 */
cityways.helper.array = {

	/**
	 * Проверяет, есть ли указанный элемент elem в массиве arr.
	 * @param  {Array<String>}   arr  Массив.
	 * @param  {Object}          elem Объект, который ищется в массиве arr.
	 * @return {Boolean}         Возвращает True, если объект найден в массиве, иначе False.
	 */
	isExistElement : function(arr, elem) {
		for (var i = 0; i < arr.length; i++) {
			if (arr[i].toString() == elem.toString()) {
				return true;
			}
			
		}
		return false;
	}

};
