/**
 * @overview Class {@link cityways.EventListener}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 * 
 * @requires cityways/Class.js
 */


/**
 * [EventListener description]
 * @class cityways.EventListener
 */
cityways.EventListener = cityways.Class({
    constructor :  function(object, evt, callback) {
			this.object = object;
			this.evt = evt;
			this.callback = callback;
	},

    members : { 

	object : null,

	evt : null,

	callback : null

	}
});