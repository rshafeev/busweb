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

 	constructor :  function() {

 	},

 	members : { 

			/**
			 * [onRouteTypeClick description]
			 * @memberOf cityways.page.search.WidgetEventHandlers.prototype
			 * @param  {[type]} self         [description]
			 * @param  {[type]} routeType    [description]
			 * @param  {[type]} includeTitle [description]
			 * @param  {[type]} excludeTitle [description]
			 * @return {[type]}              [description]
			 */
			 onRouteTypeClick : function(routeType) {
			 	var page = cityways.page.Current;
			 	cityways.logger.info(page.getSettingsPanel());
			 	if (page.getSettingsPanel().isEnabledRouteTypeBtn(routeType) == true) {
			 		page.getSettingsPanel().enableRouteTypeBtn(routeType, false);
			 	} else {
			 		page.getSettingsPanel().enableRouteTypeBtn(routeType, true);
			 	}

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
			 _onMakePathsPanelContent : function(data, templates) {
			 	var page = cityways.page.Current;
			 	var headersTemplate = templates["template-main-waysPanelHeader"];
			 	var infoTemplate = templates["template-main-waysPanelInfo"];
			 	cityways.logger.info(templates);
			 	var paths = data.paths;
			 	var htmlBody = "";
			 	for (var i = 0; i < paths.length; i++) {
			 		var path = new cityways.model.Path(paths[i]);
			 		cityways.logger.info(path.getFullCost());
			 		var params = {
			 			index : i + 1,
			 			locale : cityways.lang.translate,
			 			cost : path.getFullCost(),
			 			time: path.getWalkingTime()
			 		};
			 		htmlBody = htmlBody + headersTemplate(params);
			 	}
			 	page.getPathsPanel().setContent(htmlBody);
			 },

			/**
			 * [_onLoadedPaths description]
			 * @private
			 * @memberOf cityways.page.search.WidgetEventHandlers.prototype
			 * @param  {[type]} self [description]
			 * @param  {[type]} e    [description]
			 * @return {[type]}      [description]
			 */
			 _onLoadedPaths : function(e) {
			 	if(e.error != undefined||  e.paths == undefined || e.paths.length == 0){
			 		var page = cityways.page.Current;
			 		page.getPathsPanel().setContent("<div><p>Не найдено.</p> </div>");
			 		return;
			 	}

			 	var data = e.data;
			 	var templates = {};
			 	var loadedTemplates = 0;
			 	var templatesCount = 2;
			 	var self = this;

			 	cityways.template.html.get(
			 		"template-main-waysPanelHeader", function(template) {
			 			loadedTemplates++;
			 			templates["template-main-waysPanelHeader"] = template;
			 			if (loadedTemplates == templatesCount) {
			 				self._onMakePathsPanelContent(e,templates);
			 			}
			 		});

			 	cityways.template.html.get(
			 		"template-main-waysPanelInfo", function(template) {
			 			loadedTemplates++;
			 			templates["template-main-waysPanelInfo"] = template;
			 			if (loadedTemplates == templatesCount) {
			 				self._onMakePathsPanelContent(e,templates);
			 			}
			 		});

			 },

			/**
			 * [onFindBtnClick description]
			 * @memberOf cityways.page.search.WidgetEventHandlers.prototype
			 * @return {[type]} [description]
			 */
			 onFindBtnClick : function() {
			 	var page = cityways.page.Current;
			 	var findOptions = page.getPathsOptions();
			 	if(findOptions == null)
			 		return;
			 	page.getPathsPanel().visible(true);
			 	var loadGif = cityways.options.getResourcePath()	+ "images/load.gif";
			 	page.getPathsPanel().setContent("<div class='loader_text'><img src='"
			 		+ loadGif + "'/></div>");
			 	
			 	var loader = new cityways.loader.PathsLoader();
			 	var self = this;
			 	loader.findShortestPaths(findOptions, function(e) {
			 		cityways.logger.info("findShortestPaths");
			 		self._onLoadedPaths(e);
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


			 onDiscountChanged : function(val, discountID){
			 	var val = $("#cways_menu_" + discountID).is(':checked');
			 	var page = cityways.page.Current;
			 	page.getSettingsPanel().setDiscount(discountID,val);
			 },

			 onChangeSelectboxCity : function(){
			 	var nameFromCombo = $("#selectbox_city").val();
			 	document.location.href = cityways.options.ServerHost + 'home/' + nameFromCombo;
			 }
			}
		});
