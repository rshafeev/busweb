/**
 * @overview Namespace {@link cityways.type}.
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
 * @namespace cityways.type
 */
 cityways.type = {

 	/**
 	 * Тип словаря, у которого ключами выступают объекты любого типа.
 	 * @constant
 	 * @type {String}
 	 */
 	DICTIONARY_OBJECT_KEY : "object_key",

 	/**
 	 * Тип словаря, у которого ключами выступают строковые значения.
 	 * @constant
 	 * @type {String}
 	 */
	DICTIONARY_STRING_KEY : "string_key"


 };
/**
 * @overview Class {@link cityways.type.Dictionary}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 * 
 * @requires cityways/type.js
 * @requires cityways/Class.js
 */

/**
 * @param {String} keyType {@link cityways.type.DICTIONARY_OBJECT_KEY} или {@link cityways.type.DICTIONARY_STRING_KEY}
 * @class cityways.type.Dictionary
 * @extends {cityways.type.IDictionary}
 * @classdesc Класс Dictionary является словарем, ключами которого могут выступать как строковые значения, так и объекты любого типа.
 * Так как данный класс является абстрактным, в зависимости от типа ключа, класс Dictionary расширяет в конструкторе свою функциональность 
 * за счет наследников ( {@link cityways.type.ObjectDictionary} или {@link cityways.type.StringDictionary}).
 */
cityways.type.Dictionary = cityways.Class({
 	
 	constructor :  function(keyType) {
		if(keyType == undefined)
			keyType =  cityways.type.DICTIONARY_OBJECT_KEY;
		this.setKeyType(keyType);
	},

 	members : {	
 		_keyType : null,

 		setKeyType : function(keyType){
 			if(this._keyType == keyType){
 				return;
 			}
 			this._keyType = keyType;
 			var dict = null;
 			if(keyType == cityways.type.DICTIONARY_STRING_KEY){
 				dict = new cityways.type.StringDictionary();
 			}else{
 				dict = new cityways.type.ObjectDictionary();
 			}
 			cityways.extend(this, dict );
 			
 		}
	}
});

/**
 * @overview Class {@link cityways.type.StringDictionary}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 * 
 * @requires cityways/type/Dictionary.js
 */


/**
 * 
 * @classdesc Класс Dictionary является словарем, ключами которого выступают строковые значения.
 * @class cityways.type.StringDictionary
 * @extends {cityways.type.IDictionary}
 */
 cityways.type.StringDictionary = cityways.Class({
 	
 	constructor :  function() {
 		this.keys = {};
 		this._size = 0;
 	},

 	members : {	

 	/**
	 * Хранит пары ключ-значение
	 * @protected
	 * @memberOf cityways.type.Dictionary.prototype
	 * @type {Object} 
	 */
	 keys : null,

	/**
	 * Количество элементов в словаре
	 * @protected
	 * @memberOf cityways.type.Dictionary.prototype
	 * @type {Number}
	 */
	 _size : null,


	 put : function(key, value){
	 	if(key != undefined){
	 		if(this.keys[key] != undefined){
	 			return false;
	 		}
	 	}
	 	this.keys[key] = value;
	 	this._size++;
	 	return true;
	 },

	 pull : function(key){
	 	if(key != undefined){
	 		delete this.keys[key];
	 		this._size--;
	 	}
	 },

	 get : function(key){
	 	if(key == undefined || this.keys[key] == undefined ){
	 		return null;
	 	}
	 	return this.keys[key];
	 },

	 size : function(){
	 	return this._size;
	 }
	}
});
/**
 * @overview Class {@link cityways.type.Dictionary}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 * 
 * @requires cityways/type/Dictionary.js
 */



/**
 * @class cityways.type.ObjectDictionary
 * @classdesc Класс Dictionary является словарем, ключами которого могут выступать как строковые значения, так и объекты любого типа.
 * @extends {cityways.type.IDictionary}
 */
 cityways.type.ObjectDictionary = cityways.Class({
 	
 	constructor :  function() {
 		this._values = {};
 		this._keys = {};
 		this._size = 0;
 		if(cityways.type.__dictionary__id__ == undefined)
 			cityways.type.__dictionary__id__ = 0;
 	},

 	members : {	
 		/**
	 * Хранит пары ключ-значение
	 * @protected
	 * @memberOf cityways.type.Dictionary.prototype
	 * @type {Object} 
	 */
	 _values : null,

     
     /**
      * [_keys description]
      * @type {[type]}
      */
     _keys : null,

	/**
	 * Количество элементов в словаре
	 * @protected
	 * @memberOf cityways.type.Dictionary.prototype
	 * @type {Number}
	 */
	 _size : null,


	 _nextID : function(){
	 	cityways.type.__dictionary__id__ = cityways.type.__dictionary__id__ + 1;
	 	return cityways.type.__dictionary__id__;
	 },

	 /* override */
	 put : function(key, value){
	 	if(key.__dictionary__id__ != undefined){
	 		if(this._values[key.__dictionary__id__] != undefined){
	 			return false;
	 		}
	 	}
	 	else{
	 		key.__dictionary__id__ = this._nextID();
	 	}
	 	this._values[key.__dictionary__id__] = value;
	 	this._keys[key.__dictionary__id__] = key;
	 	this._size++;
	 	return true;
	 },

	 /* override */
	 pull : function(key){
	 	if(key.__dictionary__id__ != undefined && this._values[key.__dictionary__id__]){
	 		delete this._values[key.__dictionary__id__];
	 		delete this._keys[key.__dictionary__id__];
	 		this._size--;
	 	}
	 },

	 /* override */
	 get : function(key){
	 	if(key.__dictionary__id__ == undefined || this._values[key.__dictionary__id__] == undefined ){
	 		return null;
	 	}
	 	return this._values[key.__dictionary__id__];
	 },

	 getKeys : function(){
	 	return this._keys;
	 },

	 /* override */
	 size : function(){
	 	return this._size;
	 },

	 /* override */
	 getAsAssociativeArray: function(){
	 	return this._values;
	 }
	}
});
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


/**
 * @overview Dictionary {@link cityways.lang.ru}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 * 
 * @requires cityways/lang.js
 */

/**
 * @memberOf cityways.lang
 * @type {Dictionary}
 */
 cityways.lang.ru = {
 	'path_time': "Время в пути",
 	'cost': "Стоимость:",
 	'time': "Время в пути: ",
 	'UAH' : "грн",
 	'time.minute': "минута",
 	'time.minutes10': "минут",
 	'time.minutes': "минуты",
 	'time.minutes_ru': "минут",
 	'title.metro' : "",
 	'title.tram' : "Использовать трамвай",
 	'title.trolley' : "",
 	'title.bus' : "Использовать автобус",
 	'title.auto' : "",
 	'title.metro_exclude' : "",
 	'title.tram_exclude' : "Не использовать трамвай",
 	'title.trolley_exclude' : "",
 	'title.bus_exclude' : "Не использовать автобус",
 	'title.auto_exclude' : "",

 	'message.warn' : "Предупреждение",
 	'message.warn.destinations_none' : "Пожалуйста, установите на карте начальную и конечную точки передвижения."
 };

/**
 * @overview Dictionary {@link cityways.lang.en}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 * 
 * @requires cityways/lang.js
 */

/**
 * @memberOf cityways.lang
 * @type {Dictionary}
 */
cityways.lang.en = {
	'path_time': "Path time",
	'cost': "Coast",
	'time': "Path time",
	'UAH' : "UAH",
	'time.minute': "minute",
	'time.minutes10': "minutes",
	'time.minutes': "minutes",
	'time.minutes_ru': "minutes"
    
};

/**
 * @overview Dictionary {@link cityways.lang.uk}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 * 
 * @requires cityways/lang.js
 */

/**
 * @memberOf cityways.lang
 * @type {Dictionary}
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
 * @overview Namespace {@link cityways.event}.
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
 * @namespace cityways.event
 */
 cityways.event = {

	/**
	 * [listeners description]
	 * @type { {@link cityways.type.Dictionary}<Object,Dictionary<String, Array<cityways.map.EventListener > > >}
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
	 listeners : null,

	 /**
	  * [addListener description]
	  * @param {Object}   object   				[description]
	  * @param {String}   evt      				[description]
	  * @param {Function} callback 				[description]
	  * @return {cityways.map.EventListener}    [description]
	  */
	  addListener : function(object, evt, callback) {
	  	if(cityways.event.listeners == undefined)
	  	{
	  		cityways.event.listeners = new cityways.type.Dictionary();
	  	}
	 	//var listeners = cityways.event.listeners;
	 	var listener = new cityways.EventListener(object, evt, callback);

	 	 cityways.logger.info(object);
	 	
	 	if(cityways.event.listeners.get(object) == null){
	 		var val = {};
	 		val[evt] = [];
	 		cityways.event.listeners.put(object,val);
	 	}
	 	else 
	 		if(cityways.event.listeners.get(object)[evt] == undefined){
	 			cityways.event.listeners.get(object)[evt] = [];
	 		}
	 	cityways.logger.info(cityways.event.listeners);
	 	
	 	cityways.event.listeners.get(object)[evt].push(listener);
	 	
	 	return listener;

	 	},

	 /**
	  * [removeListener description]
	  * @param  {cityways.map.EventListener} listener [description]
	  */
	  removeListener : function(listener) {
	  	var listeners = cityways.event.listeners;
	  	if ( listeners.get(listener.object) && listeners.get(listener.object)[listener.evt]) {
	  		var evtListeners = listeners.get(listener.object)[listener.evt];
	  		for(var i=0; i < evtListeners.length; i++){
	  			if(evtListeners[i] == listener){
	  				evtListeners.splice(i,1);
	  				return true;
	  			}
	  		}
	  	}
	  	return false;
	  },

	  removeListeners : function(object, evt){
	  	var listeners = cityways.event.listeners;
	  	if(listeners.get(object) == null)
	  		return;
	  	if(evt == undefined ){
	  		listeners.pull(object);
	  		return;
	  	}
	  	if(listeners.get(object)[evt] != undefined)
	  		delete listeners.get(object)[evt];

	  },

	 /**
	  * [triggerEvent description]
	  * @param  {Object} object [description]
	  * @param  {[type]} evt    [description]
	  * @param  {[type]} args   [description]
	  * @return {[type]}        [description]
	  */
	  triggerEvent : function(object, evt, args) {
	  	cityways.logger.info(cityways.event.listeners);
	  	var listeners = cityways.event.listeners;
	  	if(listeners == undefined)
	  		return;
	  	if( listeners.get(object) && listeners.get(object)[evt]){
	  		var objListeners = listeners.get(object)[evt];
	  		for(var i = 0; i < objListeners.length; i++){
	  			objListeners[i].callback(args);
	  		}
	  	}
	  },


	 /**
 	 * @constant
 	 * @type {String}
 	 */
 	 ON_CLICK : 1,

 	/**
 	 * @constant
 	 * @type {String}
 	 */
 	 ON_LOADED : 2,

 	/**
 	 * @constant
 	 * @type {String}
 	 */
 	 ON_RESIZE : 3,

 	/**
 	 * @constant
 	 * @type {String}
 	 */
 	 ON_CHANGED_LOCATION : 4,

 	/**
 	 * @constant
 	 * @type {String}
 	 */
 	 ON_CHANGED_ADDRESS  : 5,

 	/**
 	 * @constant
 	 * @type {String}
 	 */
 	 ON_CHANGED_DESTINATION_ADDR    : 7,


 	/**
 	 * @constant
 	 * @type {String}
 	 */
 	 ON_CHANGED_OPTIONS : 8




 	};
/**
 * @overview Class {@link cityways.EventListener}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 * 
 * @requires cityways/Class.js
 */


/**
 * [EventListener description]
 * @class cityways.EventListener
 */
cityways.EventListener = cityways.Class({
    constructor :  function(object, evt, callback) {
			this.object = object;
			this.evt = evt;
			this.callback = callback;
	},

    members : { 

	object : null,

	evt : null,

	callback : null

	}
});
/**
 * @overview Class {@link cityways.Map}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 * 
 * @requires cityways/Class.js
 */

