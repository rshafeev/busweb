
/**
 * @requires cityways/CityWays.js
 */

/** 
 * Header: OpenLayers Base Types
 * OpenLayers custom string, number and function functions are described here.
 */

/**
 * Namespace: cityways.Pages
 * Contains convenience functions for string manipulation.
 */

cityways.Page = {
    
    /**
     * Текущая страница
     */
    Current : null,
    
   /**
    * 
    * @return Обработчик событий виджетов текущей страницы 
    */
    Events : function(){
        return cityways.Page.Current.getWidgetEventHandlers();
    }
    
    
    
};