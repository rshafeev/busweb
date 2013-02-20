
/**
 * @overview Namespace {@link cityways.util}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 * 
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
},

    /**
     * [getWindowSize description]
     * @return {[type]} [description]
     */
     getWindowSize : function() {
        var myWidth = 0, myHeight = 0;
        if (typeof (window.innerWidth) == 'number') {
        // Non-IE
        myWidth = window.innerWidth;
        myHeight = window.innerHeight;
    } else if (document.documentElement
        && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
        // IE 6+ in 'standards compliant mode'
        myWidth = document.documentElement.clientWidth;
        myHeight = document.documentElement.clientHeight;
    } else if (document.body
        && (document.body.clientWidth || document.body.clientHeight)) {
        // IE 4 compatible
        myWidth = document.body.clientWidth;
        myHeight = document.body.clientHeight;
    }
    return {
        height : myHeight,
        width : myWidth
    };
}


};