/**
 * @class cityways.Map
 * @extends {cityways.maps.IMap}
 * @classdesc Размещает карту внутри заданного HTML контейнера, которым обычно является div элемент.
 * Так как данный класс является абстрактным, то в зависимости от типа карты(cityways.maps.GOOGLE_PROVIDER), 
 * класс Map расширяет в конструкторе свою функциональность за счет наследников ({@link cityways.maps.GoogleMap}).
 * @description Входными параметрами конструктора являются ID HTML контейнера и начальные опции карты.
 * @param  {String} div     ID HTML контейнера, в который будет помещена карта
 * @param  {Object} options Начальные опции карты
 * @example <!-- Приведем пример размещения карты в html документе: -->
 * <html>
 *   <head>
 * 		<script>.../cityways.js</script>
 *		<script>
 *  			function initialize(){
 * 				var options = {
 * 					mapProvider : cityways.maps.GOOGLE_PROVIDER
 * 				};
 * 				var map = new cityways.Map('map',options);
 * 			};
 * 		</script>
 *  </head>
 * <body onload="initialize()">
 * 		<div id="map"></div>
 * </body>
 * </html>

 * @example // Структура объекта options:
 * var options = {
 *     mapProvider : {String},  // Провайдер карты, значения: "google", "yandex"
 *     providerKey : {String},  // Key провайдера(только для yandex карт)
 *     zoom        : {Number},  // Масштаб карты
 *     minZoom     : {Number},  // Минимальный масштаб
 *     center : {               // Координаты центральной точки карты 
 *              lat : {Number}, // Широта
 *              lon : {Number}  // Долгота
 *              }
 * };
 */
 cityways.Map = cityways.Class({

  constructor :  function(div, options) {
    if(options.mapProvider == undefined)
    	options.mapProvider = cityways.maps.GOOGLE_PROVIDER;

    this._div = div;
    this._options = options;
    this.setMapProvider(options.mapProvider);
  },

  members : {

        /**
         * [_mapProvider description]
         * @type {[type]}
         */
         _mapProvider : null,

         _mapObjects : null,

         _div : null,

         _options : null,

         setMapProvider : function(mapProviderID){
           if(mapProviderID == cityways.maps.GOOGLE_PROVIDER)
           {
            this._mapProvider = new cityways.maps.GoogleMapProvider(this._div,this._options);
          }
          else
          {
           this._mapProvider = new cityways.maps.GoogleMapProvider(this._div,this._options);

         }
         var self = this;

         cityways.event.addListener(self._mapProvider,cityways.event.ON_CLICK, function(e){
          cityways.event.triggerEvent(self, cityways.event.ON_CLICK, e);
        }
        );
       },


       /* override */
       addMarker : function(marker){
         this._mapProvider.addMarker(marker);
       },

       /* override */
       removeMarker : function(marker){
        this._mapProvider.removeMarker(marker);
      },

      /* override */
      addPolyline : function(polyline){
        this._mapProvider.addPolyline(polyline);
      },

      /* override */
      removePolyline : function(polyline){
        this._mapProvider.removePolyline(polyline);
      },

      /* override */
      resize : function(w,h){
       this._mapProvider.resize(w,h);
     },

     /* override */
     setHeight : function(h){
      this._mapProvider.setHeight(h);
    },

    /* override */
    setWidth : function(w){
      this._mapProvider.setWidth(w);
    },

    /* override */
    getNativeMapObj : function(){
      this._mapProvider.getNativeMapObj();
    },

    /* override */
    destroy : function(){
      this._mapProvider.destroy();
    },

    /* override */
    alignment : function(points){
     this._mapProvider.alignment(points);

   }
 }


});
/**
 * @overview Class {@link cityways.MapWidget}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 * 
 * @requires cityways/Class.js
 */

/**
 * [MapWidget description]
 * @class cityways.MapWidget
 * @constructor 
 * @param  {String} div     ID dom элемента, в который будет помещена карта
 * @param  {Object} options Начальные опции карты
 * @example // Структура объекта options:
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
 cityways.MapWidget  =  cityways.Class({

 	constructor :  function(div,options){
 		this._options = options;
 		this._options.minZoom = options.zoom - 2;
 		this._map = new cityways.Map(div,options);
 		var self = this;
 		cityways.event.addListener(this._map,cityways.event.ON_CLICK,function(e){
 			self._onClickMap(e);
 		});
 		this._paths = [];
 	},

 	members: {

  	/**
 	 * [_paths description]
 	 * @private
 	 * @memberOf cityways.MapWidget.prototype
 	 * @property 
 	 * @type {cityways.type.ObjectDictionary<Object,Object>}
 	 */   
 	 _paths : null,

 	/**
 	 * [map description]
 	 * @private
 	 * @memberOf cityways.MapWidget.prototype
 	 * @type {cityways.Map}
 	 */
 	 _map : null, 

 	/**
 	 * [options description]
 	 * @private
 	 * @memberOf cityways.MapWidget.prototype
 	 * @type {[Object}
 	 */
 	 _options : null,

	/**
	 * [startMarker description]
	 * @private
	 * @memberOf cityways.MapWidget.prototype
	 * @type {cityways.maps.Marker}
	 */
	 _startMarker  : null,

	/**
	 * [finishMarker description]
	 * @private
	 * @memberOf cityways.MapWidget.prototype
	 * @type {cityways.maps.Marker}
	 */
	 _finishMarker : null,


	 _onClickMap : function(e){
	 	var self = this;
	 	if(this._startMarker == null){
	 		self._startMarker  = new cityways.maps.Marker({
	 			iconFileName : cityways.options.getResourcePath() + "images/marker_a.png"
	 		});
	 		cityways.event.addListener(this._startMarker,cityways.event.ON_CHANGED_LOCATION,function(e){

	 			self._onChangedDestMarkersLocation(e);
	 		});
	 		this._startMarker.setLocation(e.lat,e.lon);
	 		this._map.addMarker(this._startMarker);
	 		return;
	 	}
	 	if(this._finishMarker == null){
	 		var resourcePath = cityways.options.getResourcePath();
	 		this._finishMarker = new cityways.maps.Marker({
	 			iconFileName : cityways.options.getResourcePath() + "images/marker_b.png"
	 		});
	 		cityways.event.addListener(this._finishMarker,cityways.event.ON_CHANGED_LOCATION,function(e){
	 			self._onChangedDestMarkersLocation(e);
	 		});
	 		this._finishMarker.setLocation(e.lat,e.lon);
	 		this._map.addMarker(this._finishMarker);
	 		return;
	 	}
	 	cityways.logger.info('Click on the map.',e);
	 },

	 _onChangedDestMarkersLocation : function (e){
	 	var self = this;
	 	var geocoder = new cityways.loader.Geocoder();
	 	geocoder.getAddress(e.location.lat, e.location.lon,function(addr){
	 		addr = addr == null ? "" : addr;

	 		e.marker.setAddress(addr);
	 		var args = {
	 			addr : addr,
	 			dest : e.marker == self._startMarker ? "start" : "finish",
	 			marker : e.marker
	 		};
	 		cityways.event.triggerEvent(self,cityways.event.ON_CHANGED_DESTINATION_ADDR, args);
	 	});
	 },


	 getMap : function(){
	 	return this._map;
	 },


	 resizeMap : function(w,h){
	 	if(this._map != undefined){
	 		this._map.resize(w,h);
	 	}
	 },

	 setHeight : function(h){
	 	if(this._map != undefined){
	 		this._map.setHeight(h);
	 	}

	 	cityways.logger.info("widget setHeight()",h);
	 },

	 setWidth : function(w){
	 	if(this._map != undefined){
	 		this._map.setWidth(w);
	 	}		
	 },


	 getStartMarker : function(){
	 	return this._startMarker;
	 },

	 getFinishMarker : function(){
	 	return this._finishMarker;
	 },


	 removeAllPaths : function(){
	 	var self = this;
	 	for (var i = 0; i < self._paths.length; i++) {
	 		var polylines = self._paths[i].getAllPolylines();
	 		var stations = self._paths[i].getAllStations();
	 		for(var j=0;j < polylines.length; j++){
	 			this._map.removePolyline(polylines[j]);
	 		} 
	 		for(var j=0;j < stations.length; j++){
	 			this._map.removeMarker(stations[j]);
	 		} 
	 		
	 	};
	 },

	 /**
	  * [addPath description]
	  * @param {cityways.widget.map.Path} path [description]
	  */
	  addPath : function(path){
	  	var self = this;
	  	var polylines = path.getAllPolylines();
	  	var stations = path.getAllStations();
	  	for(var j=0;j < polylines.length; j++){
	  		self._map.addPolyline(polylines[j]);
	  	} 
	  	for(var j=0;j < stations.length; j++){
	  		self._map.addMarker(stations[j]);
	  	} 
	  	self._paths.push(path);
	  }


	}
	
	/* EVENTS */

	 /**
	 * Вызывается при изменении адреса начальной или конечной точки назначения.
	 * @event cityways.MapWidget#ON_CHANGED_DESTINATION_ADDR.
	 * @property {String} addr Новый адрес точки назначения.
	 * @property {String} dest "start" : если изменился адрес начальной точки, "finish" : конечной.
	 * @property {cityways.maps.Marker} marker Маркер, у которго был изменен адрес.
	 */


	});
/**
 * @overview Namespace {@link cityways.maps}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 * 
 * @requires cityways/maps.js
 * @requires cityways/Class.js
 */



 /**
 * @namespace cityways.maps
 */
 cityways.maps = {

	/**
	 * GOOGLE_PROVIDER
	 * @constant
	 * @type {String}
	 */
	GOOGLE_PROVIDER : "google"
	
 };


/**
 * @overview Class {@link cityways.maps.GoogleMapProvider}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 * 
 * @requires cityways/maps.js
 * @requires cityways/Class.js
 */

