/*
  CityWays JS Library
*/


/**

 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE 
 * POSSIBILITY OF SUCH DAMAGE.
 */
/* ======================================================================
    cityways/cityways.js
   ====================================================================== */


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







/* ======================================================================
    cityways/logger.js
   ====================================================================== */

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
 * @interface
 * @description Содержит функции логгирования
 */
 cityways.logger = {

 	DEBUG_LEVEL : false,

 	INFO_LEVEL  : false,  

 	WARN_LEVEL  : false,
 	
 	info  : function(){},

 	debug : function(){},

 	warn  : function(){},

 	setLevelMode : function(level, val){}

 };
/* ======================================================================
    test/logger.js
   ====================================================================== */


/**
 * @requires cityways/cityways.js
 * @requires cityways/logger.js
 */


cityways.logger.setLevelMode  = function(level, val){
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
}; 

(function() {
	cityways.logger.setLevelMode("INFO_LEVEL",true);
	cityways.logger.setLevelMode("DEBUG_LEVEL",true);
	cityways.logger.setLevelMode("WARN_LEVEL",true);
})();
  





 	
/* ======================================================================
    cityways/Class.js
   ====================================================================== */

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

/* ======================================================================
    cityways/page.js
   ====================================================================== */


/**
 * @requires cityways/cityways.js
 */

/**
 * @namespace 
 * @type {Object}
 */
cityways.page = {
    main : {},
    routes : {},
    /**
     * Текущая страница
     */
    Current : null,
    
   /**
    * 
    * @return Обработчик событий виджетов текущей страницы 
    */
    Events : null
    
    
    
};
/* ======================================================================
    cityways/page/main/WidgetEventHandlers.js
   ====================================================================== */

/**
 * @requires cityways/Class.js
 * @requires cityways/page.js
 */

/**
 * Class: cityways.Pages.MainPage.WidgetEventHandlers
 */
cityways.page.main.WidgetEventHandlers = cityways.Class({

			/**
			 * 
			 * @param {Object}
			 *            mainPage
			 */
			initialize : function() {

			},

			onRouteTypeClick : function(self, routeType, includeTitle,
					excludeTitle) {
				var page = cityways.Page.Current;
				if (page.getSettingsPanel().isEnabledRouteTypeBtn(routeType) == true) {
					page.getSettingsPanel().enableRouteTypeBtn(routeType,
							false, includeTitle);
				} else {
					console.log("false");
					page.getSettingsPanel().enableRouteTypeBtn(routeType, true,
							excludeTitle);
				}

			},
			_onMakeRightPanelContent : function(self, data, templates) {
				var headersTemplate = templates["template-main-waysPanelHeader"];
				var infoTemplate = templates["template-main-waysPanelInfo"];
				var paths = data.paths;
				var htmlBody = "";
				for (var i = 0; i < paths.length; i++) {
					var path = new cityways.model.Path(paths[i]);
					cityways.Console.log(path.getFullCost());
					var params = {
						index : i + 1,
						locale : cityways.Language.translate,
						cost : path.getFullCost(),
						time: path.getWalkingTime()
					};
					htmlBody = htmlBody + headersTemplate(params);
				}
				$('#panel_data').html(htmlBody);
			},

			_onLoadedPaths : function(self, e) {
				var data = e.data;
				var templates = {};
				var loadedTemplates = 0;
				var templatesCount = 2;
				var _this = this;

				cityways.template.HtmlTemplates.get(
						"template-main-waysPanelHeader", function(template) {
							loadedTemplates++;
							templates["template-main-waysPanelHeader"] = template;
							if (loadedTemplates == templatesCount) {
								_this._onMakeRightPanelContent(_this, data,
										templates);
							}
						});

				cityways.template.HtmlTemplates.get(
						"template-main-waysPanelInfo", function(template) {
							loadedTemplates++;
							templates["template-main-waysPanelInfo"] = template;
							if (loadedTemplates == templatesCount) {
								_this._onMakeRightPanelContent(_this, data,
										templates);
							}
						});

			},

			onFindBtnClick : function() {
				var page = cityways.Page.Current;
				var options = page.getPathsOptions();

				var el = document.getElementById('ways_panel');
				if (options == null)
					return;
				el.style.display = 'block';
				var loadGif = cityways.Basic.getResourcePath()
						+ "images/load.gif";
				$('#panel_data').html("<div class='loader_text'><img src='"
						+ loadGif + "'/></div>");
				$('#panel_scrollbar').tinyscrollbar_update();
				page.visibleRightPanel(true);
				var _this = this;
				cityways.Console.log("onFindBtnClick");
				var loader = new cityways.loader.PathsLoader();
				loader.findShortestPaths(options, function(e) {
							cityways.Console.log("findShortestPaths");
							_this._onLoadedPaths(_this, e);
						});

			},
			
			on_selectDetailWay : function(way_ind)
			{
			cityways.Console.log("OK");
			}
		});
