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
      _currentPathIndex : null,
	/**
	 * Текущие пути, по данным которым отображена информация в правой панеле PathsPanel
	 * @private
	 * @memberOf cityways.page.SearchPage.prototype
	 * @type {Object}
     * @property {Array<{@link cityways.model.PathModel}>} paths
     * @property {Number}                             findTime 
     */
     _currentPathsInfo : null,


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
    _makePathsPanelContent : function(data, templates) {
    	var page = cityways.page.Current;
    	var t_header = templates["template-main-pathsPanelHeader"];
    	var t_info = templates["template-main-pathsPanelInfo"];
      var t_route = templates["template-main-pathsPanelRoute"];
      var t_transition = templates["template-main-pathsPanelTransition"];
      var paths = data.paths;
      var htmlBody = "";
      for (var i = 0; i <paths.length; i++) {

        var path = paths[i];
        var headerParams = {
         index : i + 1,
         locale : cityways.lang.translate,
         cost : path.getFullCost(),
         time: path.getWalkingTime(),
         routes : paths[i].routes,
         resourcePath : cityways.options.getResourcePath(),
         host : cityways.options.ServerHost
       };
       var pathInfoContent = "";
       for(var j=0;j < paths[i].routes.length; j++ ){
        var route = paths[i].routes[j];
        var routeParams = {
          locale        : cityways.lang.translate,
          route_id      : route.ID,
          route_name    : route.name,
          route_type    : route.type,
          route_cost    : route.cost,
          route_distance: Math.round(route.distance/10.0)/100.0, // перемедем м. в км., оставив 2 знака после запятой
          route_start   : route.start,
          route_finish  : route.finish,
          route_freq    : route.finish,
          route_move    : cityways.helper.time.secsToLocaleString(route.moveTimeSecs),    
          route_wait    : cityways.helper.time.secsToLocaleString(route.wait),
          host : cityways.options.ServerHeeost         
        };   

        pathInfoContent = pathInfoContent + t_route(routeParams);
        if(j < paths[i].routes.length - 1){
          var trans = paths[i].transitions[j];
          var move_time = "";
          if(trans.moveTimeSecs > 60){
            move_time = cityways.helper.time.secsToLocaleString(trans.moveTimeSecs)
          }
          var transParams = {
            locale      : cityways.lang.translate,
            route_from  : paths[i].getRouteByID(trans.fromRouteID).name,
            route_to    : paths[i].getRouteByID(trans.toRouteID).name,
            distance    : parseInt(trans.distance),
            move_time   : move_time
          };
          pathInfoContent = pathInfoContent + t_transition(transParams);
        }
      }
      var infoParams = {
        index : i +1,
        content : pathInfoContent
      };
      htmlBody = htmlBody + t_header(headerParams) + t_info(infoParams);
    }
    this.setContent(htmlBody);
    if(paths.length >0){
      this.selectPath(1);
    }
  },

   /**
    * [setPathsInfo description]
    * @memberOf cityways.page.search.WidgetEventHandlers.prototype
    * @param {[type]} e [description]
    */
    setPathsInfo : function(e, findOptions){
    	var self = this;
      self._searchPage.getMapWidget().removeAllPaths();
      if(e.error != undefined||  e.paths == undefined || e.paths.length == 0)
      {
        self._searchPage.getMapWidget().removeAllPaths();
        self.setContent("<div><p>Не найдено.</p> </div>");
        return;
      }
      self._currentPathsInfo = e;
      cityways.template.html.getTemplates([
        "template-main-pathsPanelHeader",
        "template-main-pathsPanelInfo",
        "template-main-pathsPanelTransition",
        "template-main-pathsPanelRoute"], 
        function(templates) {
         self._makePathsPanelContent(e,templates);
       });

    },

    /**
     * [getCurrentPaths description]
     * @memberOf cityways.page.SearchPage.prototype
     * @return {Array<{@link cityways.model.Path}>} [description]
     */
     getCurrentPaths : function(){
      if(this._currentPathsInfo!=undefined)
        return this._currentPathsInfo.paths;
      return [];
    },


    /**
     * [getfindTime description]
     * @memberOf cityways.page.SearchPage.prototype
     * @return {Number} [description]
     */
     getfindTime : function(){
      if(this._currentPathsInfo!=undefined)
        return this._currentPathsInfo.findTime;
      return 0;
    },
    _selectPath : function(pathModel){
      var self = this;
      var path = new cityways.widget.map.Path(pathModel);
      self._searchPage.getMapWidget().removeAllPaths();
      self._searchPage.getMapWidget().addPath(path);
      
    },

    selectPath : function(pathIndex){
      var self = this;
      for(var i=1;i <= this._currentPathsInfo.paths.length; i++ ){
        var id = "#path_info_" + i.toString();
        cityways.logger.info(id);
        if( i == pathIndex)
          $(id).show();
        else
          $(id).hide();
      }
      
      self._currentPathIndex = pathIndex - 1;

      var pathModel = self._currentPathsInfo.paths[pathIndex-1];
      if(pathModel.hasGeomData() == false){
       var loader  = new cityways.loader.PathsLoader();
       loader.loadGeomDataForPath(pathModel , function(e){
        self._selectPath(pathModel);
      });
     }else
     {
      self._selectPath(pathModel);
    }

  }

}});