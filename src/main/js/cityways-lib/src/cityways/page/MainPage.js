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
