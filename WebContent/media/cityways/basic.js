
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








/**
 * @overview namespace cityways.logger
 * @copyright 
 * 2012,PremiumGIS Inc. All Rights Reserved. <a href="http://premiumgis.com">PremiumGIS</a>
 * Project url: <a href="http://ways.in.ua">cityways</a>
 * 
 * @author <a href="mailto:rs@premiumgis.com">Roman Shafeyev</a>
 * 
 * @requires cityways/cityways.js
 */

 /**
 * @private
 * @namespace
 * @description Содержит функции логгирования
 */
 cityways.logger = {

 	DEBUG_LEVEL : false,

 	INFO_LEVEL  : false,  

 	WARN_LEVEL  : false,
 	
 	info  : function(){},

 	debug : function(){},

 	warn  : function(){},

 	setLevelMode : function(level, val){
 		if(level == "INFO_LEVEL"){
 			if(val == true)
 				cityways.logger.info  = console.log.bind(console);
 			else
 				cityways.logger.info = function(){};
		}
 		if(level == "DEBUG_LEVEL"){
 			if(val == true)
 				cityways.logger.debug  = console.info.bind(console);
 			else
 				cityways.logger.debug = function(){};
		}
		 if(level == "WARN_LEVEL"){
 			if(val == true)
 				cityways.logger.warn  = console.warn.bind(console);
 			else
 				cityways.logger.warn = function(){};
		}
		cityways.logger[level] = val;
 		
 	}

 };

/**
 * @requires cityways/cityways.js
 * @requires cityways/logger.js
 */


(function() {
	cityways.logger.setLevelMode("INFO_LEVEL",true);
	cityways.logger.setLevelMode("DEBUG_LEVEL",true);
	cityways.logger.setLevelMode("WARN_LEVEL",true);
})();
  





 	
/**
 * @overview
 * 
 * @copyright 
 * 2012,PremiumGIS Inc. All Rights Reserved. <a href="http://premiumgis.com">PremiumGIS</a>
 * Project url: <a href="http://ways.in.ua">cityways</a>
 * 
 * @author <a href="mailto:rs@premiumgis.com">Roman Shafeyev</a>
 *
 * @requires cityways/cityways.js
 *
 */


/**
 * Constructor: cityways.Class
 * Base class used to construct all other classes. Includes support for 
 *     multiple inheritance. 
 *     
 * This constructor is new in OpenLayers 2.5.  At OpenLayers 3.0, the old 
 *     syntax for creating classes and dealing with inheritance 
 *     will be removed.
 * 
 * To create a new OpenLayers-style class, use the following syntax:
 * (code)
 *     var MyClass = cityways.Class(prototype);
 * (end)
 *
 * To create a new OpenLayers-style class with multiple inheritance, use the
 *     following syntax:
 * (code)
 *     var MyClass = cityways.Class(Class1, Class2, prototype);
 * (end)
 * 
 * Note that instanceof reflection will only reveal Class1 as superclass.
 *
 */
/**
 * @description  Base class used to construct all other classes. Includes support for 
 * multiple inheritance. 
   @constructor 
*/ 
cityways.Class = function() {
    var len = arguments.length;
    var P = arguments[0];
    var F = arguments[len-1];

    var C = typeof F.initialize == "function" ?
        F.initialize :
        function(){ P.prototype.initialize.apply(this, arguments); };

    if (len > 1) {
        var newArgs = [C, P].concat(
                Array.prototype.slice.call(arguments).slice(1, len-1), F);
        cityways.inherit.apply(null, newArgs);
    } else {
        C.prototype = F;
    }
    return C;
};



/**
 * @requires cityways/Class.js
 */

/**
 * Статический класс, хранит общие статические свойства
 */
