/**
 * @requires CityWays/BaseTypes/Class.js
 */

/**
 * Class: CityWays.WidgetMap

 */
/*Example:
 * <html>
 * <head>
 * 		<script>.../CityWays.js</script>
 *		<script>
 * 				function initialize(){
 * 				var map = new CityWays.WidgetMap ('map');
 * 				}
 * 		</script>
 * </head>
 * <body onload="initialize()">
 * 		<div id="map"></div>
 * </body>
 * </html>
 * 
 */
CityWays.WidgetMap = CityWays.Class({

	initialize : function(div, options) {
		console.log('map was initialized');
	}

});