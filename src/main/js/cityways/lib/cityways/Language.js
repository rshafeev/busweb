/* Copyright (c) 2006-2012 by OpenLayers Contributors (see authors.txt for 
 * full list of contributors). Published under the 2-clause BSD license.
 * See license.txt in the OpenLayers distribution or repository for the
 * full text of the license. */

/**
 * @requires cityways/CityWays.js
 */

/**
 * Статический класс
 */
cityways.Language = {
    
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
        if(!cityways.Language.code) {
            cityways.Language.setCode();
        }
        return cityways.Language.code;
    },
    
    /**
     * APIFunction: setCode
     * Set the language code for string translation.  This code is used by
     *     the <OpenLayers.Lang.translate> method.
     *
     * Parameters:
     * code - {String} These codes follow the IETF recommendations at
     *     http://www.ietf.org/rfc/rfc3066.txt.  If no value is set, the
     *     browser's language setting will be tested.  If no <OpenLayers.Lang>
     *     dictionary exists for the code, the <OpenLayers.String.defaultLang>
     *     will be used.
     */
    setCode: function(code) {
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
            lang = cityways.Language.defaultCode;
        }
        
        cityways.Language.code = lang;
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
        var dictionary = cityways.lang[cityways.Language.getCode()];
        var message = dictionary && dictionary[key];
        if(!message) {
            message = key;
        }
        return message;
    }
    
    
};