cityways.BrowserDetect = cityways.Class ({
    
    browserDetect : null,
    
    versionSearchString : null,
    
    browser : null,
    
    version : null,
    
    OS : null,
    
    initialize: function () {
        this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
        this.version = this.searchVersion(navigator.userAgent)
            || this.searchVersion(navigator.appVersion)
            || "an unknown version";
        this.OS = this.searchString(this.dataOS) || "an unknown OS";
    },
    
    searchString: function (data) {
        for (var i=0;i<data.length;i++) {
            var dataString = data[i].string;
            var dataProp = data[i].prop;
            this.versionSearchString = data[i].versionSearch || data[i].identity;
            if (dataString) {
                if (dataString.indexOf(data[i].subString) != -1)
                    return data[i].identity;
            }
            else if (dataProp)
                return data[i].identity;
        }
    },
    
    searchVersion: function (dataString) {
        var index = dataString.indexOf(this.versionSearchString);
        if (index == -1) return;
        return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
    },
    
    dataBrowser: [
        {
            string: navigator.userAgent,
            subString: "Chrome",
            identity: "Chrome"
        },
        {   string: navigator.userAgent,
            subString: "OmniWeb",
            versionSearch: "OmniWeb/",
            identity: "OmniWeb"
        },
        {
            string: navigator.vendor,
            subString: "Apple",
            identity: "Safari",
            versionSearch: "Version"
        },
        {
            prop: window.opera,
            identity: "Opera",
            versionSearch: "Version"
        },
        {
            string: navigator.vendor,
            subString: "iCab",
            identity: "iCab"
        },
        {
            string: navigator.vendor,
            subString: "KDE",
            identity: "Konqueror"
        },
        {
            string: navigator.userAgent,
            subString: "Firefox",
            identity: "Firefox"
        },
        {
            string: navigator.vendor,
            subString: "Camino",
            identity: "Camino"
        },
        {       // for newer Netscapes (6+)
            string: navigator.userAgent,
            subString: "Netscape",
            identity: "Netscape"
        },
        {
            string: navigator.userAgent,
            subString: "MSIE",
            identity: "Explorer",
            versionSearch: "MSIE"
        },
        {
            string: navigator.userAgent,
            subString: "Gecko",
            identity: "Mozilla",
            versionSearch: "rv"
        },
        {       // for older Netscapes (4-)
            string: navigator.userAgent,
            subString: "Mozilla",
            identity: "Netscape",
            versionSearch: "Mozilla"
        }
    ],
    dataOS : [
        {
            string: navigator.platform,
            subString: "Win",
            identity: "Windows"
        },
        {
            string: navigator.platform,
            subString: "Mac",
            identity: "Mac"
        },
        {
               string: navigator.userAgent,
               subString: "iPhone",
               identity: "iPhone/iPod"
        },
        {
            string: navigator.platform,
            subString: "Linux",
            identity: "Linux"
        }
    ]


});
  

/**
 * @requires cityways/cityways.js
 */

/**
 * @namespace Хранит глобальные настройки
 */
cityways.options = {
    
  /**
   * Хост сервера cityways
   */
  ServerHost : "http://ways.in.ua",
    
  /**
   * Название темы
   * @type {String}
   */
  Theme : "default",
    
  /**
   * [ResourceURI description]
   * @type {String}
   */
	ResourceURI : "/",



    /**
	 * Method: _getScriptLocation Return the path to this script. This is also
	 * implemented in OpenLayers.js
	 * 
	 * Returns: {String} Path to this script
	 */


   
   getResourcePath : function(){
   	 return cityways.options.ResourceURI +"themes/" + cityways.options.Theme + "/";
   }
 

};


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

/**
 * Функция инициализации
 */
 (function() {
    cityways.options.ResourceURI = cityways.util.getScriptLocation("cityways");
    cityways.logger.info(cityways.options.ResourceURI);
})();

/**
 * @overview
 * @copyright 
 * 2012,PremiumGIS Inc. All Rights Reserved. <a href="http://premiumgis.com">PremiumGIS</a>
 * Project url: <a href="http://ways.in.ua">cityways</a>
 * 
 * @author <a href="mailto:mr@premiumgis.com">Marianna Roshchenko</a>
 * 
 * @requires cityways/cityways.js
 */

/**
 * @namespace cityways.helper.time
 * @description [description]
 */
cityways.helper.time = {

/**
 * @secs int[0,3600*24]
 * @return
 */
secsToLocaleString : function(secs) {

	var h = parseInt(secs / 3600);
	var m = parseInt((secs - h * 3600) / 60);
	if (h==0)
	{
		return cityways.helper.time.minsOfHourToLocaleString(m);
	}
	return cityways.helper.time.hoursToLocaleString(h) +" " +cityways.helper.time.minsOfHourToLocaleString(m);
	
},

/**
 * @mins int [0,60]
 */ minsOfHourToLocaleString  : function(mins) {

	// минут
	if (mins >= 10 && mins <= 20) {
		return mins + " " + cityways.language.translate("time.minutes10");
	}

	var ostatok = mins % 10;
	// минута
	if (ostatok <= 1) {
		return mins + " " + cityways.language.translate("time.minute");
	}
	// минуты
	if (ostatok > 1 && ostatok < 5) {
		return mins + " " + cityways.language.translate("time.minutes");
	}
	// минут
	return mins + " " + cityways.language.translate("time.minutes_ru");

},

/**
 * @mins int [0,24]
 */ hoursToLocaleString  : function(hours) {

	//часов
	if (hours >= 5 && hours <= 20) {
		return hours + " " + cityways.language.translate("time.hours");
	}
	var ostatok = hours % 10;
	//час
	if (ostatok == 1) {
		return hours + " " + cityways.language.translate("time.hour");
	}

	//часа
	if (ostatok >= 2 && ostatok < 5) {
		return hours + " " + cityways.language.translate("time.hours_ru");
	}
	
	return hours + " " + cityways.language.translate("time.hours");

	}

};

