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
 			 },

 			 onChangeSelectboxCity : function(){
 			 		var nameFromCombo = $("#selectbox_city").val();
			 	document.location.href = cityways.options.ServerHost + 'routes/' + nameFromCombo;
 			 },

 			 onShowPanel : function(){
 			 	var visible = this._routesPage.getRoutesPanel().visible();
 			 	this._routesPage.getRoutesPanel().visible(visible==true ? false : true);
 			 }

			}
		});
