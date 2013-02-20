/**
 * @overview Namespace {@link cityways.template.html}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 *
 * @requires cityways/template.js
 */

/**
 * @namespace cityways.template.html
 */
cityways.template.html = {

	/**
	 * [_templates description]
	 * @private
	 * @type {Object}
	 */
	_templates : {},

	/**
	 * Возвращает html шаблон со словаря _templates. Если такой не сущействует,
	 * пытается загрузить его с сервера. Функция ассинхронная.
	 * @param  {[type]}   templateName [description]
	 * @param  {Function} callback     [description]
	 */
	get : function(templateName, callback) {
		var templates = cityways.template.html._templates;
		if (templates[templateName] === undefined) {
			var loader = new cityways.loader.TemplatesLoader();
			var fileName = cityways.template.html._getFileByTemplateName(templateName);
			loader.loadHtmlTemplates(fileName, function(e) {
                        cityways.extend(cityways.template.html._templates,e);
                        cityways.logger.info(templates);
                        callback(templates[templateName]);
            		});
		} else {
			callback(templates[templateName]);
		}

	},

	/**
	 * [_getFileByTemplateName description]
	 * @private
	 * @param  {String} templateName [description]
	 * @return {String}              [description]
	 */
	_getFileByTemplateName : function(templateName) {
		// templateName = template-<file_name>-<name>
		return "main";
	}

};