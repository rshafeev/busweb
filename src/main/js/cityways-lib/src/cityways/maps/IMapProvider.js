/**
 * @overview Interface {@link cityways.maps.IMapProvider}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 * 
 */

/**
 *  Данный код не является исполнимым и после компиляции будет удален. 
 */

/**
 * @class cityways.maps.IMapProvider
 * @classdesc Абстрактный класс 
 */
 function IMapProvider(){

 	var InterfaceDescription =  {

 		/* EVENTS */

     /**
     * Событие вызывается, когда произошло нажатие клавиши мыши на карте 
     * @event cityways.maps.IMapProvider#ON_CLICK
     * @property {Number} lat Широта  геогр. точки
     * @property {Number} lon Долгота геогр. точки
     */
     ON_CLICK : true,

    /**
     * Событие вызывается, когда инициализации карты закончено.
     * @event cityways.maps.IMapProvider#ON_LOADED
     */
     ON_LOADED : true,

     /**
      * Событие вызывается, когда был изменен размер карты.
      * @event  cityways.maps.IMapProvider#ON_RESIZE
      * @property {Number} wigth  Ширина карты
      * @property {Number} height Высота карты
      */
      ON_RESIZE : true,


      /* MEMBERS */

	/**
	 * Возвращает нативный объект карты в зависимости от выбранного провайдера. Например, в случае провайдера "google", 
	 * функция вернет объект типа {google.maps.Map}
	 * @abstract
	 * @memberOf cityways.maps.IMapProvider.prototype
	 * @return {Object} Нативный объект карты
	 */
	 getNativeMapObj : function(){},

	 /**
	  * Изменяет размер html контейнера, в котором размещена карта.
	  * @abstract
	  * @memberOf cityways.maps.IMapProvider.prototype
	  * @param  {Number} w Ширина, пикс
	  * @param  {Number} h Высота, пикс
	  */
	  resize : function(w, h){},

	 /**
	  * Изменяет высоту html контейнера, в котором размещена карта
	  * @abstract
	  * @memberOf cityways.maps.IMapProvider.prototype
	  * @param {Number} h Высота, пикс
	  */
	  setHeight : function(h){},

	 /**
	  * Изменяет ширину html контейнера, в котором размещена карта
	  * @abstract
	  * @memberOf cityways.maps.IMapProvider.prototype
	  * @param {Number} w Ширина, пикс
	  */
	  setWidth : function(w){},

	/**
	 * Добавляет на карту маркер
	 * @abstract
	 * @memberOf cityways.maps.IMapProvider.prototype
	 * @param {cityways.maps.Marker} marker Маркер
	 */
	 addMarker : function(marker){},

  	/**
     * Удаляет с карты маркер
     * @abstract
     * @memberOf cityways.maps.IMapProvider.prototype
     * @param {cityways.maps.Marker} marker Маркер
     */
     removeMarker : function(marker){},

  	/**
     * Добавляет на карту полилинию
     * @abstract
     * @memberOf cityways.maps.IMapProvider.prototype
     * @param {cityways.maps.Polyline} polyline 
     */
     addPolyline : function(polyline){},

  	/**
     * Удаляет с карты полилинию
     * @abstract
     * @memberOf cityways.maps.IMapProvider.prototype
     * @param {cityways.maps.Polyline} polyline
     */
     removePolyline : function(polyline){},

  	/**
     * Удаляет с карты маркер
     * @abstract
     * @memberOf cityways.maps.IMapProvider.prototype
     * @param {cityways.maps.Marker} marker Маркер
     */
     destroy : function(marker){}


 };

};
