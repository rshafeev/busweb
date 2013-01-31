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
    cityways/CityWays.js
   ====================================================================== */

/* Copyright (c) 2006-2012 by OpenLayers Contributors (see authors.txt for
 * full list of contributors). Published under the 2-clause BSD license.
 * See license.txt in the OpenLayers distribution or repository for the
 * full text of the license. */

 /**
 * Определим все namespace
 */

var cityways =  {
    lang : {},
    loader : {},
    page : {},
    type : {},
    widget : {},
    template : {}
};

cityways.page = {
    main :{},
    routes : {}
};





/* ======================================================================
    test/TestConsole.js
   ====================================================================== */


/**
 * @requires cityways/CityWays.js
 */

cityways.Console =  {
    log : console.log.bind(console)
};




/* ======================================================================
    cityways/Language.js
   ====================================================================== */

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
    defaultCode: "En",
        
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
        parts[0] = parts[0];//.toLowerCase();
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

/* ======================================================================
    cityways/Util.js
   ====================================================================== */

/**
 * @requires cityways/CityWays.js
 */

cityways.Util = {

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
			cityways.Util.extend(C.prototype, o);
		}
	},

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
    cityways/type/Class.js
   ====================================================================== */

/* Copyright (c) 2006-2012 by OpenLayers Contributors (see authors.txt for 
 * full list of contributors). Published under the 2-clause BSD license.
 * See license.txt in the OpenLayers distribution or repository for the
 * full text of the license. */

/**
 * @requires cityways/CityWays.js
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
 *     var MyClass = OpenLayers.Class(Class1, Class2, prototype);
 * (end)
 * 
 * Note that instanceof reflection will only reveal Class1 as superclass.
 *
 */
cityways.type.Class = function() {
    var len = arguments.length;
    var P = arguments[0];
    var F = arguments[len-1];

    var C = typeof F.initialize == "function" ?
        F.initialize :
        function(){ P.prototype.initialize.apply(this, arguments); };

    if (len > 1) {
        var newArgs = [C, P].concat(
                Array.prototype.slice.call(arguments).slice(1, len-1), F);
        cityways.Util.inherit.apply(null, newArgs);
    } else {
        C.prototype = F;
    }
    return C;
};

/* ======================================================================
    cityways/page/MainPage.js
   ====================================================================== */

/**
 * @requires cityways/type/Class.js
 */

/**
 * Class: cityways.Pages.MainPage
 */
cityways.page.MainPage = cityways.type.Class({

    /**
     * cityways.Pages.MainPage.RouteTypesPanel
     * Панель "Виды транспорта"
     */
    settingsPanel : null,

    widgetEventHandlers : null,

    currentCity : null,


    /**
     *
     * @param {Object}
     *            options
     */
    initialize : function(options) {
        cityways.Console.log(this);
        cityways.Console.log('MainPage was initialized!!');
        this.currentCity = options.currentCity;
        this.widgetEventHandlers = new cityways.page.main.WidgetEventHandlers();
        this.settingsPanel = new cityways.page.main.SettingsPanel({
            availableRouteTypes : options.routeTypes
        });
    },

    getCurrentCity : function() {
        return this.currentCity;
    },

    getWidgetEventHandlers : function() {
        return this.widgetEventHandlers;
    },

    getSettingsPanel : function() {
        return this.settingsPanel;
    },
    
    getPathsOptions : function()
    {
        var city = this.getCurrentCity();
        var isTransitions  = true;
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

    }
});
/* ======================================================================
    cityways/WidgetMap.js
   ====================================================================== */

/**
 * @requires cityways/type/Class.js
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
cityways.WidgetMap = cityways.type.Class({

	initialize : function(div, options) {
		console.log('map was initialized');
	}

});
/* ======================================================================
    cityways/page/main/SettingsPanel.js
   ====================================================================== */


/**
 * @requires cityways/type/Class.js
 */

/**
 * Class:
 */