/* ======================================================================
    cityways/model/Path.js
   ====================================================================== */

/**
 * @author Roman Shafeyev

 * @requires cityways/Class.js
 */

cityways.model.Path = cityways.Class({

			pathID : null,

			input : null,

			out : null,

			transitions : [],

			routes : [],
			/**
			 * 
			 * @param {Object}
			 *            mainPage
			 */
			initialize : function(pathData) {
				cityways.Util.extend(this, pathData);

			},
			
			/**
			 * Возвращает стоимть пути
			 */
			getFullCost : function() {
				if (this.routes == null)
					return 0.0;
				var cost = 0.0;
				for (var i = 0; i < this.routes.length; i++) {
					cost += this.routes[i].cost;
				}
				/*Отформатируем строку*/
				return cost;
			},
			
			/**
			 * Возвращает время передвижения пешком, String
			 */
			getWalkingTime : function(){
				var time = 0.0;
				for(var i=0;i < this.transitions.length; i++)
				{
					time += this.transitions[i].moveTimeSecs;
				}
				time += this.input.moveTimeSecs;
				time += this.out.moveTimeSecs;			 
				return cityways.helper.Time.secsToLocaleString(time);
			}

		});
/* ======================================================================
    cityways/page/main/SettingsPanel.js
   ====================================================================== */


/**
 * @requires cityways/Class.js
 * @requires cityways/page.js
 */

/**
 * Class:
 */
console.log(cityways.page);
cityways.page.main.SettingsPanel = cityways.Class({
    
    /**
     * Список возможных типов маршрутов, по которым ведется поиск,String[]
     * Возможные значения: ['c_route_bus', 'c_route_metro',...]
     */
    availableRouteTypes : null,

    /**
     * 
     * @param {Object}
     *            mainPage
     */
    initialize : function(options) {
        // Найдем в dom все типы маршрутов
        this.availableRouteTypes = options.availableRouteTypes;
    },
    
    
    getEnabledRouteTypes : function(){
       console.log(this.availableRouteTypes);
       // $("mini_table_transp_list").a
        
    },
   
    /**
     * 
 * @param {String} routeType  Тип маршрута
 * @param {Bool} val вкл/выкл
 * @param {String} title Надпись
     */
    enableRouteTypeBtn : function(routeType,val,title){
        this.getEnabledRouteTypes();
        var ResourceURI = cityways.Basic.ResourceURI;
        var elem = this._getRouteTypeBtnHtmlElement(routeType);
        var img  = elem.find("img").get(0);
        var imgFileName = ResourceURI
                + 'media/css/images/route_types/32/' + routeType;
        //elem.title = title; 
        if(val == true){
            img.src = imgFileName + '_selected.png';
        }else
        {
            img.src = imgFileName + '.png';
        }
       
    },
    
    _getRouteTypeBtnHtmlElement : function(routeType){
         console.log($("#cways_menu_route_btn_" + routeType));
          return $("#cways_menu_route_btn_" + routeType);
    },
    
    isEnabledRouteTypeBtn : function(routeType){
        var elem = this._getRouteTypeBtnHtmlElement(routeType);
        var ResourceURI = cityways.Basic.ResourceURI;
        var img  = elem.find("img").get(0);
        var imgFileName = ResourceURI
                + 'media/css/images/route_types/32/' + routeType;
        
        if (img.src.indexOf(imgFileName + '.png') != -1) {
                return false;
            } else {
            return true;
        }  
    }
    
    
});
/* ======================================================================
    cityways/helper/time.js
   ====================================================================== */

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
/* ======================================================================
    cityways/helper/array.js
   ====================================================================== */

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
/* ======================================================================
    cityways/map/GoogleMap.js
   ====================================================================== */

