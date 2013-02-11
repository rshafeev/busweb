/**
 * @author Roman Shafeyev
 */

/**
 * @requires cityways/Class.js
 */

/*Example:
 * <html>
 * <head>
 * 		<script>.../cityways.js</script>
 *		<script>
 * 				function initialize(){
 * 				var map = new cityways.map.GoogleMap ('map');
 * 				}
 * 		</script>
 * </head>
 * <body onload="initialize()">
 * 		<div id="map"></div>
 * </body>
 * </html>
 * 
 */

cityways.map.GoogleMap = cityways.Class({
    div  : null,
    
	initialize : function(div, options) {
	    this.div = div;
	    cityways.log('Google map was initialized');
	}

});