/**
 * @class cityways.maps.GoogleMapProvider
 * @extends {cityways.maps.IMap}
 * @classdesc Размещает  карту Google Maps(v3) внутри заданного HTML контейнера, которым обычно является div элемент.
 * @param  {String} div     ID dom элемента, в который будет помещена карта
 * @param  {cityways.Map} map
 * @param  {Object} options Начальные опции карты
 * @param  {Number} options.zoom 
 * @param  {Number} options.minZoom
 * @param  {Object} options.center
 * @param  {Number} options.center.lat
 * @param  {Number} options.center.lon
 * 
 * @example
 * <html>
 * <head>
 * 		<script>.../cityways.js</script>
 *		<script>
 * 				function initialize(){
 * 				var map = new cityways.maps.GoogleMapProvider('map');
 * 				}
 * 		</script>
 * </head>
 * <body onload="initialize()">
 * 		<div id="map"></div>
 * </body>
 * </html>
 * @example // Структура объекта options:
 * var options = {
 *      	  zoom        : {Number},             // Масштаб карты
 *      	  minZoom     : {Number},             // Минимальный масштаб
 *      	  center : {						  // Координаты центральной точки карты 
 * 			     lat : {Number},	              // Широта
 * 			     lng : {Number}	                  // Долгота
 * 			  }
 * 			  
 * };
 */
 cityways.maps.GoogleMapProvider = cityways.Class(
 {
 	constructor :  	function( div, options) {
 		this._div = div;
 		this._options = options;
 		this._markers = new cityways.type.ObjectDictionary();
 		this._polylines = new cityways.type.ObjectDictionary();

 		var self = this;
 		$(document).ready(function() {
 			var googleMapOptions = {
 				zoom : self._options.zoom,
 				center : new google.maps.LatLng(self._options.center.lat, self._options.center.lon),
 				mapTypeId : google.maps.MapTypeId.ROADMAP,
 				minZoom : self._options.minZoom
 			};
 			self._googleMap= new google.maps.Map(document.getElementById(self._div),googleMapOptions);
 			self._googleMap.setOptions({
 				draggableCursor : 'crosshair'
 			});
 			self._registerListeners();
 			self.resize(self._width,self._height);
 			self.refresh(self);
 			cityways.event.triggerEvent(self, cityways.event.ON_LOADED, self);
 		});		

 	},

 	members : {

     /**
      * [markers description]
      * @private
      * @memberOf cityways.Map.prototype
      * @type {cityways.type.ObjectDictionary<cityways.maps.Marker, Object>}
      */
      _markers : null,

      _polylines : null,


	/**
	 * @private
     * @memberOf cityways.map.GoogleMap.prototype
     * @type {String}
     */
     _width : null,

	/**
	 * @private
     * @memberOf cityways.map.GoogleMap.prototype
     * @type {String}
     */
     _height : null,

    /**
     * ID dom элемента, в который нужно поместить карту
     * @private
     * @memberOf cityways.map.GoogleMap.prototype
     * @type {String}
     */
     _div  : null,

    /**
     * Объект google.maps.Map
     * @private
     * @memberOf cityways.map.GoogleMap.prototype
     * @type {google.maps.Map}
     */
     _googleMap : null,

    /**
     * [options description]
     * @private
     * @memberOf cityways.map.GoogleMap.prototype
     * @type {Object}
     */
     _options : null,

	/**
	 * [_refresh description]
	 * @private
	 * @memberOf cityways.map.GoogleMap.prototype
	 * @return {[type]}        [description]
	 */
	 refresh : function(){
	 	if(this._googleMap == undefined)
	 		return;
	 	var markers = this._markers.getAsAssociativeArray();
	 	for(var  m in markers){
	 		markers[m].setMap(this._googleMap);
	 	}
	 	google.maps.event.trigger(this._googleMap, 'resize');
	 },

	/**
	 * Обработчик события {@link cityways.Map#event:ON_MAP_RESIZE}
	 * @private 
	 * @memberOf cityways.map.GoogleMap.prototype
	 */
	 _on_resize : function(e){
	 	if(this._googleMap != undefined)
	 		google.maps.event.trigger(this._googleMap, 'resize');
	 },

	/**
	 * Регистрирует слушателей карты и ее объектов
	 * @private 
	 * @memberOf cityways.map.GoogleMap.prototype
	 */
	 _registerListeners : function() {
	 	cityways.logger.info("_registerListeners");
	 	var self = this;
	 	google.maps.event.addListener(self._googleMap, 'click', function(e) {
	 		var args = {
	 			lat : e.latLng.lat(),
	 			lon : e.latLng.lng()
	 		};
	 		cityways.logger.info("click!",args);
	 		cityways.event.triggerEvent(self, cityways.event.ON_CLICK, args);
	 	});

	 	google.maps.event.addListener(self._googleMap, 'zoom_changed',function(e){
	 		var zoom = self._googleMap.getZoom();
	 		cityways.logger.debug("map_zoom: ", zoom);
	 		// Пробежимся по всем маркерам
	 		var keys = self._markers.getKeys();
	 		for(var k in keys){
	 			var marker = keys[k];
	 			var nativeMarker = self._markers.get(marker).native;

	 			cityways.logger.debug(marker.getMinZoom());
	 			if(zoom > marker.getMinZoom()){
	 				if(nativeMarker.getMap() == null){
	 					nativeMarker.setMap(self._googleMap);
	 				}
	 			}else
	 			{
	 				if(nativeMarker.getMap() != null){
	 					nativeMarker.setMap(null);
	 				}
	 			}
	 		}
	 	});

	 },

	 /*override*/
	 resize : function(w,h){
	 	if(w != undefined){
	 		$("#" + this._div).css('width', w);
	 		this._width = w;
	 	}
	 	if(h != undefined){
	 		$("#" + this._div).css('height', h);
	 		this._height = h;
	 	}
	 	if(this._googleMap != undefined){
	 		google.maps.event.trigger(this._googleMap, 'resize');
	 	}
	 },

	 /*override*/
	 getNativeMapObj : function(){
	 	return this._googleMap;
	 },


	 /*override*/
	 setHeight : function(h){
	 	$("#" + this._div).css('height', h);
	 	if(this._googleMap != undefined){
	 		google.maps.event.trigger(this._googleMap, 'resize');
	 	}
	 	this._height = h;
	 },

	 /*override*/
	 getHeight : function(){
	 	if(this._height == null){
	 		this._height  = $("#" + this._div).css('height');
	 	}
	 	return this._height;
	 },

	 /*override*/
	 setWidth : function(w){
	 	$("#" + this._div).css('width', w);
	 	if(this._googleMap != undefined){
	 		google.maps.event.trigger(this._googleMap, 'resize');
	 	}
	 	this._width = w;
	 },

	 /*override*/
	 getWidth : function(){
	 	if(this._width == null){
	 		this._width  = $("#" + this._div).css('width');
	 	}

	 	return this._width;
	 },

	 /*override*/
	 addMarker : function(marker){

	 	var nativeMarker = this._markers.get(marker);
	 	if(nativeMarker != undefined){
	 		if(this._googleMap != undefined) {
	 			nativeMarker.setMap(this._googleMap);
	 		}
	 		return;
	 	}

	 	nativeMarker = new google.maps.Marker();
	 	nativeMarker.setDraggable(marker.isDraggable());
	 	if(marker.getIcon() != null)
	 		nativeMarker.setIcon(new google.maps.MarkerImage(marker.getIcon()));
	 	nativeMarker.setPosition(new google.maps.LatLng(marker.getLocation().lat,
	 		marker.getLocation().lon));
	 	if(marker.getTitle() != null){
	 		nativeMarker.setTitle(marker.getTitle());
	 	}
	 	this._markers.put(marker, {
	 		native : nativeMarker,
	 		lesteners : []
	 	});
	 	var self = this;
	 	cityways.event.triggerEvent(marker,cityways.event.ON_CHANGED_LOCATION, {
	 		marker : marker,
	 		location : marker.getLocation(),
	 		__fire__ : self
	 	});

	 	google.maps.event.addListener(nativeMarker, 'dragend',function(e){
	 		var args = {
	 			marker : marker,
	 			location : {
	 				lat : e.latLng.lat(),
	 				lon : e.latLng.lng()
	 			},
	 			__fire__ : self
	 		};
	 		cityways.logger.info("google dragend", marker);
	 		cityways.event.triggerEvent(marker,cityways.event.ON_CHANGED_LOCATION,args);
	 	});

	 	google.maps.event.addListener(nativeMarker, 'click',function(e){
	 		var args = {
	 			marker : marker,
	 			__fire__ : self
	 		};
	 		cityways.event.triggerEvent(marker,cityways.event.ON_CLICK,args);
	 	});


	 	var listener1 = cityways.event.addListener(marker,cityways.event.ON_CHANGED_LOCATION,function(e){
	 		if(e.__fire__ == self)
	 			return;
	 		nativeMarker.setPosition(new google.maps.LatLng(e.location.lat,e.location.lon));
	 	});


	 	var listener1 = cityways.event.addListener(marker,cityways.event.ON_CHANGED_LOCATION,function(e){
	 		if(e.__fire__ == self)
	 			return;
	 		nativeMarker.setPosition(new google.maps.LatLng(e.location.lat,e.location.lon));
	 	});

	 	var listener2 = cityways.event.addListener(marker,cityways.event.ON_CHANGED_OPTIONS,function(e){
	 		if(e.__fire__ == self)
	 			return;
	 		if(e.options != undefined){
	 			if(e.options.title != undefined)
	 				nativeMarker.setTitle(e.options.title);
	 		}
	 	});

	 	this._markers.get(marker).lesteners = [listener1, listener2];

	 	if(this._googleMap != undefined) {
	 		nativeMarker.setMap(this._googleMap);
	 	}

	 },

	 /*override*/
	 removeMarker : function(marker){
	 	var val = this._markers.get(marker);
	 	if(val == undefined || val.native == undefined)
	 		return;
	 	var listeners = val.lesteners;
	 	var native = val.native;
	 	google.maps.event.clearInstanceListeners(native);
	 	native.setMap(null);
	 	for(var i=0; i < listeners.length; i++){
	 		cityways.event.removeListener(listeners[i]);
	 	}
	 	this._markers.pull(marker);
	 },


	 /*override*/
	 addPolyline : function(polyline){
	 	var points = polyline.getPoints();
	 	var path = [];
	 	for(var i=0; i < points.length; i++){
	 		path.push(new google.maps.LatLng(points[i][0],points[i][1]));
	 	}
	 	var nativePLine = new google.maps.Polyline();
	 	nativePLine.setOptions({
	 		strokeColor : polyline.getColor(),
	 		strokeOpacity : polyline.getOpacity(),
	 		strokeWeight : polyline.getWeight(),
	 		map : this._googleMap,
	 		path : new google.maps.MVCArray(path)
	 	});
	 	this._polylines.put(polyline,{
	 		native : nativePLine,
	 		listeners : []
	 	});
	 	
	 },

	 /*override*/
	 removePolyline : function(polyline){
	 	var val = this._polylines.get(polyline);
	 	if(val == undefined || val.native == undefined)
	 		return;
	 	var nativePLine = val.native;
	 	nativePLine.setMap(null);
	 	this._polylines.pull(polyline);
	 },

	 /* override */
	 alignment : function(points){
	 	var map = this._googleMap;
		//Определяем область показа маркеров
		var latlngbounds = new google.maps.LatLngBounds();  
		for(var i=0;i < points.length; i++){
			var myLatLng = new google.maps.LatLng(points[i].lat, points[i].lon);
			latlngbounds.extend(myLatLng);
		}
		

        //Центрируем и масштабируем карту
        map.setCenter( latlngbounds.getCenter(), map.fitBounds(latlngbounds));   


    },



    /*override*/
    destroy : function(marker){

    }

}
}

);

/**
 * @overview Class {@link cityways.maps.Marker}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 * 
 * @requires cityways/maps.js
 * @requires cityways/Class.js
 */


/**
 * [Marker description]
 * @class cityways.maps.Marker
 * @param {Object} options Опции маркера
 * @param {String} options.iconFileName [dest]
 * @param {Number} options.lat desc1 [dest]
 * @param {Number} options.lon desc2 [dest]
 * @param {Number} options.minZoom 
 * @param {String} options.title 
 */
 cityways.maps.Marker = cityways.Class({
 	constructor : function(options) {
 		this._maps = new cityways.type.Dictionary(cityways.type.DICTIONARY_OBJECT_KEY); 

 		this._draggable = true;
 		this._location = {
 			lat : 0.0,
 			lon : 0.0
 		};
 		this._registryListeners();

 		if(options && options.lat!= undefined &&  options.lon != undefined){
 			this.setLocation(options.lat,options.lon);
 		}
 		if(options && options.iconFileName != undefined){
 			this.setIcon(options.iconFileName);
 		}
 		if(options && options.minZoom != undefined){
 			this.setMinZoom(options.minZoom);
 		}else
 		{
 			this.setMinZoom(0);
 		}
 	},

 	members :  {

 		_title : null,


	/**
	 * [draggable description]
	 * @private
	 * @memberOf cityways.maps.Marker.prototype
	 * @type {boolean}
	 */
	 _draggable : null,


	/**
	 * [location description]
	 * @private
	 * @memberOf cityways.maps.Marker.prototype
	 * @type {Object}
	 */
	 _location : null,

	/**
	 * [address description]
	 * @private
	 * @memberOf cityways.maps.Marker.prototype
	 * @type {String}
	 */
	 _address : null,

	/**
	 * [img description]
	 * @private
	 * @memberOf cityways.maps.Marker.prototype
	 * @type {String}
	 */
	 _iconFileName    : null,

	 _registryListeners : function(){
	 	var self = this;
	 	cityways.event.addListener(this,cityways.event.ON_CHANGED_LOCATION,function(e){
	 		// Свойство __fire__ хранит ссылку на объект, который вызвал  триггер на текущее событие. 
	 		// Если триггер вызвал текущий маркер, тогда выходим с обработчика события.
	 		if(e.__fire__ == self){
	 			return;
	 		}
	 		//self.setLocation(e.location.lat,e.location.lon);
	 		self._location = e.location;	
	 		cityways.logger.info(e,self);
	 	});
	 	cityways.event.addListener(self,cityways.event.ON_CHANGED_OPTIONS,function(e){
	 		// Свойство __fire__ хранит ссылку на объект, который вызвал  триггер на текущее событие. 
	 		// Если триггер вызвал текущий маркер, тогда выходим с обработчика события.
	 		if(e.__fire__ == self){
	 			return;
	 		}
	 		if(e.options.draggable){
	 			self._draggable = e.options.draggable;
	 		}
	 		if(e.options.iconFileName){
	 			self._iconFileName = e.options.iconFileName;
	 		}

	 	});
	 },

	/**
	 * [setImage description]
	 * @memberOf cityways.maps.Marker.prototype
	 * @param {[type]} iconFileName [description]
	 */
	 setIcon : function(iconFileName){
	 	if(iconFileName != undefined){
	 		this._iconFileName = iconFileName;
	 		var args = {
	 			marker : this,
	 			options : {
	 				iconFileName : iconFileName
	 			},
	 			__fire__ : this
	 		};
	 		cityways.event.triggerEvent(this,cityways.event.ON_CHANGED_OPTIONS,args);
	 	}
	 },

	/**
	 * [getIcon description]
	 * @memberOf cityways.maps.Marker.prototype
	 * @return {String} [description]
	 */
	 getIcon : function(){
	 	return this._iconFileName;
	 },

	/**
	 * [getLocation description]
	 * @memberOf cityways.maps.Marker.prototype
	 * @return {Object} [description]
	 */
	 getLocation : function(){
	 	return this._location;
	 },

	/**
	 * [setLocation description]
	 * @memberOf cityways.maps.Marker.prototype
	 * @param {[type]} lat [description]
	 * @param {[type]} lon [description]
	 */
	 setLocation : function(lat,lon){
	 	this._location = {
	 		lat : lat,
	 		lon : lon
	 	};
	 	var args = {
	 		marker : this,
	 		location : this._location,
	 		__fire__ : this
	 	};
	 	cityways.event.triggerEvent(this,cityways.event.ON_CHANGED_LOCATION,args);
	 },

	 setAddress : function(address){
	 	if(address != undefined){
	 		var args = {
	 			marker : this,
	 			addr : address,
	 			oldAddr : this._address,
	 			__fire__ : this
	 		};
	 		this._address = address;
	 		cityways.event.triggerEvent(this,cityways.event.ON_CHANGED_ADDRESS,args);
	 	}
	 },
	 
	 setDraggable : function(val){
	 	this._draggable = val;

	 	var args = {
	 		options : {
	 			draggable : this._draggable
	 		},
	 		__fire__ : this
	 	};
	 	cityways.event.triggerEvent(this,cityways.event.ON_CHANGED_OPTIONS,args);
	 },

	 destroy : function(){
	 	cityways.event.removeListeners(this);
	 },

	 isDraggable : function(){
	 	return this._draggable;
	 },


	 setTitle : function(title){
	 	var self = this;
	 	self._title = title;

	 	var args = {
	 		options : {
	 			title : title
	 		},
	 		__fire__ : self
	 	};
	 	cityways.event.triggerEvent(self,cityways.event.ON_CHANGED_OPTIONS,args);
	 },

	 getTitle : function(){
	 	return this._title;
	 },

	 setMinZoom : function(minZoom){
	 	this._minZoom = minZoom;
	 },

	 getMinZoom : function(){
	 	return this._minZoom;
	 }


	}

	/*  EVENTS */

	/**
	 * Вызывается при изменении местоположения маркера
	 * @event cityways.maps.Marker#ON_CLICK
	 * @property {cityways.maps.Marker} marker Маркер, у которго было вызвано данное событие
	 */

	/**
	 * Вызывается при изменении местоположения маркера
	 * @event cityways.maps.Marker#ON_CHANGED_LOCATION
	 * @property {cityways.maps.Marker} marker Маркер, у которго было вызвано данное событие
	 * @property {Object} location Новое местоположение маркера.
	 * @property {Number} location.lat
	 * @property {Number} location.lon
	 * 
	 */
	 

	/**
	 * Вызывается при изменении адреса маркера
	 * @event cityways.maps.Marker#ON_CHANGED_ADDRESS
	 * @property {cityways.maps.Marker} marker Маркер, у которго было вызвано данное событие
	 * @property {String} addr Новый адрес
	 * @property {String} oldAddr Старый адрес
	 */
	 
	 /**
	  * Вызваается при изменении изображения маркера
	  * @event cityways.maps.Marker#ON_CHANGED_OPTIONS
	  * @property {cityways.maps.Marker} marker Маркер, у которго было вызвано данное событие
	  * @property {Object} options Название файла нового изображения маркера.
	  */

	});


/**
 * @overview Class {@link cityways.maps.Polyline}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 * 
 * @requires cityways/maps.js
 * @requires cityways/Class.js
 */


