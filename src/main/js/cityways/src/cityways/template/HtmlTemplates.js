
/**
 * @requires cityways/Console.js
 */

/**
 * Статический класс, хранит общие статические свойства
 */
cityways.template.HtmlTemplates = {

	_templates : {},

	/**
	 * Возвращает html шаблон со словаря _templates. Если такой не сущействует,
	 * пытается загрузить его с сервера Функция ассинхронная,
	 * 
	 * @param {Object}
	 *            templateName
	 * @param {Object}
	 *            callback
	 */
	get : function(templateName, callback) {
		var templates = cityways.template.HtmlTemplates._templates;
		if (templates[templateName] === undefined) {
			var loader = new cityways.loader.TemplatesLoader();
			var fileName = cityways.template.HtmlTemplates._getFileNameByTemplateName(templateName);
			loader.loadHtmlTemplates(fileName, function(__templates) {
						cityways.Util.extend(templates, __templates);
						callback(templates[templateName]);
					});
		} else {
			callback(templates[templateName]);
		}

	},

	_getFileNameByTemplateName : function(templateName) {
		var templateName = new String(templateName);
		var regTemplate = /template\-/gi;
		var template = new String('template');
		var regDef = /-/;
		if (templateName == "") {
			return null;
		}
		if (!templateName.match(regTemplate) || !templateName.match(regDef)) {
			return null;
		}
		if (templateName.slice(0, 8) != template) {
			return null;
		} else {
			var slicetemplateName = templateName.slice(9);
			var to = slicetemplateName.search('-');
			var fileName = slicetemplateName.substring(0, to);
			return fileName;
		}
	}

};