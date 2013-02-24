/**
 * @overview Class {@link cityways.loader.PathsLoader}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 * 
 * @requires cityways/loader.js
 * @requires cityways/Class.js
 */

 /**
  * [PathsLoader description]
  * @class cityways.loader.PathsLoader
  */
  cityways.loader.PathsLoader = cityways.Class({

  	/* constructor */
  	constructor : function() {

  	},

    members : {
	/**
     * @memberOf cityways.loader.PathsLoader.prototype
     * @param {Object}   options Опции, по которым будет производиться поиск крат. пути
     * @param {Function} callback Callback функция
     * @example
     * var options = {
     *       cityID : Integer,
     *       p1 : {
     *           lat : Double,
     *           lon : Double
     *       },
     *       p2 : {
     *           lat : Double,
     *           lon : Double
     *       },
     *       outTime : {
     *           dayID : 'c_Sunday',
     *           timeStart : Integer(secs)
     *       },
     *       algStrategy : 'c_time', 'c_cost',
     *       usageRouteTypes : [
     *          {
     *       discount : 1.0,
     *       route_type_id : "c_route_station_input"
     *   },
     *   ...
     *       ]
     *   };
     */
     findShortestPaths : function(options, callback) {
        cityways.logger.info("findShortestPaths",options);
        if(callback == null)
            throw new Error("resultFunc was not defined");
        var url = cityways.options.ServerHost + "paths/find.json";
        cityways.logger.info("url: " + url);

        var args = {
            error : null,
            paths : [],
            findTime : 0
        };
        $.ajax({
         url : url,
         type : "POST",
         data : {data: $.toJSON(options ) },
         success : function(e) {
            try{
               
                var obj = $.parseJSON(e);

                if(obj.error != undefined||  obj.paths == undefined || obj.paths.length == 0)
                {
                    args.error = e.error;
                    callback(args);
                    return;
                }
                cityways.logger.info(obj);
                for (var i = 0; i < obj.paths.length; i++) 
                {
                    var path = new cityways.model.PathModel(obj.paths[i]);
                    path.startLocation = options.p1;
                    path.finishLocation = options.p2;
                    args.paths.push(path);
                }

                args.findTime = obj.findTime;
                callback(args);
                return;
            }
            catch(e){
                cityways.logger.error("Catch error", e, data);
                callback({  error : e });
                return;
            }
        }
    });
},

    /**
     * [getPathGeom description]
     * @memberOf cityways.loader.PathsLoader.prototype
     * @param  {cityways.model.PathModel}   path     [description]
     * @param  {Function} callback [description]
     */
     loadGeomDataForPath : function(path,callback){
       cityways.logger.info("findShortestPaths");
       if(callback == null)
        throw new Error("resultFunc was not defined");
    var url = cityways.options.ServerHost + "paths/get.json";
    var inputData = {
        p1 : path.startLocation,
        p2 : path.finishLocation,
        routeParts : []
    };

    for (var i = 0; i < path.routes.length; i++) {
        inputData.routeParts.push({
            ID : path.routes[i].ID,
            startInd : path.routes[i].startInd,
            finishInd : path.routes[i].finishInd
        });
    }

    cityways.logger.info("inputData:",inputData);
    $.ajax({
     url : url,
     type : "POST",
     data : {data: $.toJSON(inputData) },
     success : function(data) {
        try{
           
            var obj = $.parseJSON(data);
            path.setGeomData(obj);
            var args ={
                      path: path, 
                      success : true
                      };
            callback(args);
            return;
        }
        catch(e){
            cityways.logger.error("Catch error", e, data);
            callback({  error : e });

        }
    }
});

}
}
});