/**
 * [Marker description]
 * @class cityways.maps.Polyline
 * @param {Object} options Опции
 * @param {Array<Object>} options.points The stroke width in pixels.
 * @param {Number} options.weight The stroke width in pixels.
 * @param {Number} options.opacity The stroke opacity between 0.0 and 1.0.
 * @param {String} options.color The stroke color. All CSS3 colors are supported except for extended named colors.
 * @param {Boolean} options.visible Whether this polyline is visible on the map. Defaults to true.
 */
 cityways.maps.Polyline = cityways.Class({
 	constructor : function(options) {
 		this._points = options.points;
 		if(options != undefined && options.strokeWeight != undefined){

 		}else{

 		}

 		this._options = options;
 	},

 	members :  {
 		_options : null,

 		_points : null,

 		getPoints : function(){
 			return this._points;
 		},

 		getColor : function(){
 			return this._options.color;
 		},

 		getWeight : function(){
 			return this._options.weight;
 		},

 		getOpacity : function(){
 			return this._options.opacity;
 		},

 		setColor : function(color){
 			this._options.color = color;
 		},

 		setWeight : function(weight){
 			this._options.weight = weight;
 		},	   

 		setOpacity : function(opacity){
 			var self = this;
 			self._options.opacity = opacity;
 			var args = {
 				options : {
 					opacity : opacity
 				},
 				__fire__ : self
 			};
 			cityways.event.triggerEvent(self,cityways.event.ON_CHANGED_OPTIONS,args);
 		}



 	}
 });


/**
 * @overview Namespace {@link cityways.page}.
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
 * @namespace cityways.page
 */

cityways.page = {

    /**
     * Текущая страница
     */
    Current : null,
    
   /**
    * Обработчик событий виджетов текущей страницы 
    */
    Events : null,

    /**
     * [setCurrent description]
     * @param {Object} page [description]
     */
    setCurrent : function(page){
        cityways.page.Current = page;
        cityways.page.Events = page.getWidgetEventHandlers();
    }
    
    
    
};
/**
 * @overview Class {@link cityways.page.ColorsGenerator}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 * 
 * @requires cityways/page.js
 * @requires cityways/Class.js
 */

/**
 * [SearchPage description]
 * @class cityways.page.ColorsGenerator
 * @param  {Object} options [description]
 */
 cityways.page.ColorsGenerator = cityways.Class({
 	constructor :  function() {
 		var self = this;

 		self._numOfSteps = 200;
 		self._step = 0;
 		self._colors = [];
 		var colors = [];
 		for(var i=0; i < self._numOfSteps; i++){
 			var color = self._rainbow(i, self._numOfSteps);
 			colors.push(color);
 		}
 		for(var i=0; i < self._numOfSteps; i++){
 			var ind =  parseInt(Math.floor(Math.random() * (colors.length  -1)) );
 			if(colors.length ==0)
 				break;
 			if(ind <0 || ind >= colors.length)
 				ind = 0;
 			self._colors.push(colors[ind]);
 			colors.splice(ind,1);
 		}
 		
 			
 	},

 	members : { 
 		_numOfSteps : null,

 		_step : null,
 		
 		_colors : null,

 		next : function(){
 			var self = this;
 			self._step  = self._step  + 1;
 			if(self._step >= self._numOfSteps)
 				self._step = 0;
 			return self._colors[self._step-1];
 		},
 		/**
 		 * This function generates vibrant, "evenly spaced" colours (i.e. no clustering). 
 		 * This is ideal for creating easily distiguishable vibrant markers in Google Maps and other apps.
 		 * HSV to RBG adapted from: http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript
 		 * @author Adam Cole
 		 * @param  {[type]} numOfSteps [description]
 		 * @param  {[type]} step       [description]
 		 * @return {[type]}            [description]
 		 */
 		 _rainbow : function(numOfSteps, step) {
 		 	var r, g, b;
 		 	var h = step / numOfSteps;
 		 	var i = ~~(h * 6);
 		 	var f = h * 6 - i;
 		 	var q = 1 - f;
 		 	switch(i % 6){
 		 		case 0: r = 1, g = f, b = 0; break;
 		 		case 1: r = q, g = 1, b = 0; break;
 		 		case 2: r = 0, g = 1, b = f; break;
 		 		case 3: r = 0, g = q, b = 1; break;
 		 		case 4: r = f, g = 0, b = 1; break;
 		 		case 5: r = 1, g = 0, b = q; break;
 		 	}
 		 	var c = "#" + ("00" + (~ ~(r * 255)).toString(16)).slice(-2) + 
 		 	("00" + (~ ~(g * 255)).toString(16)).slice(-2) + ("00" + 
 		 		(~ ~(b * 255)).toString(16)).slice(-2);
 		 	return (c);
 		 }
 		}
 	});




/**
 * @overview Class {@link cityways.page.SearchPage}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 * 
 * @requires cityways/page.js
 * @requires cityways/Class.js
 */

/**
 * [SearchPage description]
 * @class cityways.page.SearchPage
 * @param  {Object} options [description]
 */
 cityways.page.SearchPage = cityways.Class({
 	constructor :  function(currentCity, options) {
 		var self = this;
 		self._headerHeight = 134;

 		var routeTypes = null;

 		if(options.routeTypes == undefined){
 			routeTypes = [];
 		}else
 			routeTypes = options.routeTypes;
	 	// Инициализируем библиотеку 
	 	cityways.page.search.initialize(options);
	 	
	 	// Сохраним параметры
	 	this._currentCity = currentCity;

	 	// Создадим обработчик событий главной страницы
	 	this._widgetEventHandlers = new cityways.page.search.WidgetEventHandlers(this);
	 	
	 	
	 	// Создадим панель настроек
	 	this._settingsPanel = new cityways.page.search.SettingsPanel(self, routeTypes);
	 	this._settingsPanel.init();
	 	
	 	// Создадим виджет карты
	 	this._makeMapWidget(this._currentCity);
	 	
	 	// Создадим панель для отображения путей
	 	this._makePathsPanel();

	 	// Добавим обработчик события изменения размеров окна
	 	$(window).bind("resize", function(e) {
	 		self._onResizeWindow(e);
	 	});
	 	
	 	cityways.logger.info('SearchPage was initialized.');

	 },

	 members : { 

	 	
 	/**
 	 * [_headerHeight description]
	 * @private
	 * @memberOf cityways.page.SearchPage.prototype
	 * @type {Number}
	 */
	 _headerHeight : null,

	/**
	 * [mapWidget description]
	 * @memberOf cityways.page.SearchPage.prototype
	 * @type {cityways.Map}
	 */
	 _mapWidget : null,

	/**
	 * cityways.Pages.SearchPage.RouteTypesPanel Панель "Виды транспорта"
	 * @private
	 * @memberOf cityways.page.SearchPage.prototype
	 * @type {cityways.page.search.SettingsPanel}
	 */
	 _settingsPanel : null,

	 /**
	  * [pathsPanel description]
	  * @private
	  * @memberOf cityways.page.SearchPage.prototype
	  * @type {cityways.page.search.PathsPanel}
	  */
	  _pathsPanel : null,

	/**
	 * [widgetEventHandlers description]
	 * @private
	 * @memberOf cityways.page.SearchPage.prototype
	 * @type {[type]}
	 */
	 _widgetEventHandlers : null,

	/**
	 * @private
	 * @memberOf cityways.page.SearchPage.prototype
	 * @type {Object}
	 * @example 
	 * var currentCity = {
	 * scale : {Number},
	 * location : {
	 * 			     lat : {Number},
	 * 			     lon : {Number}	
	 * 			  }
	 * };
	 */
	 _currentCity : null,


	 
	 _makeMapWidget : function(city){
	 	var self  = this;
	 	var city  = this._currentCity;
	 	var mapOptions = {
	 		mapProvider : cityways.maps.GOOGLE_PROVIDER,
	 		zoom : city.scale,
	 		center : {
	 			lat : city.location.lat,
	 			lon : city.location.lon
	 		}
	 	};
	 	var mapWidget = new cityways.MapWidget("map_canvas", mapOptions);
	 	this._mapWidget = mapWidget;
	 	cityways.event.addListener(mapWidget,cityways.event.ON_CHANGED_DESTINATION_ADDR,function(e){
	 		self._onChangedDestLocations(e);
	 	});
	 	$(document).ready(function() {
	 		self._onResizeWindow();
	 	});
	 },

	 _makePathsPanel : function(){
	 	var options = {
	 		visible : false
	 	};
	 	this._pathsPanel = new cityways.page.search.PathsPanel(this,options);

	 },
	 /**
	  * [on_changed_dest description]
	  * @private
	  * @memberOf cityways.page.SearchPage.prototype
	  * @param  {Object} e [description]
	  */
	  _onChangedDestLocations : function(e){
	  	if(e.dest == "start"){
	  		this._settingsPanel.setStartLocation(e.addr);
	  	}else
	  	{
	  		this._settingsPanel.setFinishLocation(e.addr);
	  	}
	  },


	/**
	 * [on_resize_window description]
	 * @private
	 * @memberOf cityways.page.SearchPage.prototype
	 * @param  {Object} e [description]
	 */
	 _onResizeWindow : function(e){
	 	this._mapWidget.setHeight(cityways.util.getWindowSize().height - this._headerHeight);
	 },


	/**
	 * 
	 * Возвращает текущий город.
	 * @memberOf cityways.page.SearchPage.prototype
	 * @return {Object} [description]
	 */
	 getCurrentCity : function() {
	 	return this._currentCity;
	 },

	/**
	 * [getWidgetEventHandlers description]
	 * @memberOf cityways.page.SearchPage.prototype
	 * @return {cityways.page.search.WidgetEventHandlers} [description]
	 */
	 getWidgetEventHandlers : function() {
	 	return this._widgetEventHandlers;
	 },

	/**
	 * [getSettingsPanel description]
	 * @memberOf cityways.page.SearchPage.prototype
	 * @return {cityways.page.search.SettingsPanel} [description]
	 */
	 getSettingsPanel : function() {
	 	return this._settingsPanel;
	 },

	 /**
	  * [getPathsPanel description]
	  * @return {cityways.page.search.PathsPanel} [description]
	  */
	  getPathsPanel : function(){
	  	return this._pathsPanel;
	  },

	  getMapWidget : function(){
	  	return this._mapWidget;
	  },

	/**
	 * @memberOf cityways.page.SearchPage.prototype
	 * @return {Object} [description]
	 */
	 getPathsOptions : function() {
	 	if(this._mapWidget.getStartMarker() == null ||
	 		this._mapWidget.getFinishMarker() == null){
	 		cityways.alert(cityways.lang.translate("message.warn"),
	 			cityways.lang.translate("message.warn.destinations_none") ,
	 			"warn");
	 	return null;
	 }
	 var opts = {
	 	cityID : this._currentCity.id,
	 	p1 : this._mapWidget.getStartMarker().getLocation(),
	 	p2 : this._mapWidget.getFinishMarker().getLocation(),
	 	outTime : this._settingsPanel.getStartingTime(),
	 	algStrategy : this._settingsPanel.getAlgType(),
	 	routeTypes : this._settingsPanel.getEnabledRouteTypes(),
	 	isTransitions  : this._settingsPanel.isTransitions()
	 };
	 return opts;
	},

	/**
	 * [_prepareNotes description]
	 * @private
	 * @memberOf cityways.page.SearchPage.prototype
	 */
	 _prepareNotes : function() {
	 	$('.demo-tip-darkgray').poshytip({
	 		className : 'tip-darkgray',
	 		showTimeout : 1,
	 		bgImageFrameSize : 11,
	 		offsetX : -25
	 	});
	 }
	}
});




/**
 * @overview Namespace {@link cityways.page.search}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 * 
 * @requires cityways/page.js
 */

/**
 * @namespace cityways.page.search
 */
 cityways.page.search = {

  initialize : function(options){

    // В случае, если инициализация уже была выполнена, выходим
    if(cityways._initialized == true){
      return;
    }
    if(options != undefined && options.lang){
      cityways.lang.setCode(options.lang);
    }
    else
      cityways.lang.setCode();

    if(options != undefined && options.theme)
      cityways.options.Theme = options.theme;
    else
      cityways.options.Theme = "default";

    if(options != undefined && options.resourceURI)
      cityways.options.ResourceURI = options.resourceURI;
    else
      cityways.options.ResourceURI = cityways.util.getScriptLocation("main_page") + "/";

    if(options != undefined && options.serverHost != undefined){

     cityways.options.ServerHost = options.serverHost;
     if(options.serverHost == "" || options.serverHost[options.serverHost.length-1] != "/")
       cityways.options.ServerHost = cityways.options.ServerHost + "/";
   }
   else
    cityways.options.ServerHost = "http://ways.in.ua/";

  var linkFiles = [];

  var cssFile1 = cityways.helper.document.selectCSSFile(cityways.options.getResourcePath() + "css/",
    [{
      name : "main.css"
    }]);
  linkFiles.push(cssFile1);
  var cssFile2 = cityways.helper.document.selectCSSFile(cityways.options.ServerHost + "media/css/busWeb/",
    [{
      name : "busWeb.css"
    },
    {
      name : "busWeb_ff.css",
      browsers : {mozilla : {max : 10}}
    },
    {
      name : "busWeb_ie8",
      browsers : {msie : {max : 8.0}}
    }]);
  linkFiles.push(cssFile2);
  if(document.readyState == undefined || (document.readyState != "interactive" &&
    document.readyState != "complete")){
    for(var i=0; i< linkFiles.length;  i++ ){
      cityways.helper.document.appendCSSFile(linkFiles[i],"write");
    }
  }else
  {
    for(var i=0; i< linkFiles.length;  i++ ){
      cityways.helper.document.appendCSSFile(linkFiles[i],"inner");
    }

  }
  cityways._initialized = true;
}
};


