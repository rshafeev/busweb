/**
 * @overview Class {@link cityways.widget.map.Path}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 * 
 * @requires cityways/maps.js
 * @requires cityways/Class.js
 */


/**
 * [Marker description]
 * @class cityways.widget.map.Path
 * @param {cityways.model.PathModel} pathModel Опции маркера
 * 
 */
 cityways.widget.map.Path = cityways.Class({
 	constructor : function(pathModel) {
 		var self = this;
 		self._pathModel = pathModel;
 		self._stations = [];
 		self._polylines = [];

 		for(var i=0;i < pathModel.routes.length; i++){
 			var roadsData = pathModel.routes[i].roads;
 			var stationsData =  pathModel.routes[i].stations;
 			for(var j=0;j < pathModel.routes[i].stations.length; j++){
 				var stData = pathModel.routes[i].stations[j];
 				var st = new cityways.widget.map.Station();
 				st.setLocation(stData.location.lat, stData.location.lon);
 				st.setIcon(cityways.options.getResourcePath() + "images/station.png");
 				st.setTitle(stData.name);
 				self._stations.push(st);

 			}
 			for(var j=0;j < pathModel.routes[i].roads.length; j++){
 				var line = new cityways.maps.Polyline(
 					{	points : pathModel.routes[i].roads[j],
 						color : "blue",
 						opacity : 0.5,
 						weight : 6
 					});
 				self._polylines.push(line);
 			}
 		}
 	},

 	members :  {
 		_pathModel : null,

 		_stations : null,

 		_polylines : null,

 		getAllStations : function(){
 			return this._stations;
 		},

 		getAllPolylines : function(){
 			return this._polylines;
 		}



 	}
 });

