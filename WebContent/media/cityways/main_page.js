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


/**
 * @overview namespace cityways.event
 * @copyright 
 * 2012,PremiumGIS Inc. All Rights Reserved. <a href="http://premiumgis.com">PremiumGIS</a>
 * Project url: <a href="http://ways.in.ua">cityways</a>
 * 
 * @author <a href="mailto:rs@premiumgis.com">Roman Shafeyev</a>
 * 
 * @requires cityways/cityways.js
 */

/**
 * @namespace cityways.event
 */
 cityways.event = {

	/**
	 * [listeners description]
	 * @type {Dictionary<Object,Dictionary<String, Array<cityways.map.EventListener > > >}
	 * @private
	 * @example
	 * var listeners = {
	 * 			"obj1" : {
	 * 				"click" : [
	 * 					{cityways.map.EventListener} object,
	 * 				    {cityways.map.EventListener} object
	 * 				    ],
	 *
	 * 				"drag_end" : [
	 * 					{cityways.map.EventListener} object
	 * 				 	]
	 * 			},
	 * 			"obj2" : {
	 * 				"move" : [
	 * 					{cityways.map.EventListener} object,
	 * 				    {cityways.map.EventListener} object,
	 * 					{cityways.map.EventListener} object
	 * 					]
	 *     		}
	 * };
	 */
	 listeners : {},

	 /**
	  * [addListener description]
	  * @param {Object}   object   				[description]
	  * @param {String}   evt      				[description]
	  * @param {Function} callback 				[description]
	  * @return {cityways.map.EventListener}    [description]
	  */
	 addListener : function(object, evt, callback) {
	 	var listeners = cityways.event.listeners;
	 	if(object[evt]){
	 		var listener = new cityways.EventListener(object, evt, callback);
	 		if(cityways.event.listeners[object] == undefined){
	 			cityways.event.listeners[object] = {};
	 			cityways.event.listeners[object][evt] = [];
	 		}
	 		cityways.event.listeners[object][evt].push(listener);
	 		return listener;
	 	}
	 	return null;

	 },

	 /**
	  * [removeListener description]
	  * @param  {cityways.map.EventListener} listener [description]
	  */
	 removeListener : function(listener) {
	 	var listeners = cityways.event.listeners;
	 	if ( listeners[listener.object] && listeners[listener.object][listener.evt]) {
	 		var objListeners = listeners[listener.object][listener.evt];
	 		for(var i=0; i < objListeners.length; i++){
	 			if(objListeners[i] == listener){
	 				objListeners.remove(i);
	 				return;
	 			}
	 		}
	 	}
	 },

	 /**
	  * [triggerEvent description]
	  * @param  {Object} object [description]
	  * @param  {[type]} evt    [description]
	  * @param  {[type]} args   [description]
	  * @return {[type]}        [description]
	  */
	 triggerEvent : function(object, evt, args) {
	 	var listeners = cityways.event.listeners;
	 	if(listeners[object] && listeners[object][evt]){
	 		var objListeners = listeners[object][evt];
	 		for(var i = 0; i < objListeners.length; i++){
	 			objListeners[i].callback(args);
	 		}
	 	}
	 } 


};
/**
 * @overview class cityways.EventListener
 * @copyright 
 * 2012,PremiumGIS Inc. All Rights Reserved. <a href="http://premiumgis.com">PremiumGIS</a>
 * Project url: <a href="http://ways.in.ua">cityways</a>
 * 
 * @author <a href="mailto:rs@premiumgis.com">Roman Shafeyev</a>
 * 
 * @requires cityways/Class.js
 */


/**
 * [EventListener description]
 * @class cityways.EventListener
 */
cityways.EventListener = cityways.Class({

	object : null,

	evt : null,

	callback : null,

	/**
	 * @constructor
	 * @param  {[type]}   object   [description]
	 * @param  {[type]}   evt      [description]
	 * @param  {Function} callback [description]
	 * @return {[type]}            [description]
	 */
	initialize : function(object, evt, callback) {
			this.object = object;
			this.evt = evt;
			this.callback = callback;
	}
});

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
    Events : null,


    setCurrent : function(page){
        cityways.page.Current = page;
        cityways.page.Events = page.getWidgetEventHandlers();
    }
    
    
    
};
/**
 * @overview namespace cityways.map.event
 * @copyright 
 * 2012,PremiumGIS Inc. All Rights Reserved. <a href="http://premiumgis.com">PremiumGIS</a>
 * Project url: <a href="http://ways.in.ua">cityways</a>
 * 
 * @author <a href="mailto:rs@premiumgis.com">Roman Shafeyev</a>
 * 
 * @requires cityways/cityways.js
 */