/**
 * @author Roman Shafeyev
 */

/**
 * @requires cityways/Class.js
 */

/*Example:
 * <html>
 * <head>
 * 		<script>.../cityways.js</script>
 *		<script>
 * 				function initialize(){
 * 				var map = new cityways.map.GoogleMap ('map');
 * 				}
 * 		</script>
 * </head>
 * <body onload="initialize()">
 * 		<div id="map"></div>
 * </body>
 * </html>
 * 
 */

cityways.map.GoogleMap = cityways.Class({
    div  : null,
    
	initialize : function(div, options) {
	    this.div = div;
	    cityways.log('Google map was initialized');
	}

});
/* ======================================================================
    cityways/BrowserDetect.js
   ====================================================================== */


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
  
/* ======================================================================
    cityways/options.js
   ====================================================================== */


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
/* ======================================================================
    cityways/util.js
   ====================================================================== */


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
  
/* ======================================================================
    cityways/lang/uk.js
   ====================================================================== */

/**
 * @requires cityways/cityways.js
 */

/**
 * Namespace: OpenLayers.Lang["en"] Dictionary for English. Keys for entries are
 * used in calls to <OpenLayers.Lang.translate>. Entry bodies are normal strings
 * or strings formatted for use with <OpenLayers.String.format> calls.
 */
cityways.lang.uk = {
	'path_time' : "Час в дорозi",
	'cost' : "Вартiсть:",
	'time' : "Час у дорозi: ",
	'UAH' : "грн",
	'time.minute' : "хвилина",
	'time.minutes10' : "хвилин",
	'time.minutes' : "хвилини",
	'time.minutes_ru' : "хвилин"

};
/* ======================================================================
    cityways/cityways_ext.js
   ====================================================================== */



/**
 * @requires cityways/cityways.js
 */


/* ======================================================================
    cityways/template/html.js
   ====================================================================== */


/**
 * @requires cityways/cityways.js
 */

/**
 * Статический класс, хранит общие статические свойства
 */
cityways.template.html = {

	_templates : {},

	/**
	 * Возвращает html шаблон со словаря _templates. Если такой не сущействует,
	 * пытается загрузить его с сервера Функция ассинхронная,
	 * 
	 * @param {Object}
	 *            templateName
	 * @param {Object}
	 *            callback
	 */
	get : function(templateName, callback) {
		var templates = cityways.template.HtmlTemplates._templates;
		if (templates[templateName] === undefined) {
			var loader = new cityways.loader.TemplatesLoader();
			var fileName = cityways.template.HtmlTemplates
					._getFileByTemplateName(templateName);
			loader.loadHtmlTemplates(fileName, function(__templates) {
                        cityways.Util.extend(templates,__templates);
                        callback(templates[templateName]);
            		});
		} else {
			callback(templates[templateName]);
		}

	},

	_getFileByTemplateName : function(templateName) {
		// templateName = template-<file_name>-<name>
		return "main";
	}

};
/* ======================================================================
    cityways/Map.js
   ====================================================================== */

/**
 * @requires cityways/Class.js
 */

/**
 * Class: cityways.WidgetMap

 */
/*Example:
 * <html>
 * <head>
 * 		<script>.../cityways.js</script>
 *		<script>
 * 				function initialize(){
 * 				var map = new cityways.WidgetMap ('map');
 * 				}
 * 		</script>
 * </head>
 * <body onload="initialize()">
 * 		<div id="map"></div>
 * </body>
 * </html>
 * 
 */
/**
 * [Map description]
 * @constructor
 * @type {cityways.Map}
 * @this {cityways.Map}
 */
