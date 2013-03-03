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