/**
 * @overview Class {@link cityways.page.search.PathsPanel}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 * 
 * @requires cityways/page/search.js
 * @requires cityways/Class.js
 */

/**
 * [SearchPage description]
 * @class cityways.page.search.PathsPanel
 * @param  {Object} options [description]
 */
 cityways.page.search.PathsPanel = cityways.Class({
 	
 	constructor :  function(searchPage, options) {
 		this._searchPage = searchPage;
 		var visible = (options != undefined && options.visible != undefined) ? options.visible : false;		
 		var self = this;
 		$(document).ready(function() {

 			var el = document.getElementById('ways_panel');
 			el.style.display = 'block';

 			$('#cityways_path_panel_scroll').tinyscrollbar();
 			self.visible(visible);
 		});

 	    // Добавим обработчик события изменения размеров окна
 	    $(window).bind("resize", function(e) {
 	    	self.on_resize_window(e);
 	    });
    },

    members : {	
      _currentPathIndex : null,
	/**
	 * Текущие пути, по данным которым отображена информация в правой панеле PathsPanel
	 * @private
	 * @memberOf cityways.page.SearchPage.prototype
	 * @type {Object}
     * @property {Array<{@link cityways.model.PathModel}>} paths
     * @property {Number}                             findTime 
     */
     _currentPathsInfo : null,


	/**
	 * Видимость панели.
	 * @private
	 * @memberOf cityways.page.SearchPage.prototype
	 * @type {bool}
	 */
	 _visible : null,

	 _searchPage : null,

	/**
	 * @memberOf cityways.page.SearchPage.prototype
	 * @param {bool} value  true: show, false : hide
	 */
	 visible : function(value) {
	 	if(this._visible == value)
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
		this._visible = value;
		$('#cityways_path_panel_scroll').tinyscrollbar_update();
	},

	setContent : function(content){
		$('#cityways_path_panel_data').html(content);
		$('#cityways_path_panel_scroll').tinyscrollbar_update();
	},

	/**
	 * [on_resize_window description]
	 * @private
	 * @memberOf cityways.page.search.PathsPanel.prototype
	 * @param  {Object} e [description]
	 */
	 on_resize_window : function(e){
	 	$('#cityways_path_panel_scroll').tinyscrollbar_update();
	 },


     /**
    * [_onMakePathsPanelContent description]
    * @private
    * @memberOf cityways.page.search.WidgetEventHandlers.prototype
    * @param  {[type]} self      [description]
    * @param  {[type]} data      [description]
    * @param  {[type]} templates [description]
    * @return {[type]}           [description]
    */
    _makePathsPanelContent : function(data, templates) {
    	var page = cityways.page.Current;
    	var t_header = templates["template-main-pathsPanelHeader"];
    	var t_info = templates["template-main-pathsPanelInfo"];
      var t_route = templates["template-main-pathsPanelRoute"];
      var t_transition = templates["template-main-pathsPanelTransition"];
      var paths = data.paths;
      var htmlBody = "";
      for (var i = 0; i <paths.length; i++) {

        var path = paths[i];
        var headerParams = {
         index : i + 1,
         locale : cityways.lang.translate,
         cost : path.getFullCost(),
         time: path.getWalkingTime(),
         routes : paths[i].routes,
         resourcePath : cityways.options.getResourcePath(),
         host : cityways.options.ServerHost
       };
       var pathInfoContent = "";
       for(var j=0;j < paths[i].routes.length; j++ ){
        var route = paths[i].routes[j];
        var routeParams = {
          locale        : cityways.lang.translate,
          route_id      : route.ID,
          route_name    : route.name,
          route_type    : route.type,
          route_cost    : route.cost,
          route_distance: Math.round(route.distance/10.0)/100.0, // перемедем м. в км., оставив 2 знака после запятой
          route_start   : route.start,
          route_finish  : route.finish,
          route_freq    : route.finish,
          route_move    : cityways.helper.time.secsToLocaleString(route.moveTimeSecs),    
          route_wait    : cityways.helper.time.secsToLocaleString(route.wait),
          host : cityways.options.ServerHeeost         
        };   

        pathInfoContent = pathInfoContent + t_route(routeParams);
        if(j < paths[i].routes.length - 1){
          var trans = paths[i].transitions[j];
          var move_time = "";
          if(trans.moveTimeSecs > 60){
            move_time = cityways.helper.time.secsToLocaleString(trans.moveTimeSecs)
          }
          var transParams = {
            locale      : cityways.lang.translate,
            route_from  : paths[i].getRouteByID(trans.fromRouteID).name,
            route_to    : paths[i].getRouteByID(trans.toRouteID).name,
            distance    : parseInt(trans.distance),
            move_time   : move_time
          };
          pathInfoContent = pathInfoContent + t_transition(transParams);
        }
      }
      var infoParams = {
        index : i +1,
        content : pathInfoContent
      };
      htmlBody = htmlBody + t_header(headerParams) + t_info(infoParams);
    }
    this.setContent(htmlBody);
    if(paths.length >0){
      this.selectPath(1);
    }
  },

   /**
    * [setPathsInfo description]
    * @memberOf cityways.page.search.WidgetEventHandlers.prototype
    * @param {[type]} e [description]
    */
    setPathsInfo : function(e, findOptions){
    	var self = this;
      self._searchPage.getMapWidget().removeAllPaths();
      if(e.error != undefined||  e.paths == undefined || e.paths.length == 0)
      {
        self._searchPage.getMapWidget().removeAllPaths();
        self.setContent("<div><p>Не найдено.</p> </div>");
        return;
      }
      self._currentPathsInfo = e;
      cityways.template.html.getTemplates([
        "template-main-pathsPanelHeader",
        "template-main-pathsPanelInfo",
        "template-main-pathsPanelTransition",
        "template-main-pathsPanelRoute"], 
        function(templates) {
         self._makePathsPanelContent(e,templates);
       });

    },

    /**
     * [getCurrentPaths description]
     * @memberOf cityways.page.SearchPage.prototype
     * @return {Array<{@link cityways.model.Path}>} [description]
     */
     getCurrentPaths : function(){
      if(this._currentPathsInfo!=undefined)
        return this._currentPathsInfo.paths;
      return [];
    },


    /**
     * [getfindTime description]
     * @memberOf cityways.page.SearchPage.prototype
     * @return {Number} [description]
     */
     getfindTime : function(){
      if(this._currentPathsInfo!=undefined)
        return this._currentPathsInfo.findTime;
      return 0;
    },
    _selectPath : function(pathModel){
      var self = this;
      var path = new cityways.widget.map.Path(pathModel);
      self._searchPage.getMapWidget().removeAllPaths();
      self._searchPage.getMapWidget().addPath(path);
      
    },

    selectPath : function(pathIndex){
      var self = this;
      for(var i=1;i <= this._currentPathsInfo.paths.length; i++ ){
        var id = "#path_info_" + i.toString();
        cityways.logger.info(id);
        if( i == pathIndex)
          $(id).show();
        else
          $(id).hide();
      }
      
      self._currentPathIndex = pathIndex - 1;

      var pathModel = self._currentPathsInfo.paths[pathIndex-1];
      if(pathModel.hasGeomData() == false){
       var loader  = new cityways.loader.PathsLoader();
       loader.loadGeomDataForPath(pathModel , function(e){
        self._selectPath(pathModel);
      });
     }else
     {
      self._selectPath(pathModel);
    }

  }

}});
/**
 * @overview Class {@link cityways.page.search.SettingsPanel}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 * 
 * @requires cityways/page/search.js
 * @requires cityways/Class.js
 */

 /**
 * [SettingsPanel description]
 * @class cityways.page.search.SettingsPanel
 * @param {cityways.page.SearchPage} Ссылка на главный объект страницы Main
 * @param  {Array<String>} routeTypes Типы транспорта
 * @param  {Object} options Опции панели
 */


 cityways.page.search.SettingsPanel = cityways.Class({

    constructor :  function(SearchPage, routeTypes, options) {
        this._SearchPage = SearchPage;
        this._routeTypes = {};
        for(var i=0; i<  routeTypes.length; i++){
            this._routeTypes[routeTypes[i]] = {
                enabled : true,
                discount : 1.0                
            };
        }
        this._routeTypes["auto"] = {
            enabled : false,
            discount : 1.0
        };

    },

    members : { 

    /**
     * 
     * @private 
     * @memberOf cityways.page.search.SettingsPanel.prototype
     * @type {cityways.page.SearchPage} 
     */
     _SearchPage : null,

    /**
     * Словарь типов маршрутов
     * Возможные свойства: {'bus' : {}, 'metro' : {},...}
     * @private 
     * @memberOf cityways.page.search.SettingsPanel.prototype
     * @type {Dictionary<Object>}
     */
     _routeTypes : null,

    /**
     * [init description]
     * @memberOf cityways.page.search.SettingsPanel.prototype
     */
     init : function(){
        var self = this;
        selectbox_initialize();
        $(document).ready(function() {
            self._prepareTabs();
            for(var i in self._routeTypes){
                self.enableRouteTypeBtn(i, self._routeTypes[i].enabled);
            }
        });


    },

    /**
     * [getEnabledRouteTypes description]
     * @memberOf cityways.page.search.SettingsPanel.prototype
     * @return {Array<String,bool>} [description]
     */
     getEnabledRouteTypes : function(){
        var arr = [];
        for(var i in this._routeTypes){
            if(this._routeTypes[i].enabled == true)
                arr.push(
                {
                    id : i,
                    discount : this._routeTypes[i].discount
                });
        }
        return arr;
    },

    /**
     * @memberOf cityways.page.search.SettingsPanel.prototype
     * @param {String} routeType  Тип маршрута
     * @param {Bool} val вкл/выкл
     * @param {String} title Надпись
     */
     enableRouteTypeBtn : function(routeType,val){

        var id = "#cways_menu_route_btn_" + routeType;
        var imgFile = "";
        var title = "";
        if(val == true){
            imgFile = cityways.options.getResourcePath()  + 'images/transport/32/' + routeType + '_selected.png';
            title = cityways.lang.translate("title."+ routeType);
        }else
        {
            imgFile = cityways.options.getResourcePath()  + 'images/transport/32/' + routeType + '.png';
            title = cityways.lang.translate("title."+ routeType + "_exclude");
        }
        var imgContent = "<img src='" + imgFile + "' />";
        
        $(id).html(imgContent);
        $(id).attr("title",title);

        if(this._routeTypes[routeType] == undefined){
            this._routeTypes[routeType] = {
                enabled   : val,
                discount : 1.0
            };
        }
        else
        {
           this._routeTypes[routeType].enabled = val;
       }

       if(routeType == "auto" && val == true){
             // Если выбран проезд на автомобиле, тогда отключим все другие виды транспорта
             for(var i in this._routeTypes){
                if(i != routeType && this.isEnabledRouteTypeBtn(i) == true)  
                    this.enableRouteTypeBtn(i, false);
            }
        }else
        if(routeType == "auto" && val == false)
        {
             // Если выполнено отключение проезда на автомобиле, тогда включим все другие виды транспорта
             for(var i in this._routeTypes){
                if(i != routeType && this.isEnabledRouteTypeBtn(i) == false)  
                    this.enableRouteTypeBtn(i, true);
            }
        }
        else
            if(routeType != "auto" && val == true && val == this.isEnabledRouteTypeBtn("auto") == true){
            // Если был выбран вид транспорта, отличный от автомобиля, тогда отключим транспорт "автомобиль"
            this.enableRouteTypeBtn("auto", false);
        } 

    },


    /**
     * [isEnabledRouteTypeBtn description]
     * @memberOf cityways.page.search.SettingsPanel.prototype
     * @param  {[type]}  routeType [description]
     * @return {Boolean}           [description]
     */
     isEnabledRouteTypeBtn : function(routeType){
        return this._routeTypes[routeType].enabled;
    },

    /**
     * [setStartLocation description]
     * @param {[type]} addr [description]
     */
     setStartLocation : function(addr){
        $('#a_input_form').val(addr);
    },

    /**
     * [setFinishLocation description]
     * @param {[type]} addr [description]
     */
     setFinishLocation : function(addr){
        $('#b_input_form').val(addr);
    },    

    /**
     * [getAlgType description]
     * @return {[type]} [description]
     */
     getAlgType : function(){
        return "c_opt";
    },

    /**
     * [isTransitions description]
     * @return {Boolean} [description]
     */
     isTransitions : function(){
        var checked = $("#cways_menu_transitions_none").is(':checked');
        return checked == true ? false : true ;
    },

    /**
     * [getStartingTime description]
     * @return {[type]} [description]
     */
     getStartingTime : function(){
        var res = {
            dayID : 'c_Sunday',
            timeStartSecs : (10 * 60 * 60 + 10 * 60)
        };
        return res;
    },

    /**
     * [setDiscount description]
     * @param {[type]} discountID [description]
     * @param {[type]} val        [description]
     */
     setDiscount : function(discountID, val){
         if(discountID == "discount_none"){
            $("#cways_menu_discount_metro").attr('disabled','disabled');
            $("#cways_menu_discount_tram").attr('disabled','disabled');
            $("#cways_menu_discount_trolley").attr('disabled','disabled');
        }

        if(discountID == "discount_pref"){
            $("#cways_menu_discount_metro").attr('disabled','disabled');
            $("#cways_menu_discount_tram").attr('disabled','disabled');
            $("#cways_menu_discount_trolley").attr('disabled','disabled');
        }

        if(discountID == "discount_other"){
            $("#cways_menu_discount_metro").removeAttr('disabled');
            $("#cways_menu_discount_tram").removeAttr('disabled');
            $("#cways_menu_discount_trolley").removeAttr('disabled');
        }

    },

    /**
     * [getDiscount description]
     * @param  {[type]} discountID [description]
     * @return {[type]}            [description]
     */
     getDiscount: function(discountID){
        return $("#cways_menu_" + discountID).is(':checked');
    },

    /**
     * @author Marianna 
     * @memberOf cityways.page.search.SettingsPanel.prototype
     * Возвращает скидки на проезд в зависимости от того, какие проездные выбрал пользователь
     * @return {Dictionary} Асоциативный массив, ключами которого являются названия видов транспорта, а значениями - скидка в процентром соотношении.
     * Например  если значение словаря dict["bus"] равно 0, тогда проезд на автобусе бесплатный.
     * Если равно 1 - проезд платный, 0.5 - скидка 50%.
     */
     getCheckedDiscounts : function(){
        var dict = {};
        dict["metro"] = 0.5;
        dict["tram"] = 0.0;
        return dict;
    },

    /**
     * [_prepareTabs description]
     * @private
     * @memberOf cityways.page.SearchPage.prototype
     */
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
    }
}});

