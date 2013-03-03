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
 		var visible = (options != undefined && options.visible != undefined) ? options.visible : true;		
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

	 			if(value == undefined)
	 				return this._visible;
	 			cityways.logger.info(value);
	 			if(this._visible == value)
	 				return;
	 			if (value == true) {
	 				$("#img_panel").attr("src",cityways.options.getResourcePath() + "images/arrow_right.png");
	 				this._routesPage.getMapWidget().setWidth('68%');
	 			} else {
	 				$("#img_panel").attr("src",cityways.options.getResourcePath() + "images/arrow_left.png");
	 				this._routesPage.getMapWidget().setWidth('98.5%');
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