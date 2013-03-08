/**
 * @overview Class {@link cityways.page.ColorsGenerator}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 * 
 * @requires cityways/page.js
 * @requires cityways/Class.js
 */

/**
 * [SearchPage description]
 * @class cityways.page.ColorsGenerator
 * @param  {Object} options [description]
 */
 cityways.page.ColorsGenerator = cityways.Class({
 	constructor :  function() {
 		var self = this;

 		self._numOfSteps = 200;
 		self._step = 0;
 		self._colors = [];
 		var colors = [];
 		for(var i=0; i < self._numOfSteps; i++){
 			var color = self._rainbow(i, self._numOfSteps);
 			colors.push(color);
 		}
 		for(var i=0; i < self._numOfSteps; i++){
 			var ind =  parseInt(Math.floor(Math.random() * (colors.length  -1)) );
 			if(colors.length ==0)
 				break;
 			if(ind <0 || ind >= colors.length)
 				ind = 0;
 			self._colors.push(colors[ind]);
 			colors.splice(ind,1);
 		}
 		
 			
 	},

 	members : { 
 		_numOfSteps : null,

 		_step : null,
 		
 		_colors : null,

 		next : function(){
 			var self = this;
 			self._step  = self._step  + 1;
 			if(self._step >= self._numOfSteps)
 				self._step = 0;
 			return self._colors[self._step-1];
 		},
 		/**
 		 * This function generates vibrant, "evenly spaced" colours (i.e. no clustering). 
 		 * This is ideal for creating easily distiguishable vibrant markers in Google Maps and other apps.
 		 * HSV to RBG adapted from: http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript
 		 * @author Adam Cole
 		 * @param  {[type]} numOfSteps [description]
 		 * @param  {[type]} step       [description]
 		 * @return {[type]}            [description]
 		 */
 		 _rainbow : function(numOfSteps, step) {
 		 	var r, g, b;
 		 	var h = step / numOfSteps;
 		 	var i = ~~(h * 6);
 		 	var f = h * 6 - i;
 		 	var q = 1 - f;
 		 	switch(i % 6){
 		 		case 0: r = 1, g = f, b = 0; break;
 		 		case 1: r = q, g = 1, b = 0; break;
 		 		case 2: r = 0, g = 1, b = f; break;
 		 		case 3: r = 0, g = q, b = 1; break;
 		 		case 4: r = f, g = 0, b = 1; break;
 		 		case 5: r = 1, g = 0, b = q; break;
 		 	}
 		 	var c = "#" + ("00" + (~ ~(r * 255)).toString(16)).slice(-2) + 
 		 	("00" + (~ ~(g * 255)).toString(16)).slice(-2) + ("00" + 
 		 		(~ ~(b * 255)).toString(16)).slice(-2);
 		 	return (c);
 		 }
 		}
 	});



