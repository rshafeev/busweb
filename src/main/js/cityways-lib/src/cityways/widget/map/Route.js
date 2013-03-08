/**
 * @overview Class {@link cityways.widget.map.Route}.
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
 * @class cityways.widget.map.Route 
 * @param {cityways.model.RouteModel} routeModel Опции маршрута
 * 
 */
 cityways.widget.map.Route = cityways.Class({
 	constructor : function(routeModel,options) {
 		var self = this;
 		var minZoom = 14;
 		self._routeModel = routeModel;
 		self._stations = [];
 		self._polylines = [];
 		if(options != undefined && options.color != undefined){
 			self._color = options.color;
 		}else {
 			self._color = "blue";
 		}

 		for(var i=0;i < routeModel.reverseWay.stations.length; i++){
 			var stData = routeModel.reverseWay.stations[i];
 			var st = new cityways.widget.map.Station();
 			st.setID(stData.id);
 			st.setLocation(stData.location.lat, stData.location.lon);
 			st.setIcon(cityways.options.getResourcePath() + "images/station.png");
 			st.setTitle(stData.name);
 			if(i==0 || i == routeModel.reverseWay.stations.length -1){
 				st.setMinZoom(0);
 			}else{
 				st.setMinZoom(minZoom);
 			}
 			self._stations.push(st);
 		}

 		for(var i=0;i < routeModel.reverseWay.roads.length; i++){
 			var line = new cityways.maps.Polyline(
 				{	points : routeModel.reverseWay.roads[i],
 					color : self._color,
 					opacity : 0.5,
 					weight : 6
 				});
 			self._polylines.push(line);
 		}

 		for(var i=0;i < routeModel.directWay.stations.length; i++){
 			var stData = routeModel.directWay.stations[i];
 			var st = new cityways.widget.map.Station();
 			st.setID(stData.id);
 			if(i==0 || i == routeModel.reverseWay.stations.length -1){
 				st.setMinZoom(0);
 			}else{
 				st.setMinZoom(minZoom);
 			}
 			st.setLocation(stData.location.lat, stData.location.lon);
 			st.setIcon(cityways.options.getResourcePath() + "images/station.png");
 			st.setTitle(stData.name);
 			self._stations.push(st);
 		}

 		for(var i=0;i < routeModel.directWay.roads.length; i++){
 			var line = new cityways.maps.Polyline(
 				{	points : routeModel.directWay.roads[i],
 					color : self._color,
 					opacity : 0.5,
 					weight : 6
 				});
 			self._polylines.push(line);
 		}

 	},

 	members :  {
 		_routeModel : null,

 		_stations : null,

 		_polylines : null,

 		_color : null,

 		getAllStations : function(){
 			return this._stations;
 		},

 		getAllPolylines : function(){
 			return this._polylines;
 		},

 		getColor : function(){
 			return this._color;
 		}



 	}
 });

