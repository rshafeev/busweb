/**
 * @overview Namespace {@link cityways.lang}.
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
 * @namespace cityways.lang 
 */
cityways.lang = {
    
    /** 
     * Property: code
     * {String}  Current language code to use in OpenLayers.  Use the
     *     <setCode> method to set this value and the <getCode> method to
     *     retrieve it.
     */
    code: null,

    /** 
     * APIProperty: defaultCode
     * {String} Default language to use when a specific language can't be
     *     found.  Default is "en".
     */
    defaultCode: "ru",
        
    /**
     * APIFunction: getCode
     * Get the current language code.
     *
     * Returns:
     * {String} The current language code.
     */
    getCode: function() {
        if(!cityways.lang.code) {
            cityways.lang.setCode();
        }
        


        return cityways.lang.code;
    },
    
    /**
     * Устанавливает текущий язык при работе с библиотекой.
     * В случае, если входной параметр code не задан, то будет выполнена попытка задать язык текущего браузера.
     * @param {String} code Код языка. Следуйте рекомендациям {@link http://www.ietf.org/rfc/rfc3066.txt|IETF}
     */
    setCode: function(code) {
        // Если язык уже был инициализирован, выходим
        if(cityways.lang.code != null)
            return;
        var lang;
        
        if(!code) {
            code = (cityways.BROWSER_NAME == "msie") ?
                navigator.userLanguage : navigator.language;
        }
        var parts = code.split('-');
        parts[0] = parts[0].toLowerCase();
        
        if(typeof cityways.lang[parts[0]] == "object") {
            lang = parts[0];
        }
        
        // check for regional extensions
        if(parts[1]) {
            var testLang = parts[0] + '-' + parts[1].toUpperCase();
            if(typeof cityways.lang[testLang] == "object") {
                lang = testLang;
            }
        }
        if(!lang) {
            cityways.Console.warn(
                'Failed to find cityways.Lang.' + parts.join("-") +
                ' dictionary, falling back to default language'
            );
            lang = cityways.lang.defaultCode;
        }
        
        cityways.lang.code = lang;
    },

    /**
     * APIMethod: translate
     * Looks up a key from a dictionary based on the current language string.
     *     The value of <getCode> will be used to determine the appropriate
     *     dictionary.  Dictionaries are stored in <OpenLayers.Lang>.
     *
     * Parameters:
     * key - {String} The key for an i18n string value in the dictionary.
     * context - {Object} Optional context to be used with
     *     <OpenLayers.String.format>.
     * 
     * Returns:
     * {String} A internationalized string.
     */
    translate: function(key) {
        var dictionary = cityways.lang[cityways.lang.getCode()];
        var message = dictionary && dictionary[key];
        if(!message) {
            message = key;
        }
        return message;
    },


    
    
};

