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
  		destroy : function(){
        this._mapProvider.destroy();
  		},

  		/* override */
  		resize : function(w,h){
  			this._mapProvider.resize(w,h);
  		},


      setHeight : function(h){
        this._mapProvider.setHeight(h);
      }




  }
  

});