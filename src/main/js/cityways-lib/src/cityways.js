/**
 * @overview Namespace {@link cityways}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 * 
 */

/**
 * @namespace cityways
 * @public
 */
 var cityways =  {

    _initialized : false,
    
    /**
    * Версия библиотеки
    * @type {String}
    * @constant
    */
    VERSION_NUMBER : "Release 2.13 dev",


     /**
     * In addition to the mandatory C and P parameters, an arbitrary number of
     * objects can be passed, which will extend C.
     * @param  {[type]} C {Object} the class that inherits
     * @param  {[type]} P {Object} the superclass to inherit from
     */
     inherit : function(C, P) {

        var F = function() {
        };
        F.prototype = P.prototype;
        C.prototype = new F;
        var i, l, o;
        for (i = 2, l = arguments.length; i < l; i++) {
            o = arguments[i];
            if (typeof o === "function") {
                o = o.prototype;
            }
            cityways.extend(C.prototype, o);
            
        }
        
    },

    /**
     * [extend description]
     * @param  {[type]} destination [description]
     * @param  {[type]} source      [description]
     * @return {[type]}             [description]
     */
     extend : function(destination, source) {
        destination = destination || {};
        if (source) {
            for (var property in source) {
                var value = source[property];
                if (value !== undefined) {
                    destination[property] = value;
                }
            }
            
            
            /**
             * IE doesn't include the toString property when iterating over an
             * object's properties with the for(property in object) syntax.
             * Explicitly check if the source has its own toString property.
             */

            /*
             * FF/Windows < 2.0.0.13 reports "Illegal operation on WrappedNative
             * prototype object" when calling hawOwnProperty if the source
             * object is an instance of window.Event.
             */

             var sourceIsEvt = typeof window.Event == "function"
             && source instanceof window.Event;

             if (!sourceIsEvt && source.hasOwnProperty
                && source.hasOwnProperty("toString")) {
                destination.toString = source.toString;
        }
    }
    return destination;
    },

    /**
     * [alert description]
     * @param  {[type]} header  [description]
     * @param  {[type]} message [description]
     * @param  {[type]} type    [description]
     * @return {[type]}         [description]
     */
    alert : function(header, message, type){
        alert(message);
    }




};





