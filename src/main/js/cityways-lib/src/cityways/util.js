
/**
 * @overview
 * @copyright 
 * 2012,PremiumGIS Inc. All Rights Reserved. <a href="http://premiumgis.com">PremiumGIS</a>
 * Project url: <a href="http://ways.in.ua">cityways</a>
 * 
 * @author <a href="mailto:rs@premiumgis.com">Roman Shafeyev</a>
 * 
 * @requires cityways/cityways.js
 * @requires cityways/BrowserDetect.js
 * @requires cityways/options.js
 */

/**
 * @namespace cityways.util
 */
cityways.util = {
    
    _browserDetec : null,
    
    browserVersion : function(){
        if(cityways.util._browserDetec == null){
            cityways.util._browserDetec = new cityways.BrowserDetect();
        }
        return cityways.util._browserDetec.version;
    },
    
    browser : function(){
        if(cityways.util._browserDetec == null){
            cityways.util._browserDetec = new cityways.BrowserDetect();
        }
        return cityways.util._browserDetec.browser;
    },


   /**
   * Возвращает uri-путь к скрипту
   * @param  {String} scriptName Имя файла скрипта
   * @return {String}            URI путь к скрипту
   */
    getScriptLocation: function(scriptName) {
        var regPattern = "(^|(.*?\\/))("+scriptName+"[^\\/]*?\\.js)(\\?|$)";
        var r = new RegExp(regPattern),
            s = document.getElementsByTagName('script'),
            src, m, l = "";
        for(var i=0, len=s.length; i<len; i++) {
            src = s[i].getAttribute('src');
            if(src) {
                m = src.match(r);
                if(m) {
                    l = m[1];
                    break;
                }
            }
        }
        return l;
   }

};

/**
 * Функция инициализации
 */
(function() {
    cityways.options.ResourceURI = cityways.util.getScriptLocation("cityways");
    cityways.logger.info(cityways.options.ResourceURI);
})();
  