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