cityways.Map = cityways.Class({
    
    div  : null,
    
    mapObj : null,
    
	initialize : function(div, options) {
	    this.div = div;
	    this.mapObj = new cityways.map.GoogleMap(div,options);
	    cityways.Util.extend(this,this.mapObj);
	}

});
/* ======================================================================
    cityways/lang/en.js
   ====================================================================== */

/**
 * @requires cityways/cityways.js
 */

/**
 * Namespace: OpenLayers.Lang["en"]
 * Dictionary for English.  Keys for entries are used in calls to
 *     <OpenLayers.Lang.translate>.  Entry bodies are normal strings or
 *     strings formatted for use with <OpenLayers.String.format> calls.
 */
cityways.lang.en = {
	'path_time': "Path time",
	'cost': "Coast",
	'time': "Path time",
	'UAH' : "UAH",
	'time.minute': "minute",
	'time.minutes10': "minutes",
	'time.minutes': "minutes",
	'time.minutes_ru': "minutes",

    'unhandledRequest': "Unhandled request return ${statusText}",

    'Permalink': "Permalink",

    'Overlays': "Overlays",

    'Base Layer': "Base Layer",

    'noFID': "Can't update a feature for which there is no FID.",

    'browserNotSupported':
        "Your browser does not support vector rendering. Currently supported renderers are:\n${renderers}",

    // console message
    'minZoomLevelError':
        "The minZoomLevel property is only intended for use " +
        "with the FixedZoomLevels-descendent layers. That this " +
        "wfs layer checks for minZoomLevel is a relic of the" +
        "past. We cannot, however, remove it without possibly " +
        "breaking OL based applications that may depend on it." +
        " Therefore we are deprecating it -- the minZoomLevel " +
        "check below will be removed at 3.0. Please instead " +
        "use min/max resolution setting as described here: " +
        "http://trac.openlayers.org/wiki/SettingZoomLevels",

    'commitSuccess': "WFS Transaction: SUCCESS ${response}",

    'commitFailed': "WFS Transaction: FAILED ${response}",

    'googleWarning':
        "The Google Layer was unable to load correctly.<br><br>" +
        "To get rid of this message, select a new BaseLayer " +
        "in the layer switcher in the upper-right corner.<br><br>" +
        "Most likely, this is because the Google Maps library " +
        "script was either not included, or does not contain the " +
        "correct API key for your site.<br><br>" +
        "Developers: For help getting this working correctly, " +
        "<a href='http://trac.openlayers.org/wiki/Google' " +
        "target='_blank'>click here</a>",

    'getLayerWarning':
        "The ${layerType} Layer was unable to load correctly.<br><br>" +
        "To get rid of this message, select a new BaseLayer " +
        "in the layer switcher in the upper-right corner.<br><br>" +
        "Most likely, this is because the ${layerLib} library " +
        "script was not correctly included.<br><br>" +
        "Developers: For help getting this working correctly, " +
        "<a href='http://trac.openlayers.org/wiki/${layerLib}' " +
        "target='_blank'>click here</a>",

    'Scale = 1 : ${scaleDenom}': "Scale = 1 : ${scaleDenom}",
    
    //labels for the graticule control
    'W': 'W',
    'E': 'E',
    'N': 'N',
    'S': 'S',
    'Graticule': 'Graticule',

    // console message
    'reprojectDeprecated':
        "You are using the 'reproject' option " +
        "on the ${layerName} layer. This option is deprecated: " +
        "its use was designed to support displaying data over commercial " + 
        "basemaps, but that functionality should now be achieved by using " +
        "Spherical Mercator support. More information is available from " +
        "http://trac.openlayers.org/wiki/SphericalMercator.",

    // console message
    'methodDeprecated':
        "This method has been deprecated and will be removed in 3.0. " +
        "Please use ${newMethod} instead.",

    // **** end ****
    'end': ''
    
};
/* ======================================================================
    cityways/language.js
   ====================================================================== */

/* Copyright (c) 2006-2012 by OpenLayers Contributors (see authors.txt for 
 * full list of contributors). Published under the 2-clause BSD license.
 * See license.txt in the OpenLayers distribution or repository for the
 * full text of the license. */