/**
 * @overview Class {@link cityways.page.search.WidgetEventHandlers}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 * 
 * @requires cityways/page/search.js
 * @requires cityways/Class.js
 */

 /**
 * [SettingsPanel description]
 * @class cityways.page.search.WidgetEventHandlers
 */
 cityways.page.search.WidgetEventHandlers = cityways.Class({

 	constructor :  function(mainPage) {
 		this._mainPage = mainPage;
 	},

 	members : { 
 			/**
 			 * [_mainPage description]
 			 * @private 
 			 * @memberOf cityways.page.search.WidgetEventHandlers.prototype
 			 * @type {cityways.page.SearchPage}
 			 */
 			 _mainPage : null,

 			/**
 			 * [onSelectPath description]
			 * @memberOf cityways.page.search.WidgetEventHandlers.prototype
 			 * @param  {Number} pathIndex [description]
 			 */
 			 onSelectPath : function(pathIndex){
 			 	var self = this;
 			    self._mainPage.getPathsPanel().selectPath(pathIndex);
 			 	
 			 },

			/**
			 * [onRouteTypeClick description]
			 * @memberOf cityways.page.search.WidgetEventHandlers.prototype
			 * @param  {[type]} self         [description]
			 * @param  {[type]} routeType    [description]
			 * @param  {[type]} includeTitle [description]
			 * @param  {[type]} excludeTitle [description]
			 */
			 onRouteTypeClick : function(routeType) {
			 	cityways.logger.info(this._mainPage.getSettingsPanel());
			 	if (this._mainPage.getSettingsPanel().isEnabledRouteTypeBtn(routeType) == true) {
			 		this._mainPage.getSettingsPanel().enableRouteTypeBtn(routeType, false);
			 	} else {
			 		this._mainPage.getSettingsPanel().enableRouteTypeBtn(routeType, true);
			 	}

			 },

			/**
			 * [onFindBtnClick description]
			 * @memberOf cityways.page.search.WidgetEventHandlers.prototype
			 * @return {[type]} [description]
			 */
			 onFindBtnClick : function() {
			 	var findOptions = this._mainPage.getPathsOptions();
			 	if(findOptions == null)
			 		return;
			 	this._mainPage.getPathsPanel().visible(true);
			 	var loadGif = cityways.options.getResourcePath()	+ "images/load.gif";
			 	this._mainPage.getPathsPanel().setContent("<div class='loader_text'><img src='"
			 		+ loadGif + "'/></div>");
			 	
			 	var loader = new cityways.loader.PathsLoader();
			 	var self = this;
			 	loader.findShortestPaths(findOptions, function(e) {
			 		self._mainPage.getPathsPanel().setPathsInfo(e, findOptions);
			 	});
			 	return;

			 },

			/**
			 * [on_selectDetailWay description]
			 * @memberOf cityways.page.search.WidgetEventHandlers.prototype
			 * @param  {[type]} way_ind [description]
			 * @return {[type]}         [description]
			 */
			 onSelectDetailPath : function(path_ind)
			 {
			 	cityways.logger.info("OK");
			 },

			/**
		     * [onDiscountChanged description]
		     * @memberOf cityways.page.search.WidgetEventHandlers.prototype
			 * @param  {[type]} val        [description]
			 * @param  {[type]} discountID [description]
			 */
			 onDiscountChanged : function(val, discountID){
			 	var val = $("#cways_menu_" + discountID).is(':checked');
			 	this._mainPage.getSettingsPanel().setDiscount(discountID,val);
			 },

			/**
			 * [onChangeSelectboxCity description]
			 * @memberOf cityways.page.search.WidgetEventHandlers.prototype
			 */
			 onChangeSelectboxCity : function(){
			 	var nameFromCombo = $("#selectbox_city").val();
			 	document.location.href = cityways.options.ServerHost + 'home/' + nameFromCombo;
			 }

			}
		});

/**
 * @overview Namespace {@link cityways.page.routes}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 * 
 * @requires cityways/page.js
 */

/**
 * @namespace cityways.page.routes
 */

 cityways.page.routes = {

   COLORS : [
       "black",
       "red",
       "yellow",
       "green"
   ],
   initialize : function(options){
     if(cityways._initialized == true){
      return;
    }
    if(options != undefined && options.lang){
      cityways.lang.setCode(options.lang);
    }
    else
      cityways.lang.setCode();

    if(options != undefined && options.theme)
      cityways.options.Theme = options.theme;
    else
      cityways.options.Theme = "default";

    if(options != undefined && options.resourceURI)
      cityways.options.ResourceURI = options.resourceURI;
    else
      cityways.options.ResourceURI = cityways.util.getScriptLocation("main_page") + "/";

    if(options != undefined && options.serverHost != undefined){

     cityways.options.ServerHost = options.serverHost;
     if(options.serverHost == "" || options.serverHost[options.serverHost.length-1] != "/")
       cityways.options.ServerHost = cityways.options.ServerHost + "/";
   }
   else
    cityways.options.ServerHost = "http://ways.in.ua/";

  cityways._initialized = true;

  var linkFiles = [];

  var cssFile1 = cityways.helper.document.selectCSSFile(cityways.options.ServerHost + "media/css/pages/",
    [{
      name : "routes.css"
    }]);
  linkFiles.push(cssFile1);

  if(document.readyState == undefined || (document.readyState != "interactive" &&
    document.readyState != "complete")){
    for(var i=0; i< linkFiles.length;  i++ ){
      cityways.helper.document.appendCSSFile(linkFiles[i],"write");
    }
  }else
  {
    for(var i=0; i< linkFiles.length;  i++ ){
      cityways.helper.document.appendCSSFile(linkFiles[i],"inner");
    }

  }
}
};
/**
 * @overview Class {@link cityways.page.routes.RoutesPanel}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 * 
 * @requires cityways/page/routes.js
 * @requires cityways/Class.js
 */

/**
 * [SearchPage description]
 * @class cityways.page.routes.RoutesPanel
 * @param  {Object} options [description]
 */
 cityways.page.routes.RoutesPanel = cityways.Class({
 	
 	constructor :  function(routesPage, options) {
 		var self = this;
 		self._routesPage = routesPage;
 		self._selectedRoutes = new cityways.type.StringDictionary();
 		var visible = (options != undefined && options.visible != undefined) ? options.visible : false;		
 		$(document).ready(function() {
 			$('#cityways_routes_panel_scroll').tinyscrollbar();
 			self.visible(visible);
 			selectbox_initialize();
 		});
 	    // Добавим обработчик события изменения размеров окна
 	    $(window).bind("resize", function(e) {
 	    	self._on_resize_window(e);
 	    });

 	    self._colorsGenerator = new cityways.page.ColorsGenerator();
 	},

 	members : {

 		_colorsGenerator : null,

 		_selectedRoutes : null,

 			/**
	 		* Видимость панели.
	 		* @private
	 		* @memberOf cityways.page.routes.RoutesPanel.prototype
	 		* @type {bool}
	 		*/
	 		_visible : null,

 			/**
	 		* Видимость панели.
	 		* @private
	 		* @memberOf cityways.page.routes.RoutesPanel.prototype
	 		* @type {bool}
	 		*/
	 		_routesPage : null,

			/**
	 		* @memberOf cityways.page.routes.RoutesPanel.prototype
	 		* @param {bool} value  true: show, false : hide
	 		*/
	 		visible : function(value) {
	 			if(this._visible == value)
	 				return;
	 			if (value == true) {
	 				$("#map_canvas").width('68%').css({
	 					cursor : "auto",
	 					backgroundColor : "rgb(226, 226, 226)"
	 				});

	 			} else {
	 				$("#map_canvas").width('98.5%').css({
	 					cursor : "auto",
	 					backgroundColor : "rgb(226, 226, 226)"
	 				});
	 			}
	 			this._visible = value;
	 			$('#cityways_routes_panel_scroll').tinyscrollbar_update();
	 		},

	 		/**
	 		* [on_resize_window description]
	 		* @private
			* @memberOf cityways.page.routes.RoutesPanel.prototype
	 		* @param  {Object} e [description]
	 		*/
	 		_on_resize_window : function(e){
	 			$('#cityways_routes_panel_scroll').tinyscrollbar_update();
	 		},

	 		isSelectedRoute : function(routeID){
	 			var self = this;
	 			for(var i=0;i < self._selectedRoutes.length; i++){
	 				self._selectedRoutes[i].id == routeID
	 			}
	 			return false;
	 		},

	 		selectRoute : function(routeID){
	 			var self = this;
	 			var map = self._routesPage.getMapWidget();
	 			if(self._selectedRoutes.get(routeID) == null){
	 				var loader = new cityways.loader.RoutesLoader();
	 				loader.getRoute(routeID, function(e){
	 					var color = self._colorsGenerator.next()
	 					var options = {
	 						color : color
	 					};
	 					var route = new	cityways.widget.map.Route(e.route,options);
	 					map.addRoute(route,true);
	 					self._selectedRoutes.put(routeID, {
	 						selected : true,
	 						route : route
	 					});
	 					var linkID = "#route_link_" + routeID.toString();
	 					$(linkID).css("background",color);
	 					 
	 				});
	 			}else
	 			{
	 				var rInfo = self._selectedRoutes.get(routeID);
	 				if(rInfo.selected == false){
	 					rInfo.selected = true;
	 					map.addRoute(rInfo.route,true);
	 					var linkID = "#route_link_" + routeID.toString();
	 					$(linkID).css("background",rInfo.route.getColor());
	 				}else{
	 					rInfo.selected = false;
	 					map.removeRoute(rInfo.route);
	 					var linkID = "#route_link_" + routeID.toString();
	 					$(linkID).css("background","");
	 				}
	 			}

	 		}

	 	}


	 });
/**
 * @overview Class {@link cityways.page.routes.RoutesMapWidget}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 * 
 * @requires cityways/Class.js
 */

/**
 * [MapWidget description]
 * @class cityways.page.routes.RoutesMapWidget
 * @constructor 
 * @param  {String} div     ID dom элемента, в который будет помещена карта
 * @param  {Object} options Начальные опции карты
 * @example // Структура объекта options:
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
 cityways.page.routes.RoutesMapWidget  =  cityways.Class({

 	constructor :  function(div,options){
 		var self = this;
 		self._options = options;
 		self._options.minZoom = options.zoom - 2;
 		self._map = new cityways.Map(div,options);
 		self._routes = [];
 	},

 	members: {

  	/**
 	 * [_routes description]
 	 * @private
 	 * @memberOf cityways.maps.MapWidget.prototype
 	 * @type Array<{cityways.widget.map.Route}>
 	 */   
 	 _routes : null,

 	/**
 	 * [map description]
 	 * @private
 	 * @memberOf cityways.maps.MapWidget.prototype
 	 * @type {cityways.Map}
 	 */
 	 _map : null, 

 	/**
 	 * [options description]
 	 * @private
 	 * @memberOf cityways.maps.MapWidget.prototype
 	 * @type {[Object}
 	 */
 	 _options : null,


 	 getMap : function(){
 	 	return this._map;
 	 },

 	 resizeMap : function(w,h){
 	 	if(this._map != undefined){
 	 		this._map.resize(w,h);
 	 	}
 	 },

 	 setHeight : function(h){
 	 	if(this._map != undefined){
 	 		this._map.setHeight(h);
 	 	}
 	 	cityways.logger.info("widget setHeight()",h);
 	 },

 	 setWidth : function(w){
 	 	if(this._map != undefined){
 	 		this._map.setWidth(w);
 	 	}		
 	 },



 	 removeAllRoutes : function(){
 	 	var self = this;
 	 	for (var i = 0; i < self._paths.length; i++) {
 	 		var polylines = self._paths[i].getAllPolylines();
 	 		var stations = self._paths[i].getAllStations();
 	 		for(var j=0;j < polylines.length; j++){
 	 			this._map.removePolyline(polylines[j]);
 	 		} 
 	 		for(var j=0;j < stations.length; j++){
 	 			this._map.removeMarker(stations[j]);
 	 		} 

 	 	};
 	 },

	 /**
	  * [addPath description]
	  * @param {cityways.widget.map.Route} path [description]
	  */
	  addRoute : function(route,isCentroid){
	  	var self = this;
	  	var polylines = route.getAllPolylines();
	  	var stations = route.getAllStations();
	  	var alignmentPoints = [];
	  	for(var j=0;j < polylines.length; j++){
	  		self._map.addPolyline(polylines[j]);
	  	} 
	  	for(var j=0;j < stations.length; j++){
	  		self._map.addMarker(stations[j]);
	  		alignmentPoints.push({
	  			lat : stations[j].getLocation().lat,
	  			lon : stations[j].getLocation().lon
	  		});
	  	} 
	  	if(isCentroid == true){
	  		self._map.alignment(alignmentPoints);
	  	}
	  	self._routes.push(route);
	  },

	  removeRoute : function(route){
	  	var self = this;
	  	var polylines = route.getAllPolylines();
	  	var stations = route.getAllStations();
	  	for(var j=0;j < polylines.length; j++){
	  		self._map.removePolyline(polylines[j]);
	  	} 
	  	for(var j=0;j < stations.length; j++){
	  		self._map.removeMarker(stations[j]);
	  	} 
	  	for(var i=0;i < self._routes.length; i++){
	  		if(self._routes[i] == route){
	  			self._routes.splice(i,1);
	  			break;
	  		}
	  	}
	  }


	}
	
	/* EVENTS */

	 /**
	 * Вызывается при изменении адреса начальной или конечной точки назначения.
	 * @event cityways.MapWidget#ON_CHANGED_DESTINATION_ADDR.
	 * @property {String} addr Новый адрес точки назначения.
	 * @property {String} dest "start" : если изменился адрес начальной точки, "finish" : конечной.
	 * @property {cityways.maps.Marker} marker Маркер, у которго был изменен адрес.
	 */


	});
