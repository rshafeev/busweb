/**
 * @requires cityways/Class.js
 * @requires cityways/page.js
 */


/**
 * [MainPage description]
 * @class cityways.page.MainPage
 */
cityways.page.MainPage = cityways.Class({

	/**
	 * Видимость правой панели
	 */
	/**
	 * Видимость правой панели.
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
		cityways.log(this);
		cityways.log('MainPage was initialized!!');
		//alert("Hello");
		this.currentCity = options.currentCity;
		this.widgetEventHandlers = new cityways.page.main.WidgetEventHandlers();
		this.settingsPanel = new cityways.page.main.SettingsPanel({
					availableRouteTypes : options.routeTypes
				});
		
		this.visibleRightPanel(false);
		
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
		 var ResourceURI = cityways.Basic.ResourceURI;
		if(this.rightPanelVisible == value)
			return;
		if (value == true) {
			$("#map_canvas").width('68%').css({
						cursor : "auto",
						backgroundColor : "rgb(226, 226, 226)"
					});
			
			document.img.src = ResourceURI + 'themes/default/images/arrow_right.png';
					
		} else {
			$("#map_canvas").width('98.5%').css({
						cursor : "auto",
						backgroundColor : "rgb(226, 226, 226)"
					});
					
			document.img.src =ResourceURI + 'themes/default/images/arrow_left.png';
		}
		this.rightPanelVisible = value;
		
	}
});
