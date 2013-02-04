/**
 * @requires cityways/type/Class.js

 */

/**
 * Class: cityways.Pages.MainPage.WidgetEventHandlers
 */
cityways.page.main.WidgetEventHandlers = cityways.type.Class({


    /**
     *
     * @param {Object}
     *            mainPage
     */
    initialize : function() {
        
    },

    onRouteTypeClick : function(self, routeType, includeTitle, excludeTitle) {
        var page = cityways.Page.Current;
        if (page.getSettingsPanel().isEnabledRouteTypeBtn(routeType) == true) {
            page.getSettingsPanel().enableRouteTypeBtn(routeType, false, includeTitle);
        } else {
            console.log("false");
            page.getSettingsPanel().enableRouteTypeBtn(routeType, true, excludeTitle);
        }

    },
    
    onFindBtnClick : function ()
    {
        var page = cityways.Page.Current;
        var options = page.getPathsOptions();
        
        var el = document.getElementById('ways_panel');
        if (options == null)
            return;
        el.style.display = 'block';
        var loadGif = cityways.ResourceURI + "media/css/images/load.gif";
        
        cityways.template.HtmlTemplates.get("template-main-waysPanel",function(template){
            
            $('#panel_data').html(template({value : "test"}));
            cityways.Console.log(template);
        });
        //var rightPanelHtml = _.template($('#waysPanel').html());
        
        //$('#panel_data').html(rightPanelHtml);
        /*
        $('#panel_data').html("<div class='loader_text'><img src='" + loadGif + "'/></div>");
        $('#panel_scrollbar').tinyscrollbar_update();
        
        var loader = new cityways.Loaders.PathsLoader();
         loader.findShortestPaths(options,function(e){
             //var data = e.data;
             console.log(e);

         });
         */

    }
});
