/**
 * @overview class cityways.EventListener
 * @copyright 
 * 2012,PremiumGIS Inc. All Rights Reserved. <a href="http://premiumgis.com">PremiumGIS</a>
 * Project url: <a href="http://ways.in.ua">cityways</a>
 * 
 * @author <a href="mailto:rs@premiumgis.com">Roman Shafeyev</a>
 * 
 * @requires cityways/Class.js
 */


/**
 * [EventListener description]
 * @class cityways.EventListener
 */
cityways.EventListener = cityways.Class({

	object : null,

	evt : null,

	callback : null,

	/**
	 * @constructor
	 * @param  {[type]}   object   [description]
	 * @param  {[type]}   evt      [description]
	 * @param  {Function} callback [description]
	 * @return {[type]}            [description]
	 */
	initialize : function(object, evt, callback) {
			this.object = object;
			this.evt = evt;
			this.callback = callback;
	}
});