/**
 * @overview Namespace {@link cityways.helper.document}.
 * @see Project url: {@link http://ways.in.ua}.
 * @copyright 
 * CityWays-lib is copyright (c) 2012, {@link http://premiumgis.com|PremiumGIS} Inc. All Rights Reserved. 
 * CityWays-lib is free software, licensed under the MIT license. 
 * See the file {@link http://api.ways.in.ua/license.txt|license.txt} in this distribution for more details.
 * @author Roman Shafeyev <rs@premiumgis.com>
 * 
 * @requires cityways/helper.js
 */

 /**
 * Включает в себя вспомогательные функции для работы со стилями. 
 * @namespace cityways.helper.document
 */
 cityways.helper.document = {

	/**
 	* Подключает css файл к текущему html документу
 	* @param  {String} cssFileName Путь к css файлу
 	* @param  {String} method Способ записи в документ. "write" - запись с помощью document.write(). "inner" - с помощью функции document.innerHtml
 	* @return {void}            
 	*/
 	appendCSSFile : function(cssFileName,method) {
 		cityways.logger.debug(method,cssFileName);
 		var css = "<link rel=\"stylesheet\" href=\"" + cssFileName + "\" type=\"text/css\">";
 		if(method == "write" && (document.readyState == undefined || (document.readyState != "interactive" &&
  	                                        document.readyState != "complete")))
 			document.write(css);
 		else
 		if(method == "inner")
 		{
 			var h = document.getElementsByTagName('head');
 			if(h != undefined && h.length >0){
 				var link = document.createElement('link');
 				link.setAttribute('type','text/css');
				link.setAttribute('rel','stylesheet');
				link.setAttribute('href',cssFileName);
				h[0].appendChild(link);
 			}
 		}
  	},

	appendJSFile : function(jsFileName,method) {
 		var scriptFile = "<script type=\"text/javascript\" src=\"" + jsFileName +  "\"></script>";

 	},


	/**
	 * Подключает css файл к текущему html документу в зависимости от  браузера клиента
	 * @param {String} cssFiles Директория, в которой ле к css файлам
	 * @param {Object} cssOptions Хранит связь css файлов и поддерживаемых ими браузеров. 
	 * @return {String} Путь к подключенному css файлу
	 * @example Приведем пример выбора нужного css файла в зависимости от  браузера клиента
	 * var cssFiles = [
	 *         {
	 *             name : "style.css"
	 *         },
	 *         {
	 *             name : "style_ie7.css",
     *             browsers : {
     *                          "msie" : {min : 7.0}
     *                        },
	 *         {
	 *             name : "style_ff.css",
	 *             browsers : {
	 *                           "mozilla" :  {min : 7.0, max : 16.0}
	 *                        }
	 *         }];
	 * var cssFilename = cityways.helper.styles.includeCSSFile("media/css",cssFiles);
	 * // cssFilename = "media/css/style.css", если текущий браузер не ff и ie
	 * // cssFilename = "media/css/style_ie7.css", если текущий браузер ie7+
	 * // cssFilename = "media/css/style_ff.css", если текущий браузер ff версии [7.0, 16.0]
	 */
	 selectCSSFile : function(filePath, cssFiles) {
	 	var browser = {
	 		name : cityways.util.browser(),
	 		version : cityways.util.browserVersion()
	 	};
	 	var fileName =  cityways.helper.document._selectCSSFile(cssFiles,browser);
	 	if(fileName == null)
	 		throw new Error("includeCSSFile() was not found css file");
	 	return filePath + fileName;
	 },

	/**
  	* Выбирает css файл в зафисимости от текущего браузера.
  	* @private
  	* @param  {Array}  cssFiles  		 Элементы массива хранят в себе названия сss-файлов и браузеры, которые они поддерживают.
  	* @param  {Object} browser 			 Информация о браузере. Хранит версию и название текущего браузера.
 	* @param  {String} browser.name      Тип браузера("msie", "mozilla").
 	* @param  {Number} browser.version   Версия браузера.
 	* @return {String} 					 Название css файла. 
 	* @example 
 	* // Пример входных параметров:
 	* 
 	* var browser  = {
 	*      name    : "msie",
 	*      version : 7.0
 	* };
 	* 
 	* var cssFiles = [
	*         {
	*             name : "style.css"
	*         },
	*         {
	*             name : "style_ie7.css",
    *             browsers : {
    *                          "msie" : {min : 7.0}
    *                        },
	*         {
	*             name : "style_ff.css",
	*             browsers : {
	*                           "mozilla" :  {min : 7.0, max : 16.0}
	*                        }
	*         }];
	* // Вызов функции:
	* 
	* var selectedFile = cityways.styles._selectCSSFile(cssFiles,browser);
 	*/
 	_selectCSSFile : function(cssFiles,browser) {
 		var defaultFile = null;
 		var selectedFile = null;
 		
 		for(var i=0; i < cssFiles.length; i++ ){

 			if(cssFiles[i].browsers == undefined &&   cssFiles[i].name != undefined){
 				defaultFile = cssFiles[i].name;
 			}
 			else if (cssFiles[i].browsers != undefined){

 				var cssBrowser = cssFiles[i].browsers[browser.name];
 				if(cssBrowser != undefined){
 					var min_v = cssBrowser.min;
 					var max_v = cssBrowser.max;
 					if( (min_v == undefined && max_v == undefined) ||
 							(min_v == undefined && max_v >= browser.version) ||
 							(max_v == undefined && min_v <= browser.version) ||
 							(min_v <= browser.version && max_v >= browser.version)){
 								selectedFile = cssFiles[i].name;
 						}
 				}
 			}
 		}
 		
 		if(selectedFile != undefined)
 			return selectedFile;
 		return defaultFile;
 	}
 };
