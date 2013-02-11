/**
 * @requires cityways/Class.js
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
/**
 * [Map description]
 * @constructor
 * @type {cityways.Map}
 * @this {cityways.Map}
 */
cityways.Map = cityways.Class({
    
    div  : null,
    
    mapObj : null,
    
	initialize : function(div, options) {
	    this.div = div;
	    this.mapObj = new cityways.map.GoogleMap(div,options);
	    cityways.Util.extend(this,this.mapObj);
	}

});