/**
 * @overview Class {@link cityways.page.routes.WidgetEventHandlers}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 * 
 * @requires cityways/page/routes.js
 * @requires cityways/Class.js
 */

 /**
 * [SettingsPanel description]
 * @class cityways.page.routes.WidgetEventHandlers
 */
 cityways.page.routes.WidgetEventHandlers = cityways.Class({

 	constructor :  function(routesPage) {
 		var self = this;
 		self._routesPage = routesPage;
 	},

 	members : { 
 			/**
 			 * [_mainPage description]
 			 * @private 
 			 * @memberOf cityways.page.routes.WidgetEventHandlers.prototype
 			 * @type {cityways.page.SearchPage}
 			 */
 			 _routesPage : null,

 			/**
 			 * [onSelectPath description]
			 * @memberOf cityways.page.routes.WidgetEventHandlers.prototype
 			 * @param  {Number} routeID [description]
 			 */
 			 onSelectRoute : function(routeID){
 			 	this._routesPage.getRoutesPanel().selectRoute(routeID);
 			 }

			}
		});

/**
 * @overview Class {@link cityways.page.RoutesPage}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 * 
 * @requires cityways/page.js
 * @requires cityways/Class.js
 */

/**
 * [SearchPage description]
 * @class cityways.page.RoutesPage
 * @param  {Object} options [description]
 */
 cityways.page.RoutesPage = cityways.Class({
 	constructor :  function(options) {
 		// Инициализируем библиотеку 
 		cityways.page.routes.initialize(options);

 		var self = this;
 		var routeTypes = null;

 		if(options.routeTypes == undefined){
 			routeTypes = [];
 		}else
 		routeTypes = options.routeTypes;

 		// Создадим боковую панель памршрутов
 		self._routesPanel = new cityways.page.routes.RoutesPanel(this);
 		// Создадим обработчик событий главной страницы
	 	self._widgetEventHandlers = new cityways.page.routes.WidgetEventHandlers(self);
	 	

	 	// Сохраним параметры
	 	self._currentCity = options.currentCity;

	 	// Создадим виджет карты
	 	self._makeMapWidget(self._currentCity);

	 	$(document).ready(function() {
	 		$("#map_canvas").width('68%').css({
	 			cursor : "auto",
	 			backgroundColor : "rgb(226, 226, 226)"
	 		});
	 		
	 		self._onResizeWindow();
	 	});

	 	// Добавим обработчик события изменения размеров окна
	 	$(window).bind("resize", function(e) {
	 		self._onResizeWindow(e);
	 	});
	 },

	 members : { 

	/**
	 * [mapWidget description]
	 * @memberOf cityways.page.RoutesPage.prototype
	 * @type {cityways.Map}
	 */
	 _mapWidget : null,

	 /**
	  * [pathsPanel description]
	  * @private
	  * @memberOf cityways.page.RoutesPage.prototype
	  * @type {cityways.page.routes.RoutesPanel}
	  */
	  _routesPanel : null,

	/**
	 * [widgetEventHandlers description]
	 * @private
	 * @memberOf cityways.page.RoutesPage.prototype
	 * @type {[type]}
	 */
	 _widgetEventHandlers : null,

	/**
	 * @private
	 * @memberOf cityways.page.RoutesPage.prototype
	 * @type {Object}
	 * @example 
	 * var currentCity = {
	 * scale : {Number},
	 * location : {
	 * 			     lat : {Number},
	 * 			     lon : {Number}	
	 * 			  }
	 * };
	 */
	 _currentCity : null,


	 
	 _makeMapWidget : function(city){
	 	var self  = this;
	 	var city  = self._currentCity;
	 	var mapOptions = {
	 		mapProvider : cityways.maps.GOOGLE_PROVIDER,
	 		zoom : city.scale,
	 		center : {
	 			lat : city.location.lat,
	 			lon : city.location.lon
	 		}
	 	};

	 	var mapWidget = new cityways.page.routes.RoutesMapWidget("map_canvas", mapOptions);
	 	this._mapWidget = mapWidget;
	 },

	/**
	 * [on_resize_window description]
	 * @private
	 * @memberOf cityways.page.SearchPage.prototype
	 * @param  {Object} e [description]
	 */
	 _onResizeWindow : function(e){
	 	this._mapWidget.setHeight(cityways.util.getWindowSize().height -53 );
	 },


	/**
	 * 
	 * Возвращает текущий город.
	 * @memberOf cityways.page.SearchPage.prototype
	 * @return {Object} [description]
	 */
	 getCurrentCity : function() {
	 	return this._currentCity;
	 },

	/**
	 * [getWidgetEventHandlers description]
	 * @memberOf cityways.page.SearchPage.prototype
	 * @return {cityways.page.search.WidgetEventHandlers} [description]
	 */
	 getWidgetEventHandlers : function() {
	 	return this._widgetEventHandlers;
	 },

	 getMapWidget : function(){
	 	return this._mapWidget;
	 },

	 getRoutesPanel : function(){
	 	return this._routesPanel;
	 },

	/**
	 * [_prepareNotes description]
	 * @private
	 * @memberOf cityways.page.SearchPage.prototype
	 */
	 _prepareNotes : function() {
	 	$('.demo-tip-darkgray').poshytip({
	 		className : 'tip-darkgray',
	 		showTimeout : 1,
	 		bgImageFrameSize : 11,
	 		offsetX : -25
	 	});
	 }
	}
});




/**
 * @overview Namespace {@link cityways.model}.
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
 * @namespace cityways.model
 */
 cityways.model = {


 };
/**
 * @overview Class {@link cityways.model.PathModel}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 * 
 * @requires cityways/model.js
 * @requires cityways/Class.js
 */

 /**
 * [Path description]
 * @class cityways.model.PathModel
 * @param  {Object} rowPathData Данные пути, полученные от сервера
 */
 cityways.model.PathModel = cityways.Class({
 	
 	constructor : function(rowPathData) {
 		cityways.extend(this, rowPathData);
 		this._isHasGeomData = false;

 	},

 	members : {


 	_isHasGeomData  : null,


 	/**
 	 * [startLocation description]
     * @memberOf cityways.model.Path.prototype
 	 * @type {[type]}
 	 */
 	 startLocation : null,

 	/**
 	 * [finishLocation description]
 	 * @memberOf cityways.model.Path.prototype
 	 * @type {Object}
 	 */
 	 finishLocation : null,


 	/**
 	 * [pathID description]
 	 * @memberOf cityways.model.Path.prototype
 	 * @type {Number}
 	 */
 	 pathID : null,

 	/**
 	 * [input description]
 	 * @memberOf cityways.model.Path.prototype
 	 * @type {Object}
 	 */
 	 input : null,

 	/**
 	 * [output description]
 	 * @memberOf cityways.model.Path.prototype
 	 * @type {Object}
 	 */
 	 output : null,

 	/**
 	 * [transitions description]
 	 * @memberOf cityways.model.Path.prototype
 	 * @type {Array<Object>}
 	 */
 	 transitions : [],

 	/**
 	 * [routes description]
 	 * @memberOf cityways.model.Path.prototype
 	 * @property {Number} ID
 	 * @property {Number} startInd
 	 * @property {Number} finishInd
 	 * @type {Array<Object>}
 	 */
 	 routes : [],

	/**
	* Возвращает стоимть пути
	* @memberOf cityways.model.Path.prototype
	* @return {Number} [description]
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
	* Возвращает время передвижения пешком
	* @memberOf cityways.model.Path.prototype
	* @return {String} [description]
	*/
	getWalkingTime : function(){
		var time = 0.0;
		for(var i=0;i < this.transitions.length; i++)
		{
			time += this.transitions[i].moveTimeSecs;
		}
		time += this.input.moveTimeSecs;
		time += this.output.moveTimeSecs;			 
		return cityways.helper.time.secsToLocaleString(time);
	},

	/**
	 * [setGeomData description]
	 * @param {[type]} data [description]
	 */
	 setGeomData : function(data){
	 	cityways.logger.info("setGeomData1()", data);
	 	cityways.logger.info("setGeomData2()", this.routes);
	 	for(var i=0;i < data.routes.length; i++){
	 		var routeData = data.routes[i];
	 		var route = this.getRouteByID(routeData.ID);
	 		if(route!=null){
	 			route.stations = routeData.stations;
	 			route.roads = routeData.roads;
	 			cityways.logger.info("setGeomData3()",route);
	 		}
	 		
	 	}
	 	
	 	this._isHasGeomData = true;
	 },

	 hasGeomData : function(){
	 	return this._isHasGeomData;
	 },

	 getRouteByID : function(id){
	 	if(this.routes == undefined)
	 		return null;
	 	for(var i=0;i < this.routes.length; i++)
	 	{
	 		if(this.routes[i].ID == id)
	 			return this.routes[i];
	 	}

	 	return null;
	 }


	}
});
/**
 * @overview Class {@link cityways.model.RouteModel}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 * 
 * @requires cityways/model.js
 * @requires cityways/Class.js
 */

 /**
 * [Path description]
 * @class cityways.model.RouteModel
 * @param  {Object} rowPathData Данные пути, полученные от сервера
 */
 cityways.model.RouteModel = cityways.Class({
 	
 	constructor : function(data) {
 		cityways.extend(this, data);
 		

 	},

 	members : {

	/**
 	 * [startLocation description]
     * @memberOf cityways.model.RouteModel.prototype
 	 * @type {Number}
 	 */
 	 ID: null,

	/**
 	 * [startLocation description]
     * @memberOf cityways.model.RouteModel.prototype
 	 * @type {Number}
 	 */ 	 
 	 cost: null,

	/**
 	 * [startLocation description]
     * @memberOf cityways.model.RouteModel.prototype
 	 * @type {String}
 	 */ 
 	 name: null,

	/**
 	 * [startLocation description]
     * @memberOf cityways.model.RouteModel.prototype
 	 * @type {String}
 	 */ 
 	 type: null,

	/**
 	 * [startLocation description]
     * @memberOf cityways.model.RouteModel.prototype
 	 * @type {cityways.model.RouteWayModel}
 	 */ 
 	 directWay : null,

	/**
 	 * [startLocation description]
     * @memberOf cityways.model.RouteModel.prototype
 	 * @type {cityways.model.RouteWayModel}
 	 */ 
 	 reverseWay : null,

	/**
 	 * [startLocation description]
     * @memberOf cityways.model.RouteModel.prototype
 	 * @type {Object}
 	 */ 
 	 timetable : null


	}
});
/**
 * @overview Namespace {@link cityways.template}.
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
 * @namespace cityways.template
 */
 cityways.template = {


 };
/**
 * @overview Namespace {@link cityways.template.html}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 *
 * @requires cityways/template.js
 */

/**
 * @namespace cityways.template.html
 */
 cityways.template.html = {

	/**
	 * [_templates description]
	 * @private
	 * @type {Object}
	 */
	 _templates : {},

	/**
	 * Возвращает html шаблон со словаря _templates. Если такой не сущействует,
	 * пытается загрузить его с сервера. Функция ассинхронная.
	 * @param  {[type]}   templateName [description]
	 * @param  {Function} callback     [description]
	 */
	 get : function(templateName, callback) {
	 	var templates = cityways.template.html._templates;
	 	if (templates[templateName] === undefined) {
	 		var loader = new cityways.loader.TemplatesLoader();
	 		var fileName = cityways.template.html._getFileByTemplateName(templateName);
	 		loader.loadHtmlTemplates(fileName, function(e) {
	 			cityways.extend(cityways.template.html._templates,e);
	 			cityways.logger.info(templates);
	 			callback(templates[templateName]);
	 		});
	 	} else {
	 		callback(templates[templateName]);
	 	}

	 },

	 getTemplates : function(templatesName, callback){
	 	var loadedTemlate = 0;
	 	var count = templatesName.length;
	 	var iscall = false;
	 	var templates = {};
	 	for(var i=0; i < count; i++){
	 		(function(ind){
	 			cityways.template.html.get(templatesName[ind],function(template){
	 				loadedTemlate++;
	 				templates[templatesName[ind]] = template;
	 				if(iscall == false && loadedTemlate == count){
	 					iscall = true;
	 					callback(templates);
	 				}
	 			});
	 		})(i);
	 	}
	 },
	/**
	 * [_getFileByTemplateName description]
	 * @private
	 * @param  {String} templateName [description]
	 * @return {String}              [description]
	 */
	 _getFileByTemplateName : function(templateName) {
		// templateName = template-<file_name>-<name>
		return "main";
	}

};
/**
 * @overview Namespace {@link cityways.loader}.
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
 * @namespace cityways.loader
 */
 cityways.loader = {


 };