/**
 * @requires cityways/cityways.js
 */

/**
 * Статический класс
 */
cityways.language = {
    
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
        if(!cityways.language.code) {
            cityways.language.setCode();
        }
        


        return cityways.language.code;
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
        
        cityways.language.code = lang;
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
        var dictionary = cityways.lang[cityways.language.getCode()];
        var message = dictionary && dictionary[key];
        if(!message) {
            message = key;
        }
        return message;
    }
    
    
};

/* ======================================================================
    cityways/loader/TemplatesLoader.js
   ====================================================================== */

/**
 * @requires cityways/Class.js
 */

cityways.loader.TemplatesLoader = cityways.Class({

	initialize : function() {

	},

	loadHtmlTemplates : function(templateFile, callback) {
		var url = cityways.options.ResourceURI + "themes/" + cityways.options.Theme
				+ "/templates/" + templateFile + ".xml";
		$.ajax({
					url : url,
					success : function(templatesHtml) {
					    if (callback == null)
                            throw new Error("callback was not defined");
						var ts = templatesHtml.getElementsByTagName("template");
						var templates = {};
						for (var i = 0; i < ts.length; i++) {
							try {
								cityways.log(ts[i].textContent);
								cityways.log(ts[i].getAttribute("id"));
								var key = ts[i].getAttribute("id");
								var value = _.template(ts[i].textContent);
								templates[key] = value;
								cityways.log("ok");
							} catch (err) {

							}
						}
						callback(templates);
					}
				});
	}
});
/* ======================================================================
    cityways/page/MainPage.js
   ====================================================================== */

/**
 * @overview class cityways.page.MainPage
 * @copyright 
 * 2012,PremiumGIS Inc. All Rights Reserved. <a href="http://premiumgis.com">PremiumGIS</a>
 * Project url: <a href="http://ways.in.ua">cityways</a>
 * 
 * @author <a href="mailto:rs@premiumgis.com">Roman Shafeyev</a>
 * 
 * @requires cityways/Class.js
 */


/**
 * @requires cityways/Class.js
 * @requires cityways/page.js
 */

/**
 * [MainPage description]
 * @class cityways.page.MainPage
 */
