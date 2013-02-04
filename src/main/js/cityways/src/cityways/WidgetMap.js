/**
 * @requires cityways/type/Class.js
 */

/**
 * Class: cityways.WidgetMap

 */
/*Example:
 * <html>
 * <head>
 * 		<script>.../cityways.js</script>
 *		<script>
 * 				function initialize(){
 * 				var map = new cityways.WidgetMap ('map');
 * 				}
 * 		</script>
 * </head>
 * <body onload="initialize()">
 * 		<div id="map"></div>
 * </body>
 * </html>
 * 
 */
cityways.WidgetMap = cityways.type.Class({

	initialize : function(div, options) {
		console.log('map was initialized');
	}

});