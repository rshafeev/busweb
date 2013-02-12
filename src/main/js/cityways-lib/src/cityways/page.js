
/**
 * @requires cityways/cityways.js
 */

/**
 * @namespace 
 * @type {Object}
 */
cityways.page = {
    main : {},
    routes : {},
    /**
     * Текущая страница
     */
    Current : null,
    
   /**
    * 
    * @return Обработчик событий виджетов текущей страницы 
    */
    Events : null,


    setCurrent : function(page){
        cityways.page.Current = page;
        cityways.page.Events = page.getWidgetEventHandlers();
    }
    
    
    
};