cityways.page.MainPage = cityways.Class({

	/**
	 * Видимость правой панели
	 */
	/**
	 * Видимость правой панели.
	 * @private
	 * @fieldOf cityways.page.MainPage.prototype
	 * @default false
	 * @typedef {bool}
	 * @type {bool}
	 */
	rightPanelVisible : null,
	
	/**
	 * cityways.Pages.MainPage.RouteTypesPanel Панель "Виды транспорта"
	 */
	settingsPanel : null,

	widgetEventHandlers : null,

	currentCity : null,

	/**
	 * [initialize description]
	 * @constructor
	 * @this cityways.page.MainPage
	 * @class cityways.page.MainPage
	 * @param  {[type]} options [description]
	 * @return {[type]}         [description]
	 */
	initialize : function(options) {
		cityways.logger.info(this);
		cityways.logger.info('MainPage was initialized!!');
		//alert("Hello");
		this.currentCity = options.currentCity;
		this.widgetEventHandlers = new cityways.page.main.WidgetEventHandlers();
		this.settingsPanel = new cityways.page.main.SettingsPanel({
					availableRouteTypes : options.routeTypes
				});
		
		this.visibleRightPanel(false);
		
	},

	/**
	 * 
	 * Возвращает текущий город.
	 * @methodOf cityways.page.MainPage.prototype
	 * @return {[type]} [description]
	 */
	getCurrentCity : function() {
		return this.currentCity;
	},

	getWidgetEventHandlers : function() {
		return this.widgetEventHandlers;
	},

	getSettingsPanel : function() {
		return this.settingsPanel;
	},

	getPathsOptions : function() {
		var city = this.getCurrentCity();
		var isTransitions = true;
		var alg_type = "c_time";
		var usage_routeTypes = [];

		if (isTransitions == true) {
			usage_routeTypes.push({
						discount : 1.0,
						route_type_id : "c_route_transition"
					});
		}

		usage_routeTypes.push({
					discount : 1.0,
					route_type_id : "c_route_station_input"
				});
		usage_routeTypes.push({
					discount : 1.0,
					route_type_id : "c_route_station_output"
				});
		usage_routeTypes.push({
					discount : 0.5,
					route_type_id : "c_route_metro"
				});
		usage_routeTypes.push({
					discount : 1.0,
					route_type_id : "c_route_bus"
				});
		usage_routeTypes.push({
					discount : 1.0,
					route_type_id : "c_route_trolley"
				});

		var opts = {
			cityID : city.id,
			p1 : {
				lat : 50.0253640226659,
				lon : 36.3350757963562
			},
			p2 : {
				lat : 50.0353179327227,
				lon : 36.2199825018311
			},
			outTime : {
				dayID : 'c_Sunday',
				timeStart : 1000 * (10 * 60 * 60 + 10 * 60)
			},
			algStrategy : alg_type,
			usageRouteTypes : usage_routeTypes
		};
		return opts;

	},

	/**
	 * 
	 * @param {bool}
	 *            true: show, false : hide
	 */
	visibleRightPanel : function(value) {
		 var ResourceURI = cityways.options.ResourceURI;
		if(this.rightPanelVisible == value)
			return;
		if (value == true) {
			$("#map_canvas").width('68%').css({
						cursor : "auto",
						backgroundColor : "rgb(226, 226, 226)"
					});
			
			//document.img.src = ResourceURI + 'themes/default/images/arrow_right.png';
					
		} else {
			$("#map_canvas").width('98.5%').css({
						cursor : "auto",
						backgroundColor : "rgb(226, 226, 226)"
					});
					
			//document.img.src =ResourceURI + 'themes/default/images/arrow_left.png';
		}
		this.rightPanelVisible = value;
		
	}
});
/* ======================================================================
    cityways/lang/ru.js
   ====================================================================== */

/**
 * @requires cityways/cityways.js
 */

/**
 * Namespace: OpenLayers.Lang["en"]
 * Dictionary for English.  Keys for entries are used in calls to
 *     <OpenLayers.Lang.translate>.  Entry bodies are normal strings or
 *     strings formatted for use with <OpenLayers.String.format> calls.
 */
cityways.lang.ru = {
	'path_time': "Время в пути",
	'cost': "Стоимость:",
	'time': "Время в пути: ",
	'UAH' : "грн",
	'time.minute': "минута",
	'time.minutes10': "минут",
	'time.minutes': "минуты",
	'time.minutes_ru': "минут"

};
/* ======================================================================
    cityways/helper/styles.js
   ====================================================================== */

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
/* ======================================================================
    cityways/loader/PathsLoader.js
   ====================================================================== */

/**
 * @requires cityways/Class.js
 */

cityways.loader.PathsLoader = cityways.Class({

			/**
			 * 
			 * @param {Object}
			 *            mainPage
			 */
			initialize : function() {

			},
			
			/**
			 * 
 * @param {Object} options Опции, по которым будет производиться поиск крат. пути
 * var opts = {
            cityID : Integer,
            p1 : {
                lat : Double,
                lon : Double
            },
            p2 : {
                lat : Double,
                lon : Double
            },
            outTime : {
                dayID : 'c_Sunday',
                timeStart : Integer(secs)
            },
            algStrategy : 'c_time', 'c_cost',
            usageRouteTypes : [
               {
            discount : 1.0,
            route_type_id : "c_route_station_input"
        },
        ...
            ]
        };
 * @param {Object} resultFunc Callback функция
			 */
			findShortestPaths : function(options, callback) {
				$.ajax({
							url : cityways.options.ServerHost + "/paths/find.json",
							type : "POST",
							data : {data: $.toJSON(options ) },
							success : function(data) {
								cityways.log("findShortestPaths");
								var obj = $.parseJSON(data);
							    if(callback == null)
							         throw new Error("resultFunc was not defined");
								callback({
											data : obj
										});
							}
						});
			}
		});
