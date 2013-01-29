/**
 * @requires CityWays/BaseTypes/Class.js
 * @requires CityWays/Pages.js
 */

/**
 * Class: CityWays.Pages.MainPage
 */
CityWays.Pages.MainPage = CityWays.Class({

			currentCity : null,

			contextPath : "",

			/**
			 * 
			 * @param {Object}
			 *            options
			 */
			initialize : function(options) {

				console.log('MainPage was initialized');
				this.contextPath = options.contextPath;
				this.currentCity = options.currentCity;
				CityWays.Pages.MainPage.WidgetEventHandlers._page = this;

			},

			getContextPath : function() {
				return contextPath;
			},

			getDefaultCity : function() {
				return "Kharkiv";
			}
			,

		});