cityways.page.main.SettingsPanel = cityways.type.Class({
    
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
    cityways/Console.js
   ====================================================================== */

/**
 * @requires cityways/type/Class.js
 */

if (cityways.Console === undefined) {

	cityways.Console = {
		log : function() {
		}
	};

}
/* ======================================================================
    cityways/page/main/WidgetEventHandlers.js
   ====================================================================== */

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
/* ======================================================================
    cityways/template/HtmlTemplates.js
   ====================================================================== */


/**
 * @requires cityways/Console.js
 */

/**
 * Статический класс, хранит общие статические свойства
 */
cityways.template.HtmlTemplates = {

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
    cityways/Basic.js
   ====================================================================== */


/**
 * @requires cityways/Console.js
 */

/**
 * Статический класс, хранит общие статические свойства
 */
cityways.Basic = {
    
    Theme : "default",
    
    /**
     * Property: ImgPath {String} Set this to the path where control images are
     * stored, a path given here must end with a slash. If set to '' (which is
     * the default) OpenLayers will use its script location + "img/".
     * 
     * You will need to set this property when you have a singlefile build of
     * 
     * Layers that either is not named "OpenLayers.js" or if you move the file
     * in a way such that the image directory cannot be derived from the script
     * location.
     * 
     * If your custom OpenLayers build is named "my-custom-ol.js" and the images
     * of OpenLayers are in a folder "/resources/external/images/ol" a correct
     * way of including OpenLayers in your HTML would be:
     * 
     * (code) <script src="/path/to/my-custom-ol.js" type="text/javascript"></script>
     * <script type="text/javascript"> // tell OpenLayers where the control
     * images are // remember the trailing slash OpenLayers.ImgPath =
     * "/resources/external/images/ol/"; </script> (end code)
     * 
     * Please remember that when your OpenLayers script is not named
     * "OpenLayers.js" you will have to make sure that the default theme is
     * loaded into the page by including an appropriate <link>-tag, e.g.:
     * 
     * (code) <link rel="stylesheet" href="/path/to/default/style.css"
     * type="text/css"> (end code)
     */  
	ResourceURI : "/",
	/**
	 * Constant: VERSION_NUMBER
	 */
	VERSION_NUMBER : "Release 2.13 dev",

    /**
	 * Method: _getScriptLocation Return the path to this script. This is also
	 * implemented in OpenLayers.js
	 * 
	 * Returns: {String} Path to this script
	 */

	_getScriptLocation: function(scriptName) {
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
    cityways.Basic.ResourceURI = cityways.Basic._getScriptLocation("MainPage");
    cityways.Console.log(cityways.Basic.ResourceURI);
})();
  
/* ======================================================================
    cityways/lang/En.js
   ====================================================================== */

/**
 * @requires cityways/Language.js
 */

/**
 * Namespace: OpenLayers.Lang["en"]
 * Dictionary for English.  Keys for entries are used in calls to
 *     <OpenLayers.Lang.translate>.  Entry bodies are normal strings or
 *     strings formatted for use with <OpenLayers.String.format> calls.
 */
cityways.lang.En = {

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
    cityways/loader/PathsLoader.js
   ====================================================================== */

/**
 * @requires cityways/type/Class.js
 */

cityways.loader.PathsLoader = cityways.type.Class({

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
			findShortestPaths : function(options, resultFunc) {
				$.ajax({
							url : cityways.ResourceURI + "paths/find.json",
							type : "POST",
							data : {data: $.toJSON(options ) },
							success : function(data) {
							    if(resultFunc == null)
							         throw new Error("resultFunc was not defined");
								resultFunc({
											data : data
										});
							},
							dataType : "application/json"
						});
			}
		});
/* ======================================================================
    cityways/loader/TemplatesLoader.js
   ====================================================================== */

/**
 * @requires cityways/type/Class.js
 */

cityways.loader.TemplatesLoader = cityways.type.Class({

	initialize : function() {

	},

	loadHtmlTemplates : function(templateFile, callback) {
		var url = cityways.Basic.ResourceURI + "themes/" + cityways.Basic.Theme
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
								cityways.Console.log(ts[i].innerText);
								cityways.Console.log(ts[i].getAttribute("id"));
								var key = ts[i].getAttribute("id");
								var value = _.template(ts[i].innerText);
								templates[key] = value;
								cityways.Console.log("ok");
							} catch (err) {

							}
						}
						callback(templates);
					}
				});
	}
});
/* ======================================================================
    cityways/Page.js
   ====================================================================== */


/**
 * @requires cityways/CityWays.js
 */

/** 
 * Header: OpenLayers Base Types
 * OpenLayers custom string, number and function functions are described here.
 */

/**
 * Namespace: cityways.Pages
 * Contains convenience functions for string manipulation.
 */

cityways.Page = {
    
    /**
     * Текущая страница
     */
    Current : null,
    
   /**
    * 
    * @return Обработчик событий виджетов текущей страницы 
    */
    Events : function(){
        return cityways.Page.Current.getWidgetEventHandlers();
    }
    
    
    
};
