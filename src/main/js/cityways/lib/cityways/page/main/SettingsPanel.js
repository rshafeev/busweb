
/**
 * @requires cityways/type/Class.js
 */

/**
 * Class:
 */
cityways.page.main.SettingsPanel = cityways.type.Class({
    
    /**
     * Список возможных типов маршрутов, по которым ведется поиск,String[]
     * Возможные значения: ['c_route_bus', 'c_route_metro',...]
     */
    availableRouteTypes : null,

    /**
     * 
     * @param {Object}
     *            mainPage
     */
    initialize : function(options) {
        // Найдем в dom все типы маршрутов
        this.availableRouteTypes = options.availableRouteTypes;
    },
    
    
    getEnabledRouteTypes : function(){
       console.log(this.availableRouteTypes);
       // $("mini_table_transp_list").a
        
    },
   
    /**
     * 
 * @param {String} routeType  Тип маршрута
 * @param {Bool} val вкл/выкл
 * @param {String} title Надпись
     */
    enableRouteTypeBtn : function(routeType,val,title){
        this.getEnabledRouteTypes();
        var ResourceURI = cityways.Basic.ResourceURI;
        var elem = this._getRouteTypeBtnHtmlElement(routeType);
        var img  = elem.find("img").get(0);
        var imgFileName = ResourceURI
                + 'media/css/images/route_types/32/' + routeType;
        //elem.title = title; 
        if(val == true){
            img.src = imgFileName + '_selected.png';
        }else
        {
            img.src = imgFileName + '.png';
        }
       
    },
    
    _getRouteTypeBtnHtmlElement : function(routeType){
         console.log($("#cways_menu_route_btn_" + routeType));
          return $("#cways_menu_route_btn_" + routeType);
    },
    
    isEnabledRouteTypeBtn : function(routeType){
        var elem = this._getRouteTypeBtnHtmlElement(routeType);
        var ResourceURI = cityways.Basic.ResourceURI;
        var img  = elem.find("img").get(0);
        var imgFileName = ResourceURI
                + 'media/css/images/route_types/32/' + routeType;
        
        if (img.src.indexOf(imgFileName + '.png') != -1) {
                return false;
            } else {
            return true;
        }  
    }
    
    
});
