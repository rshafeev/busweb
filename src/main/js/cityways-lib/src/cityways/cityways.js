
 /**
 * Определим все namespace и корневые статические функции
 */
/**
 * [cityways description]
 * @namespace cityways
 * @type {Object}
 */
 var cityways =  {
    lang : {},
    loader : {},
    page : {},
    type : {},
    widget : {},
    template : {},
    model : {},
    helper: {},
    map : {},
    logger : {},
    event : {},
    util : {},
    
    
    /**
    * Версия библиотеки
    * @type {String}
    */
    VERSION_NUMBER : "Release 2.13 dev",

     /**
     * Function: inherit
     * 
     * Parameters: C - {Object} the class that inherits P - {Object} the
     * superclass to inherit from
     * 
     * In addition to the mandatory C and P parameters, an arbitrary number of
     * objects can be passed, which will extend C.
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
}

};







