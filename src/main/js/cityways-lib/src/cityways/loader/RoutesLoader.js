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
  cityways.loader.RoutesLoader = cityways.Class({

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
     getRoute : function(routeID, callback) {
        cityways.logger.info("findShortestPaths",options);
        if(callback == null)
            throw new Error("resultFunc was not defined");
        var url = cityways.options.ServerHost + "routes/get/" + routeID.toString();
        cityways.logger.info("url: " + url);

        var args = {
            error : null,
            route : null
        };

        $.ajax({
         url : url,
         type : "GET",
         success : function(e) {
            try{
                var routeData = $.parseJSON(e);
                cityways.logger.debug(routeData);
                if(routeData.error != undefined)
                {
                    args.error = routeData.error;
                    callback(args);
                    return;
                }
                args.route = new cityways.model.RouteModel(routeData);
                callback(args);
                return;
            }
            catch(e){
                args.error = e;
                callback(args);
                return;
            }
        }
    });
    }

}
});