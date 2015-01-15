/**
 * @overview Class {@link cityways.page.search.SettingsPanel}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 * 
 * @requires cityways/page/search.js
 * @requires cityways/Class.js
 */

 /**
 * [SettingsPanel description]
 * @class cityways.page.search.SettingsPanel
 * @param {cityways.page.SearchPage} Ссылка на главный объект страницы Main
 * @param  {Array<String>} routeTypes Типы транспорта
 * @param  {Object} options Опции панели
 */


 cityways.page.search.SettingsPanel = cityways.Class({

    constructor :  function(SearchPage, routeTypes, options) {
        this._SearchPage = SearchPage;
        this._routeTypes = {};
        for(var i=0; i<  routeTypes.length; i++){
            this._routeTypes[routeTypes[i]] = {
                enabled : true,
                discount : 1.0                
            };
        }
        this._routeTypes["auto"] = {
            enabled : false,
            discount : 1.0
        };

    },

    members : { 

    /**
     * 
     * @private 
     * @memberOf cityways.page.search.SettingsPanel.prototype
     * @type {cityways.page.SearchPage} 
     */
     _SearchPage : null,

    /**
     * Словарь типов маршрутов
     * Возможные свойства: {'bus' : {}, 'metro' : {},...}
     * @private 
     * @memberOf cityways.page.search.SettingsPanel.prototype
     * @type {Dictionary<Object>}
     */
     _routeTypes : null,

    /**
     * [init description]
     * @memberOf cityways.page.search.SettingsPanel.prototype
     */
     init : function(){
        var self = this;
        selectbox_initialize();
        $(document).ready(function() {
            self._prepareTabs();
            for(var i in self._routeTypes){
                self.enableRouteTypeBtn(i, self._routeTypes[i].enabled);
            }
        });


    },

    /**
     * [getEnabledRouteTypes description]
     * @memberOf cityways.page.search.SettingsPanel.prototype
     * @return {Array<String,bool>} [description]
     */
     getEnabledRouteTypes : function(){
        var arr = [];
        for(var i in this._routeTypes){
            if(this._routeTypes[i].enabled == true)
                arr.push(
                {
                    id : i,
                    discount : this._routeTypes[i].discount
                });
        }
        return arr;
    },

    /**
     * @memberOf cityways.page.search.SettingsPanel.prototype
     * @param {String} routeType  Тип маршрута
     * @param {Bool} val вкл/выкл
     * @param {String} title Надпись
     */
     enableRouteTypeBtn : function(routeType,val){

        var id = "#cways_menu_route_btn_" + routeType;
        var imgFile = "";
        var title = "";
        if(val == true){
            imgFile = cityways.options.getResourcePath()  + 'images/transport/32/' + routeType + '_selected.png';
            title = cityways.lang.translate("title."+ routeType);
        }else
        {
            imgFile = cityways.options.getResourcePath()  + 'images/transport/32/' + routeType + '.png';
            title = cityways.lang.translate("title."+ routeType + "_exclude");
        }
        var imgContent = "<img src='" + imgFile + "' />";
        
        $(id).html(imgContent);
        $(id).attr("title",title);

        if(this._routeTypes[routeType] == undefined){
            this._routeTypes[routeType] = {
                enabled   : val,
                discount : 1.0
            };
        }
        else
        {
           this._routeTypes[routeType].enabled = val;
       }

       if(routeType == "auto" && val == true){
             // Если выбран проезд на автомобиле, тогда отключим все другие виды транспорта
             for(var i in this._routeTypes){
                if(i != routeType && this.isEnabledRouteTypeBtn(i) == true)  
                    this.enableRouteTypeBtn(i, false);
            }
        }else
        if(routeType == "auto" && val == false)
        {
             // Если выполнено отключение проезда на автомобиле, тогда включим все другие виды транспорта
             for(var i in this._routeTypes){
                if(i != routeType && this.isEnabledRouteTypeBtn(i) == false)  
                    this.enableRouteTypeBtn(i, true);
            }
        }
        else
            if(routeType != "auto" && val == true && val == this.isEnabledRouteTypeBtn("auto") == true){
            // Если был выбран вид транспорта, отличный от автомобиля, тогда отключим транспорт "автомобиль"
            this.enableRouteTypeBtn("auto", false);
        } 

    },


    /**
     * [isEnabledRouteTypeBtn description]
     * @memberOf cityways.page.search.SettingsPanel.prototype
     * @param  {[type]}  routeType [description]
     * @return {Boolean}           [description]
     */
     isEnabledRouteTypeBtn : function(routeType){
        return this._routeTypes[routeType].enabled;
    },

    /**
     * [setStartLocation description]
     * @param {[type]} addr [description]
     */
     setStartLocation : function(addr){
        $('#a_input_form').val(addr);
    },

    /**
     * [setFinishLocation description]
     * @param {[type]} addr [description]
     */
     setFinishLocation : function(addr){
        $('#b_input_form').val(addr);
    },    

    /**
     * [getAlgType description]
     * @return {[type]} [description]
     */
     getAlgType : function(){
        return "opt";
    },

    /**
     * [isTransitions description]
     * @return {Boolean} [description]
     */
     isTransitions : function(){
        var checked = $("#cways_menu_transitions_none").is(':checked');
        return checked == true ? false : true ;
    },

    /**
     * [getStartingTime description]
     * @return {[type]} [description]
     */
     getStartingTime : function(){
        var res = {
            dayID : 'Sunday',
            timeStartSecs : (10 * 60 * 60 + 10 * 60)
        };
        return res;
    },

    /**
     * [setDiscount description]
     * @param {[type]} discountID [description]
     * @param {[type]} val        [description]
     */
     setDiscount : function(discountID, val){
         if(discountID == "discount_none"){
            $("#cways_menu_discount_metro").attr('disabled','disabled');
            $("#cways_menu_discount_tram").attr('disabled','disabled');
            $("#cways_menu_discount_trolley").attr('disabled','disabled');
        }

        if(discountID == "discount_pref"){
            $("#cways_menu_discount_metro").attr('disabled','disabled');
            $("#cways_menu_discount_tram").attr('disabled','disabled');
            $("#cways_menu_discount_trolley").attr('disabled','disabled');
        }

        if(discountID == "discount_other"){
            $("#cways_menu_discount_metro").removeAttr('disabled');
            $("#cways_menu_discount_tram").removeAttr('disabled');
            $("#cways_menu_discount_trolley").removeAttr('disabled');
        }

    },

    /**
     * [getDiscount description]
     * @param  {[type]} discountID [description]
     * @return {[type]}            [description]
     */
     getDiscount: function(discountID){
        return $("#cways_menu_" + discountID).is(':checked');
    },

    /**
     * @author Marianna 
     * @memberOf cityways.page.search.SettingsPanel.prototype
     * Возвращает скидки на проезд в зависимости от того, какие проездные выбрал пользователь
     * @return {Dictionary} Асоциативный массив, ключами которого являются названия видов транспорта, а значениями - скидка в процентром соотношении.
     * Например  если значение словаря dict["bus"] равно 0, тогда проезд на автобусе бесплатный.
     * Если равно 1 - проезд платный, 0.5 - скидка 50%.
     */
     getCheckedDiscounts : function(){
        var dict = {};
        dict["metro"] = 0.5;
        dict["tram"] = 0.0;
        return dict;
    },

    /**
     * [_prepareTabs description]
     * @private
     * @memberOf cityways.page.SearchPage.prototype
     */
     _prepareTabs : function() {
        $("div.selectTabs_first, div.selectTabs_second").each(function() {
            var tmp = $(this);
        // console.log($(tmp).find(" .lineTabs li"));
        $(tmp).find(".lineTabs li").each(function(i) {
            $(tmp).find(".lineTabs li:eq(" + i + ") a").click(
                function() {
                    var tab_id = i + 1;
                    $(tmp).find(".lineTabs li a")
                    .removeClass("active");
                    $(this).addClass("active");
                    $(tmp).find(".content div").stop(false, false)
                    .hide();
                    $(tmp).find(".tab" + tab_id).stop(false, false)
                    .show();
                    return false;
                });
        });
    });
    }
}});