/**
 * @overview namespace cityways.helper.styles
 * @copyright 
 * 2012,PremiumGIS Inc. All Rights Reserved. <a href="http://premiumgis.com">PremiumGIS</a>
 * Project url: <a href="http://ways.in.ua">cityways</a>
 * 
 * @author <a href="mailto:rs@premiumgis.com">Roman Shafeyev</a>
 * 
 * @requires cityways/cityways.js
 * @requires cityways/util.js
 */

 /**
 * @namespace cityways.helper.styles
 * @description Включает в себя вспомогательные функции для работы со стилями. 
 */
 cityways.helper.styles = {

	/**
 	* Подключает css файл к текущему html документу
 	* @param  {String} cssFileName Путь к css файлу
 	* @return {void}            
 	*/
 	include : function(cssFileName) {
 		var css = "<link rel=\"stylesheet\" href=\"" + cssFileName + "\" type=\"text/css\">";
 		document.write(css);
 	},

	/**
	 * Подключает css файл к текущему html документу в зависимости от  браузера клиента
	 * @param {String} cssFiles Директория, в которой ле к css файлам
	 * @param {Object} cssOptions Хранит связь css файлов и поддерживаемых ими браузеров. 
	 * @return {String} Путь к подключенному css файлу
	 * @example Приведем пример выбора нужного css файла в зависимости от  браузера клиента
	 * var cssFiles = [
	 *         {
	 *             name : "style.css"
	 *         },
	 *         {
	 *             name : "style_ie7.css",
     *             browsers : {
     *                          "msie" : {min : 7.0}
     *                        },
	 *         {
	 *             name : "style_ff.css",
	 *             browsers : {
	 *                           "mozilla" :  {min : 7.0, max : 16.0}
	 *                        }
	 *         }];
	 * var cssFilename = cityways.helper.styles.includeCSSFile("media/css",cssFiles);
	 * // cssFilename = "media/css/style.css", если текущий браузер не ff и ie
	 * // cssFilename = "media/css/style_ie7.css", если текущий браузер ie7+
	 * // cssFilename = "media/css/style_ff.css", если текущий браузер ff версии [7.0, 16.0]
	 */
	 includeCSSFile : function(filePath, cssFiles) {
	 	var browser = {
	 		name : cityways.util.browser(),
	 		version : cityways.util.browserVersion()
	 	};
	 	var fileName =  cityways.helper.styles._selectCSSFile(cssFiles,browser);
	 	if(fileName == null)
	 		throw new Error("includeCSSFile() was not found css file");
	 	cityways.helper.styles.include(filePath + fileName);
	 	return filePath + fileName;
	 },

	/**
  	* Выбирает css файл в зафисимости от текущего браузера.
  	* @private
  	* @param  {Array}  cssFiles  		 Элементы массива хранят в себе названия сss-файлов и браузеры, которые они поддерживают.
 	* @param  {Object} browser 			 Информация о браузере. Хранит версию и название текущего браузера.
  	* Структура объекта: <br>
  	* {<br>
  	* 	name    : {String} <br>
  	* 	version : {Number} <br>
  	* }<br>
 	* @param  {String} browser.name      Тип браузера("msie", "mozilla").
 	* @param  {Number} browser.version   Версия браузера.
 	* @return {String} 					 Название css файла. 
 	* @example 
 	* // Пример входных параметров:
 	* 
 	* var browser  = {
 	*      name    : "msie",
 	*      version : 7.0
 	* };
 	* 
 	* var cssFiles = [
	*         {
	*             name : "style.css"
	*         },
	*         {
	*             name : "style_ie7.css",
    *             browsers : {
    *                          "msie" : {min : 7.0}
    *                        },
	*         {
	*             name : "style_ff.css",
	*             browsers : {
	*                           "mozilla" :  {min : 7.0, max : 16.0}
	*                        }
	*         }];
	* // Вызов функции:
	* 
	* var selectedFile = cityways.styles._selectCSSFile(cssFiles,browser);
 	*/
 	_selectCSSFile : function(cssFiles,browser) {
 		var defaultFile = null;
 		var selectedFile = null;
 		
 		for(var i=0; i < cssFiles.length; i++ ){

 			if(cssFiles[i].browsers == undefined &&   cssFiles[i].name != undefined){
 				defaultFile = cssFiles[i].name;
 			}
 			else if (cssFiles[i].browsers != undefined){

 				var cssBrowser = cssFiles[i].browsers[browser.name];
 				if(cssBrowser != undefined){
 					var min_v = cssBrowser.min;
 					var max_v = cssBrowser.max;
 					cityways.logger.debug("find",cssFiles[i]);
 		 				if( (min_v == undefined && max_v == undefined) ||
 							(min_v == undefined && max_v >= browser.version) ||
 							(max_v == undefined && min_v <= browser.version) ||
 							(min_v <= browser.version && max_v >= browser.version)){
 								selectedFile = cssFiles[i].name;
 						}
 				}
 			}
 		}
 		cityways.logger.debug(defaultFile);
 		if(selectedFile != undefined)
 			return selectedFile;
 		return defaultFile;
 	}
 };

/**
 * @requires cityways/cityways.js
 */

cityways.helper.array = {

	isExistElement : function(arr, elem) {
		for (var i = 0; i < arr.length; i++) {
			if (arr[i].toString() == elem.toString()) {
				return true;
			}
			
		}
		return false;
	}

};

