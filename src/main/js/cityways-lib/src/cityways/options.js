/**
 * @overview Namespace {@link cityways.options}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 * 
 * @requires cityways.js
 */

/**
 * Хранит глобальные настройки
 * @namespace cityways.options
 */
 cityways.options = {
  
  /**
   * Хост сервера cityways
   */
   ServerHost : "http://ways.in.ua",
   
  /**
   * Название темы
   * @type {String}
   */
   Theme : "default",
   
  /**
   * [ResourceURI description]
   * @type {String}
   */
   ResourceURI : "/",


   getResourcePath : function(){
     return cityways.options.ResourceURI +"themes/" + cityways.options.Theme + "/";
   }




 };