/**
 * @namespace cityways.map.event
 */
 cityways.map.event = {

 	/**
 	 * @constant
 	 * @type {String}
 	 */
 	ON_MAP_CLICK : "click"

 };
	 
/**
 * @overview class cityways.map.GoogleMap
 * @copyright 
 * 2012,PremiumGIS Inc. All Rights Reserved. <a href="http://premiumgis.com">PremiumGIS</a>
 * Project url: <a href="http://ways.in.ua">cityways</a>
 * 
 * @author <a href="mailto:rs@premiumgis.com">Roman Shafeyev</a>
 * 
 * @requires cityways/Class.js
 */

/**
 * 
 * @class cityways.map.GoogleMap
 * @extends {cityways.Map}
 * @example
 * <html>
 * <head>
 * 		<script>.../cityways.js</script>
 *		<script>
 * 				function initialize(){
 * 				var map = new cityways.map.GoogleMap('map');
 * 				}
 * 		</script>
 * </head>
 * <body onload="initialize()">
 * 		<div id="map"></div>
 * </body>
 * </html>
 */
cityways.map.GoogleMap = cityways.Class({
    
    /**
     * ID dom элемента, в который нужно поместить карту
     * @type {String}
     * @private
     */
    div  : null,
  
    /**
     * Объект google.maps.Map
     * @type {google.maps.Map}
     * @private
     */
    googleMap : null,


 	/**
 	 * @constructor
	 * @param  {String} div     ID dom элемента, в который будет помещена карта
	 * @param  {Object} options Начальные опции карты
	 * @example Структура объекта options:
	 * options = {
	 *      	  zoom        : {Number},             // Масштаб карты
	 *      	  minZoom     : {Number},             // Минимальный масштаб
	 *      	  center : {						  // Координаты центральной точки карты 
	 * 			     lat : {Number},	              // Широта
	 * 			     lng : {Number}	                  // Долгота
	 * 			  }
	 * };
 	 */
	initialize : function(div, options) {
	    this.div = div;

	    var latlng = new google.maps.LatLng(options.center.lat,
				options.center.lng);
	    
	    var googleMapOptions = {
			zoom : options.zoom,
			center : latlng,
			mapTypeId : google.maps.MapTypeId.ROADMAP,
			minZoom : options.minZoom
		};
	    cityways.logger.info(googleMapOptions);
	    var self = this;
	    $(document).ready(function() {
			self.googleMap = new google.maps.Map(document.getElementById(div),googleMapOptions);
			self.googleMap.setOptions({
					draggableCursor : 'crosshair'
				});
			self._registerListeners();
			cityways.logger.info('Google map was initialized');
		});
	    

	},


	_registerListeners : function() {
		var self = this;
		cityways.logger.info(self);
		google.maps.event.addListener(self.googleMap, 'click', function(e) {
			var args = {
				lat : e.latLng.lat(),
				lng : e.latLng.lng()
			};
			cityways.event.triggerEvent(self, cityways.map.event.ON_MAP_CLICK, args);
		});
	}

});
/**
 * @overview abstract class cityways.Map
 * @copyright 
 * 2012,PremiumGIS Inc. All Rights Reserved. <a href="http://premiumgis.com">PremiumGIS</a>
 * Project url: <a href="http://ways.in.ua">cityways</a>
 * 
 * @author <a href="mailto:rs@premiumgis.com">Roman Shafeyev</a>
 * 
 * @requires cityways/Class.js
 * @requires cityways/page.js
 */

/**
 * [Map description]
 * @interface cityways.Map 
 * @example
 * <html>
 * 	<head>
 * 		<script>.../cityways.js</script>
 *		<script>
 * 				function initialize(){
 * 				var options = {
 * 					mapProvider : "google"
 * 				};
 * 				var map = new cityways.Map('map',options);
 * 				}
 * 		</script>
 *  </head>
 * <body onload="initialize()">
 * 		<div id="map"></div>
 * </body>
 * </html>
  */
