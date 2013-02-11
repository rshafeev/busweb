
/**
 * @requires cityways/cityways.js
 */

/**
 * Статический класс, хранит общие статические свойства
 */
cityways.template.html = {

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
			var fileName = cityways.template.HtmlTemplates
					._getFileByTemplateName(templateName);
			loader.loadHtmlTemplates(fileName, function(__templates) {
                        cityways.Util.extend(templates,__templates);
                        callback(templates[templateName]);
            		});
		} else {
			callback(templates[templateName]);
		}

	},

	_getFileByTemplateName : function(templateName) {
		// templateName = template-<file_name>-<name>
		return "main";
	}

};