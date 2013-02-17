/**
 * @requires cityways/type/Class.js
 * 
 */

/**
 * Class: cityways.Pages.MainPage.WidgetEventHandlers
 */
cityways.page.main.WidgetEventHandlers = cityways.type.Class({

			/**
			 * 
			 * @param {Object}
			 *            mainPage
			 */
			initialize : function() {

			},

			onRouteTypeClick : function(self, routeType, includeTitle,
					excludeTitle) {
				var page = cityways.Page.Current;
				if (page.getSettingsPanel().isEnabledRouteTypeBtn(routeType) == true) {
					page.getSettingsPanel().enableRouteTypeBtn(routeType,
							false, includeTitle);
				} else {
					console.log("false");
					page.getSettingsPanel().enableRouteTypeBtn(routeType, true,
							excludeTitle);
				}

			},
			_onMakeRightPanelContent : function(self, data, templates) {
				var headersTemplate = templates["template-main-waysPanelHeader"];
				var infoTemplate = templates["template-main-waysPanelInfo"];
				//var detailInfoTemplate = templates["template-main-waysPanelInfo"];
				var paths = data.paths;
				var htmlBody = "";
				for (var i = 0; i < paths.length; i++) {
					var path = new cityways.model.Path(paths[i]);
					cityways.Console.log(path.getFullCost());
					var params = {
						index : i + 1,
						locale : cityways.Language.translate,
						cost : path.getFullCost(),
						time: path.getWalkingTime(),
						footTo : path.getStationName()
					};
					htmlBody = htmlBody + headersTemplate(params);
				}
				$('#panel_data').html(htmlBody);
			},

			_onLoadedPaths : function(self, e) {
				var data = e.data;
				var templates = {};
				var loadedTemplates = 0;
				var templatesCount = 2;
				var _this = this;

				cityways.template.HtmlTemplates.get(
						"template-main-waysPanelHeader", function(template) {
							loadedTemplates++;
							templates["template-main-waysPanelHeader"] = template;
							if (loadedTemplates == templatesCount) {
								_this._onMakeRightPanelContent(_this, data,
										templates);
							}
						});

				cityways.template.HtmlTemplates.get(
						"template-main-waysPanelInfo", function(template) {
							loadedTemplates++;
							templates["template-main-waysPanelInfo"] = template;
							if (loadedTemplates == templatesCount) {
								_this._onMakeRightPanelContent(_this, data,
										templates);
							}
						});
						
										/*cityways.template.HtmlTemplates.get(
						"template-main-detailWaysPanelInfo", function(template) {
							loadedTemplates++;
							templates["template-main-detailWaysPanelInfo"] = template;
							if (loadedTemplates == templatesCount) {
								_this._onMakeRightPanelContent(_this, data,
										templates);
							}
						});*/

			},

			onFindBtnClick : function() {
				var page = cityways.Page.Current;
				var options = page.getPathsOptions();

				var el = document.getElementById('ways_panel');
				if (options == null)
					return;
				el.style.display = 'block';
				var loadGif = cityways.Basic.getResourcePath()
						+ "images/load.gif";
				$('#panel_data').html("<div class='loader_text'><img src='"
						+ loadGif + "'/></div>");
				$('#panel_scrollbar').tinyscrollbar_update();
				page.visibleRightPanel(true);
				var _this = this;
				cityways.Console.log("onFindBtnClick");
				var loader = new cityways.loader.PathsLoader();
				loader.findShortestPaths(options, function(e) {
							cityways.Console.log("findShortestPaths");
							_this._onLoadedPaths(_this, e);
						});

			},
			
			on_selectDetailWay : function(way_ind)
			{
			cityways.Console.log("OK");
			}
		});
