/**
 * @overview Namespace {@link cityways.page}.
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
 * @namespace cityways.page
 */

cityways.page = {

    /**
     * Текущая страница
     */
    Current : null,
    
   /**
    * Обработчик событий виджетов текущей страницы 
    */
    Events : null,

    /**
     * [setCurrent description]
     * @param {Object} page [description]
     */
    setCurrent : function(page){
        cityways.page.Current = page;
        cityways.page.Events = page.getWidgetEventHandlers();
    }
    
    
    
};