/**
 * @overview class cityways.map.GoogleMap
 * @copyright 
 * 2012,PremiumGIS Inc. All Rights Reserved. <a href="http://premiumgis.com">PremiumGIS</a>
 * Project url: <a href="http://ways.in.ua">cityways</a>
 * 
 * @author <a href="mailto:rs@premiumgis.com">Roman Shafeyev</a>
 * 
 * @requires cityways/Class.js
 */

/**
 * 
 * @class cityways.map.GoogleMap
 * @extends {cityways.Map}
 * @example
 * <html>
 * <head>
 * 		<script>.../cityways.js</script>
 *		<script>
 * 				function initialize(){
 * 				var map = new cityways.map.GoogleMap('map');
 * 				}
 * 		</script>
 * </head>
 * <body onload="initialize()">
 * 		<div id="map"></div>
 * </body>
 * </html>
 */
cityways.map.GoogleMap = cityways.Class({
    
    /**
     * ID dom элемента, в который нужно поместить карту
     * @type {String}
     * @private
     */
    div  : null,
  
    /**
     * Объект google.maps.Map
     * @type {google.maps.Map}
     * @private
     */
    googleMap : null,


 	/**
 	 * @constructor
	 * @param  {String} div     ID dom элемента, в который будет помещена карта
	 * @param  {Object} options Начальные опции карты
	 * @example Структура объекта options:
	 * options = {
	 *      	  zoom        : {Number},             // Масштаб карты
	 *      	  minZoom     : {Number},             // Минимальный масштаб
	 *      	  center : {						  // Координаты центральной точки карты 
	 * 			     lat : {Number},	              // Широта
	 * 			     lng : {Number}	                  // Долгота
	 * 			  }
	 * };
 	 */
	initialize : function(div, options) {
	    this.div = div;

	    var latlng = new google.maps.LatLng(options.center.lat,
				options.center.lng);
	    
	    var googleMapOptions = {
			zoom : options.zoom,
			center : latlng,
			mapTypeId : google.maps.MapTypeId.ROADMAP,
			minZoom : options.minZoom
		};
	    cityways.logger.info(googleMapOptions);
	    var self = this;
	    $(document).ready(function() {
			self.googleMap = new google.maps.Map(document.getElementById(div),googleMapOptions);
			self.googleMap.setOptions({
					draggableCursor : 'crosshair'
				});
			self._registerListeners();
			cityways.logger.info('Google map was initialized');
		});
	    

	},


	_registerListeners : function() {
		var self = this;
		cityways.logger.info(self);
		google.maps.event.addListener(self.googleMap, 'click', function(e) {
			var args = {
				lat : e.latLng.lat(),
				lng : e.latLng.lng()
			};
			cityways.event.triggerEvent(self, cityways.map.event.ON_MAP_CLICK, args);
		});
	}

});