cityways.Map = cityways.Class({

    /**
     * @event Событие вызывается, когда произошло нажатие клавишей мыши на карте 
     * @example Описание аргументов:
     * {
     * 		lat : {Number},
     * 		lng : {Number}
     * };
     */
    "click" : true,

    mapObj : null,
 
 	/**
 	 * @constructor
	 * @param  {String} div     ID dom элемента, в который будет помещена карта
	 * @param  {Object} options Начальные опции карты
	 * @example Структура объекта options:
	 * options = {
	 * 			  mapProvider : {String}, 			  // Провайдер карты, значения: "google", "yandex"
	 *    		  providerKey : {String},             // Key провайдера(только для yandex карт)
	 *      	  zoom        : {Number},             // Масштаб карты
	 *      	  minZoom     : {Number},             // Минимальный масштаб
	 *      	  center : {						  // Координаты центральной точки карты 
	 * 			     lat : {Number},	              // Широта
	 * 			     lng : {Number}	                  // Долгота
	 * 			  }
	 * };
 	 */
	initialize : function(div, options) {
		this.div = div;
	    var mapObj = null;
	    if(options.mapProvider == "google")
	    	mapObj = new cityways.map.GoogleMap(div,options);
	    this.mapObj = mapObj;
	    cityways.extend(this,this.mapObj);
	},

	/**
	 * [getNativeMapObj description]
	 * @return {[type]} [description]
	 * 
	 */
	getNativeMapObj : function(){}


});
/**
 * @overview class cityways.MapWidget
 * @copyright 
 * 2012,PremiumGIS Inc. All Rights Reserved. <a href="http://premiumgis.com">PremiumGIS</a>
 * Project url: <a href="http://ways.in.ua">cityways</a>
 * 
 * @author <a href="mailto:rs@premiumgis.com">Roman Shafeyev</a>
 * 
 * @requires cityways/Class.js
 */

/**
 * [MapWidget description]
 * @class cityways.MapWidget
 */
cityways.MapWidget  =  cityways.Class({

	map : null,

	options : null,

	/**
	 * @constructor 
	 * @param  {String} div     ID dom элемента, в который будет помещена карта
	 * @param  {Object} options Начальные опции карты
	 * @example Структура объекта options:
	 * options = {
	 * 			  mapProvider : {String}, 			// Провайдер карты, значения: "google", "yandex"
	 *    		  providerKey : {String},           // Key провайдера(только для yandex карт)
	 *      	  zoom        : {Number},           // Масштаб карты
	 *      	  center : {						// Координаты центральной точки карты 
	 * 			     lat : {Number},	            // Широта
	 * 			     lng : {Number}	                // Долгота
	 * 			  }
	 * };
	 */
	initialize : function(div,options){
		this.options = options;
		this.options.minZoom = options.zoom - 2;
		this.map = new cityways.Map(div,options);
	},


	getMap : function(){
		return this.map;
	}


});
/**
 * @overview class cityways.page.MainPage
 * @copyright 
 * 2012,PremiumGIS Inc. All Rights Reserved. <a href="http://premiumgis.com">PremiumGIS</a>
 * Project url: <a href="http://ways.in.ua">cityways</a>
 * 
 * @author <a href="mailto:rs@premiumgis.com">Roman Shafeyev</a>
 * 
 * @requires cityways/Class.js
 * @requires cityways/page.js
 */

/**
 * [MainPage description]
 * @class cityways.page.MainPage
 */
