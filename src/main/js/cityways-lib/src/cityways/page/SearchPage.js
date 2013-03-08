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



