/**
 * @requires cityways/type/Class.js
 */

cityways.loader.PathsLoader = cityways.type.Class({

			/**
			 * 
			 * @param {Object}
			 *            mainPage
			 */
			initialize : function() {

			},
			
			/**
			 * 
 * @param {Object} options Опции, по которым будет производиться поиск крат. пути
 * var opts = {
            cityID : Integer,
            p1 : {
                lat : Double,
                lon : Double
            },
            p2 : {
                lat : Double,
                lon : Double
            },
            outTime : {
                dayID : 'c_Sunday',
                timeStart : Integer(secs)
            },
            algStrategy : 'c_time', 'c_cost',
            usageRouteTypes : [
               {
            discount : 1.0,
            route_type_id : "c_route_station_input"
        },
        ...
            ]
        };
 * @param {Object} resultFunc Callback функция
			 */
			findShortestPaths : function(options, resultFunc) {
				$.ajax({
							url : cityways.ResourceURI + "paths/find.json",
							type : "POST",
							data : {data: $.toJSON(options ) },
							success : function(data) {
							    if(resultFunc == null)
							         throw new Error("resultFunc was not defined");
								resultFunc({
											data : data
										});
							},
							dataType : "application/json"
						});
			}
		});