/**
 * @overview Class {@link cityways.Geocoder}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 *
 * @requires cityways/Class.js
 */

/**
 * @class cityways.loader.Geocoder
 */
 cityways.loader.Geocoder = cityways.Class({
    constructor : function(){

    },

    members : 
    {
        _getShortAddress  : function(address){
            var addressParts = address.split(",");
            var result = addressParts[0];
            if (!isNaN(parseInt(addressParts[1])))
                result += ", " + addressParts[1];
            return result;
        },
    /**
     * [getCodeAddress description]
     * @param  {[type]}   lat      [description]
     * @param  {[type]}   lon      [description]
     * @param  {Function} callback [description]
     */
     getAddress : function(lat, lon, callback) {
        var self = this;
        var latlng = new google.maps.LatLng(lat, lon);
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({
            'latLng' : latlng
        }, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[1]) {
                    callback(self._getShortAddress(results[0].formatted_address));
                } else {
                    callback("("  + lat.toString() + ", "  + lon + ")");
                }
            } else {
                callback("("  + lat.toString() + ", "  + lon + ")");
            }
        });
    }

  }

});
/**
 * @overview Class {@link cityways.loader.PathsLoader}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 * 
 * @requires cityways/loader.js
 * @requires cityways/Class.js
 */

 /**
  * [PathsLoader description]
  * @class cityways.loader.PathsLoader
  */
  cityways.loader.PathsLoader = cityways.Class({

  	/* constructor */
  	constructor : function() {

  	},

    members : {
	/**
     * @memberOf cityways.loader.PathsLoader.prototype
     * @param {Object}   options Опции, по которым будет производиться поиск крат. пути
     * @param {Function} callback Callback функция
     * @example
     * var options = {
     *       cityID : Integer,
     *       p1 : {
     *           lat : Double,
     *           lon : Double
     *       },
     *       p2 : {
     *           lat : Double,
     *           lon : Double
     *       },
     *       outTime : {
     *           dayID : 'c_Sunday',
     *           timeStart : Integer(secs)
     *       },
     *       algStrategy : 'c_time', 'c_cost',
     *       usageRouteTypes : [
     *          {
     *       discount : 1.0,
     *       route_type_id : "c_route_station_input"
     *   },
     *   ...
     *       ]
     *   };
     */
     findShortestPaths : function(options, callback) {
        cityways.logger.info("findShortestPaths",options);
        if(callback == null)
            throw new Error("resultFunc was not defined");
        var url = cityways.options.ServerHost + "paths/find.json";
        cityways.logger.info("url: " + url);

        var args = {
            error : null,
            paths : [],
            findTime : 0
        };
        $.ajax({
         url : url,
         type : "POST",
         data : {data: $.toJSON(options ) },
         success : function(e) {
            try{
               
                var obj = $.parseJSON(e);

                if(obj.error != undefined||  obj.paths == undefined || obj.paths.length == 0)
                {
                    args.error = e.error;
                    callback(args);
                    return;
                }
                cityways.logger.info(obj);
                for (var i = 0; i < obj.paths.length; i++) 
                {
                    var path = new cityways.model.PathModel(obj.paths[i]);
                    path.startLocation = options.p1;
                    path.finishLocation = options.p2;
                    args.paths.push(path);
                }

                args.findTime = obj.findTime;
                callback(args);
                return;
            }
            catch(e){
                cityways.logger.error("Catch error", e, data);
                callback({  error : e });
                return;
            }
        }
    });
},

    /**
     * [getPathGeom description]
     * @memberOf cityways.loader.PathsLoader.prototype
     * @param  {cityways.model.PathModel}   path     [description]
     * @param  {Function} callback [description]
     */
     loadGeomDataForPath : function(path,callback){
       cityways.logger.info("findShortestPaths");
       if(callback == null)
        throw new Error("resultFunc was not defined");
    var url = cityways.options.ServerHost + "paths/get.json";
    var inputData = {
        p1 : path.startLocation,
        p2 : path.finishLocation,
        routeParts : []
    };

    for (var i = 0; i < path.routes.length; i++) {
        inputData.routeParts.push({
            ID : path.routes[i].ID,
            startInd : path.routes[i].startInd,
            finishInd : path.routes[i].finishInd
        });
    }

    cityways.logger.info("inputData:",inputData);
    $.ajax({
     url : url,
     type : "POST",
     data : {data: $.toJSON(inputData) },
     success : function(data) {
        try{
           
            var obj = $.parseJSON(data);
            path.setGeomData(obj);
            var args ={
                      path: path, 
                      success : true
                      };
            callback(args);
            return;
        }
        catch(e){
            cityways.logger.error("Catch error", e, data);
            callback({  error : e });

        }
    }
});

}
}
});
/**
 * @overview Class {@link cityways.loader.TemplatesLoader}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 * 
 * @requires cityways/loader.js
 * @requires cityways/Class.js
 */

 /**
  * [TemplatesLoader description]
  * @class cityways.loader.TemplatesLoader
  */
  cityways.loader.TemplatesLoader = cityways.Class({

  	constructor : function() {

  	},

  	members : {

	/**
	 * [loadHtmlTemplates description]
	 * @function
	 * @memberOf cityways.loader.TemplatesLoader.prototype
	 * @param  {String}   templateFile [description]
	 * @param  {Function} callback     [description]
	 */
	 loadHtmlTemplates : function(templateFile, callback) {
	 	if (callback == null)
	 		throw new Error("callback was not defined");
	 	var url = cityways.options.getResourcePath() + "templates/" + templateFile + ".xml";
	 	$.ajax({
	 		url : url,
	 		success : function(templatesHtml) {
	 			var ts = templatesHtml.getElementsByTagName("template");
	 			var templates = {};
	 			for (var i = 0; i < ts.length; i++) {
	 				try {
	 					cityways.logger.info(ts[i].textContent);
	 					cityways.logger.info(ts[i].getAttribute("id"));
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
	}
});
/**
 * @overview Class {@link cityways.loader.PathsLoader}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 * 
 * @requires cityways/loader.js
 * @requires cityways/Class.js
 */

 /**
  * [PathsLoader description]
  * @class cityways.loader.PathsLoader
  */
  cityways.loader.RoutesLoader = cityways.Class({

  	/* constructor */
  	constructor : function() {

  	},

    members : {
	/**
     * @memberOf cityways.loader.PathsLoader.prototype
     * @param {Object}   options Опции, по которым будет производиться поиск крат. пути
     * @param {Function} callback Callback функция
     * @example
     * var options = {
     *       cityID : Integer,
     *       p1 : {
     *           lat : Double,
     *           lon : Double
     *       },
     *       p2 : {
     *           lat : Double,
     *           lon : Double
     *       },
     *       outTime : {
     *           dayID : 'c_Sunday',
     *           timeStart : Integer(secs)
     *       },
     *       algStrategy : 'c_time', 'c_cost',
     *       usageRouteTypes : [
     *          {
     *       discount : 1.0,
     *       route_type_id : "c_route_station_input"
     *   },
     *   ...
     *       ]
     *   };
     */
     getRoute : function(routeID, callback) {
        cityways.logger.info("findShortestPaths",options);
        if(callback == null)
            throw new Error("resultFunc was not defined");
        var url = cityways.options.ServerHost + "routes/get/" + routeID.toString();
        cityways.logger.info("url: " + url);

        var args = {
            error : null,
            route : null
        };

        $.ajax({
         url : url,
         type : "GET",
         success : function(e) {
            try{
                var routeData = $.parseJSON(e);
                cityways.logger.debug(routeData);
                if(routeData.error != undefined)
                {
                    args.error = routeData.error;
                    callback(args);
                    return;
                }
                args.route = new cityways.model.RouteModel(routeData);
                callback(args);
                return;
            }
            catch(e){
                args.error = e;
                callback(args);
                return;
            }
        }
    });
    }

}
});
/**
 * @overview Namespace {@link cityways.widget}.
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
 * @namespace cityways.widget
 */
 cityways.widget = {


 };
/**
 * @overview Namespace {@link cityways.widget.map}.
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
 * @namespace cityways.widget
 */
 cityways.widget.map = {


 };
/**
 * @overview Class {@link cityways.widget.map.StationMarke}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 * 
 * @requires cityways/maps.js
 * @requires cityways/Class.js
 */


/**
 * [Marker description]
 * @class cityways.maps.Station
 * @extends {cityways.maps.Marker}
 * @param {Object} options Опции маркера
 * @param {String} options.iconFileName [dest]
 * @param {Number} options.lat desc1 [dest]
 * @param {Number} options.lon desc2 [dest]
 * 
 */
 cityways.widget.map.Station = cityways.Class({
 	extends : [cityways.maps.Marker],
 	constructor : function(options) {
 		//  Вызовем конструктор родителя
 		cityways.maps.Marker.call(this, options);
 		this._draggable = false;
 	},

 	members :  {
 		_stationID : null,

 		setID : function(id){
 			this._stationID = id;
 		}
	}
});


/**
 * @overview Class {@link cityways.widget.map.Route}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 * 
 * @requires cityways/maps.js
 * @requires cityways/Class.js
 */


/**
 * [Marker description]
 * @class cityways.widget.map.Route 
 * @param {cityways.model.RouteModel} routeModel Опции маршрута
 * 
 */
 cityways.widget.map.Route = cityways.Class({
 	constructor : function(routeModel,options) {
 		var self = this;
 		var minZoom = 14;
 		self._routeModel = routeModel;
 		self._stations = [];
 		self._polylines = [];
 		if(options != undefined && options.color != undefined){
 			self._color = options.color;
 		}else {
 			self._color = "blue";
 		}

 		for(var i=0;i < routeModel.reverseWay.stations.length; i++){
 			var stData = routeModel.reverseWay.stations[i];
 			var st = new cityways.widget.map.Station();
 			st.setID(stData.id);
 			st.setLocation(stData.location.lat, stData.location.lon);
 			st.setIcon(cityways.options.getResourcePath() + "images/station.png");
 			st.setTitle(stData.name);
 			if(i==0 || i == routeModel.reverseWay.stations.length -1){
 				st.setMinZoom(0);
 			}else{
 				st.setMinZoom(minZoom);
 			}
 			self._stations.push(st);
 		}

 		for(var i=0;i < routeModel.reverseWay.roads.length; i++){
 			var line = new cityways.maps.Polyline(
 				{	points : routeModel.reverseWay.roads[i],
 					color : self._color,
 					opacity : 0.5,
 					weight : 6
 				});
 			self._polylines.push(line);
 		}

 		for(var i=0;i < routeModel.directWay.stations.length; i++){
 			var stData = routeModel.directWay.stations[i];
 			var st = new cityways.widget.map.Station();
 			st.setID(stData.id);
 			if(i==0 || i == routeModel.reverseWay.stations.length -1){
 				st.setMinZoom(0);
 			}else{
 				st.setMinZoom(minZoom);
 			}
 			st.setLocation(stData.location.lat, stData.location.lon);
 			st.setIcon(cityways.options.getResourcePath() + "images/station.png");
 			st.setTitle(stData.name);
 			self._stations.push(st);
 		}

 		for(var i=0;i < routeModel.directWay.roads.length; i++){
 			var line = new cityways.maps.Polyline(
 				{	points : routeModel.directWay.roads[i],
 					color : self._color,
 					opacity : 0.5,
 					weight : 6
 				});
 			self._polylines.push(line);
 		}

 	},

 	members :  {
 		_routeModel : null,

 		_stations : null,

 		_polylines : null,

 		_color : null,

 		getAllStations : function(){
 			return this._stations;
 		},

 		getAllPolylines : function(){
 			return this._polylines;
 		},

 		getColor : function(){
 			return this._color;
 		}



 	}
 });


/**
 * @overview Class {@link cityways.widget.map.Path}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 * 
 * @requires cityways/maps.js
 * @requires cityways/Class.js
 */


/**
 * [Marker description]
 * @class cityways.widget.map.Path
 * @param {cityways.model.PathModel} pathModel Опции маркера
 * 
 */
 cityways.widget.map.Path = cityways.Class({
 	constructor : function(pathModel) {
 		var self = this;
 		self._pathModel = pathModel;
 		self._stations = [];
 		self._polylines = [];

 		for(var i=0;i < pathModel.routes.length; i++){
 			var roadsData = pathModel.routes[i].roads;
 			var stationsData =  pathModel.routes[i].stations;
 			for(var j=0;j < pathModel.routes[i].stations.length; j++){
 				var stData = pathModel.routes[i].stations[j];
 				var st = new cityways.widget.map.Station();
 				st.setLocation(stData.location.lat, stData.location.lon);
 				st.setIcon(cityways.options.getResourcePath() + "images/station.png");
 				st.setTitle(stData.name);
 				self._stations.push(st);

 			}
 			for(var j=0;j < pathModel.routes[i].roads.length; j++){
 				var line = new cityways.maps.Polyline(
 					{	points : pathModel.routes[i].roads[j],
 						color : "blue",
 						opacity : 0.5,
 						weight : 6
 					});
 				self._polylines.push(line);
 			}
 		}
 	},

 	members :  {
 		_pathModel : null,

 		_stations : null,

 		_polylines : null,

 		getAllStations : function(){
 			return this._stations;
 		},

 		getAllPolylines : function(){
 			return this._polylines;
 		}



 	}
 });


