/**
 * @requires cityways/Class.js
 * @requires cityways/page.js
 */

/**
 * Class: cityways.Pages.MainPage.WidgetEventHandlers
 */
cityways.page.main.WidgetEventHandlers = cityways.Class({

			/**
			 * 
			 * @param {Object}
			 *            mainPage
			 */
			initialize : function() {

			},

			onRouteTypeClick : function(self, routeType, includeTitle,
					excludeTitle) {
				var page = cityways.page.Current;
				if (page.getSettingsPanel().isEnabledRouteTypeBtn(routeType) == true) {
					page.getSettingsPanel().enableRouteTypeBtn(routeType,
							false, includeTitle);
				} else {
					cityways.logger.info("false");
					page.getSettingsPanel().enableRouteTypeBtn(routeType, true,
							excludeTitle);
				}

			},
			_onMakeRightPanelContent : function(self, data, templates) {
				var headersTemplate = templates["template-main-waysPanelHeader"];
				var infoTemplate = templates["template-main-waysPanelInfo"];
				var paths = data.paths;
				var htmlBody = "";
				for (var i = 0; i < paths.length; i++) {
					var path = new cityways.model.Path(paths[i]);
					cityways.logger.info(path.getFullCost());
					var params = {
						index : i + 1,
						locale : cityways.Language.translate,
						cost : path.getFullCost(),
						time: path.getWalkingTime()
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

				cityways.template.html.get(
						"template-main-waysPanelHeader", function(template) {
							loadedTemplates++;
							templates["template-main-waysPanelHeader"] = template;
							if (loadedTemplates == templatesCount) {
								_this._onMakeRightPanelContent(_this, data,
										templates);
							}
						});

				cityways.template.html.get(
						"template-main-waysPanelInfo", function(template) {
							loadedTemplates++;
							templates["template-main-waysPanelInfo"] = template;
							if (loadedTemplates == templatesCount) {
								_this._onMakeRightPanelContent(_this, data,
										templates);
							}
						});

			},

			onFindBtnClick : function() {
				var page = cityways.page.Current;
				var options = page.getPathsOptions();

				var el = document.getElementById('ways_panel');
				if (options == null)
					return;
				el.style.display = 'block';
				var loadGif = cityways.options.getResourcePath()
						+ "images/load.gif";
				$('#panel_data').html("<div class='loader_text'><img src='"
						+ loadGif + "'/></div>");
				$('#panel_scrollbar').tinyscrollbar_update();
				page.visibleRightPanel(true);
				var _this = this;
				cityways.logger.info("onFindBtnClick");
				var loader = new cityways.loader.PathsLoader();
				loader.findShortestPaths(options, function(e) {
							cityways.logger.info("findShortestPaths");
							_this._onLoadedPaths(_this, e);
						});

			},
			
			on_selectDetailWay : function(way_ind)
			{
			cityways.logger.info("OK");
			}
		});