cityways.page.MainPage = cityways.Class({

	/**
	 * [mapWidget description]
	 * @type {cityways.Map}
	 */
	mapWidget : null,

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

	/**
	 * @private
	 * @type {Object}
	 * @example Структура:
	 * {
	 * scale : {Number},
	 * location : {
	 * 			     lat : {Number},
	 * 			     lon : {Number}	
	 * 			  }
	 * }
	 */
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
		selectbox_initialize();

		cityways.helper.styles.includeCSSFile(cityways.options.getResourcePath() + "css/",
												[{
													name : "main.css"
												}]);
		this._prepareTabs();
		this.currentCity = options.currentCity;
		this.widgetEventHandlers = new cityways.page.main.WidgetEventHandlers();
		this.settingsPanel = new cityways.page.main.SettingsPanel({
					availableRouteTypes : options.routeTypes
				});

		var mapOptions = {
			mapProvider : "google",
			zoom : this.currentCity.scale,
			center : {
				lat : this.currentCity.location.lat,
				lng : this.currentCity.location.lon
			}
		};
		this.mapWidget = new cityways.MapWidget("map_canvas",mapOptions);
		this.visibleRightPanel(false);
		cityways.logger.info('MainPage was initialized!!');
		
		cityways.event.addListener(this.mapWidget.getMap(),cityways.map.event.ON_MAP_CLICK,function(){
			cityways.logger.info('Click on the map.');
		});
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
		
	},

	_prepareTabs : function() {
		$("div.selectTabs_first, div.selectTabs_second").each(function() {
		var tmp = $(this);
		// console.log($(tmp).find(" .lineTabs li"));
		$(tmp).find(".lineTabs li").each(function(i) {
					$(tmp).find(".lineTabs li:eq(" + i + ") a").click(
							function() {
								var tab_id = i + 1;
								$(tmp).find(".lineTabs li a")
										.removeClass("active");
								$(this).addClass("active");
								$(tmp).find(".content div").stop(false, false)
										.hide();
								$(tmp).find(".tab" + tab_id).stop(false, false)
										.show();
								return false;
							});
				});
		});
	},

	_prepareNotes : function() {
		$('.demo-tip-darkgray').poshytip({
				className : 'tip-darkgray',
				showTimeout : 1,
				bgImageFrameSize : 11,
				offsetX : -25
			});
	}
});

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

/**
 * @requires cityways/Class.js
 * @requires cityways/page.js
 */

/**
 * Class:
 */
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
       cityways.logger.info(this.availableRouteTypes);
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
        var resourcePath = cityways.options.ServerHost;
        var elem = this._getRouteTypeBtnHtmlElement(routeType);
        var img  = elem.find("img").get(0);
        var imgFileName = resourcePath  + 'media/css/images/route_types/32/' + routeType;
        //elem.title = title; 
        if(val == true){
            img.src = imgFileName + '_selected.png';
        }else
        {
            img.src = imgFileName + '.png';
        }
       
    },
    
    _getRouteTypeBtnHtmlElement : function(routeType){
         cityways.logger.info($("#cways_menu_route_btn_" + routeType));
          return $("#cways_menu_route_btn_" + routeType);
    },
    
    isEnabledRouteTypeBtn : function(routeType){
        var elem = this._getRouteTypeBtnHtmlElement(routeType);
        var resourcePath = cityways.options.ServerHost;
        var img  = elem.find("img").get(0);
        var imgFileName = resourcePath  + 'media/css/images/route_types/32/' + routeType;
        
        if (img.src.indexOf(imgFileName + '.png') != -1) {
                return false;
            } else {
            return true;
        }  
    }
    
    
});

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
				var page = cityways.page.Current;
				if (page.getSettingsPanel().isEnabledRouteTypeBtn(routeType) == true) {
					page.getSettingsPanel().enableRouteTypeBtn(routeType,
							false, includeTitle);
				} else {
					cityways.logger.info("false");
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
					cityways.logger.info(path.getFullCost());
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

				cityways.template.html.get(
						"template-main-waysPanelHeader", function(template) {
							loadedTemplates++;
							templates["template-main-waysPanelHeader"] = template;
							if (loadedTemplates == templatesCount) {
								_this._onMakeRightPanelContent(_this, data,
										templates);
							}
						});

				cityways.template.html.get(
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
				var page = cityways.page.Current;
				var options = page.getPathsOptions();

				var el = document.getElementById('ways_panel');
				if (options == null)
					return;
				el.style.display = 'block';
				var loadGif = cityways.options.getResourcePath()
						+ "images/load.gif";
				$('#panel_data').html("<div class='loader_text'><img src='"
						+ loadGif + "'/></div>");
				$('#panel_scrollbar').tinyscrollbar_update();
				page.visibleRightPanel(true);
				var _this = this;
				cityways.logger.info("onFindBtnClick");
				var loader = new cityways.loader.PathsLoader();
				loader.findShortestPaths(options, function(e) {
							cityways.logger.info("findShortestPaths");
							_this._onLoadedPaths(_this, e);
						});

			},
			
			on_selectDetailWay : function(way_ind)
			{
			cityways.logger.info("OK");
			}
		});


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
