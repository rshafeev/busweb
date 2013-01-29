CityWays.Pages.MainPage.WidgetEventHandlers = {

    on_btn_auto_click : function(e) {
        var page = CityWays.Pages.Current;
        var g = e.getElementsByTagName('img');
        if (g[0].src.indexOf(page.getContextPath() + 'media/css/images/auto.png') != -1)
            g[0].src = page.getContextPath() + 'media/css/images/auto_selected.png';
        else
            g[0].src = page.getContextPath() + 'media/css/images/auto.png';
    },

    onRouteTypeClick : function(self, routeType, includeTitle, excludeTitle) {
        var page = CityWays.Pages.Current;
         console.log(self);
        var g = self.getElementsByTagName('img');
        var imgFileName = page.getContextPath() + 'media/css/images/route_types/32/' + routeType;
        if (g[0].src.indexOf(imgFileName + '.png') != -1){
            g[0].src = imgFileName + '_selected.png';
            self.title = excludeTitle;
        }
else {
            g[0].src = imgFileName + '.png';
            self.title = includeTitle;
        }

        

    }
};
