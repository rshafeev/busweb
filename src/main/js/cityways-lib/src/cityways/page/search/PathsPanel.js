/**
 * @overview Class {@link cityways.page.search.PathsPanel}.
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
 * [SearchPage description]
 * @class cityways.page.search.PathsPanel
 * @param  {Object} options [description]
 */
 cityways.page.search.PathsPanel = cityways.Class({
 	
 	constructor :  function(searchPage, options) {
 		this._searchPage = searchPage;
 		var visible = (options != undefined && options.visible != undefined) ? options.visible : false;		
 		var self = this;
 		$(document).ready(function() {

			var el = document.getElementById('ways_panel');
			el.style.display = 'block';

 			$('#cityways_path_panel_scroll').tinyscrollbar();
 		    self.visible(visible);
 		});
		
 	    // Добавим обработчик события изменения размеров окна
 	    $(window).bind("resize", function(e) {
 	    	self.on_resize_window(e);
 	    });
 	},

 	members : {	
	/**
	 * Видимость панели.
	 * @private
	 * @memberOf cityways.page.SearchPage.prototype
	 * @type {bool}
	 */
	 _visible : null,

	 _searchPage : null,

	/**
	 * @memberOf cityways.page.SearchPage.prototype
	 * @param {bool} value  true: show, false : hide
	 */
	 visible : function(value) {
	 	if(this._visible == value)
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
		this._visible = value;
		$('#cityways_path_panel_scroll').tinyscrollbar_update();
	},

	setContent : function(content){
		$('#cityways_path_panel_data').html(content);
		$('#cityways_path_panel_scroll').tinyscrollbar_update();
	},

	/**
	 * [on_resize_window description]
	 * @private
	 * @memberOf cityways.page.search.PathsPanel.prototype
	 * @param  {Object} e [description]
	 */
	 on_resize_window : function(e){
	 	$('#cityways_path_panel_scroll').tinyscrollbar_update();
	 }

	}});