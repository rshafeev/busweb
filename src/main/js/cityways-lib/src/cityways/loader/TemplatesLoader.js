/**
 * @overview Class {@link cityways.loader.TemplatesLoader}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 * 
 * @requires cityways/loader.js
 * @requires cityways/Class.js
 */

 /**
  * [TemplatesLoader description]
  * @class cityways.loader.TemplatesLoader
  */
  cityways.loader.TemplatesLoader = cityways.Class({

  	constructor : function() {

  	},

  	members : {

	/**
	 * [loadHtmlTemplates description]
	 * @function
	 * @memberOf cityways.loader.TemplatesLoader.prototype
	 * @param  {String}   templateFile [description]
	 * @param  {Function} callback     [description]
	 */
	 loadHtmlTemplates : function(templateFile, callback) {
	 	if (callback == null)
	 		throw new Error("callback was not defined");
	 	var url = cityways.options.getResourcePath() + "templates/" + templateFile + ".xml";
	 	$.ajax({
	 		url : url,
	 		success : function(templatesHtml) {
	 			var ts = templatesHtml.getElementsByTagName("template");
	 			var templates = {};
	 			for (var i = 0; i < ts.length; i++) {
	 				try {
	 					cityways.logger.info(ts[i].textContent);
	 					cityways.logger.info(ts[i].getAttribute("id"));
	 					var key = ts[i].getAttribute("id");
	 					var value = _.template(ts[i].textContent);
	 					templates[key] = value;
	 					cityways.log("ok");
	 				} catch (err) {

	 				}
	 			}
	 			callback(templates);
	 		}
	 	});
	 }
	}
});