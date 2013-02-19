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

        $.ajax({
         url : cityways.options.ServerHost + "/paths/find.json",
         type : "POST",
         data : {data: $.toJSON(options ) },
         success : function(data) {
            try{
                cityways.logger.info(data);
                var obj = $.parseJSON(data);
                callback(obj);
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